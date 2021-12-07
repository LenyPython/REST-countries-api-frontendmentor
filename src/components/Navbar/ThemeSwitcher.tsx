import styled from 'styled-components'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {changeMode, getGlobalMode} from '../../slices/Global'
import { ReactComponent as Moon } from '../../svgs/moon.svg'
import { ReactComponent as FilledMoon } from '../../svgs/moonfilled.svg'

const Container = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  * {
    margin: auto .4em;
    }
  @media(max-width: 875px){
    font-size: .9rem;
  }
`

const ThemeSwitcher = () => {
  const dispatch = useAppDispatch()
  const mode = useAppSelector(getGlobalMode)
  return <Container onClick={()=>dispatch(changeMode())}>
    {
    mode?
      <FilledMoon />:
      <Moon />
    }
    Dark Mode
  </Container>
}

export default ThemeSwitcher
