import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useState } from 'react'

import DataOfProducts from './data-of-products'
import Header from './header'
import { allProducts } from '../redux/reducers/products'

const Cards = (props) => {
  console.log ('props', props)
  const dispatch = useDispatch()
  dispatch(allProducts(DataOfProducts))
  const listOfProducts = useSelector((store) => store.products.productList)
  const currantCurrency = useSelector((store) => store.products.currency)
  const currantCurrencyName = useSelector((store) => store.products.currencyName)
  
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap -mx-4 pt-40 pb-5">
          {listOfProducts.map((it) => {
           
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
                      <span className="currency text-sm font-semibold mr-2 p-1">{currantCurrencyName}</span>
                      <span className="card__product-amount text-sm font-semibold flex ml-2">
                        how much in busket
                      </span>
                      <span className="text-sm font-semibold">
                        <div className="flex ml-2">
                          <span className="box m-1 ml-auto bg-green-600 text-white hover:bg-green-800 rounded-md">
                            <button
                              type="button"
                              className="min-w-full px-2"
                              onClick={() => {
                                dispatch({
                                  type: 'ADD_BASKET',
                                  payload: it
                                })
                              }}
                            >
                              Add to basket
                            </button>
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cards
