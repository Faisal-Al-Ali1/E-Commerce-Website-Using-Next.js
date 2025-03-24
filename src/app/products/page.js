export const revalidate = 60;

import Link from 'next/link';
import { ChevronRightIcon, TagIcon } from 'lucide-react';
import { getProducts } from '../../lib/api';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Our Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Products</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden transition transform hover:-translate-y-2 duration-300"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <TagIcon 
                    className="w-6 h-6 mr-3 text-pink-500" 
                    strokeWidth={2} 
                  />
                  <h2 className="text-xl font-semibold text-white">
                    <Link href={`/products/${product.id}`}>
                      <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition">
                        {product.title}
                      </span>
                    </Link>
                  </h2>
                </div>
                
                <p className="text-white/70 text-sm line-clamp-2 mb-4 flex-grow">
                  {product.description}
                </p>
                
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                    ${product.price}
                  </p>
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm font-medium rounded-full hover:scale-105 transition transform duration-300 space-x-2"
                  >
                    <span>View Details</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}