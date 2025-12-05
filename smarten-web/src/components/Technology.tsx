import { motion } from 'framer-motion';
import { Scan, Zap, Layers, Smartphone } from 'lucide-react';

const Technology = () => {
  return (
    <section id="technology" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-efc0257bb3af?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-screen opacity-20" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-uv-blue font-bold tracking-[0.35em] uppercase text-xs md:text-sm">Our Solution</span>
          <h2 className="text-4xl font-serif font-bold text-white mt-4 mb-5">The SMARTEN Advantage</h2>
          <p className="text-slate-300/80 max-w-2xl mx-auto">
            We move beyond surface-level protection. SMARTEN embeds invisible, tamper-proof authentication 
            directly into your product's DNA without disrupting manufacturing lines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {[
              {
                icon: Layers,
                title: "Invisible Marking",
                desc: "Proprietary nano-material integration that is undetectable to the naked eye and impossible to remove without destroying the product."
              },
              {
                icon: Zap,
                title: "Zero-Disruption Deployment",
                desc: "Integrates seamlessly into existing manufacturing workflows. No line modifications or slowdowns required."
              },
              {
                icon: Smartphone,
                title: "Instant Verification",
                desc: "Verify authenticity in 2.3 seconds using standard smartphones or proprietary readers for high-security channels."
              },
              {
                icon: Scan,
                title: "AI-Powered Analytics",
                desc: "Machine learning models detect counterfeit patterns with 99% accuracy, identifying infiltration hotspots in real-time."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex items-start space-x-4"
              >
                <div className="relative">
                  <div className="absolute inset-[-0.75rem] rounded-full bg-uv-blue/15 blur-lg" />
                  <div className="p-4 rounded-full bg-black/60 border border-uv-blue/30 shadow-[0_0_25px_rgba(96,165,250,0.35)] relative z-10">
                    <item.icon className="w-6 h-6 text-uv-blue" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-2 tracking-wide">{item.title}</h3>
                  <p className="text-slate-300/80 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.25),transparent_55%)] rounded-2xl blur-xl" />
            <div className="bg-black/50 border border-white/10 p-8 rounded-2xl relative overflow-hidden backdrop-blur-lg">
              <div className="absolute top-0 right-0 p-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
              
              <div className="mt-8 space-y-6">
                <div className="h-40 bg-black/70 rounded-lg border border-uv-blue/30 flex items-center justify-center relative overflow-hidden group">
                  <Scan className="w-16 h-16 text-uv-blue/60 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-uv-blue/10 animate-pulse" />
                  
                  {/* Scanning Effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-uv-blue/60 shadow-[0_0_15px_rgba(96,165,250,0.55)] animate-[scan_3s_ease-in-out_infinite]" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400/80">Status</span>
                    <span className="text-uv-blue font-semibold tracking-wide">AUTHENTICATED</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400/80">Serial ID</span>
                    <span className="text-white font-mono">SMT-8842-X99</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400/80">Origin</span>
                    <span className="text-white">Mumbai Facility #4</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400/80">Timestamp</span>
                    <span className="text-white">Just now</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
