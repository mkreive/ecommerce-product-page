import "../index.scss";

const AccountPopUp = function (props) {
    const userName = props.name.toUpperCase();
    const productCount = props.cart.length;

    return (
        <div className="card">
            <h3 className="header-small-black">Hello, {userName} </h3>
            <hr className="card__line"></hr>
            <div className="text">
                {" "}
                You have {productCount} items in your cart!
            </div>
            <div className="btn-group">
                <button className="btn btn-popup">Go to cart</button>
                <button className="btn btn-popup">Log Out</button>
            </div>
        </div>
    );
};

export default AccountPopUp;
