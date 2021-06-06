import styles from "./burger-constructor-list.module.css";
import BurgerConstructorElem from "../burger-constructor-elem/burger-constructor-elem.js";
import PropTypes from "prop-types";
import { burgerType } from "../../utils/burgerType";

function BurgerConstructorList({ burgerData }) {
  const mockArray = [1, 2, 4, 6, 7];
  return (
    <div className={styles["burger-constructor-list"]}>
      <BurgerConstructorElem
        type="top"
        burgerConstructorElemData={burgerData[0]}
        locked
      ></BurgerConstructorElem>
      <div className={styles["burger-constructor-list__scroll-area"]}>
        {mockArray.map((num) => {
          return (
            <BurgerConstructorElem
              key={num}
              burgerConstructorElemData={burgerData[num]}
            />
          );
        })}
      </div>
      <BurgerConstructorElem
        burgerConstructorElemData={burgerData[0]}
        type="bottom"
        locked
      ></BurgerConstructorElem>
    </div>
  );
}

BurgerConstructorList.propTypes = {
  burgerData: PropTypes.arrayOf(PropTypes.shape(burgerType)).isRequired,
};

export default BurgerConstructorList;
