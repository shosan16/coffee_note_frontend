import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <div>
            <h2>Homeページです</h2>
            <Link to="/recipes">Recipe Listへ</Link>
        </div>
    );
};
