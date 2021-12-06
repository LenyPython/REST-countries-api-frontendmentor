import styled from 'styled-components'
import Navbar from './components/Navbar'
import GlobalStyle from './styled/GlobalStyle'
import MainContent from './components/MainContent'
import {useAppSelector} from './app/hooks'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {getDataAction} from './sagas/getDataSaga'
import {getGlobalMode} from './slices/Global'

const Container = styled.div`
  display: flex;
  flex-direction:column;
  max-width: 1300px;
`


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDataAction)
  },[])

  const mode = useAppSelector(getGlobalMode)
  return <Container>
    <GlobalStyle mode={mode}/>
    <Navbar />
    <MainContent />
  </Container>
}

export default App;
