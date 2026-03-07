import { Zap, Shield, Terminal, Globe, Cpu, Code2 } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Deploy in Minutes",
    description: "No infrastructure to manage. Your AI assistant is live in 5 minutes flat.",
  },
  {
    icon: Shield,
    title: "Your Own Instance",
    description: "Dedicated, isolated infrastructure. Your conversations and data stay completely private.",
  },
  {
    icon: Globe,
    title: "Connect Any App",
    description: "Telegram, WhatsApp, Discord, Slack. Chat through apps you already use.",
  },
  {
    icon: Cpu,
    title: "24/7 Monitoring",
    description: "We monitor your instance around the clock. It's always available, always ready.",
  },
  {
    icon: Code2,
    title: "Zero Maintenance",
    description: "We handle updates, monitoring, and technical upkeep. You focus on results.",
  },
  {
    icon: Terminal,
    title: "Full Control",
    description: "Use your own Anthropic API key. Full control over your AI usage and costs.",
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
            Managed OpenClaw hosting for teams and individuals. Deploy in minutes. $15/month.
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
