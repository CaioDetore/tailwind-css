'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { Check } from 'lucide-react'

type SelectItemProps = SelectPrimitive.SelectItemProps & {
  text: string
}

export function SelectItem(props: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      className="flex items-center gap-2 overflow-hidden px-3 py-2.5 outline-none data-highlighted:bg-zinc-50"
      {...props}
    >
      <SelectPrimitive.ItemText className="text-black">
        {props.text}
      </SelectPrimitive.ItemText>

      <SelectPrimitive.ItemIndicator>
        <Check className="size-4 text-violet-500" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}
