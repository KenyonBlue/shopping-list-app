import React, { useState } from 'react'
import AppContainer from './components/container';
import Header from './components/header';
import ShoppingList from './components/shopping-list';
import { ListContext } from './context/list-context';



function App() {
  const [ listOfItems, setListofItems ] = useState([])
  return (
    <>
      <Header />
      <ListContext.Provider value={{listOfItems, setListofItems}}>
      <AppContainer>
      <ShoppingList />
      </AppContainer>
      </ListContext.Provider>
    </>
  );
}

export default App;
