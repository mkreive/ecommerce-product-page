import { useState, useEffect } from "react";
import { fetchProducts, menFilter } from "./helperFunctions";
import ProductItem from "./ProductItem";

function Men() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async function () {
            const fetchedData = await fetchProducts();
            const allProducts = Object.values(fetchedData);
            const menProducts = menFilter(allProducts);

            console.log(menProducts);
            // setProducts(fetchedData);
        };
        getProducts();
    }, []);

    // filter just one kind sneakers
    // render product list according to products

    return (
        <main className="main">
            <div className="gallery__shop">
                {Object.values(products).map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
}

export default Men;
