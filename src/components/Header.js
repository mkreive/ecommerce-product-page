import "../index.scss";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Cart from "./Cart";
import Account from "./Account";

function Header() {
    return (
        <div className="header">
            <Logo></Logo>
            <Navigation></Navigation>
            <Cart></Cart>
            <Account></Account>
        </div>
    );
}
export default Header;
