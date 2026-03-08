export default function AboutPage() {
  return (
    <main className="about-page">
      {/* PAGE HEADER - Using Template Animation Classes */}
      <section className="page-header padding bg-dark">
        <div className="anim-elements">
          <div className="anim-element"></div>
          <div className="anim-element"></div>
          <div className="anim-element"></div>
        </div>
        <div className="container">
          <div className="page-content text-center">
            <h2 className="text-white font-bold text-5xl">About ViKi GTS</h2>
            <p className="text-white opacity-80 mt-3">Empowering Entrepreneurs through Vision + Knowledge.</p>
          </div>
        </div>
      </section>

      {/* PROMO SECTION - Your 3 Core Pillars */}
      <section className="promo-section bg-grey promo-4 bd-bottom padding">
        <div className="container">
          <div className="row promo-wrap">
            <div className="col-lg-4 col-sm-6 sm-padding">
              <div className="promo-item">
                <i className="sb sb-chart text-primary"></i>
                <h3>SaaS Excellence</h3>
                <p>Building scalable multi-tenant platforms for global housing and SME markets.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 sm-padding">
              <div className="promo-item">
                <i className="sb sb-stats text-primary"></i>
                <h3>Industrial AI</h3>
                <p>Secure workforce tracking and thermal power plant safety via AI-Face Recognition.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 sm-padding">
              <div className="promo-item">
                <i className="sb sb-hours text-primary"></i>
                <h3>24/7 Consultation</h3>
                <p>Strategic IT roadmaps and API integration for seamless digital transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION - Modularity Focus */}
      <section className="content-section bd-bottom padding bg-white">
        <div className="container">
          <div className="row content-wrap align-items-center">
            <div className="col-lg-6 sm-padding">
              <img src="/img/dashbord-1.jpg" alt="ViKi GTS Dashboard" className="rounded shadow-lg" />
            </div>
            <div className="col-lg-6 sm-padding">
              <div className="content-info">
                <span className="text-primary font-bold">Our Features</span>
                <h2 className="text-dark font-bold mt-2">Architecture Driven By Purpose</h2>
                <p className="text-secondary mt-3">
                  We provide digital transformation services tailored for startups and industrial 
                  giants alike, ensuring every element of your design serves a business goal.
                </p>
                <ul className="content-list mt-4 list-unstyled">
                  <li className="mb-2"><i className="fas fa-check text-success mr-2"></i> Scalable Multi-tenant SaaS Architecture</li>
                  <li className="mb-2"><i className="fas fa-check text-success mr-2"></i> Industrial-grade AI Security Protocols</li>
                  <li className="mb-2"><i className="fas fa-check text-success mr-2"></i> Seamless 3rd-party API Interoperability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTER SECTION - Impact Metrics */}
      <section className="counter-section bd-bottom padding bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-sm-6 sm-padding">
              <div className="counter-item">
                <i className="icon-download text-danger h1"></i>
                <h3 className="font-bold text-4xl mt-2">10k+</h3>
                <h4 className="text-secondary text-sm">Active Users</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 sm-padding">
              <div className="counter-item">
                <i className="icon-bargraph text-primary h1"></i>
                <h3 className="font-bold text-4xl mt-2">99%</h3>
                <h4 className="text-secondary text-sm">System Uptime</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 sm-padding">
              <div className="counter-item">
                <i className="icon-tools text-warning h1"></i>
                <h3 className="font-bold text-4xl mt-2">50+</h3>
                <h4 className="text-secondary text-sm">SME Partners</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 sm-padding">
              <div className="counter-item">
                <i className="icon-ribbon text-success h1"></i>
                <h3 className="font-bold text-4xl mt-2">100%</h3>
                <h4 className="text-secondary text-sm">Secure Data</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="padding bg-primary text-center">
        <div className="container">
          <h2 className="text-white font-bold text-4xl">Revolutionize Your Digital Presence</h2>
          <p className="text-white opacity-80 mt-3 mb-5">Join the thousands of leaders using ViKi GTS solutions.</p>
          <a href="/contact" className="default-btn btn-dark shadow-lg">Get Started Now</a>
        </div>
      </section>
    </main>
  );
}
