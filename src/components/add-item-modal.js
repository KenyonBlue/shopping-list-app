import React, { useState, useContext, useEffect } from "react";
import { ListContext } from "../context/list-context";
import { BiArrowToRight } from "react-icons/bi";
import Select from "react-select";
import uuid from "react-uuid";

const AddItemModal = () => {
  const { listOfItems, setListofItems, addItemModal, setItemModal } =
    useContext(ListContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [count, setCount] = useState("");
  const [purchased, setPurchassed] = useState(false);
  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];

  useEffect(() => {
    if (addItemModal.status == "edit") {
      setTitle(addItemModal.item.title);
      setDescription(addItemModal.item.description);
      setPurchassed(addItemModal.item.purchased || false);
      setCount({ value: addItemModal.item.count });
    } else {
      setTitle("");
      setDescription("");
      setCount("");
    }
  }, [addItemModal.status]);

  const addItemToList = () => {
    setListofItems((items) => [
      ...items,
      ...[{ title, description, id: uuid(), count }],
    ]);
    setTitle("");
    setDescription("");
    setCount("");
  };
  const editListItem = (id) => {
    const copiedList = listOfItems;
    copiedList.map((item) => {
      if (item.id == id) {
        item.title = title;
        item.description = description;
        item.count = count ? count : null;
      }
    });
    setListofItems(copiedList);
    setTitle("");
    setDescription("");
    setCount("");
    setItemModal({
      isModalOpen: false,
      item: { title: "", description: "", id: null },
      status: "add",
    });
  };

  const togglePurchased = (id) => {
    const copiedList = listOfItems;
    copiedList.map((item) => {
      if (item.id == id) {
        item.purchased = !purchased;
      }
    });
    setListofItems(copiedList);
    setPurchassed(!purchased);
  };

  return (
    <>
      {addItemModal.isModalOpen && (
        <div className="absolute w-screen h-screen flex items-center justify-center flex-col bg-BLACK_OPACITY">
          <div className="w-full md:w-560px h-768px shadow-md bg-WHITE p-4">
            <div className="w-full p-4 font-dosis flex justify-between">
              {" "}
              <p> SHOPPING LIST </p>{" "}
              <button
                onClick={() =>
                  setItemModal({
                    isModalOpen: false,
                    item: { title: "", description: "", id: null },
                  })
                }
              >
                {" "}
                <BiArrowToRight />{" "}
              </button>{" "}
            </div>
            <div className="w-full px-4 font-dosis">
              {" "}
              <p> {addItemModal.status} an Item </p>{" "}
            </div>
            <div className="w-full px-4 font-dosis">
              {" "}
              <p> Add your new item below </p>{" "}
            </div>
            <input
              type="text"
              className="mt-4 h-10 border-LIGHTGREY border w-full rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              type="text"
              className="h-20 border border-LIGHTGREY w-full my-8 rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Select
              onChange={(e) => setCount(e.value)}
              value={count ? count.value : null}
              options={options}
            />
            {addItemModal.status == "add" ? (
              <button
                onClick={addItemToList}
                className="text-14px bg-BLUE rounded-md p-2 text-WHITE mt-6 font-nunito font-semibold"
              >
                Add item
              </button>
            ) : (
              <>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <input
                      checked={purchased}
                      onChange={() => togglePurchased(addItemModal?.item.id)}
                      type="checkbox"
                      className="my-4  mx-4 h-6 w-6"
                    />
                    <p> purchased</p>
                  </div>
                  <button
                    onClick={() => editListItem(addItemModal?.item.id)}
                    className="text-14px bg-BLUE rounded-md p-2 text-WHITE mt-6 font-nunito font-semibold"
                  >
                    Edit item
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AddItemModal;
