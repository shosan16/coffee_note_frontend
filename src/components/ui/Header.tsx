import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <header>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mypage">My Page</NavLink>
                    </li>
                </ul>
            </header>
        </>
    );
};
