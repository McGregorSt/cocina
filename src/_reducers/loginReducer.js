import produce from 'immer'
import { loginData } from '../data/loginJson'

const initialState = loginData

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'AUTH_SUCCESS': {
      return produce(state, draft => {
        draft[0].username = action.username
        draft[0].password = action.password
        draft[0].token = action.payload.data.token
        draft[0].responseStatus = action.payload.status
      })
    }
    case 'AUTH_FAILURE': {
      return produce(state, draft => {
        draft[0].responseStatus = 403
      })
    }
    case 'SIGNUP_SUCCESS': {
      return produce(state, draft => {
        draft[1].message = []
        action.payload.data.errors.map(err => (
          draft[1].message.push(err)
        ))
        draft[1].username = action.username
        draft[1].password = action.password
        draft[1].name = action.name
        draft[1].surname = action.surname
        draft[1].email = action.email
        draft[1].success = action.payload.data.succeeded

      })
    }
    default:
      return state
  }
}

export default loginReducer