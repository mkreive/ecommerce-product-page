import "../index.scss";

const Account = function (props) {
    const userPhotoUrl = props.user.photo;
    const userCart = props.user.cart;

    return (
        <img
            className="account"
            src={userPhotoUrl}
            alt="user photo"
            onClick={props.onAccountClick}
        ></img>
    );
};
export default Account;
