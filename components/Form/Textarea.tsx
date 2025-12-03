import { ComponentProps } from "react";

type TextAreaProps = ComponentProps<"textarea">

export function Textarea(props: TextAreaProps) {
  return (
    <textarea
      className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  );
}
