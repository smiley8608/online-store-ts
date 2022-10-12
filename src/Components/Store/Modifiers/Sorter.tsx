import { Button, Popover, Slider } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"

const Sorter = () => {
    const [open, setOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchParams, setParams] = useSearchParams()
    const [priceRadios, setpriceRadios] = useState<string | null>("relevance")
    const [rangevalue, setValue] = useState<[number, number]>([10, 50000])


    useEffect(() => {
        console.log("runner");
        setParams(`sort=${priceRadios as string}&range=${rangevalue[0]}-${rangevalue[1]}`)
    }, [priceRadios, setParams, rangevalue])

    const hide = () => {
        setOpen(false);
    };

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };


    const SortContent = () => {
        return (
            <div className=' tw-col-span-1 md:tw-col-span-1 tw-w-60 tw-grid tw-grid-cols-1 tw-gap-1 '>
                {/* <div className=' tw-text-gray-800 tw-text-lg tw-font-medium'>Price</div> */}
                <div className=' tw-gap-1 tw-align-baseline'>
                    <input checked={"relevance" === priceRadios} type={"radio"} name="relevance" id='relevance' onChange={() => setpriceRadios("relevance")} /> <label htmlFor='relevance' onClick={hide}>Relevance</label><br />
                    <input checked={"lth"===priceRadios} type={"radio"} name="lth" id='lth' onChange={() => setpriceRadios("lth")} /> <label htmlFor='lth' onClick={hide}>Price Low to High</label><br />
                    <input checked={"htl"===priceRadios} type={"radio"} name="htl" id='htl' onChange={() => setpriceRadios("htl")} /> <label htmlFor='htl' onClick={hide}>Price High to Low</label><br />
                    <Slider dots={true} step={100} min={100} max={50000} range defaultValue={rangevalue} onAfterChange={(e) => {
                        setValue(e)
                    }} />
                </div>
            </div>
        )
    }

    return (
        <Popover
            content={<SortContent />}
            title="Sort Products"
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
            placement={"bottomLeft"}

        >
            <Button type="ghost">Sort Products</Button>
        </Popover>
    )
}

export default React.memo(Sorter)