import React, { useContext } from 'react'
import { ListContext } from '../context/list-context'

const EmptyList = () => {

    const { setItemModal } = useContext(ListContext)

    return (
        <>
            <div className="w-full md:w-614px h-290px border border-LIGHTGREY flex items-center justify-center flex-col rounded-md">
                <p className='text-LIGHTGREY text-18px font-nunito font-normal'> Your shopping list is empty :( </p>
                <button onClick={() => setItemModal({isModalOpen: true, status: 'add'})} className='text-14px bg-BLUE rounded-md p-2 text-WHITE mt-6 font-nunito font-semibold'> Add your first item </button>
            </div>
        </>
    )
}

export default EmptyList