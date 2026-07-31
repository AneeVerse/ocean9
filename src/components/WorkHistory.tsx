export default function WorkHistory() {
  const clientsList = [
    "Indian Navy",
    "Adani",
    "Airtel",
    "Reliance Industries",
    "Tata Communications",
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#002365] relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#001947] border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Ocean 9&apos;s work history
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Includes projects for Reliance Industries, the Indian Navy, Adani, Airtel, Tata
                Communications and other marine and infrastructure clients.
              </p>
            </div>

            {/* Right Badges / Client Tags */}
            <div className="lg:col-span-5 flex flex-wrap gap-3 justify-start lg:justify-end">
              {clientsList.map((client, idx) => (
                <div
                  key={idx}
                  className="px-5 py-2.5 rounded-full bg-[#002d75] hover:bg-[#00388a] border border-white/10 text-white font-medium text-xs tracking-wider transition-all duration-300 shadow-md transform hover:scale-105"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
