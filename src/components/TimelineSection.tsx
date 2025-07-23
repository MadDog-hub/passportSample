const TimelineSection = () => {
  const ceremonyTimeline = [
    { time: '3:00 PM', event: 'Guests Arrive', description: 'Welcome and seating at San Agustin Church' },
    { time: '3:30 PM', event: 'Procession', description: 'Bridal party processional begins' },
    { time: '3:45 PM', event: 'Holy Mass & Vows', description: 'Exchange of vows and wedding ceremony' },
    { time: '4:30 PM', event: 'Photo Session', description: 'Family and couple photography' },
    { time: '5:00 PM', event: 'Church Exit', description: 'Recessional and departure to reception' }
  ];

  const receptionTimeline = [
    { time: '5:30 PM', event: 'Cocktail Hour', description: 'Welcome drinks and mingling at The Glass Garden' },
    { time: '6:30 PM', event: 'Grand Entrance', description: 'Introduction of the newlyweds' },
    { time: '7:00 PM', event: 'Dinner', description: 'Wedding feast and celebration' },
    { time: '8:00 PM', event: 'Speeches', description: 'Toasts from family and friends' },
    { time: '8:30 PM', event: 'First Dance', description: 'The couple\'s first dance as husband and wife' },
    { time: '9:00 PM', event: 'Party Time', description: 'Dancing and celebration' },
    { time: '12:00 AM', event: 'Send-Off', description: 'Farewell and safe travels' }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="passport-page">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="passport-stamp inline-block mb-6">
              SCHEDULE OF EVENTS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Wedding Day Timeline
            </h2>
            <p className="text-xl text-navy/70 max-w-2xl mx-auto">
              Join us as we celebrate our special day - September 15, 2026
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Ceremony Timeline */}
            <div className="vintage-card p-8">
              <div className="text-center mb-8">
                <div className="passport-stamp inline-block mb-4">
                  CEREMONY
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">San Agustin Church</h3>
                <p className="text-navy/70">Intramuros, Manila</p>
              </div>
              
              <div className="space-y-6">
                {ceremonyTimeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="passport-stamp text-sm">
                        {item.time}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-navy mb-1">{item.event}</h4>
                      <p className="text-navy/70 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Reception Timeline */}
            <div className="vintage-card p-8">
              <div className="text-center mb-8">
                <div className="passport-stamp inline-block mb-4">
                  RECEPTION
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">The Glass Garden</h3>
                <p className="text-navy/70">Pasay City</p>
              </div>
              
              <div className="space-y-6">
                {receptionTimeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="passport-stamp text-sm">
                        {item.time}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-navy mb-1">{item.event}</h4>
                      <p className="text-navy/70 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Travel Note */}
          <div className="text-center mt-12">
            <div className="travel-route mb-6"></div>
            <div className="max-w-2xl mx-auto vintage-card p-6">
              <h4 className="font-bold text-navy mb-3">📍 Travel Note</h4>
              <p className="text-navy/80 text-sm">
                Allow approximately 30 minutes travel time between ceremony and reception venues. 
                Transportation will be available for the bridal party.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;