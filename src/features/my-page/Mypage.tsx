import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Settings, BookOpen } from 'lucide-react';

export const MyPage = () => {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="container mx-auto p-4">
            <h1 className="mb-6 text-2xl font-bold">マイページ</h1>

            <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
            >
                <TabsList className="mb-6 grid w-full grid-cols-3">
                    <TabsTrigger
                        value="profile"
                        className="flex items-center justify-center"
                    >
                        <User className="mr-2 h-4 w-4" />
                        <span>プロフィール</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="recipes"
                        className="flex items-center justify-center"
                    >
                        <BookOpen className="mr-2 h-4 w-4" />
                        <span>マイレシピ</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="settings"
                        className="flex items-center justify-center"
                    >
                        <Settings className="mr-2 h-4 w-4" />
                        <span>設定</span>
                    </TabsTrigger>
                </TabsList>
            </Tabs>

            {activeTab === 'profile' && (
                <div className="rounded-lg bg-white p-6 shadow">
                    <h2 className="mb-4 text-xl font-semibold">プロフィール</h2>
                    <p>ユーザー情報を表示・編集する場所です。</p>
                </div>
            )}

            {activeTab === 'recipes' && (
                <div className="rounded-lg bg-white p-6 shadow">
                    <h2 className="mb-4 text-xl font-semibold">マイレシピ</h2>
                    <p>
                        お気に入りのレシピやブックマークしたレシピを表示する場所です。
                    </p>
                </div>
            )}

            {activeTab === 'settings' && (
                <div className="rounded-lg bg-white p-6 shadow">
                    <h2 className="mb-4 text-xl font-semibold">設定</h2>
                    <p>アカウント設定や通知設定などを行う場所です。</p>
                </div>
            )}
        </div>
    );
};
