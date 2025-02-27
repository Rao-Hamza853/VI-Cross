import { HiOutlineViewGrid } from "react-icons/hi";
import { RxCalendar } from "react-icons/rx";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";

export const links = [
    {
        id : 1,
        title : "User Management",
        icon: HiOutlineViewGrid,
        path : "/user-management"
    },
    {
        id : 2,
        title : "Trade Booths",
        icon: RxCalendar,
        path : "/trade-booths"
    },
    {
        id : 3,
        title : "Support",
        icon: IoChatboxEllipsesOutline,
        path : "/support"
    },
    {
        id : 4,
        title : "Trade Booths Lists",
        icon: IoCubeOutline,
        path : "/list-trade-booths"
    }
]