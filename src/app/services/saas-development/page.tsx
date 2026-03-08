export default function SaaSDevelopmentDetail() {
  return (
    <main className="saas-dev-service">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="container text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">
            Scalable SaaS Ecosystems
          </h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
            From architecture to deployment, we build multi-tenant platforms designed to empower 
            SMEs and transform industrial workflows with precision and speed.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="padding bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 sm-padding">
              <h2 className="font-bold text-3xl mb-6">Why Partner with VIKI GTS?</h2>
              <ul className="space-y-6">
                <li className="d-flex">
                  <div className="bg-blue-600 text-white p-3 rounded-lg mr-4 h-fit">01</div>
                  <div>
                    <h4 className="font-bold text-xl">Cloud-Native Reliability</h4>
                    <p className="text-slate-600">Built on modern stacks (Next.js & AWS) to ensure your platform handles "heavy data" without performance lag.</p>
                  </div>
                </li>
                <li className="d-flex">
                  <div className="bg-blue-600 text-white p-3 rounded-lg mr-4 h-fit">02</div>
                  <div>
                    <h4 className="font-bold text-xl">Socially Inclusive Design</h4>
                    <p className="text-slate-600">We prioritize UX that is accessible to all levels of technical literacy, ensuring high adoption rates in SMEs.</p>
                  </div>
                </li>
                <li className="d-flex">
                  <div className="bg-blue-600 text-white p-3 rounded-lg mr-4 h-fit">03</div>
                  <div>
                    <h4 className="font-bold text-xl">Seamless API Integration</h4>
                    <p className="text-slate-600">Our API-first approach allows your SaaS to communicate with existing industrial and fintech tools.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 sm-padding text-center">
               <div className="bg-slate-50 p-10 rounded-3xl border shadow-inner">
                  <i className="sb sb-target text-blue-600 text-6xl mb-4"></i>
                  <h3 className="font-bold text-2xl mb-2 text-slate-800">Ready to Scale?</h3>
                  <p className="text-slate-500 italic">"We don't just build apps; we architect the digital future of your industry."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO REQUEST SECTION (The "Closer") */}
      <section className="padding bg-grey border-top border-bottom">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-4xl mb-4">Experience the VIKI Architecture</h2>
            <p className="text-lg text-slate-600 mb-8">
              Don't just take our word for it. Let us walk you through a live environment 
              showing how we handle multi-tenancy, data security, and real-time analytics.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/contact?type=saas-demo" className="default-btn px-10 py-4 text-lg">
                Request a SaaS Demo
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-400 font-medium uppercase tracking-widest">
              Available for Viki-Secure & Viki-Insure Platforms
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
