import { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Download, ArrowRight, CheckCircle } from "lucide-react"
import USPCarousel from '@/components/USPCarousel';

const Index = () => {
  const [email, setEmail] = useState('');
  const [submittedEmails, setSubmittedEmails] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubmission = { email, timestamp: new Date().toISOString() };
    setSubmittedEmails([...submittedEmails, newSubmission]);
    toast({
      title: "Subscribed!",
      description: "You'll be notified when we launch.",
    })
    setEmail('');
  };

  const downloadCSV = useCallback(() => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Email,Timestamp\n"
      + submittedEmails.map(row => `${row.email},${row.timestamp}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "submitted_emails.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [submittedEmails]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-200 font-montserrat">
      <header className="bg-emerald-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Absinthe Bliss</h1>
          </div>
          <nav className="flex flex-wrap justify-center sm:justify-end">
            <ul className="flex space-x-4 sm:space-x-8">
              <li><a href="#products" className="hover:text-emerald-300 transition-colors text-base sm:text-lg">Products</a></li>
              <li><a href="#about" className="hover:text-emerald-300 transition-colors text-base sm:text-lg">About</a></li>
              <li><a href="#contact" className="hover:text-emerald-300 transition-colors text-base sm:text-lg">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <USPCarousel />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-24">
            <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-emerald-800">Refer Friends & Win Rewards</h3>
              <p className="text-emerald-600 mb-6 sm:mb-8 text-base sm:text-xl leading-relaxed">Introduce your friends to the world of premium absinthe and get unlimited rewards. Receive up to $50 in store credit with each successful referral.</p>
              <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-300 text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 rounded-full">
                Start Inviting <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </div>
            <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-emerald-800">Grow with Your Community</h3>
              <p className="text-emerald-600 mb-6 sm:mb-8 text-base sm:text-xl leading-relaxed">Earn a revenue share by joining Absinthe Bliss's Affiliate Program. Get paid every time an invited user makes a purchase.</p>
              <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-300 text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 rounded-full">
                Become an Affiliate <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </div>
          </div>

          <section className="mb-16 sm:mb-24 bg-cover bg-center p-8 sm:p-16 rounded-xl shadow-2xl relative overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562601579-599dec564e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjY3NDc5Mg&ixlib=rb-4.0.3&q=80&w=1080')" }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8 sm:mb-12 text-center">Our Premium Absinthe Selection</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                {[
                  { name: "Green Fairy", description: "Classic absinthe with a smooth, herbal flavor." },
                  { name: "Midnight Muse", description: "Dark and mysterious, with notes of star anise and fennel." },
                  { name: "Emerald Dream", description: "A balanced blend of wormwood and melissa, perfect for beginners." },
                ].map((product, index) => (
                  <div key={index} className="bg-white bg-opacity-90 p-6 sm:p-8 rounded-xl shadow-lg backdrop-filter backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl sm:text-2xl font-semibold text-emerald-800 mb-3 sm:mb-4">{product.name}</h3>
                    <p className="text-emerald-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">{product.description}</p>
                    <Button variant="outline" className="w-full sm:w-auto text-emerald-700 border-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 text-base sm:text-lg py-2 px-4 sm:px-6 rounded-full">
                      Learn More
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="text-center mb-16 sm:mb-24 bg-emerald-800 text-white p-8 sm:p-16 rounded-xl shadow-2xl">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-8">Be the first to know when we launch!</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">Join our exclusive list and get early access to our premium absinthe collection.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:flex-grow text-base sm:text-lg py-2 sm:py-3 px-4 sm:px-6 rounded-full bg-white text-emerald-800"
              />
              <Button type="submit" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white text-base sm:text-lg py-2 sm:py-3 px-6 sm:px-8 rounded-full">Subscribe</Button>
            </form>
          </section>

          <section className="mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-8 sm:mb-12 text-center">Why Choose Absinthe Bliss?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
              {[
                { title: "Premium Quality", description: "Sourced from the finest ingredients for an unparalleled taste experience." },
                { title: "Expert Craftsmanship", description: "Crafted by master distillers with decades of experience." },
                { title: "Sustainable Practices", description: "Committed to eco-friendly production and packaging methods." },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center">
                  <CheckCircle className="mx-auto mb-4 sm:mb-6 h-12 w-12 sm:h-16 sm:w-16 text-emerald-600" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-emerald-800 mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-emerald-600 text-base sm:text-lg">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-emerald-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">About Us</h3>
              <p className="text-base sm:text-lg leading-relaxed">Absinthe Bliss is dedicated to bringing the finest absinthe selections to connoisseurs worldwide.</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-4">
                <li><a href="#" className="hover:text-emerald-300 transition-colors text-base sm:text-lg">FAQ</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors text-base sm:text-lg">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors text-base sm:text-lg">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Connect With Us</h3>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <a href="#" className="hover:text-emerald-300 transition-colors text-base sm:text-lg">Facebook</a>
                <a href="#" className="hover:text-emerald-300 transition-colors text-base sm:text-lg">Twitter</a>
                <a href="#" className="hover:text-emerald-300 transition-colors text-base sm:text-lg">Instagram</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-emerald-700 pt-6 sm:pt-8">
            <div className="mb-4 sm:mb-0 text-base sm:text-lg">© 2023 Absinthe Bliss. All rights reserved.</div>
            <Button onClick={downloadCSV} variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-emerald-800 transition-colors text-base sm:text-lg py-2 px-4 sm:px-6 rounded-full">
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Download Emails
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;