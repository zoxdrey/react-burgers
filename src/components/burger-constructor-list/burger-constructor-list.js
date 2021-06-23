import styles from "./burger-constructor-list.module.css";
import BurgerConstructorElem from "../burger-constructor-elem/burger-constructor-elem.js";
import PropTypes from "prop-types";
import { burgerType } from "../../utils/burgerType";

function BurgerConstructorList({ items }) {
  return (
    <div className={styles["burger-constructor-list"]}>
      <BurgerConstructorElem
        type="top"
        burgerConstructorElemData={items.find((item) => {
          if (item.type === "bun") return item;
        })}
        locked
      ></BurgerConstructorElem>
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
      <BurgerConstructorElem
        type="bottom"
        burgerConstructorElemData={items.find((item) => {
          if (item.type === "bun") return item;
        })}
        locked
      ></BurgerConstructorElem>
    </div>
  );
}

export default BurgerConstructorList;
