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
import IngredientDetailsFull from "../../pages/ingredient-details-full";
import {Route} from "react-router";
import OrderDetails from "../order-details/order-details";
import FeedPage from "../../pages/feed";

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
                            <Route exact path='/'>
                                <BurgerIngredients/>
                                <div className="p-4"></div>
                                <BurgerConstructor/>
                            </Route>
                            <Route exact path='/login'>
                                <LoginPage/>
                            </Route>
                            <Route exact path='/register'>
                                <RegisterPage/>
                            </Route>
                            <Route exact path='/forgot-password'>
                                <ForgotPasswordPage/>
                            </Route>
                            <Route exact path='/reset-password'>
                                <ResetPasswordPage/>
                            </Route>
                            <Route exact path='/feed'>
                                <FeedPage/>
                            </Route>
                            <Route exact path='/feed/:id'>
                                <ResetPasswordPage/>
                            </Route>
                            <Route exact path='/profile/orders/:id'>
                                <OrderDetails/>
                            </Route>
                            <Route path='/profile'>
                                <ProfilePage/>
                            </Route>


                            <Route exact path='/ingredients/:id'>
                                <IngredientDetailsFull/>
                            </Route>
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
