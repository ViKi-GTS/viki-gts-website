export default function Home() {
  return (
    <div className="site-main">
      {/* HEADER SECTION */}
      <header id="header" className="header-section">
        <div className="container">
          <nav className="navbar">
            <a href="/" className="navbar-brand">
              <h2 className="text-blue-600 font-bold">VIKI GTS</h2>
            </a>
            <div className="d-flex menu-wrap">
              <div id="mainmenu" className="mainmenu">
                <ul className="nav">
                  <li><a className="nav-link active" href="/">Home</a></li>
                  <li><a href="about">About</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="#projects">Case Studies</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section bg-grey d-flex align-items-center bd-bottom">
        <div className="container">
          <div className="row hero-wrap d-flex align-items-center">
            <div className="col-lg-6 sm-padding">
              <div className="hero-content">
                <h1>Vision + Knowledge <br />Global Tech Solutions.</h1>
                <p>Empowering small entrepreneurs and organizations globally through innovative, simple, and scalable SaaS solutions.</p>
                <div className="btn-group">
                  <a href="#projects" className="default-btn">View Our Work</a>
                  <a href="#contact" className="default-btn bg-dark text-white ml-2">Get Started</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 sm-padding">
              <img src="/img/hero-1.png" alt="Viki GTS Hero" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS (REPLACING PROMO SECTION) */}
      <section id="projects" className="promo-section bd-bottom padding">
        <div className="container">
          <div className="section-heading text-center mb-40">
            <span>Our Expertise</span>
            <h2>Showcasing Our Work</h2>
          </div>
          <div className="row promo-wrap">
            {/* Project 1: Power Plant */}
            <div className="col-lg-4 col-sm-6 sm-padding">
              <div className="promo-item">
                <i className="sb sb-chart"></i>
                <h3>Industrial SaaS</h3>
                <p>Thermal power plant management system featuring AI face recognition for 100% secure workforce and vehicle tracking.</p>
              </div>
            </div>
            {/* Project 2: Insurance */}
            <div className="col-lg-4 col-sm-6 sm-padding">
              <div className="promo-item">
                <i className="sb sb-stats"></i>
                <h3>Fintech Cloud</h3>
                <p>Advanced insurance claim engine for 2-wheeler and 4-wheeler claims with AI-driven part mismatch detection.</p>
              </div>
            </div>
            {/* Project 3: Co-Working */}
            <div className="col-lg-4 col-sm-6 sm-padding">
              <div className="promo-item">
                <i className="sb sb-target"></i>
                <h3>SME Solution</h3>
                <p>Comprehensive Co-working space management: real-time seat reservation, inventory tracking, and automated invoicing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION */}
      <section id="services" className="content-section bg-grey bd-bottom padding">
        <div className="container">
          <div className="row content-wrap">
            <div className="col-lg-6 sm-padding">
              <div className="content-info">
                <span>Services</span>
                <h2>Driving Efficiency & Inclusion</h2>
                <p>We build customized tech ecosystems that drive social impact and growth-oriented results.</p>
                <ul className="content-feature">
                  <li className="content-feature-item">
                    <div className="content-details">
                      <h3>Digital Transformation</h3>
                      <p>Automation, Cloud Migration, and IT Consulting tailored for SMEs and housing societies.</p>
                    </div>
                  </li>
                  <li className="content-feature-item">
                    <div className="content-details">
                      <h3>API Integration</h3>
                      <p>Seamlessly connecting your business tools to create a unified, user-friendly digital environment.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 sm-padding">
              <img src="/img/content-1.png" alt="Viki GTS Services" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-section bg-dark align-center py-5">
        <div className="container text-white text-center">
          <p>&copy; {new Date().getFullYear()} Viki Global Tech Solutions. Vision + Knowledge.</p>
        </div>
      </footer>
    </div>
  );
}
