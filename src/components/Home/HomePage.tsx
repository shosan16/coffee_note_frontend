import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <div>
            <div>Home</div>
            <Link to="/recipes">Recipe List</Link>
        </div>
    );
};
