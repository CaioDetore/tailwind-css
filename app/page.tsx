import { SettingsTabs } from "@/components/SettingsTabs";

import * as Input from "@/components/Form/Input";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import * as FileInput from "@/components/Form/FileInput";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { Textarea } from "@/components/Form/Textarea";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-4 justify-between lg:items-center pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outlined" type="button">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex flex-col w-full lg:gap-5 divide-zinc-200"
        >
          <div className="flex flex-col lg:grid gap-3 grid-cols-form lg:items-center pb-5 border-b border-zinc-200">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="flex flex-col lg:grid gap-3 lg:gap-6 lg:grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Caio" />
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 lg:sr-only"
                >
                  Last Name
                </label>

                <Input.Root>
                  <Input.Control id="lastName" defaultValue="Detore" />
                </Input.Root>
              </div>
            </div>
            <div />
          </div>

          <div className="flex flex-col lg:grid gap-3 grid-cols-form lg:items-center pt-5 pb-5 border-b border-zinc-200">
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

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form lg:items-center pt-5 pb-5 border-b border-zinc-200">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex flex-col lg:flex-row lg:items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form lg:items-center pt-5 pb-5 border-b border-zinc-200">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="CTO" />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form lg:items-center pt-5 pb-5 border-b border-zinc-200">
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

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form lg:items-center pt-5 pb-5 border-b border-zinc-200">
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

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form lg:items-center pt-5 pb-5 border-b border-zinc-200">
            <label className="text-sm font-medium text-zinc-700">
              Bio
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col lg:grid gap-3 grid-cols-2">
                <Select defaultValue="normal">
                  <SelectItem value="normal" text="Normal Text" />
                  <SelectItem value="md" text="MarkDown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold strokeWidth={3} className="size-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic strokeWidth={3} className="size-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link strokeWidth={3} className="size-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List strokeWidth={3} className="size-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      strokeWidth={3}
                      className="size-4 text-zinc-500"
                    />
                  </Button>
                </div>
              </div>

              <Textarea id="bio" />
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form lg:items-center pt-5 pb-5 border-b border-zinc-200">
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

          <div className="flex items-center gap-3 justify-end pt-5">
            <Button variant="outlined" type="button">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
