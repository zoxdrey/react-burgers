import styles from "./burger-constructor-list.module.css";
import {BurgerConstructorElem} from "./burger-constructor-elem/burger-constructor-elem";

import {useDrop} from "react-dnd";
import {addBunConstructorItemAction, addConstructorItemAction,} from "../../../services/actions/ingredients";
import {v4 as uuidv4} from "uuid";
import {useDispatch, useSelector} from "../../../services/types/hooks";
import {IBurgerElement} from "../../../services/types/data";

export const BurgerConstructorList = () => {
    const items = useSelector(
        (store) => store.constructorItemsListReducer.constructorItemsList
    );
    const bun = useSelector(
        (store) => store.constructorItemsListReducer.constructorBun
    );
    const dispatch = useDispatch();
    const [, dropTarget] = useDrop({
        accept: "card",
        drop(item: IBurgerElement) {
            onDropHandler(item);
        },
    });

    function onDropHandler(item: IBurgerElement): void {
        if (item.type === "bun") {
            dispatch(addBunConstructorItemAction(item));
        } else {
            dispatch(addConstructorItemAction({...item, key: uuidv4()}));
        }
    }

    return (
        <div ref={dropTarget} className={styles["burger-constructor-list"]}>
            {bun ? (
                <BurgerConstructorElem
                    type="top"
                    burgerConstructorElemData={bun}
                    locked
                    postfix={' (верх)'}
                />
            ) : (
                <div></div>
            )}
            <div className={styles["burger-constructor-list__scroll-area"]}>
                {items ? (
                    items
                        .filter((item) => item.type !== "bun")
                        .map((item, index) => {
                            return (
                                <BurgerConstructorElem
                                    key={item.key}
                                    burgerConstructorElemData={item}
                                    index={index}
                                />
                            );
                        })
                ) : (
                    <div></div>
                )}
            </div>
            {bun ? (
                <BurgerConstructorElem
                    type="bottom"
                    burgerConstructorElemData={bun}
                    locked
                    postfix={' (низ)'}
                />
            ) : (
                <div></div>
            )}
        </div>
    );
}

