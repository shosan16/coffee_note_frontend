import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/Home/HomePage';
import { RecipeListPage } from './components/RecipeList/RecipeListPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Routes>
                <Route path="/recipes" element={<RecipeListPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
