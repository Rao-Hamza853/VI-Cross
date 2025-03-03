import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional icons, install lucide-react if needed

const events = [
  { date: "2024-01-10", color: "bg-green-500" },
  { date: "2024-01-10", color: "bg-red-500" },
  { date: "2024-01-26", color: "bg-green-500" },
  { date: "2024-01-26", color: "bg-red-500" },
];

const CustomCalender = () => {
    const [date, setDate] = useState(new Date());

    const tileContent = ({ date, view }) => {
      if (view === "month") {
        const dayEvents = events.filter(
          (event) => event.date === date.toISOString().split("T")[0]
        );
  
        return (
          <div className="flex justify-center mt-1 space-x-1">
            {dayEvents.map((event, index) => (
              <span key={index} className={`w-2 h-2 rounded-full ${event.color}`}></span>
            ))}
          </div>
        );
      }
    };
  
    return (
      <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
        <Calendar
          onChange={setDate}
          calendarType="islamic"
          value={date}
          tileContent={tileContent}
          nextLabel={<ChevronRight size={20} />}
          prevLabel={<ChevronLeft size={20} />}
          className="custom-calendar"
        />
      </div>
    );
  };

export default CustomCalender
