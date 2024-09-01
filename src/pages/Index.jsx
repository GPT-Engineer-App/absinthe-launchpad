import { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Download, ArrowRight } from "lucide-react"

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
      <header className="bg-emerald-800 text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-bold">Absinthe Bliss</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#products" className="hover:text-emerald-300 transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-emerald-300 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-emerald-300 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-emerald-800">Experience the Mystique of Absinthe</h2>
          <p className="text-xl text-emerald-600 mb-8">Delivered to your door, curated for connoisseurs.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { bgImage: "https://images.unsplash.com/photo-1605270012917-bf157c5a9541", value: "$130M+", label: "Processed since 2018" },
              { bgImage: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd", value: "7K+", label: "Absinthe Bliss users" },
              { bgImage: "https://images.unsplash.com/photo-1605265036253-e1b3e0fcec41", value: "80+", label: "Absinthe varieties" },
              { bgImage: "https://images.unsplash.com/photo-1543076447-215ad9ba6923", value: "200+", label: "Available jurisdictions" },
            ].map((item, index) => (
              <div key={index} className="relative bg-white p-6 rounded-lg shadow-md overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0 opacity-50" 
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                ></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{item.value}</div>
                  <div className="text-emerald-700">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-emerald-800">Refer Friends & Win Rewards</h3>
            <p className="text-emerald-600 mb-4">Introduce your friends to the world of premium absinthe and get unlimited rewards. Receive up to $50 in store credit with each successful referral.</p>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-300">
              Start Inviting <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-emerald-800">Grow with Your Community</h3>
            <p className="text-emerald-600 mb-4">Earn a revenue share by joining Absinthe Bliss's Affiliate Program. Get paid every time an invited user makes a purchase.</p>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-300">
              Become an Affiliate <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <section className="mb-16 bg-cover bg-center p-8 rounded-lg shadow-md relative overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562601579-599dec564e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjY3NDc5Mg&ixlib=rb-4.0.3&q=80&w=1080')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold text-white mb-4">Our Premium Absinthe Selection</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Green Fairy", description: "Classic absinthe with a smooth, herbal flavor." },
                { name: "Midnight Muse", description: "Dark and mysterious, with notes of star anise and fennel." },
                { name: "Emerald Dream", description: "A balanced blend of wormwood and melissa, perfect for beginners." },
              ].map((product, index) => (
                <div key={index} className="bg-white bg-opacity-80 p-6 rounded-lg shadow-sm backdrop-filter backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-2">{product.name}</h3>
                  <p className="text-emerald-700 mb-4">{product.description}</p>
                  <Button variant="outline" className="text-emerald-700 border-emerald-700 hover:bg-emerald-100 hover:text-emerald-800">
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-emerald-800 mb-4">Be the first to know when we launch!</h2>
          <form onSubmit={handleSubmit} className="flex max-w-md mx-auto items-center space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white">Subscribe</Button>
          </form>
        </section>
      </main>

      <footer className="bg-emerald-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p>Absinthe Bliss is dedicated to bringing the finest absinthe selections to connoisseurs worldwide.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-300 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-emerald-300 transition-colors">Facebook</a>
                <a href="#" className="hover:text-emerald-300 transition-colors">Twitter</a>
                <a href="#" className="hover:text-emerald-300 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-emerald-700 pt-8">
            <div className="mb-4 md:mb-0">© 2023 Absinthe Bliss. All rights reserved.</div>
            <Button onClick={downloadCSV} variant="outline" className="text-white border-white hover:bg-emerald-700 transition-colors">
              <Download className="mr-2 h-4 w-4" /> Download Emails
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;