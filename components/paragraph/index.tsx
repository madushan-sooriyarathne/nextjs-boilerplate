import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  alignment?: Alignment;
  light?: boolean;
  small?: boolean;
}

const Paragraph: React.FC<Props> = ({
  children,
  alignment = "center",
  light = false,
  small = false,
}: Props): JSX.Element => {
  return <div></div>;
};

export default Paragraph;
