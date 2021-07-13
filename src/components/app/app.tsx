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
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import RegisterPage from "../../pages/register";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredientsList());
    }, [dispatch]);

    return (
        <div className={styles.app}>
            <AppHeader/>
            <DndProvider backend={HTML5Backend}>
                <main className={styles.main}>
                    <Router>
                    <Switch>
                        <Route exact path='/'>
                            <BurgerIngredients/>
                            <div className="p-4"></div>
                            <BurgerConstructor/>
                        </Route>
                        <Route exact path='/login'>
                            <LoginPage />
                        </Route>
                        <Route exact path='/register'>
                            <RegisterPage />
                        </Route>
                        <Route exact path='/login'>
                            <LoginPage />
                        </Route>
                    </Switch>
                    </Router>
                </main>
            </DndProvider>
        </div>
    );
}

export default App;
