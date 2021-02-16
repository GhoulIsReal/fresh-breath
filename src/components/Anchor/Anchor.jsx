import React from 'react'
import * as styled from './AnchorStyles'

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
}

function Anchor(
  { color, hover, underline, target, Extra, size, children, ...rest },
  ref
) {
  let props = {
    ...rest,
    onClick: (event) => {
      try {
        if (rest.onClick) rest.onClick(event)
      } catch (ex) {
        event.preventDefault()
        throw ex
      }
      if (
        !event.defaultPrevented &&
        event.button === 0 &&
        rest.navigate &&
        (!target || target === '_self') &&
        !isModifiedEvent(event)
      ) {
        event.preventDefault()
        rest.navigate()
      }
    }
  }
  const getSize = () => {
    if (size === 'small') return ['17px', '13px', '15px']
    else if (size === 'medium' || !size) return ['20px', '16px', '18px']
    else if (size === 'large') return ['24px', '18px', '22px']
    else return ''
  }

  return (
    <styled.AnchorStyled
      ref={ref}
      hover={hover}
      underline={underline}
      color={color}
      {...props}
    >
      {Extra && Extra.Content ? (
        <styled.IconHolder position={Extra.position} size={getSize()[2]}>
          {Extra.Content.includes('svg') ? (
            <object data={Extra.Content}></object>
          ) : (
            <img src={Extra.Content} />
          )}
        </styled.IconHolder>
      ) : (
        ''
      )}
      <styled.Text
        size={size}
        extra={Extra}
        position={Extra && Extra.position}
        sidePadding={getSize()}
      >
        {children}
      </styled.Text>
    </styled.AnchorStyled>
  )
}

export default React.forwardRef(Anchor)
