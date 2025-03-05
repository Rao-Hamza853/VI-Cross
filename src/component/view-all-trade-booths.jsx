import React from "react";
import profilePic from "../assets/img/profile-vi.png";
import SearchBox from "./ui/search-box";
import NotificationBtn from "./ui/notification-btn";
import ProfileImg from "./ui/profile-img";
import { BsThreeDotsVertical } from "react-icons/bs";
import { boothList1 } from "../lib/constants2";
import AcceptBtn from "./ui/accept-btn";

const ViewAllTradeBoothsComp = () => {
  const tradeBoothsList = [
    {
      status: "Pending",
    },
    {
      status: "Active",
    },
    {
      status: "Pending",
    },
    {
      status: "Active",
    },
    {
      status: "Pending",
    },
    {
      status: "Pending",
    },
    {
      status: "Active",
    },
    {
      status: "Active",
    },
    {
      status: "Active",
    },
    {
      status: "Active",
    },
    {
      status: "Pending",
    },
    {
      status: "Pending",
    },
    {
      status: "Pending",
    },
    {
      status: "Pending",
    },
    {
      status: "Active",
    },
    {
      status: "Active",
    },
    {
      status: "Pending",
    },
    {
      status: "Active",
    },
    {
      status: "Pending",
    },
    {
      status: "Active",
    },
    {
      status: "Pending",
    },
    {
      status: "Active",
    },
    {
      status: "Pending",
    },
    {
      status: "Pending",
    },
    {
      status: "Pending",
    },
    {
      status: "Active",
    },
    {
      status: "Pending",
    },
    {
      status: "Active",
    },
    {
      status: "Pending",
    },
    {
      status: "Active",
    },
    {
      status: "Pending",
    },
    {
      status: "Pending",
    },
    {
      status: "Pending",
    },
  ];
  return (
    <div className="bg-secondary h-screen w-full">
      <header className="h-20 px-5 xl:px-8 py-5 2xl:py-4 flex items-center justify-between">
        <h3 className="text-2xl xl:text-3xl 2xl:text-4xl text-black-light font-bold font-jakarta">
          Trade Booths / Accept decline
        </h3>
        <div className="h-full flex items-center gap-x-6">
          <SearchBox />
          <NotificationBtn />
          <ProfileImg />
        </div>
      </header>
      <div className="px-10 py-3">
        <div className="grid grid-cols-7 px-8 py-4 rounded-xl bg-white/85">
          <h4 className="text-lg xl:text-xl font-semibold text-black-light font-jakarta col-span-3">
            Trade Booths
          </h4>
          <h4 className="text-lg xl:text-xl font-semibold text-black-light font-jakarta col-span-2">
            Date
          </h4>
          <h4 className="text-lg xl:text-xl font-semibold text-black-light font-jakarta col-span-2">
            Status
          </h4>
        </div>
        <div className="h-screen overflow-y-auto scrollbar-hide pb-40">
          {boothList1.map((booth, index) => (
            <div
              className={` grid grid-cols-7 items-center rounded-xl px-8 py-2 my-3 ${
                index % 2 === 0 ? "bg-transparent" : "bg-white/80 "
              } `}
              key={index}
            >
              <div className="flex items-center gap-x-3 col-span-3">
                <img
                  src={booth.imgURL}
                  alt=""
                  className="rounded-full w-9 xl:w-10"
                />
                <h4 className="xl:text-lg text-gray font-jakarta whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Enhancing Engagement: Unleashin...
                </h4>
              </div>
              <h4 className="xl:text-lg text-gray font-jakarta col-span-2">
                24 Jan, 2024 / 10:00 AM
              </h4>
              <div className="flex items-center justify-between  col-span-2">
                <div className="flex gap-x-4">
                  <AcceptBtn bgColor="green" />
                  <AcceptBtn bgColor="red" />
                </div>
                <BsThreeDotsVertical className="size-5 xl:size-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewAllTradeBoothsComp;
