import React from "react";
import { FaRegBell, FaRegCircleUser } from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";

const Dasboard = () => {
  return (
    <div className="min-h-screen">
    <div className="flex flex-row px-6 gap-10 justify-between ">
      <div className="bg-white col-span-2 px-10 py-6 rounded-xl max-h-48">
        <h1 className="border-l-2 border-bgPrimary rounded-bl px-2 text-xl font-bold">
          Menus
        </h1>
        <div className="grid grid-cols-3 gap-10 ">
          <a
            href="/dashboard/user"
            className="mt-4 flex flex-col p-2 text-sm text-white justify-center gap-2 min-h-20 items-center bg-bgPrimary hover:bg-blue-950 rounded-xl"
          >
            <FaUserCog size={25} className="" />
            <div>
              <span>Users Management</span>
            </div>
          </a>
          <a
            href="/dashboard/user"
            className="mt-4 flex flex-col p-2 text-sm text-white justify-center gap-2 min-h-20 items-center bg-bgPrimary hover:bg-blue-950 rounded-xl"
          >
            <TbReportAnalytics size={25} className=" " />
            <div>
              <span>Reports</span>
            </div>
          </a>
          <a
            href="/dashboard/user"
            className="mt-4 flex flex-col p-2 text-sm text-white justify-center gap-2 min-h-20 items-center bg-bgPrimary hover:bg-blue-950 rounded-xl"
          >
            <FaUserCog size={25} className=" " />
            <div>
              <span>Users Management</span>
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white p-6 rounded-xl w-4/12">
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

export default Dasboard;
