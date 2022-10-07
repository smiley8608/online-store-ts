import React from 'react'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from '../assets/brand/logo-negative'
import { sygnet } from '../assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from './Navigator/Navigator'
import { useAppDispatch, useAppState } from '../Redux/Hook'
import { sidebarToggle } from '../Redux/Slices/CommonSlice'

const CSidebarBrandCustom  = CSidebarBrand as any
const AppSidebar = () => {
  const dispatch = useAppDispatch()
  const unfoldable = useAppState((state) => state.common.sidebarUnfoldable)
  const sidebarShow = useAppState((state) => state.common.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrandCustom className="d-none d-md-flex" to="/">
        <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrandCustom>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch(sidebarToggle())}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
