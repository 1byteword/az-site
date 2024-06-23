import React, { ReactNode, useRef, useState, useEffect, ReactElement } from 'react';
import { Scroll } from 'lucide-react';
import { Shield, Leaf, Sun } from 'lucide-react';

import { Server, Brain, Database, Code, BookOpen } from 'lucide-react';

interface MacWindowProps {
  title: string;
  children: ReactNode;
}

const MacWindow: React.FC<MacWindowProps> = ({ title, children }) => (
  <div className="bg-white border-2 border-black shadow-md w-full max-w-4xl mx-auto">
    <div className="bg-gradient-to-r from-gray-300 to-gray-400 border-b-2 border-black p-1 flex items-center">
      <div className="flex space-x-2 mr-4">
        <div className="w-3 h-3 rounded-full bg-red-500 border border-red-700"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 border border-yellow-700"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 border border-green-700"></div>
      </div>
      <div className="flex-grow text-center font-bold">{title}</div>
    </div>
    <div className="p-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
      {children}
    </div>
    <div className="border-t-2 border-black p-1 flex justify-between items-center text-xs">
      <div>6 items</div>
      <div>1194K available</div>
    </div>
  </div>
);

interface MacIconProps {
  name: string;
  icon: string;
}

const MacIcon: React.FC<MacIconProps> = ({ name, icon }) => (
  <div className="flex flex-col items-center mb-4">
    <div className="w-12 h-12 bg-white border border-black mb-1 flex items-center justify-center text-2xl">
      {icon}
    </div>
    <span className="text-xs text-center">{name}</span>
  </div>
);

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

const IconBox = ({ icon, text }: { icon: ReactElement, text: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 bg-amber-50/70 border border-amber-600/30 rounded-full flex items-center justify-center mb-2">
      {React.cloneElement(icon, { size: 32, className: "text-amber-700" })}
    </div>
    <span className="text-sm text-center font-serif">{text}</span>
  </div>
);

const YeOldeRenaissanceWebsite = () => {
  const [ethosText, setEthosText] = useState('');
  const fullEthosText = "as I see it, there is no greater multiplier for human prosperity than great technology. I am making it my life's purpose to consistently deliver great technologies into the hands of the People.";

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

      {/* Second Section - Solid Color Background with Animated Text */}
      <section className="h-screen w-full bg-sepia-700 relative snap-start">
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-parchment">
          <h2 className="text-4xl font-serif mb-6">Ethos</h2>
          <p className="text-xl text-center max-w-2xl font-serif">
            {ethosText}
            <span className="animate-blink">|</span>
            <span className="invisible">{fullEthosText.slice(ethosText.length)}</span>
          </p>
        </div>
      </section>

      <section className="h-screen w-full bg-gray-200 relative snap-start overflow-hidden font-mono">
        <div className="bg-white border-b-2 border-black p-1 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-black">
            <span className="text-xl">🍎</span>
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Special</span>
          </div>
          <div className="flex items-center space-x-2 text-black">
            <span>🔋</span>
            <span>4:20 PM</span>
          </div>
        </div>

        <div className="p-8 h-[calc(120vh-2rem)]">
          <MacWindow title="Azhan">
            <div className="grid grid-cols-2 gap-8 text-black">
              <div>
                <h2 className="text-xl font-bold mb-4">Projects</h2>
                <div className="mb-4">
                  <h3 className="font-bold">PROJECT NITEMRE</h3>
                  <p className="text-sm mb-2">Working with NSIN and MIT AI Accelerator for US Air Force AI applications.</p>
                  <p className="text-xs">PyTorch • Endpoint Governance • TypeScript • Docker • CI/CD</p>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Education</h2>
                <div className="mb-4">
                  <h3 className="font-bold">Georgia Institute of Technology</h3>
                  <p className="text-sm mb-2">B.S. in Computer Science</p>
                  <p className="text-xs">Intelligence and Modeling/Simulation, ACM ICPC competitor</p>
                </div>
              </div>
            </div>
          </MacWindow>
        </div>

        <div className="absolute top-12 left-4 space-y-4 text-black">
          <MacIcon name="About Me" icon="👤" />
          <MacIcon name="Resume" icon="📄" />
          <MacIcon name="Portfolio" icon="💼" />
          <MacIcon name="Contact" icon="📧" />
        </div>

        <div className="absolute bottom-4 right-4">
          <MacIcon name="Trash" icon="🗑️" />
        </div>
      </section>

      {/* Updated Final Section - Complementary Gradients */}
      <section className="h-screen w-full relative snap-start overflow-hidden bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100">
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-amber-200/30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cpath fill=%22%23d97706%22 fill-opacity=%22.1%22 d=%22M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z%22%2F%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-stone-800">
          <h2 className="text-6xl font-serif mb-9 text-center">I want to bring beautiful engineering to the world.</h2>
          <a 
            href="mailto:1byteword@gmail.com" 
            className="px-6 py-3 bg-amber-100/70 hover:bg-amber-200/80 text-stone-800 border border-amber-600/30 rounded-sm text-xl font-serif transition-all duration-300 hover:shadow-lg"
          >
            Email: 1byteword@gmail.com
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          
          <p className="text-sm text-stone-700 mb-2">&copy; 2024 Azhan Khan</p>
        </div>
      </section>
    </div>
  );
};


export default YeOldeRenaissanceWebsite;