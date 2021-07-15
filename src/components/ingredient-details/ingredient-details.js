import styles from "./ingredient-details.module.css";
import PropTypes from "prop-types";
import {burgerType} from "../../utils/burgerType";
import React from "react";

function IngredientDetails(props) {

    function renderIngredient(data) {
        return (<div className={styles["ingredient-details"]}>
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
    };

    return (
        renderIngredient(props.burgersData)
    );


}

IngredientDetails.propTypes = {
    burgersData: PropTypes.shape(burgerType),
};

export default IngredientDetails;
