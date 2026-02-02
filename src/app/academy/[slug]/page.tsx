import Link from 'next/link';
import { videoData } from '../data'; 
import { notFound } from 'next/navigation';

// Update interface untuk mendukung Promise
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function VideoDetail({ params }: PageProps) {
  // Await params di sini untuk mendapatkan datanya
  const { slug } = await params;
  
  const video = videoData.find((v) => v.slug === slug);

  if (!video) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="text-blue-600 hover:text-blue-800 font-medium mb-6 inline-flex items-center gap-2"
        >
          <span>←</span> Kembali ke Beranda
        </Link>
        
        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl mb-8 bg-black">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            allowFullScreen
          ></iframe>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
            {video.title}
          </h1>
          
          <div className="flex items-center">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
              Speaker: {video.speaker}
            </span>
          </div>
          
          <hr className="my-8 border-gray-100" />
          
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Deskripsi</h3>
            <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
              {video.description}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}