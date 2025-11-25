import { Cog, LifeBuoy } from "lucide-react";
import { NaviItem } from "./NavItem";

export function UserSpaceWidget() {
  return (
    <div className="mt-auto flex flex-col gap-6">
      <nav className="space-y-0.5">
        <NaviItem icon={LifeBuoy} title="Support" />
        <NaviItem icon={Cog} title="Settings" />
      </nav>

      <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
        <div className="space-y-1">
          <span className="text-sm/5 font-medium text-violet-700">
            Used space
          </span>
          <p className="text-sm/5 text-violet-500">
            Your team has used 80% of your storage space. Need more?
          </p>
        </div>

        <div className="h-2 rounded-full bg-violet-100">
          <div className="h-2 w-1/2 bg-violet-600 rounded-full" />
        </div>

        <div className="space-x-3">
          <button
            type="button"
            className="text-sm font-medium text-violet-500 hover:text-violet-700 duration-200"
          >
            Dismiss
          </button>

          <button
            type="button"
            className="text-sm font-medium text-violet-500 hover:text-violet-700 duration-200"
          >
            Upgrade plan
          </button>
        </div>
      </div>
    </div>
  );
}
