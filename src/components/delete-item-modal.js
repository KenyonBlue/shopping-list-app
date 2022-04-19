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
          <div className="w-full md:w-560px h-80 shadow-md bg-WHITE p-4 flex-col">
            <p> Delete Item </p>
            <p>
              are you sure you want to delete this item? This cannot be undone
            </p>
            <button
              onClick={() => removeItemFromList(deleteItemModal?.id)}
              className="w-20 flex items-center justify-center bg-BLUE rounded-md text-WHITE"
            >
              Delete
            </button>
            <button
              onClick={() => setDeleteItemModal({ isDeleteModalOpen: false, id: null })}
              className="w-20 flex items-center justify-center border rounded-md text-BLUE"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteItemModal;