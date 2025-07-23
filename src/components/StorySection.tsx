import groomImage from '@/assets/groom.jpg';
import brideImage from '@/assets/bride.jpg';

const StorySection = () => {
  const timeline = [
    { year: '2018', event: 'Met at UP Diliman', description: 'Our paths crossed in the halls of the University of the Philippines' },
    { year: '2020', event: 'First Date', description: 'A simple coffee date that lasted until the stars came out' },
    { year: '2023', event: 'Proposal in Pampanga', description: 'Under the beautiful sunset, Andrei asked the most important question' },
    { year: '2026', event: 'Wedding in Manila', description: 'The beginning of our forever adventure together' }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="passport-page">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="passport-stamp inline-block mb-6">
              OUR STORY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Love Story Timeline
            </h2>
            <p className="text-xl text-navy/70 max-w-2xl mx-auto">
              Every love story is beautiful, but ours is our favorite
            </p>
          </div>
          
          {/* Timeline */}
          <div className="mb-16">
            <div className="grid gap-8 md:gap-12">
              {timeline.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-6">
                  <div className="passport-stamp flex-shrink-0">
                    {item.year}
                  </div>
                  <div className="travel-route flex-grow hidden md:block"></div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-navy mb-2">{item.event}</h3>
                    <p className="text-navy/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* About the Celebrants */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            
            {/* About Andrei */}
            <div className="vintage-card overflow-hidden">
              <img 
                src={groomImage} 
                alt="Andrei - The Groom" 
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <div className="passport-stamp inline-block mb-4">
                  THE GROOM
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Andrei</h3>
                <p className="text-navy/80 leading-relaxed">
                  A grounded realist with a witty charm, Andrei brings laughter and stability 
                  to every situation. His practical nature perfectly balances Ellise's dreams, 
                  creating a partnership built on mutual respect and endless love.
                </p>
              </div>
            </div>
            
            {/* About Ellise */}
            <div className="vintage-card overflow-hidden">
              <img 
                src={brideImage} 
                alt="Ellise - The Bride" 
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <div className="passport-stamp inline-block mb-4">
                  THE BRIDE
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Ellise</h3>
                <p className="text-navy/80 leading-relaxed">
                  A graceful dreamer with a heart for art and adventure, Ellise sees beauty 
                  in everything around her. Her creative spirit and boundless optimism inspire 
                  everyone she meets, especially the love of her life, Andrei.
                </p>
              </div>
            </div>
          </div>
          
          {/* Travel Map Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-navy mb-8">Our Journey Map</h3>
            <div className="vintage-card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="passport-stamp inline-block mb-4">
                    UP DILIMAN
                  </div>
                  <h4 className="font-bold text-navy">Where We Met</h4>
                  <p className="text-navy/70 text-sm">Quezon City, 2018</p>
                </div>
                
                <div className="text-center">
                  <div className="passport-stamp inline-block mb-4">
                    PAMPANGA
                  </div>
                  <h4 className="font-bold text-navy">Where He Proposed</h4>
                  <p className="text-navy/70 text-sm">Central Luzon, 2023</p>
                </div>
                
                <div className="text-center">
                  <div className="passport-stamp inline-block mb-4">
                    MANILA
                  </div>
                  <h4 className="font-bold text-navy">Where We'll Wed</h4>
                  <p className="text-navy/70 text-sm">National Capital Region, 2026</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default StorySection;