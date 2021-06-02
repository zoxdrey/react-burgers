import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients-card.module.css";

function BurgerIngridientsCard() {
  return (
    <div className={styles["burger-ingredients-card"]}>
      <Counter count={1} size="default" />
      <div>
        <div>Image</div>
        <p className="text text_type_digits-default">123</p>
        <CurrencyIcon type="primary" />
        <h3>Title</h3>
      </div>
    </div>
  );
}

export default BurgerIngridientsCard;
