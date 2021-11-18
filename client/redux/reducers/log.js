import axios from 'axios'

const ADD_LOG = 'ADD_LOG'
const REMOVE_LOG = 'REMOVE_LOG'

const initialState = {
  logs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOG: {
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
