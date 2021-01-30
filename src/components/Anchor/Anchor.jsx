import React from 'react'
import * as styled from './AnchorStyles'

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
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
    Extra,
    size,
    children,
    ...rest
  },
  ref
) {
  let props = {
    ...rest,
    onClick: (event) => {
      try {
        if (onClick) onClick(event)
      } catch (ex) {
        event.preventDefault()
        throw ex
      }
      if (
        !event.defaultPrevented &&
        event.button === 0 &&
        navigate &&
        (!target || target === '_self') &&
        !isModifiedEvent(event)
      ) {
        event.preventDefault()
        navigate()
      }
    }
  }

  const getSize = () => {
    if (size) {
      if (size === 'small') return ['17px', '13px']
      else if (size === 'medium') return ['20px', '16px']
      else if (size === 'large') return ['24px', '18px']
      else return ''
    }
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
        <styled.IconHolder position={Extra.position}>
          <Extra.Content />
        </styled.IconHolder>
      ) : (
        ''
      )}
      <styled.Text
        extra={Extra}
        position={Extra && Extra.position}
        sidePadding={size && getSize()}
      >
        {children}
      </styled.Text>
    </styled.AnchorStyled>
  )
}

export default React.forwardRef(Anchor)
