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
import { Profile } from "./Profile";
import * as Input from "../Form/Input";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <strong className="flex items-center gap-2 font-semibold text-xl text-zinc-900">
        <Logo />
        <span className="">Untitled Ui</span>
      </strong>

      <Input.Root>
        <Input.Prefix>
          <Search className="size-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control type="text" placeholder="Search..." />
      </Input.Root>

      <nav className="space-y-0.5">
        <NaviItem icon={Home} title="Home" />
        <NaviItem icon={ChartBar} title="Dashboard" />
        <NaviItem icon={Layers} title="Projects" />
        <NaviItem icon={CheckSquare} title="Tasks" />
        <NaviItem icon={Flag} title="Reporting" />
        <NaviItem icon={Users} title="Users" />
      </nav>

      <UserSpaceWidget />

      <div className="h-px bg-zinc-200" />

      <Profile />
    </aside>
  );
}
