"use client";

import { useState } from "react";
import Link from "next/link";

const setupSteps = [
  {
    step: 1,
    title: "Get a Claude subscription",
    desc: "Start with Claude Pro at $20/month. The API can get expensive fast - subscription is way more predictable. You can upgrade to Max ($100/month) later if you need more.",
    link: "https://claude.ai/upgrade",
    linkText: "Subscribe to Claude Pro",
  },
  {
    step: 2,
    title: "Sign up for GitHub",
    desc: "You'll need this for version control and deploying your projects. It's free. Claude Code will ask to connect - just say yes.",
    link: "https://github.com/signup",
    linkText: "Create GitHub account",
  },
  {
    step: 3,
    title: "Sign up for Vercel",
    desc: "This is how your projects go live on the internet. Free tier is generous. Sign up with your GitHub account to make deployment seamless.",
    link: "https://vercel.com/signup",
    linkText: "Create Vercel account",
  },
  {
    step: 4,
    title: "Install Node.js",
    desc: "Claude Code runs on Node. Download the LTS version (20+). If you're on Mac, you probably already have it.",
    link: "https://nodejs.org/",
    linkText: "Download Node.js",
  },
  {
    step: 5,
    title: "Install Claude Code",
    desc: "Open your terminal and run: npm install -g @anthropic-ai/claude-code. Then run 'claude' and log in with your Claude account.",
    code: "npm install -g @anthropic-ai/claude-code",
  },
  {
    step: 6,
    title: "Let Claude Code connect everything",
    desc: "When Claude Code asks to connect to GitHub or run commands, say yes. It will set up the integrations for you. Trust the process.",
  },
];

const topics = [
  {
    id: "getting-started",
    title: "Getting Started",
    desc: "Install Claude Code and start building in minutes",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    content: {
      intro: "Claude Code is an agentic coding tool that lives in your terminal. It understands your codebase, can edit files, run commands, and help you build software faster.",
      points: [
        "Works with any language, framework, or codebase",
        "Runs in your terminal alongside your existing tools",
        "Understands context from your project structure",
      ],
      links: [
        { label: "Installation Guide", url: "https://docs.anthropic.com/en/docs/claude-code/getting-started" },
        { label: "Quick Start", url: "https://docs.anthropic.com/en/docs/claude-code/getting-started#1-initialize-your-project" },
      ],
      code: `# Install Claude Code
npm install -g @anthropic-ai/claude-code

# Start a session in your project
cd your-project
claude`,
    },
  },
  {
    id: "claude-md",
    title: "CLAUDE.md",
    desc: "Teach Claude about your project with persistent instructions",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    content: {
      intro: "CLAUDE.md is a special file that Claude reads at the start of every session. Include code style, workflow rules, and project conventions that Claude can't infer from code alone.",
      points: [
        "Lives at the root of your project or in ~/.claude/",
        "Survives across sessions and conversations",
        "Can import other files with @path/to/file syntax",
      ],
      links: [
        { label: "Memory Guide", url: "https://docs.anthropic.com/en/docs/claude-code/memory" },
      ],
      code: `# CLAUDE.md example

## Code Style
- Use TypeScript strict mode
- Prefer functional components

## Commands
- \`npm run dev\` - start dev server
- \`npm test\` - run tests

## Architecture
- API routes in /app/api
- Components in /components`,
    },
  },
  {
    id: "skills",
    title: "Skills",
    desc: "Extend Claude with reusable workflows and domain knowledge",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    content: {
      intro: "Skills are reusable instruction sets that extend Claude's capabilities. Create a SKILL.md file with YAML frontmatter and markdown instructions, invoke with /skill-name.",
      points: [
        "Auto-discovered from .claude/skills/ or ~/.claude/skills/",
        "Can restrict which tools Claude uses",
        "Support arguments and dynamic templates",
      ],
      links: [
        { label: "Skills Documentation", url: "https://docs.anthropic.com/en/docs/claude-code/skills" },
      ],
      code: `# ~/.claude/skills/deploy/SKILL.md
---
description: Deploy to production
allowed-tools: Bash, Read
---

Deploy the current branch to production:
1. Run tests first
2. Build the project
3. Deploy with \`vercel --prod\``,
    },
  },
  {
    id: "mcp",
    title: "MCP Servers",
    desc: "Connect Claude to external tools, databases, and APIs",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    content: {
      intro: "Model Context Protocol (MCP) is an open standard that connects Claude to external services. Query databases, integrate with GitHub, check monitoring data, and more.",
      points: [
        "Hundreds of integrations: GitHub, Postgres, Slack, Notion, etc.",
        "Configure per-project or globally",
        "Secure OAuth authentication for remote servers",
      ],
      links: [
        { label: "MCP Guide", url: "https://docs.anthropic.com/en/docs/claude-code/mcp" },
        { label: "MCP Registry", url: "https://github.com/modelcontextprotocol/servers" },
      ],
      code: `# Add a GitHub MCP server
claude mcp add github -- npx @anthropic-ai/mcp-server-github

# Add a Postgres server
claude mcp add db -- npx @anthropic-ai/mcp-server-postgres

# List configured servers
claude mcp list`,
    },
  },
  {
    id: "hooks",
    title: "Hooks",
    desc: "Automate actions at specific points in Claude's workflow",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    content: {
      intro: "Hooks are shell scripts that execute at specific points in Claude's lifecycle. Auto-format code after edits, validate commands before execution, send notifications, and more.",
      points: [
        "Events: PreToolUse, PostToolUse, Stop, SessionStart, etc.",
        "Can block actions or modify behavior",
        "Configure in settings.json or interactively with /hooks",
      ],
      links: [
        { label: "Hooks Guide", url: "https://docs.anthropic.com/en/docs/claude-code/hooks" },
      ],
      code: `// .claude/settings.json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit",
      "hooks": [{
        "type": "command",
        "command": "npx prettier --write $FILE_PATH"
      }]
    }]
  }
}`,
    },
  },
  {
    id: "subagents",
    title: "Subagents",
    desc: "Delegate tasks to specialized AI assistants",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    content: {
      intro: "Subagents are specialized AI assistants that run in isolated contexts. Claude automatically delegates to them when appropriate, or you can invoke them directly.",
      points: [
        "Built-in: Explore (fast research), Plan (architecture), Bash (commands)",
        "Create custom agents with specific tools and prompts",
        "Run in parallel for complex investigations",
      ],
      links: [
        { label: "Subagents Guide", url: "https://docs.anthropic.com/en/docs/claude-code/sub-agents" },
      ],
      code: `# Create a custom subagent
/agents

# Or define in .claude/agents/reviewer.md
---
name: code-reviewer
description: Reviews code for quality
tools: Read, Grep, Glob
model: sonnet
---

You are a senior code reviewer...`,
    },
  },
  {
    id: "ralph-wiggum",
    title: "Ralph Wiggum Loops",
    desc: "Iterative refinement until completion",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
    content: {
      intro: "Ralph Wiggum loops are a technique for iterative, self-correcting development. Claude works on a task, and when it tries to exit, a Stop hook feeds the same prompt back until a completion signal is detected.",
      points: [
        "Define a \"completion promise\" phrase that signals done",
        "Always set --max-iterations as a safety limit",
        "Great for multi-pass refinement workflows",
      ],
      links: [
        { label: "Ralph Wiggum Plugin", url: "https://github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum" },
      ],
      code: `# The loop continues until Claude says "TASK COMPLETE"
# or hits max iterations

# Install the plugin
claude plugin install ralph-wiggum

# Run with completion promise
claude --ralph-wiggum --max-iterations 10`,
    },
  },
  {
    id: "commands",
    title: "Slash Commands",
    desc: "Built-in commands for common actions",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
    content: {
      intro: "Slash commands provide quick access to common actions. Type / to see available commands.",
      points: [
        "/clear - Fresh start, wipe conversation",
        "/compact - Summarize to save context",
        "/rewind - Restore previous checkpoint",
        "/mcp - Manage MCP servers",
      ],
      links: [
        { label: "CLI Reference", url: "https://docs.anthropic.com/en/docs/claude-code/cli-reference" },
      ],
      code: `# Common commands
/help          # Show all commands
/clear         # Start fresh
/compact       # Compress context
/rewind        # Undo to checkpoint
/cost          # Show token usage
/memory        # Edit CLAUDE.md
/config        # Settings UI`,
    },
  },
  {
    id: "ide",
    title: "IDE Integration",
    desc: "Use Claude Code in VS Code, Cursor, JetBrains, and more",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    content: {
      intro: "Claude Code works in your terminal but integrates beautifully with IDEs. VS Code extension, JetBrains plugin, and Cursor compatibility.",
      points: [
        "VS Code: Native graphical interface, diff view, file mentions",
        "JetBrains: IntelliJ, PyCharm, WebStorm, etc.",
        "Cursor: Works alongside for best of both worlds",
      ],
      links: [
        { label: "VS Code Guide", url: "https://docs.anthropic.com/en/docs/claude-code/ide-integrations/vs-code" },
        { label: "JetBrains Guide", url: "https://docs.anthropic.com/en/docs/claude-code/ide-integrations/jetbrains" },
      ],
      code: `# VS Code
# Install "Claude Code" from Extensions marketplace

# JetBrains
# Install from JetBrains Marketplace

# Cursor
# Claude Code CLI works in Cursor's terminal`,
    },
  },
  {
    id: "agent-sdk",
    title: "Agent SDK",
    desc: "Build custom AI agents programmatically",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    content: {
      intro: "The Claude Agent SDK lets you build custom AI agents in Python or TypeScript. Same powerful agentic loop that powers Claude Code, available programmatically.",
      points: [
        "Python and TypeScript/Node.js support",
        "Full tool ecosystem: file ops, bash, web search, MCP",
        "Session persistence, streaming, structured outputs",
      ],
      links: [
        { label: "Agent SDK Docs", url: "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/sdk" },
        { label: "Python Quickstart", url: "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/sdk#python" },
      ],
      code: `# Python
pip install claude-code-sdk

from claude_code_sdk import Agent

agent = Agent()
result = await agent.run("Fix the bug in auth.py")

# TypeScript
npm install @anthropic-ai/claude-agent-sdk`,
    },
  },
];

const bestPractices = [
  { tip: "Give Claude a way to verify", desc: "Include tests or expected outputs so Claude can self-check" },
  { tip: "Explore first, then code", desc: "Use Plan Mode to research before implementing" },
  { tip: "Be specific with context", desc: "Reference files, mention constraints, point to examples" },
  { tip: "Manage context aggressively", desc: "/clear between tasks, use subagents for exploration" },
  { tip: "Rewind frequently", desc: "Every action creates a checkpoint you can restore" },
];

export default function LearnPage() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const activeContent = topics.find((t) => t.id === activeTopic)?.content;

  return (
    <main className="relative flex grow flex-col">
      {/* Hero */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-amber-300/60 hover:text-amber-300 transition mb-6 text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to event
            </Link>
            <h1 className="font-playfair text-4xl font-semibold italic text-gray-100 md:text-5xl mb-4">
              Learn Claude Code
            </h1>
            <p className="text-lg text-amber-100/75 max-w-2xl mx-auto">
              Everything you need to become productive with Claude Code.
              From basics to advanced workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl bg-gray-900/50 border border-gray-800 p-6 md:p-8">
            <h2 className="font-nacelle text-lg font-semibold text-gray-100 mb-1">
              Get Set Up
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Do this before the workshop. Takes about 10 minutes.
            </p>
            <div className="space-y-4">
              {setupSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-4 rounded-xl bg-gray-950/50"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-600 text-white text-sm font-bold">
                    {item.step}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-medium text-gray-100">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                    {item.code && (
                      <code className="mt-2 block bg-gray-900 text-amber-300 text-sm px-3 py-2 rounded font-mono">
                        {item.code}
                      </code>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-sm text-amber-400 hover:text-amber-300"
                      >
                        {item.linkText}
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-playfair text-2xl font-semibold italic text-gray-100 text-center mb-8">
            Core Concepts
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(activeTopic === topic.id ? null : topic.id)}
                className={`text-left p-6 rounded-2xl border transition-all ${
                  activeTopic === topic.id
                    ? "bg-amber-900/30 border-amber-500/50"
                    : "bg-gray-900/50 border-gray-800 hover:border-amber-500/30 hover:bg-gray-900/70"
                }`}
              >
                <div className={`mb-3 ${activeTopic === topic.id ? "text-amber-400" : "text-amber-500/70"}`}>
                  {topic.icon}
                </div>
                <h3 className="font-nacelle text-lg font-semibold text-gray-100 mb-1">
                  {topic.title}
                </h3>
                <p className="text-sm text-gray-400">{topic.desc}</p>
              </button>
            ))}
          </div>

          {/* Expanded Content */}
          {activeContent && (
            <div className="mt-8 p-8 rounded-2xl bg-gray-900/70 border border-gray-800">
              <p className="text-amber-100/80 mb-6">{activeContent.intro}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-amber-400 uppercase tracking-wide mb-3">
                    Key Points
                  </h4>
                  <ul className="space-y-2">
                    {activeContent.points.map((point, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-300">
                        <span className="text-amber-500 mt-1">-</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-sm font-medium text-amber-400 uppercase tracking-wide mb-3 mt-6">
                    Documentation
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeContent.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-900/30 text-amber-300 text-sm hover:bg-amber-900/50 transition"
                      >
                        {link.label}
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-amber-400 uppercase tracking-wide mb-3">
                    Example
                  </h4>
                  <pre className="p-4 rounded-lg bg-gray-950 text-sm text-gray-300 overflow-x-auto font-mono">
                    {activeContent.code}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Best Practices */}
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="border-t border-gray-800 pt-12">
            <h2 className="font-playfair text-2xl font-semibold italic text-gray-100 text-center mb-8">
              Best Practices
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {bestPractices.map((practice, i) => (
                <div key={i} className="p-4 rounded-xl bg-gray-900/30 border border-gray-800/50">
                  <p className="text-amber-300 font-medium text-sm mb-1">{practice.tip}</p>
                  <p className="text-xs text-gray-500">{practice.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="border-t border-gray-800 pt-12 text-center">
            <h2 className="font-playfair text-2xl font-semibold italic text-gray-100 mb-4">
              More Resources
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://docs.anthropic.com/en/docs/claude-code"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-600 text-white hover:bg-amber-500 transition"
              >
                Official Documentation
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <a
                href="https://github.com/anthropics/claude-code"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition"
              >
                GitHub
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://discord.gg/anthropic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition"
              >
                Discord Community
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
