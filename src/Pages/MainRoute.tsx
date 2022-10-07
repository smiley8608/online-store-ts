import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './MainPages/Cart'
import Orders from './MainPages/Orders'
import Profile from './MainPages/Profile'
import Error404 from './openPages/Error404'
import Error500 from './openPages/Error500'
import { CContainer, CSpinner } from '@coreui/react'


const MainRoute = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          <Route path='/cart' element={<Cart />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/internalservererror' element={<Error500 />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(MainRoute)