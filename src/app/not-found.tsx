// pages/404.tsx (atau app/not-found.tsx jika Anda menggunakan App Router)

import Link from 'next/link';
import Image from 'next/image';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900 px-4 sm:px-6 lg:px-8 text-center">
      <h1 className='text-4xl font-bold'>Sabar cuy, Masih dikembangin nih webnya</h1>
      <p className='text-lg font-semibold'>Staytune aja yak!</p>
    </div>
  );
}