import React, {FC} from "react";

import styles from './not-found.module.css';


export const NotFoundPage: FC = () => {
    return (
        <div className={`${styles['main-container']}`}>
            <p className="text text_type_main-large">
                Страница не найдена.
            </p>

        </div>
    )
}

export default NotFoundPage;
