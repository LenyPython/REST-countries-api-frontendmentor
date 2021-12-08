# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Redux](https://redux.js.org/)
- [Redux-saga](https://redux-saga.js.org/)
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Practiced fetching data from API.
Practiced TS.
RWD.

```css
:root {
  --main-background-color: ${ ({mode}) =>  mode? 'hsl(207, 26%, 17%)':'hsl(0, 0%, 98%)'};
  --main-text-color:  ${ ({mode}) =>  mode? 'hsl(0, 0%, 100%)':'hsl(200, 15%, 8%)'};
  --main-elements-color:  ${ ({mode}) =>  mode? 'hsl(209, 23%, 22%)':'hsl(0, 0%, 100%)'};
  --main-input-color: ${ ({mode}) =>  mode? 'hsl(0, 0%, 100%)':'hsl(0, 0%, 52%)'};
  --content-horizontal-offset: 50px;
  font-family: 'Nunito Sans', sans-serif;
  @media(max-width: 875px){
    --content-horizontal-offset: 15px;
  }
```
```js
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


//////////////////FILTERING COUNTRIES//////////////////////////////
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

```

## Author

- Website - [Piotr Lenartowicz](https://www.lenypython.github.io)
- Frontend Mentor - [@lenypython](https://www.frontendmentor.io/profile/lenypython)

