import produce from 'immer'
import { app } from '../data/mainJson'

const initialState = app

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_LEFTSIDEBAR': {
      return produce(state, (draft) => {
        draft.showSidebar = !state.showSidebar
      })
    }
    case 'PROFILES_ON_OFF': {
      return produce(state, (draft) => {
        draft.profilesOn = !state.profilesOn
      })
    }
    case 'CHANGE_CURRENT_VIEW': {
      return produce(state, (draft) => {
        draft.currentView = action.slashUrl
        if (state.showRightSidebar && action.slashUrl !== '/product-state') {
          draft.showRightSidebar = false
        }
        if (state.showRightSidebar && action.slashUrl !== '/product-state') {
          draft.showRightSidebar = false
        }
      })
    }
    case 'SHOW_RIGHT_SIDEBAR': {
      return produce(state, (draft) => {
          draft.showRightSidebar = !state.showRightSidebar
      })
    }
    case 'CLOSE_RIGHT_SIDEBAR': {
      return produce(state, (draft) => {
        draft.showRightSidebar = !state.showRightSidebar
      })
    }
    default:
      return state
  }
}

export default mainReducer
