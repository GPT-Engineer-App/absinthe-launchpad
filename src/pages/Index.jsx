import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
const Index = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    toast({
      title: "Subscribed!",
      description: "You'll be notified when we launch.",
    })
    setEmail('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-emerald-50 p-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-bold mb-6 text-emerald-800">Absinthe Bliss</h1>
        <p className="text-xl text-emerald-700 mb-8">Experience the mystique of absinthe delivered to your door.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/placeholder.svg" alt="Curated selection of absinthe bottles" className="mx-auto object-cover w-full h-48 mb-4 rounded-md" />
            <h2 className="text-lg font-semibold mb-2">Curated Selection</h2>
            <p className="text-gray-600">Handpicked absinthe varieties from around the world.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/placeholder.svg" alt="Fresh wormwood and herbs" className="mx-auto object-cover w-full h-48 mb-4 rounded-md" />
            <h2 className="text-lg font-semibold mb-2">Authentic Ingredients</h2>
            <p className="text-gray-600">Made with real wormwood and traditional herbs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/placeholder.svg" alt="Absinthe delivery package" className="mx-auto object-cover w-full h-48 mb-4 rounded-md" />
            <h2 className="text-lg font-semibold mb-2">Monthly Delivery</h2>
            <p className="text-gray-600">Fresh bottles delivered to your doorstep every month.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-2">Be the first to know when we launch!</h2>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button type="submit">Subscribe</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
