import "../index.scss";

const Account = function (props) {
    const userPhotoUrl = props.user.photo;
    const userCart = props.user.cart;

    const accountPopupHandler = function () {
        props.onAccountClick(userCart);
    };

    return (
        <img
            onClick={accountPopupHandler}
            className="account"
            src={userPhotoUrl}
            alt="user photo"
        ></img>
    );
};
export default Account;
