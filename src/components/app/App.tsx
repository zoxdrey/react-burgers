import {useEffect, useState} from 'react';
import AppHeader from '../app-header/app-header'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngridients from '../burger-ingredients/burger-ingredients'
import styles from './App.module.css'
import {data} from '../../utils/data.js'


function App() {
  const url = 'https://norma.nomoreparties.space/api/ingredients';
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [burgersData, setBurgersData] = useState([])

useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(result => {
      setIsLoaded(true);
      setBurgersData(result.data);})
    .catch(error => {
      setIsLoaded(true);
      setError(error);
    })
    .finally(() => setIsLoaded(false))
},[])



  
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngridients burgersData={burgersData}/>
        <div className="p-4"></div>
        <BurgerConstructor burgersData={burgersData}/>
      </main>
    </div>
  );
}

export default App;
