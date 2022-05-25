import "./index.scss";
import Header from "./components/Header";
import Collections from "./components/Collections";
import { useReducer } from "react";
import AllProducts from "./components/AllProducts";

// // VARIABLES
// let currentUser;

// // HELPER FUNCTIONS

// // DATA COLLECTING FUNCTIONS
// // local storage
// const getLocalStorage = function (key) {
//     const data = JSON.parse(localStorage.getItem(key));
//     return data;
// };
// const setLocalStorage = function (key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
// };
// const removeLocalStorage = function (key, value) {
//     if (!key || !value) return;
//     const data = getLocalStorage(key);
//     if (data === value) window.localStorage.removeItem(key);
// };

// // firebase
// const fetchUserData = async function (userId) {
//     const response = await fetch(userId);
//     const responseData = await response.json();

//     if (!response.ok) {
//         throw new Error("Failed to fetch user info");
//     }

//     for (const key in responseData) {
//         return {
//             id: key,
//             name: responseData[key].name,
//             photo: responseData[key].photo,
//             cart: responseData[key].cart,
//         };
//     }
//     return {};
// };

// const getUser = async function () {
//     const loggedUserId = getLocalStorage("userId");
//     const userData = await fetchUserData(
//         `https://to-do-list-app-10ca0-default-rtdb.europe-west1.firebasedatabase.app/users.json?orderBy=%22id%22&equalTo=%22${loggedUserId}%22`
//     );
//     return userData;
// };

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Collections />
        </div>
    );
}

export default App;
