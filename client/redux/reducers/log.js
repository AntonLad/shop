import axios from 'axios'

const CREATE_LOG_LIST = 'CREATE_LOG_LIST'
const REMOVE_LOG = 'REMOVE_LOG'

const initialState = {
  logs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_LOG_LIST: {
      return {
        ...state,
        logs: action.payload
      }
    }
    case REMOVE_LOG: {
      return []
    }

    default:
      if (action.type.indexOf('@@') !== 0 && action.type.indexOf('PRODUCT_LIST') !== 0) {
        const time = new Date()
        axios
          .post('/api/v1/logs', {
            action: action.type,
            title: action.name,
            curency: action.currencyName,
            time
          })
          .then(({ data }) => JSON.stringify(data))
      }

      return state
  }
}

export const logList = () => {
  return async (dispatch) => {
    await axios('/api/v1/logs')
      .then(({ data }) => {
        dispatch({
          type: CREATE_LOG_LIST,
          payload: data
        })
      })
      .catch((e) => console.log('error', e))
  }
}

// if (action.type.indexOf('@@') !== 0) {
//   const time = +new Date()
//   return (dispatch) => {
//     axios.post('/api/v1/logs', { action: action.type, time }).then(({ data }) => {
//       dispatch({
//         data
//       })
//     })
//   }
// const time = +new Date()
// axios('/api/v1/logs/:id'
// //  {
// //   action: action.type,
// //   time
// // }
// ).then(({ data }) => data )
