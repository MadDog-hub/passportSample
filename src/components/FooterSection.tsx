const FooterSection = () => {
  return (
    <footer className="py-16 px-6 bg-navy text-cream">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Wedding Info */}
          <div className="text-center md:text-left">
            <div className="passport-stamp bg-cream text-navy inline-block mb-4">
              WEDDING DAY
            </div>
            <h3 className="text-2xl font-bold text-cream mb-4">
              Andrei <span className="text-secondary">&</span> Ellise
            </h3>
            <div className="space-y-2 text-cream/80">
              <p>September 15, 2026</p>
              <p>Manila, Philippines</p>
              <p className="italic">"Two Souls, One Heart."</p>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="text-center">
            <div className="passport-stamp bg-cream text-navy inline-block mb-4">
              CONTACT US
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-cream">For Wedding Inquiries</h4>
                <p className="text-cream/80 text-sm">ellise.wedding@email.com</p>
                <p className="text-cream/80 text-sm">andrei.wedding@email.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-cream">Emergency Contact</h4>
                <p className="text-cream/80 text-sm">+63 917 123 4567 (Ellise)</p>
                <p className="text-cream/80 text-sm">+63 917 765 4321 (Andrei)</p>
              </div>
            </div>
          </div>
          
          {/* Social Media & Hashtag */}
          <div className="text-center md:text-right">
            <div className="passport-stamp bg-cream text-navy inline-block mb-4">
              FOLLOW OUR JOURNEY
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-cream mb-2">Wedding Hashtag</h4>
                <p className="text-2xl text-secondary font-bold">#AndreiAndEllise2026</p>
                <p className="text-cream/80 text-sm">Tag us in your photos!</p>
              </div>
              
              <div className="flex justify-center md:justify-end gap-4">
                <a 
                  href="https://instagram.com/wedding" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream hover:text-secondary transition-colors"
                >
                  📱 Instagram
                </a>
                <a 
                  href="https://facebook.com/wedding" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream hover:text-secondary transition-colors"
                >
                  📘 Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="travel-route border-cream/30 mb-8"></div>
        
        {/* Important Reminders */}
        <div className="text-center mb-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-cream mb-4">📋 Quick Reminders</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-cream/10 p-4 rounded">
                <h4 className="font-semibold text-secondary mb-2">📅 RSVP Deadline</h4>
                <p className="text-cream/80">August 15, 2026</p>
              </div>
              
              <div className="bg-cream/10 p-4 rounded">
                <h4 className="font-semibold text-secondary mb-2">👗 Dress Code</h4>
                <p className="text-cream/80">Semi-formal Rustic Romance</p>
              </div>
              
              <div className="bg-cream/10 p-4 rounded">
                <h4 className="font-semibold text-secondary mb-2">🎁 Gifts</h4>
                <p className="text-cream/80">GCash or Registry Options</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bible Verse */}
        <div className="text-center mb-8">
          <blockquote className="text-lg italic text-cream/90 max-w-2xl mx-auto">
            "Love is patient, love is kind... It always protects, always trusts, 
            always hopes, always perseveres."
          </blockquote>
          <cite className="text-cream/70 text-sm">— 1 Corinthians 13:4-7</cite>
        </div>
        
        {/* Final Divider */}
        <div className="border-t border-cream/30 pt-8">
          <div className="text-center space-y-4">
            <p className="text-cream/80 text-sm">
              Thank you for being part of our love story. We can't wait to celebrate with you!
            </p>
            
            <div className="flex justify-center items-center gap-4">
              <div className="w-8 h-0.5 bg-secondary"></div>
              <span className="text-secondary text-2xl">✈</span>
              <div className="w-8 h-0.5 bg-secondary"></div>
            </div>
            
            <p className="text-cream/60 text-xs">
              © 2026 Andrei & Ellise Wedding • Made with 💕 for our special day
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default FooterSection;