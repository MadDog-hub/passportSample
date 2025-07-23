const EntourageSection = () => {
  const principalSponsors = [
    'Mr. & Mrs. Santiago Reyes (Groom\'s godparents)',
    'Atty. Daniel Cruz & Dr. Maria Cruz (Bride\'s mentors)',
    'Mr. Antonio Lopez & Ms. Lourdes Lim (Family friends)',
    'Engr. Rafael Torres & Mrs. Elena Torres (Couple\'s spiritual advisors)'
  ];

  const secondarySponsors = [
    { role: 'Candle', sponsors: 'Kevin Lim & Patricia Sy (College best friends)' },
    { role: 'Veil', sponsors: 'Mark Tan & Sophia Ong (Cousins who introduced them)' },
    { role: 'Cord', sponsors: 'Jose Martinez & Isabel Garcia (Work colleagues turned family)' },
    { role: 'Arrhae/Bible', sponsors: 'Miguel Santos & Regina Chan (Childhood friends)' }
  ];

  const bridalParty = {
    maidOfHonor: 'Nicole Hernandez (Bride\'s sister)',
    bestMan: 'David Lim (Groom\'s brother)',
    bridesmaids: ['Camille Tan', 'Gabrielle Reyes', 'Alyssa Mendoza', 'Danielle Lopez'],
    groomsmen: ['Patrick Cruz', 'Adrian Sy', 'Marcus Tan', 'Julian Ramos']
  };

  const littleAttendants = [
    { role: 'Flower Girls', names: ['Sophie Lim (Groom\'s niece, age 6)', 'Zia Hernandez (Bride\'s goddaughter, age 5)'] },
    { role: 'Ring Bearer', names: ['Lucas Reyes (Bride\'s cousin, age 7)'] }
  ];

  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="passport-page">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="passport-stamp inline-block mb-6">
              WEDDING ENTOURAGE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Our Wedding Party
            </h2>
            <p className="text-xl text-navy/70 max-w-2xl mx-auto">
              The special people who will stand with us on our wedding day
            </p>
          </div>
          
          {/* Principal Sponsors */}
          <div className="mb-16">
            <div className="vintage-card p-8">
              <div className="text-center mb-8">
                <div className="passport-stamp inline-block mb-4">
                  PRINCIPAL SPONSORS
                </div>
                <h3 className="text-2xl font-bold text-navy">Ninong & Ninang</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {principalSponsors.map((sponsor, index) => (
                  <div key={index} className="text-center p-4 bg-white/50 rounded">
                    <p className="text-navy font-medium">{sponsor}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Secondary Sponsors */}
          <div className="mb-16">
            <div className="vintage-card p-8">
              <div className="text-center mb-8">
                <div className="passport-stamp inline-block mb-4">
                  SECONDARY SPONSORS
                </div>
                <h3 className="text-2xl font-bold text-navy">Ceremony Sponsors</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {secondarySponsors.map((sponsor, index) => (
                  <div key={index} className="text-center p-4 bg-white/50 rounded">
                    <h4 className="font-bold text-accent mb-2">{sponsor.role}</h4>
                    <p className="text-navy text-sm">{sponsor.sponsors}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bridal Party */}
          <div className="mb-16">
            <div className="vintage-card p-8">
              <div className="text-center mb-8">
                <div className="passport-stamp inline-block mb-4">
                  BRIDAL PARTY
                </div>
                <h3 className="text-2xl font-bold text-navy">Our Wedding Party</h3>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Bride's Side */}
                <div>
                  <h4 className="text-xl font-bold text-accent text-center mb-6">Bride's Side</h4>
                  
                  <div className="space-y-6">
                    <div className="text-center p-4 bg-white/50 rounded">
                      <h5 className="font-bold text-navy mb-2">Maid of Honor</h5>
                      <p className="text-navy/80">{bridalParty.maidOfHonor}</p>
                    </div>
                    
                    <div className="text-center">
                      <h5 className="font-bold text-navy mb-4">Bridesmaids</h5>
                      <div className="space-y-2">
                        {bridalParty.bridesmaids.map((bridesmaid, index) => (
                          <div key={index} className="p-3 bg-white/50 rounded">
                            <p className="text-navy/80">{bridesmaid}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Groom's Side */}
                <div>
                  <h4 className="text-xl font-bold text-accent text-center mb-6">Groom's Side</h4>
                  
                  <div className="space-y-6">
                    <div className="text-center p-4 bg-white/50 rounded">
                      <h5 className="font-bold text-navy mb-2">Best Man</h5>
                      <p className="text-navy/80">{bridalParty.bestMan}</p>
                    </div>
                    
                    <div className="text-center">
                      <h5 className="font-bold text-navy mb-4">Groomsmen</h5>
                      <div className="space-y-2">
                        {bridalParty.groomsmen.map((groomsman, index) => (
                          <div key={index} className="p-3 bg-white/50 rounded">
                            <p className="text-navy/80">{groomsman}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Little Attendants */}
          <div className="text-center">
            <div className="vintage-card p-8">
              <div className="passport-stamp inline-block mb-6">
                LITTLE ATTENDANTS
              </div>
              <h3 className="text-2xl font-bold text-navy mb-8">Our Little Angels</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {littleAttendants.map((group, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-accent mb-4">{group.role}</h4>
                    <div className="space-y-2">
                      {group.names.map((name, nameIndex) => (
                        <div key={nameIndex} className="p-3 bg-white/50 rounded">
                          <p className="text-navy/80">{name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-secondary/20 rounded">
                <p className="text-navy/80 text-sm italic">
                  Thank you to all our family and friends who are standing with us on this special day. 
                  Your love and support mean the world to us! 💕
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default EntourageSection;