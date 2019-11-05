import api from '../../../services/api'
import { call, put, all, takeLatest, select } from 'redux-saga/effects'
import { formatPrice } from '../../../util/format'
import { addToCartSucess, updateAmount } from './actions'

function* addToCart({ id }){
  const productExists = yield select(
    state => state.cart.find(p => p.id ===id)
  )
  if (productExists){
    const amout = productExists.amount + 1
    yield put(updateAmount(id, amout))

  } else {
    const response = yield call(api.get, `/products/${id}`)
    const data = {
      ...response.data,
      amount: 1,
      priceFomated: formatPrice(response.data.price)
    }
    yield  put(addToCartSucess(data))
  }


}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
])
