import styled from "styled-components";

interface HeadingProps {
  alignment: Alignment;
  light: boolean;
}

const Heading = styled.h1<HeadingProps>`
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.primary};
  letter-spacing: 0.5px;
  text-align: ${(props) => props.alignment};
  color: ${(props) =>
    props.light ? props.theme.colors.white : props.theme.colors.primary};
`;

export { Heading };
