import { motion } from 'framer-motion';
import { ChevronRight, Shield, Database, Fingerprint } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pb-0 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-navy-deep/50 to-black" />

        {/* UV beam stack */}
        <div className="absolute inset-y-[-10%] right-[10%] flex justify-center">
          <span className="uv-ray" />
          <span className="uv-ray" />
          <span className="uv-ray" />
        </div>

        {/* X-ray grid */}
        <div className="absolute inset-0 opacity-30 mix-blend-screen">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(96,165,250,0.08)_1px,transparent_1px)] bg-[length:140px_140px]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(96,165,250,0.06)_1px,transparent_1px)] bg-[length:140px_140px]" />
        </div>

        {/* UV orbs */}
        <div className="uv-orb w-[32rem] h-[32rem] top-[10%] left-[-12%]" />
        <div className="uv-orb w-[18rem] h-[18rem] bottom-[8%] right-[18%] opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,420px)] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <span className="text-xs sm:text-sm md:text-base text-uv-blue tracking-[0.4em] uppercase block">
                SMARTEN Invisible Authentication
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-tight drop-shadow-[0_0_30px_rgba(96,165,250,0.55)]">
                Unforgeable Security, <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-uv-blue to-teal drop-shadow-[0_0_22px_rgba(59,130,246,0.55)]">Illuminated by UV Intelligence</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-100/90 max-w-2xl leading-relaxed">
                Invisible marking technology that cannot be studied, replicated, or removed. 
                Protecting patients, revenues, and brand reputation with molecular-level security.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="mailto:vinayab@goa.bits-pilani.ac.in?cc=f20221254@goa.bits-pilani.ac.in"
                className="group w-full sm:w-auto justify-center px-8 py-4 inline-flex items-center space-x-2 bg-gradient-to-r from-uv-blue via-sky-400 to-teal text-white font-semibold transition-all shadow-[0_0_35px_rgba(96,165,250,0.5)] hover:shadow-[0_0_45px_rgba(96,165,250,0.65)]"
              >
                <span>Request Demo</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
            >
              {[
                { icon: Shield, title: "Unforgeable", desc: "Invisible markings fused into substrate — impossible to lift or clone." },
                { icon: Database, title: "Predictive", desc: "AI senses counterfeit drift with UV signature analytics and geo telemetry." },
                { icon: Fingerprint, title: "Forensic", desc: "Instant authentication under blue-spectrum scans with zero false positives." }
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start space-x-3 sm:space-x-4 glass-card p-6 rounded-none border border-white/10 hover:border-uv-blue/50 transition-all"
                >
                  <div className="relative">
                    <div className="absolute inset-[-0.75rem] rounded-full bg-uv-blue/10 blur-md" />
                    <item.icon className="w-9 h-9 text-sky-200 relative z-10 drop-shadow-[0_0_14px_rgba(96,165,250,0.4)]" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold text-white mb-1 tracking-wide drop-shadow-[0_0_12px_rgba(96,165,250,0.35)]">{item.title}</h3>
                    <p className="text-sm text-slate-100/85 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.35),transparent_60%)] blur-3xl opacity-90" />
            <div className="relative aspect-[3/4] rounded-[2.5rem] border border-white/15 bg-gradient-to-br from-white/10 to-white/5 overflow-hidden backdrop-blur-xl">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_0%,rgba(15,23,42,0.75)_55%,rgba(2,6,23,0.95)_100%)]" />

              <div className="relative h-full w-full">
                {/* Base silhouette (always visible) */}
                <div className="absolute inset-0 p-9 flex flex-col justify-between text-slate-200/25 uv-base-layer">
                  <div className="space-y-5">
                    <div className="h-4 w-20 bg-white/10 rounded-full" />
                    <div className="h-[3px] w-3/4 bg-white/10 rounded-full" />
                    <div className="h-[3px] w-1/2 bg-white/10 rounded-full" />
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-8">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-12 rounded-xl border border-white/10 bg-white/10" />
                    ))}
                  </div>
                  <div className="space-y-3 pt-6">
                    <div className="h-[3px] w-full bg-white/10 rounded-full" />
                    <div className="h-[3px] w-2/3 bg-white/10 rounded-full" />
                  </div>
                </div>

                {/* Hidden authentication layer revealed with UV */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white uv-reveal-content">
                  <div className="flex justify-between items-start text-xs uppercase tracking-[0.35em] text-sky-200">
                    <span>Batch 047</span>
                    <span>Signature Active</span>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm text-uv-blue uppercase tracking-[0.45em]">Smarten Seal</div>
                      <div className="mt-2 text-2xl font-semibold drop-shadow-[0_0_18px_rgba(96,165,250,0.42)]">Visible Under UV Spectrum</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="rounded-xl border border-uv-blue/40 bg-uv-blue/10 p-4 shadow-[0_0_20px_rgba(96,165,250,0.25)]">
                        <div className="text-xs uppercase tracking-[0.35em] text-sky-200">Lot</div>
                        <div className="mt-2 font-semibold text-white">ALPHA-732</div>
                      </div>
                      <div className="rounded-xl border border-teal/40 bg-teal/20 p-4 shadow-[0_0_18px_rgba(45,212,191,0.25)]">
                        <div className="text-xs uppercase tracking-[0.35em] text-teal-100">Origin</div>
                        <div className="mt-2 font-semibold text-white">Geneva Lab</div>
                      </div>
                      <div className="col-span-2 rounded-xl border border-white/25 bg-white/10 p-4 shadow-[0_0_20px_rgba(226,232,240,0.18)]">
                        <div className="text-xs uppercase tracking-[0.35em] text-slate-100/90">Encoded Hash</div>
                        <div className="mt-1 font-mono tracking-[0.4em] text-sm text-white">9F-3C-7B-2A-88-EE</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-left space-y-2">
                    <div className="text-xs uppercase tracking-[0.3em] text-sky-200/90">Authentication</div>
                    <div className="text-base font-semibold">Match Confidence: <span className="text-teal-100">99.982%</span></div>
                  </div>
                </div>
              </div>

              {/* UV reveal overlays */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-[14px] rounded-[2rem] border border-uv-blue/60 opacity-0 animate-[securityReveal_6.5s_ease-in-out_infinite]" />
                <div className="absolute inset-[18px] rounded-[1.9rem] bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.9),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.8),transparent_45%)] opacity-0 mix-blend-screen animate-[securityReveal_6.5s_ease-in-out_infinite]" />
                <div className="absolute inset-[18px] rounded-[1.9rem] bg-[repeating-linear-gradient(45deg,rgba(148,163,184,0)_0,rgba(148,163,184,0)_14px,rgba(94,234,212,0.4)_14px,rgba(94,234,212,0.4)_16px)] opacity-0 mix-blend-screen animate-[securityReveal_6.5s_ease-in-out_infinite]" />
                <div className="uv-reveal-halo" />
              </div>

              {/* Scanning beam */}
              <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] pointer-events-none">
                <div className="absolute left-1/2 top-0 w-[55%] h-full -translate-x-1/2 bg-gradient-to-b from-transparent via-uv-blue/25 to-transparent blur-[90px] animate-[scanDown_6.5s_ease-in-out_infinite]" />
                <div className="absolute left-1/2 top-0 w-px h-full -translate-x-1/2 bg-gradient-to-b from-transparent via-uv-blue/90 to-transparent animate-[scanDown_6.5s_ease-in-out_infinite]" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:hidden mt-10"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_20px_50px_rgba(2,6,23,0.55)]">
              <div className="px-6 py-4 border-b border-white/10 text-xs uppercase tracking-[0.4em] text-slate-200/80">
                Batch 047 — Signature Active
              </div>
              <div className="p-6 space-y-5 text-sm">
                <div>
                  <div className="text-xs text-uv-blue uppercase tracking-[0.35em]">Smarten Seal</div>
                  <div className="text-lg font-semibold mt-1">Visible Under UV Spectrum</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-uv-blue/30 bg-uv-blue/10">
                    <div className="text-[11px] uppercase tracking-[0.35em] text-slate-200/80">Lot</div>
                    <div className="mt-1 font-semibold">ALPHA-732</div>
                  </div>
                  <div className="p-4 rounded-xl border border-teal/30 bg-teal/10">
                    <div className="text-[11px] uppercase tracking-[0.35em] text-slate-200/80">Origin</div>
                    <div className="mt-1 font-semibold">Geneva Lab</div>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-white/15 bg-white/5">
                  <div className="text-[11px] uppercase tracking-[0.35em] text-slate-200/80">Encoded Hash</div>
                  <div className="mt-1 font-mono tracking-[0.35em]">9F-3C-7B-2A-88-EE</div>
                </div>
                <div className="text-xs uppercase tracking-[0.35em] text-slate-200/70">Authentication</div>
                <div className="text-base font-semibold">Match Confidence: <span className="text-teal">99.982%</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
