import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-12 text-center backdrop-blur-xl md:p-16">
          {/* Glass highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          {/* Radial glow */}
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background: "radial-gradient(ellipse at center, rgba(228,0,43,0.06) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />

          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Ready to meet your new{" "}
            <span className="text-primary">personal ClawCare?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Get started in seconds. Install, run, and let ClawCare handle the rest.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_24px_rgba(228,0,43,0.3)]"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#docs"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-secondary"
            >
              Read the Docs
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
