import styled from 'styled-components'
import Title from './Title'
import Filters from './Filters'

const Nav = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 45px;
  & > div {
    display: flex;
    justify-content: space-between;
    padding: 1.5em 5em;
    margin-bottom: 1em;
    width: 100%;
  }
`

const Navbar = () => {


  return (
  <Nav>
    <Title />
    <Filters />
  </Nav>

  )}

  export default Navbar
