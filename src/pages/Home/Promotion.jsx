import React from 'react';
import { Link } from 'react-router';

const Promotion = () => {
    return (
        <section className="w-full bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-16 px-4 overflow-hidden relative">
  {/* Background Pattern Overlay (optional) */}
  <div className="absolute inset-0 opacity-10 bg-pattern-dots"></div>

  <div className="max-w-4xl mx-auto text-center relative z-10">
    {/* Pill Badge */}
    <span className="inline-block bg-yellow-400 text-purple-900 text-sm font-bold px-3 py-1 rounded-full mb-6">
      Limited Time Offer
    </span>

    {/* Headline */}
    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
      Don't Miss the 48-Hour Flash Sale
    </h2>

    {/* Subtext */}
    <p className="text-xl text-indigo-200 mb-8">
      Get 30% off annual subscriptions. Once it's gone, it's gone.
    </p>

    {/* Countdown Placeholder */}
    <div className="flex justify-center gap-4 mb-10 font-mono text-3xl md:text-5xl font-bold">
       <div className="bg-white/10 p-4 rounded-lg">01<span className="text-sm block">Days</span></div>
       :
       <div className="bg-white/10 p-4 rounded-lg">12<span className="text-sm block">Hrs</span></div>
       :
       <div className="bg-white/10 p-4 rounded-lg">45<span className="text-sm block">Mins</span></div>
    </div>

    {/* CTA */}
    <Link to={'/toys'} className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 text-xl font-bold py-4 px-10 rounded-full shadow-lg transition-transform hover:scale-105">
      Shop the Sale Now
    </Link>
    
    <p className="text-sm mt-4 text-indigo-300">No credit card required for trial.</p>
  </div>
</section>
    );
};

export default Promotion;