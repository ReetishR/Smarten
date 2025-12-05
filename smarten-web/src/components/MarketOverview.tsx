import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, Globe } from 'lucide-react';

const MarketOverview = () => {
  const stats = [
    { label: "Counterfeit Market", value: "$397.9B", sub: "Projected by 2032", color: "text-teal" },
    { label: "Indian Impact", value: "$20B+", sub: "Annual counterfeit goods", color: "text-gold" },
    { label: "Pharma Risk", value: "15%", sub: "Counterfeit medicines in India", color: "text-red-500" },
    { label: "Growth Rate", value: "12%", sub: "CAGR (2025-2032)", color: "text-blue-400" }
  ];
  const chartData = [
    { year: '2016', counterfeitLoss: 285, adoptionRate: 12 },
    { year: '2018', counterfeitLoss: 312, adoptionRate: 18 },
    { year: '2020', counterfeitLoss: 338, adoptionRate: 24 },
    { year: '2022', counterfeitLoss: 355, adoptionRate: 31 },
    { year: '2024', counterfeitLoss: 372, adoptionRate: 41 },
    { year: '2025', counterfeitLoss: 398, adoptionRate: 46 },
    { year: '2027', counterfeitLoss: 412, adoptionRate: 58 },
    { year: '2030', counterfeitLoss: 438, adoptionRate: 72 }
  ];

  const maxCounterfeit = Math.max(...chartData.map((d) => d.counterfeitLoss));
  const barSpacing = 120;
  const barWidth = 56;
  const xOffset = 40;
  const chartHeight = 280;
  const topPadding = 50;
  const bottomPadding = 70;
  const chartWidth = (chartData.length - 1) * barSpacing + barWidth + xOffset * 2;

  const adoptionPath = chartData
    .map((point, index) => {
      const x = index * barSpacing + xOffset + barWidth / 2;
      const y = topPadding + chartHeight - (point.adoptionRate / 100) * chartHeight;
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  return (
    <section id="market" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.25),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(30,64,175,0.22),transparent_55%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-uv-blue font-bold tracking-[0.35em] uppercase text-xs md:text-sm">Market Intelligence</span>
          <h2 className="text-4xl font-serif font-bold text-white mt-4 mb-5">The Counterfeit Crisis</h2>
          <p className="text-slate-300/80 max-w-2xl">
            Global counterfeiting has evolved into a multi-billion dollar parallel economy. 
            The convergence of regulatory pressure and technological maturation creates a watershed moment for authentication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative p-6 bg-black/40 border border-white/5 hover:border-uv-blue/40 rounded-xl transition-all shadow-[0_0_45px_rgba(2,132,199,0.05)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.12),transparent_70%)]" />
              </div>
              <h3 className={`text-3xl font-semibold mb-2 ${stat.color} drop-shadow-[0_0_12px_rgba(96,165,250,0.35)]`}>{stat.value}</h3>
              <p className="text-slate-200 font-medium tracking-wide uppercase text-xs">{stat.label}</p>
              <p className="text-xs text-slate-500 mt-2">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-red-500/15 rounded-lg border border-red-500/20">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Regulatory Tsunami</h4>
                <p className="text-slate-400/80 text-sm leading-relaxed">
                  India's pharma industry faces mounting pressure from US DSCSA 2024 and EU Falsified Medicines Directive. 
                  Domestic regulations are tightening, creating compliance urgency for the $130B sector.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-500/15 rounded-lg border border-blue-500/20">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">E-commerce Vulnerability</h4>
                <p className="text-slate-400/80 text-sm leading-relaxed">
                  India's e-commerce market is projected to reach $200B by 2026. This expansion creates new vectors 
                  for fakes to infiltrate legitimate platforms through commingled inventory.
                </p>
              </div>
            </div>
             
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-teal/15 rounded-lg border border-teal/20">
                <TrendingUp className="w-6 h-6 text-teal" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Technology Maturation</h4>
                <p className="text-slate-400/80 text-sm leading-relaxed">
                  Invisible marking has evolved from lab curiosities to production-ready solutions. 
                  Smartphone verification now averages 2.3 seconds, eliminating equipment barriers.
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] w-full rounded-2xl overflow-hidden border border-white/10 bg-black/45 backdrop-blur-md p-8 pb-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.15),transparent_65%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,116,144,0.1),transparent_70%)]" />

            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400 mb-4">
                <span>Counterfeit Loss (USD Billions)</span>
                <span>Authentication Adoption (% of pharma SKUs)</span>
              </div>

              <div className="relative -mx-2 sm:mx-0">
                <div className="overflow-x-auto pb-4">
                  <div className="min-w-[720px] sm:min-w-full">
                    <svg
                      viewBox={`0 0 ${chartWidth} ${chartHeight + topPadding + bottomPadding}`}
                      className="w-full h-[320px] sm:h-[360px]"
                    >
                      {[0, 0.25, 0.5, 0.75, 1].map((tick, idx) => {
                        const y = topPadding + chartHeight - tick * chartHeight;
                        const value = Math.round(maxCounterfeit * tick);
                        return (
                          <g key={idx}>
                            <line x1={0} x2={chartWidth} y1={y} y2={y} stroke="rgba(148,163,184,0.15)" strokeDasharray="6 6" />
                            <text
                              x={-12}
                              y={y + 4}
                              fill="rgba(148,163,184,0.65)"
                              fontSize="10"
                              textAnchor="end"
                            >
                              {value}
                            </text>
                          </g>
                        );
                      })}

                      {chartData.map((point, index) => {
                        const barHeight = (point.counterfeitLoss / maxCounterfeit) * chartHeight;
                        const barX = index * barSpacing + xOffset;
                        const barY = topPadding + chartHeight - barHeight;
                        return (
                          <g key={point.year}>
                            <motion.rect
                              initial={{ height: 0, y: topPadding + chartHeight }}
                              whileInView={{ height: barHeight, y: barY }}
                              transition={{ duration: 0.8, delay: index * 0.08 }}
                              x={barX}
                              width={36}
                              rx={6}
                              fill="url(#counterfeitGradient)"
                              opacity={0.9}
                            />
                            <text
                              x={barX + barWidth / 2}
                              y={topPadding + chartHeight + 20}
                              fill="rgba(148,163,184,0.8)"
                              fontSize="10"
                              textAnchor="middle"
                            >
                              {point.year}
                            </text>
                            <text
                              x={barX + barWidth / 2}
                              y={barY - 10}
                              fill="rgba(226,232,240,0.9)"
                              fontSize="11"
                              textAnchor="middle"
                            >
                              {point.counterfeitLoss}
                            </text>
                          </g>
                        );
                      })}

                      <path
                        d={adoptionPath}
                        fill="none"
                        stroke="url(#adoptionGradient)"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />

                      {chartData.map((point, index) => {
                        const x = index * barSpacing + xOffset + barWidth / 2;
                        const y = topPadding + chartHeight - (point.adoptionRate / 100) * chartHeight;
                        return (
                          <g key={`${point.year}-marker`}>
                            <circle cx={x} cy={y} r={5} fill="rgba(20,184,166,0.9)" stroke="rgba(15,118,110,0.8)" strokeWidth={2} />
                            <text x={x} y={y - 12} fill="rgba(94,234,212,0.9)" fontSize="10" textAnchor="middle">
                              {point.adoptionRate}%
                            </text>
                          </g>
                        );
                      })}

                      <defs>
                        <linearGradient id="counterfeitGradient" x1="0" y1="1" x2="0" y2="0">
                          <stop offset="0%" stopColor="rgba(96,165,250,0.35)" />
                          <stop offset="50%" stopColor="rgba(14,165,233,0.65)" />
                          <stop offset="100%" stopColor="rgba(56,189,248,0.9)" />
                        </linearGradient>
                        <linearGradient id="adoptionGradient" x1="0" y1="1" x2="1" y2="0">
                          <stop offset="0%" stopColor="rgba(56,189,248,0.6)" />
                          <stop offset="100%" stopColor="rgba(16,185,129,0.9)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300/80">
                <div className="space-y-2">
                  <div className="font-semibold text-white tracking-wide uppercase text-xs">Why it matters</div>
                  <p>
                    OECD/EUIPO illicit trade analysis shows global counterfeit losses rising toward $438B by 2030 even as
                    enforcement tightens. Authentication Solution Providers Association (ASPA) data indicates only ~46% of pharma SKUs
                    in India adopt covert or forensic protection in 2025, leaving a major exposure gap.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-white tracking-wide uppercase text-xs">Opportunity window</div>
                  <p>
                    Regulatory deadlines (US DSCSA, EU FMD) accelerate adoption to an expected 72% by 2030. SMARTEN closes the gap by
                    embedding invisible security ahead of counterfeit escalation, turning compliance spending into predictive market intelligence.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
                <span>Counterfeit Growth vs. Authentication Adoption</span>
                <span>Sources: OECD/EUIPO Illicit Trade 2023; ASPA Authentication Landscape 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOverview;
