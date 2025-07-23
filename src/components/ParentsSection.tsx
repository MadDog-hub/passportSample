const ParentsSection = () => {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="passport-page">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="passport-stamp inline-block mb-6">
              MESSAGES FROM PARENTS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              With Love & Blessings
            </h2>
            <p className="text-xl text-navy/70 max-w-2xl mx-auto">
              Heartfelt words from the families who raised us with love
            </p>
          </div>
          
          {/* Parent Messages */}
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Bride's Parents */}
            <div className="vintage-card p-8 relative">
              <div className="absolute top-4 right-4 text-4xl text-accent/20">✉</div>
              
              <div className="passport-stamp inline-block mb-6">
                BRIDE'S PARENTS
              </div>
              
              <h3 className="text-2xl font-bold text-navy mb-6">
                Mr. Roberto Hernandez & Dr. Maria Hernandez
              </h3>
              
              <div className="bg-white/50 p-6 rounded border-l-4 border-accent">
                <p className="text-navy/80 leading-relaxed italic mb-4">
                  "Our dearest Ellise, watching you grow into the beautiful, compassionate woman 
                  you are today has been our greatest joy. Andrei, we welcome you with open hearts 
                  into our family. May your love story be filled with endless adventures, unwavering 
                  support, and the kind of happiness that grows stronger with each passing day."
                </p>
                <p className="text-navy font-semibold">
                  With all our love and prayers for your future together.
                </p>
              </div>
            </div>
            
            {/* Groom's Parents */}
            <div className="vintage-card p-8 relative">
              <div className="absolute top-4 right-4 text-4xl text-accent/20">✉</div>
              
              <div className="passport-stamp inline-block mb-6">
                GROOM'S PARENTS
              </div>
              
              <h3 className="text-2xl font-bold text-navy mb-6">
                Mr. Henry Lim & Mrs. Susan Lim
              </h3>
              
              <div className="bg-white/50 p-6 rounded border-l-4 border-accent">
                <p className="text-navy/80 leading-relaxed italic mb-4">
                  "To our beloved son Andrei and our new daughter Ellise, we have watched your 
                  love bloom into something truly special. Your commitment to each other and your 
                  shared values give us immense pride and joy. As you begin this new chapter, 
                  remember that home is wherever you are together."
                </p>
                <p className="text-navy font-semibold">
                  May God bless your union with abundant love and happiness.
                </p>
              </div>
            </div>
          </div>
          
          {/* Family Blessing */}
          <div className="text-center mt-16">
            <div className="travel-route mb-8"></div>
            <div className="max-w-3xl mx-auto vintage-card p-8">
              <h3 className="text-2xl font-bold text-navy mb-6">A United Family Prayer</h3>
              <p className="text-lg text-navy/80 italic leading-relaxed">
                "May your marriage be a source of strength, comfort, and joy. May you always find 
                in each other your best friend, your greatest love, and your strongest support. 
                As our families unite, we pray for a lifetime of shared dreams, cherished memories, 
                and endless blessings for Andrei and Ellise."
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;