import styled from 'styled-components'

const Container = styled.div`
  background: var(--main-elements-color);
  width: 275px;
  margin: 20px;
  img { width: 100%; }
  h3 { margin: 2em 0; }
  p { margin: .4em 0; }
  div { margin: 2em; }
`
interface Props {
  name: string
  population: number
  region: string
  capital: string
  src: string
}
const CountryCard: React.FC<Props> = ({name, src, population, region, capital}) => {
  return <Container>
    <img src={src} alt='coutry_flag' />
    <div>
      <h3>{name}</h3>
      <p><b>Population:</b> {population}</p>
      <p><b>Region:</b> {region}</p>
      <p><b>Capital:</b> {capital}</p>
    </div>
  </Container>
}

export default CountryCard
