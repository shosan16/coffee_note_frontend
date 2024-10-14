import { NavLink } from 'react-router-dom';
import { Coffee, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const Header = () => {
    return (
        <header className="fixed left-0 right-0 top-0 z-10 bg-white shadow-sm">
            {/* 全体的なレイアウトとコンテンツの幅 */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* コンテンツ内の要素の配置を制御 */}
                <div className="flex h-16 items-center justify-between">
                    <NavLink
                        className="group flex items-center gap-2 rounded-md px-3 py-2 text-xl font-bold text-primary transition-all hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        to="/"
                    >
                        <Coffee
                            className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:rotate-12"
                            aria-hidden="true"
                        />
                        <span className="relative overflow-hidden">
                            Coffee Note
                            <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                        </span>
                    </NavLink>

                    <NavLink
                        to="/mypage"
                        className="rounded-full transition-all hover:ring-2 hover:ring-primary hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        <Avatar className="h-10 w-10">
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="User avatar"
                            />
                            <AvatarFallback>
                                <User className="h-8 w-8" />
                            </AvatarFallback>
                        </Avatar>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};
