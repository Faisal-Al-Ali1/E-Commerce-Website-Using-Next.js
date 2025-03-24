import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Side - Image Area */}
          <div className="relative h-[500px] md:h-auto">
            <Image
              src="/e-commerce.jpeg"
              alt="About Us"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Right Side - Content Area */}
          <div className="p-10 text-white space-y-6 flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Our Store</span>
            </h1>
            
            <p className="text-white/80 text-lg leading-relaxed">
              We are a cutting-edge e-commerce platform built with <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Next.js App Router</span> and <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Axios</span>. 
              Our mission is to deliver a seamless, innovative shopping experience that combines performance, design, and user-centric functionality.
            </p>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-full hover:scale-105 transition transform duration-300 space-x-2"
              >
                <HomeIcon className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}