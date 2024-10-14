import { Button } from '@/components/ui/button';
import { Coffee, Home, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
    return (
        <div className="p-8 text-center text-gray-800">
            <div className="absolute inset-0 bg-gradient-to-r opacity-50" />
            <Coffee
                className="animate-float mx-auto mb-6 h-24 w-24 text-gray-900"
                aria-hidden="true"
            />
            <h1 className="mb-2 text-8xl font-bold text-gray-900">404</h1>
            <h2 className="mb-4 text-3xl font-semibold text-gray-900">
                ページが見つかりません
            </h2>
            <p className="mb-8 text-lg text-gray-900">
                申し訳ありません。お探しのページは存在しないか、移動した可能性があります。
            </p>
            <div className="flex justify-center space-x-4">
                <Button
                    asChild
                    className="transform bg-gray-900 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-800"
                >
                    <Link to="/">
                        <Home className="mr-2 h-4 w-4" />
                        ホームページへ戻る
                    </Link>
                </Button>
                <Button
                    className="transform border-2 border-gray-900 bg-white text-gray-900 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-100"
                    onClick={() => window.location.reload()}
                >
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    ページを再読み込み
                </Button>
            </div>
        </div>
    );
};
