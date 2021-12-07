import styled from 'styled-components'
import {useAppDispatch} from '../../app/hooks'
import {CountryInterface, setCountry} from '../../slices/Global'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 275px;
  margin: 20px 0;
  border-radius: 5px;
  border: 5px solid hsla(0,0%,0%,.1);
  overflow: hidden;
  cursor: pointer;
  &:hover {
    border: 5px solid hsla(0,0%,0%,.6);
  }
  img { width: 100%; }
  h3 { margin: 2em 0; }
  p { margin: .4em 0; }
  div { margin: auto 2em 2em; }
`
const CountryCard: React.FC<CountryInterface> = (Props) => {
  const dispatch = useAppDispatch()
  const { region, population, capital, name, flag  } = Props
  return <Container
      onClick={()=>dispatch(setCountry(Props)) }>
    <img src={flag} alt='coutry_flag' />
    <div>
      <h3>{name}</h3>
      <p><b>Population:</b> {population.toLocaleString()}</p>
      <p><b>Region:</b> {region}</p>
      <p><b>Capital:</b> {capital}</p>
    </div>
  </Container>
}

export default CountryCard
