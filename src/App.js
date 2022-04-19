import React, { useMemo, useState } from 'react'
import AppContainer from './components/container';
import Header from './components/header';
import ShoppingList from './components/shopping-list';
import { ListContext } from './context/list-context';



function App() {
  const [ listOfItems, setListofItems ] = useState([])
  const providerValue = useMemo(() =>({listOfItems, setListofItems}),[listOfItems, setListofItems]);

  return (
    <>
      <Header />
      <ListContext.Provider value={providerValue}>
      <AppContainer>
      <ShoppingList />
      </AppContainer>
      </ListContext.Provider>
    </>
  );
}

export default App;
