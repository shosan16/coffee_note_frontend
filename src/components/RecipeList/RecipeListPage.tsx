import { useState } from 'react';

import { CoffeeRecipeCard } from './CoffeeRecipeCard';

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

export const RecipeListPage = () => {
    const recipeList: CoffeeRecipe[] = [
        {
            id: '1',
            recipeName: 'Pour Over Coffee',
            description: 'A clean and flavorful brew method',
            beanName: 'Kenya',
            beanWeight: '15g',
            grindSize: 'Medium',
            roastLevel: 'Dark',
            totalWaterAmount: '360g',
            totalTime: '3:30',
            steps: [
                { time: '0:00', action: 'Add 60 g of hot water' },
                { time: '0:45', action: 'Add 60 g of hot water' },
                { time: '1:30', action: 'Add 60 g of hot water' },
                { time: '2:15', action: 'Add 60 g of hot water' },
                { time: '2:45', action: 'Add 60 g of hot water' },
                { time: '3:30', action: 'Remove dripper' },
            ],
            isLiked: true,
            isBookmarked: true,
        },
        {
            id: '2',
            recipeName: 'Pour Over Coffee',
            description: 'A clean and flavorful brew method',
            beanName: 'Kenya',
            beanWeight: '15g',
            grindSize: '中挽き',
            roastLevel: '深煎り',
            totalWaterAmount: '360g',
            totalTime: '3:30',
            steps: [
                { time: '0:00', action: 'Add 60 g of hot water' },
                { time: '0:45', action: 'Add 60 g of hot water' },
                { time: '1:30', action: 'Add 60 g of hot water' },
                { time: '2:15', action: 'Add 60 g of hot water' },
                { time: '2:45', action: 'Add 60 g of hot water' },
                { time: '3:30', action: 'Remove dripper' },
            ],
            isLiked: false,
            isBookmarked: false,
        },
    ];

    const [recipes, setRecipes] = useState<CoffeeRecipe[]>(recipeList);

    const handleLikeToggle = (id: string) => {
        setRecipes((prevRecipeList) =>
            prevRecipeList.map((recipe) =>
                recipe.id === id
                    ? { ...recipe, isLiked: !recipe.isLiked }
                    : recipe,
            ),
        );
    };

    const handleBookmarkToggle = (id: string) => {
        setRecipes((prevRecipeList) =>
            prevRecipeList.map((recipe) =>
                recipe.id === id
                    ? { ...recipe, isBookmarked: !recipe.isBookmarked }
                    : recipe,
            ),
        );
    };

    return (
        <div className="container mx-auto">
            <h2>Recipe Listページ</h2>
            <div className="flex flex-col gap-3">
                {recipes.map((recipe) => (
                    <CoffeeRecipeCard
                        key={recipe.id}
                        {...recipe}
                        onLikeToggle={() => handleLikeToggle(recipe.id)}
                        onBookmarkToggle={() => handleBookmarkToggle(recipe.id)}
                    />
                ))}
            </div>
        </div>
    );
};
