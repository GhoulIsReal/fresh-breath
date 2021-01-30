import styled from 'styled-components'

const AnchorStyled = styled.a`
  display: flex;
  align-items: center;
  width: fit-content;
  text-decoration: none;
  color: ${(props) => props.color && props.color};
  position: relative;
  text-align: center;
  padding: 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    ${(props) => props.hover && 'filter: brightness(0.9);'}
  }
  &::before,
  ::after {
    ${(props) =>
      props.underline &&
      `content: ''; position: absolute; bottom: -10px; width: 0px; height: 5px; margin: 5px 0 0; transition: all 0.12s ease-in-out; transition-duration: 0.75s; opacity: 0; background-color: ${
        props.color
      }; ${props.underline === 'left' ? 'right: 0' : 'left: 0'}`}
  }
  &:hover::before,
  &:hover::after {
    ${(props) => props.underline && 'width: 100%; opacity: 1;'}
  }
`

const Text = styled.span`
  ${(props) =>
    props.extra && props.position === 'right'
      ? `padding-right: ${props.sidePadding[0]}`
      : props.extra && props.position === 'left'
      ? `padding-left: ${props.sidePadding[0]}`
      : ''};
  font-size: ${(props) => (props.sidePadding ? props.sidePadding[1] : '16px')};
`

const IconHolder = styled.div`
  position: absolute;
  ${(props) => (props.position === 'right' ? 'right: 0;' : 'left: 0')};
  display: flex;
  max-width: 24px;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export { AnchorStyled, IconHolder, Text }
