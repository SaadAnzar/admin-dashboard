"use client"

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { useState } from "react"

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

const times = ["Today", "This Week", "This Month"]

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface TabSwitcherProps extends PopoverTriggerProps {
  selectedTime: string
  setSelectedTime: React.Dispatch<React.SetStateAction<string>>
}

export default function Time({
  className,
  selectedTime,
  setSelectedTime,
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
            className={cn("w-[150px] justify-between", className)}
          >
            {/* <Avatar className="mr-2 h-5 w-5">
              <AvatarImage
                src={`https://avatar.vercel.sh/${selectedTime}.png`}
                alt={selectedTime}
              /> */}
            {/* <AvatarFallback>SC</AvatarFallback> */}
            {/* </Avatar> */}
            {selectedTime}
            <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[150px] p-0">
          <Command>
            <CommandList>
              {times.map((time) => (
                <CommandGroup>
                  <CommandItem
                    key={time}
                    onSelect={() => {
                      setSelectedTime(time)
                      setOpen(false)
                    }}
                    className="text-sm"
                  >
                    {time}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        selectedTime === time ? "opacity-100" : "opacity-0"
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
