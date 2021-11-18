// import thunk from 'redux-thunk'
import axios from 'axios'
import DataOfProducts from '../../components/data-of-products'
// import { useSelector } from 'react-redux'

const PRODUCT_LIST = 'PRODUCT_LIST'
const SORT_PRODUCTS = 'SORT_PRODUCTS'
const SORT_PRODUCTS_BY_PRICE = 'SORT_PRODUCTS_BY_PRICE'
const CURRENCY = 'CURRENCY'

const initialState = {
  productList: [],
  currency: 1,
  currencyName: 'USD',
  name: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST: {
      return {
        ...state,
        productList: action.payload
      }
    }
    case SORT_PRODUCTS: {
      return {
        ...state,
        productList: [...action.payload],
        name: action.name
      }
    }
    case SORT_PRODUCTS_BY_PRICE: {
      return {
        ...state,
        productList: [...action.payload],
        name: action.name
      }
    }
    case CURRENCY: {
      return {
        ...state,
        currency: [...action.payload],
        currencyName: [...action.currencyName]
      }
    }
    default:
      return state
  }
}

export function allProducts(value) {
  // const valuePlus = value.map((it) => {
  //   return {...it, key: countInBasket}
  // })
  return {
    type: PRODUCT_LIST,
    payload: value
  }
}

export function sortProductsByName(value) {
  if (value) {
    const prodSort = DataOfProducts.sort((a, b) => {
      const nameA = a.title.toLowerCase()
      const nameB = b.title.toLowerCase()
      if (nameA < nameB) return -1
      if (nameA > nameB) return 1
      return 0
    })
    return {
      type: SORT_PRODUCTS,
      payload: prodSort,
      name: 'name'
    }
  }
  {
    const prodSort = DataOfProducts.sort((a, b) => {
      const nameA = a.title.toLowerCase()
      const nameB = b.title.toLowerCase()
      if (nameA < nameB) return 1
      if (nameA > nameB) return -1
      return 0
    })
    return {
      type: SORT_PRODUCTS,
      payload: prodSort,
      name: 'name'
    }
  }
}

export function sortProductsByPrice(value) {
  if (value) {
    const prodSortByPrice = DataOfProducts.sort((a, b) => {
      return a.price - b.price
    })
    return {
      type: SORT_PRODUCTS_BY_PRICE,
      payload: prodSortByPrice,
      name: 'price'
    }
  }
  {
    const prodSortByPrice = DataOfProducts.sort((a, b) => {
      return b.price - a.price
    })
    return {
      type: SORT_PRODUCTS_BY_PRICE,
      payload: prodSortByPrice,
      name: 'price'
    }
  }
}

export function currency(value) {
  return async (dispatch) => {
    await axios('/api/v1')
      .then(({ data }) => {
        dispatch({
          type: CURRENCY,
          payload: data[value],
          currencyName: value
        })
      })
      .catch((e) => console.log('error', e))
  }
}
