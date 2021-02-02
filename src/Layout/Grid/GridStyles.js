import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  justify-items: ${(props) => props.justify};
  grid-template-columns: repeat(
    ${(props) => (props.cols ? props.cols : 4)},
    1fr
  );
  ${(props) =>
    props.evenly &&
    `grid-template-columns: repeat(auto-fit, minmax(${
      typeof props.evenly === 'string' ? props.evenly : '300px'
    }, 1fr));`}
  gap: ${(props) => props.gap || '1rem'};
  width: 100%;
`

export { Grid }
