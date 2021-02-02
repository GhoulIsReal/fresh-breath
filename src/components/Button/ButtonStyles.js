import styled from 'styled-components'

const Button = styled.button`
  padding: ${(props) => (props.inline ? '5px 15px' : '10px 15px')};
  cursor: pointer;
  border: ${(props) => (props.type ? '1px solid #ddd' : 'none')};
  border-radius: ${(props) => (props.type ? '5px' : '')};
  background-color: ${(props) =>
    props.type === 'error'
      ? 'red'
      : props.type === 'success'
      ? 'green'
      : '#ddd'};
  color: ${(props) => (props.type ? '#fff' : '#123')};
  &:hover {
    ${(props) =>
      props.hover && `transition: 0.25s ease; filter: brightness(0.85);`}
  }
  &:focus {
    outline: none;
  }
`

export { Button }
