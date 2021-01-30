import React from 'react'
import * as styled from './TableStyles'

const Table = ({ heading, data, wrap, color }, ref) => {
  const cellCounter = data.map((obj) => Object.values(obj))

  return (
    <styled.Table ref={ref}>
      <styled.Header color={color && color[0]}>
        <styled.row>
          {heading.map((head, index) => (
            <styled.heading key={index} color={color && color[1]}>
              {head}
            </styled.heading>
          ))}
        </styled.row>
      </styled.Header>
      <styled.Body color={color && color[1]}>
        {data.map((obj, index) => (
          <styled.row key={index}>
            {cellCounter[index].map((val, ind) => (
              <styled.cell
                title={wrap ? '' : val}
                key={ind}
                wrap={wrap ? 1 : 0}
                color={color && color[0]}
              >
                {val}
              </styled.cell>
            ))}
          </styled.row>
        ))}
      </styled.Body>
    </styled.Table>
  )
}

export default React.forwardRef(Table)
