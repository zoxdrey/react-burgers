import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor-elem.module.css";
import PropTypes from "prop-types";
import { burgerType } from "../../utils/burgerType";

function BurgerConstructorElem(props) {
  const { type, burgerConstructorElemData } = props;
  return (
    <div className={`${styles["burger-constructor-elem"]} m-4`}>
      <DragIcon type="primary" />
      {burgerConstructorElemData && (
        <ConstructorElement
          text={burgerConstructorElemData?.name}
          price={burgerConstructorElemData?.price}
          thumbnail={burgerConstructorElemData?.image}
          type={type}
          isLocked={props.locked}
        />
      )}
    </div>
  );
}

BurgerConstructorElem.propTypes = {
  burgerConstructorElemData: PropTypes.shape(burgerType),
  type: PropTypes.string,
};

export default BurgerConstructorElem;
