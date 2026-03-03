"use client"

import { X, Home, Zap, Download, Github, Settings, BookOpen } from "lucide-react"
import Link from "next/link"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Zap, label: "Features", href: "#features" },
  { icon: Download, label: "Install", href: "#install" },
  { icon: BookOpen, label: "Docs", href: "#docs" },
  { icon: Github, label: "GitHub", href: "#github" },
  { icon: Settings, label: "Settings", href: "#settings" },
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-72 flex-col border-r border-sidebar-border bg-sidebar/80 backdrop-blur-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-sidebar-border px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-mono text-xs font-bold text-primary-foreground">
              CB
            </div>
            <span className="text-lg font-bold tracking-tight text-sidebar-foreground">CollinBot</span>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
            aria-label="Close sidebar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-sidebar-border px-4 py-4">
          <div className="rounded-xl border border-sidebar-border bg-sidebar-accent/50 p-4 backdrop-blur-sm">
            <p className="text-xs font-medium text-sidebar-foreground">Your own personal Collin</p>
            <p className="mt-1 text-xs text-muted-foreground">v1.0.0 - Open Source</p>
          </div>
        </div>
      </aside>
    </>
  )
}
