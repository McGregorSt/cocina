import produce from 'immer'
import { app } from '../data/mainJson'

const initialState = app

const appState = (state = initialState, action) => {
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
        if (state.showRightSidebar && action.slashUrl !== '/cocina/product-supply') {
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

export default appState
