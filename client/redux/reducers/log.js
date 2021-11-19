import axios from 'axios'

const CREATE_LOG_LIST = 'CREATE_LOG_LIST'
const DELETE_LOG_FILE = 'DELETE_LOG_FILE'

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
    case DELETE_LOG_FILE: {
      return {
        ...state,
        logs: action.payload
      }
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

export const deleteFileOfLogs = () => {
  return async (dispatch) => {
    await axios
      .delete('/api/v1/logs')
      .then(() => {
        dispatch({
          type: DELETE_LOG_FILE,
          payload: []
        })
      })
      .catch((e) => console.log('error', e))
  }
}
