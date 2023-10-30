"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

import { TeacherBarChartData } from "@/lib/data"

export function TeacherBarChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={TeacherBarChartData}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <CartesianGrid stroke="#f3f4f6" vertical={false} />
        <Bar
          dataKey="total"
          fill="rgb(64 64 64)"
          radius={[4, 4, 0, 0]}
          barSize={15}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
