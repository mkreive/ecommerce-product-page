import { Route, Routes } from "react-router-dom";
import "./index.scss";

import Header from "./components/Header";
import Product from "./components/Product";
import Collections from "./components/Collections";
import AllProducts from "./components/AllProducts";
import Contact from "./components/Contact";

const App = function () {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/collections" element={<Collections />} />
                <Route path="/product" element={<Product />} />
                <Route path="/men/*" element={<AllProducts />} />
                <Route path="/women/*" element={<AllProducts />} />
                <Route path="/about" element={<Product />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;
