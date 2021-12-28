import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { deleteFileOfLogs, logList } from '../redux/reducers/log'

import Header from './header'

const Log2 = ({ history }) => {
  const dispatch = useDispatch()
  const listOfLogs = useSelector((store) => store.log.logs)

  //  useEffect добавлен чтобы при перезагрузке страницы /logs - логи сразу загружались на страницу
  useEffect(() => {
    dispatch(logList())
  }, [dispatch])
  return (
    <div>
      <Header history={history} />
      <div>
        <table className="table-auto border-collapse border border-gray-400">
          <thead>
            <tr>
              <th>ActionName</th>
              <th>Action</th>
              <th>Time</th>
            </tr>
          </thead>
          {listOfLogs.map((it) => {
            if (it.action === 'CURRENCY') {
              const act = `change currency to ${it.curency}`
              return (
                <tr key={it.time} className="border border-gray-300">
                  <td>{it.action}</td>
                  <td>{act}</td>
                  <td>{it.time}</td>
                </tr>
              )
            }
            if (it.action === 'SORT_PRODUCTS_BY_PRICE') {
              const act = `sort by price ${it.title}`
              return (
                <tr key={it.time}>
                  <td>{it.action}</td>
                  <td>{act}</td>
                  <td>{it.time}</td>
                </tr>
              )
            }

            return (
              <tr key={it.time}>
                <td>{it.action}</td>
                <td>{`added product "${it.title}" to basket`}</td>
                <td>{it.time}</td>
              </tr>
            )
          })}
        </table>
        
        {/* {listOfLogs.map((it) => {
          return (
          
          

          if (it.action === 'CURRENCY') {
            return (
              <div
                key={it.time}
                className=""
              >{`${it.action} -- change currency to ${it.curency} -- at time: ${it.time}`}</div>
            )
          }
          if (it.action === 'SORT_PRODUCTS_BY_PRICE') {
            return (
              <div
                key={it.time}
              >{`${it.action} -- sort by price ${it.title} -- at time: ${it.time}`}</div>
            )
          }
          if (it.action === 'REMOVE_FROM_BASKET') {
            return (
              <div
                key={it.time}
              >{`${it.action} -- remove "${it.title}" from basket -- at time: ${it.time}`}</div>
            )
          }
          return (
            <div
              key={it.time}
            >{`${it.action} -- added product "${it.title}" to basket -- at time: ${it.time}`}</div>
          )
        })} */}
      </div>
      <button
        type="button"
        className="bg-red-400 rounded mx-2 py-1 px-1"
        onClick={() => {
          dispatch(deleteFileOfLogs())
        }}
      >
        Delete logs
      </button>
      {/* <button
        type="button"
        className="bg-red-400 rounded mx-2 py-1 px-1"
        onClick={() => {
          dispatch(logList())
        }}
      >
        Reload logs
      </button> */}
    </div>
  )
}
export default Log2
