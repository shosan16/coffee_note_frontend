import { ReceiptText, Group } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

const navItems = [
    { name: 'Recipes', icon: ReceiptText, href: '/recipes' },
    { name: 'Groups', icon: Group, href: '/recipes/groups' },
];

export const NavigationBar = () => {
    return (
        <TooltipProvider>
            <nav className="fixed left-0 top-0 flex h-screen w-16 flex-col items-center space-y-8 bg-white py-28">
                {navItems.map((item) => (
                    <Tooltip key={item.name} delayDuration={0}>
                        <TooltipTrigger asChild>
                            <NavLink to={item.href}>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        'h-12 w-12 rounded-3xl bg-gray-800 p-0 text-gray-400 hover:bg-gray-700 hover:text-white',
                                        'data-[state=open]:bg-gray-700 data-[state=open]:text-white',
                                    )}
                                >
                                    <item.icon className="h-6 w-6" />
                                    <span className="sr-only">{item.name}</span>
                                </Button>
                            </NavLink>
                        </TooltipTrigger>
                        <TooltipContent
                            side="right"
                            sideOffset={10}
                            align="center"
                            alignOffset={0}
                        >
                            <p>{item.name}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </nav>
        </TooltipProvider>
    );
};
