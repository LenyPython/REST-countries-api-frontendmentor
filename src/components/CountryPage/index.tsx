import styled from 'styled-components'
import {useAppSelector} from '../../app/hooks'
import {CountryInterface, getAlphaCode} from '../../slices/Global'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  padding: 1em var(--content-horizontal-offset);

  .img-container { 
    background: hsla(0,0%,0%,.1);
    width: 45%;
    box-shadow: 0 0 0 10px hsla(0,0%,0%,.1);
    img{ width: 100%; }
  }
  h3 { margin: 2em 0; }
  p { margin: .6em 0; }
  .info { width: 45%; }
  .flex { display: flex; }
  .content { margin-right: 3em; }
  .bottom { 
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    margin-top: 4em; }
  .box {
    background: var(--main-elements-color);
    border-radius: 5px;
    text-align: center;
    font-weight: 600;
    border: 5px solid hsla(0, 0%, 0%, .1);
    margin: auto .2em;
    padding: .3em .5em;
  }
`
const Country: React.FC<CountryInterface> = (Props) => {
  const { region, population, currencies, topLevelDomain, capital,
    nativeName, borders, name, flag, subregion, languages  } = Props
  const codeHash = useAppSelector(getAlphaCode)

  const neighbours = borders.map( item => {
    return <div key={item} className="box">{codeHash[item]}</div>
  } ) 
  return <Container>
    <div className="img-container">
      <img src={flag} alt='coutry_flag' />
    </div>
    <div className='info'>
      <h3>{name}</h3>
      <div className='flex'>
        <div className='content'>
          <p><b>Native Name:</b> {nativeName}</p>
          <p><b>Population:</b> {population.toLocaleString()}</p>
          <p><b>Region:</b> {region}</p>
          <p><b>Sub Region:</b> {subregion}</p>
          <p><b>Capital:</b> {capital}</p>
        </div>
        <div className='content'>
          <p><b>Top LeveL Domain:</b> {topLevelDomain.join(', ')}</p>
          <p><b>Currencies:</b> {currencies.map(item => `${item.name}, `)}</p>
          <p><b>Languages:</b> {languages.map(item => `${item.name}, `)}</p>
        </div>
      </div>
      <div className='flex bottom'>
        <p><b>Border Countries:</b></p> {neighbours}
      </div>
    </div>
  </Container>
}

export default Country
