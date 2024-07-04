import { MdConstruction, MdDashboard, MdPerson } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { FaMapMarkedAlt, FaUserCog } from "react-icons/fa";
import { BiTask } from "react-icons/bi";

export const adminMenus = [
    {
        name: "Dashboard",
        link: "/admin/dashboard",
        icon: MdDashboard
    },
    {
        name: "Users Management",
        link: "/admin/dashboard/user",
        icon: MdPerson
    },
    {
        name: "Task Management",
        link: "/admin/dashboard/task",
        icon: GoTasklist
    },
    {
        name: "Guide Management",
        link: "/admin/dashboard/guide",
        icon: FaMapMarkedAlt
    },
]

export const trainingMenus = [
    {
        name: "Dashboard",
        link: "/training/dashboard",
        icon: MdDashboard
    },
    {
        name: "Data Diri",
        link: "/training/dashboard/user",
        icon: FaUserCog
    },
    {
        name: "Task",
        link: "/training/dashboard/task",
        icon: BiTask
    },
]