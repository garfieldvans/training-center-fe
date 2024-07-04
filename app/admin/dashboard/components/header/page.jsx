"use client";

import React, { useState } from "react";
import { adminMenus } from "../../../../utils/data";
import { MdClose, MdLogout, MdMenu } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { FaRegBell, FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { data: session, status } = useSession();


  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    // console.log(isSidebarOpen);
  };

  const currentPath = usePathname();
  const processedPath = currentPath.split("/").filter(Boolean);
  const displayPath =
    processedPath.length > 1 ? processedPath[1] : processedPath[0];
  return (
    <div>
      <div className=" fixed top-0 w-full flex flex-row items-center justify-between py-4 md:py-5 bg-bg-external h-16 pl-20 md:pr-10 pr-4 ">
        <span className="text-gray-100 capitalize font-bold text-lg md:text-2xl">{displayPath}</span>
        <div className=" flex flex-row gap-4 items-center bg-white rounded-xl px-4 py-1">
          <div className="bg-slate-200 p-2 rounded-lg">
            <button type="button" className="flex flex-row items-center">
              <FaRegBell size={15} />
            </button>
          </div>
          <div className="flex text-sm flex-row gap-2 items-center">
            <FaRegCircleUser size={15} />
            <h1 className="capitalize md:block hidden">{session?.fullname}</h1>
          </div>
        </div>
      </div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 h-screen bg-bgPrimary group transition-all duration-200 ease-in-out w-16 hover:w-60 md:inline hidden hover:shadow-[0px_5px_9px_0px_#667eea]"
        aria-label="Sidebar"
      >
        <div className="h-full overflow-hidden flex flex-col pb-10 justify-between">
          <div className=" font-medium ">
            <a href="/dashboard">
              <div className="p-2 text-bgPrimary hidden md:flex text-1xl font-semibold bg-gradient-to-r from-orange-400 to-orange-600 md:flex-row md:justify-center items-center w-auto h-16 text-center border-r border-gray-400">
                {/* Default Logo */}
                <img
                  src="/assets/image/head_logo.png"
                  alt="edumatrix-logo"
                  className="max-h-12 group-hover:hidden"
                />
                {/* Hovered Logo */}
                <img
                  src="/assets/image/dashlogo.png"
                  alt="edumatrix-logo-hover"
                  className="max-h-12 hidden group-hover:block"
                />
              </div>
            </a>
            <div className="h-px bg-gray-300 w-full " />
            <div className="flex flex-col">
              {adminMenus.map((item, i) => {
                return (
                  <div
                    key={i}
                    className=" flex  pl-2 text-white rounded-lg mt-2 hover:bg-orange-500 transition-all duration-200 ease-in-out"
                  >
                    <a
                      href={item.link}
                      className="grid grid-cols-7 py-3 w-full pl-3  justify-center items-center"
                    >
                      <item.icon className="text-xl me-10" />
                      <span className="hidden group-hover:block text-sm col-span-6">
                        {item.name}
                      </span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" flex py-3 pl-6 text-white rounded-lg hover:bg-orange-500 transition-all duration-200 ease-in-out font-medium">
            <button
              className="grid grid-cols-7"
              onClick={() => signOut({ callbackUrl: "/", redirect: true })}
            >
              <MdLogout className="text-xl" />
              <span className="hidden group-hover:block text-sm ">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* mobile menu */}
      <div className="fixed top-0 left-0 z-40 bg-bgPrimary text-white p-5 md:hidden flex items-center font-bold text-2xl flex-row justify-content h-16">
        <button className="flex items-center" onClick={toggleSidebar}>
          {!isSidebarOpen ? <MdMenu /> : <MdClose />}
        </button>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-30 bg-bgPrimary md:hidden w-5/12 text-white pt-16 group transition-all duration-300 pl-4 flex flex-col justify-between">
          <div>
            {adminMenus.map((menu, i) => {
              return (
                <div
                  key={i}
                  className="my-2 p-3 text-white rounded-l-xl hover:bg-indigo-700"
                >
                  <Link
                    href={menu.link}
                    onClick={toggleSidebar}
                    className="flex flex-row gap-x-3 items-center"
                  >
                    <span className="group-hover:inline-block text-sm">
                      {menu.name}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="flex items-center p-3 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 ease-in-out">
            <button
              className="flex flex-row gap-x-2 items-center"
              onClick={() => signOut({ callbackUrl: "/", redirect: true })}
            >
              <MdLogout className="text-xl" />
              <span className="inline-block text-sm">Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
