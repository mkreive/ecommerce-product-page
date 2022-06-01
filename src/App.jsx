import { Navigate, Route, Routes } from "react-router-dom";
import "./index.scss";

import Header from "./components/Header";
import Collections from "./components/Collections";
import Men from "./components/Men";
import Women from "./components/Women";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";

const App = function () {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to={"/collections"} />} />
                <Route path="/collections/*" element={<Collections />} />
                <Route path="/product" element={<Product />} />
                <Route path="/men/*" element={<Men />} />
                <Route path="/women/*" element={<Women />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;
