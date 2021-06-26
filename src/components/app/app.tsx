import { useEffect } from "react";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngridients from "../burger-ingredients/burger-ingredients";
import styles from "./app.module.css";
import { useDispatch } from "react-redux";
import { getIngredientsList } from "../../services/actions/actions";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsList());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngridients />
        <div className="p-4"></div>
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
