import "../index.scss";

function Header() {
    return (
        <div className="header">
            <div className="header-right">
                <div className="logo"></div>
                <div className="nav"></div>
            </div>
            <div className="header-left">
                <div className="cart"></div>
                <div className="account"></div>
            </div>
        </div>
    );
}
export default Header;
