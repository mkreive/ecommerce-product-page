import "../index.scss";
import { useEffect, useState } from "react";

const getLocalStorage = function (key) {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
};
const setLocalStorage = function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};
const removeLocalStorage = function (key, value) {
    if (!key || !value) return;
    const data = getLocalStorage(key);
    if (data === value) window.localStorage.removeItem(key);
};

setLocalStorage("userId", "u1");

const Account = function () {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUserData = async function () {
            let loggedUserId = getLocalStorage("userId");
            if (!loggedUserId) {
                loggedUserId = "u0";
            }
            const response = await fetch(
                `https://to-do-list-app-10ca0-default-rtdb.europe-west1.firebasedatabase.app/users.json?orderBy=%22id%22&equalTo=%22${loggedUserId}%22`
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
            setUser(userData);
        };
        fetchUserData();
    }, []);

    return <img className="account" src={user.photo} alt="user photo"></img>;
};
export default Account;
