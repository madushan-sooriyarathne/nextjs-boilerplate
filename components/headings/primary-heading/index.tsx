import { ReactNode } from "react";
import { HeadingLarge } from "./styles";

interface Props {
  children: ReactNode;
  light?: boolean;
  alignment?: Alignment;
  large?: boolean;
}

const PrimaryHeading: React.FC<Props> = ({
  children,
  alignment = "center",
  light = false,
  large = false,
}: Props): JSX.Element => {
  return (
    <HeadingLarge alignment={alignment} light={light} large={large}>
      {children}
    </HeadingLarge>
  );
};

export default PrimaryHeading;
