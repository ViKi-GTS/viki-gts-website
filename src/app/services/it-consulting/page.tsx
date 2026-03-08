export default function ITConsultingDetail() {
  return (
    <main className="consulting-service">
      {/* Hero Section */}
      <section className="bg-blue-50 py-24 border-bottom">
        <div className="container text-center">
          <h1 className="text-5xl font-extrabold text-slate-900">IT Consulting & API Integration</h1>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
            Strategic roadmaps and technical connectivity to unify your digital ecosystem.
          </p>
        </div>
      </section>

      {/* Consulting Pillars */}
      <section className="padding bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 sm-padding">
              <h2 className="font-bold text-3xl mb-6 text-blue-800">Bridging the Technology Gap</h2>
              <p className="mb-4 text-slate-700">Many SMEs struggle with fragmented tools. Our consulting service provides the "Knowledge" to streamline these systems into a singular, high-performance workflow.</p>
              
              <ul className="content-feature mt-10">
                <li className="mb-6">
                  <h4 className="font-bold mb-1">Architecture Planning</h4>
                  <p className="text-sm text-slate-500">Designing the blueprint for your next 5 years of growth.</p>
                </li>
                <li className="mb-6">
                  <h4 className="font-bold mb-1">API-First Strategy</h4>
                  <p className="text-sm text-slate-500">Connecting your CRM, ERP, and custom SaaS tools via secure, high-speed APIs.</p>
                </li>
                <li className="mb-6">
                  <h4 className="font-bold mb-1">Social Digital Inclusion</h4>
                  <p className="text-sm text-slate-500">Ensuring tech is accessible to every employee in your organization.</p>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 sm-padding">
              <div className="bg-dark text-white p-10 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">The "Viki" Consulting Advantage</h3>
                <p className="opacity-80 mb-6 font-light">We don't just recommend tools; we implement solutions that scale.</p>
                <div className="space-y-4">
                  <div className="bg-slate-800 p-4 rounded border-l-4 border-blue-500">
                    <span className="block font-bold">Interoperability</span>
                    <span className="text-xs opacity-70">Ensuring zero friction between departments.</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded border-l-4 border-blue-500">
                    <span className="block font-bold">Cost Optimization</span>
                    <span className="text-xs opacity-70">Eliminating redundant subscriptions and tech bloat.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Demo/Consultation Section */}
      <section className="padding bg-blue-700 text-white text-center">
        <div className="container">
          <h2 className="font-bold text-3xl mb-4">Need a Strategic Roadmap?</h2>
          <p className="text-lg opacity-90 mb-8">Let’s audit your current IT infrastructure and find the path to 10x efficiency.</p>
          <a href="/contact?type=consultation" className="default-btn bg-white text-blue-700 hover:bg-slate-100 px-12 py-4">
            Book a Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
