import React from 'react';
import { Crimson_Pro } from 'next/font/google';
import { useRouter } from 'next/router';

const crimsonPro = Crimson_Pro({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const BlogPostsSection = () => {
  const router = useRouter();

  const blogPost = {
    title: "The Modern Cathedral",
    subtitle: "Pictured: The Parthenon, Athens (1868), Frederic Edwin Church",
    date: "November 10, 2024",
    content: `The great builders of old flew in the face of sensitive religious orthodoxy that believed it to be too prideful and blasphemous to create towers that touched the sky. Yet, their creations still stand, long after their populations and religious traditions died of dysentery and disbelief. Now, it is our turn to pick up bricks.

    This is the dawn of humanity's golden age. Quantum computers are beginning to solve problems that classical computers cannot touch. Language models engage in conversation with a depth that would have astonished Turing himself.

    The pace of innovation has never been more breathtaking. The computing power that once filled rooms now fits on a 4nm chip smaller than your fingernail. What Ada Lovelace and Charles Babbage dreamed of in their mechanical computers, we have realized a million times over in systems that don't just compute, but create, converse, and understand.

    We are building cathedrals of the mind. Our neural networks process more operations in a day than all the calculations done by human hands in history. Our quantum computers manipulate the fundamental building blocks of the universe. Our rockets land themselves with the precision of a dancer.

    This is what progress looks like at its most magnificent scale. The tools we're building today represent the largest technological leap in human history. ENIAC, revolutionary for its time, posseses less computing power than a smart toaster. Today, we carry supercomputers in our pockets and run neural networks that can engage with the more knowledge than the Library of Alexandria.

    Our ancestors built stone and marble monuments. They would think of us as gods.`
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <section className={`${crimsonPro.className} min-h-screen w-full relative overflow-hidden`}>
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/parthenon.jpg)' }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Back Button and Line */}
      <div className="relative pt-8 px-16">
        <button 
          onClick={handleBack}
          className="text-white/80 hover:text-white transition-colors mb-4 cursor-pointer"
        >
          ←←← Back
        </button>
        <hr className="border-white/20 w-full" />
      </div>

      {/* Main Content */}
      <div className="relative px-16 py-12 max-w-5xl mx-auto">
        <article className="prose prose-lg prose-invert">
          <h1 className="text-5xl font-semibold text-white mb-4">
            {blogPost.title}
          </h1>
          
          <div className="text-white/60 text-sm mb-2">
            {blogPost.subtitle}
          </div>
          
          <div className="text-white/80 text-sm mb-12">
            {blogPost.date}
          </div>
          
          <div className="space-y-6">
            {blogPost.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-white/90 text-xl leading-relaxed tracking-wide">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogPostsSection;