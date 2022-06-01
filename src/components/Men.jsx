import ProductItem from "./ProductItem";

function Men() {
    // fetch products from database
    // filter just one kind sneakers
    // render product list according to products

    return (
        <main className="main">
            <div className="gallery__shop">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </main>
    );
}

export default Men;
