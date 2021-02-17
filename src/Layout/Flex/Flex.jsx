import React from 'react'
import * as styled from './FlexStyles'

function Flex({ children, direction, align, justify, wrap, style }, ref) {
  return (
    <styled.Flex
      ref={ref}
      wrap={wrap}
      direction={direction}
      align={align}
      justify={justify}
      style={style}
    >
      {children}
    </styled.Flex>
  )
}

export default React.forwardRef(Flex)
