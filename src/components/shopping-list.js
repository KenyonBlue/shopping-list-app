import React from 'react'

const ShoppingList = () => {
  return (
    <div className='w-full flex items-center justify-center h-screen '>
            <div className="w-full md:w-614px h-290px border border-LIGHTGREY flex items-center justify-center flex-col rounded-md">
                    <p className='text-LIGHTGREY text-18px font-nunito font-normal'> Your shopping list is empty :( </p>
                    <button className='text-14px bg-BLUE rounded-md p-2 text-WHITE mt-6 font-nunito font-semibold'> Add your first item </button>
            </div>
    </div>
  )
}

export default ShoppingList