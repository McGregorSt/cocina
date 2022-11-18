export const showLeftSidebar = () => {
  return {
    type: 'SHOW_LEFTSIDEBAR',
  }
}
export const profilesOn = () => {
  return {
    type: 'PROFILES_ON_OFF',
  }
}
export const changeCurrentView = (slashUrl) => {
  return {
    type: 'CHANGE_CURRENT_VIEW',
    slashUrl
  }
}