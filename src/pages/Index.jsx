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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 to-emerald-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-emerald-800">Absinthe Bliss</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-emerald-600 hover:text-emerald-800">Products</a></li>
              <li><a href="#" className="text-emerald-600 hover:text-emerald-800">About</a></li>
              <li><a href="#" className="text-emerald-600 hover:text-emerald-800">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-emerald-800">Experience the Mystique of Absinthe</h2>
          <p className="text-xl text-emerald-600 mb-8">Delivered to your door, curated for connoisseurs.</p>
          <div className="flex justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">$130M+</div>
              <div className="text-emerald-700">Processed since 2018</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">7K+</div>
              <div className="text-emerald-700">Absinthe Bliss users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">80+</div>
              <div className="text-emerald-700">Absinthe varieties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">200+</div>
              <div className="text-emerald-700">Available jurisdictions</div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-emerald-800">Refer Friends & Win Rewards</h3>
            <p className="text-emerald-600 mb-4">Introduce your friends to the world of premium absinthe and get unlimited rewards. Receive up to $50 in store credit with each successful referral.</p>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Start Inviting <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-emerald-800">Grow with Your Community</h3>
            <p className="text-emerald-600 mb-4">Earn a revenue share by joining Absinthe Bliss's Affiliate Program. Get paid every time an invited user makes a purchase.</p>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Become an Affiliate <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

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
          <div className="flex justify-between items-center">
            <div>© 2023 Absinthe Bliss. All rights reserved.</div>
            <Button onClick={downloadCSV} variant="outline" className="text-white border-white hover:bg-emerald-700">
              <Download className="mr-2 h-4 w-4" /> Download Emails
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
