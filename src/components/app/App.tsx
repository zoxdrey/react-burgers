import React from 'react';
import AppHeader from '../app-header/app-header'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngridients from '../burger-ingredients/burger-ingredients'
import styles from './App.module.css'
import {data} from '../../utils/data.js'

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
