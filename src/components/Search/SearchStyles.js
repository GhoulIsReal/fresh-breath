import styled from 'styled-components'

const SearchHolder = styled.div`
  width: ${(props) => (props.width ? props.width : '380px')};
  position: relative;
`

const Input = styled.input`
  width: ${(props) => (props.width ? props.width - '70px' : '310px')};
  line-height: 30px;
  font-size: 15px;
  padding: 0 35px;
  border-radius: 2px;
  border: 1.5px solid ${(props) => (props.fill ? '#1d78b7' : '#3e3e3e')};
  color: #123;
  &:focus {
    outline: none;
  }
`

const IconHolder = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32.6px;
  width: 35px;
  position: absolute;
  top: 0;
  cursor: pointer;
`

const SearchIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #3e3e3e;
`

const CloseIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: #3e3e3e;
`

export { SearchHolder, Input, IconHolder, SearchIcon, CloseIcon }
