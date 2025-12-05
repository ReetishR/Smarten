import { Check, X } from 'lucide-react';

const Competition = () => {
  const comparisonData = [
    { feature: "Invisible Authentication", smarten: true, hologram: false, qr: false, nfc: true },
    { feature: "Smartphone Verification", smarten: true, hologram: true, qr: true, nfc: true },
    { feature: "Unclonable", smarten: true, hologram: false, qr: false, nfc: true },
    { feature: "Zero Consumables Cost", smarten: true, hologram: false, qr: true, nfc: false },
    { feature: "No Line Modifications", smarten: true, hologram: false, qr: true, nfc: false },
    { feature: "Real-time Tracking", smarten: true, hologram: false, qr: true, nfc: true }
  ];

  return (
    <section id="competition" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(20,184,166,0.18),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-uv-blue font-bold tracking-[0.35em] uppercase text-xs md:text-sm">Competitive Landscape</span>
          <h2 className="text-4xl font-serif font-bold text-white mt-4 mb-5">Why SMARTEN Wins</h2>
          <p className="text-slate-300/80 max-w-2xl mx-auto">
            Traditional solutions rely on removable stickers or easily replicated codes. 
            SMARTEN provides the security of forensic markers with the ease of digital verification.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] bg-black/40 border border-white/10 rounded-2xl overflow-hidden">
            <thead>
              <tr>
                <th className="py-6 px-4 text-left text-slate-400 font-normal border-b border-white/10">Feature</th>
                <th className="py-6 px-4 text-center bg-uv-blue/10 border-x border-uv-blue/30">
                  <span className="text-uv-blue font-bold text-xl block tracking-wide">SMARTEN</span>
                  <span className="text-xs text-uv-blue/70 uppercase tracking-[0.3em]">Our Solution</span>
                </th>
                <th className="py-6 px-4 text-center text-slate-400 border-b border-white/10">
                  <span className="font-bold block text-white">Holograms</span>
                  <span className="text-xs opacity-70">Legacy</span>
                </th>
                <th className="py-6 px-4 text-center text-slate-400 border-b border-white/10">
                  <span className="font-bold block text-white">QR Codes</span>
                  <span className="text-xs opacity-70">Digital</span>
                </th>
                <th className="py-6 px-4 text-center text-slate-400 border-b border-white/10">
                  <span className="font-bold block text-white">NFC/RFID</span>
                  <span className="text-xs opacity-70">Hardware</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 text-slate-200 font-medium border-b border-white/5">{row.feature}</td>
                  <td className="py-4 px-4 text-center bg-uv-blue/5 border-x border-uv-blue/20">
                    <div className="flex justify-center">
                      {row.smarten ? <Check className="text-uv-blue w-6 h-6" /> : <X className="text-red-500 w-6 h-6" />}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center border-b border-white/5">
                    <div className="flex justify-center">
                      {row.hologram ? <Check className="text-slate-500 w-5 h-5" /> : <X className="text-slate-700 w-5 h-5" />}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center border-b border-white/5">
                    <div className="flex justify-center">
                      {row.qr ? <Check className="text-slate-500 w-5 h-5" /> : <X className="text-slate-700 w-5 h-5" />}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center border-b border-white/5">
                    <div className="flex justify-center">
                      {row.nfc ? <Check className="text-slate-500 w-5 h-5" /> : <X className="text-slate-700 w-5 h-5" />}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/45 border border-white/10 p-8 text-center rounded-2xl backdrop-blur-md">
            <h4 className="text-gold text-xl font-bold mb-2">Holostik</h4>
            <p className="text-sm text-slate-300/80 mb-4">Dominant player, but reliant on visible holograms which are increasingly replicated.</p>
            <div className="text-xs bg-white/10 py-1 px-2 rounded inline-block uppercase tracking-wide">Legacy Leader</div>
          </div>
          <div className="relative bg-black/60 border border-uv-blue/40 p-8 text-center rounded-2xl overflow-hidden shadow-[0_0_35px_rgba(96,165,250,0.35)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.25),transparent_65%)]" />
            <div className="relative">
              <h4 className="text-uv-blue text-xl font-bold mb-2">SMARTEN</h4>
              <p className="text-sm text-slate-200/90 mb-4">Combines invisible security with zero-cost integration and AI verification.</p>
              <div className="text-xs bg-uv-blue/20 text-uv-blue py-1 px-3 rounded-full inline-block font-bold uppercase tracking-wide">Market Disruptor</div>
            </div>
          </div>
          <div className="bg-black/45 border border-white/10 p-8 text-center rounded-2xl backdrop-blur-md">
            <h4 className="text-white text-xl font-bold mb-2">Ennoventure</h4>
            <p className="text-sm text-slate-300/80 mb-4">Strong invisible tech, but lacks hardware-level verification for secure chains.</p>
            <div className="text-xs bg-white/10 py-1 px-2 rounded inline-block uppercase tracking-wide">Key Competitor</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competition;
