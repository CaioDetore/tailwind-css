import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        alt=""
        src="https://github.com/CaioDetore.png"
        className="size-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Caio Detore
        </span>
        <span className="text-sm text-zinc-500 truncate">caiodetore@gmail.com</span>
      </div>
      <button type="button" className="ml-auto hover:bg-zinc-50 rounded-md cursor-pointer">
        <LogOut className="size-5 text-zinc-500" />
      </button>
    </div>
  );
}
