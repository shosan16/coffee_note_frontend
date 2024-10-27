import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, FolderOpen, Plus } from 'lucide-react';
import { CreateRecipe } from '@/features/my-recipes/create-recipe/CreateRecipe';

export const MyRecipesPage = () => {
    return (
        <Tabs defaultValue="recipes" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger
                    value="new-recipe"
                    className="flex items-center justify-center"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    New
                </TabsTrigger>
                <TabsTrigger
                    value="recipes"
                    className="flex items-center justify-center"
                >
                    <Coffee className="mr-2 h-4 w-4" />
                    Recipes
                </TabsTrigger>
                <TabsTrigger
                    value="groups"
                    className="flex items-center justify-center"
                >
                    <FolderOpen className="mr-2 h-4 w-4" />
                    Groups
                </TabsTrigger>
            </TabsList>
            <TabsContent value="new-recipe">
                <CreateRecipe />
            </TabsContent>
            <TabsContent value="recipes">
                <Card>
                    <CardHeader>
                        <CardTitle>Recipes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Your registered recipes will be displayed here.</p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="groups">
                <Card>
                    <CardHeader>
                        <CardTitle>Groups</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Your recipe groups will be displayed here.</p>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
};
