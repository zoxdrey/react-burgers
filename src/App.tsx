import React from 'react';
import AppHeader from './components/app-header/app-header'
import BurgerConstructor from './components/burger-constructor/burger-constructor'
import BurgerIngridients from './components/burger-ingredients/burger-ingredients'
import styles from './App.module.css'
import {data} from './utils/data.js'

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngridients burgersData={data}/>
        <div className="p-4"></div>
        <BurgerConstructor burgersData={data}/>
      </main>
    </div>
  );
}

export default App;
