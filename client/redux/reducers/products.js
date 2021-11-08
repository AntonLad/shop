import DataOfProducts from '../../components/data-of-products'
// import { useSelector } from 'react-redux'

const PRODUCT_LIST = 'PRODUCT_LIST'
const SORT_PRODUCTS = 'SORT_PRODUCTS'
const SORT_PRODUCTS_BY_PRICE = 'SORT_PRODUCTS_BY_PRICE'

const initialState = {
  productList: []
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
      if (action.payload) {
        const prodSort = DataOfProducts.sort((a, b) => {
          const nameA = a.title.toLowerCase()
          const nameB = b.title.toLowerCase()
          if (nameA < nameB) return -1
          if (nameA > nameB) return 1
          return 0
        })
        return {
          productList: [...prodSort]
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
          productList: [...prodSort]
        }
      }
    }
    /* falls through */
    case SORT_PRODUCTS_BY_PRICE: {
      const prodSortByPrice = DataOfProducts.sort((a, b) => {
        return a.price - b.price
      })
      return {
        productList: [...prodSortByPrice]
      }
    }
    default:
      return state
  }
}

export function allProducts(value) {
  return {
    type: 'PRODUCT_LIST',
    payload: value
  }
}
