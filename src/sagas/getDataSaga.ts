import axios from 'axios'
import { takeLeading, call } from 'redux-saga/effects'


enum ACTIONS {
	GET_DATA ='GET_DATA'
}
export default function* getDataWatcher() {
	yield takeLeading(ACTIONS.GET_DATA, getDataWorker)
}

function* getDataWorker() {
	const data = yield call(getData)
	console.log(data)
}

const getData = async () => {
	const URL = 'https://restcountries.com/v2/all'
	axios.get(URL)

}
