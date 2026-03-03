import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary font-mono text-xs font-bold text-primary-foreground">
            JB
          </div>
          <span className="text-sm font-semibold text-foreground">JasonBot</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="#features" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Features</Link>
          <Link href="#install" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Install</Link>
          <Link href="#github" className="text-xs text-muted-foreground transition-colors hover:text-foreground">GitHub</Link>
          <Link href="#docs" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Docs</Link>
        </div>
        <p className="text-xs text-muted-foreground">
          {"Built with "}
          <span className="text-primary">{"<3"}</span>
          {" by the JasonBot community."}
        </p>
      </div>
    </footer>
  )
}
