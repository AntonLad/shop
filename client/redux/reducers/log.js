
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
      return {
        ...state,
        logs: action.payload
      }
    }
    
    default:
      if (action.type.indexOf('@@') !== 0) {
        const time = +new Date()
        axios('/api/v01/logs')
        
      }  
       
        
      
  }
}