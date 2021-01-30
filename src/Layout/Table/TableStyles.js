import styled from 'styled-components'

const Table = styled.table`
  text-align: left;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  border-collapse: collapse;
`

const Header = styled.thead`
  text-transform: uppercase;
  background: ${(props) => (props.color ? props.color : '#000')};
`

const heading = styled.th`
  padding: 1rem 1.5rem;
  max-width: 200px;
  font-weight: 400;
  color: ${(props) => (props.color ? props.color : '#fff')};
`

const Body = styled.tbody`
  background: ${(props) => (props.color ? props.color : '#fff')};
`

const row = styled.tr`
  &:not(:last-child) > td {
    border-bottom: 1px solid #e3f1d5;
  }
`

const cell = styled.td`
  padding: 1rem 1.5rem;
  max-width: 200px;
  color: ${(props) => (props.color ? props.color : '#000')};
  ${(props) =>
    props.wrap ||
    '  text-overflow: ellipsis; white-space: nowrap; overflow: hidden;'}
`

export { Table, Header, heading, Body, row, cell }
