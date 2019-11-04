import api from '../../../services/api'
import { call, put, all, takeLatest } from 'redux-saga/effects'
import { addToCartSucess } from './actions'

function* addToCart({ id }){
  const response = yield call(api.get, `/products/${id}`)
  console.log(response.data)
  yield  put(addToCartSucess(response.data))
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
])
