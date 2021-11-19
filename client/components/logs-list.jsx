import React from 'react'

import { useSelector } from 'react-redux'

import Header from './header'

const Log = ({ history }) => {
  const logList = useSelector((store) => store.log.logs)
  return (
    <div>
      <Header history={history}/>
      <div>
        {logList.map((it) => (
          <div key={it.time}>{`${it.action} -- ${it.title} ${it.curency} -- ${it.time}`}</div>
        ))}
      </div>
    </div>
  )
}
export default Log
