import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// import DataOfProducts from './data-of-products'

const Header = () => {
  const dispatch = useDispatch()
  const productsBasket = useSelector((store) => store.basket.productInBasket)
  const [isRevers, setIsRevers] = useState(true)
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
          <Link to="/basket">Basket, {productsBasket.length}</Link>
        </div>
        <div id="order-count" className="order-count border rounded py-1 px-2">
          <Link to="/basket">Summury of products, XX usd</Link>
        </div>
        <div id="order-count" className="order-count border rounded py-1 px-2">
          <button type="button" className="bg-indigo-400 rounded-md mr-2 p-1">
            USD
          </button>
          <button type="button" className="bg-indigo-400 rounded-md mr-2 p-1">
            EUR
          </button>
          <button type="button" className="bg-indigo-400 rounded-md mr-2 p-1">
            CAD
          </button>
        </div>
        <div id="order-count" className="order-count border rounded py-1 px-2">
          <button 
            type="button"
            className="sort-price bg-yellow-300 rounded-md mr-2 p-1"
            onClick={() => {
              dispatch({
                type: 'SORT_PRODUCTS_BY_PRICE'
              })
            }}
            >
            Sort by price
          </button>
          <button
            type="button"
            className="sort-name bg-yellow-300 rounded-md mr-2 p-1"
            onClick={() => {
              setIsRevers(!isRevers)
              dispatch({
                type: 'SORT_PRODUCTS',
                payload: isRevers
              })
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
