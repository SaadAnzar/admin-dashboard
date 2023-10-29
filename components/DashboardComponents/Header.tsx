"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DownloadCloud } from "lucide-react"
import { Button } from "../ui/button"
import { Search } from "./Search"

const Header = () => {
  return (
    <div className="flex flex-1 justify-between">
      <div className="flex flex-1 space-x-6">
        <Search />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Grade" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Grade</SelectLabel>
              <SelectItem value="grade 1">Grade 1</SelectItem>
              <SelectItem value="grade 2">Grade 2</SelectItem>
              <SelectItem value="grade 3">Grade 3</SelectItem>
              <SelectItem value="grade 4">Grade 4</SelectItem>
              <SelectItem value="grade 5">Grade 5</SelectItem>
              <SelectItem value="grade 6">Grade 6</SelectItem>
              <SelectItem value="grade 7">Grade 7</SelectItem>
              <SelectItem value="grade 8">Grade 8</SelectItem>
              <SelectItem value="grade 9">Grade 9</SelectItem>
              <SelectItem value="grade 10">Grade 10</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Subject</SelectLabel>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
              <SelectItem value="mathematics">Mathematics</SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="social-science">Social Science</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button>
        Download <DownloadCloud className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

export default Header
