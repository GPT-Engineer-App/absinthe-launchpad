import { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Download, ArrowRight } from "lucide-react"
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 to-emerald-100 font-montserrat">
      <header className="bg-emerald-800 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-bold tracking-tight">Absinthe Bliss</h1>
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#products" className="hover:text-emerald-300 transition-colors text-lg">Products</a></li>
              <li><a href="#about" className="hover:text-emerald-300 transition-colors text-lg">About</a></li>
              <li><a href="#contact" className="hover:text-emerald-300 transition-colors text-lg">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <USPCarousel />

        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div className="bg-white p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-5 text-emerald-800">Refer Friends & Win Rewards</h3>
              <p className="text-emerald-600 mb-6 text-lg leading-relaxed">Introduce your friends to the world of premium absinthe and get unlimited rewards. Receive up to $50 in store credit with each successful referral.</p>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-300 text-lg py-2 px-6">
                Start Inviting <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-5 text-emerald-800">Grow with Your Community</h3>
              <p className="text-emerald-600 mb-6 text-lg leading-relaxed">Earn a revenue share by joining Absinthe Bliss's Affiliate Program. Get paid every time an invited user makes a purchase.</p>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-300 text-lg py-2 px-6">
                Become an Affiliate <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <section className="mb-20 bg-cover bg-center p-12 rounded-lg shadow-lg relative overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562601579-599dec564e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjY3NDc5Mg&ixlib=rb-4.0.3&q=80&w=1080')" }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-semibold text-white mb-8 text-center">Our Premium Absinthe Selection</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  { name: "Green Fairy", description: "Classic absinthe with a smooth, herbal flavor." },
                  { name: "Midnight Muse", description: "Dark and mysterious, with notes of star anise and fennel." },
                  { name: "Emerald Dream", description: "A balanced blend of wormwood and melissa, perfect for beginners." },
                ].map((product, index) => (
                  <div key={index} className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md backdrop-filter backdrop-blur-sm">
                    <h3 className="text-2xl font-semibold text-emerald-800 mb-4">{product.name}</h3>
                    <p className="text-emerald-700 mb-6 text-lg leading-relaxed">{product.description}</p>
                    <Button variant="outline" className="text-emerald-700 border-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 text-lg py-2 px-6">
                      Learn More
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="text-center mb-20">
            <h2 className="text-4xl font-semibold text-emerald-800 mb-6">Be the first to know when we launch!</h2>
            <form onSubmit={handleSubmit} className="flex max-w-md mx-auto items-center space-x-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow text-lg py-2 px-4"
              />
              <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg py-2 px-6">Subscribe</Button>
            </form>
          </section>
        </div>
      </main>

      <footer className="bg-emerald-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">About Us</h3>
              <p className="text-lg leading-relaxed">Absinthe Bliss is dedicated to bringing the finest absinthe selections to connoisseurs worldwide.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-emerald-300 transition-colors text-lg">FAQ</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors text-lg">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors text-lg">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-emerald-300 transition-colors text-lg">Facebook</a>
                <a href="#" className="hover:text-emerald-300 transition-colors text-lg">Twitter</a>
                <a href="#" className="hover:text-emerald-300 transition-colors text-lg">Instagram</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-emerald-700 pt-8">
            <div className="mb-4 md:mb-0 text-lg">© 2023 Absinthe Bliss. All rights reserved.</div>
            <Button onClick={downloadCSV} variant="outline" className="text-white border-white hover:bg-emerald-700 transition-colors text-lg py-2 px-6">
              <Download className="mr-2 h-5 w-5" /> Download Emails
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;