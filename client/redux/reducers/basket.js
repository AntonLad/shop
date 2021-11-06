const ADD_BASKET = 'ADD_BASKET'
const initialState = {
  productInBasket: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BASKET: {
      return {
        ...state,
        productInBasket: [...state.productInBasket, action.payload]
      }
    }
    default:
      return state
  }
}
