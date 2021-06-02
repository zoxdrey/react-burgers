import React from 'react';
import AppHeader from './components/app-header/app-header'
import BurgerConstructor from './components/burger-constructor/burger-constructor'
import BurgerIngridients from './components/burger-ingredients/burger-ingredients'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main+" p-4"}>
        <BurgerIngridients />
        <div className="p-4"></div>
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
