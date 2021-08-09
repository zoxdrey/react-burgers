import {Redirect, Route} from "react-router-dom";
import React, {FC} from "react";

interface IDefaultRouteProps {
    children: React.ReactNode,
    exact?: boolean,
    path: string
}

export const DefaultRoute: FC<IDefaultRouteProps> = ({children, ...rest}) => {
    const isAuth = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');


    return (
        <Route {...rest} render={() => ((!userName && !isAuth) ? children : <Redirect to={'/'}/>)}/>
    )
}

