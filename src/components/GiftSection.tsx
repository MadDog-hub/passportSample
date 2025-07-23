import gcashQR from '@/assets/gcash-qr.png';

const GiftSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="passport-page">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="passport-stamp inline-block mb-6">
              WEDDING GIFTS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Your Presence is Our Present
            </h2>
            <p className="text-xl text-navy/70 max-w-2xl mx-auto">
              Your love and presence on our special day is the greatest gift we could ask for
            </p>
          </div>
          
          <div className="vintage-card p-8 relative overflow-hidden">
            
            {/* Vintage Trunk Decoration */}
            <div className="absolute top-4 right-4 text-6xl text-accent/10">🧳</div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-navy mb-4">
                Monetary Gifts
              </h3>
              <p className="text-navy/70 max-w-xl mx-auto">
                For those who wish to give a monetary gift, we have set up a convenient 
                digital payment option. Your generosity will help us start our new journey together.
              </p>
            </div>
            
            {/* GCash QR Code */}
            <div className="text-center mb-8">
              <div className="inline-block p-6 bg-white rounded-lg shadow-lg border-4 border-dashed border-secondary">
                <img 
                  src={gcashQR} 
                  alt="GCash QR Code for Wedding Gifts" 
                  className="w-64 h-64 mx-auto object-contain"
                />
                <div className="mt-4">
                  <div className="passport-stamp inline-block">
                    SCAN TO SEND
                  </div>
                  <p className="text-navy font-semibold mt-2">GCash Payment</p>
                  <p className="text-navy/70 text-sm">Scan QR code with your GCash app</p>
                </div>
              </div>
            </div>
            
            {/* Payment Instructions */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/50 p-6 rounded">
                <h4 className="font-bold text-accent mb-3">📱 How to Send via GCash</h4>
                <ol className="text-navy/80 text-sm space-y-2">
                  <li>1. Open your GCash app</li>
                  <li>2. Tap "Send Money" then "QR"</li>
                  <li>3. Scan the QR code above</li>
                  <li>4. Enter your desired amount</li>
                  <li>5. Add a sweet message if you'd like</li>
                  <li>6. Confirm and send</li>
                </ol>
              </div>
              
              <div className="bg-white/50 p-6 rounded">
                <h4 className="font-bold text-accent mb-3">💝 Other Gift Options</h4>
                <ul className="text-navy/80 text-sm space-y-2">
                  <li>• Cash gifts in traditional envelope</li>
                  <li>• Checks made out to "Andrei & Ellise Lim"</li>
                  <li>• Gift cards for home essentials</li>
                  <li>• Contributions to our honeymoon fund</li>
                  <li>• Items from our wedding registry</li>
                </ul>
              </div>
            </div>
            
            {/* Thank You Note */}
            <div className="text-center mt-8">
              <div className="travel-route mb-6"></div>
              <div className="max-w-2xl mx-auto bg-white/70 p-6 rounded border-l-4 border-secondary">
                <h4 className="font-bold text-navy mb-3">💕 A Heartfelt Thank You</h4>
                <p className="text-navy/80 italic">
                  "Whether you choose to give a gift or simply share in our joy, please know that 
                  your presence at our wedding is the most precious gift of all. We are grateful 
                  for your love, support, and friendship as we begin this new chapter together."
                </p>
                <p className="text-navy font-semibold mt-3">
                  With love and gratitude,<br />
                  Andrei & Ellise
                </p>
              </div>
            </div>
            
            {/* Registry Information */}
            <div className="text-center mt-8">
              <div className="passport-stamp inline-block">
                GIFT REGISTRY
              </div>
              <p className="text-navy/70 text-sm mt-2">
                For those who prefer to give physical gifts, we have registries at major home stores. 
                Please contact us for details.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;