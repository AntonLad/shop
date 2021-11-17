import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from './header'
import { removeFromBasket } from '../redux/reducers/basket'

const Basket = () => {
  const dispatch = useDispatch()
  const products = useSelector((store) => store.basket.productInBasket)
  const currantCurrencyName = useSelector((store) => store.products.currencyName)
  const currantCurrency = useSelector((store) => store.products.currency)
  const sumPrice = products.reduce((acc, rec) => {
    return acc + rec.price * rec.amount
  }, 0)

  return (
    <div>
      <Header />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap -mx-4 pt-40 pb-5">
          {products.map((it) => {
            if (it.amount === 0) {
              return ''
            }
            return (
              <div key={it.id} className="card w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4">
                <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                  <div className="card__image relative pb-48 overflow-hidden">
                    <img
                      src={it.image}
                      alt={it.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="card__title mt-2 mb-2  font-bold">{it.title}</h2>
                    <div className="mt-3 flex items-center">
                      <span className="card__price font-bold text-xl">
                        {(it.price * currantCurrency).toFixed(2)}
                      </span>
                      <span className="currency text-sm font-semibold">{currantCurrencyName}</span>
                      <span className="card__product-amount text-sm font-semibold flex ml-2">
                        In busket: {it.amount}
                      </span>
                      <span className="text-sm font-semibold">
                        <div className="flex ml-2">
                          <span className="box m-1 ml-auto bg-green-600 text-white hover:bg-green-800 rounded-md">
                            <button
                              type="button"
                              className="min-w-full px-2 mt-2 mb-2  font-bold"
                              onClick={() => dispatch(removeFromBasket(it, products))}
                            >
                              remove from basket
                            </button>
                          </span>
                        </div>
                      </span>
                    </div>
                    <div className="product__total_price mt-2 mb-2  font-bold">
                      Total price: {(it.price * currantCurrency * it.amount).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div id="total-amount" className="font-bold text-xl mt-2 mb-2">
        Total amount: {(sumPrice * currantCurrency).toFixed(2)} {currantCurrencyName}
      </div>
    </div>
  )
}

export default Basket

// export const AmountInBasket = () => {
//   const products = useSelector((store) => store.basket.productInBasket)
//   return products.map((it) => it.amount)
// }
