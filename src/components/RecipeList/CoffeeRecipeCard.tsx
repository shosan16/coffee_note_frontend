import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { ThumbsUp, Bookmark } from 'lucide-react';

interface RecipeStep {
    time: string;
    action: string;
}

interface CoffeeRecipe {
    id: string;
    recipeName: string;
    description?: string;
    beanName?: string;
    beanWeight: string;
    roastLevel: string;
    grindSize: string;
    totalWaterAmount: string;
    totalTime: string;
    steps: RecipeStep[];
    isLiked: boolean;
    isBookmarked: boolean;
}

interface CoffeeRecipeCardProps extends CoffeeRecipe {
    onLikeToggle: () => void;
    onBookmarkToggle: () => void;
}

export const CoffeeRecipeCard = ({
    recipeName,
    description,
    steps,
    isLiked,
    isBookmarked,
    onLikeToggle,
    onBookmarkToggle,
}: CoffeeRecipeCardProps) => {
    return (
        <Card className="container m-auto">
            <CardHeader>
                <CardTitle>{recipeName}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Time</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {steps.map((step, index) => (
                            <TableRow key={index}>
                                <TableCell>{step.time}</TableCell>
                                <TableCell>{step.action}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <button onClick={() => onLikeToggle()}>
                    <ThumbsUp
                        color="black"
                        fill={isLiked ? 'black' : 'none'}
                        size={20}
                    />
                </button>
                <button onClick={() => onBookmarkToggle()}>
                    <Bookmark
                        color="black"
                        fill={isBookmarked ? 'black' : 'none'}
                        size={20}
                    />
                </button>
            </CardFooter>
        </Card>
    );
};
