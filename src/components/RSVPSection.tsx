const RSVPSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="passport-page">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="passport-stamp inline-block mb-6">
              RÉPONDEZ S'IL VOUS PLAÎT
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              RSVP
            </h2>
            <p className="text-xl text-navy/70 max-w-2xl mx-auto">
              Please confirm your attendance so we can prepare for your celebration with us
            </p>
          </div>
          
          {/* RSVP Card */}
          <div className="vintage-card p-8 text-center relative overflow-hidden">
            
            {/* Boarding Pass Design Elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-accent to-secondary"></div>
            <div className="absolute top-4 right-4 text-4xl text-accent/20">✈</div>
            
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-navy mb-4">
                Flight to Forever
              </h3>
              <p className="text-navy/80 text-lg">
                Your boarding pass to Andrei & Ellise's Wedding Celebration
              </p>
            </div>
            
            {/* Boarding Pass Style Info */}
            <div className="bg-white/50 p-6 rounded border-2 border-dashed border-navy/30 mb-8">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="passport-stamp inline-block mb-2">
                    DEPARTURE
                  </div>
                  <p className="text-navy font-semibold">SINGLE LIFE</p>
                  <p className="text-navy/70 text-sm">Until September 15</p>
                </div>
                
                <div>
                  <div className="passport-stamp inline-block mb-2">
                    DESTINATION
                  </div>
                  <p className="text-navy font-semibold">MARRIED LIFE</p>
                  <p className="text-navy/70 text-sm">Forever & Always</p>
                </div>
                
                <div>
                  <div className="passport-stamp inline-block mb-2">
                    GATE
                  </div>
                  <p className="text-navy font-semibold">MANILA</p>
                  <p className="text-navy/70 text-sm">September 15, 2026</p>
                </div>
              </div>
            </div>
            
            {/* RSVP Button */}
            <div className="mb-8">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe15vjnpTmBOzz0x9c6Xg_JPyX1x7ayEoJdl1hpErcAOslXxw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-lg text-xl font-bold hover:bg-secondary/90 transition-colors shadow-lg transform hover:scale-105"
              >
                🎫 Confirm Your Seat
              </a>
              <p className="text-navy/70 text-sm mt-3">
                Click to open our RSVP form
              </p>
            </div>
            
            {/* RSVP Details */}
            <div className="text-center space-y-4">
              <div className="travel-route mb-6"></div>
              
              <h4 className="text-xl font-bold text-navy mb-4">
                Please RSVP by August 15, 2026
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-white/50 p-4 rounded">
                  <h5 className="font-bold text-accent mb-2">📝 Please Include:</h5>
                  <ul className="text-navy/80 text-sm space-y-1">
                    <li>• Full names of all attendees</li>
                    <li>• Contact information</li>
                    <li>• Meal preferences</li>
                    <li>• Any dietary restrictions</li>
                    <li>• Song requests for the reception</li>
                  </ul>
                </div>
                
                <div className="bg-white/50 p-4 rounded">
                  <h5 className="font-bold text-accent mb-2">⏰ Important Deadlines:</h5>
                  <ul className="text-navy/80 text-sm space-y-1">
                    <li>• RSVP deadline: August 15, 2026</li>
                    <li>• Menu selection: August 1, 2026</li>
                    <li>• Song requests: September 1, 2026</li>
                    <li>• Final headcount: September 1, 2026</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Alternative Contact */}
            <div className="mt-8 p-4 bg-accent/10 rounded border-l-4 border-accent">
              <h5 className="font-bold text-accent mb-2">Can't Access the Form?</h5>
              <p className="text-navy/80 text-sm">
                No worries! You can also RSVP by texting or calling us directly. 
                We just need to know you're coming so we can celebrate together!
              </p>
              <div className="flex justify-center gap-6 mt-3">
                <p className="text-navy font-semibold text-sm">
                  📱 Ellise: +63 917 123 4567
                </p>
                <p className="text-navy font-semibold text-sm">
                  📱 Andrei: +63 917 765 4321
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;