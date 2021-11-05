import React from 'react'

import DataOfProducts from './data-of-products'
import Header from './header'

const Cards = () => {
  // const getData = DataOfProducts.map((it) => it.title)

  return (
    <div>
      <Header />
      {DataOfProducts.map((it) => {
        return (
          <div key="it.id">
            <div className="card w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4 ">
              <span className="card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div className="card__image relative pb-48 overflow-hidden">
                  <img src={it.image} alt="it.title"/>
                </div>

                <div className="p-4">
                  <a href="/product/37">

                    <h2 className="card__title mt-2 mb-2  font-bold">{it.title}</h2>
                    {/* <p className="text-sm">Se.</p> */}
                  </a>
                  <div className="mt-3 flex items-center">
                    <span className="card__price font-bold text-xl"> {it.price} </span>
                    <span className="currency text-sm font-semibold">currency</span>
                    <span className="card__product-amount text-sm font-semibold flex ml-2">how much in busket</span>
                    <span className="text-sm font-semibold">
                      <div className="flex ml-2">
                        <span className="box m-1 ml-auto bg-green-600 text-white hover:bg-green-800 rounded-md">
                          <button type="button" className="min-w-full px-2">
                            Add to basket
                          </button>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>

              </span>
            </div>

            <div className="relative pb-48 overflow-hidden">img1 {it.title}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Cards
