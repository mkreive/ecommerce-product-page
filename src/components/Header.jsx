import "../index.scss";

function Header() {
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
                        <a className="navigation__links-link" href="#section-1">
                            Collections
                        </a>
                    </li>
                    <li>
                        <a className="navigation__links-link" href="#section-2">
                            Men
                        </a>
                    </li>
                    <li>
                        <a className="navigation__links-link" href="#section-2">
                            Women
                        </a>
                    </li>
                    <li>
                        <a className="navigation__links-link" href="#section-2">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="navigation__links-link" href="#section-2">
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
            <img
                className="account"
                src="https://res.cloudinary.com/kreiva/image/upload/v1653033615/FrontendMentor/EcommerceProductPage/image-avatar_pvqg6m.png"
                alt="user"
            ></img>
        </header>
    );
}
export default Header;
