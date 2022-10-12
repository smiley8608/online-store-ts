import React from 'react'
import Sorter from './Modifiers/Sorter'
import Filter from './Modifiers/Filter'


const StoreLayout = () => {
  return (
    <div className='tw-w-full'>
        {/* Filter and Sorter */}
        <div className='tw-flex tw-w-full tw-justify-between tw-p-3'>
            <Sorter/>
            <Filter/>
        </div>
    </div>
  )
}

export default StoreLayout