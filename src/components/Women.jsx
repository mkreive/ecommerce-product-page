import { useState, useEffect } from "react";
import { fetchProducts, ladyFilter } from "./helperFunctions";
import ProductItem from "./ProductItem";

const Women = function () {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async function () {
            const fetchedData = await fetchProducts();
            const allProducts = Object.values(fetchedData);
            const womenProducts = ladyFilter(allProducts);
            setProducts(womenProducts);
        };
        getProducts();
    }, []);

    return (
        <main className="main">
            <div className="gallery__shop">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
};

export default Women;
