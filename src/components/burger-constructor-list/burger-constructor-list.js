import styles from "./burger-constructor-list.module.css";
import BurgerConstructorElem from "../burger-constructor-elem/burger-constructor-elem.js";
import PropTypes from "prop-types";
import { burgerType } from "../../utils/burgerType";

function BurgerConstructorList({ items }) {
  console.log(items);
  return (
    <div className={styles["burger-constructor-list"]}>
      <BurgerConstructorElem type="top" locked></BurgerConstructorElem>
      <div className={styles["burger-constructor-list__scroll-area"]}>
        {items.map((item) => {
          return (
            <BurgerConstructorElem
              key={item.id}
              burgerConstructorElemData={item}
            />
          );
        })}
      </div>
      <BurgerConstructorElem type="bottom" locked></BurgerConstructorElem>
    </div>
  );
}

export default BurgerConstructorList;
