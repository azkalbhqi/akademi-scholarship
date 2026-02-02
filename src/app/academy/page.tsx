import React from 'react';
import Link from 'next/link';
import { videoData } from './data';

const StudentSpeakerPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Link Publikasi Student Speaker</h1>
          <p className="text-gray-500 italic">Kumpulan presentasi mahasiswa</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoData.map((video) => (
            <Link href={`/academy/${video.slug}`} key={video.id}>
              <article className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="aspect-video">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-bold text-lg text-gray-800 leading-tight mb-2 line-clamp-2">
                    {video.title}
                  </h2>
                  <p className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded inline-block">
                    Speaker: {video.speaker}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default StudentSpeakerPage;