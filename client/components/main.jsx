import React from 'react'

import DataOfProducts from './data-of-products'

const Cards2 = () => {
  const getData = DataOfProducts.map((it) => it.title)

  return (
    <div className="container mx-auto">
      {DataOfProducts.map((it) => {
        return <div key="it.id"> {it.title} </div>
      })}

      <div className="flex flex-wrap -mx-4 pt-40 pb-5">
        <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4">
          <div className="cards">
            <div className="card__image"> img</div>
            <div className="card__title">card__title</div>
            <div className="card__price">price</div>
            <div className="currency">currency</div>
            <div className="card__product-amount">card__product-amount</div>
            <span className="box m-1 ml-auto bg-green-600 text-white hover:bg-green-800 rounded-md">
              <button type="button" className="min-w-full px-2">
                Add to basket
              </button>
            </span>
            <div>{getData}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards2
