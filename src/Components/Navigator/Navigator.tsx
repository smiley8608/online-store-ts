import React from 'react'
import CIcon from '@coreui/icons-react'
import {
    // cilBell,
    // cilCalculator,
    // cilChartPie,
    // cilCursor,
    // cilDescription,
    cilDrop,
    // cilNotes,
    cilPencil,
    // cilPuzzle,
    cilSpeedometer,
    // cilStar,
} from '@coreui/icons'
// import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { CNavItem, CNavTitle } from '@coreui/react'

const Navigator = [
    {
        component: CNavItem,
        name: 'Dashboard',
        to: '/dashboard',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
        badge: {
            color: 'info',
            text: 'NEW',
        },
    },
    {
        component: CNavTitle,
        name: 'Theme',
    },
    {
        component: CNavItem,
        name: 'Colors',
        to: '/theme/colors',
        icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Typography',
        to: '/theme/typography',
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    },
    {
        component: CNavTitle,
        name: 'Components',
    }]

export default Navigator