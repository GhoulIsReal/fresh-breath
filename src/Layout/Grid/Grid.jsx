import React from 'react'
import * as styled from './GridStyles'

function Grid({ children, evenly, gap, justify, cols, style }) {
  return (
    <styled.Grid
      style={style}
      evenly={evenly}
      gap={gap}
      justify={justify}
      cols={cols}
    >
      {children}
    </styled.Grid>
  )
}

export default Grid
