import Image from "next/image"

export function StickyProcessSection() {
  const steps = [
    {
      title: "Load & Start",
      description: "Choose the right machine size, load your laundry, and select your preferred settings.",
      emoji: "🧺",
    },
    {
      title: "Wash",
      description: "Powerful, efficient washers clean thoroughly using premium detergents.",
      emoji: "💧",
    },
    {
      title: "Dry",
      description: "High‑efficiency dryers get clothes perfectly dry without overdrying.",
      emoji: "🌬️",
    },
    {
      title: "Fold",
      description: "Use our spacious folding tables or ask about our professional fold service.",
      emoji: "🧷",
    },
    {
      title: "Go",
      description: "Pack up your fresh laundry and enjoy the rest of your day—quick and easy.",
      emoji: "✅",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background to-muted  to-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Process */}
          <div>
            <div className="mb-8 sm:mb-10">
              <span className="font-body font-semibold text-accent text-xs sm:text-sm tracking-[0.2em] uppercase">Self‑Service</span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3">How our laundromat works</h2>
              <p className="text-muted-foreground mt-3 max-w-xl">Simple steps for a fast, clean, and comfortable self‑service experience. Staff are always available if you need help.</p>
            </div>

            <ol className="space-y-4 sm:space-y-15">
              {steps.map((s, i) => (
                <li key={i} className="group">
                  <div className="bg-white rounded-2xl border border-white/50 shadow-sm p-4 sm:p-6 flex gap-4 sm:gap-5 items-start transition-transform">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-xl shrink-0">{s.emoji}</div>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-xs sm:text-sm text-accent font-semibold tracking-widest">STEP {i + 1}</span>
                        <h3 className="font-heading text-lg sm:text-xl text-foreground font-semibold">{s.title}</h3>
                      </div>
                      <p className="text-muted-foreground mt-1.5 sm:mt-2 leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: Sticky Image */}
          <div className="relative lg:sticky lg:top-24">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-white/50 bg-white">
              <Image
                src="/images/laundry.png"
                alt="Inside our modern laundromat"
                width={1200}
                height={500}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 