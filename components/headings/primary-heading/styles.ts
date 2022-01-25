import styled from "styled-components";

interface HeadingProps {
  alignment: Alignment;
  light: boolean;
  large: boolean;
}

const HeadingLarge = styled.h1<HeadingProps>`
  font-size: ${(props) => (props.large ? "5rem" : "3rem")};
  font-weight: 900;
  font-family: ${(props) => props.theme.fonts.primary};
  text-align: ${(props) => props.alignment};
  color: ${(props) =>
    props.light ? props.theme.colors.white : props.theme.colors.primary};

  /* FOR GRADIENT HEADINGS

    background: ${(props) =>
    props.light
      ? props.theme.gradients.headingLight
      : props.theme.gradients.headingDark};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent; 
*/
`;

export { HeadingLarge };
