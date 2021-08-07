import React, {FC} from "react";
import styles from './ingredient-details-full.module.css';
import {useParams} from "react-router-dom";
import {ParamTypes, useSelector} from "../services/types/hooks";


export const IngredientDetailsFull: FC = () => {
    const {id} = useParams<ParamTypes>();
    const ingredient = useSelector(state => state.ingredientsListReducer);
    const currIngredient = ingredient.ingredientsList.filter((item) => item._id === id);

    function renderIngredient(data) {
        return (
            <div className={styles["ingredient-details-full"]}>
                <img src={data?.image_large} alt={data?.name}/>

                <p className="text text_type_main-medium mb-8 mt-4">{data?.name}</p>

                <ul className={`${styles["ingredient-details-full__values"]} mb-15`}>
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
    };

    return (
        renderIngredient(currIngredient[0])
    );
}
