import React, { ReactNode, useRef, useState, useEffect, ReactElement } from 'react';
import { Scroll } from 'lucide-react';
import { Shield, Leaf, Sun } from 'lucide-react';

import { Server, Brain, Database, Code, BookOpen } from 'lucide-react';

const AmericanFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 30" className="w-12 h-8">
    <rect width="50" height="30" fill="#B22234"/>
    <path d="M0,3.5h50m0,5H0m0,5h50m0,5H0m0,5h50m0,5H0" stroke="#fff" strokeWidth="2"/>
    <rect width="20" height="16" fill="#3C3B6E"/>
    <g fill="#fff">
      <g id="s3">
        <g id="s4">
          <g id="s5">
            <g id="s6">
              
              <use href="#s" transform="translate(5,0)"/>
            </g>
            <use href="#s6" transform="translate(5,0)"/>
          </g>
          <use href="#s5" transform="translate(0,3)"/>
        </g>
        <use href="#s4" transform="translate(0,3)"/>
      </g>
      <use href="#s3" transform="translate(0,3)"/>
    </g>
  </svg>
);

const EtherealEthosSection: React.FC = () => {
  const [ethosText, setEthosText] = useState('');
  const [drawingProgress, setDrawingProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const quote = "Any sufficiently advanced technology is indistinguishable from magic.";
  const fullEthosText = "as I see it, there is no greater multiplier for human prosperity than great technology. I am making it my life's purpose to bring and deliver masterful technologies into the hands of the People.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullEthosText.length) {
        setEthosText(fullEthosText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        setDrawingProgress(scrollProgress);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call to set initial state
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full relative snap-start overflow-hidden bg-[#f5e6d3]">
      <div className="absolute inset-0 flex">
        <div className="w-2/3"></div>
        <div className="w-1/3 relative">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">

          </svg>
        </div>
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="w-2/3 pl-16 pr-8">
          <h2 className="text-5xl font-serif mb-8 text-[#4a2511]">Ethos</h2>
          <div className="space-y-8">
            <p className="text-2xl italic mb-6 font-serif text-[#2c4c3b]">
              &ldquo;{quote}&rdquo;
            </p>
            <p className="text-lg font-serif text-[#4a2511]">- Arthur C. Clarke</p>
            <p className="text-xl font-serif text-[#2c4c3b] leading-relaxed">
              {ethosText}
              <span className="animate-blink">|</span>
              <span className="invisible">{fullEthosText.slice(ethosText.length)}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};






const YeOldeRenaissanceWebsite = () => {
  const [ethosText, setEthosText] = useState('');
  const quote = "Any sufficiently advanced technology is indistinguishable from magic.";
  const fullEthosText = "as I see it, there is no greater multiplier for human prosperity than great technology. I am making it my lifes purpose to bring and deliver masterful technologies into the hands of the People.";


  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullEthosText.length) {
        setEthosText(fullEthosText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust the speed of typing here

    return () => clearInterval(interval);
  }, []);

  const warmBrownStyle = {
    backgroundColor: '#8B4513',
    color: '#F5DEB3'
  };

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      <section className="h-screen w-full bg-[url('/schoolofathens.jpg')] bg-cover bg-center relative snap-start">
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_10%,rgba(0,0,0,0.7)_60%)]"></div>
        <div className="relative z-10 h-full flex flex-col justify-between p-8 text-parchment">
          <header className="flex justify-between items-center">
            <AmericanFlag />
            <button className="px-4 py-2 bg-brown-600 text-parchment rounded-sm text-sm font-serif">Contact</button>
          </header>
          <main className="flex-grow flex flex-col justify-end">
            <h1 className="text-5xl font-serif mb-4">Azhan Khan</h1>
            <p className="text-xl mb-4 font-serif">Software Engineering, Distributed Systems, AI/ML</p>
            <button className="px-6 py-3 bg-parchment/20 text-parchment rounded-sm w-max font-serif">Learn More</button>
          </main>
        </div>
      </section>

      <EtherealEthosSection />
    </div>
  );
};


export default YeOldeRenaissanceWebsite;