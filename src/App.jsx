import { useReducer } from "react";

import "./index.scss";

import Header from "./components/Header";
import Collections from "./components/Collections";
import AllProducts from "./components/AllProducts";
import Product from "./components/Product";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Product />
        </div>
    );
}

export default App;
