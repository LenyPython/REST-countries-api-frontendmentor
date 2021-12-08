import styled from 'styled-components'
import {useAppSelector} from '../../app/hooks'
import {CountryInterface, getAlphaCode} from '../../slices/Global'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 5em;
  width: 100%;
  padding: 1em var(--content-horizontal-offset);
  h3 { margin: 2em 0; }
  p { margin: .3em 0; }
  .img-container { 
    background: hsla(0,0%,0%,.1);
    width: 45%;
    box-shadow: 0 0 0 10px hsla(0,0%,0%,.1);
    img{ width: 100%; }
  }
  .flex { 
    display: flex;
    flex-grow: 1;
  }
  .content { 
    flex-direction: column;
    margin-right: 3em;
    margin-bottom: 2em;
  }
  .bottom { 
    display: grid;
    grid-template-columns: 135px 1fr;
    margin-top: 2em;
    & > div {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }
  }
  .box {
    background: var(--main-elements-color);
    border-radius: 5px;
    text-align: center;
    font-weight: 600;
    border: 5px solid hsla(0, 0%, 0%, .1);
    margin: auto .2em;
    padding: .3em .5em;
  }
  @media(max-width: 950px){
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 2em;
  }
  @media(max-width: 600px){
    & > div{ width: 100%; }
    .img-container { width: 100%; }
    .flex { flex-direction: column; }
    .bottom {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
    }
  }
`
const Country: React.FC<CountryInterface> = (Props) => {
  const { region, population, currencies, topLevelDomain, capital,
    nativeName, borders, name, flag, subregion, languages  } = Props
  const curreArray = currencies.map(item => item.name)
  const langArr = languages.map(item => item.name)
  const codeHash = useAppSelector(getAlphaCode)

  const neighbours = borders.map( item => {
    return <div key={item} className="box">{codeHash[item]}</div>
  } ) 
  return <Container>
    <div className="img-container">
      <img src={flag} alt='coutry_flag' />
    </div>
    <div>
      <h3>{name}</h3>
      <div className='flex'>
        <div className=' flex content'>
          <p><b>Native Name:</b> {nativeName}</p>
          <p><b>Population:</b> {population.toLocaleString()}</p>
          <p><b>Region:</b> {region}</p>
          <p><b>Sub Region:</b> {subregion}</p>
          <p><b>Capital:</b> {capital}</p>
        </div>
        <div className='flex content'>
          <p><b>Top LeveL Domain:</b> {topLevelDomain.join(', ')}</p>
          <p><b>Currencies:</b> {curreArray.join(', ')}</p>
          <p><b>Languages:</b> {langArr.join(', ')}</p>
        </div>
      </div>
      <div className='flex bottom'>
        <p><b>Border Countries:</b></p> 
        <div>
          {neighbours}
        </div>
      </div>
    </div>
  </Container>
}

export default Country
