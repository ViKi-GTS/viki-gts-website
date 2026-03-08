
export default function CloudMigrationDetail() {
  return (
    <main className="service-detail">
      {/* Hero Section */}
      <section className="bg-dark text-white padding text-center">
        <div className="container">
          <h1 className="text-5xl font-bold">Cloud Migration & Infrastructure</h1>
          <p className="mt-4 text-xl opacity-80">Seamlessly transitioning your legacy data to the future.</p>
        </div>
      </section>

      {/* The Content */}
      <section className="padding bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 sm-padding">
              <h2 className="font-bold text-3xl mb-4">Secure, Scalable, and Socially Impactful</h2>
              <p>At Viki Global Tech Solutions, we understand that moving to the cloud is about more than just storage; it is about agility. We specialize in helping SMEs and large-scale industrial plants migrate their sensitive data with zero downtime.</p>
              
              <h3 className="mt-10 font-bold text-2xl">Our Process</h3>
              <ul className="mt-4 space-y-4">
                <li><strong>1. Audit:</strong> We analyze your current "Vision" and technical "Knowledge" gaps.</li>
                <li><strong>2. Strategy:</strong> Choosing between Public, Private, or Hybrid cloud.</li>
                <li><strong>3. Execution:</strong> Encrypted data transfer and environment setup.</li>
              </ul>
            </div>

            {/* Sidebar with Tech Stack */}
            <div className="col-lg-4 sm-padding">
              <div className="bg-light p-6 rounded shadow-sm border">
                <h4 className="font-bold mb-4">Technologies We Use</h4>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-blue-600 text-white p-2 m-1">AWS</span>
                  <span className="badge bg-blue-600 text-white p-2 m-1">Microsoft Azure</span>
                  <span className="badge bg-blue-600 text-white p-2 m-1">Docker</span>
                  <span className="badge bg-blue-600 text-white p-2 m-1">Kubernetes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
