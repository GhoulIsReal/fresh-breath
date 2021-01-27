import styled from "styled-components";

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-flow: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
`;

export { Flex };
