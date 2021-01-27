import React from "react";
import * as styled from "./FlexStyles";

function Flex({ children, direction, align, justify }) {
  return (
    <styled.Flex direction={direction} align={align} justify={justify}>
      {children}
    </styled.Flex>
  );
}

export default Flex;
