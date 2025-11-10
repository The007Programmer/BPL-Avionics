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
              <div>
                <img 
                  src="/images/bpl-logo.svg" 
                  alt="BPL Logo" 
                  className="w-32 mb-8"
                />
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                  Building the next generation of propulsion
                </h1>
                <div className="h-0.5 w-24 bg-black my-8" />
                <p className="text-xl text-[var(--secondary)] max-w-md">
                  Small team. Big ambitions. Developing innovative liquid rocket engine solutions.
                </p>
              </div>
              <div className="relative h-[500px] border border-black">
                {/* Add engine CAD or testing image here */}
                <div className="absolute inset-0 flex items-center justify-center text-sm">
                  [Engine CAD Visualization]
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

        {/* Contact Section */}
        <section id="contact" className="w-full py-20 section-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md bg-gray-900 border border-gray-700 
                             shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 
                             focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-gray-900 border border-gray-700 
                             shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 
                             focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent 
                           rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 
                           hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                           focus:ring-blue-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
