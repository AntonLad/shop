import React from 'react'
import { useSelector } from 'react-redux'

const Button = () => {
  const listOfProducts = useSelector((store) => store.products.productList)

  return (
    <button
      type="button"
      className="border rounded m-1 p-2"
      // onClick={onClick}
    >
      {listOfProducts.map((it) => {
        const priceUSD = it.price
        return priceUSD
      })}
    </button>
  )
}

export default Button
