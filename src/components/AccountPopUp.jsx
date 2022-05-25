import "../index.scss";

const AccountPopUp = function (props) {
    return (
        <div className="card">
            <h3 className="header-small-black">Hello, Monika </h3>
            <hr className="card__line"></hr>
            <div className="text"> You have 3 items in your cart!</div>
            <div className="btn-group">
                <button className="btn btn-popup">Go to cart</button>
                <button className="btn btn-popup">Log Out</button>
            </div>
        </div>
    );
};

export default AccountPopUp;
