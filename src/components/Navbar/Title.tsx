import styled from 'styled-components'
import ThemeSwitcher from './ThemeSwitcher'

const Container = styled.div`
  background: var(--main-elements-color);
  @media(max-width:875px){
    h2{ font-size: .9rem; }
  })
`
const Title = () => {
  return <Container>
      <h2>
        Where in the world?
      </h2>
      <ThemeSwitcher />

  </Container>
}

export default Title
