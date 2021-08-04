import styled from "styled-components";

interface ButtonProps {
  light: boolean;
}

const Button = styled.a<ButtonProps>`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 2rem 3rem;
  outline: none;
  text-decoration: none;
  color: ${(props) =>
    props.light ? props.theme.colors.black : props.theme.colors.white};
  background-color: transparent;
  border: ${(props) =>
    `1px solid ${
      props.light ? props.theme.colors.black : props.theme.colors.white
    }`};

  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: ${(props) =>
      props.light ? props.theme.colors.white : props.theme.colors.black};
    transform: translate(2rem, 2rem);
  }
`;

export { Button };
