import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

export interface Props {
  title: string;
  icon: ElementType
}

export function NaviItem({icon: Icon, title}: Props) {
  return (
    <a
      href=""
      className="group duration-200 flex mx-1 items-center rounded gap-3 px-3 py-2 hover:bg-violet-50"
    >
      <Icon className="size-5 text-zinc-500 group-hover:text-violet-400" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-400">
        {title}
      </span>
      <ChevronDown className="ml-auto size-5 text-zinc-600 group-hover:text-violet-400" />
    </a>
  );
}
