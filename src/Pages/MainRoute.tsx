import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Orders from './MainPages/Orders'
import Profile from './MainPages/Profile'
import Error404 from './openPages/Error404'
import Error500 from './openPages/Error500'
import { CContainer, CSpinner } from '@coreui/react'
import Signout from './MainPages/Signout'
import { useAppState } from '../Redux/Hook'


const MainRoute = () => {
  const auth = useAppState(state => state.user.auth)
  return (
    <>
      {auth ? <CContainer lg>
        <Suspense fallback={<CSpinner color="primary" />}>
          <Routes>
            <Route path='/orders' element={<Orders />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/signout' element={<Signout />} />
            <Route path='/internalservererror' element={<Error500 />} />
            <Route path='/*' element={<Error404 />} />
          </Routes>
        </Suspense>
      </CContainer> : <Navigate to={"/signin"} />}
    </>
  )
}


export default React.memo(MainRoute)