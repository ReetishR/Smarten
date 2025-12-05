import React from 'react';
import { Target, Truck, Users, ArrowRight } from 'lucide-react';

const Strategy = () => {
  return (
    <section id="strategy" className="py-20 bg-navy-deep">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-teal font-bold tracking-widest uppercase text-sm">Growth Strategy</span>
            <h2 className="text-4xl font-serif font-bold text-white mt-2">Go-to-Market Roadmap</h2>
          </div>
          <p className="text-slate-400 max-w-md mt-4 md:mt-0">
            A phased approach to establishing invisible authentication as the new industry standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Compliance Catalyst",
              icon: Target,
              desc: "Targeting pharma manufacturers facing imminent export serialization deadlines. Positioning SMARTEN as the seamless compliance solution.",
              target: "Year 1: 50-75 Leads, 5-8 Pilots"
            },
            {
              step: "02",
              title: "Managed Service for SME",
              icon: Users,
              desc: "Equipment-as-a-Service model for the 2,500+ small manufacturers. Removing capital barriers with per-unit marking fees.",
              target: "Year 2: 20+ Customers, ₹35 Cr Revenue"
            },
            {
              step: "03",
              title: "Verified Network",
              icon: Truck,
              desc: "Distributor-led authentication platform. Turning logistics partners into gatekeepers who demand authenticated products.",
              target: "Year 3: Industry Standard Platform"
            }
          ].map((phase, idx) => (
            <div key={idx} className="glass-card p-8 relative group hover:bg-white/5 transition-colors">
              <div className="absolute top-8 right-8 text-4xl font-bold text-white/5 font-serif group-hover:text-teal/10 transition-colors">{phase.step}</div>
              <div className="bg-teal/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-teal">
                <phase.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{phase.desc}</p>
              
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-gold uppercase tracking-wider">{phase.target}</span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-gradient-to-r from-navy-light to-navy rounded-2xl border border-white/10 text-center">
          <h3 className="text-3xl font-serif font-bold text-white mb-6">Ready to secure your supply chain?</h3>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Join the leading pharmaceutical brands protecting their revenue and patients with SMARTEN invisible authentication.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-4 bg-gold hover:bg-gold-light text-navy-deep font-bold rounded-lg transition-colors">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 border border-white/20 hover:border-white/50 text-white font-medium rounded-lg transition-colors">
              Download Whitepaper
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
