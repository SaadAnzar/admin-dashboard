"use client"

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { useState } from "react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Dialog } from "@/components/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const tabs = ["Overview", "Teachers", "Teacher"]

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface TabSwitcherProps extends PopoverTriggerProps {
  selectedTab: string
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>
}

export default function TabSwitcher({
  className,
  selectedTab,
  setSelectedTab,
}: TabSwitcherProps) {
  const [open, setOpen] = useState(false)
  const [showNewTabDialog, setShowNewTabDialog] = useState(false)

  return (
    <Dialog open={showNewTabDialog} onOpenChange={setShowNewTabDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a tab"
            className={cn("w-[200px] justify-between", className)}
          >
            <Avatar className="mr-2 h-5 w-5">
              <AvatarImage
                src={`https://avatar.vercel.sh/${selectedTab}.png`}
                alt={selectedTab}
              />
              {/* <AvatarFallback>SC</AvatarFallback> */}
            </Avatar>
            {selectedTab}
            <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              {tabs.map((tab) => (
                <CommandGroup>
                  <CommandItem
                    key={tab}
                    onSelect={() => {
                      setSelectedTab(tab)
                      setOpen(false)
                    }}
                    className="text-sm"
                  >
                    {tab}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        selectedTab === tab ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </Dialog>
  )
}
