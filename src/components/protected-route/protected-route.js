import {Redirect, Route} from "react-router-dom";

function ProtectedRoute({children, ...rest}) {
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

export default ProtectedRoute;
