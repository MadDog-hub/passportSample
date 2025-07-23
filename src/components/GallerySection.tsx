import { useState } from 'react';
import gallery1 from '@/assets/gallery1.jpg';
import gallery2 from '@/assets/gallery2.jpg';
import gallery3 from '@/assets/gallery3.jpg';
import gallery4 from '@/assets/gallery4.jpg';
import gallery5 from '@/assets/gallery5.jpg';
import gallery6 from '@/assets/gallery6.jpg';
import gallery7 from '@/assets/gallery7.jpg';
import gallery8 from '@/assets/gallery8.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    { src: gallery1, alt: 'Andrei and Ellise - Gallery Photo 1' },
    { src: gallery2, alt: 'Andrei and Ellise - Gallery Photo 2' },
    { src: gallery3, alt: 'Andrei and Ellise - Gallery Photo 3' },
    { src: gallery4, alt: 'Andrei and Ellise - Gallery Photo 4' },
    { src: gallery5, alt: 'Andrei and Ellise - Gallery Photo 5' },
    { src: gallery6, alt: 'Andrei and Ellise - Gallery Photo 6' },
    { src: gallery7, alt: 'Andrei and Ellise - Gallery Photo 7' },
    { src: gallery8, alt: 'Andrei and Ellise - Gallery Photo 8' }
  ];

  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="passport-page">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="passport-stamp inline-block mb-6">
              PHOTO GALLERY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Captured Moments
            </h2>
            <p className="text-xl text-navy/70 max-w-2xl mx-auto">
              A collection of our favorite memories from our engagement and pre-wedding photos
            </p>
          </div>
          
          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="vintage-card overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-48 object-contain bg-white group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    🔍 View
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Album Description */}
          <div className="text-center">
            <div className="travel-route mb-8"></div>
            <div className="max-w-3xl mx-auto vintage-card p-8">
              <h3 className="text-2xl font-bold text-navy mb-4">📸 Our Love Story in Pictures</h3>
              <p className="text-navy/80 leading-relaxed">
                These photos capture the joy, laughter, and love we share. From our engagement 
                session to our pre-wedding shoots, each image tells a part of our story. 
                We can't wait to add our wedding day photos to this beautiful collection!
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="text-center">
                  <div className="passport-stamp inline-block mb-3">
                    ENGAGEMENT
                  </div>
                  <p className="text-navy/70 text-sm">
                    Captured in Pampanga where our forever began
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="passport-stamp inline-block mb-3">
                    PRE-WEDDING
                  </div>
                  <p className="text-navy/70 text-sm">
                    Beautiful moments leading up to our big day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Gallery Image" 
              className="max-w-full max-h-full object-contain"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;