import { useState, useEffect } from 'react';

const AnimatedCircles = () => {
  const [animateFirst, setAnimateFirst] = useState(false);
  const [animateSecond, setAnimateSecond] = useState(false);
  const [animateThird, setAnimateThird] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateFirst(true);
    }, 0);
    const timer2 = setTimeout(() => {
      setAnimateSecond(true);
    }, 1000);
    const timer3 = setTimeout(() => {
      setAnimateThird(true);
    }, 2000);
    return () => clearTimeout(timer, timer2, timer3);
  }, []);

  return (
<div className="flex flex-col items-start justify-start h-screen w-screen bg-gray-100 relative">
  {/* Third (largest) circle */}
  <div
    className={`rounded-full border-2 border-blue-500  bg-gray-100 transition-all duration-1000 absolute top-8 left-6 ${
      animateThird ? 'w-32 h-32' : 'w-0 h-0'
    }`}
    style={{
      zIndex: 1, // Ensure this circle is above the largest one
    }}
  />

  {/* Second (middle) circle */}
  <div
    className={`rounded-full border-2 border-blue-500 transition-all duration-1000 absolute top-28 left-28 ${
      animateSecond ? 'w-10 h-10' : 'w-0 h-0'
    }`}
    
  />

  {/* First (smallest) circle */}
  <div
    className={`rounded-full border-2 border-blue-500 bg-gray-100 transition-all duration-1000 ${
      animateFirst ? 'w-5 h-5' : 'w-0 h-0'
    } absolute top-36 left-36`}
  />
</div>

  );
};

export default AnimatedCircles;