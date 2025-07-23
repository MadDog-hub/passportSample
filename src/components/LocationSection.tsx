import ceremonyImage from '@/assets/ceremony.jpg';
import receptionImage from '@/assets/reception.jpg';

const LocationSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="passport-page">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="passport-stamp inline-block mb-6">
              WEDDING VENUES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Where We'll Celebrate
            </h2>
            <p className="text-xl text-navy/70 max-w-2xl mx-auto">
              Two beautiful venues in the heart of Manila for our special day
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Ceremony Venue */}
            <div className="vintage-card overflow-hidden">
              <img 
                src={ceremonyImage} 
                alt="San Agustin Church - Ceremony Venue" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="passport-stamp inline-block mb-4">
                  CEREMONY
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">San Agustin Church</h3>
                
                <div className="space-y-3 mb-6">
                  <p className="text-navy/80">
                    <span className="font-semibold">Address:</span><br />
                    General Luna St, Intramuros<br />
                    Manila, 1002 Metro Manila
                  </p>
                  <p className="text-navy/80">
                    <span className="font-semibold">Time:</span> 3:30 PM
                  </p>
                  <p className="text-navy/80 text-sm">
                    The oldest stone church in the Philippines, a UNESCO World Heritage Site 
                    in the historic walled city of Intramuros.
                  </p>
                </div>
                
                {/* Google Maps Embed */}
                <div className="mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4234567!2d120.97456!3d14.58789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca21ac302d3d%3A0x5f334271524936c4!2sSan%20Agustin%20Church!5e0!3m2!1sen!2sph!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded border-2 border-navy/20"
                  ></iframe>
                </div>
                
                {/* QR Codes for Navigation */}
                <div className="flex gap-4">
                  <a href="https://maps.app.goo.gl/4CaZfzrmACm9fNP56" target="_blank" rel="noopener noreferrer" className="flex-1 bg-accent text-accent-foreground px-4 py-2 rounded text-sm font-semibold hover:bg-accent/90 transition-colors text-center">
                    📱 Open in Waze
                  </a>
                  <a href="https://maps.app.goo.gl/4CaZfzrmACm9fNP56" target="_blank" rel="noopener noreferrer" className="flex-1 bg-secondary text-secondary-foreground px-4 py-2 rounded text-sm font-semibold hover:bg-secondary/90 transition-colors text-center">
                    🗺️ Google Maps
                  </a>
                </div>
              </div>
            </div>
            
            {/* Reception Venue */}
            <div className="vintage-card overflow-hidden">
              <img 
                src={receptionImage} 
                alt="The Glass Garden - Reception Venue" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="passport-stamp inline-block mb-4">
                  RECEPTION
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">The Glass Garden</h3>
                
                <div className="space-y-3 mb-6">
                  <p className="text-navy/80">
                    <span className="font-semibold">Address:</span><br />
                    EDSA Extension<br />
                    Pasay City, 1300 Metro Manila
                  </p>
                  <p className="text-navy/80">
                    <span className="font-semibold">Time:</span> 5:30 PM
                  </p>
                  <p className="text-navy/80 text-sm">
                    An elegant garden venue with a stunning glass pavilion, perfect for 
                    our reception celebration with family and friends.
                  </p>
                </div>
                
                {/* Google Maps Embed */}
                <div className="mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.123456!2d121.01234!3d14.54321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9876543210a%3A0x9876543210abcdef!2sThe%20Glass%20Garden!5e0!3m2!1sen!2sph!4v1234567891"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded border-2 border-navy/20"
                  ></iframe>
                </div>
                
                {/* QR Codes for Navigation */}
                <div className="flex gap-4">
                  <a href="https://www.google.com/maps/place/1300+EDSA+Ext,+Pasay+City,+Metro+Manila/@14.5356427,120.9881854,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c95774f2fac9:0x4f2777231191c227!8m2!3d14.5356427!4d120.9907603!16s%2Fg%2F11jsjhrmhh?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex-1 bg-accent text-accent-foreground px-4 py-2 rounded text-sm font-semibold hover:bg-accent/90 transition-colors text-center">
                    📱 Open in Waze
                  </a>
                  <a href="https://www.google.com/maps/place/1300+EDSA+Ext,+Pasay+City,+Metro+Manila/@14.5356427,120.9881854,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c95774f2fac9:0x4f2777231191c227!8m2!3d14.5356427!4d120.9907603!16s%2Fg%2F11jsjhrmhh?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex-1 bg-secondary text-secondary-foreground px-4 py-2 rounded text-sm font-semibold hover:bg-secondary/90 transition-colors text-center">
                    🗺️ Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Transportation Info */}
          <div className="text-center mt-12">
            <div className="travel-route mb-8"></div>
            <div className="max-w-4xl mx-auto vintage-card p-8">
              <h3 className="text-2xl font-bold text-navy mb-6">🚗 Transportation & Parking</h3>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-bold text-accent mb-3">San Agustin Church</h4>
                  <ul className="text-navy/80 space-y-2 text-sm">
                    <li>• Limited street parking in Intramuros</li>
                    <li>• Paid parking at nearby hotels</li>
                    <li>• Taxi/ride-share drop-off available</li>
                    <li>• Walking distance from LRT Central Terminal</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-accent mb-3">The Glass Garden</h4>
                  <ul className="text-navy/80 space-y-2 text-sm">
                    <li>• Complimentary valet parking service</li>
                    <li>• Accessible via EDSA and major highways</li>
                    <li>• Near MRT/LRT stations</li>
                    <li>• Shuttle service for bridal party</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-secondary/20 rounded">
                <p className="text-navy/80 text-sm">
                  <strong>💡 Tip:</strong> Allow 30-45 minutes travel time between venues. 
                  Consider Manila traffic when planning your departure.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default LocationSection;