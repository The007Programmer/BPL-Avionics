import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="w-full min-h-screen flex items-center justify-center hero-parallax relative">
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-gradient">Advancing</span> Propulsion
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto px-4">
              Pioneering the future of liquid rocket propulsion systems
            </p>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="w-full py-20 section-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-300">
                  BPL is at the forefront of developing next-generation liquid rocket propulsion 
                  systems. Our innovative approach combines cutting-edge technology with 
                  rigorous engineering practices to deliver reliable and efficient solutions.
                </p>
              </div>
              <div className="relative h-[400px] bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg">
                {/* Add rocket engine image here later */}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="w-full py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Technology</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Propulsion Systems',
                  description: 'Advanced liquid rocket engines designed for reliability and performance'
                },
                {
                  title: 'Control Systems',
                  description: 'Precise thrust vectoring and pressure management systems'
                },
                {
                  title: 'Testing Facilities',
                  description: 'State-of-the-art testing and validation infrastructure'
                }
              ].map((tech, index) => (
                <div 
                  key={index} 
                  className="hover-card p-6 rounded-lg bg-gray-900/50 border border-gray-800"
                >
                  <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                  <p className="text-gray-400">{tech.description}</p>
                </div>
              ))}
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
