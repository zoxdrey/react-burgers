import React from "react";

import styles from './not-found.module.css';


function NotFoundPage() {
    return (
        <div className={`${styles['main-container']}`}>
            <p className="text text_type_main-large">
                Страница не найдена.
            </p>

        </div>
    )
}

export default NotFoundPage;
