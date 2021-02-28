import { FC } from 'react';
import Logo from "./Logo";
import Cart from "./Cart";

const Header: FC = () => {
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
