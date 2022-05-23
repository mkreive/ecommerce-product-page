import "../index.scss";

function Navigation() {
    return (
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
    );
}

export default Navigation;
