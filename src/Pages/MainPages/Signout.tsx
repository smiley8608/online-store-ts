import React from 'react'
import { LoadingOutlined} from "@ant-design/icons"
import { Spin } from 'antd'
const Signout = () => {
  return (
    <div className='tw-w-full tw-grid tw-justify-center'>
      <Spin className={"tw-relative tw-top-1/2 -tw-translate-y-1/2"} indicator={<LoadingOutlined style={{ fontSize: 40 }} spin/>}  />
      
    </div>
  )
}

export default Signout