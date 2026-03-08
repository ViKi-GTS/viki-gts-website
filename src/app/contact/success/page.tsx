export default function SuccessPage() {
  return (
    <main className="success-page">
      {/* HEADER - Reusing Saasbiz Theme */}
      <section className="page-header bg-primary padding text-center py-24">
        <div className="container">
          <div className="bg-white rounded-circle d-inline-flex p-4 mb-4 shadow-lg">
             <i className="fa fa-check text-primary h1 mb-0"></i>
          </div>
          <h1 className="text-white font-bold text-5xl mb-3">Request Received!</h1>
          <p className="text-white opacity-80 max-w-2xl mx-auto">
            Thank you for reaching out to ViKi Global Tech Solutions. 
            Our technical team is reviewing your request.
          </p>
        </div>
      </section>

      {/* CONTENT & NEXT STEPS */}
      <section className="padding bg-white text-center">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-bold text-3xl mb-4">What happens next?</h2>
            <div className="row mt-10 text-left">
              <div className="col-md-4 mb-4">
                <div className="p-4 bg-light rounded shadow-sm h-100">
                  <h4 className="font-bold text-blue-600">01. Review</h4>
                  <p className="text-sm text-secondary">An expert audits your request based on our industry knowledge.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="p-4 bg-light rounded shadow-sm h-100">
                  <h4 className="font-bold text-blue-600">02. Schedule</h4>
                  <p className="text-sm text-secondary">We send a calendar invite for your live SaaS or AI Demo.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="p-4 bg-light rounded shadow-sm h-100">
                  <h4 className="font-bold text-blue-600">03. Vision</h4>
                  <p className="text-sm text-secondary">We discuss how to integrate our tech into your ecosystem.</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a href="/" className="default-btn btn-blue px-10 py-3">
                Return to Homepage
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
