import {
  ChartBar,
  CheckSquare,
  Flag,
  Home,
  Layers,
  Search,
  Users,
} from "lucide-react";
import { Logo } from "./Logo";
import { NaviItem } from "./NavItem";
import { UserSpaceWidget } from "./UserSpaceWidget";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <strong className="flex items-center gap-2 font-semibold text-xl text-zinc-900">
        <Logo />
        <span className="">Untitled Ui</span>
      </strong>

      <div className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-200 py-2 px-3 shadow-sm">
        <Search className="size-5 text-zinc-500" />
        <input
          type="text"
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </div>

      <nav className="space-y-0.5">
        <NaviItem icon={Home} title="Home" />
        <NaviItem icon={ChartBar} title="Dashboard" />
        <NaviItem icon={Layers} title="Projects" />
        <NaviItem icon={CheckSquare} title="Tasks" />
        <NaviItem icon={Flag} title="Reporting" />
        <NaviItem icon={Users} title="Users" />
      </nav>

      <UserSpaceWidget />
    </aside>
  );
}
