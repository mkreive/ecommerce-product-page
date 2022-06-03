import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./index.scss";

import Header from "./components/Header";
import Collections from "./components/Collections";
import Men from "./components/Men";
import Women from "./components/Women";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

const App = function () {
    const [user, setUser] = useState({});
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = function (props) {
        if (!cartIsShown) {
            setCartIsShown(true);
        } else if (cartIsShown) {
            setCartIsShown(false);
        }
        setUser(props);
    };

    return (
        <div className="App">
            {cartIsShown && <Cart cart={user.cart} />}
            <Header onShowCart={showCartHandler} />
            <Routes>
                <Route path="/" element={<Navigate to={"/collections"} />} />
                <Route path="/collections/*" element={<Collections />} />
                <Route path="/men/*" element={<Men />} />
                <Route path="/women/*" element={<Women />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:productId" element={<Product />} />
            </Routes>
        </div>
    );
};

export default App;
