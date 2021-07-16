import React, {useEffect} from "react";
import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";
import {useDispatch} from "react-redux";
import {getIngredientsList} from "../../services/actions/ingredients";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import LoginPage from "../../pages/login";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import RegisterPage from "../../pages/register";
import ForgotPasswordPage from "../../pages/forgot-password";
import ResetPasswordPage from "../../pages/reset-password";
import ProfilePage from "../../pages/profile";
import NotFoundPage from "../../pages/not-found";
import IngredientDetailsFull from "../../pages/ingredient-details-full";
import {Route} from "react-router";
import OrderDetails from "../order-details/order-details";
import FeedPage from "../../pages/feed";
import HomePage from "../../pages/home";
import ProtectedRoute from "../protected-route/protected-route";
import DefaultRoute from "../default-route/default-route";

function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getIngredientsList());
    }, [dispatch]);

    return (
        <div className={styles.app}>
            <Router>
                <AppHeader/>
                <DndProvider backend={HTML5Backend}>
                    <main className={styles.main}>
                        <Switch>
                            <ProtectedRoute exact path='/'>
                                <HomePage/>
                            </ProtectedRoute>
                            <DefaultRoute exact path='/login'>
                                <LoginPage/>
                            </DefaultRoute>
                            <DefaultRoute exact path='/register'>
                                <RegisterPage/>
                            </DefaultRoute>
                            <DefaultRoute exact path='/forgot-password'>
                                <ForgotPasswordPage/>
                            </DefaultRoute>
                            <DefaultRoute exact path='/reset-password'>
                                <ResetPasswordPage/>
                            </DefaultRoute>
                            <ProtectedRoute exact path='/feed'>
                                <FeedPage/>
                            </ProtectedRoute>
                            <ProtectedRoute exact path='/feed/:id'>
                                <ResetPasswordPage/>
                            </ProtectedRoute>
                            <ProtectedRoute exact path='/profile/orders/:id'>
                                <OrderDetails/>
                            </ProtectedRoute>
                            <ProtectedRoute path='/profile'>
                                <ProfilePage/>
                            </ProtectedRoute>


                            <ProtectedRoute exact path='/ingredients/:id'>
                                <IngredientDetailsFull/>
                            </ProtectedRoute>
                            <Route>
                                <NotFoundPage/>
                            </Route>
                        </Switch>

                    </main>
                </DndProvider>
            </Router>
        </div>
    );
}

export default App;
