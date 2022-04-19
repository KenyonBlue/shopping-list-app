import React, { useMemo, useState } from 'react'
import AddItemModal from './components/add-item-modal';
import AppContainer from './components/container';
import DeleteItemModal from './components/delete-item-modal';
import Header from './components/header';
import ShoppingList from './components/shopping-list';
import { ListContext } from './context/list-context';



function App() {
  const [ listOfItems, setListofItems ] = useState([{title: 'Apples', description: 'get apples from walmart', id: 1}])
  const [addItemModal, setItemModal ] = useState({isModalOpen: false, status: 'add'})
  const [deleteItemModal, setDeleteItemModal ] = useState({isDeleteModalOpen: false, id: null})
  const providerValue = useMemo(() =>({listOfItems, setListofItems, addItemModal, setItemModal, deleteItemModal, setDeleteItemModal}),[listOfItems, setListofItems, addItemModal, setItemModal, deleteItemModal, setDeleteItemModal]);

  return (
    <>
      <Header />
      <ListContext.Provider value={providerValue}>
      <AddItemModal/>
      <DeleteItemModal/>
      <AppContainer>
      <ShoppingList />
      </AppContainer>
      </ListContext.Provider>
    </>
  );
}

export default App;
