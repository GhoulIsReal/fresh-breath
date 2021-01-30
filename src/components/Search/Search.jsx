import React, { useState, useRef } from 'react'
import * as styled from './SearchStyles'

const Search = ({ width, input: value, onChange: setValue, submit }, ref) => {
  const [selected, setSelected] = useState(false)
  const input = useRef(null)

  const handleSearch = () => {
    if (value.length > 0) {
      const assign = submit || function () {}
      assign(value)
      setSelected(true)
      input.current.focus()
    }
  }

  const searchClear = () => {
    setValue('')
    setSelected(false)
  }

  return (
    <styled.SearchHolder width={width}>
      <styled.IconHolder onClick={handleSearch} style={{ left: 0 }}>
        <styled.SearchIcon
          x='0px'
          y='0px'
          viewBox='0 0 511.999 511.999'
          style={{ fill: selected ? '#1d78b7' : '' }}
        >
          <g>
            <g>
              <path
                d='M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
			S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
			c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
			c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z'
              />
            </g>
          </g>
        </styled.SearchIcon>
      </styled.IconHolder>
      <styled.Input
        ref={(ref, input)}
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={(e) => e.key === 'Enter' && handleSearch(value)}
        onFocus={() => setSelected(true)}
        onBlur={() => setSelected(false)}
        fill={selected ? 1 : 0}
        placeholder='Search...'
      ></styled.Input>
      {value.length > 0 && (
        <styled.IconHolder onClick={searchClear} style={{ right: 0 }}>
          <styled.CloseIcon viewBox='0 0 329.26933 329'>
            <path d='m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0' />
          </styled.CloseIcon>
        </styled.IconHolder>
      )}
    </styled.SearchHolder>
  )
}

export default React.forwardRef(Search)
