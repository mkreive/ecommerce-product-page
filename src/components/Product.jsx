import "../index.scss";
import Company from "./product/Company";

function Product() {
    return (
        <div className="product">
            <Company></Company>
            <h1 className="header-big">Fall limited edition sneakers</h1>
            <p className="text">
                These low profile sneakersare your perfect casual wear
                companion. Featuring adurable rubberouter sole they'll
                withstandeverything theweather can offer.
            </p>
            <div className="price">
                <div className="price__now">
                    <span className="header-medium">$125.00</span>
                    <span className="discount">50%</span>
                </div>
                <div className="price__before">$250.00</div>
            </div>
            <div className="addtocart">
                <div className="addtocart__quantity">
                    <span>-</span>
                    <span>0</span>
                    <span>+</span>
                </div>
                <button className="btn addtocart__btn">Add to cart</button>
            </div>
        </div>
    );
}

export default Product;
