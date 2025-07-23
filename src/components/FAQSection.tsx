import { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const faqs = [
    {
      question: 'Is parking available at the venues?',
      answer: 'San Agustin Church has limited street parking in Intramuros, with paid parking available at nearby hotels. The Glass Garden offers complimentary valet parking service for all guests.',
      icon: '🚗'
    },
    {
      question: 'Can I bring a plus one to the wedding?',
      answer: 'Please indicate your plus one when you RSVP. We want to ensure we have accurate counts for seating and catering arrangements.',
      icon: '👥'
    },
    {
      question: 'Are children welcome at the ceremony and reception?',
      answer: 'Children are welcome at the ceremony. However, the reception is designed as an adult celebration. We appreciate your understanding.',
      icon: '👶'
    },
    {
      question: 'What time should I arrive at each venue?',
      answer: 'Please arrive at San Agustin Church by 3:00 PM for the 3:30 PM ceremony. The reception at The Glass Garden begins at 5:30 PM with cocktail hour.',
      icon: '⏰'
    },
    {
      question: 'Is there a gift registry or preferred gift option?',
      answer: 'We have set up a GCash option for monetary gifts, and we also have registries at major home stores. Your presence is the most important gift to us!',
      icon: '🎁'
    },
    {
      question: 'What should I wear? Is there air conditioning?',
      answer: 'Please dress in semi-formal "Rustic Romance" attire in our wedding colors. Both venues are air-conditioned, so bring a light jacket or wrap.',
      icon: '👗'
    },
    {
      question: 'How do I get from the ceremony to the reception?',
      answer: 'The venues are about 30-45 minutes apart. Shuttle service will be provided for the bridal party. Guests can use rideshare, taxi, or personal vehicles.',
      icon: '🚌'
    },
    {
      question: 'Will there be photographers at the wedding?',
      answer: 'Yes, we will have professional photographers and videographers capturing our special day. We\'ll share photos with everyone after the wedding.',
      icon: '📸'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="passport-page">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="passport-stamp inline-block mb-6">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Wedding FAQ
            </h2>
            <p className="text-xl text-navy/70 max-w-2xl mx-auto">
              Everything you need to know about our special day
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="vintage-card overflow-hidden">
                <button
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-white/50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{faq.icon}</span>
                    <h3 className="text-lg font-semibold text-navy">{faq.question}</h3>
                  </div>
                  <span className="text-2xl text-navy">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-10 border-l-4 border-secondary/30">
                      <p className="text-navy/80 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Contact Information */}
          <div className="text-center mt-12">
            <div className="travel-route mb-8"></div>
            <div className="vintage-card p-8">
              <h3 className="text-2xl font-bold text-navy mb-4">Still Have Questions?</h3>
              <p className="text-navy/70 mb-6">
                We're here to help! If you have any other questions or need assistance, 
                please don't hesitate to reach out to us.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="passport-stamp inline-block mb-3">
                    CONTACT BRIDE
                  </div>
                  <p className="text-navy font-semibold">Ellise</p>
                  <p className="text-navy/70 text-sm">ellise.wedding@email.com</p>
                  <p className="text-navy/70 text-sm">+63 917 123 4567</p>
                </div>
                
                <div className="text-center">
                  <div className="passport-stamp inline-block mb-3">
                    CONTACT GROOM
                  </div>
                  <p className="text-navy font-semibold">Andrei</p>
                  <p className="text-navy/70 text-sm">andrei.wedding@email.com</p>
                  <p className="text-navy/70 text-sm">+63 917 765 4321</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-secondary/20 rounded">
                <p className="text-navy/80 text-sm">
                  💡 <strong>Best time to call:</strong> Weekdays 6-9 PM or weekends 10 AM-8 PM
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FAQSection;