import {FC, useState} from "react";
import {Button, CurrencyIcon,} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import {BurgerConstructorList} from "./burger-constructor-list/burger-constructor-list";
import {Modal} from "../modal/modal";
import {createOrder, resetConstructorAction} from "../../services/actions/ingredients";
import {OrderSuccess} from "../order-success/order-success";
import {useHistory, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "../../services/types/hooks";
import {IBurgerElement} from "../../services/types/data";

export const BurgerConstructor: FC = () => {
    const [visible, setVisible] = useState(false);

    const userName: string | null = localStorage.getItem('userName');
    const history = useHistory();
    const location = useLocation();
    const burgerConstructorItems: IBurgerElement[] = useSelector(
        (store) => store.constructorItemsListReducer.constructorItemsList
    );
    const bun = useSelector(
        (store) => store.constructorItemsListReducer.constructorBun
    );
    const {orderId, orderIdRequest} = useSelector((store) => store.orderReducer);
    const orderRequest = useSelector((store) => store.orderReducer.orderRequest);
    const dispatch = useDispatch();

    const openModal = (): void => {
        if (!userName) {
            history.replace({pathname: '/login', state: {target: location}});
            return;
        }
        if (bun!._id) {
            const ingredientsIds = [
                ...burgerConstructorItems.map((element) => element._id),
                bun!._id,
            ];
            dispatch(createOrder(ingredientsIds, setVisible));
            dispatch(resetConstructorAction());
        }
    };


    const closeModal = (): void => {
        setVisible(false);
    };

    const closeByOverlayClickHandler = (e: any): void => {
        if (e.target.parentNode.id === "modals") {
            closeModal();
        }
    };

    const modal = (
        <Modal
            burgersData={burgerConstructorItems}
            closeHandler={closeModal}
            closeByOverlayClickHandler={closeByOverlayClickHandler}
        >
            <OrderSuccess orderId={orderId + ''}/>
        </Modal>
    );
    if (orderIdRequest) return (
        <section className={`${styles["burger-constructor"]} mt-25 ml-10`}>
            <p className="text text_type_main-medium">????????????????...</p>
        </section>)
    return (

        (<section className={`${styles["burger-constructor"]} mt-25 ml-10`}>
            {!orderRequest && (
                <>
                    <BurgerConstructorList/>
                    <div className={styles["burger-constructor__info"]}>
                        <p className="text text_type_digits-medium">
                            {(bun?.price || 0) * 2 +
                            burgerConstructorItems.reduce(
                                (acc: number, curr) => acc + parseInt(String(curr.price)),
                                0
                            ) || 0}
                        </p>
                        <CurrencyIcon type="primary"/>
                        {!orderIdRequest ? (<Button type="primary" size="medium" onClick={openModal}>
                            ???????????????? ??????????
                        </Button>) : null}

                        {visible && modal}
                    </div>
                </>)}
        </section>)
    )
}
