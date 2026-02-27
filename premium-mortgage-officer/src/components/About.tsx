import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-100 rounded-br-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80" 
                alt="Greg Wilber" 
                className="rounded-xl shadow-lg w-full object-cover h-[500px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              About Greg Wilber
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Greg Wilber is a trusted Home Loan Specialist dedicated to helping individuals and families build smart, strategic mortgage plans. With a straightforward philosophy rooted in honesty and clarity, Greg believes every client deserves transparent guidance and a lending experience built on trust.
              </p>
              <p>
                As part of Churchill Mortgage, Greg focuses on helping buyers and homeowners navigate today’s market with confidence. Whether purchasing a first home, refinancing, or planning a long-term wealth strategy through real estate, he works closely with clients to design a mortgage structure that aligns with their broader financial goals.
              </p>
              <p>
                Greg has built his business on simple principles: treat people right, communicate clearly, and follow through. His client reviews reflect families who felt informed, supported, and confident in their decisions. He understands that a mortgage is not just a loan. It is a financial commitment that should strengthen your future, not complicate it.
              </p>
              <p>
                Known for his responsiveness and strategic mindset, Greg takes the time to educate his clients so they fully understand their options before moving forward. From pre-approval to closing, he ensures the process remains smooth, organized, and focused on achieving the best possible outcome. Whether you are stepping into homeownership for the first time or refining your long-term housing strategy, Greg Wilber is committed to delivering honest advice and results that create happy homeowners.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">15+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">Top 1%</span>
                <span className="text-sm text-slate-500">Originator in UT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
