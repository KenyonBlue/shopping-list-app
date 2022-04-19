import React, { useState, useContext, useEffect } from "react";
import { ListContext } from "../context/list-context";
import { BiTrashAlt } from "react-icons/bi";

const DeleteItemModal = () => {
  const { deleteItemModal, setDeleteItemModal, setListofItems } =
    useContext(ListContext);

  const removeItemFromList = (id) => {
    setListofItems((items) => items.filter((item) => item.id !== id));
    setDeleteItemModal({ isDeleteModalOpen: false, id: null });
  };

  return (
    <>
      {deleteItemModal.isDeleteModalOpen && (
        <div className="absolute w-screen h-screen flex items-center justify-center flex-col bg-BLACK_OPACITY">
          <div className="w-full md:w-455px h-80 shadow-md bg-WHITE p-4 flex flex-col rounded-md justify-between">
              <div className="w-full h-60 flex-col">

            <p className="text-18px font-semibold mb-4"> Delete Item </p>
            <p className="text-LIGHTGREY">
              are you sure you want to delete this item? This cannot be undone
            </p>
              </div>

              <div className="h-12 w-full justify-end flex-row flex">
         
            <button
              onClick={() => setDeleteItemModal({ isDeleteModalOpen: false, id: null })}
              className="w-20 flex items-center justify-center border rounded-md text-BLUE"
            >
              Cancel
            </button>
            <button
              onClick={() => removeItemFromList(deleteItemModal?.id)}
              className="ml-2 w-20 flex items-center justify-center bg-BLUE rounded-md text-WHITE"
            >
              Delete
            </button>
              </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteItemModal;
