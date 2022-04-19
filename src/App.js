import React from 'react'
import AppContainer from './components/container';
import Header from './components/header';
import ShoppingList from './components/shopping-list';

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <ShoppingList />
      </AppContainer>
    </>
  );
}

export default App;
