const VideoSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="passport-page">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="passport-stamp inline-block mb-6">
              PRE-WEDDING VIDEO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Our Love Story Film
            </h2>
            <p className="text-xl text-navy/70 max-w-2xl mx-auto">
              Watch our pre-wedding video and get a glimpse of our beautiful journey together
            </p>
          </div>
          
          {/* Video Player */}
          <div className="relative vintage-card overflow-hidden">
            {/* Stickers outside video */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-2 md:mb-4 gap-2 md:gap-0">
              <div className="passport-stamp md:ml-4">PRENUP FILM</div>
              <div className="passport-stamp md:mr-4">ANDREI & ELLISE</div>
            </div>
            <div className="aspect-video bg-navy/10 border-4 border-dashed border-navy/20 relative">
              <video 
                controls
                className="w-full h-full object-cover"
                poster="/api/placeholder/800/450"
              >
                <source 
                  src="https://res.cloudinary.com/dbiboclqa/video/upload/v1753163341/Zeinab_Harake_and_Ray_Parks_Jr._OSAKA_JAPAN_Pre_Wedding_Film_by_Nice_Print_amwuhx.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          {/* Video Description */}
          <div className="text-center mt-12">
            <div className="travel-route mb-8"></div>
            <div className="max-w-3xl mx-auto vintage-card p-8">
              <h3 className="text-2xl font-bold text-navy mb-4">🎬 Behind the Scenes</h3>
              <p className="text-navy/80 leading-relaxed mb-6">
                This beautiful pre-wedding film captures the essence of our love story. 
                Shot in the stunning landscapes of Japan, it showcases the moments of joy, 
                laughter, and deep connection that define our relationship. Every frame 
                tells a part of our journey together.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="passport-stamp inline-block mb-3">
                    LOCATION
                  </div>
                  <p className="text-navy/70 text-sm">Osaka, Japan</p>
                </div>
                
                <div className="text-center">
                  <div className="passport-stamp inline-block mb-3">
                    STYLE
                  </div>
                  <p className="text-navy/70 text-sm">Cinematic Romance</p>
                </div>
                
                <div className="text-center">
                  <div className="passport-stamp inline-block mb-3">
                    THEME
                  </div>
                  <p className="text-navy/70 text-sm">Adventure & Love</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-secondary/20 rounded">
                <p className="text-navy/80 text-sm italic">
                  "This video represents not just our love for each other, but our shared 
                  passion for adventure and creating beautiful memories together. We hope 
                  it gives you a glimpse into our hearts and the joy we find in each other."
                </p>
                <p className="text-navy font-semibold mt-2">— Andrei & Ellise</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default VideoSection;