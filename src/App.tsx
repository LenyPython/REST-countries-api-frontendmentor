import styled from 'styled-components'
import Navbar from './components/Navbar'
import GlobalStyle from './styled/GlobalStyle'
import MainContent from './components/MainContent'
import CountryPage from './components/CountryPage'
import {useAppSelector} from './app/hooks'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {getDataAction} from './sagas/getDataSaga'
import {getCountry, getGlobalMode} from './slices/Global'

const Container = styled.div`
  display: flex;
  flex-direction:column;
  width: 100%;
  max-width: 1350px;
`


const App = () => {
  const dispatch = useDispatch()
  const Country = useAppSelector(getCountry)
  useEffect(() => {
    dispatch(getDataAction)
  },[])

  const mode = useAppSelector(getGlobalMode)
  return <Container>
    <GlobalStyle mode={mode}/>
    <Navbar />
    {
    Country?
      <CountryPage {...Country}/>
      :
      <MainContent />

    }
  </Container>
}

export default App;
