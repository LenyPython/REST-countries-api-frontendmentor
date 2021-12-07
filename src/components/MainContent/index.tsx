import styled from 'styled-components'
import Card from '../Card'
import { useAppSelector } from '../../app/hooks'
import {getCountries} from '../../slices/Global';
import {getFilter} from '../../slices/Global'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 var(--content-horizontal-offset);
  @media(max-width: 1160px) {
    justify-content: space-evenly;

  }
`

const MainContent = () => {
  const countries = useAppSelector(getCountries)
  const filters = useAppSelector(getFilter)
  const CARDS = [] as JSX.Element[]

  for(let key in countries){
    const item = countries[key]
    if(filters.region && filters.region !== item.region) continue
    if(filters.name && 
       !item.name.toLowerCase().includes(filters.name.toLowerCase())) continue
    CARDS.push(
      <Card
        key={`${item.name}`}
        {...item}
      />
    )

  }
  return <Container>
      {CARDS}
  </Container>
}

export default MainContent;
