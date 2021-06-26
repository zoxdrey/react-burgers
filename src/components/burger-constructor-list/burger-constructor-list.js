import styles from "./burger-constructor-list.module.css";
import BurgerConstructorElem from "../burger-constructor-elem/burger-constructor-elem.js";
import { useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import {
  ADD_BUN_CONSTRUCTOR_ITEM,
  ADD_CONSTRUCTOR_ITEM,
} from "../../services/actions/actions";

function BurgerConstructorList() {
  const items = useSelector(
    (store) => store.constructorItemsListReducer.constructorItemsList
  );
  const bun = useSelector(
    (store) => store.constructorItemsListReducer.constructorBun
  );
  const dispatch = useDispatch();
  const [, dropTarget] = useDrop({
    accept: "card",
    drop(item) {
      onDropHandler(item);
    },
  });

  function onDropHandler(item) {
    if (item.type === "bun") {
      dispatch({
        type: ADD_BUN_CONSTRUCTOR_ITEM,
        item: item,
      });
    } else {
      dispatch({
        type: ADD_CONSTRUCTOR_ITEM,
        item: item,
      });
    }
  }

  return (
    <div ref={dropTarget} className={styles["burger-constructor-list"]}>
      {bun ? (
        <BurgerConstructorElem
          type="top"
          burgerConstructorElemData={bun}
          locked
        ></BurgerConstructorElem>
      ) : (
        <div></div>
      )}
      <div className={styles["burger-constructor-list__scroll-area"]}>
        {items ? (
          items
            .filter((item) => item.type !== "bun")
            .map((item, index) => {
              return (
                <BurgerConstructorElem
                  key={index}
                  burgerConstructorElemData={item}
                  index={index}
                />
              );
            })
        ) : (
          <div></div>
        )}
      </div>
      {bun ? (
        <BurgerConstructorElem
          type="bottom"
          burgerConstructorElemData={bun}
          locked
        ></BurgerConstructorElem>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default BurgerConstructorList;
