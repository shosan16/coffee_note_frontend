import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

interface RecipeGroup {
    id: string;
    name: string;
    description?: string;
    bean?: string;
    equipment?: string;
}

export default function RecipeGroupPage() {
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
            name: 'Espresso',
            description: 'Espresso-based recipes',
            bean: 'Dark roast',
            equipment: 'Espresso machine',
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
            name: 'Hot',
        },
    ];

    return (
        <div className="container mx-auto space-y-8 p-4">
            <>
                <h2 className="mb-6 text-3xl font-bold">
                    Coffee Recipe Groups
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {groups.map((group) => (
                        <Card
                            key={group.id}
                            className="cursor-pointer hover:bg-gray-50"
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
                    ))}
                </div>
                <Card key={0} className="cursor-pointer hover:bg-gray-50">
                    <CardHeader>
                        <CardTitle>Others</CardTitle>
                        <CardDescription>
                            Recipes that do not belong to a group
                        </CardDescription>
                    </CardHeader>
                </Card>
            </>
        </div>
    );
}
