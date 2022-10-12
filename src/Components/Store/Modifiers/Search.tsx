import React from 'react'
import { Input } from 'antd'
import axios from 'axios'
import { useAppDispatch } from '../../../Redux/Hook'
import { initialize } from '../../../Redux/Slices/ProductSlice'

const Search = () => {

    const dispatch = useAppDispatch()

    const onSearch = (value: string) => {
        console.log(value)
        axios.get("/product/searchproduct?search="+value)
        .then(searchProducts => {
            dispatch(initialize(searchProducts.data.products))
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <Input.Search className='tw-col-span-2 md:tw-col-span-4 lg:tw-w-1/2' placeholder="Search Products here..." onSearch={onSearch} enterButton  />
    )
}

export default Search