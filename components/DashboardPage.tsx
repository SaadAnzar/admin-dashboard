"use client"

import { useState } from "react"

import { CalendarDateRangePicker } from "@/components/DashboardComponents/DateRangePicker"
import TabSwitcher from "@/components/DashboardComponents/TabSwitcher"
import { UserNav } from "@/components/DashboardComponents/UserNav"
import Overview from "@/components/Overview/Overview"
import Teacher from "@/components/Teacher/Teacher"
import Teachers from "@/components/Teachers/Teachers"

export default function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState("Overview")

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-8">
            <div className="flex items-center justify-between space-x-8">
              <div className="rounded-md border p-2 font-semibold">
                Teaching Tools AI Activity Dashboard
              </div>
              <TabSwitcher
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
              <CalendarDateRangePicker />
            </div>
            <div className="ml-auto flex items-center">
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          {selectedTab === "Overview" && <Overview />}
          {selectedTab === "Teachers" && <Teachers />}
          {selectedTab === "Teacher" && <Teacher />}
        </div>
      </div>
    </>
  )
}
