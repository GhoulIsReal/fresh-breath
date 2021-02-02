import React from 'react'
import * as styled from './FlexStyles'

function Flex({ children, direction, align, justify, wrap }, ref) {
  return (
    <styled.Flex
      ref={ref}
      wrap={wrap}
      direction={direction}
      align={align}
      justify={justify}
    >
      {children}
    </styled.Flex>
  )
}

export default React.forwardRef(Flex)
