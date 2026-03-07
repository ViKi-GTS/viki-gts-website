export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <nav className="p-6 flex justify-between items-center border-b">
        <h1 className="text-2xl font-bold text-blue-600">VIKI GTS</h1>
        <div className="space-x-6 text-gray-600">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Get Started</a>
        </div>
      </nav>

      <section className="py-20 px-10 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Vision + Knowledge
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Empowering small entrepreneurs globally through innovative SaaS solutions. 
          Simple, affordable, and scalable tech for the future.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold">View Our Work</button>
          <button className="border border-gray-300 px-8 py-3 rounded-md font-semibold">Our Services</button>
        </div>
      </section>
    </main>
  );
}
