import { useReducer, useState, useNavigation } from "react";

import "./index.scss";

import Header from "./components/Header";
import Collections from "./components/Collections";
import AllProducts from "./components/AllProducts";
import Product from "./components/Product";

const App = function () {
    const [main, setMain] = useState(<Collections></Collections>);

    const navigationClickHandler = function (clickedBtn) {
        const mainPageContent = clickedBtn;
    };
    return (
        <div className="App">
            <Header onNavigationClick={navigationClickHandler}></Header>
            {main}
        </div>
    );
};

export default App;
