export default function ServicesPage() {
  const services = [
    {
      title: "Custom SaaS Solutions",
      desc: "Building scalable, user-friendly software for housing societies, healthcare, and education.",
      icon: "sb-target"
    },
    {
      title: "Cloud Migration",
      desc: "Moving legacy systems (like power plant logs or insurance records) to secure cloud environments.",
      icon: "sb-chart"
    },
    {
      title: "Automation & AI",
      desc: "Integrating face recognition and AI models to detect claim mismatches and optimize workforce tracking.",
      icon: "sb-stats"
    },
    {
      title: "API & IT Consulting",
      desc: "Expert guidance on digital transformation and seamless integration of third-party business tools.",
      icon: "sb-hours"
    }
  ];

  return (
    <div className="services-page">
      {/* HEADER (Re-used from Home) */}
      <header className="header-section shadow-sm">
        <div className="container">
          <nav className="navbar">
            <a href="/" className="navbar-brand">
              <h2 className="text-blue-600 font-bold">VIKI GTS</h2>
            </a>
          </nav>
        </div>
      </header>

      {/* SERVICES HERO */}
      <section className="page-header padding">
        <div className="container text-center">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="max-w-2xl mx-auto mt-4">
            We offer customized digital transformation services that drive efficiency and social impact globally.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="padding bg-grey">
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-3 col-sm-6 sm-padding">
                <div className="promo-item text-center p-6 bg-white rounded shadow-sm">
                  <i className={`sb ${service.icon} text-blue-500 text-3xl`}></i>
                  <h3 className="mt-4 font-bold">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="footer-section bg-dark py-10 text-center text-white">
        <p>© {new Date().getFullYear()} Viki Global Tech Solutions</p>
      </footer>
    </div>
  );
}
