export function IllustrativeUI({
  type,
}: {
  type: "dashboard" | "email-builder" | "sme-store" | "timeline";
}) {
  return (
    <div className="relative w-full h-full min-h-[300px] bg-neutral-900 rounded-2xl p-4 sm:p-6 text-white font-mono text-xs flex flex-col justify-between overflow-hidden shadow-inner border border-neutral-800">
      {/* Illustrative UI Tag */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        </div>
        <span className="text-[10px] text-neutral-400 uppercase tracking-widest bg-neutral-800 px-2 py-0.5 rounded-md">
          Illustrative UI
        </span>
      </div>

      {/* Mock Content Based on UI Type */}
      <div className="my-auto py-4">
        {type === "dashboard" && (
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 bg-neutral-800/80 rounded-xl border border-neutral-700/50">
                <span className="text-[9px] text-neutral-400 block">Vehicles Simulated</span>
                <span className="text-base font-bold text-white">100</span>
              </div>
              <div className="p-2.5 bg-neutral-800/80 rounded-xl border border-neutral-700/50">
                <span className="text-[9px] text-neutral-400 block">Detection Model </span>
                <span className="text-base font-bold text-white">YOLO + CNN</span>
              </div>
              <div className="p-2.5 bg-neutral-800/80 rounded-xl border border-neutral-700/50">
                <span className="text-[9px] text-neutral-400 block">Signal Control </span>
                <span className="text-base font-bold text-emerald-400">D3QN</span>
              </div>
            </div>

            <div className="p-3 bg-neutral-800/40 rounded-xl border border-neutral-700/50 space-y-2">
              <div className="flex justify-between text-[10px] text-neutral-400">
                <span>Traffic Simulation</span>
                <span>SUMO Simulation</span>
              </div>
              <div className="w-full h-12 bg-neutral-800 rounded-lg flex items-center justify-around px-4">
                <span className="w-2 h-2 rounded-full bg-neutral-400 animate-ping" />
                <span className="text-[10px] text-neutral-400">Traffic Control Agent</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>
          </div>
        )}

        {type === "email-builder" && (
          <div className="space-y-3">
            <div className="flex justify-between text-[11px] text-neutral-400 border-b border-neutral-800 pb-2">
              <span>Financial Data &rarr; Stock Portfolio Model</span>
              <span className="text-emerald-400">Analysis Complete</span>
            </div>
            <div className="space-y-1.5 font-mono text-[10px]">
              <div className="p-2 bg-neutral-800/70 rounded-lg flex items-center justify-between">
                <span>&lt;model&gt; Kmeans_Clusters</span>
                <span className="text-neutral-500">350+ stocks</span>
              </div>
              <div className="p-2 bg-neutral-800/70 rounded-lg flex items-center justify-between">
                <span>&lt;Model&gt; Monte_Carlo_Sim</span>
                <span className="text-neutral-500">15% lower risk</span>
              </div>
              <div className="p-2 bg-neutral-800/70 rounded-lg flex items-center justify-between">
                <span>&lt;results&gt; vs  S&P 500</span>
                <span className="text-emerald-400">3 Times more return over 5 year period.</span>
              </div>
            </div>
          </div>
        )}

        {type === "sme-store" && (
          <div className="space-y-3">
            <div className="p-3 bg-neutral-800/70 rounded-xl border border-neutral-700/60">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] font-bold text-white">Airport Terminal Monitor</span>
                <span className="text-[9px] bg-neutral-700 px-1.5 py-0.5 rounded text-neutral-300">Live Feed</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="p-2 bg-neutral-900 rounded border border-neutral-800 text-[10px]">
                  <span className="text-neutral-500 block">Unattended Objects</span>
                  <span className="font-bold text-white">4 Flagged</span>
                </div>
                <div className="p-2 bg-neutral-900 rounded border border-neutral-800 text-[10px]">
                  <span className="text-neutral-500 block">Total footfall</span>
                  <span className="font-bold text-white">150 in zone</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {type === "timeline" && (
          <div className="space-y-2">
            <div className="text-[11px] font-bold text-white mb-2">
              IFTA Audit Pipeline &middot; AWS
            </div>
            <div className="space-y-2 text-[10px]">
              <div className="flex items-center gap-2 p-1.5 bg-neutral-800/60 rounded">
                <span className="text-emerald-400"></span>
                <span className="text-neutral-300">Step 1: Fuel & Distance Extraction (Textract)</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-neutral-800/60 rounded">
                <span className="text-emerald-400"></span>
                <span className="text-neutral-300">Step 2: Audit Feature Engineering</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-neutral-800/60 rounded">
                <span className="text-neutral-400"></span>
                <span className="text-neutral-300">Step 3: Anomaly Detection & Risk Ranking</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between text-[9px] text-neutral-500 pt-2 border-t border-neutral-800">
        <span>Stack: Python/ SQL/PowerBI</span>
        <span>Cloud Technologies</span>
      </div>
    </div>
  );
}
