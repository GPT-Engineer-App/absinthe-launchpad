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
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] bg-emerald-100 overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage: `url(${uspData[currentIndex].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
          <div className="relative z-10 flex items-center justify-end w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="w-full sm:w-2/3 md:w-1/2 pl-0 sm:pl-4 md:pl-8 text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">{uspData[currentIndex].title}</h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">{uspData[currentIndex].description}</p>
              <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white text-base sm:text-lg md:text-xl py-2 sm:py-3 px-6 sm:px-8">
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <Button
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white text-emerald-800 hover:bg-emerald-100 z-20"
      >
        <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
      </Button>
      <Button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white text-emerald-800 hover:bg-emerald-100 z-20"
      >
        <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
      </Button>
    </div>
  );
};

export default USPCarousel;