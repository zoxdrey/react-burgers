import { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngridients from "../burger-ingredients/burger-ingredients";
import styles from "./app.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getIngredientsList } from "../../services/actions/actions";

function App() {
  const { ingredientsList, ingrediantsRequest, ingredientsError } = useSelector(
    (store: any) => store.ingredientsListReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsList());
  }, []);

  console.log(ingredientsList);
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
