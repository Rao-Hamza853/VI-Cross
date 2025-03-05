
"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Calendar({ events = [] }) {
  const [currentDate, setCurrentDate] = useState(new Date()) // January 2024

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
  // Adjust for Monday as first day of week (0 = Monday, 6 = Sunday)
  const firstDayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1

  // Get the number of days in the current month
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()

  // Get the number of days in the previous month
  const daysInPreviousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()

  // Generate calendar days array
  const calendarDays = []

  // Add days from previous month
  for (let i = 0; i < firstDayIndex; i++) {
    const day = daysInPreviousMonth - firstDayIndex + i + 1
    calendarDays.push({
      day,
      currentMonth: false,
      date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, day),
    })
  }

  // Add days from current month
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({
      day: i,
      currentMonth: true,
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i),
    })
  }

  // Add days from next month
  const remainingDays = 42 - calendarDays.length // 6 rows of 7 days
  for (let i = 1; i <= remainingDays; i++) {
    calendarDays.push({
      day: i,
      currentMonth: false,
      date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i),
    })
  }

  // Function to check if a date has events
  const getEventColors = (date) => {
    const matchingEvents = events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    )

    return matchingEvents.length > 0 ? matchingEvents[0].colors : []
  }

  // Group days into weeks
  const weeks = []
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7))
  }

  return (
    <div className="bg-white/85 rounded-3xl p-4 shadow-sm w-full">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold font-jakarta text-black-light">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <div className="flex gap-4">
          <button
            onClick={goToPreviousMonth}
            className="p-0.5 rounded-full hover:bg-gray-100 border-[1px] "
            aria-label="Previous month"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button onClick={goToNextMonth} className="p-0.5 rounded-full hover:bg-gray-100 border-[1px] " aria-label="Next month">
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 ">
        {dayNames.map((day) => (
          <div key={day} className="text-center font-medium font-jakarta text-black-light py-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1.5 bg-secondary p-3 rounded-xl">
        {weeks.map((week, weekIndex) =>
          week.map((day, dayIndex) => {
            const eventColors = getEventColors(day.date)
            return (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`
                  flex flex-col items-center bg-white justify-center rounded-xl py-2
                  ${day.currentMonth ? "text-gray" : "text-gray/60"}
                  hover:bg-gray-50
                `}
              >
                <span className="text-base">{day.day.toString().padStart(2, "0")}</span>
                {eventColors.length > 0 && (
                  <div className="flex gap-0.5 mt-1">
                    {eventColors.map((color, index) => (
                      <div key={index} className={`h-1 w-1 rounded-full ${color}`} />
                    ))}
                  </div>
                )}
              </div>
            )
          }),
        )}
       
      </div>
    </div>
  )
}

