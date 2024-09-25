import { NavLink } from 'react-router-dom';
import coffeeIcon from '@/assets/coffee_icon.svg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const Header = () => {
    return (
        <header className="fixed left-0 right-0 top-0 z-10 bg-white">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between py-4">
                    <NavLink
                        className="flex items-center space-x-2 text-2xl font-bold"
                        to="/"
                    >
                        <img src={coffeeIcon} />
                        <span>Coffee Note</span>
                    </NavLink>
                    <ul className="flex flex-row gap-x-5">
                        <li>
                            <NavLink to={'/mypage'}>
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback></AvatarFallback>
                                </Avatar>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};