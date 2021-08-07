import styles from "./order-success.module.css";
import doneImg from "../../images/done.svg";
import PropTypes from "prop-types";

function OrderSuccess({orderId}) {
    return (
        <div className={`${styles["order-success"]}`}>
            <p className="text text_type_digits-large  mt-4 mb-15">{orderId}</p>

            <p className="text text_type_main-medium mb-15">Идентификатор заказа</p>
            <img src={doneImg} alt="done img"/>
            <p className="text text_type_main-default mt-15">
                Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-default text_color_inactive mt-2 mb-30">
                Дождитесь готовности на орбитальной станции
            </p>
        </div>
    );
}

OrderSuccess.propTypes = {
    orderId: PropTypes.string.isRequired,
};

export default OrderSuccess;