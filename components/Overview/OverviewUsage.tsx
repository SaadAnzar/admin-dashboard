import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { OverviewData } from "@/lib/data"

export function OverviewUsage() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        width={500}
        height={200}
        data={OverviewData}
        syncId="overview"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid stroke="#f3f4f6" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="ActiveTeachers"
          stroke="rgb(64 64 64)"
          fill="rgb(64 64 64)"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
