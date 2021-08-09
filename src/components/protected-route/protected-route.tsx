import {Redirect, Route} from "react-router-dom";
import React, {FC} from "react";

interface IProtectedRouteProps {
    children: React.ReactNode,
    exact?: boolean,
    path: string
}

export const ProtectedRoute: FC<IProtectedRouteProps> = ({children, ...rest}) => {
    const isAuth = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');

    if (!userName || !isAuth) {
        return (
            <Route
                {...rest}
                render={({location}) => (
                    <Redirect to={{
                        pathname: '/login',
                        state: {from: location}
                    }
                    }/>
                )}>
            </Route>
        )
    }

    return (
        <Route {...rest} render={() => children}/>
    )
}
