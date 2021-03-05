import Logo from "./Logo";
import Cart from "./Cart";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <Logo />
                <Cart />
            </div>
        </div>
    );
}

export default Header;
