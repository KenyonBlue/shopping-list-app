import React, { useContext, useEffect, useState } from "react";
import { ListContext } from "../context/list-context";
import { MdOutlineEdit } from "react-icons/md";
import { BiTrashAlt } from "react-icons/bi";

const ItemsList = () => {
    const {listOfItems, setListofItems, addItemModal, setItemModal, setDeleteItemModal} = useContext(ListContext)
    const [ purchased, setPurchassed ] = useState(false)

    const removeItemFromList = (id) => {
        setListofItems(items => items.filter( item => item.id !== id))
    }

    const togglePurchased = (id) => {
        const copiedList = listOfItems;
        copiedList.map(item => {
          if (item.id == id) {
            item.purchased = !purchased;
          }
        })
        setListofItems(copiedList);
        setPurchassed(!purchased)
     }


  return (
    <div className="h-screen w-full flex flex-col items-center">
      <div className="w-full border-b border-LIGHTGREY p-4 flex items-end justify-between mb-4">
        <p className="text-18px font-nunito">Your Items</p>
        <button onClick={() => setItemModal({isModalOpen: true,  status: 'add'})} className="text-14px bg-BLUE rounded-md p-2 text-WHITE mt-6 font-nunito font-semibold">
          Add item
        </button>
      </div>
      {/* map over this */}
      {listOfItems.map(item => {
          return (
      <div key={item.id} className="my-4 w-full h-20 flex justify-between border border-LIGHTGREY rounded-md">
        <div className="flex items-center">
          <input checked={item?.purchased || false} onChange={() => togglePurchased(item?.id)} type="checkbox" className="mx-4 h-6 w-6" />
          <div className="flex flex-col">
            <p className={`font-semibold text-16px ${item.purchased && `line-through`}`}>{item?.title}</p>
            <p className={`font-normal text-LIGHTGREY text-14px ${item.purchased && `line-through`}`}>{item?.description} - id: {item?.id}</p>
          </div>
        </div>
        <div className="w-28 h-full flex justify-between">
          <button onClick={() => setItemModal({isModalOpen: true, status: 'edit', item: item})} className="w-1/2 flex items-center justify-center">
            <MdOutlineEdit className="w-6 h-6" />
          </button>
          {/* <button onClick={() => removeItemFromList(item?.id)} className="w-1/2 flex items-center justify-center"> */}
          <button onClick={() => setDeleteItemModal({isDeleteModalOpen: true, id: item?.id})} className="w-1/2 flex items-center justify-center">
            <BiTrashAlt className="w-6 h-6" />
          </button>
        </div>
      </div>
          )
      })}

    </div>
  );
};

export default ItemsList;
