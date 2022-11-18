import axios from 'axios'

export const authenticate = (username, password) => async (dispatch) => {
  return await axios
    .post(`https://localhost:5002/api/Users/UserLogin`, {
      UserName: username,
      Password: password,
    })
    .then((payload) => {
      dispatch({ type: 'AUTH_SUCCESS', payload, username, password })
    })
    .catch((err) => {
      dispatch({ type: 'AUTH_FAILURE' })
    })
}

export const signup = (name, surname, email, username, password) => async dispatch => {
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
  return await axios
    .post(`https://localhost:5002/api/Users/Registry`, {
      name: name,
      surname: surname,
      email: email,
      username: username,
      password: password
    }, axiosConfig)
    .then(payload => {
      dispatch({ type: 'SIGNUP_SUCCESS', payload, name, surname, email, username, password})
    })
    .catch(err => {
      dispatch({ type: 'SIGNUP_FAILURE' })
    })
}