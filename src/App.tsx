import React from 'react';
import AppHeader from './components/app-header/app-header'
import BurgerConstructor from './components/burger-constructor/burger-constructor'
import BurgerIngridients from './components/burger-ingredients/burger-ingredients'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <BurgerConstructor />
      <BurgerIngridients />
    </div>
  );
}

export default App;
