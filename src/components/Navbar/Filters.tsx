import styled from 'styled-components'
import BackButton from './BackButton'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {getCountry, getFilter, setFilterName, setFilterRegion} from '../../slices/Global'
import { ReactComponent as Glass } from '../../svgs/mglass.svg'

const Container = styled.div`
  display: flex;
  @media(max-width: 875px){
    align-items: start;
    flex-direction: column;
  }

`
const StyledInput = styled.div`
  display: flex;
  align-items: center;
  background: var(--main-elements-color);
  padding: 1em 2em;
  border-radius: 5px;
  box-shadow: 0 0 0 5px hsla(0,0%,0%,.1);
  width: 40%;
  max-width: 450px;
  &:hover {
    box-shadow: 0 0 0 5px hsla(0,0%,0%,.6);
  }
  svg {
    height: 20px;
    width: 20px;
    fill: var(--main-input-color);
    margin-right: 1.2em;
  }
  input {
    background: transparent;
    color: var(--main-input-color);
    width: 100%;
    border: none;
    outline: none;
    cursor:pointer;
  }
  @media(max-width: 875px){
    width:100%;
    margin-bottom: 3.5em;
  }
`

const StyledSelect = styled.div`
  background: var(--main-elements-color);
  box-shadow: 0 0 0 5px hsla(0,0%,0%,.1);
  border-radius: 5px;
  padding: 1em;
  &:hover {
    box-shadow: 0 0 0 5px hsla(0,0%,0%,.6);
  }
  select {
    width: 200px;
    font-weight: 600;
    background: var(--main-elements-color);
    color: var(--main-input-color);
    border: none;
    cursor: pointer;
  }
`

const Filters = () => {
  const dispatch = useAppDispatch()
  const filters = useAppSelector(getFilter)
  const Country = useAppSelector(getCountry)

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilterRegion(e.target.value))
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterName(e.target.value))
  }

  if(Country) return <BackButton />

  return (
    <Container>
      <StyledInput>
        <Glass />
        <input 
          type='string'
          value={filters.name}
          onChange={handleInputChange}
          placeholder="Search for a country..."
        />
      </StyledInput>
      <StyledSelect>
      <select 
        name="countries"
        value={filters.region}
        onChange={handleSelectChange}
        id="countries"
      >
        <option value='' hidden={!Boolean(filters.region)}>{filters.region?'All':'Filter by Region'}</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>Americas</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
        
      </select> 
      </StyledSelect>
    </Container>
  )
}

export default Filters
