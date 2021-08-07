import {Redirect, Route} from "react-router-dom";
import React from "react";

function DefaultRoute({children, ...rest}) {
    const isAuth = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');


    return (
        <Route {...rest} render={() => ((!userName && !isAuth) ? children : <Redirect to={'/'}/>)}/>
    )
}

export default DefaultRoute;
