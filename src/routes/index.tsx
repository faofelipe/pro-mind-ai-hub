import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import neuralImg from "@/assets/neural-architecture.jpg";
import monitorImg from "@/assets/execution-monitor.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pro Mind AI — Cognitive Architecture for Autonomous Enterprises" },
      {
        name: "description",
        content:
          "Pro Mind AI designs and deploys specialized AI agents that reason, integrate with your tools, and run complex operational workflows end to end.",
      },
      {
        property: "og:title",
        content: "Pro Mind AI — Cognitive Architecture for Autonomous Enterprises",
      },
      {
        property: "og:description",
        content:
          "Specialized agentic systems that observe, reason, and act across your existing software stack.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Pro Mind AI",
          url: "https://promindai.com",
          description:
            "Pro Mind AI builds specialized AI agents for autonomous enterprise operations.",
        }),
      },
    ],
  }),
});

const capabilities = [
  {
    title: "Contextual Memory",
    body: "Agents maintain long-term retrieval of internal documentation and past decision cycles to ensure consistency in execution.",
    mark: <div className="size-4 rounded-full bg-primary" />,
  },
  {
    title: "Tool Integration",
    body: "Securely interacts with APIs, databases, and legacy systems to perform multi-step tasks without human intervention.",
    mark: <div className="size-4 rotate-45 border-2 border-primary" />,
  },
  {
    title: "Strategic Planning",
    body: "Decomposes vague objectives into actionable sub-tasks, prioritizing efficiency and error handling in real-time.",
    mark: <div className="size-4 bg-primary/40 ring-1 ring-primary" />,
  },
];

const protocol = [
  {
    step: "01",
    title: "Audit & Discovery",
    body: "We map your operational bottlenecks and identify high-leverage automation opportunities.",
  },
  {
    step: "02",
    title: "Agent Synthesis",
    body: "Custom cognitive models are fine-tuned on your domain-specific data and safety constraints.",
  },
  {
    step: "03",
    title: "Deployment & Scaling",
    body: "Agents go live in a sandbox environment before full integration into your production stack.",
  },
];

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-surface-base font-sans text-foreground">
      <nav className="sticky top-0 z-50 border-b border-hairline bg-surface-base/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-sm bg-primary" />
            <span className="text-lg font-medium tracking-tight">Pro Mind AI</span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#agents" className="transition-colors hover:text-primary">
              Agents
            </a>
            <a href="#process" className="transition-colors hover:text-primary">
              Process
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-1 ring-primary/20 transition-transform active:scale-95"
          >
            Contact Inquiry
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/50 px-3 py-1 font-mono text-xs text-primary">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                SYSTEM STATUS: OPERATIONAL
              </div>
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Cognitive architecture for the autonomous enterprise.
              </h1>
              <p className="max-w-[48ch] text-pretty text-lg text-muted-foreground">
                Pro Mind AI builds specialized agentic systems that observe, reason, and act
                across your existing software stack to handle complex operational workflows.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-md bg-primary px-6 py-2.5 font-medium text-primary-foreground ring-1 ring-primary/50 transition-transform hover:brightness-110"
                >
                  Deploy Agents
                </a>
                <a
                  href="#agents"
                  className="rounded-md border border-border bg-surface-elevated/50 px-6 py-2.5 font-medium transition-colors hover:bg-surface-elevated"
                >
                  Explore Capabilities
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={neuralImg}
                alt="Neural pathways and logic gates rendered as a technical schematic"
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-[min(2vw,24px)] object-cover shadow-2xl outline outline-1 -outline-offset-1 outline-white/5"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="agents" className="border-y border-hairline bg-surface-sunken py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 space-y-4">
            <h2 className="font-mono text-sm uppercase tracking-widest text-primary">
              Capabilities
            </h2>
            <h3 className="text-balance text-3xl font-medium leading-tight">
              What our AI agents do.
            </h3>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-xl bg-surface-elevated p-8 ring-1 ring-white/5"
              >
                <div className="mb-6 flex size-10 items-center justify-center rounded-md bg-primary/10">
                  {c.mark}
                </div>
                <h4 className="mb-4 text-xl font-medium">{c.title}</h4>
                <p className="max-w-[48ch] text-pretty text-sm text-muted-foreground">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-24 lg:grid-cols-2">
            <div>
              <h2 className="mb-12 text-balance text-3xl font-medium leading-tight">
                The Implementation Protocol
              </h2>
              <div className="space-y-12">
                {protocol.map((p) => (
                  <div key={p.step} className="flex gap-6">
                    <span className="shrink-0 font-mono text-lg text-primary">{p.step}</span>
                    <div>
                      <h5 className="mb-2 text-lg font-medium">{p.title}</h5>
                      <p className="max-w-[48ch] text-pretty text-muted-foreground">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-surface-elevated/40 p-8 ring-1 ring-white/5">
              <div className="space-y-6">
                <div className="rounded border border-border bg-surface-base p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-[10px] opacity-50">
                      AGENT_LOG: INITIATING_TASK
                    </span>
                    <span className="text-[10px] text-primary">ACTIVE</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-surface-elevated">
                    <div className="h-full w-[75%] bg-primary" />
                  </div>
                </div>
                <img
                  src={monitorImg}
                  alt="Agent execution monitor showing a live network of connected nodes"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="aspect-[3/2] w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-white/5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-primary/5 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-balance text-4xl font-semibold leading-tight tracking-tight">
                Ready to engineer your cognitive edge?
              </h2>
              <p className="mb-8 max-w-[48ch] text-pretty text-muted-foreground">
                Speak with our systems architects to discuss how Pro Mind AI can modernize your
                business workflows.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="size-2 rounded-full bg-primary" />
                  <span>Inquiries: contact@promindai.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="size-2 rounded-full bg-primary" />
                  <span>Enterprise-grade security and data governance</span>
                </div>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-6 rounded-2xl bg-surface-elevated p-8 ring-1 ring-white/10"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-muted-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded border border-border bg-surface-base px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-muted-foreground">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded border border-border bg-surface-base px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase text-muted-foreground">
                  Project Objectives
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded border border-border bg-surface-base px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary py-3 font-semibold text-primary-foreground ring-1 ring-primary/50 transition-transform hover:brightness-110 active:scale-[0.98]"
              >
                {sent ? "Inquiry Received" : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-hairline py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="size-4 rounded-sm bg-primary" />
            <span className="font-medium tracking-tight">Pro Mind AI</span>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 PRO MIND AI SYSTEMS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-xs font-medium text-muted-foreground">
            <a href="#agents" className="hover:text-foreground">
              Agents
            </a>
            <a href="#process" className="hover:text-foreground">
              Process
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
