import { NavLink } from 'react-router-dom';
import coffeeIcon from '@/assets/coffee_icon.svg';

export const Header = () => {
    return (
        <header className="fixed left-0 right-0 top-0 z-10 bg-gray-300">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between py-4">
                    <NavLink
                        className="flex items-center space-x-2 text-2xl font-bold"
                        to="/"
                    >
                        <img src={coffeeIcon} />
                        <span>Coffee Note</span>
                    </NavLink>
                    <ul className="flex space-x-5">
                        <li>
                            <NavLink
                                className="transition-all duration-300 hover:text-green-900"
                                to="/recipes"
                            >
                                Recipe List
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="transition-all duration-300 hover:text-green-900"
                                to="/mypage"
                            >
                                My Page
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
