import React,{useContext, useEffect, useState} from 'react';
import AppHeader from '../app-header/app-header'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngridients from '../burger-ingredients/burger-ingredients'
import styles from './app.module.css'
import { BurgersDataContext } from '../../services/burgersDataContext';

function App() {
  const url = 'https://norma.nomoreparties.space/api/ingredients';
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [burgersData, setBurgersData] = useState([1]);

  
useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(result => {
      setBurgersData(result.data);
      setIsLoaded(true);})
    .catch(error => {
      setIsLoaded(true);
      setError(error);
    })
    .finally(() => setIsLoaded(false));
},[])
 
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
      <BurgersDataContext.Provider value={burgersData}>
        <BurgerIngridients/> 
        <div className="p-4"></div>
        <BurgerConstructor/> 
        </BurgersDataContext.Provider>
      </main>
    </div>
  );
}

export default App;
