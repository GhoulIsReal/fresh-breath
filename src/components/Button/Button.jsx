import React from 'react'
import * as styled from './ButtonStyles'

function Button({ type, hover, inline, ...props }, ref) {
  return (
    <styled.Button
      type={type}
      hover={hover}
      inline={inline}
      ref={ref}
      {...props}
    />
  )
}

export default React.forwardRef(Button)
