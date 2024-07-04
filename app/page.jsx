"use client";

import React, { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import loginBg from "../public/assets/image/bg.png";

const AuthLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      // console.log("Response from signIn:", response);

      if (response?.ok) {
        const tokenResponse = await fetch("/api/auth/session");
        const session = await tokenResponse.json();
        const token = session?.accessToken;
        const role = session?.role;

        if (role === "admin") {
          window.location.href = "/admin/dashboard";
        } else {
          window.location.href = "/training/dashboard";
        }
      } else {
        setError("Email or password is incorrect.");
        console.error("Error response:", response);
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      setError("Sign-in failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full justify-center flex md:py-6 items-center bg-bgPrimary min-h-screen text-black">
      <div className=" bg-white md:w-9/12 w-10/12 sm:w-10/12 lg:w-8/12 h-content h-5/6 rounded-3xl grid md:grid-cols-2 grid-cols-1">
        <form className="py-6 px-10 w-full h-content" onSubmit={handleSubmit}>
          <div className=" w-full flex justify-center">
            <img
              src="/assets/image/logo.png"
              alt="logo"
              className="h-28 mb-10"
            />
          </div>
          <div className="py-4">
          {error && <div className="text-red-500 text-sm">{error}</div>}
            <label
              htmlFor="email"
              className="block mb-2 text-bgPrimary text-sm font-bold "
            >
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
              className="bg-white mb-4 border border-slate-300 focus:border-slate-600 text-black sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:outline-0"
              placeholder="user@example.com"
              required
            />
            <label
              htmlFor="password"
              className="block mb-2 text-bgPrimary text-sm font-bold "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="bg-white border border-slate-300 focus:border-slate-600 text-black sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:outline-0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
            />
            <div>
              <a href="#" className="w-min-content">
                <h1 className="text-bgPrimary text-xs mt-2 hover:text-bold hover:underline text-end italic ">
                  Lupa Password?
                </h1>
              </a>
            </div>
          </div>
          <div className="w-full mt-2">
            <button
              className="bg-blue-900 font-semibold text-white rounded-lg text-base w-full py-2"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "LOADING..." : "LOGIN"}
            </button>
          </div>
        </form>
        <div className="h-full w-full hidden md:block">
          <img
            src="/assets/image/bg.png"
            alt="Background Image"
            className=" w-full h-full m-auto rounded-r-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;
