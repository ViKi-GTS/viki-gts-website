'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';

function ContactForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get dynamic values from URL links (e.g., /contact?type=saas-demo)
  const type = searchParams.get('type') || '';
  const subject = searchParams.get('subject') || '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is where you would typically send data to an API.
    // For now, we provide the seamless flow to your Success page.
    router.push('/contact/success');
  };

  return (
    <main className="contact-page">
      {/* HEADER SECTION - Styled with Saasbiz bg-dark */}
      <section className="page-header bg-dark padding text-center">
        <div className="container">
          <h1 className="text-white font-bold text-5xl mb-3">Get in Touch</h1>
          <p className="text-white opacity-80 max-w-2xl mx-auto">
            Vision + Knowledge. Send us a message today to discuss your digital transformation.
          </p>
        </div>
      </section>

      <section className="contact-section padding bg-white">
        <div className="container">
          <div className="contact-wrap d-flex align-items-center row">
            
            {/* Left Side: Contact Info using template hierarchy */}
            <div className="col-lg-6 sm-padding">
              <div className="contact-info">
                <h2 className="text-dark font-bold mb-4">Send us a message today!</h2>
                <p className="mb-5 text-secondary leading-relaxed">
                  ViKi Global Tech Solutions is committed to empowering entrepreneurs through 
                  scalable SaaS and AI-driven industrial safety solutions.
                </p>
                <h3 className="text-dark font-bold h5 mb-2">Primary Head Office</h3>
                <p className="text-secondary mb-4">Navi Mumbai, Maharashtra, India (Serving Global Clients)</p>
                <h4 className="text-blue-600">
                  <span className="font-bold text-dark">Email:</span> admin@viki-gts.com<br />
                  <span className="font-bold text-dark">Support:</span> +91 7272 88 3030
                </h4>
              </div>
            </div>

            {/* Right Side: The Dynamic Form using Template input classes */}
            <div className="col-lg-6 sm-padding">
              <div className="contact-form p-5 bg-light rounded shadow-sm border">
                <form className="form-horizontal" onSubmit={handleSubmit}>
                  <div className="form-group row g-3 mb-3">
                    <div className="col-sm-6">
                      <input type="text" className="form-control" placeholder="Full Name" required />
                    </div>
                    <div className="col-sm-6">
                      <input type="email" className="form-control" placeholder="Email Address" required />
                    </div>
                  </div>

                  {/* Universal Selector - Auto-picks the service based on where the user clicked */}
                  <div className="form-group mb-3">
                    <select 
                      className="form-control" 
                      defaultValue={type || subject}
                      required
                    >
                      <option value="">Select Service of Interest</option>
                      <option value="saas-demo">SaaS Product Demo</option>
                      <option value="DemoRequest">AI & Automation Demo</option>
                      <option value="consultation">IT Strategic Audit</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group mb-4">
                    <textarea cols={30} rows={5} className="form-control" placeholder="Tell us about your project requirements..." required></textarea>
                  </div>

                  <div className="form-group mb-0">
                    <button className="default-btn btn-blue w-100 py-3 shadow-sm" type="submit">
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

// Next.js requires Suspense for useSearchParams to work in production
export default function UniversalContactPage() {
  return (
    <Suspense fallback={<div className="padding text-center">Loading Form...</div>}>
      <ContactForm />
    </Suspense>
  );
}
