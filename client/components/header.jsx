import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { userName } = useParams()
  return (
    <div className="flex flex-col items-center justify-center bg-indigo-100 text-black font-bold border shadow-lg p-2 w-screen">
      <div id="repository-name">{userName}</div>
      <div className="flex justify-between w-full">
        <div id="brand-name" className="brand-name border rounded py-1 px-2">
          <Link to="/">Our brand img</Link>
        </div>
        <div id="order-count" className="order-count border rounded py-1 px-2">
          <Link to="/basket">Basket, count of products</Link>
        </div>
        <div id="order-count" className="order-count border rounded py-1 px-2">
          <button type="button" className="bg-indigo-400 rounded-md mr-2 p-1">USD</button>
          <button type="button" className="bg-indigo-400 rounded-md mr-2 p-1">EUR</button>
          <button type="button" className="bg-indigo-400 rounded-md mr-2 p-1">CAD</button>
        </div>
        <div id="order-count" className="order-count border rounded py-1 px-2">
          <button type="button" className="sort-price bg-yellow-300 rounded-md mr-2 p-1">Sort by price</button>
          <button type="button" className="sort-name bg-yellow-300 rounded-md mr-2 p-1">Sort by name</button>
        </div>

        <div id="go-repository-list" clasName="border rounded py-1 px-2">
          <Link to={`/${userName}`}>To Repository list</Link>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)
