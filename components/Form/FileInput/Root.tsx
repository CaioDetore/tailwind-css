import { ComponentProps } from "react";

type Props = ComponentProps<"div">;

export function Root(props: Props) {
  return <div {...props} />;
}
