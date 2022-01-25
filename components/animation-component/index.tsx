import { useEffect, useRef } from "react";
import { Container } from "./styles";

interface Props {
  url: string;
  speed?: number;
  style?: { [key: string]: string };
}

const AnimationComponent: React.FC<Props> = ({
  url,
  speed = 1,
  style = {},
}: Props): JSX.Element => {
  const ref = useRef(null);

  useEffect(() => {
    import(`@lottiefiles/lottie-player`);
  }, []);

  return (
    <Container>
      <lottie-player
        src={url}
        ref={ref}
        loop
        autoplay
        mode="normal"
        style={style}
        speed={speed}
      />
    </Container>
  );
};

export default AnimationComponent;
