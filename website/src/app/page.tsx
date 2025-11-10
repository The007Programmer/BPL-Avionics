// @ts-nocheck
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="w-full min-h-[90vh] flex items-center justify-center relative px-4">
          <div className="max-w-6xl w-full">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                <div className="logo-wrapper inline-block">
                  <img
                    src="/images/bpl.png"
                    alt="BPL Logo"
                    className="w-32 relative z-10"
                  />
                </div>
                <div className="slide-left">
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                    Blinn Propulsion Laboratory
                  </h1>
                  <p className="text-xl text-[var(--secondary)] max-w-xl">
                    Pushing the boundaries of liquid rocket propulsion at Blinn College Engineering Academy
                  </p>
                </div>
                <div className="slide-left space-y-6" style={{ animationDelay: "0.2s" }}>
                  <div className="h-px w-24 bg-[var(--accent)]" />
                  <p className="text-lg max-w-md text-[var(--secondary)]">
                    A student research team partnered with TAMU Sounding Rocketry, 
                    developing next-generation propulsion technologies
                  </p>
                </div>
              </div>
              <div className="relative aspect-square section-dark overflow-hidden hover-scale flex items-center justify-center">
                <div className="logo-bubble" aria-hidden="true" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 opacity-100 transition-opacity duration-500 pointer-events-none">
                  <h3 className="text-2xl font-bold mb-4">Current Focus</h3>
                  <p className="text-center text-[var(--secondary)]">
                    Research and development of liquid-fuel rocket engine systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="section-dark w-full py-32">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 slide-left">
                <h2 className="text-4xl font-bold">Our Mission</h2>
                <div className="space-y-6 text-[var(--secondary)]">
                  <p className="text-xl">
                    Advancing student research in liquid rocket propulsion while building 
                    the next generation of aerospace engineers.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">•</span>
                      <span>Hands-on experience in propulsion system design and testing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">•</span>
                      <span>Collaboration with TAMU aerospace engineering programs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">•</span>
                      <span>Development of innovative propulsion technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 slide-right">
                <div className="aspect-square section-dark p-6 flex items-center justify-center text-center hover-scale">
                  <p className="font-medium">Student-Led Innovation</p>
                </div>
                <div className="aspect-square section-dark p-6 flex items-center justify-center text-center hover-scale">
                  <p className="font-medium">Hands-On Research</p>
                </div>
                <div className="aspect-square section-dark p-6 flex items-center justify-center text-center hover-scale">
                  <p className="font-medium">Engineering Excellence</p>
                </div>
                <div className="aspect-square section-dark p-6 flex items-center justify-center text-center hover-scale">
                  <p className="font-medium">Industry Collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="w-full py-32">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 slide-in">Current Research</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="section-dark p-8 hover-scale slide-left">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Propulsion Systems</h3>
                  <ul className="space-y-4 text-[var(--secondary)]">
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">01</span>
                      <span>Custom injector plate design and optimization</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">02</span>
                      <span>Regenerative cooling system development</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">03</span>
                      <span>Thrust chamber geometry analysis</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">04</span>
                      <span>Performance characterization and testing</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="section-dark p-8 hover-scale slide-right">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Testing Infrastructure</h3>
                  <ul className="space-y-4 text-[var(--secondary)]">
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">01</span>
                      <span>Data acquisition system development</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">02</span>
                      <span>Automated test sequence implementation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">03</span>
                      <span>Real-time monitoring solutions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">04</span>
                      <span>Safety systems and protocols</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Vision Section */}
        <section id="vision" className="w-full py-32 px-4 border-t border-b border-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                <div className="space-y-6 text-lg">
                  <p>
                    We're developing cost-effective liquid propulsion solutions for the next generation of space technology.
                  </p>
                  <p>
                    Our focus: innovative design, rapid iteration, and practical testing methodologies.
                  </p>
                  <p className="text-[var(--secondary)]">
                    Currently seeking development partners and sponsors to accelerate our research.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square border border-black p-6 flex items-center justify-center">
                  <p className="font-medium">Design Innovation</p>
                </div>
                <div className="aspect-square border border-black p-6 flex items-center justify-center">
                  <p className="font-medium">Rapid Prototyping</p>
                </div>
                <div className="aspect-square border border-black p-6 flex items-center justify-center">
                  <p className="font-medium">Test Infrastructure</p>
                </div>
                <div className="aspect-square border border-black p-6 flex items-center justify-center">
                  <p className="font-medium">Data-Driven Dev</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="w-full py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16">Current Projects</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="border border-black p-8 hover:bg-black hover:text-white transition-colors">
                <h3 className="text-2xl font-bold mb-4">Liquid Engine Development</h3>
                <ul className="space-y-3">
                  <li>• Custom injector plate designs</li>
                  <li>• Regenerative cooling system</li>
                  <li>• Optimized nozzle geometry</li>
                  <li>• Advanced manufacturing techniques</li>
                </ul>
              </div>
              <div className="border border-black p-8 hover:bg-black hover:text-white transition-colors">
                <h3 className="text-2xl font-bold mb-4">Test & Control Systems</h3>
                <ul className="space-y-3">
                  <li>• Real-time data acquisition</li>
                  <li>• Automated test sequences</li>
                  <li>• Pressure regulation systems</li>
                  <li>• Safety monitoring infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section id="join" className="section-dark w-full py-32">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-5xl font-bold mb-6 slide-in">Join BPL</h2>
              <p className="text-[var(--secondary)] text-xl max-w-2xl mx-auto slide-in">
                Are you a first-year engineering student at Blinn with a passion for rocket science?
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 slide-left">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">What We Look For</h3>
                  <ul className="space-y-3 text-[var(--secondary)]">
                    <li>• Passion for aerospace and propulsion</li>
                    <li>• Strong problem-solving abilities</li>
                    <li>• Team-oriented mindset</li>
                    <li>• Dedication to learning</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">What You'll Do</h3>
                  <ul className="space-y-3 text-[var(--secondary)]">
                    <li>• Design rocket propulsion systems</li>
                    <li>• Conduct hands-on research</li>
                    <li>• Work with TAMU SRT</li>
                    <li>• Build real engineering experience</li>
                  </ul>
                </div>
              </div>
              <div className="slide-right">
                <div className="section-dark p-8 hover-scale">
                  <h3 className="text-2xl font-bold mb-6">Ready to Apply?</h3>
                  <p className="text-[var(--secondary)] mb-8">
                    Complete our interview form to start your journey with BPL.
                  </p>
                  <a 
                    href="https://forms.gle/your-interview-form" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn w-full text-center inline-block"
                  >
                    Start Application →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="w-full py-32">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-5xl font-bold mb-6 slide-in">Support Our Mission</h2>
              <p className="text-[var(--secondary)] text-xl max-w-2xl mx-auto slide-in">
                Partner with us to advance student research in rocket propulsion
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8 slide-left">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Why Support BPL?</h3>
                  <ul className="space-y-3 text-[var(--secondary)]">
                    <li>• Foster next-gen engineering talent</li>
                    <li>• Access to innovative research</li>
                    <li>• Connection to TAMU engineering</li>
                    <li>• Brand visibility in aerospace</li>
                  </ul>
                </div>
                <div className="section-dark p-8">
                  <h4 className="text-xl font-bold mb-4">Current Partners</h4>
                  <div className="text-[var(--secondary)]">
                    <p>Texas A&M Sounding Rocketry Team (TAMU SRT)</p>
                    {/* Add other partners as they come */}
                  </div>
                </div>
              </div>
              <div className="slide-right">
                <form className="section-dark p-8 space-y-6">
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <input
                    type="text"
                    placeholder="Organization Name"
                    className="w-full p-4 bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--accent)] transition-colors outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--accent)] transition-colors outline-none"
                  />
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full p-4 bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--accent)] transition-colors outline-none"
                  />
                  <button type="submit" className="btn w-full">
                    Send Message →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
