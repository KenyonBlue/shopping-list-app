import React, { useState, useContext, useEffect } from "react";
import { ListContext } from "../context/list-context";
import Select from 'react-select'

const AddItemModal = () => {
    const {listOfItems, setListofItems, addItemModal, setItemModal} = useContext(ListContext)
    const [title , setTitle] = useState('')
    const [description , setDescription] = useState('')
    const [count , setCount] = useState('')
    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' }
      ]
      const addItemToList = () => {
          setListofItems(items => [...items, ...[{title, description, id: 2, count}]])
          setTitle("")
          setDescription("")
          setCount("")
      }
      
  return (
    <>
        {addItemModal.isModalOpen && <div className="absolute w-screen h-screen flex items-center justify-center flex-col bg-BLACK_OPACITY">
            <div className="w-full md:w-560px h-768px shadow-md bg-WHITE p-4">
               <div className="w-full p-4 font-dosis flex justify-between"> <p> SHOPPING LIST </p> <button onClick={() => setItemModal({isModalOpen: false})}>x</button> </div>
               <div className="w-full px-4 font-dosis"> <p> Add an Item </p> </div>
               <div className="w-full px-4 font-dosis"> <p> Add your new item below </p> </div>
               <input type="text" className='mt-4 h-10 border-LIGHTGREY border w-full rounded-md' value={title} onChange={(e) => setTitle(e.target.value)} />
               <textarea type="text" className='h-20 border border-LIGHTGREY w-full my-8 rounded-md' value={description} onChange={(e) => setDescription(e.target.value)} />
               <Select value={count} options={options} />
               <button onClick={addItemToList} className="text-14px bg-BLUE rounded-md p-2 text-WHITE mt-6 font-nunito font-semibold">
          Add item
        </button>
            </div>
        </div>}
    </>
  )
}

export default AddItemModal