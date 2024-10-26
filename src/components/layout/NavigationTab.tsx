import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { List, FolderOpen } from 'lucide-react';

export default function RecipeNavigation() {
    const [activeTab, setActiveTab] = useState('recipes');

    return (
        <div className="mx-auto w-full max-w-3xl">
            <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
            >
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger
                        value="recipes"
                        className="flex items-center justify-center"
                    >
                        <List className="mr-2 h-4 w-4" />
                        <span className="hidden sm:inline">レシピ一覧</span>
                        <span className="sm:hidden">一覧</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="groups"
                        className="flex items-center justify-center"
                    >
                        <FolderOpen className="mr-2 h-4 w-4" />
                        <span className="hidden sm:inline">レシピグループ</span>
                        <span className="sm:hidden">グループ</span>
                    </TabsTrigger>
                </TabsList>
            </Tabs>

            {activeTab === 'recipes' && (
                <div className="mt-4 rounded-lg bg-white p-4 shadow">
                    <h2 className="mb-4 text-xl font-bold">レシピ一覧</h2>
                    <AllRecipesPage />
                </div>
            )}

            {activeTab === 'groups' && (
                <div className="mt-4 rounded-lg bg-white p-4 shadow">
                    <h2 className="mb-4 text-xl font-bold">レシピグループ</h2>
                    <GroupPage />
                </div>
            )}
        </div>
    );
}
