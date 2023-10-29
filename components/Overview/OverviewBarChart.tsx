"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { OverviewBarChartData } from "@/lib/data"

export function OverviewBarChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={OverviewBarChartData}>
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
