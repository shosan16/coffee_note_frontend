import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface RecipeGroup {
    id: string;
    name: string;
    description?: string;
    bean?: string;
    equipment?: string;
}

export const GroupPage = () => {
    const groups: RecipeGroup[] = [
        {
            id: '1',
            name: 'Pour Over',
            description: 'Recipes for pour over coffee',
            bean: 'Medium roast',
            equipment: 'V60',
        },
        {
            id: '2',
            name: 'Hot',
        },
        {
            id: '3',
            name: 'Cold Brew',
            description: 'Cold brew coffee recipes',
            bean: 'Light roast',
            equipment: 'Cold brew maker',
        },
        {
            id: '4',
            name: 'Kenia',
            equipment: 'Cold brew maker',
        },
        {
            id: '5',
            name: 'Espresso',
            description: 'Espresso-based recipes',
            bean: 'Dark roast',
            equipment: 'Espresso machine',
        },
    ];

    return (
        <div className="container mx-auto space-y-8 p-4">
            <h2 className="mb-6 text-3xl font-bold">Coffee Recipe Groups</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {groups.map((group) => (
                    <Link to={`/groups/${group.id}`} key={group.id}>
                        <Card
                            key={group.id}
                            className="h-full w-full cursor-pointer hover:bg-gray-50"
                        >
                            <CardHeader>
                                <CardTitle>{group.name}</CardTitle>
                                {group.description && (
                                    <CardDescription>
                                        {group.description}
                                    </CardDescription>
                                )}
                            </CardHeader>
                            {(group.bean || group.equipment) && (
                                <CardContent>
                                    {group.bean && (
                                        <p>
                                            <strong>Bean: </strong> {group.bean}
                                        </p>
                                    )}
                                    {group.equipment && (
                                        <p>
                                            <strong>Equipment: </strong>
                                            {group.equipment}
                                        </p>
                                    )}
                                </CardContent>
                            )}
                        </Card>
                    </Link>
                ))}
                <Link to="/groups/0" key="0">
                    <Card
                        key={0}
                        className="h-full w-full cursor-pointer hover:bg-gray-50"
                    >
                        <CardHeader>
                            <CardTitle>Others</CardTitle>
                            <CardDescription>
                                Recipes that do not belong to a group
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </Link>
            </div>
        </div>
    );
};
