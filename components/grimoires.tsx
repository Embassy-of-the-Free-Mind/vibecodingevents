"use client";

// Featured spells organized by category
const SPELL_CATEGORIES = [
  {
    name: "Opening Spells",
    spells: [
      {
        id: "vision-opener",
        title: "The Vision Opener",
        prompt: "I want to [destination]. [Optional context]. Help me think about this.",
        insight: "Leave the 'how' completely open. You're painting a picture, not writing a spec.",
      },
      {
        id: "pickup",
        title: "The Pickup",
        prompt: "Where were we...",
        insight: "Relies on Claude's context. Often produces better continuity than explicit summaries.",
      },
      {
        id: "delegation",
        title: "The Delegation",
        prompt: "Work on the todos for [X].",
        insight: "Hand over the steering wheel. Works when you've built enough shared context.",
      },
    ],
  },
  {
    name: "Refinement Spells",
    spells: [
      {
        id: "vibe-shift",
        title: "The Vibe Shift",
        prompt: "This is too [X]. Make it more [Y].",
        insight: "Use experiential language ('cream paper and ancient wisdom') rather than specs. Four words carry more intent than forty.",
      },
      {
        id: "constraint",
        title: "The Constraint Addition",
        prompt: "Same thing, but [constraint].",
        insight: "Add constraints one at a time, not all at once.",
      },
      {
        id: "domain-check",
        title: "The Domain Check",
        prompt: "What would [expert] think of this?",
        insight: "Invokes domain expertise for review. Scholar pattern.",
      },
    ],
  },
  {
    name: "Repair Spells",
    spells: [
      {
        id: "soft-reset",
        title: "The Soft Reset",
        prompt: "Let's step back. The core goal is [X].",
        insight: "When you've gone down a wrong path, restate the destination.",
      },
      {
        id: "show-dont-tell",
        title: "The Show-Don't-Tell",
        prompt: "Here's an example of what I mean: [paste/link]",
        insight: "When descriptions aren't landing, show instead.",
      },
    ],
  },
];

// Session rhythm
const SESSION_RHYTHM = [
  { step: "Vision", desc: "Paint the destination" },
  { step: "Research", desc: "What do we need to know?" },
  { step: "Build", desc: "Implementation while research is fresh" },
  { step: "Refine", desc: "Small adjustments, not big rewrites" },
  { step: "Delegate", desc: "Hand off when context is rich" },
  { step: "Resume", desc: "Where were we..." },
];

// Real transcript examples
const TRANSCRIPTS = [
  {
    title: "The Aesthete in Action",
    source: "Design Therapy session",
    exchanges: [
      { role: "user", text: "take a look at designtherapy.org. Download all the components and style. Then recreate the site based on contemporary design concepts (do your research) and Julika's current work..." },
      { role: "system", text: "[Claude analyzes, downloads, researches contemporary design]" },
      { role: "user", text: "drop the instagram and email links since they don't work." },
      { role: "user", text: "too busy. simplify." },
      { role: "user", text: "the text is hard to read on the photo" },
    ],
    insight: "The opener was ambitious and ambiguous. The refinements were terse and vibes-based. 'Too busy. Simplify.' Four words that carry intent.",
  },
  {
    title: "The Scholar in Action",
    source: "Source Library",
    exchanges: [
      { role: "user", text: "on the reading/editing page, if the image is long, it cannot be scrolled. I'd like to be able to scroll the image if it is too long" },
      { role: "user", text: "reading mode needs to render all the markdown. By reading mode, I mean the button that says read on the front page" },
      { role: "user", text: "how's our seo?" },
    ],
    insight: "These aren't grand prompts. They're small, specific observations from someone using the thing. The Scholar pattern is iterative refinement over deep sessions, not clever prompting.",
  },
];

// Field notes insights
const FIELD_NOTES = [
  {
    title: "Research + Implementation Collapse",
    insight: "Learning and building happen simultaneously, not sequentially. Initial research immediately feeds into development.",
  },
  {
    title: "Generative Project Chains",
    insight: "Projects spawn related projects (Minibooks → lilbookies → funbookies). Expanding rather than linear workflows.",
  },
  {
    title: "The Power of Brevity",
    insight: "A complete prompt can be as short as 'too busy. simplify.'—the surrounding context carries most of the weight.",
  },
  {
    title: "Delegation Language",
    insight: "Productive phrases: 'do your research,' 'help me think through,' 'can you figure out.' State problems, not solutions.",
  },
  {
    title: "Manual Quality Control Persists",
    insight: "Despite delegation, humans maintain gatekeeping on coherence, emotional arc, and contextual alignment.",
  },
];

// Resources
const RESOURCES = [
  {
    title: "Prompt Archaeology",
    desc: "The full analysis: 10,497 prompts across 68 days",
    url: "https://dereklomas.me/projects/promptarchaeology",
    type: "Data",
  },
  {
    title: "Field Notes",
    desc: "Observations and patterns from daily practice",
    url: "https://dereklomas.me/projects/promptarchaeologyfield-notes.html",
    type: "Notes",
  },
  {
    title: "The Grimoire",
    desc: "Full pattern language with examples",
    url: "https://dereklomas.me/projects/promptarchaeologygrimoire.html",
    type: "Guide",
  },
  {
    title: "Grimoires GitHub",
    desc: "Open-source prompt collection",
    url: "https://github.com/JDerekLomas/grimoires",
    type: "Repo",
  },
];

interface GrimoiresProps {
  hideHeader?: boolean;
}

export default function Grimoires({ hideHeader = false }: GrimoiresProps) {
  return (
    <section id="grimoires" className="relative py-20 manuscript-texture">
      <div className="corner-emblem top-right hidden lg:block" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        {!hideHeader && (
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-amber-400/60 font-mono text-sm tracking-widest mb-3">
              PATTERN LANGUAGE
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold italic text-gray-100 mb-4">
              The Promptcraft Grimoire
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A collection of patterns for working with AI. Gathered from practitioners,
              tested across thousands of sessions.
            </p>
          </div>
        )}

        {/* The First Principle */}
        <div
          className="mb-16 max-w-3xl mx-auto text-center"
          data-aos="fade-up"
        >
          <div className="aged-paper rounded-lg p-8 border border-amber-900/20 bg-gray-900/50">
            <h3 className="font-playfair text-xl text-amber-200/90 italic mb-4">
              The First Principle: Strategic Ambiguity
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The most common mistake is over-specification. Precise prompts produce brittle results.
              The art is knowing what to leave open.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Claude fills ambiguity with competence. Your job is to create the right-shaped space for that competence to flow into.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-amber-300/70">
              <span>Describe the destination, not the route</span>
              <span className="text-amber-500/30">·</span>
              <span>Name the vibe, not the pixels</span>
              <span className="text-amber-500/30">·</span>
              <span>Specify constraints, not implementations</span>
            </div>
          </div>
        </div>

        {/* The Spellbook - organized by category */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-center font-playfair text-2xl text-gray-100 mb-8">
            The Spellbook
          </h3>
          <div className="space-y-8">
            {SPELL_CATEGORIES.map((category) => (
              <div key={category.name}>
                <h4 className="text-amber-400/70 text-sm uppercase tracking-wide mb-4 font-mono">
                  {category.name}
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {category.spells.map((spell) => (
                    <div
                      key={spell.id}
                      className="grimoire-card p-5 hover:border-amber-600/30 transition-colors"
                    >
                      <h5 className="font-playfair text-lg text-gray-100 mb-3">
                        {spell.title}
                      </h5>
                      <div className="bg-gray-800/50 rounded p-3 mb-3 font-mono text-sm text-amber-100/80">
                        {spell.prompt}
                      </div>
                      <p className="text-gray-400 text-sm">{spell.insight}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Session Rhythm */}
        <div className="mb-16 max-w-3xl mx-auto" data-aos="fade-up">
          <h3 className="text-center font-playfair text-2xl text-gray-100 mb-8">
            The Session Rhythm
          </h3>
          <p className="text-center text-gray-400 text-sm mb-6">
            From 10,497 prompts across 68 days, a rhythm emerges:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {SESSION_RHYTHM.map((item, i) => (
              <div key={item.step} className="flex items-center">
                <div className="bg-gray-800/50 border border-amber-900/30 rounded-lg px-4 py-2 text-center">
                  <div className="text-amber-200/90 font-playfair">{item.step}</div>
                  <div className="text-gray-500 text-xs">{item.desc}</div>
                </div>
                {i < SESSION_RHYTHM.length - 1 && (
                  <span className="text-amber-500/40 mx-2">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Real Transcripts */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-center font-playfair text-2xl text-gray-100 mb-8">
            Transcripts from the Field
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {TRANSCRIPTS.map((transcript) => (
              <div key={transcript.title} className="grimoire-card p-6">
                <h4 className="font-playfair text-lg text-gray-100 mb-1">
                  {transcript.title}
                </h4>
                <p className="text-amber-400/60 text-xs italic mb-4">
                  {transcript.source}
                </p>
                <div className="space-y-2 mb-4">
                  {transcript.exchanges.map((exchange, i) => (
                    <div
                      key={i}
                      className={`text-sm rounded p-2 ${
                        exchange.role === "user"
                          ? "bg-amber-900/20 text-amber-100/80 font-mono"
                          : "bg-gray-800/30 text-gray-400 italic"
                      }`}
                    >
                      {exchange.text}
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-sm border-t border-amber-900/20 pt-4">
                  {transcript.insight}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Field Notes */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-center font-playfair text-2xl text-gray-100 mb-8">
            Field Notes
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FIELD_NOTES.map((note) => (
              <div key={note.title} className="grimoire-card p-5">
                <h4 className="font-playfair text-base text-amber-200/90 mb-2">
                  {note.title}
                </h4>
                <p className="text-gray-400 text-sm">{note.insight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-center font-playfair text-2xl text-gray-100 mb-8">
            Resources
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESOURCES.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grimoire-card p-5 hover:border-amber-600/30 transition-colors group"
              >
                <span className="text-[10px] text-amber-400/50 uppercase tracking-wide">
                  {resource.type}
                </span>
                <h4 className="font-playfair text-lg text-gray-100 group-hover:text-amber-100 transition-colors">
                  {resource.title}
                </h4>
                <p className="text-gray-500 text-sm mt-1">{resource.desc}</p>
                <span className="inline-block mt-3 text-amber-300/60 text-sm group-hover:text-amber-300 transition-colors">
                  View &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Anti-patterns callout */}
        <div
          className="mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          <div className="border border-red-900/20 bg-red-950/10 rounded-lg p-6">
            <h4 className="font-playfair text-lg text-red-200/80 mb-4">
              Anti-Patterns
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="text-red-300/70 font-medium">Over-specification</span>
                <p className="text-gray-400 mt-1">
                  &ldquo;Create a React component with TypeScript using Tailwind CSS that has a blue background (#3B82F6) and padding of 16px...&rdquo;
                </p>
                <p className="text-gray-500 text-xs mt-1">The more you specify, the less room for Claude to apply judgment.</p>
              </li>
              <li>
                <span className="text-red-300/70 font-medium">Premature architecture</span>
                <p className="text-gray-400 mt-1">
                  &ldquo;First, let&apos;s plan the folder structure and database schema...&rdquo;
                </p>
                <p className="text-gray-500 text-xs mt-1">Start with the thing you actually want. Structure emerges.</p>
              </li>
              <li>
                <span className="text-red-300/70 font-medium">Research/build separation</span>
                <p className="text-gray-400 mt-1">
                  &ldquo;First research everything, then we&apos;ll build.&rdquo;
                </p>
                <p className="text-gray-500 text-xs mt-1">Blend them. Context accumulated during research makes building better.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* The Paradox */}
        <div
          className="mb-12 max-w-2xl mx-auto text-center"
          data-aos="fade-up"
        >
          <div className="aged-paper rounded-lg p-8 border border-amber-900/20 bg-gray-900/50">
            <h4 className="font-playfair text-xl text-amber-200/90 italic mb-4">
              The Paradox
            </h4>
            <p className="text-gray-300 mb-4">
              The best prompts don&apos;t look like prompts at all. They look like someone
              thinking out loud, pointing at things, expressing preferences.
            </p>
            <p className="text-amber-300/70 font-mono text-sm mb-4">
              10,497 prompts. The most common openers: &ldquo;this&rdquo;, &ldquo;i&rdquo;, &ldquo;yes&rdquo;.
            </p>
            <p className="text-gray-500 text-sm italic">
              Not elaborate instructions. Just... presence.
            </p>
          </div>
        </div>

        {/* Contribute CTA */}
        <div
          className="text-center"
          data-aos="fade-up"
        >
          <p className="text-amber-200/80 font-playfair text-lg italic mb-2">
            &ldquo;Share your working, that others may learn&rdquo;
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Generated from prompt archaeology of 68 days, 53 projects, 370 sessions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/JDerekLomas/grimoires/issues/new?template=spell.yml"
              className="inline-flex items-center gap-2 px-5 py-2 bg-amber-700/80 hover:bg-amber-600/80 text-white rounded transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Contribute a spell
            </a>
            <a
              href="https://github.com/JDerekLomas/grimoires"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 border border-amber-600/40 text-amber-100/80 hover:border-amber-500/60 hover:text-white rounded transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
