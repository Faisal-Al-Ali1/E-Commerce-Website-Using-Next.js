export const dynamic = 'force-dynamic'; 

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ShoppingCartIcon, ArrowLeftIcon } from 'lucide-react';
import { getProductById } from '../../../lib/api';

export default async function ProductDetailsPage({ params }) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 px-4 py-16 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Product Image Placeholder */}
          <div className="bg-gradient-to-tr from-pink-500 to-orange-500 flex items-center justify-center p-10">
            <div className="w-full h-[400px] bg-white/20 flex items-center justify-center">
              <span className="text-white text-2xl">Product Image</span>
            </div>
          </div>

          {/* Product Details */}
          <div className="p-10 text-white flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4 tracking-tight">
                {product.title}
              </h1>

              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                  ${product.price}
                </span>
                <button className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-full hover:scale-105 transition transform duration-300 space-x-2">
                  <ShoppingCartIcon className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-white/20">
              <Link
                href="/products"
                className="inline-flex items-center text-white/80 hover:text-white transition"
              >
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}