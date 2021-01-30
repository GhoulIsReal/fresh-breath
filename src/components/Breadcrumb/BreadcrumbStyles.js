import styled from 'styled-components'

const BreadcrumbNav = styled.nav`
  & > ol {
    display: flex;
    list-style: none;
    padding: 0.75rem 1rem;
    flex-wrap: wrap;
    margin: 0 0 1rem 0;
  }
  & > ol > li:not(:first-child)::before {
    display: inline-block;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    color: #6c757d;
    content: '/';
  }
  & > ol > li > a {
    text-decoration: none;
    color: #000;
  }
`

export { BreadcrumbNav }
