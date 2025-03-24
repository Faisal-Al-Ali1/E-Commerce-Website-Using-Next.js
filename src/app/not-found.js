import Link from 'next/link';
import { HomeIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-10 text-center">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
            404
          </h1>
          <p className="text-2xl font-semibold text-white mb-4">
            Page Not Found
          </p>
          <p className="text-white/80 mb-6">
            Oops! The page you are looking for seems to have wandered off into the digital wilderness.
          </p>
        </div>
        
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-full hover:scale-105 transition transform duration-300 space-x-2"
        >
          <HomeIcon className="w-5 h-5 mr-2" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
}