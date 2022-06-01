import "./index.scss";

import Header from "./components/Header";
import Product from "./components/Product";

const App = function () {
    return (
        <div className="App">
            <Header />
            <Product />
        </div>
    );
};

export default App;
