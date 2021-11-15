import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { sortProductsByName, sortProductsByPrice, currency } from '../redux/reducers/products'

const Header = () => {
  const dispatch = useDispatch()
  const productsBasket = useSelector((store) => store.basket.productInBasket)
  const [isRevers, setIsRevers] = useState(true)
  const currantCurrency = useSelector((store) => store.products.currency)
  const currantCurrencyName = useSelector((store) => store.products.currencyName)
  const sumPrice = productsBasket.reduce((acc, rec) => {
    return acc + rec.price
  }, 0)

  return (
    <div className="flex flex-col items-center justify-center bg-indigo-100 text-black font-bold border shadow-lg p-2 w-screen">
      <div className="flex justify-between w-full items-center z-50 justify-items-stretch">
        <div id="brand-name" className="brand-name border rounded py-1 px-2">
          <Link to="/">
            <img
              src="http://exotic-fruits.herokuapp.com/images/eshop-logo.png"
              alt="logo"
              className="float-left w-16 sm:w-16 md:w-24 xl:w-32 mr-2 sm:mr-16 xl:mr-64  justify-self-start"
            />
          </Link>
        </div>
        <div id="order-count" className="order-count border rounded py-1 px-2">
          <Link to="/basket">In basket: {productsBasket.length}</Link>
        </div>
        <div id="order-count" className="order-count border rounded py-1 px-2">
          <Link to="/basket">
            Amount of purchases: {(sumPrice * currantCurrency).toFixed(2)} {currantCurrencyName}
          </Link>
        </div>
        <div id="order-count" className="order-count border rounded py-1 px-2">
          <button
            name="USD"
            type="button"
            className="bg-indigo-400 rounded-md mr-2 p-1"
            onClick={(e) => {
              dispatch(currency(e.target.name))
            }}
          >
            USD
          </button>
          <button
            name="EUR"
            type="button"
            className="bg-indigo-400 rounded-md mr-2 p-1"
            onClick={(e) => {
              dispatch(currency(e.target.name))
            }}
          >
            EUR
          </button>
          <button
            name="CAD"
            type="button"
            className="bg-indigo-400 rounded-md mr-2 p-1"
            onClick={(e) => {
              dispatch(currency(e.target.name))
            }}
          >
            CAD
          </button>
        </div>
        <div id="order-count" className="order-count border rounded py-1 px-2">
          <button
            type="button"
            className="sort-price bg-yellow-300 rounded-md mr-2 p-1"
            onClick={() => {
              setIsRevers(!isRevers)
              dispatch(sortProductsByPrice(isRevers))
            }}
          >
            Sort by price
          </button>
          <button
            type="button"
            className="sort-name bg-yellow-300 rounded-md mr-2 p-1"
            onClick={() => {
              setIsRevers(!isRevers)
              dispatch(sortProductsByName(isRevers))
            }}
          >
            Sort by name
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)
