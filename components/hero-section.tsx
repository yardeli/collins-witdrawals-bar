import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center px-6 pb-24 pt-40 text-center">
      {/* Radial glow behind hero */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2"
        style={{
          background: "radial-gradient(ellipse at center, rgba(228,0,43,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Badge */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        <span className="text-sm text-muted-foreground">Your own personal Jason</span>
      </div>

      {/* Heading */}
      <h1 className="max-w-4xl text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
        Your AI agent that{" "}
        <span className="text-primary">actually does things.</span>
      </h1>

      {/* Subtitle */}
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
        Open-source. Runs on your machine. Powered by AI.{" "}
        <span className="font-semibold text-foreground">Zero API costs.</span>
      </p>

      {/* Terminal block */}
      <div className="mx-auto mt-12 w-full max-w-xl">
        <TerminalBlock />
      </div>

      {/* CTAs */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="#get-started"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_24px_rgba(228,0,43,0.3)]"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="#github"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-secondary"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View on GitHub
        </Link>
      </div>
    </section>
  )
}

function TerminalBlock() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-secondary/40 shadow-2xl shadow-primary/5 backdrop-blur-xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-muted-foreground">terminal</span>
      </div>

      {/* Commands */}
      <div className="flex flex-col gap-3 px-5 py-4">
        <TerminalLine command="npm install -g jasonbot" />
        <TerminalLine command="jasonbot start" />
      </div>
    </div>
  )
}

function TerminalLine({ command }: { command: string }) {
  return (
    <div className="group flex items-center justify-between gap-4">
      <code className="font-mono text-sm text-foreground">
        <span className="text-primary">$</span> <span className="font-semibold">{command}</span>
      </code>
      <button
        className="shrink-0 rounded p-1 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:text-foreground"
        aria-label={`Copy: ${command}`}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
      </button>
    </div>
  )
}
