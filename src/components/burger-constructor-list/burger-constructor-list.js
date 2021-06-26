import styles from "./burger-constructor-list.module.css";
import BurgerConstructorElem from "../burger-constructor-elem/burger-constructor-elem.js";
import { useSelector } from "react-redux";

function BurgerConstructorList() {
  const items = useSelector(
    (store) => store.constructorItemsListReducer.constructorItemsList
  );

  return (
    <div className={styles["burger-constructor-list"]}>
      {items ? (
        <BurgerConstructorElem
          type="top"
          burgerConstructorElemData={items.find((item) => {
            if (item.type === "bun") return item;
          })}
          locked
        ></BurgerConstructorElem>
      ) : (
        <div></div>
      )}
      <div className={styles["burger-constructor-list__scroll-area"]}>
        {items ? (
          items.map((item) => {
            return (
              <BurgerConstructorElem
                key={item.id}
                burgerConstructorElemData={item}
              />
            );
          })
        ) : (
          <div></div>
        )}
      </div>
      {items ? (
        <BurgerConstructorElem
          type="bottom"
          burgerConstructorElemData={items.find((item) => {
            if (item.type === "bun") return item;
          })}
          locked
        ></BurgerConstructorElem>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default BurgerConstructorList;
