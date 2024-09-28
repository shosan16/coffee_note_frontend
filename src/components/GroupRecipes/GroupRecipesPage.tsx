import { CoffeeRecipeCard } from './CoffeeRecipeCard';
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

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
}

export const GroupRecipesPage = () => {
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
                { time: '0:00', action: 'Pour hot water up to 60 g' },
                { time: '0:45', action: 'Pour hot water up to 120 g' },
                { time: '1:30', action: 'Pour hot water up to 180 g' },
                { time: '2:15', action: 'Pour hot water up to 240 g' },
                { time: '2:45', action: 'Pour hot water up to 300 g' },
                { time: '3:30', action: 'Remove dripper' },
            ],
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
                { time: '0:00', action: 'Pour hot water up to 60 g' },
                { time: '0:45', action: 'Pour hot water up to 120 g' },
                { time: '1:30', action: 'Pour hot water up to 180 g' },
                { time: '2:15', action: 'Pour hot water up to 240 g' },
                { time: '2:45', action: 'Pour hot water up to 300 g' },
                { time: '3:30', action: 'Remove dripper' },
            ],
        },
    ];

    const { group_id } = useParams<{ group_id: string }>();

    return (
        <div className="container mx-auto">
            <h2>Group {group_id}</h2>
            <div className="flex flex-col gap-3">
                {recipeList.map((recipeList) => (
                    <CoffeeRecipeCard key={recipeList.id} {...recipeList} />
                ))}
            </div>
        </div>
    );
};
