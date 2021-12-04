import Navbar from './components/Navbar'
import GlobalStyle from './styled/GlobalStyle'
import {useAppSelector} from './app/hooks'
import {getGlobalMode} from './slices/Global'



const App = () => {
  const mode = useAppSelector(getGlobalMode)
  return <>
    <GlobalStyle mode={mode}/>
    <Navbar />
  </>
}

export default App;
