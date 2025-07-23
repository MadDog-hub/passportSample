const InvitationSection = () => {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="passport-page">
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="passport-stamp inline-block mb-6">
              INVITATION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              You Are Cordially Invited
            </h2>
          </div>
          
          {/* Main Invitation Text */}
          <div className="text-center space-y-8 mb-12">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-navy/80 leading-relaxed">
                Together with our families, we joyfully invite you to witness and celebrate 
                the union of our hearts as we exchange vows and begin our journey as husband and wife.
              </p>
            </div>
            
            <div className="travel-route my-8"></div>
            
            {/* Wedding Details */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="vintage-card p-6">
                <h3 className="text-2xl font-bold text-navy mb-4">Holy Matrimony</h3>
                <div className="space-y-2 text-navy/80">
                  <p className="font-semibold">San Agustin Church</p>
                  <p>General Luna St, Intramuros</p>
                  <p>Manila, Philippines</p>
                  <div className="passport-stamp inline-block mt-4">
                    SEPT 15, 2026 • 3:30 PM
                  </div>
                </div>
              </div>
              
              <div className="vintage-card p-6">
                <h3 className="text-2xl font-bold text-navy mb-4">Reception</h3>
                <div className="space-y-2 text-navy/80">
                  <p className="font-semibold">The Glass Garden</p>
                  <p>EDSA Extension</p>
                  <p>Pasay City, Philippines</p>
                  <div className="passport-stamp inline-block mt-4">
                    SEPT 15, 2026 • 5:30 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bible Verse */}
          <div className="text-center border-t-2 border-dashed border-navy/30 pt-8">
            <div className="max-w-2xl mx-auto">
              <blockquote className="text-xl md:text-2xl font-serif text-navy italic mb-4">
                "Love is patient, love is kind. It does not envy, it does not boast, 
                it is not proud. It does not dishonor others, it is not self-seeking, 
                it is not easily angered, it keeps no record of wrongs. Love does not 
                delight in evil but rejoices with the truth. It always protects, 
                always trusts, always hopes, always perseveres."
              </blockquote>
              <cite className="text-lg text-navy/70 font-semibold">
                — 1 Corinthians 13:4-7
              </cite>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;