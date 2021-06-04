import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor-elem.module.css";
import PropTypes from "prop-types";

function BurgerConstructorElem(props) {
  const { type, burgerConstructorElemData } = props;
  return (
    <div className={styles["burger-constructor-elem"] + " m-4"}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={burgerConstructorElemData?.name}
        price={burgerConstructorElemData?.price}
        thumbnail={burgerConstructorElemData?.image}
        type={type}
        isLocked={props.locked}
      />
    </div>
  );
}

BurgerConstructorElem.propTypes = {
  burgerConstructorElemData: PropTypes.shape({
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
  }).isRequired,
  type: PropTypes.string,
};

export default BurgerConstructorElem;
