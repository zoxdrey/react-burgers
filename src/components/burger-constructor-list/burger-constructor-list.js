import styles from "./burger-constructor-list.module.css";
import BurgerConstructorElem from "../burger-constructor-elem/burger-constructor-elem.js";
import PropTypes from "prop-types";

function BurgerConstructorList({ burgerData }) {
  return (
    <div className={styles["burger-constructor-list"]}>
      <BurgerConstructorElem
        type="top"
        burgerConstructorElemData={burgerData[0]}
        locked
      ></BurgerConstructorElem>
      <div className={styles["burger-constructor-list__scroll-area"]}>
        {[1, 2, 4, 6, 7].map((num) => {
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
  burgerData: PropTypes.arrayOf(
    PropTypes.shape({
      calories: PropTypes.number,
      carbohydrates: PropTypes.number,
      fat: PropTypes.number,
      image: PropTypes.string,
      image_large: PropTypes.string,
      image_mobile: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      proteins: PropTypes.number,
      type: PropTypes.string,
      __v: PropTypes.number,
      _id: PropTypes.string,
    })
  ).isRequired,
};

export default BurgerConstructorList;
