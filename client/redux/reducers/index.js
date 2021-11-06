import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import basket from './basket'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    basket
  })

export default createRootReducer
