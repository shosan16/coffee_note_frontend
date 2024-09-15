import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/Home/HomePage';
import { RecipeListPage } from './components/RecipeList/RecipeListPage';
import { Header } from './components/ui/Header';
import { MyPage } from './components/Mypage/Mypage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
                <Routes>
                    <Route path="/recipes" element={<RecipeListPage />} />
                </Routes>
                <Routes>
                    <Route path="/mypage" element={<MyPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
