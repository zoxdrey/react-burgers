import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router-dom";

function ProtectedRoute({children, ...rest}) {
    const {user, accessToken} = useSelector((state) => state.userReducer)
    const isAuth = localStorage.getItem('token');

    if (!user || !accessToken || !isAuth) {
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