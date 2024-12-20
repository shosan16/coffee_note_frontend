import { BrowserRouter } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Router } from './routes/Router';
import { NavigationBar } from '@/components/layout/NavigationBar';

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen">
                <Header />
                <NavigationBar />
                <main className="container mx-auto px-20 pb-10 pt-20">
                    <Router />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
