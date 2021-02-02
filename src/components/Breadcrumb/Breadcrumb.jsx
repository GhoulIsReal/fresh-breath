import React from 'react'
import * as styled from './BreadcrumbStyles'

function Breadcrumb(props, ref) {
  return (
    <styled.BreadcrumbNav ref={ref} style={props.style}>
      <ol>
        {props.items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ol>
    </styled.BreadcrumbNav>
  )
}

export default React.forwardRef(Breadcrumb)
