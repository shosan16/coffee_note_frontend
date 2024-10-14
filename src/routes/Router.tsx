import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../components/Home/HomePage';
import { AllRecipesPage } from '../components/AllRecipes/AllRecipesPage';

import { MyPage } from '@/components/Mypage/Mypage';
import { RecipeGroupPage } from '@/components/RecipeGroup/RecipeGroupPage';
import { GroupRecipesPage } from '@/components/GroupRecipes/GroupRecipesPage';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes" element={<AllRecipesPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/groups" element={<RecipeGroupPage />} />
            <Route path="/groups/:group_id" element={<GroupRecipesPage />} />
        </Routes>
    );
};
