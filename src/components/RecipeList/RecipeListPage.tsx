import { Link } from 'react-router-dom';

export const RecipeListPage = () => {
    return (
        <div className="container mx-auto">
            <h2>Recipe Listページです</h2>
            <Link to="/">Homeページへ</Link>
        </div>
    );
};
