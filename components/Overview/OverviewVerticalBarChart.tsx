"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

import { OverviewVerticalBarChartData } from "@/lib/data"

export function OverviewVerticalBarChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={OverviewVerticalBarChartData} layout="vertical">
        <XAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          type="number"
          tickFormatter={(value) => `${value}%`}
        />
        <YAxis
          dataKey="name"
          type="category"
          stroke="black"
          fontSize={15}
          fontWeight={700}
          width={172}
          tickLine={false}
          axisLine={false}
        />
        <CartesianGrid
          // strokeDasharray="3 3"
          horizontal={false}
          stroke="#f3f4f6"
        />

        <Bar
          dataKey="total"
          fill="rgb(64 64 64)"
          radius={[0, 4, 4, 0]}
          barSize={25}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
