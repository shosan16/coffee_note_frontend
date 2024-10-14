import { Route, Routes } from 'react-router-dom';
import { HomePage } from '@/features/home/HomePage';
import { AllRecipesPage } from '@/features/all-recipes/AllRecipesPage';
import { MyPage } from '@/features/my-page/MyPage';
import { GroupPage } from '@/features/group/GroupPage';
import { GroupRecipesPage } from '@/features/group-recipes/GroupRecipesPage';
import { NotFoundPage } from '@/features/error/NotFoundPage';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes" element={<AllRecipesPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/groups" element={<GroupPage />} />
            <Route path="/groups/:group_id" element={<GroupRecipesPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};
