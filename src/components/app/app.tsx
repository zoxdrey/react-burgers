import React, {useEffect} from "react";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import styles from "./app.module.css";
import {useDispatch} from "react-redux";
import {getIngredientsList} from "../../services/actions/actions";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import LoginPage from "../../pages/login";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import RegisterPage from "../../pages/register";
import ForgotPasswordPage from "../../pages/forgot-password";
import ResetPasswordPage from "../../pages/reset-password";
import ProfilePage from "../../pages/profile";
import NotFoundPage from "../../pages/not-found";
import ProtectedRoute from "../protected-route/protected-route";
import DefaultRoute from "../default-route/default-route";
import IngredientDetailsFull from "../../pages/ingredient-details-full";

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
                                <BurgerIngredients/>
                                <div className="p-4"></div>
                                <BurgerConstructor/>
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
                            <ProtectedRoute exact path='/profile'>
                                <ProfilePage/>
                            </ProtectedRoute>
                            <ProtectedRoute exact path='/ingredients/:id'>
                                <IngredientDetailsFull/>
                            </ProtectedRoute>
                            <DefaultRoute>
                                <NotFoundPage/>
                            </DefaultRoute>
                        </Switch>

                    </main>
                </DndProvider>
            </Router>
        </div>
    );
}

export default App;
