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

import { ThumbsUp, Bookmark, Bean, Droplet } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface RecipeStep {
    time: string;
    action: string;
}

interface CoffeeRecipe {
    id: string;
    recipeName: string;
    description?: string;
    beanWeight: string;
    roastLevel: string;
    grindSize: string;
    totalWaterAmount: string;
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
    beanWeight,
    roastLevel,
    grindSize,
    totalWaterAmount,
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
                <div className="flex flex-row gap-3">
                    <Badge className="text-center">
                        <Bean size={15} className="pr-1" />
                        {beanWeight}
                    </Badge>
                    <Badge className="text-center">
                        <Droplet size={15} className="pr-1" />
                        {totalWaterAmount}
                    </Badge>
                    <Badge className="text-center">{grindSize}</Badge>
                    <Badge className="text-center">{roastLevel}</Badge>
                </div>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-1/4">Time</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {steps.map((step, index) => (
                            <TableRow key={index}>
                                <TableCell className="w-1/4">
                                    {step.time}
                                </TableCell>
                                <TableCell>{step.action}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter className="mx-3 flex flex-row justify-end gap-5">
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
