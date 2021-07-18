import React, {useEffect} from "react";
import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getIngredientsList} from "../../services/actions/ingredients";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {Route, Switch, useLocation, useParams} from "react-router-dom";
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
import IngredientDetails from "../ingredient-details/ingredient-details";


function App() {
    let location = useLocation();
    const background = location.state && location.state.background;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getIngredientsList());
    }, [dispatch]);
    const {id} = useParams();
    const ingredient = useSelector((state: any) => state.ingredientsListReducer);
    const currIngredient = ingredient.ingredientsList.filter((item) => item._id === id);
    console.log(location, background)
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
                        <Route>
                            <NotFoundPage/>
                        </Route>
                    </Switch>
                    {background && <Route path='/ingredients/:id' children={<Modal> <IngredientDetails
                        burgersData={currIngredient}/></Modal>}/>}
                </main>
            </DndProvider>
        </div>
    );
}

export default App;
