import React, { Suspense } from 'react'
import AppFooter from '../../Components/AppFooter'
import AppHeader from '../../Components/AppHeader'
import AppSidebar from '../../Components/AppSidebar'
import { CContainer, CSpinner } from '@coreui/react'
const Store = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper-custom d-flex flex-column min-vh-100 bg-light" id='shrinked-custom'>
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <Suspense fallback={<CSpinner color="primary" />}>
              Store Welcomes you
            </Suspense>
          </CContainer>
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default Store