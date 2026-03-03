import { Zap, Shield, Terminal, Globe, Cpu, Code2 } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Execute tasks in milliseconds with our optimized AI engine, built for speed.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Everything runs locally on your machine. Your data never leaves your control.",
  },
  {
    icon: Terminal,
    title: "CLI Native",
    description: "Built for the terminal. Integrates seamlessly into your existing development workflow.",
  },
  {
    icon: Globe,
    title: "Open Source",
    description: "Fully transparent, community-driven, and free to use under the MIT license.",
  },
  {
    icon: Cpu,
    title: "Zero API Costs",
    description: "No tokens, no subscriptions. Run unlimited tasks without paying a cent.",
  },
  {
    icon: Code2,
    title: "Extensible",
    description: "Build custom plugins and extend JasonBot to fit your unique use case.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything you need,{" "}
            <span className="text-primary">nothing you don&apos;t.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            JasonBot is built to be your go-to AI agent. Fast, private, and free forever.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-xl transition-all hover:border-primary/30 hover:shadow-[0_0_32px_rgba(228,0,43,0.06)]"
            >
              {/* Glass highlight on top */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
