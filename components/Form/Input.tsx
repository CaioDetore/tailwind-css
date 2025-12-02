import { ComponentProps } from "react";

type InputPrefixProps = ComponentProps<"div">;

function Prefix(props: InputPrefixProps) {
  return <div {...props} />;
}

type InputControlProps = ComponentProps<"input">;
function Control(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  );
}

type InputRootProps = ComponentProps<"div">;

function Root(props: InputRootProps) {
  return (
    <div
      className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-200 py-2 px-3 shadow-sm"
      {...props}
    />
  );
}

export { Prefix, Control, Root };
