import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor-elem.module.css";

function BurgerConstructorElem(props) {
  const { type, burgerConstructorElemData } = props;
  console.log(props);
  return (
    <div className={styles["burger-constructor-elem"] + " m-4"}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={burgerConstructorElemData?.name}
        price={burgerConstructorElemData?.price}
        thumbnail={burgerConstructorElemData?.image}
        type={type}
      />
    </div>
  );
}

export default BurgerConstructorElem;
