"use client";

import { useState, useEffect } from "react";

export default function ReviewMode() {
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [feedback, setFeedback] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsReviewMode(params.has("review"));
  }, []);

  if (!isReviewMode) return null;

  const formatFeedback = () => {
    const timestamp = new Date().toLocaleString();
    const url = window.location.href.replace("?review", "").replace("&review", "");
    return `📝 Feedback for Vibe Community site

${feedback}

---
Page: ${url}
Time: ${timestamp}`;
  };

  const copyFeedback = async () => {
    const formatted = formatFeedback();
    await navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Review mode banner */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-amber-600 text-white text-center py-2 text-sm font-medium">
        👀 Review Mode — Leave feedback below
      </div>

      {/* Spacer for banner */}
      <div className="h-10" />

      {/* Feedback panel */}
      <div
        className={`fixed bottom-4 right-4 z-[100] transition-all ${
          isOpen ? "w-80" : "w-auto"
        }`}
      >
        {isOpen ? (
          <div className="bg-gray-900 border border-amber-600/40 rounded-lg shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-amber-900/20">
              <span className="text-amber-200 font-medium text-sm">
                Leave Feedback
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="What do you think? Any suggestions, typos, or ideas..."
                className="w-full h-32 bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-200 text-sm placeholder-gray-500 focus:outline-none focus:border-amber-600/50 resize-none"
              />
              <div className="mt-3 flex gap-2">
                <button
                  onClick={copyFeedback}
                  disabled={!feedback.trim()}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                    feedback.trim()
                      ? "bg-amber-600 hover:bg-amber-500 text-white"
                      : "bg-gray-700 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {copied ? "✓ Copied!" : "Copy to send"}
                </button>
              </div>
              <p className="mt-3 text-xs text-gray-500 text-center">
                Paste into WhatsApp, Slack, or email
              </p>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-amber-600 hover:bg-amber-500 text-white p-3 rounded-full shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
}
