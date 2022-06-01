import { Navigate, Route, Routes } from "react-router-dom";
import "./index.scss";

import Header from "./components/Header";
import Product from "./components/Product";
import Collections from "./components/Collections";
import Contact from "./components/Contact";
import Men from "./components/Men";

const App = function () {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to={"/collections"} />} />
                <Route path="/collections/*" element={<Collections />} />
                <Route path="/product" element={<Product />} />
                <Route path="/men/*" element={<Men />} />
                <Route path="/women/*" element={<Men />} />
                <Route path="/about" element={<Product />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;
