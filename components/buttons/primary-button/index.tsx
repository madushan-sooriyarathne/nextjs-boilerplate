import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "./styles";

interface LinkButton {
  children: ReactNode;
  link: string;
  isTargetBlank: boolean;
  light?: boolean;
  type: "link";
}

interface RouteButton {
  children: ReactNode;
  route: string;
  light?: boolean;
  type: "route";
}

type Props = LinkButton | RouteButton;

const PrimaryButton: React.FC<Props> = ({
  light = false,
  ...props
}: Props): JSX.Element => {
  return props.type === "route" ? (
    <Link href={props.route}>
      <Button light={light}>{props.children}</Button>
    </Link>
  ) : (
    <Button
      href={props.link}
      light={light}
      target={props.isTargetBlank ? "_blank" : "_self"}
    >
      {props.children}
    </Button>
  );
};

export default PrimaryButton;
