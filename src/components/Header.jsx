import "../index.scss";
import Account from "./Account";
import AccountPopUp from "./AccountPopUp";

const Header = (props) => {
    return (
        <header className="header">
            <img
                className="logo"
                src="https://res.cloudinary.com/kreiva/image/upload/v1653033617/FrontendMentor/EcommerceProductPage/logo_d2dxhh.svg"
                alt="logo"
            ></img>
            <nav className="navigation">
                <ul className="navigation__links">
                    <li>
                        <a
                            className="navigation__links-link"
                            href="#collections"
                        >
                            Collections
                        </a>
                    </li>
                    <li>
                        <a className="navigation__links-link" href="#Men">
                            Men
                        </a>
                    </li>
                    <li>
                        <a className="navigation__links-link" href="#Women">
                            Women
                        </a>
                    </li>
                    <li>
                        <a className="navigation__links-link" href="#About">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="navigation__links-link" href="#Contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <img
                className="cart"
                src="https://res.cloudinary.com/kreiva/image/upload/v1653033614/FrontendMentor/EcommerceProductPage/icon-cart_tpxhw0.svg"
                alt="cart"
            ></img>
            <Account></Account>
            <AccountPopUp></AccountPopUp>
        </header>
    );
};
export default Header;
