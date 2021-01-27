import React from "react";
import * as styled from "./GridStyles";

function Grid({ children, evenly, gap, justify }) {
  return (
    <styled.Grid evenly={evenly} gap={gap} justify={justify}>
      {children}
    </styled.Grid>
  );
}

export default Grid;
