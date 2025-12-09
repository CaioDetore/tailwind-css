'use client'

import {
  ChartBar,
  CheckSquare,
  Flag,
  Home,
  Layers,
  Menu,
  Search,
  Users,
} from 'lucide-react'
import { Logo } from './Logo'
import { NaviItem } from './NavItem'
import { UserSpaceWidget } from './UserSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Form/Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed top-0 right-0 left-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen">
      <div className="flex items-center justify-between">
        <strong className="flex items-center gap-2 text-xl font-semibold text-zinc-900">
          <Logo />
          <span className="">Untitled Ui</span>
        </strong>

        <Collapsible.Trigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu className="size-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
