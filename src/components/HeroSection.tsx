import CountdownTimer from './CountdownTimer';
import heroBackground from '@/assets/hero-background.png';

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="hero-overlay absolute inset-0"></div>
      
      <div className="relative z-10 text-center text-cream px-6">
        <div className="passport-page bg-cream/10 backdrop-blur-sm border-cream/30 max-w-2xl mx-auto">
          
          {/* Passport Header */}
          <div className="text-center mb-8">
            <div className="text-sm tracking-[0.5em] uppercase text-gold mb-2">
              Wedding Invitation
            </div>
            <div className="w-20 h-0.5 bg-gold mx-auto mb-6"></div>
          </div>
          
          {/* Names */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-cream mb-4">
              Andrei <span className="text-gold">&</span> Ellise
            </h1>
            <p className="text-xl md:text-2xl text-cream/90 italic">
              "Two Souls, One Heart."
            </p>
          </div>
          
          {/* Event Details in Passport Stamp Style */}
          <div className="space-y-4 mb-8">
            <div className="passport-stamp text-navy bg-cream">
              <div className="font-bold">SEPTEMBER 15, 2026</div>
              <div className="text-sm">Manila, Philippines</div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="passport-stamp text-navy bg-cream">
                <div className="font-semibold">CEREMONY</div>
                <div>San Agustin Church</div>
                <div>Intramuros, Manila</div>
                <div>3:30 PM</div>
              </div>
              
              <div className="passport-stamp text-navy bg-cream">
                <div className="font-semibold">RECEPTION</div>
                <div>The Glass Garden</div>
                <div>Pasay City</div>
                <div>5:30 PM</div>
              </div>
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="mb-6">
            <p className="text-cream mb-4 text-lg">
              Only <span className="text-gold font-semibold">{new Date('2026-09-15').getTime() > new Date().getTime() ? Math.ceil((new Date('2026-09-15').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : 0}</span> days until we say "I do"!
            </p>
            <CountdownTimer />
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce mt-8">
            <div className="w-6 h-10 border-2 border-cream rounded-full mx-auto relative">
              <div className="w-1 h-2 bg-cream rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
            <p className="text-xs text-cream/70 mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;