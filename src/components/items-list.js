import React, { useContext, useEffect } from "react";
import { ListContext } from "../context/list-context";
import { MdOutlineEdit } from "react-icons/md";
import { BiTrashAlt } from "react-icons/bi";

const ItemsList = () => {
    const {listOfItems, setListofItems, openAddItemModal, setOpenAddItemModal} = useContext(ListContext)

  return (
    <div className="h-screen w-full flex flex-col items-center">
      <div className="w-full border-b border-LIGHTGREY p-4 flex items-end justify-between mb-4">
        <p className="text-18px font-nunito">Your Items</p>
        <button onClick={() => setOpenAddItemModal(true)} className="text-14px bg-BLUE rounded-md p-2 text-WHITE mt-6 font-nunito font-semibold">
          Add item
        </button>
      </div>
      {/* map over this */}
      {listOfItems.map(item => {
          return (
              <>         
      <div key={item.name} className="my-4 w-full h-20 flex justify-between border border-LIGHTGREY rounded-md">
        <div className="flex items-center">
          <input type="checkbox" className="mx-4 h-6 w-6" />
          <div className="flex flex-col">
            <p className="font-semibold text-16px">{item?.title}</p>
            <p className="font-normal text-LIGHTGREY text-14px">{item?.description}</p>
          </div>
        </div>
        <div className="w-28 h-full flex justify-between">
          <div className="w-1/2 flex items-center justify-center">
            <MdOutlineEdit className="w-6 h-6" />
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <BiTrashAlt className="w-6 h-6" />
          </div>
        </div>
      </div>
              </>
          )
      })}

    </div>
  );
};

export default ItemsList;