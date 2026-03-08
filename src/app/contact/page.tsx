'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ContactForm() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || '';
  const subject = searchParams.get('subject') || '';

  return (
    <main className="contact-page">
      {/* HEADER SECTION - Using Template Styles */}
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
            {/* Left Side: Contact Info from Template */}
            <div className="col-lg-6 sm-padding">
              <div className="contact-info">
                <h2 className="text-dark font-bold mb-4">Send us a message today!</h2>
                <p className="mb-5 text-secondary">
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

            {/* Right Side: The Dynamic Form */}
            <div className="col-lg-6 sm-padding">
              <div className="contact-form p-5 bg-light rounded shadow-sm">
                <form className="form-horizontal">
                  <div className="form-group row g-3 mb-3">
                    <div className="col-sm-6">
                      <input type="text" className="form-control" placeholder="Full Name" required />
                    </div>
                    <div className="col-sm-6">
                      <input type="email" className="form-control" placeholder="Email Address" required />
                    </div>
                  </div>

                  {/* Universal Selector - Handles all Demo/Consultation requests */}
                  <div className="form-group mb-3">
                    <select 
                      className="form-control" 
                      defaultValue={type || subject}
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

                  <div className="form-group">
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

// Next.js requires Suspense for useSearchParams
export default function UniversalContactPage() {
  return (
    <Suspense fallback={<div className="padding text-center">Loading Form...</div>}>
      <ContactForm />
    </Suspense>
  );
}
