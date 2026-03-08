export default function ServicesPage() {
  const services = [
    {
      title: "Custom SaaS Solutions",
      desc: "Building scalable, user-friendly software for housing societies, healthcare, and education.",
      icon: "sb-target",
      link: "/services/saas-development"
    },
    {
      title: "Cloud Migration",
      desc: "Moving legacy systems to secure cloud environments with zero downtime.",
      icon: "sb-chart",
      link: "/services/cloud-migration"
    },
    {
      title: "Automation & AI",
      desc: "Deploying intelligent models for industrial safety and fintech fraud detection.",
      icon: "sb-stats",
      link: "/services/automation-ai"
    },
    {
      title: "IT Consulting & API",
      desc: "Expert guidance on digital transformation and seamless system integration.",
      icon: "sb-hours",
      link: "/services/it-consulting"
    }
  ];

  return (
    <div className="services-page">
      <header className="header-section shadow-sm bg-white">
        <div className="container">
          <nav className="navbar py-4">
            <a href="/" className="navbar-brand">
              <h2 className="text-blue-600 font-bold mb-0">VIKI GTS</h2>
            </a>
          </nav>
        </div>
      </header>

      <section className="page-header padding bg-dark text-white text-center">
        <div className="container">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="max-w-2xl mx-auto mt-4 opacity-80">
            We offer customized digital transformation services that drive efficiency and social impact globally.
          </p>
        </div>
      </section>

      <section className="padding bg-grey">
        <div className="container">
          <div className="row g-4"> {/* g-4 adds uniform spacing between cards */}
            {services.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <a 
                  href={service.link} 
                  className="promo-item text-center p-4 bg-white rounded shadow-sm hover:shadow-lg transition-all no-underline text-dark d-flex flex-column h-100"
                  style={{ minHeight: '350px' }} // Ensures all cards are uniform height
                >
                  <div className="mb-4">
                    <i className={`sb ${service.icon} text-blue-500 text-4xl`}></i>
                  </div>
                  <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-600 flex-grow-1 mb-4">{service.desc}</p>
                  <div className="mt-auto">
                    <span className="text-blue-600 font-semibold">Learn More →</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <footer className="footer-section bg-dark py-5 text-center text-white">
        <p className="mb-0">© {new Date().getFullYear()} Viki Global Tech Solutions</p>
      </footer>
    </div>
  );
}
