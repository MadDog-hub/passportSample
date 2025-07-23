import dresscodeWomen from '@/assets/dresscode-women.png';
import dresscodeMen from '@/assets/dresscode-men.png';

const DressCodeSection = () => {
  const colors = [
    { name: 'Dusty Rose', color: 'bg-rose-300' },
    { name: 'Sage Green', color: 'bg-green-300' },
    { name: 'Ivory', color: 'bg-amber-50' },
    { name: 'Gold', color: 'bg-yellow-400' }
  ];

  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="passport-page">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="passport-stamp inline-block mb-6">
              DRESS CODE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Rustic Romance
            </h2>
            <p className="text-xl text-navy/70 max-w-2xl mx-auto">
              Let's create a beautiful harmony of colors that celebrates our love story
            </p>
          </div>
          
          {/* Color Palette */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-navy mb-8">Wedding Color Palette</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {colors.map((color, index) => (
                <div key={index} className="text-center">
                  <div className="passport-stamp inline-block mb-3">
                    {color.name.toUpperCase()}
                  </div>
                  <div className={`w-16 h-16 ${color.color} rounded-full border-4 border-navy mx-auto shadow-lg`}></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dress Code Guidelines */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            
            {/* For Women */}
            <div className="vintage-card overflow-hidden">
              <img 
                src={dresscodeWomen} 
                alt="Dress Code for Women" 
                className="w-full h-64 object-contain bg-white"
              />
              <div className="p-6">
                <div className="passport-stamp inline-block mb-4">
                  FOR WOMEN
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Ladies' Attire</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-accent mb-2">✓ DO WEAR:</h4>
                    <ul className="text-navy/80 text-sm space-y-1">
                      <li>• Semi-formal dresses or elegant separates</li>
                      <li>• Earthy tones and wedding colors</li>
                      <li>• Comfortable heels or dressy flats</li>
                      <li>• Light cardigan or wrap for air conditioning</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-destructive mb-2">✗ DON'T WEAR:</h4>
                    <ul className="text-navy/80 text-sm space-y-1">
                      <li>• All black or all white outfits</li>
                      <li>• Casual denim or athletic wear</li>
                      <li>• Overly revealing clothing</li>
                      <li>• Bright neon or flashy colors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* For Men */}
            <div className="vintage-card overflow-hidden">
              <img 
                src={dresscodeMen} 
                alt="Dress Code for Men" 
                className="w-full h-64 object-contain bg-white"
              />
              <div className="p-6">
                <div className="passport-stamp inline-block mb-4">
                  FOR MEN
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Gentlemen's Attire</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-accent mb-2">✓ DO WEAR:</h4>
                    <ul className="text-navy/80 text-sm space-y-1">
                      <li>• Long-sleeve dress shirts with slacks</li>
                      <li>• Optional blazer or sport coat</li>
                      <li>• Dress shoes (leather preferred)</li>
                      <li>• Ties or bow ties welcome</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-destructive mb-2">✗ DON'T WEAR:</h4>
                    <ul className="text-navy/80 text-sm space-y-1">
                      <li>• Jeans or casual pants</li>
                      <li>• Sneakers or flip-flops</li>
                      <li>• T-shirts or tank tops</li>
                      <li>• Shorts of any kind</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Special Notes */}
          <div className="text-center">
            <div className="travel-route mb-8"></div>
            <div className="max-w-3xl mx-auto vintage-card p-8">
              <h3 className="text-2xl font-bold text-navy mb-6">Special Considerations</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-bold text-accent mb-3">🌡️ Weather & Comfort</h4>
                  <p className="text-navy/80 text-sm">
                    September weather in Manila can be warm and humid. Choose breathable fabrics 
                    and bring a light jacket for air-conditioned venues.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-accent mb-3">⛪ Church Guidelines</h4>
                  <p className="text-navy/80 text-sm">
                    San Agustin Church requests modest attire with covered shoulders. 
                    Shawls will be available for those who need them.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;