import React, { useState } from "react";
import Sidebar from "../component/sidebar";
import SearchBox from "../component/ui/search-box";
import ProfileImg from "../component/ui/profile-img";
import SliderBtn from "../component/ui/sliderBtn";
import AcceptBtn from "../component/ui/accept-btn";
import { boothList } from "../lib/constants1";
import Calendar from "../component/custom-calender";
import WeeklyCalendar from "../component/weekly-calender";
import AddTradeBooths from "../component/add-trade-booths";
import ViewAllTradeBoothsComp from "../component/view-all-trade-booths";

const TradeBooths = () => {
  const [addTradeBooth, setAddTradeBooth] = useState(false);
  const [viewAllBoothList, setViewAllBoothList] = useState(false);
  const handleAddTradeBooths = () => {
    setAddTradeBooth(true);
  };
  const handleViewAllBoothList = () => {
    setViewAllBoothList(true);
  };
  const handleBothStates = ()=>{
    setAddTradeBooth(false)
    setViewAllBoothList(false)
  }
  const events = [
    {
      date: new Date(2024, 0, 10),
      colors: ["bg-red-500", "bg-green-500"],
    },
    {
      date: new Date(2024, 0, 26),
      colors: ["bg-purple-500", "bg-green-500"],
    },
  ];
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar handleBothStates={handleBothStates} />

      {viewAllBoothList ? (
        <ViewAllTradeBoothsComp />
      ) : (
        <>
          {addTradeBooth ? (
            <AddTradeBooths />
          ) : (
            <div className="bg-secondary h-screen w-full pb-[]">
              <header className="h-20 px-5 xl:px-8 py-5 2xl:py-4 flex items-center justify-between">
                <h3 className="text-2xl xl:text-3xl 2xl:text-4xl text-black-light font-bold font-jakarta">
                  Trade Booths
                </h3>
                <div className="h-full flex items-center gap-x-6">
                  <SearchBox />
                  <SliderBtn />
                  <ProfileImg />
                </div>
              </header>
              <div className="h-screen overflow-y-auto scrollbar-hide px-10 py-2">
                <div className="grid grid-cols-3 gap-x-8">
                  <div className="w-[100%] space-y-5 col-span-2">
                    <div className="flex justify-between pb-2.5 pt-4">
                      <h4 className="text-2xl font-semibold font-jakarta text-black-light">
                        Booths List
                      </h4>
                      <button
                        onClick={handleViewAllBoothList}
                        className="text-xl font-jakarta font-medium text-black-light underline underline-offset-2 cursor-pointer"
                      >
                        View All
                      </button>
                    </div>
                    {boothList.map((booth, index) => (
                      <div
                        className="flex items-center justify-between px-6 py-6 rounded-2xl bg-white/85"
                        key={index}
                      >
                        <div className="flex items-center gap-x-3">
                          <img
                            src={booth.imgURL}
                            alt=""
                            className="rounded-full w-9 xl:w-10"
                          />
                          <h4 className="xl:text-lg text-gray font-jakarta whitespace-nowrap overflow-hidden overflow-ellipsis">
                            Enhancing Engagement: Unleashin...
                          </h4>
                        </div>
                        <h4 className="xl:text-lg text-gray font-jakarta">
                          24 Jan, 2024 / 10:00 AM
                        </h4>
                        <div className="flex gap-x-2">
                          <AcceptBtn bgColor="green" />
                          <AcceptBtn bgColor="red" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <Calendar />
                  </div>
                </div>
                <div className="pb-10">
                  <WeeklyCalendar handleAddTradeBooths={handleAddTradeBooths} />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TradeBooths;
