import styled from "styled-components";

const AnchorStyled = styled.a`
  text-decoration: none;
  color: ${(props) => props.color && props.color};
  position: relative;
  text-align: center;
  margin: 0 auto;
  padding: 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    ${(props) => props.hover && "filter: brightness(0.9);"}
  }
  &::before,
  ::after {
    ${(props) =>
      props.underline &&
      `content: ''; position: absolute; bottom: -10px; width: 0px; height: 5px; margin: 5px 0 0; transition: all 0.12s ease-in-out; transition-duration: 0.75s; opacity: 0; background-color: ${
        props.color
      }; ${props.underline === "left" ? "right: 0" : "left: 0"}`}
  }
  &:hover::before,
  &:hover::after {
    ${(props) => props.underline && "width: 100%; opacity: 1;"}
  }
`;

export { AnchorStyled };
