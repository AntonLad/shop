// import React from 'react'
// import { useSelector } from 'react-redux'

const ADD_BASKET = 'ADD_BASKET'
const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET'
const initialState = {
  productInBasket: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BASKET: {
      return {
        ...state,
        productInBasket: action.payload
      }
    }
    case REMOVE_FROM_BASKET: {
      return {
        ...state,
        productInBasket: action.payload
      }
    }
    case 'SORT_PRODUCTS_BY_PRICE_B': {
      return {
        ...state,
        productInBasket: [...action.payload]
      }
    }
    default:
      return state
  }
}

export const addToBasket = (value, listInBasket) => {
  const idProd = value.id
  const getNewList = (idProduct) => {
    if (listInBasket.length === 0) {
      return [{ ...value, amount: 1 }]
    }
    const idList = listInBasket.map((obj) => obj.id)
    const foundIdIndex = idList.indexOf(idProduct)
    if (foundIdIndex === -1) {
      return [...listInBasket, { ...value, amount: 1 }]
    }
    return listInBasket.map((obj, index) =>
      index === foundIdIndex ? { ...obj, amount: obj.amount + 1 } : obj
    )
  }
  return {
    type: 'ADD_BASKET',
    payload: getNewList(idProd)
  }
}

export const removeFromBasket = (value, listInBasket) => {
  const idProd = value.id
  const getNewList = (idProduct) => {
    if (listInBasket.length === 0) {
      return [{ ...value, amount: 1 }]
    }
    const idList = listInBasket.map((obj) => obj.id)
    const foundIdIndex = idList.indexOf(idProduct)
    if (foundIdIndex === -1) {
      return [...listInBasket, { ...value, amount: 1 }]
    }
    return listInBasket.map((obj, index) =>
      index === foundIdIndex ? { ...obj, amount: obj.amount - 1 } : obj
    )
  }
  return {
    type: REMOVE_FROM_BASKET,
    payload: getNewList(idProd)
  }
}

export function sortProductsByPriceB(value, listInBasket) {
  if (value) {
    const prodSortByPrice = listInBasket.sort((a, b) => {
      return a.price - b.price
    })
    return {
      type: 'SORT_PRODUCTS_BY_PRICE_B',
      payload: prodSortByPrice
    }
  }
  {
    const prodSortByPrice = listInBasket.sort((a, b) => {
      return b.price - a.price
    })
    return {
      type: 'SORT_PRODUCTS_BY_PRICE_B',
      payload: prodSortByPrice
    }
  }
}

// const prodInBask = listInBasket.reduce((acc, rec) => {
//     if (rec.id !== value.id) {
//       return [...listInBasket, { ...value, count: 1 }]
//     }
//     return [{ ...rec, count: rec.count + 1 }]
//   },
//   [{ ...value, count: 1 }]
//   // []
// )
// return {
//   type: 'ADD_BASKET',
//   payload: prodInBask
// }

// const isExist = listInBasket.find((item) => item.id === value.id)
// let updatedList = []
// if (isExist) {
//   updatedList = listInBasket.map((obj) =>
//     obj.id === value.id ? { ...obj, count: obj.count + 1 } : obj
//   )
// } else {
//   updatedList = [...listInBasket, { ...value, count: 1 }]
// }

// return {
//   type: 'ADD_BASKET',
//   payload: updatedList
// }
