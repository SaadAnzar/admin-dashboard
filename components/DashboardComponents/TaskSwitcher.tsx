import { Button } from "@/components/ui/button"
import { Command, CommandGroup, CommandItem } from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CaretSortIcon } from "@radix-ui/react-icons"
import { Check } from "lucide-react"
import { useState } from "react"

const generators = [
  "Lesson Plan Generator",
  "Feedback Generator",
  "Concept Simplifier",
  "Activity Generator",
]

interface TaskSwitcherProps {
  selectedGenerator: string
  setSelectedGenerator: React.Dispatch<React.SetStateAction<string>>
}

export default function TaskSwitcher({
  selectedGenerator,
  setSelectedGenerator,
}: TaskSwitcherProps) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[15rem] justify-between"
        >
          {selectedGenerator}
          <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[15rem] p-0">
        <Command>
          <CommandGroup>
            {generators.map((generator) => (
              <CommandItem
                key={generator}
                onSelect={() => {
                  setSelectedGenerator(generator)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedGenerator === generator
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {generator}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
