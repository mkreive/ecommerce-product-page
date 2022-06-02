import { useState, useEffect } from "react";
import { fetchProducts, menFilter } from "./helperFunctions";
import ProductItem from "./ProductItem";

const Men = function () {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getProducts = async function () {
            const fetchedData = await fetchProducts();
            const allProducts = Object.values(fetchedData);
            const menProducts = menFilter(allProducts);
            setProducts(menProducts);
            setIsLoading(false);
        };
        getProducts();
    }, []);

    if (isLoading) {
        return (
            <main className="main">
                <div className="gallery__shop">
                    <h1 className="header-small">Loading... </h1>
                </div>
            </main>
        );
    }
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

export default Men;
