export default function AutomationAIDetail() {
  return (
    <main className="automation-ai-service">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20 text-center">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">Automation & Artificial Intelligence</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Deploying intelligent models that see, think, and optimize your industrial and financial operations.
          </p>
        </div>
      </section>

      {/* Product Highlight Section */}
      <section className="padding bg-white">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2 className="font-bold text-3xl text-blue-700">Computer Vision for Industry</h2>
              <p className="mt-4 leading-relaxed">
                Our <strong>Viki-Secure</strong> system is designed for high-stakes environments like Thermal Power Plants. By integrating AI-Face recognition with automated gate-pass systems, we ensure 100% accurate workforce tracking and vehicle security.
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li>✔ Biometric integration without physical contact</li>
                <li>✔ Real-time vehicle plate recognition (ALPR)</li>
                <li>✔ Automated safety compliance monitoring</li>
              </ul>
            </div>
            <div className="col-lg-6">
               <div className="p-4 bg-slate-100 rounded-xl border-2 border-dashed border-blue-200 text-center text-slate-500">
                 
               </div>
            </div>
          </div>

          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <h2 className="font-bold text-3xl text-blue-700">Intelligent Claim Engines</h2>
              <p className="mt-4 leading-relaxed">
                The <strong>Viki-Insure</strong> platform revolutionizes the insurance sector. Our AI models analyze claim data for 2-wheelers and 4-wheelers to identify fraudulent patterns and detect part mismatches instantly.
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li>✔ Automated damage assessment via image processing</li>
                <li>✔ Fraud detection using historical data patterns</li>
                <li>✔ Instant quote generation for SMEs</li>
              </ul>
            </div>
            <div className="col-lg-6">
               <div className="p-4 bg-slate-100 rounded-xl border-2 border-dashed border-blue-200 text-center text-slate-500">
                 
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Process Section */}
      <section className="padding bg-grey">
        <div className="container text-center">
          <h2 className="font-bold text-3xl mb-12">Our AI Implementation Flow</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="p-4 bg-white rounded shadow-sm">
                <h4 className="font-bold text-blue-600">01. Data Audit</h4>
                <p className="text-sm">We analyze your historical data to find automation opportunities.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 bg-white rounded shadow-sm">
                <h4 className="font-bold text-blue-600">02. Model Training</h4>
                <p className="text-sm">Custom training of Neural Networks specific to your industry needs.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 bg-white rounded shadow-sm">
                <h4 className="font-bold text-blue-600">03. API Integration</h4>
                <p className="text-sm">Seamlessly connecting AI outputs to your existing dashboards.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 bg-white rounded shadow-sm">
                <h4 className="font-bold text-blue-600">04. Monitoring</h4>
                <p className="text-sm">Continuous learning and accuracy adjustments in real-time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIXED DEMO BUTTON SECTION */}
      <section className="padding bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-white font-bold text-4xl mb-4">Ready to see Viki-Secure in action?</h2>
          <p className="text-white text-xl mb-8">Schedule a 15-minute live demo of our AI Face Recognition engine.</p>
          {/* Changed to default-btn with a dark background for readability */}
          <a href="/contact?subject=DemoRequest" className="default-btn btn-dark shadow-lg">
            Book a Live Demo
          </a>
        </div>
      </section>
    </main>
  );
}
