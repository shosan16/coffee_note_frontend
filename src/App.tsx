import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/Home/HomePage';
import { AllRecipesPage } from './components/AllRecipes/AllRecipesPage';
import { Header } from './components/common/Header';
import { NavigationBar } from './components/common/NavigationBar';
import { MyPage } from './components/Mypage/Mypage';
import RecipeGroupPage from './components/RecipeGroup/RecipeGroupPage';

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen">
                <Header />
                <NavigationBar />
                <main className="container mx-auto px-20 pt-20">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                    <Routes>
                        <Route path="/recipes" element={<AllRecipesPage />} />
                    </Routes>
                    <Routes>
                        <Route path="/mypage" element={<MyPage />} />
                    </Routes>
                    <Routes>
                        <Route path="/groups" element={<RecipeGroupPage />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
