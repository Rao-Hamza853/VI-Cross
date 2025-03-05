"use client"

import { useState } from "react"
import { ChevronDown, Plus } from "lucide-react"

export default function WeeklyCalendar() {
  const [currentMonth, setCurrentMonth] = useState("April 2024")
  const [viewMode, setViewMode] = useState("Week")

  // Days of the week
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

  // Time slots
  const timeSlots = ["08:00", "09:00", "10:00", "10:30", "11:00", "12:00", "13:00"]

  // Events data with duration in terms of rows to span
  const events = [
    {
      day: "TUE",
      startTime: "08:00",
      endTime: "09:00",
      title: "Event",
      type: "event",
      color: "bg-[#FFCFCF]",
      divBg: "bg-[#FF6B6B]",
      rowSpan: 2, // Span 2 rows
    },
    {
      day: "TUE",
      startTime: "11:00",
      endTime: "12:00",
      title: "Presentations",
      type: "presentations",
      color: "bg-[#FFE2FE]",
      divBg: "bg-[#FF7CFA]",
      rowSpan: 2,
    },
    {
      day: "THU",
      startTime: "09:00",
      endTime: "10:00",
      title: "Webinars",
      type: "webinars",
      color: "bg-[#B3C8FF]",
      divBg: "bg-[#2B4FFE]",
      rowSpan: 2,
    },
    {
      day: "FRI",
      startTime: "10:30",
      endTime: "11:00",
      title: "Presentations",
      type: "presentations",
      color: "bg-[#F8FFD7]",
      divBg: "bg-[#DBFF3D]",
      rowSpan: 2,
    },
    {
      day: "SUN",
      startTime: "08:00",
      endTime: "09:00",
      title: "Webinars",
      type: "webinars",
      color: "bg-[#B9CDFF]",
      divBg: "bg-[#2B4FFE]",
      rowSpan: 2,
    },
  ]

  // Function to handle view mode change
  const handleViewModeChange = (mode) => {
    setViewMode(mode)
  }

  // Function to determine if an event should be displayed in a specific time slot and day
  const getEventForTimeSlotAndDay = (timeSlot, day) => {
    return events.find((event) => event.day === day && event.startTime === timeSlot)
  }

  // Function to determine if a time slot is the start of an event
  const isEventStart = (timeSlot, day) => {
    return events.some((event) => event.day === day && event.startTime === timeSlot)
  }

  // Function to check if a cell should be rendered (to handle rowspan)
  const shouldRenderCell = (timeSlot, day) => {
    const prevTimeSlotIndex = timeSlots.indexOf(timeSlot) - 1
    if (prevTimeSlotIndex < 0) return true

    const prevTimeSlot = timeSlots[prevTimeSlotIndex]
    const prevEvent = getEventForTimeSlotAndDay(prevTimeSlot, day)

    return !(prevEvent && prevEvent.rowSpan > 1)
  }

  return (
    <div className="rounded-2xl py-3 bg-white/85 mt-5">
      <div className="flex justify-between items-center mb-4 px-5">
        <button className="flex items-center gap-2 bg-primary text-white font-jakarta px-4 py-2 rounded-md cursor-pointer">
          <Plus size={16} /> Add Trade Booths
        </button>
        <div className="flex items-center gap-10">
          <div className="flex gap-2 rounded-md overflow-hidden">
            <button
              className={`font-jakarta px-4 py-1.5 rounded-md cursor-pointer ${viewMode === "Day" && "bg-primary text-white" }`}
              onClick={() => handleViewModeChange("Day")}
            >
              Day
            </button>
            <button
              className={`font-jakarta px-4 py-1.5 rounded-md cursor-pointer ${viewMode === "Week" && "bg-primary text-white" }`}
              onClick={() => handleViewModeChange("Week")}
            >
              Week
            </button>
            <button
              className={`font-jakarta px-4 py-1.5 rounded-md cursor-pointer ${viewMode === "Month" && "bg-primary text-white" }`}
              onClick={() => handleViewModeChange("Month")}
            >
              Month
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-jakarta">{currentMonth}</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      {/* Calendar table with wider columns and shorter rows */}
      <div className="w-full borde rounded-md overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="border-t-2 border-gray-200">
            <tr>
              <th className="border-r border-gray-200"></th>
              {days.map((day) => (
                <th key={day} className="w-40 h-12 text-center font-semibold font-jakarta text-black-light">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time, timeIndex) => (
              <tr key={time} className="h-10">
                <td className="border border-l-0 border-gray-200 p-2 text-base text-gray font-medium text-center w-20">{time}</td>

                {days.map((day) => {
                  const event = getEventForTimeSlotAndDay(time, day)
                  const isStart = isEventStart(time, day)

                  // Skip rendering cells that are part of a rowspan
                  if (!shouldRenderCell(time, day)) {
                    return null
                  }

                  return (
                    <td
                      key={`${day}-${time}`}
                      className="border border-gray-200 relative p-0"
                      rowSpan={isStart && event ? event.rowSpan : 1}
                    >
                      {isStart && event && (
                        <div className={`${event.color} h-full w-full py-5 px-4 flex flex-col`}>
                          <div className="flex items-center gap-x-1.5">
                            <div className={`${event.divBg} w-1 h-9 rounded`}>
                            </div>
                            <div>
                              <div className="font-jakarta text-black-light text-sm font-medium">{`${event.startTime} - ${event.endTime}`}</div>
                              <div className="font-jakarta text-gray text-sm font-medium">{event.title}</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

