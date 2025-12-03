import { SettingsTabs } from "@/components/SettingsTabs";

import * as Input from "@/components/Form/Input";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import * as FileInput from "@/components/Form/FileInput";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { Textarea } from "@/components/Form/Textarea";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex justify-between items-center pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              form="settings"
              type="submit"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-900"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex flex-col w-full gap-5 divide-zinc-200"
        >
          <div className="grid gap-3 grid-cols-form items-center">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid gap-6 grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Caio" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Detore" />
              </Input.Root>
            </div>
            <div />
          </div>

          <div className="grid gap-3 grid-cols-form items-center pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              E-mail Address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="size-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control id="email" defaultValue="caio@gmail.com" />
            </Input.Root>
          </div>

          <div className="grid gap-3 grid-cols-form items-center pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid gap-3 grid-cols-form items-center pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="CTO" />
            </Input.Root>
          </div>

          <div className="grid gap-3 grid-cols-form items-center pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select placeholder="Select your country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United State" />
            </Select>
          </div>

          <div className="grid gap-3 grid-cols-form items-center pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select placeholder="Select your timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="utc3" text="América São Paulo (UTC-03:00)" />
            </Select>
          </div>

          <div className="grid gap-3 grid-cols-form items-center pt-5">
            <label className="text-sm font-medium text-zinc-700">
              Bio
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid gap-3 grid-cols-2">
                <Select defaultValue="normal">
                  <SelectItem value="normal" text="Normal Text" />
                  <SelectItem value="md" text="MarkDown" />
                </Select>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="hover:bg-zinc-50 rounded-md cursor-pointer"
                >
                  <Bold strokeWidth={3} className="size-4 text-zinc-500" />
                </button>
                <button
                  type="button"
                  className="hover:bg-zinc-50 rounded-md cursor-pointer"
                >
                  <Italic strokeWidth={3} className="size-4 text-zinc-500" />
                </button>
                <button
                  type="button"
                  className="hover:bg-zinc-50 rounded-md cursor-pointer"
                >
                  <Link strokeWidth={3} className="size-4 text-zinc-500" />
                </button>
                <button
                  type="button"
                  className="hover:bg-zinc-50 rounded-md cursor-pointer"
                >
                  <List strokeWidth={3} className="size-4 text-zinc-500" />
                </button>
                <button
                  type="button"
                  className="hover:bg-zinc-50 rounded-md cursor-pointer"
                >
                  <ListOrdered
                    strokeWidth={3}
                    className="size-4 text-zinc-500"
                  />
                </button>
              </div>

              <Textarea
                id="bio"
                className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
                defaultValue=""
              />
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form items-center pt-5">
            <label className="text-sm font-medium text-zinc-700">
              Portfolio projects
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                Share a few snippets of your work
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              form="settings"
              type="submit"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-900"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
