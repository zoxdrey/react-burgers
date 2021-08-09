import styles from "./ingredient-details.module.css";
import React, {FC, ReactElement} from "react";
import {useParams} from "react-router";
import {ParamTypes, useSelector} from "../../services/types/hooks";
import {IBurgerElement} from "../../services/types/data";


export const IngredientDetails: FC = () => {

    const {id} = useParams<ParamTypes>();
    const ingredient = useSelector((state) => state.ingredientsListReducer);
    const currIngredient = ingredient.ingredientsList.filter((item: IBurgerElement) => item._id === id)[0];

    function renderIngredient(data: IBurgerElement): ReactElement {
        return (

            <div className={styles["ingredient-details"]}>
                <img src={data?.image_large} alt={data?.name}/>

                <p className="text text_type_main-medium mb-8 mt-4">{data?.name}</p>

                <ul className={`${styles["ingredient-details__values"]} mb-15`}>
                    <li>
                        <p className="text text_type_main-default text_color_inactive">
                            Калории,ккал
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {data?.calories}
                        </p>
                    </li>
                    <li>
                        <p className="text text_type_main-default text_color_inactive">
                            Белки, г
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {data?.calories}
                        </p>
                    </li>
                    <li>
                        <p className="text text_type_main-default text_color_inactive">
                            Жиры, г
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {data?.calories}
                        </p>
                    </li>
                    <li>
                        <p className="text text_type_main-default text_color_inactive">
                            Углеводы, г
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {data?.calories}
                        </p>
                    </li>
                </ul>
            </div>)
    }

    return (
        renderIngredient(currIngredient)
    );


}
