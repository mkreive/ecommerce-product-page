import "../index.scss";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
    return (
        <div className="header">
            <div className="header-right">
                <Logo></Logo>
                <Navigation></Navigation>
            </div>
            <div className="header-left">
                <div className="cart"></div>
                <div className="account"></div>
            </div>
        </div>
    );
}
export default Header;
