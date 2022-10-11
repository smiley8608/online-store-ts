import React from 'react'
import { Link } from 'react-router-dom'

import {
  CContainer,
  CHeader,
  CHeaderBrand,
  // CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CNavbarText
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

// import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from '../assets/brand/logo'
import { useAppDispatch, useAppState } from '../Redux/Hook'
import { sidebarToggle } from '../Redux/Slices/CommonSlice'

const CHeaderBrandCustom = CHeaderBrand as any

const AppHeader = () => {
  const dispatch = useAppDispatch()
  const auth = useAppState(state => state.user.auth)
  const sidebarShow = useAppState((state) => state.common.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => {
            dispatch(sidebarToggle())
            const elemmain = document.getElementById("shrinked-custom") as HTMLDivElement
            if(window.innerWidth >= 768){
              elemmain.style.paddingLeft = "18em"
              if(sidebarShow){
                elemmain.style.paddingLeft = "0em"
              }
            }
          }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrandCustom className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} />
        </CHeaderBrandCustom>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <Link className='tw-no-underline tw-text-slate-500 tw-mx-2' to={"/"}><CNavbarText>Store</CNavbarText></Link>
          </CNavItem>
          <CNavItem>
            <Link className='tw-no-underline tw-text-slate-500 tw-mx-2' to={"/cart"}><CNavbarText>Cart</CNavbarText></Link>
          </CNavItem>
          {auth && <CNavItem>
            <Link className='tw-no-underline tw-text-slate-500 tw-mx-2' to={"/u/orders"}><CNavbarText>Orders</CNavbarText></Link>
          </CNavItem>}
          {auth && <CNavItem>
            <Link className='tw-no-underline tw-text-slate-500 tw-mx-2' to={"/u/profile"}><CNavbarText>Account</CNavbarText></Link>
          </CNavItem>}
          {auth && <CNavItem>
            <Link className='tw-no-underline tw-text-slate-500 tw-mx-2' to={"/u/signout"}><CNavbarText>SignOut</CNavbarText></Link>
          </CNavItem>}
          {!auth && <CNavItem>
            <Link className='tw-no-underline tw-text-slate-500 tw-mx-2' to={"/signin"}><CNavbarText>Sign In</CNavbarText></Link>
          </CNavItem>}
          {!auth && <CNavItem>
            <Link className='tw-no-underline tw-text-slate-500 tw-mx-2' to={"/signup"}><CNavbarText>Sign Up</CNavbarText></Link>
          </CNavItem>}
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      {/* <CHeaderDivider /> */}
      {/* <CContainer fluid>
        <AppBreadcrumb /> 
        <div>Hello</div>
      </CContainer> */}
    </CHeader>
  )
}

export default AppHeader
