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
          <div className="w-full md:w-560px h-768px shadow-md bg-WHITE p-4 flex flex-col justify-between">
            <div className="h-455px flex flex-col justify-between">

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
            placeholder="Buy tomatoes"
              type="text"
              className="px-2 mt-4 h-10 border-LIGHTGREY border w-full rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
            placeholder="Get them from walmart"
              type="text"
              className="p-2 h-40 border border-LIGHTGREY w-full my-8 rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Select
              onChange={(e) => setCount(e.value)}
              value={count ? count.value : null}
              options={options}
            />
            {addItemModal.status == "edit" && <div className="flex items-center">
                    <input
                      checked={purchased}
                      onChange={() => togglePurchased(addItemModal?.item.id)}
                      type="checkbox"
                      className="my-4  mx-4 h-6 w-6"
                    />
                    <p> purchased</p>
                  </div>}
            </div>
            {addItemModal.status == "add" ? (
              <>
          <div className="flex w-full justify-end"> 
              <button
                 onClick={() =>
                  setItemModal({
                    isModalOpen: false,
                    item: { title: "", description: "", id: null },
                  })
                }
                className="mr-4 w-20 text-14px rounded-md p-2  mt-6 font-nunito font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={addItemToList}
                className="w-20 text-14px bg-BLUE rounded-md p-2 text-WHITE mt-6 font-nunito font-semibold"
              >
                Add Task
              </button>
            </div>    
              </>
            ) : (
              <>
                <div className="flex w-full justify-end">
                <button
                 onClick={() =>
                  setItemModal({
                    isModalOpen: false,
                    item: { title: "", description: "", id: null },
                  })
                }
                className="mr-4 w-20 text-14px rounded-md p-2  mt-6 font-nunito font-semibold"
              >
                Cancel
              </button>
                  <button
                    onClick={() => editListItem(addItemModal?.item.id)}
                    className="w-20 text-14px bg-BLUE rounded-md p-2 text-WHITE mt-6 font-nunito font-semibold"
                  >
                    Save item
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
