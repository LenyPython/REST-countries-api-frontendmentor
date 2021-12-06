import styled from 'styled-components'
import Card from '../Card'
import { useAppSelector } from '../../app/hooks'
import {getCountries} from '../../slices/Global';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const MainContent = () => {
  const dataArr = useAppSelector(getCountries)
  return <Container>
    {
      dataArr.map((item,_idx) => <Card
        key={`${item.name} ${_idx}`}
        name={item.name}
        population={item.population}
        region={item.region}
        capital={item.capital}
        src={item.flag}
      />
       )
    }
  </Container>
}

export default MainContent;
