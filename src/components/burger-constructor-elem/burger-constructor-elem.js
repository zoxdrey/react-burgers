import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor-elem.module.css";
import img from "../../images/1.svg";

function BurgerConstructorElem(props) {
  return (
    <div className={styles["burger-constructor-elem"] + " m-4"}>
      <DragIcon type="primary" />
      <ConstructorElement
        text="Краторная булка N-200i (верх)"
        price={50}
        thumbnail={img}
        type={props.type}
      />
    </div>
  );
}

export default BurgerConstructorElem;
