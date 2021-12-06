import axios from 'axios'
import { takeLeading, put, call } from 'redux-saga/effects'
import {setCountries, CountryInterface} from '../slices/Global'

const DATA_KEY = 'COUNTRIES'

enum ACTIONS {
	GET_DATA ='GET_DATA'
}

export const getDataAction = {
	type: ACTIONS.GET_DATA
}
export default function* getDataWatcher() {
	yield takeLeading(ACTIONS.GET_DATA, getDataWorker)
}

function* getDataWorker() {
	const storedData = sessionStorage.getItem(DATA_KEY);
	let data: CountryInterface[]
	if(!storedData) data = yield call(getData)
	else data = JSON.parse(storedData)
	yield put(setCountries(data))
}

const getData = async () => {
	const URL = 'https://restcountries.com/v2/all'
	const data = await (await axios.get(URL)).data
	console.log('Fetching from api')

	sessionStorage.setItem(DATA_KEY, JSON.stringify(data));
	return data

}
