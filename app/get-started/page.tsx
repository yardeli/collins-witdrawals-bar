"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export default function GetStartedPage() {
  const [email, setEmail] = useState("")
  const [notes, setNotes] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    setLoading(true)
    setError("")

    try {
      // Send to your backend or email service
      const response = await fetch("/api/get-started", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, notes }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setSubmitted(true)
      setEmail("")
      setNotes("")
    } catch (err) {
      setError("Something went wrong. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl">
          {/* Radial glow */}
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background: "radial-gradient(ellipse at center, rgba(228,0,43,0.08) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          {!submitted ? (
            <Card className="border-border/50 bg-card/40 p-8 backdrop-blur-xl md:p-12">
              <div className="mb-8">
                <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Get Started with{" "}
                  <span className="text-primary">ClawCare</span>
                </h1>
                <p className="mt-3 text-lg text-muted-foreground">
                  Tell us about yourself and what you'd like to automate. We'll be in touch soon!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    We'll use this to send you updates about your ClawCare setup.
                  </p>
                </div>

                {/* Notes field */}
                <div className="space-y-2">
                  <label htmlFor="notes" className="block text-sm font-medium text-foreground">
                    What would you like to automate?
                  </label>
                  <Textarea
                    id="notes"
                    placeholder="Tell us about the workflows, tasks, or functionalities you'd like ClawCare to handle. Examples:
• Daily email summary and calendar sync
• Automated code review notifications
• Customer support ticket routing
• Team meeting scheduling
• Data pipeline monitoring
• Anything else you have in mind!"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={8}
                    className="resize-none"
                  />
                  <p className="text-xs text-muted-foreground">
                    The more details you provide, the better we can customize ClawCare for you.
                  </p>
                </div>

                {/* Error message */}
                {error && (
                  <div className="flex gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-3">
                    <AlertCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:brightness-110 text-primary-foreground h-10"
                >
                  {loading ? "Submitting..." : "Get Started"}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  By submitting, you agree to be contacted about ClawCare.
                </p>
              </form>
            </Card>
          ) : (
            <Card className="border-border/50 bg-card/40 p-8 text-center backdrop-blur-xl md:p-12">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-primary/20 p-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Thanks for signing up!
              </h2>
              <p className="mt-3 text-muted-foreground">
                We've received your information and will be in touch shortly.
              </p>

              <div className="mt-8 space-y-3">
                <p className="text-sm text-muted-foreground">
                  In the meantime, you can:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Check out the documentation</li>
                  <li>✓ Explore our GitHub repository</li>
                  <li>✓ Join our community discord</li>
                </ul>
              </div>

              <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
