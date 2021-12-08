import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

interface GlobalStateInterface {
	darkMode: boolean
  countries: {[key:string]:CountryInterface}
  country: CountryInterface | null
  codeHash: {[key:string]: string}
  filter: { region: string, name: string }
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
  currencies: {'name': string}[]
  languages: {'name': string}[]
  borders: string[]
  alpha3Code: string
}

const initialState: GlobalStateInterface = {
	darkMode: false,
  countries: {},
  country: null,
  codeHash: {},
  filter: {
    region: '',
    name: ''
  }
}

const GlobalState = createSlice({
  name: 'GlobalState',
  initialState,
  reducers:{
    changeMode: state => {
      state.darkMode = !state.darkMode
    },
    setFilterRegion: (state, action: PayloadAction<string>) => {
      state.filter.region = action.payload
    },
    setFilterName: (state, action: PayloadAction<string>) => {
      state.filter.name = action.payload
    },
    setCountry: (state, action: PayloadAction<CountryInterface|null>) => {
      state.country = action.payload
    },
    setCountries: (state, action: PayloadAction<CountryInterface[]>) => {
      const DATA = action.payload.reduce((all, current)=>{
        let { flag, name, nativeName, topLevelDomain,
              population, region, subregion, capital, currencies,
              languages, borders, alpha3Code } = current
              if(!borders) borders = []
              all.countries[name] = { flag, name, nativeName, topLevelDomain,
              population, region, subregion, capital, currencies,
              languages, borders, alpha3Code }
              all.hash[alpha3Code] = name
        return all
      },{ countries: {} as {[key: string]: CountryInterface} , 
          hash:{} as {[key: string]: string}
      })
      state.countries = DATA.countries
      state.codeHash = DATA.hash
      console.log(state.countries)
      console.log(state.codeHash)
    }
  }
})

export const { 
  changeMode,
  setCountry,
  setCountries,
  setFilterName,
  setFilterRegion,
} = GlobalState.actions

export const getGlobalMode = (state: RootState) => state.GlobalState.darkMode
export const getCountries = (state: RootState) => state.GlobalState.countries
export const getCountry = (state: RootState) => state.GlobalState.country
export const getAlphaCode = (state: RootState) => state.GlobalState.codeHash
export const getFilter = (state: RootState) => state.GlobalState.filter

export default GlobalState.reducer
