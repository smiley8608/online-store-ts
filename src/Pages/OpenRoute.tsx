import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useAppState } from '../Redux/Hook'
import Error404 from './openPages/Error404'
import Error500 from './openPages/Error500'
import ForgotPassword from './openPages/ForgotPassword'
import SignIn from './openPages/SignIn'
import Signup from './openPages/Signup'

const OpenRoute = () => {

  const auth = useAppState(state => state.user.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (auth) {
      navigate("/")
    }
  }, [navigate, auth])

  return (
    <Routes>
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/forgotpassword' element={<ForgotPassword />} />
      <Route path='/internalservererror' element={<Error500 />} />
      <Route path='/*' element={<Error404 />} />
    </Routes>
  )
}

export default OpenRoute