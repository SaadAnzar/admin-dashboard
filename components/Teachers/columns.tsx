"use client"

import { cn } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export type Teachers = {
  name: string
  email?: string
  image?: string
  status: "active" | "inactive" | "moderate"
  lessonPlanGenerated: number
  activityGenerated: number
  feedbackGenerated: number
  conceptSimplifierGenerated: number
}

export const columns: ColumnDef<Teachers>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const teacher = row.original

      return (
        <div className="flex flex-1 gap-x-2 pl-4">
          <Avatar>
            <AvatarImage src={teacher.image} alt="AI" />
            <AvatarFallback>{teacher.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="space-y-0.5 text-start">
            <div className="capitalize">{teacher.name}</div>
            <div className="text-xs">{teacher?.email}</div>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div
        className={cn(
          "inline-flex items-center capitalize",
          row.getValue("status") === "active" &&
            "rounded-3xl bg-green-100 py-0.5 pl-1 pr-3 text-green-600",
          row.getValue("status") === "moderate" &&
            "rounded-3xl bg-gray-200 py-0.5 pl-1 pr-3 text-gray-500",
          row.getValue("status") === "inactive" &&
            "rounded-3xl bg-red-100 py-0.5 pl-1 pr-3 text-red-500"
        )}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
            fill="currentColor"
          ></path>
        </svg>
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "lessonPlanGenerated",
    header: "Lesson Plan Generated",
    cell: ({ row }) => <div>{row.getValue("lessonPlanGenerated")}</div>,
  },
  {
    accessorKey: "activityGenerated",
    header: "Activity Generated",
    cell: ({ row }) => <div>{row.getValue("activityGenerated")}</div>,
  },
  {
    accessorKey: "feedbackGenerated",
    header: "Feedback Generated",
    cell: ({ row }) => <div>{row.getValue("feedbackGenerated")}</div>,
  },
  {
    accessorKey: "conceptSimplifierGenerated",
    header: "Concept Simplifier",
    cell: ({ row }) => <div>{row.getValue("conceptSimplifierGenerated")}</div>,
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const teacher = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(teacher.name)}
            >
              Copy Teacher Name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>{teacher.email}</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
