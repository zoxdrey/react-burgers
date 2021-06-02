import styles from "./burger-constructor-list.module.css";
import BurgerConstructorElem from "../burger-constructor-elem/burger-constructor-elem.js";

function BurgerConstructorList() {
  return (
    <div className={styles["burger-constructor-list"]}>
      <BurgerConstructorElem type="top"></BurgerConstructorElem>
      <div className={styles["burger-constructor-list__scroll-area"]}>
        <BurgerConstructorElem></BurgerConstructorElem>
        <BurgerConstructorElem></BurgerConstructorElem>
        <BurgerConstructorElem></BurgerConstructorElem>
        <BurgerConstructorElem></BurgerConstructorElem>
        <BurgerConstructorElem></BurgerConstructorElem>
        <BurgerConstructorElem></BurgerConstructorElem>
        <BurgerConstructorElem></BurgerConstructorElem>
      </div>
      <BurgerConstructorElem type="bottom"></BurgerConstructorElem>
    </div>
  );
}

export default BurgerConstructorList;
