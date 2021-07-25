import React, {useEffect} from "react";
import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";
import {useDispatch} from "react-redux";
import {getIngredientsList, WS_CONNECTION_START} from "../../services/actions/ingredients";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import OrderDetails from "../order-details/order-details";
import FeedPage from "../../pages/feed";
import HomePage from "../../pages/home";
import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";
import ResetPasswordPage from "../../pages/reset-password";
import ForgotPasswordPage from "../../pages/forgot-password";
import ProfilePage from "../../pages/profile";
import NotFoundPage from "../../pages/not-found";
import IngredientDetailsFull from "../../pages/ingredient-details-full";
import Modal from "../modal/modal";
import DefaultRoute from "../default-route/default-route";
import ProtectedRoute from "../protected-route/protected-route";
import IngredientDetails from "../ingredient-details/ingredient-details";


function App() {
    let location = useLocation();
    const history = useHistory();
    let background = history.action === 'PUSH' && location.state && location.state.background;
    // @ts-ignore
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredientsList());
    }, []);

    useEffect(() => {
        dispatch({type: WS_CONNECTION_START});
    }, []);

    const back = () => {
        history.goBack();
    }

    const closeByOverlayClickHandler = (e) => {
        if (e.target.parentNode.id === "modals") {
            back();
        }
    }

    return (
        <div className={styles.app}>
            <AppHeader/>
            <DndProvider backend={HTML5Backend}>
                <main className={styles.main}>
                    <Switch location={background || location}>

                        <Route exact path='/'>
                            <HomePage/>
                        </Route>
                        <Route path='/ingredients/:id' children={<IngredientDetailsFull/>}/>
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
                        <Route exact path='/feed'>
                            <FeedPage/>
                        </Route>
                        <Route exact path='/feed/:id'>
                            <ResetPasswordPage/>
                        </Route>
                        <ProtectedRoute exact path='/profile/orders/:id'>
                            <OrderDetails/>
                        </ProtectedRoute>
                        <ProtectedRoute path='/profile'>
                            <ProfilePage/>
                        </ProtectedRoute>
                        <Route>
                            <NotFoundPage/>
                        </Route>
                    </Switch>
                    {background && (<Route path='/ingredients/:id'>
                        <Modal title={true} closeHandler={back} closeByOverlayClickHandler={closeByOverlayClickHandler}>
                            <IngredientDetails/>
                        </Modal>
                    </Route>)}
                </main>
            </DndProvider>
        </div>
    );
}

export default App;
