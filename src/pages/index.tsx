import React from 'react';
import { ReactNode, useRef, useState, useEffect, ReactElement } from 'react';
import { Crimson_Pro } from 'next/font/google';
import Link from 'next/link';

const crimsonPro = Crimson_Pro({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

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

const BlogPostsSection = () => {
  const blogPosts = [
    {
      title: "The Modern Cathedral",
      date: "November 10, 2024",
      preview: "Where have we come from?",
      readTime: "10 min read",
      category: "Architecture",
      icon: "🏛️",
      slug: "architecture-of-modern-software"
    }
  ];

  return (
    <section className={`${crimsonPro.className} h-screen w-full relative snap-start bg-[#0f271f] overflow-hidden`}>
      <div className="absolute inset-0 bg-[url('/parchment-texture.png')] opacity-5" />
      <div className="relative h-full flex flex-col p-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-5xl text-white">Writings</h2>
          <button className="px-4 py-2 border border-white text-white rounded-sm hover:bg-white hover:text-[#0f321f] transition-colors duration-300">
            View All Writings
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={index}
            >
            <article 
              key={index}
              className="group bg-[#005e35]/50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-white/20 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{post.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-white/80">{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span className="text-sm text-white/80">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl text-white mb-3 group-hover:text-white/80 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/90 leading-relaxed mb-4">
                    {post.preview}
                  </p>
                  
                  <div className="flex items-center">
                    <span className="px-3 py-1 text-sm text-white border border-white/20 rounded-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>
            </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const EtherealEthosSection = () => {
  const [ethosText, setEthosText] = useState('');
  const [drawingProgress, setDrawingProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const quote = "Any sufficiently advanced technology is indistinguishable from magic.";

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
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section ref={sectionRef} className={`${crimsonPro.className} h-screen w-full relative snap-start overflow-hidden bg-[#f5e6d3]`}>
      {/* Adjusted vertical line - centered and 60% height */}
      <div className="absolute left-1/2 top-[20%] bottom-[20%] w-px bg-[#2c4c3b]/30" />
      
      <div className="relative z-10 h-full flex">
        {/* Left side */}
        <div className="w-1/2 pl-16 pr-8 flex items-center">
          <div>
            <h2 className="text-5xl mb-8 text-[#4a2511]">Ethos</h2>
            <div className="space-y-8">
              <p className="text-2xl italic mb-6 text-[#2c4c3b]">
                &ldquo;{quote}&rdquo;
              </p>
              <p className="text-lg text-[#4a2511]">- Arthur C. Clarke</p>
              <p className="text-xl text-[#2c4c3b] leading-relaxed">
                {ethosText}
              </p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-1/2 pr-16 pl-8 flex items-center">
          <p className="text-xl text-[#4a2511] leading-relaxed">
            I'm currently a Data Engineer at Rivian, where I build software tools to help the company understand and improve their vehicle fleets. I get to wear many hats; designing and building data pipelines, chaos engineering, systems engineering, hacking on observability tools, and more.
          </p>
        </div>
      </div>
    </section>
  );
};

const YeOldeRenaissanceWebsite = () => {
  return (
    <div className={`${crimsonPro.className} h-screen w-full overflow-y-scroll snap-y snap-mandatory`}>
      <section className="h-screen w-full bg-[url('/schoolofathens.jpg')] bg-cover bg-center relative snap-start">
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_10%,rgba(0,0,0,0.7)_60%)]"></div>
        <div className="relative z-10 h-full flex flex-col justify-between p-8 text-parchment">
          <header className="flex justify-between items-center">
            <AmericanFlag />
            <button className="px-4 py-2 bg-brown-600 text-parchment rounded-sm text-sm">Contact</button>
          </header>
          <main className="flex-grow flex flex-col justify-end">
            <h1 className="text-6xl mb-4">Azhan Khan</h1>
            <p className="text-2xl mb-4">Software and Data Engineering, Distributed Systems, AI/ML</p>
            <button className="px-6 py-3 bg-parchment/20 text-parchment rounded-sm w-max">Learn More</button>
          </main>
        </div>
      </section>

      <EtherealEthosSection />
      <BlogPostsSection />
    </div>
  );
};

export default YeOldeRenaissanceWebsite;