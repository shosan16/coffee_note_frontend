import { NavLink } from 'react-router-dom';
import coffeeIcon from '@/assets/coffee_icon.svg';

export const Header = () => {
    return (
        <header className="bg-gray-300">
            <div className="container mx-auto">
                <nav className="flex justify-between items-center py-4">
                    <NavLink
                        className="flex text-2xl font-bold space-x-2 items-center"
                        to="/"
                    >
                        <img src={coffeeIcon} alt="Coffee icon" />
                        <span className="text-gray-900">Coffee Note</span>
                    </NavLink>
                    <ul className="flex space-x-5">
                        <li>
                            <NavLink
                                className="hover:text-green-900 transition-all duration-300"
                                to="/recipes"
                            >
                                Recipe List
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="hover:text-green-900 transition-all duration-300"
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
