// @ts-nocheck
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="w-full min-h-screen flex items-center justify-center relative px-4 -mt-20">
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
                    Pushing the boundaries of hybrid rocket propulsion at Blinn College
                  </p>
                </div>
                <div className="slide-left space-y-6" style={{ animationDelay: "0.2s" }}>
                  <div className="h-px w-24 bg-[var(--accent)]" />
                  <p className="text-lg max-w-md text-[var(--secondary)]">
                    A student research team advised by TAMU Sounding Rocketry, 
                    developing next-generation propulsion technologies
                  </p>
                </div>
              </div>
              <div className="relative aspect-square section-dark overflow-hidden hover-scale flex items-center justify-center rounded-3xl ml-4">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 opacity-100 transition-opacity duration-500 pointer-events-none">
                  <h3 className="text-2xl font-bold mb-4">Current Focus</h3>
                  <p className="text-center text-[var(--secondary)]">
                    Research and development of hybrid rocket engine systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="section-dark w-full py-32 border-t border-[var(--accent)]/20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 slide-left">
                <h2 className="text-4xl font-bold">Our Mission</h2>
                <div className="space-y-6 text-[var(--secondary)]">
                  <p className="text-xl">
                    Advancing student research in hybrid rocket propulsion while building 
                    the next generation of aerospace engineers.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">•</span>
                      <span>Apply system engineering principles to real-world challenges</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">•</span>
                      <span>Hands-on experience in propulsion system design and testing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">•</span>
                      <span>Development of innovative propulsion technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 slide-right">
                <div className="aspect-square section-dark p-6 flex items-center justify-center text-center hover-scale rounded-2xl">
                  <p className="font-medium">Student-Led Innovation</p>
                </div>
                <div className="aspect-square section-dark p-6 flex items-center justify-center text-center hover-scale rounded-2xl">
                  <p className="font-medium">Hands-On Research</p>
                </div>
                <div className="aspect-square section-dark p-6 flex items-center justify-center text-center hover-scale rounded-2xl">
                  <p className="font-medium">Engineering Excellence</p>
                </div>
                <div className="aspect-square section-dark p-6 flex items-center justify-center text-center hover-scale rounded-2xl">
                  <p className="font-medium">System Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </section>

  {/* Research Section */}
        <section id="research" className="w-full py-32 section-accent border-t border-[var(--accent)]/20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 slide-in">Current Research</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="section-dark p-8 hover-scale slide-left rounded-2xl">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Propulsion Systems</h3>
                  <ul className="space-y-4 text-[var(--secondary)]">
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">01</span>
                      <span>Casing and fluid systems design</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">02</span>
                      <span>Materials research for heat resistance</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">03</span>
                      <span>Combustion chamber geometry analysis</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">04</span>
                      <span>Performance characterization and testing</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="section-dark p-8 hover-scale slide-right rounded-2xl">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Testing Infrastructure</h3>
                  <ul className="space-y-4 text-[var(--secondary)]">
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">01</span>
                      <span>Utilizing telemetry systems</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">02</span>
                      <span>Real-time sensor graphing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[var(--accent)]">03</span>
                      <span>Data acquisition and analysis</span>
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
  <section id="vision" className="w-full py-32 px-4 section-dark section-accent border-[var(--accent)]/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our <span className="highlight">Vision</span></h2>
                <div className="space-y-6 text-lg">
                  <p>
                    We're developing innovative hybrid propulsion solutions for the next generation of space technology.
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
                <div className="aspect-square section-dark p-6 flex items-center justify-center rounded-2xl">
                  <p className="font-medium">Design Innovation</p>
                </div>
                <div className="aspect-square section-dark p-6 flex items-center justify-center rounded-2xl">
                  <p className="font-medium">Rapid Prototyping</p>
                </div>
                <div className="aspect-square section-dark p-6 flex items-center justify-center rounded-2xl">
                  <p className="font-medium">Test Infrastructure</p>
                </div>
                <div className="aspect-square section-dark p-6 flex items-center justify-center rounded-2xl">
                  <p className="font-medium">Data-Driven Dev</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Projects section removed per request */}

  {/* Join Section */}
    {/* Join Section */}
    <section id="join" className="w-full py-32 section-accent bg-[var(--background)]">
          <div className="max-w-6xl mx-auto px-4">
              <div className="mb-16 text-center">
              <h2 className="text-5xl font-bold mb-6 slide-in"><span className="highlight">Join</span> BPL</h2>
              <p className="text-[var(--secondary)] text-xl max-w-2xl mx-auto slide-in">
                Are you a Blinn College student with a passion for rocket science?
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 slide-left">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">What We Look For</h3>
                  <ul className="space-y-3 text-[var(--secondary)]">
                    <li>• Passion and persistence for propulsion</li>
                    <li>• Strong problem-solving abilities</li>
                    <li>• Team-oriented mindset</li>
                    <li>• Dedication to learning</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">What You'll Do</h3>
                  <ul className="space-y-3 text-[var(--secondary)]">
                    <li>• Design hybrid propulsion systems</li>
                    <li>• Conduct hands-on research</li>
                    <li>• Work with professionals in the field</li>
                    <li>• Build real engineering experience</li>
                  </ul>
                </div>
              </div>
              <div className="slide-right space-y-6">
                <div className="inline-block w-full px-6 py-3 bg-[var(--accent)]/15 rounded-xl text-[var(--accent)] font-medium border border-[var(--accent)]/30">
                  <p className="text-lg mb-2">⚠️ Applications Currently Closed</p>
                  <p className="text-sm text-[var(--secondary)]">
                    Please reach out to <a href="mailto:blinnpropulsion@gmail.com" className="text-[var(--accent)] hover:underline">blinnpropulsion@gmail.com</a> or check back next semester
                  </p>
                </div>
                <div className="section-dark p-8 hover-scale rounded-2xl">
                  <h3 className="text-2xl font-bold mb-6">Contact BPL</h3>
                  <p className="text-[var(--secondary)] mb-8">
                    Have questions? Reach out to learn more about joining BPL.
                  </p>
                  <a 
                    href="mailto:bpl@blinn.edu" 
                    className="btn w-full text-center inline-block rounded-lg"
                  >
                    Get in Touch →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

  {/* Support Section */}
  <section id="support" className="w-full py-32 section-accent section-dark border-t border-[var(--accent)]/20">
          <div className="max-w-6xl mx-auto px-4">
              <div className="mb-16 text-center">
              <h2 className="text-5xl font-bold mb-6 slide-in"><span className="highlight">Support</span> Our Mission</h2>
              <p className="text-[var(--secondary)] text-xl max-w-2xl mx-auto slide-in">
                Partner with us to advance student research in hybrid rocket propulsion
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8 slide-left">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Why Support BPL?</h3>
                  <ul className="space-y-3 text-[var(--secondary)]">
                    <li>• Foster next-gen engineering talent</li>
                    <li>• Access to innovative research</li>
                    <li>• Connection to Blinn College students</li>
                    <li>• Brand visibility in aerospace</li>
                  </ul>
                </div>
                <div className="section-dark p-8 rounded-2xl">
                  <h4 className="text-xl font-bold mb-4">Current Partners</h4>
                  <div className="text-[var(--secondary)]">
                    <p>Currently seeking partnerships and sponsors</p>
                  </div>
                </div>
              </div>
              <div className="slide-right">
                <form className="section-dark p-8 space-y-6 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <input
                    type="text"
                    placeholder="Organization Name"
                    className="w-full p-4 bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--accent)] transition-colors outline-none rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--accent)] transition-colors outline-none rounded-lg"
                  />
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full p-4 bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--accent)] transition-colors outline-none rounded-lg"
                  />
                  <button type="submit" className="btn w-full rounded-lg">
                    Send Message →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-8 border-t border-[var(--border)] text-center text-sm text-[var(--secondary)]">
        © 2025 Blinn Propulsion Laboratory
      </footer>
    </div>
  );
}
