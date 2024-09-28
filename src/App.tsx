import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/Home/HomePage';
import { AllRecipesPage } from './components/AllRecipes/AllRecipesPage';
import { Header } from './components/common/Header';
import { NavigationBar } from './components/common/NavigationBar';
import { MyPage } from './components/Mypage/Mypage';
import RecipeGroupPage from './components/RecipeGroup/RecipeGroupPage';
import { GroupRecipesPage } from './components/GroupRecipes/GroupRecipesPage';

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen">
                <Header />
                <NavigationBar />
                <main className="container mx-auto px-20 pt-20">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/recipes" element={<AllRecipesPage />} />
                        <Route path="/mypage" element={<MyPage />} />
                        <Route path="/groups" element={<RecipeGroupPage />} />
                        <Route
                            path="/groups/:group_id"
                            element={<GroupRecipesPage />}
                        />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
