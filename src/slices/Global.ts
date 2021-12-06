import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

interface GlobalStateInterface {
	darkMode: boolean
  countries: CountryInterface[]
}
export interface CountryInterface {
  flag: string
  name: string
  nativeName: string
  topLevelDomain: string[]
  population: number
  region: string
  subregion: string 
  capital: string 
  currencies: Object[]
  languages: Object[]
  borders: string[]
  alpha3Code: string
}
const initialState: GlobalStateInterface = {
	darkMode: false,
  countries: []
}

const GlobalState = createSlice({
  name: 'GlobalState',
  initialState,
  reducers:{
    changeMode: state => {
      state.darkMode = !state.darkMode
    },
    setCountries: (state, action: PayloadAction<CountryInterface[]>) => {
      state.countries = action.payload
    }
  }
})

export const { 
  changeMode,
  setCountries,
} = GlobalState.actions

export const getGlobalMode = (state: RootState) => state.GlobalState.darkMode
export const getCountries = (state: RootState) => state.GlobalState.countries

export default GlobalState.reducer
