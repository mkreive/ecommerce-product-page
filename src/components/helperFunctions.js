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
setLocalStorage('userId', '-N2RWe0ftPmjZ3YhY1d1');

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
export const fetchOrder = async function (userId, cart) {
    fetch(`https://e-commerce-product-page-999f1-default-rtdb.firebaseio.com/users/${userId}.json`, {
        method: 'PATCH',
        body: JSON.stringify({ cart }),
    });
};

// FETCHING PRODUCTS
export const fetchProducts = async function () {
    const response = await fetch(`https://e-commerce-product-page-999f1-default-rtdb.firebaseio.com/products.json`);
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

// REDUCE STOCK AFTER ORDER
export const reduceStock = async function (productId, amount) {
    const response = await fetch(
        `https://e-commerce-product-page-999f1-default-rtdb.firebaseio.com/products/${productId}/stock.json`
    );
    const productStock = await response.json();
    const newStock = productStock - amount;

    fetch(`https://e-commerce-product-page-999f1-default-rtdb.firebaseio.com/products/${productId}/stock.json`, {
        method: 'PUT',
        body: JSON.stringify(newStock),
    });
};

// PRODUCTS FILTERS
export const menFilter = function (productArr) {
    return productArr.filter((product) => product.category.includes('men'));
};

export const ladyFilter = function (productArr) {
    return productArr.filter((product) => product.category.includes('lady'));
};
