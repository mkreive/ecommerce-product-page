import "../index.scss";

const removeLocalStorage = function (key, value) {
    if (!key || !value) return;
    window.localStorage.removeItem(key);
};

const AccountPopUp = function (props) {
    const userName = props.name.toUpperCase();
    const productCount = Object.keys(props.cart).length;
    const userId = props.id;

    const logoutHandler = function () {
        removeLocalStorage("userId", userId);
    };

    return (
        <div className="card">
            <h3 className="header-small-black">Hello, {userName} </h3>
            <hr className="card__line"></hr>
            <div className="text">
                You have {productCount} items in your cart!
            </div>
            <div className="btn-group">
                <button className="btn btn-popup" onClick={logoutHandler}>
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default AccountPopUp;
