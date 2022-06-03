// LOCAL STORAGE
export const getLocalStorage = function (key) {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
};
export const setLocalStorage = function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};
export const removeLocalStorage = function (key, value) {
    if (!key || !value) return;
    const data = getLocalStorage(key);
    if (data === value) window.localStorage.removeItem(key);
};
setLocalStorage("userId", "u1");

// FETCHING DATA
export const fetchUserData = async function (userId) {
    const response = await fetch(
        `https://e-commerce-product-page-999f1-default-rtdb.firebaseio.com/users.json?orderBy=%22id%22&equalTo=%22${userId}%22`
    );
    const responseData = await response.json();
    let userData;

    for (const key in responseData) {
        userData = {
            id: key,
            name: responseData[key].name,
            photo: responseData[key].photo,
            cart: responseData[key].cart,
        };
    }
    return userData;
};

// FETCHIN PRODUCTS
export const fetchProducts = async function () {
    const response = await fetch(
        `https://e-commerce-product-page-999f1-default-rtdb.firebaseio.com/products.json`
    );
    const responseData = await response.json();
    return responseData;
};

// FETCHING PRODUCT BY ID
export const fetchProductById = async function (id) {
    const response = await fetch(
        `https://e-commerce-product-page-999f1-default-rtdb.firebaseio.com/products.json?orderBy=%22id%22&equalTo=%22${id}%22`
    );
    const responseData = await response.json();
    const [product] = Object.values(responseData);
    return product;
};

// PRODUCTS FILTERS
export const menFilter = function (productArr) {
    const menProducts = [];
    productArr.filter((product) => {
        if (product.category.includes("men")) {
            menProducts.push(product);
        }
    });
    return menProducts;
};

export const ladyFilter = function (productArr) {
    const ladyProducts = [];
    productArr.filter((product) => {
        if (product.category.includes("lady")) {
            ladyProducts.push(product);
        }
    });

    return ladyProducts;
};
