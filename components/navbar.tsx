"use client"

import { ArrowRight, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Navbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-4 w-4" />
          </button>
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-mono text-xs font-bold text-primary-foreground">
              JB
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">JasonBot</span>
          </Link>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</Link>
          <Link href="#install" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Install</Link>
          <Link href="https://github.com/yardeli/YardensOpenClaw" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">GitHub</Link>
        </div>

        <div className="hidden md:block">
          <Link
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-foreground md:hidden"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Features</Link>
            <Link href="#install" className="text-sm text-muted-foreground transition-colors hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Install</Link>
            <Link href="https://github.com/yardeli/YardensOpenClaw" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>GitHub</Link>
            <Link
              href="#get-started"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
