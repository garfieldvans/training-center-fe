'use client'

import React from "react";
import { FaRegBell, FaRegCircleUser } from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { useSession } from "next-auth/react";
import { adminMenus } from "../../utils/data";

const AdminDasboard = () => {
  const { data: session, status } = useSession();

  return (
    <div className="min-h-screen">
    <div className="flex md:flex-row flex-col px-6 gap-10 md:justify-between justify-center">
      <div className="bg-white p-6 rounded-xl h-fit">
        <h1 className="border-l-2 border-bgPrimary rounded-bl px-2 text-xl font-bold">
          Menu
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-x-6 gap-y-3 mt-6 text-center">
          {adminMenus.map((menu, i) => {
            return (
              <a href={menu.link} key={i} className="text-xs md:text-sm p-4 flex flex-col bg-bgPrimary justify-center gap-y-2 items-center rounded-lg text-center text-white ">
                <menu.icon size={24} />
                <span>{menu.name}</span>
              </a>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white p-6 rounded-xl md:w-5/12 w-full">
        <h1 className="border-l-2 border-bgPrimary rounded-bl px-2 text-xl font-bold">
          Pengumuman
        </h1>
        <div className="bg-gray-200 p-2 rounded">
          <a href="#" className="hover:underline">
            <h1 className="text-sm font-semibold py-1">Here is the title</h1>
          </a>
          <p className="line-clamp-2 text-justify text-gray-600 text-sm	">
            Content Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Eum libero, dignissimos cum magni numquam assumenda corporis iste
            fugit dolorum vitae vero odit, maiores ipsa hic necessitatibus neque
            facilis nam molestiae.
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <a href="#" className="hover:underline">
            <h1 className="text-sm font-semibold py-1">Here is the title</h1>
          </a>
          <p className="line-clamp-2 text-justify text-gray-600 text-sm	">
            Content Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Eum libero, dignissimos cum magni numquam assumenda corporis iste
            fugit dolorum vitae vero odit, maiores ipsa hic necessitatibus neque
            facilis nam molestiae.
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <a href="#" className="hover:underline">
            <h1 className="text-sm font-semibold py-1">Here is the title</h1>
          </a>
          <p className="line-clamp-2 text-justify text-gray-600 text-sm	">
            Content Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Eum libero, dignissimos cum magni numquam assumenda corporis iste
            fugit dolorum vitae vero odit, maiores ipsa hic necessitatibus neque
            facilis nam molestiae.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminDasboard;
