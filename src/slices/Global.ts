import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

interface GlobalStateInterface {
	darkMode: boolean
}
const initialState: GlobalStateInterface = {
	darkMode: false
}

const GlobalState = createSlice({
  name: 'GlobalState',
  initialState,
  reducers:{
    changeMode: state => {
      state.darkMode = !state.darkMode
    },
  }
})

export const { 
  changeMode,
} = GlobalState.actions

export const getGlobalMode = (state: RootState) => state.GlobalState.darkMode

export default GlobalState.reducer
