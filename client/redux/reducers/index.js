import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import basket from './basket'
import products from './products'
import log from './log'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    basket,
    products,
    log
  })

export default createRootReducer
