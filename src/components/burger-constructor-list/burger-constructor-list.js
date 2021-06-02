import styles from "./burger-constructor-list.module.css";
import BurgerConstructorElem from "../burger-constructor-elem/burger-constructor-elem.js";

function BurgerConstructorList({ burgerData }) {
  console.log(burgerData);
  return (
    <div className={styles["burger-constructor-list"]}>
      <BurgerConstructorElem
        type="top"
        burgerConstructorElemData={burgerData[0]}
      ></BurgerConstructorElem>
      <div className={styles["burger-constructor-list__scroll-area"]}>
        <BurgerConstructorElem
          burgerConstructorElemData={burgerData[1]}
        ></BurgerConstructorElem>
        <BurgerConstructorElem
          burgerConstructorElemData={burgerData[2]}
        ></BurgerConstructorElem>
        <BurgerConstructorElem
          burgerConstructorElemData={burgerData[4]}
        ></BurgerConstructorElem>
        <BurgerConstructorElem
          burgerConstructorElemData={burgerData[6]}
        ></BurgerConstructorElem>
        <BurgerConstructorElem
          burgerConstructorElemData={burgerData[7]}
        ></BurgerConstructorElem>
      </div>
      <BurgerConstructorElem
        burgerConstructorElemData={burgerData[0]}
        type="bottom"
      ></BurgerConstructorElem>
    </div>
  );
}

export default BurgerConstructorList;
