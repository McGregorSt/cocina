import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import MainTemplate from '../template/MainTemplate'
import Button from '../components/atoms/Button'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate, signup } from '../_actions/loginActions'
import { Navigate } from 'react-router-dom'

const StyledTemplate = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 200px;
  color: #fff;
`

const StyledCenteredDiv = styled.div`
  width: 500px;
  height: 50vh;
  display: grid;
  grid-template-rows: 1fr 2.5fr;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.grey800};
  transition-duration: 0.3s;

  ${({ signup }) =>
    signup &&
    css`
      height: 60vh;
      width: 650px;
      transition-duration: 0.3s;
    `}
`
const StyledWelcome = styled.div`
  justify-self: center;
  & p {
    font-size: 24px;
    font-weight: 100;
    text-align: center;
    margin: 10px;
    :nth-child(2) {
      font-size: 36px;
      font-weight: 300;
    }
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledSignupFileds = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledPersonalData = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
`

const StyledLogon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ signup }) =>
    signup &&
    css`
      flex-direction: row;
      justify-content: center;
      width: 50%;
    `}
`

const StyledEmail = styled.div``

const StyledField = styled.input`
  width: 330px;
  height: 25px;
  margin: 10px 10px;
  padding: 10px 15px;
  border-radius: 30px;
  border: none;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 300;

  ${({ email }) =>
    email &&
    css`
      width: 460px;
    `}
`

const StyledLogOrSign = styled.div`
  width: 180px;
  padding: 30px 0;
  display: flex;
  justify-content: space-around;

  & span {
    :nth-child(2n + 1) {
      cursor: pointer;
    }
  }
`

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()

  const isAuth = useSelector((state) => state.loginState[0].token)
  const loginStatus = useSelector(
    (state) => state.loginState[0].responseStatus
  )
  const isRegistrySuccessful = useSelector(
    (state) => state.loginState[1].success
  )
  const registryErrors = useSelector((state) => state.loginState[1].message)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (isLogin) {
      dispatch(authenticate(username, password))
    } else {
      dispatch(signup(name, surname, email, username, password))
    }
  }
  const displayErrors = registryErrors.map((msg) => (
    <li key={Math.random()}>{msg.description}</li>
  ))

  return (
    <MainTemplate>
      <StyledTemplate>
        <StyledCenteredDiv signup={!isLogin}>
          <StyledWelcome>
            <p>Welcome to</p>
            <p>Kitchen Display System</p>
            <span>{`${isAuth}`}</span>
          </StyledWelcome>
          {isAuth || isRegistrySuccessful ? <Navigate to='/orders' /> : ''}
          <StyledForm>
            {isLogin ? (
              ''
            ) : (
              <StyledSignupFileds>
                {isRegistrySuccessful ? (
                  <span>Registry successful</span>
                ) : (
                  <ul style={{ listStyle: 'none' }}>{displayErrors}</ul>
                )}
                <StyledEmail email>
                  <StyledField
                    email
                    id='email'
                    name='email'
                    placeholder='email'
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </StyledEmail>
                <StyledPersonalData>
                  <StyledField
                    id='name'
                    name='name'
                    placeholder='name'
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                  />
                  <StyledField
                    id='surname'
                    name='surname'
                    placeholder='surname'
                    type='text'
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </StyledPersonalData>
              </StyledSignupFileds>
            )}
            <span>{loginStatus === 403 ? 'Bad username or password' : ''}</span>
            <StyledLogon signup={!isLogin}>
              <StyledField
                id='username'
                name='username'
                placeholder='nickname'
                type='text'
                onChange={(e) => setUsername(e.target.value)}
              />
              <StyledField
                id='password'
                name='password'
                placeholder='password'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </StyledLogon>
            <Button
              type='submit'
              style={{ color: 'black' }}
              onClick={(e) => handleFormSubmit(e)}
            >
              {isLogin ? 'Log In' : 'Sign Up'}
            </Button>
            <StyledLogOrSign>
              <span onClick={() => setIsLogin(true)}>Log in</span>
              <span>|</span>
              <span onClick={() => setIsLogin(false)}>Sign up</span>
            </StyledLogOrSign>
          </StyledForm>
          {/* </Formik> */}
        </StyledCenteredDiv>
      </StyledTemplate>
    </MainTemplate>
  )
}

export default LoginPage
