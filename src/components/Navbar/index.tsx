import styled from 'styled-components'
import Title from './Title'
import Filters from './Filters'

const Nav = styled.div`
  width: 90%;
  max-width: 1300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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