import { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Download } from "lucide-react"

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-emerald-50 p-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-bold mb-6 text-emerald-800">Absinthe Bliss</h1>
        <p className="text-xl text-emerald-700 mb-8">Experience the mystique of absinthe delivered to your door.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Curated selection of absinthe bottles" className="mx-auto object-cover w-full h-48 mb-4 rounded-md" />
            <h2 className="text-lg font-semibold mb-2">Curated Selection</h2>
            <p className="text-gray-600">Handpicked absinthe varieties from around the world.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1515094903778-bfacf9a57f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Fresh wormwood and herbs" className="mx-auto object-cover w-full h-48 mb-4 rounded-md" />
            <h2 className="text-lg font-semibold mb-2">Authentic Ingredients</h2>
            <p className="text-gray-600">Made with real wormwood and traditional herbs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Absinthe delivery package" className="mx-auto object-cover w-full h-48 mb-4 rounded-md" />
            <h2 className="text-lg font-semibold mb-2">Monthly Delivery</h2>
            <p className="text-gray-600">Fresh bottles delivered to your doorstep every month.</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-2">Be the first to know when we launch!</h2>
          <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button type="submit">Subscribe</Button>
          </form>
          <Button onClick={downloadCSV} variant="outline" className="mt-4">
            <Download className="mr-2 h-4 w-4" /> Download Emails
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
