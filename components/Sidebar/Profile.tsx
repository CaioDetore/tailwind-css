import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <img
        alt=""
        src="https://github.com/CaioDetore.png"
        className="size-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Caio Detore</span>
        <span className="truncate text-sm text-zinc-500">
          caiodetore@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="size-5 text-zinc-500" />
      </Button>
    </div>
  )
}
