import React, { useContext } from 'react'
import { ListContext } from '../context/list-context'

import EmptyList from './empty-list'
import ItemsList from './items-list'

const ShoppingList = () => {
    const {listOfItems, setListofItems} = useContext(ListContext)
    


  return (
    <div className='w-full flex items-center justify-center h-screen '>
            {listOfItems.length < 1 ? <EmptyList/>  : 
            <ItemsList />
            }
    </div>
  )
}

export default ShoppingList