"use client"

import { useState } from "react"

import TasksGenerated from "@/components/DashboardComponents/TasksGenerated"
import Time from "@/components/DashboardComponents/Time"
import { OverviewBarChart } from "@/components/Overview/OverviewBarChart"
import { OverviewUsage } from "@/components/Overview/OverviewUsage"
import { OverviewVerticalBarChart } from "@/components/Overview/OverviewVerticalBarChart"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Overview = () => {
  const [selectedTime, setSelectedTime] = useState("Today")

  return (
    <>
      <Time selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      <TasksGenerated />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="text-lg">
              Daily Active Teachers ( at least one generation )
            </CardTitle>
            <div className="flex flex-1 space-x-6 pt-4">
              <Card className="h-[5rem]">
                <CardHeader className="px-6 py-2 font-semibold">
                  Active Teachers
                </CardHeader>
                <CardFooter>50</CardFooter>
              </Card>
              <Card className="h-[5rem]">
                <CardHeader className="px-6 py-2 font-semibold">
                  % Active Teachers
                </CardHeader>
                <CardFooter>30%</CardFooter>
              </Card>
            </div>
          </CardHeader>
          <CardContent>
            <OverviewUsage />
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Output Satisfication</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <OverviewBarChart />
          </CardContent>
        </Card>
      </div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Monthly Tool Usage</CardTitle>
        </CardHeader>
        <CardContent className="pr-12">
          <OverviewVerticalBarChart />
        </CardContent>
      </Card>
    </>
  )
}

export default Overview
