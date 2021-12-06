import { all, fork } from 'redux-saga/effects'
import getDataWatcher from './getDataSaga'

export default function* rootSaga() {
	yield all([
		fork(getDataWatcher),
	])

}
