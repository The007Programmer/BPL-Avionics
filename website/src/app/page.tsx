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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <img 
                  src="/images/bpl.png" 
                  alt="BPL Logo" 
                  className="w-32 animate-float"
                />
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-4">
                    Blinn Propulsion Laboratory
                  </h1>
                  <p className="text-xl text-[var(--secondary)] max-w-xl">
                    Student rocket team at Blinn College Engineering Academy, partnered with TAMU SRT
                  </p>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="h-0.5 w-24 bg-black" />
                  <p className="text-lg max-w-md">
                    First-year engineering students pushing the boundaries of liquid rocket propulsion through hands-on research and development
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] border border-black overflow-hidden group">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-4">Current Project</h3>
                  <p className="text-center">
                    Developing and testing liquid-fuel rocket engine systems
                  </p>
                </div>
                <img 
                  src="/images/bpl.png"
                  alt="Engine Development" 
                  className="absolute inset-0 w-full h-full object-contain p-8"
                />
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

        {/* Contact Section */}
        <section id="contact" className="w-full py-32 bg-black">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="text-white space-y-8">
                <h2 className="text-4xl font-bold slide-in">Join Our Team</h2>
                <div className="space-y-6">
                  <div className="slide-in" style={{ animationDelay: "0.1s" }}>
                    <h3 className="text-xl font-medium mb-2">Who We Are</h3>
                    <p className="text-gray-400">
                      Blinn Propulsion Lab is a student rocket team at Blinn College Engineering Academy. 
                      We're first-year engineering students passionate about advancing propulsion technology.
                    </p>
                  </div>
                  <div className="slide-in" style={{ animationDelay: "0.2s" }}>
                    <h3 className="text-xl font-medium mb-2">Our Partnership</h3>
                    <p className="text-gray-400">
                      Proud partners with Texas A&M Sounding Rocketry Team (TAMU SRT), 
                      working together to push the boundaries of student rocketry.
                    </p>
                  </div>
                  <div className="slide-in" style={{ animationDelay: "0.3s" }}>
                    <h3 className="text-xl font-medium mb-2">Get Involved</h3>
                    <p className="text-gray-400">
                      Are you a student interested in joining? A potential sponsor? 
                      We'd love to hear from you!
                    </p>
                  </div>
                </div>
              </div>
              <form className="space-y-6 text-white slide-in" style={{ animationDelay: "0.4s" }}>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-white/5 border border-white/10 focus:border-white/30 
                             transition-colors rounded-none outline-none text-white"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={6}
                    className="w-full p-4 bg-white/5 border border-white/10 focus:border-white/30 
                             transition-colors rounded-none outline-none text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-4 bg-white text-black hover:bg-white/90 transition-colors 
                           font-medium hover-trigger"
                >
                  <span className="hover-target transition-transform inline-block">
                    Send Message →
                  </span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
