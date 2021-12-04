import styled from 'styled-components'
import { useState } from 'react'
import { ReactComponent as Glass } from '../../svgs/mglass.svg'

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  background: var(--main-elements-color);
  padding: 1em 2em;
  border-radius: 5px;
  width: 30%;
  svg {
    height: 20px;
    width: 20px;
    fill: var(--main-input-color);
    margin-right: 1.2em;
  }
  input {
    background: transparent;
    color: var(--main-input-color);
    border: none;
    outline: none;
  }
`

const StyledSelect = styled.div`
  background: var(--main-elements-color);
  padding: 1em;
  select {
    background: var(--main-elements-color);
    color: var(--main-input-color);
    border: none;
  }
`

const Filters = () => {
  const [selectOpt, setSelectOpt] = useState('default')
  const [inputValue, setInputValue] = useState('')
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectOpt(e.target.value)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)

  return (
    <div>
      <StyledInput>
        <Glass />
        <input 
          type='string'
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search for a country..."
        />
      </StyledInput>
      <StyledSelect>
      <select 
        name="countries"
        value={selectOpt}
        onChange={handleSelectChange}
        id="countries"
      >
          <option value='default' disabled hidden>Filter by Region </option>
        
      </select> 
      </StyledSelect>
    </div>
  )
}

export default Filters
