import styles from "./order-details.module.css";
import doneImg from "../../images/done.svg";

function OrderDetails() {
  return (
    <div className={styles["order-details"]}>
      <p className="text text_type_digits-large  mt-4 mb-15">034536</p>

      <p className="text text_type_main-medium mb-15">Идентификатор заказа</p>
      <img src={doneImg} alt="done img"></img>
      <p className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
