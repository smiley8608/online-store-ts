import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error404 from './openPages/Error404'
import Error500 from './openPages/Error500'
import SignIn from './openPages/SignIn'

const OpenRoute = () => {
  return (
    <Routes>
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignIn/>} />
        <Route path='/forgotpassword' element={<SignIn/>} />
        <Route path='/' element={<SignIn/>} />
        <Route path='/internalservererror' element={<Error500/>} />
        <Route path='/*' element={<Error404/>} />
    </Routes>
  )
}

export default OpenRoute