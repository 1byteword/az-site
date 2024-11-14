import React from "react";
import { Crimson_Pro } from "next/font/google";
import { useRouter } from "next/router";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const BookshelfSection = () => {
  const router = useRouter();

  const currentlyReading = {
    title: "Understanding Distributed Systems",
    author: "Roberto Vitillo",
  };

  const books = [
    {
      title: "The Wealth and Poverty of Nations",
      author: "David S. Landes",
    },
    {
      title: "Growth: From Microorganisms to Megacities",
      author: "Vaclav Smil",
    },
    {
      title: "Genghis Khan and the Making of the Modern World",
      author: "Jack Weatherford",
    },
    {
      title: "Generations: The History of America's Future, 1584 to 2069",
      author: "William Strauss, Neil Howe",
    },
    {
      title: "Discourses on Livy",
      author: "Niccolo Machiavelli",
    },
    {
      title:
        "Perilous Interventions: The Security Council and the Politics of Chaos",
      author: "Hardeep Singh Puri",
    },
    {
      title: "The Arabs - A History",
      author: "Eugene Rogan",
    },
    {
      title: "The Landmark Herodotus - The Histories",
      author: "edited by Robert B. Strassler",
    },
    {
      title: "The Art of War in the Middle Ages",
      author: "C.W.C Oman",
    },
    {
      title:
        "The Constitutional Convention: A Narrative History from the notes of James Madison",
      author: "Edward J. Larson and Michael P. Winship",
    },
    {
      title: "The Score Takes Care of Itself",
      author: "Bill Walsh, Steve Jamison",
    },
    {
      title:
        "The Mind of Napoleon: A Selection from His Written and Spoken Words",
      author: "J. Christopher Herold",
    },
    {
      title: "Skunk Works - A Personal Memoir of My Years at Lockheed",
      author: "Ben R. Rich",
    },
    {
      title: "The Network State",
      author: "Balaji Srinivasan",
    },
    {
      title: "The Autobiography of Benjamin Franklin",
      author: "Ben Franklin",
    },
    {
      title: "Creativity Inc.",
      author: "Ed Catmull",
    },
    {
      title: "Sex at Dawn: The Prehistoric Origins of Modern Sexuality",
      author: "Christopher Ryan",
    },
    {
      title: "High Growth Handbook",
      author: "Elad Gil",
    },
    {
      title: "The House of Morgan",
      author: "Ron Chernow",
    },
    {
      title: "The Ascent of Money - Financial history of the World",
      author: "Niall Ferguson",
    },
    {
      title: "Endurance - Shackleton's Incredible Voyage",
      author: "Alfred Lansing",
    },
    {
      title:
        "The Outsiders - Eight Unconventional CEOs and Their Radically Rational Blueprint for Success",
      author: "William N. Thorndike",
    },
    {
      title: "Judgment Under Uncertainty - Heuristics and Biases",
      author: "Daniel Kahneman, Paul Slovic, Amos Tversky",
    },
    {
      title: "Up All Night - Ted Turner, CNN, and the Birth of 24-Hour News",
      author: "Lisa Napoli",
    },
    {
      title: "Ogilvy on Advertising",
      author: "David Ogilvy",
    },
    {
      title: "Barbarians at the Gate - The Fall of RJR Nabisco",
      author: "Bryan Burrough, John Helyar",
    },
    {
      title:
        "The Way of the World - From The Dawn of Civilizations to the Eve of the Twenty-First Century",
      author: "David Fromkin",
    },
    {
      title: "The Power of Mimetic Desire in Everyday Life",
      author: "Luke Burgis",
    },
    {
      title: "Brief Answers to the Big Questions",
      author: "Stephen Hawking",
    },
    {
      title: "Ulysses",
      author: "James Joyce",
    },
    {
      title: "The Denial of Death",
      author: "Ernest Becker",
    },
    {
      title:
        "The Dip - A Little Book That Teaches You When to Quit (and When to Stick)",
      author: "Seth Godin",
    },
    {
      title: "Thucydides - A Comprehensive Guide to the Peoponnesian War",
      author: "Edited by Robert B. Strassler",
    },
    {
      title: "Super Pumped - The Battle for Uber",
      author: "Mike Isaac",
    },
    {
      title: "Joseph P. Kennedy at the Court of St. James's (1938-1940)",
      author: "Susan Ronald",
    },
    {
      title: "The Law",
      author: "Frederic Bastiat",
    },
    {
      title: "High Output Management",
      author: "Andrew S. Grove",
    },
    {
      title: "Atlas Shrugged",
      author: "Ayn Rand",
    },
    {
      title: "The Fountainhead",
      author: "Ayn Rand",
    },
    {
      title: "Secrets of Sand Hill Road",
      author: "Scott Kupor",
    },
    {
      title: "The Complete Stories, Vol. 1",
      author: "Isaac Asimov",
    },
    {
      title: "The One Sentence Persuasion Course",
      author: "Blair Warren",
    },
    {
      title: "The Singularity Is Near",
      author: "Ray Kurzweil",
    },
    {
      title: "Shattered: Inside Hillary Clinton's Doomed Campaign",
      author: "Jonathan Allen, Amie Parnes",
    },
    {
      title: "The Age of Napoleon",
      author: "Will & Ariel Durant",
    },
    {
      title:
        "The Last Lion: Winston Spencer Churchill (Visions of Glory, 1874-1932)",
      author: "William Manchester",
    },
    {
      title:
        "The Last Lion: Winston Spencer Churchill (Defender of the Realm, 1940-1965)",
      author: "William Manchester, Paul Reid",
    },
    {
      title: "The Almanack of Naval Ravikant",
      author: "Eric Jorgenson",
    },
    {
      title: "How to Make a Few Billion Dollars",
      author: "Brad Jacobs",
    },
    {
      title: "A Crack in Creation",
      author: "Jennifer A. Doudna, Samuel H. Sternberg",
    },
    {
      title: "The Spiritual Brain",
      author: "Mario Beauregard, Denyse O'leary",
    },
    {
      title: "New Atlantis",
      author: "Francis Bacon",
    },
    {
      title: "The Fifteen Decisive Battles of the World",
      author: "Edward Shepherd Creasy",
    },
    {
      title: "Medieval Technology and Social Change",
      author: "Lynn White",
    },
    {
      title: "Writing An Interpreter In Go",
      author: "Thorsten Ball",
    },
    {
      title: "Crafting Interpreters",
      author: "Robert Nystrom",
    },
    {
      title: "Ideas that Created the Future",
      author: "Harry R. Lewis",
    },
    {
      title: "A Guide to the Good Life",
      author: "William B. Irvine",
    },
    {
      title: "A New Kind of Science",
      author: "Stephen Wolfram",
    },
    {
      title: "Leadership: Six Studies in World Strategy",
      author: "Henry Kissinger",
    },
    {
      title: "The Enlightened Economy",
      author: "Joel Mokyr",
    },
    {
      title: "From Third World to First: The Singapore Story",
      author: "Lee Kuan Yew",
    },
    {
      title: "Quantum Computing since Democritus",
      author: "Scott Aaronson",
    },
    {
      title: "Age of Ambition",
      author: "Evan Osnos",
    },
    {
      title: "Abundance: The Future Is Better Than You Think",
      author: "Peter H. Diamandis, Steven Kotler",
    },
    {
      title: "Venture Deals",
      author: "Brad Feld, Jason Mendelson",
    },
    {
      title: "Done Deals: Venture Capitalists Tell Their Stories",
      author: "Udayan Gupta",
    },
    {
      title: "A Pattern Language",
      author: "Christopher Alexander et al.",
    },
    {
      title: "Beyond Entrepreneurship 2.0",
      author: "Jim Collins",
    },
    {
      title: "Jackpot",
      author: "Michael Mechanic",
    },
    {
      title: "Lord of Light",
      author: "Kathryn Le Veque",
    },
    {
      title: "Genome",
      author: "Matt Ridley",
    },
    {
      title: "Salt, Fat, Acid, Heat",
      author: "Samin Nosrat",
    },
    {
      title: "Exhalation",
      author: "Ted Chiang",
    },
    {
      title: "The Macintosh Way",
      author: "Guy Kawasaki",
    },
    {
      title: "Seven Brief Lessons on Physics",
      author: "Carlo Rovelli",
    },
    {
      title: "Grand Design: The Earth from Above",
      author: "Georg Gerster",
    },
    {
      title: "Antifragile",
      author: "Nassim Nicholas Taleb",
    },
    {
      title: "The Lifecycle of Software Objects",
      author: "Ted Chiang",
    },
    {
      title: "The Gene: An Intimate History",
      author: "Siddhartha Mukherjee",
    },
    {
      title: "The Great CEO Within",
      author: "Matt Mochary",
    },
    {
      title: "The Courage to be Disliked",
      author: "Ichiro Kishimi, Fumitake Koga",
    },
    {
      title: "Taking the Work Out of Networking",
      author: "Karen Wickre",
    },
    {
      title: "From Dawn to Decadence",
      author: "Jacques Barzun",
    },
    {
      title: "Modern Control Engineering",
      author: "Katsuhiko Ogata",
    },
  ];

  const handleBack = () => {
    router.back();
  };

  return (
    <section
      className={`${crimsonPro.className} min-h-screen w-full relative overflow-hidden`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/lily.jpg)",
          backgroundSize: "100vw auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Back Button and Line */}
      <div className="relative pt-8 px-16">
        <button
          onClick={handleBack}
          className="text-white/80 hover:text-white transition-colors mb-4 cursor-pointer"
        >
          ← Back
        </button>
        <hr className="border-white/20 w-full" />
      </div>

      {/* Main Content */}

      <div className="relative px-16 py-12 max-w-5xl mx-auto">
        <h1 className="text-5xl font-semibold text-white mb-4">Bookshelf</h1>

        <div className="text-white/60 text-sm mb-16">
          Pictured: Water Lilies (1914-1926), Claude Monet
        </div>

        {/* Currently Reading Section */}
        <div className="mb-16">
          <h2 className="text-sm font-medium tracking-wider text-white/50 uppercase mb-6">
            Currently Reading
          </h2>
          <article className="group cursor-pointer">
            <div className="flex flex-col space-y-2">
              <h3 className="text-3xl text-white font-medium group-hover:text-white/90 transition-colors">
                {currentlyReading.title}
              </h3>
              <p className="text-xl text-white/70 group-hover:text-white/80 transition-colors">
                {currentlyReading.author}
              </p>
            </div>
          </article>
        </div>

        {/* Other Books Section */}
        <div>
          <h2 className="text-sm font-medium tracking-wider text-white/50 uppercase mb-6">
            Library (in no particular order)
          </h2>
          <div className="space-y-6">
            {books.map((book, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="flex flex-col space-y-1">
                  <h3 className="text-2xl text-white/80 font-medium group-hover:text-white transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-lg text-white/60 group-hover:text-white/70 transition-colors">
                    {book.author}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookshelfSection;
