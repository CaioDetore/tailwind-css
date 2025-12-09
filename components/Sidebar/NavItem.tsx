import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

export interface Props {
  title: string
  icon: ElementType
}

export function NaviItem({ icon: Icon, title }: Props) {
  return (
    <a
      href=""
      className="group mx-1 flex items-center gap-3 rounded px-3 py-2 duration-200 hover:bg-violet-50 dark:hover:bg-zinc-800"
    >
      <Icon className="size-5 text-zinc-500 group-hover:text-violet-400" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-400 dark:text-zinc-100 dark:group-hover:text-violet-300">
        {title}
      </span>
      <ChevronDown className="ml-auto size-5 text-zinc-600 group-hover:text-violet-400 dark:text-zinc-600" />
    </a>
  )
}
