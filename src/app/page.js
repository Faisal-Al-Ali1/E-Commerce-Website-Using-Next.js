import Link from 'next/link';
import { ChevronRightIcon, ShoppingBagIcon } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Side - Illustration Area */}
          <div className="bg-gradient-to-tr from-pink-500 to-orange-500 flex items-center justify-center p-10">
            <ShoppingBagIcon 
              className="text-white w-64 h-64 drop-shadow-2xl" 
              strokeWidth={1} 
            />
          </div>
          
          {/* Right Side - Content Area */}
          <div className="p-10 text-white space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">
              Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Exceptional</span> Products
            </h1>
            
            <p className="text-white/80 text-lg">
              Explore a curated collection of premium products designed to elevate your everyday experience. Quality meets innovation in our unique marketplace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-full hover:scale-105 transition transform duration-300 space-x-2"
              >
                <span>Shop Now</span>
                <ChevronRightIcon className="w-5 h-5" />
              </Link>
              
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white/90 rounded-full hover:bg-white/10 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}