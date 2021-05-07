import { NavLink } from 'react-router-dom';

import './Navigation.scss';

const Navigation = () => {
    return (
        <nav className="navi">
            <ul className="navi--list">
                <li className="navi--list--item">
                    <NavLink className="navi--list--item--link" to="/wine">
                        Wine
                    </NavLink>
                </li>
                <li className="navi--list--item">
                    <NavLink className="navi--list--item--link" to="/hotel">
                        Hotel
                    </NavLink>
                </li>
                <li className="navi--list--item">
                    <NavLink className="navi--list--item--link" to="/" exact={true}>
                        Home
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
