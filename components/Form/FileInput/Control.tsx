import { ComponentProps } from "react";

type Props = ComponentProps<"input">;

export function Control(props: Props) {
  return <input type="file" name="" id="photo" className="sr-only" {...props} />;
}
