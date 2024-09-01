import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const uspData = [
  {
    title: "Mobile App",
    description: "Organize your budget and payments by opening multiple accounts with separate IBANs. Send money in a few taps. Issue, customize, freeze and manage your virtual and physical cards in your app.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
  },
  {
    title: "Secure Transactions",
    description: "Experience top-notch security with our state-of-the-art encryption and multi-factor authentication. Your financial data is always protected.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support team is available round the clock to assist you with any queries or issues. Get help anytime, anywhere.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3",
  },
];

const USPCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % uspData.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + uspData.length) % uspData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % uspData.length);
  };

  return (
    <div className="relative w-full h-[500px] bg-emerald-100 overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="flex items-center justify-between w-full max-w-6xl px-4">
            <div className="w-1/2">
              <img
                src={uspData[currentIndex].image}
                alt={uspData[currentIndex].title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-1/2 pl-8">
              <h2 className="text-4xl font-bold text-emerald-800 mb-4">{uspData[currentIndex].title}</h2>
              <p className="text-lg text-emerald-600 mb-6">{uspData[currentIndex].description}</p>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <Button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-emerald-800 hover:bg-emerald-100"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-emerald-800 hover:bg-emerald-100"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default USPCarousel;