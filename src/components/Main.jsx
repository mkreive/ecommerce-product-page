import "../index.scss";
import Gallery from "./Gallery";
import Product from "./Product";
import AllProducts from "./AllProducts";

function Main() {
    return (
        <div className="main">
            <Gallery></Gallery>
            <Product></Product>
            {/* <AllProducts></AllProducts> */}
        </div>
    );
}

export default Main;
