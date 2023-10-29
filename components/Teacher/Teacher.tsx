"use client"

import { useState } from "react"

import Header from "@/components/DashboardComponents/Header"
import TaskSwitcher from "@/components/DashboardComponents/TaskSwitcher"
import TasksGenerated from "@/components/DashboardComponents/TasksGenerated"
import Time from "@/components/DashboardComponents/Time"
import { TeacherBarChart } from "@/components/Teacher/TeacherBarChart"
import { TeacherUsage } from "@/components/Teacher/TeacherUsage"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const Teacher = () => {
  const [selectedGenerator, setSelectedGenerator] = useState(
    "Lesson Plan Generator"
  )

  const [selectedTime, setSelectedTime] = useState("Today")
  return (
    <>
      <Header />
      <Time selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      <TasksGenerated />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card className="col-span-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Tool Usage</CardTitle>
            <TaskSwitcher
              selectedGenerator={selectedGenerator}
              setSelectedGenerator={setSelectedGenerator}
            />
          </CardHeader>
          <CardContent className="pt-8">
            <TeacherUsage />
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Output Satisfication</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <TeacherBarChart />
          </CardContent>
        </Card>
      </div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Tool Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 px-6 pt-2">
            <div className="flex items-center justify-between">
              <p className="w-[15%] text-sm font-medium leading-none">
                Lesson Plan Generator
              </p>
              <Progress value={60} className="h-2 w-[70%]" />
              <p>60%</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="w-[15%] text-sm font-medium leading-none">
                Feedback Generator
              </p>
              <Progress value={30} className="h-2 w-[70%]" />
              <p>30%</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="w-[15%] text-sm font-medium leading-none">
                Concept Simplifier
              </p>
              <Progress value={90} className="h-2 w-[70%]" />
              <p>90%</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="w-[15%] text-sm font-medium leading-none">
                Activity Generator
              </p>
              <Progress value={23} className="h-2 w-[70%]" />
              <p>23%</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="w-[15%] text-sm font-medium leading-none">Tool</p>
              <Progress value={63} className="h-2 w-[70%]" />
              <p>63%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default Teacher
