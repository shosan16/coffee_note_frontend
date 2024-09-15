import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/Home/HomePage';
import { RecipeListPage } from './components/RecipeList/RecipeListPage';
import { Header } from './components/ui/Header';
import { MyPage } from './components/Mypage/Mypage';

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen">
                <Header />
                <main className="container mx-auto px-4 pt-20">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                    <Routes>
                        <Route path="/recipes" element={<RecipeListPage />} />
                    </Routes>
                    <Routes>
                        <Route path="/mypage" element={<MyPage />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
