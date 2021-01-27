import React from "react";
import * as styled from "./AnchorStyles";

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function Anchor(
  {
    navigate,
    onClick,
    color,
    hover,
    underline,
    underlineType,
    target,
    children,
    ...rest
  },
  ref
) {
  let props = {
    ...rest,
    onClick: (event) => {
      try {
        if (onClick) onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }
      if (
        !event.defaultPrevented &&
        event.button === 0 &&
        navigate &&
        (!target || target === "_self") &&
        !isModifiedEvent(event)
      ) {
        event.preventDefault();
        navigate();
      }
    },
  };
  return (
    <styled.AnchorStyled
      ref={ref}
      hover={hover}
      underline={underline}
      color={color}
      {...props}
    >
      {children}
    </styled.AnchorStyled>
  );
}

export default React.forwardRef(Anchor);
