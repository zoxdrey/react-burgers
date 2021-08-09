import styles from "./burger-ingredients-card.module.css";
import {useDrag} from "react-dnd";
import {Counter, CurrencyIcon,} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {FC} from "react";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "../../../../../services/types/hooks";
import {IBurgerElement} from "../../../../../services/types/data";

interface IBurgerIngredientsCard {
    cardData: IBurgerElement
}

export const BurgerIngredientsCard: FC<IBurgerIngredientsCard> = (props) => {
    let location = useLocation();
    const {cardData} = props;
    const items = useSelector(
        (store) => store.constructorItemsListReducer.constructorItemsList
    );
    const bun = useSelector(
        (store) => store.constructorItemsListReducer.constructorBun
    );

    function countItems(): number {
        if (cardData.type === "bun") {
            return bun?._id === cardData._id ? 2 : 0;
        } else {
            return items.filter((item: any) => item._id === cardData._id).length;
        }
    }

    const [{isDrag}, dragRef] = useDrag({
        item: cardData,
        type: "card",
        collect: (monitor) => ({
            isDrag: monitor.isDragging(),
        }),
    });


    return (
        <Link className={`${styles["link"]}`} key={cardData._id}
              to={{pathname: `/ingredients/${cardData._id}`, state: {background: location}}}>
            < div
                className={`${styles["burger-ingredients-card"]} ml-2 mr-2 mb-10`
                }

                ref={dragRef}
            >
                <Counter count={countItems() || 0} size="default"/>
                <div>
                    <img
                        className={`${styles["burger-ingredients-card__image"]} ml-4 mr-4 mb-1`}
                        src={cardData.image}
                        alt={cardData.name}
                    />
                    <div className={`${styles["burger-ingredients-card"]} mt-1 mb-1}`}>
                        <p className="text text_type_digits-default">{cardData.price}</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <h3 className="text text_type_main-default">{cardData.name}</h3>
                </div>
            </div>
        </Link>
    );
}
