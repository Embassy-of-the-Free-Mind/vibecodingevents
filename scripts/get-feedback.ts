#!/usr/bin/env npx tsx
/**
 * Fetch unresolved feedback from Supabase
 * Usage: npx tsx scripts/get-feedback.ts
 */

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ykhxaecbbxaaqlujuzde.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlraHhhZWNiYnhhYXFsdWp1emRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNjExMDEsImV4cCI6MjA4MDYzNzEwMX0.O2chfnHGQWLOaVSFQ-F6UJMlya9EzPbsUh848SEOPj4";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function getFeedback(showResolved = false) {
  const query = supabase
    .from("feedback")
    .select("*")
    .eq("project", "vibecodingevents")
    .order("created_at", { ascending: false });

  if (!showResolved) {
    query.eq("resolved", false);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching feedback:", error);
    process.exit(1);
  }

  if (!data || data.length === 0) {
    console.log("No unresolved feedback found.");
    return;
  }

  console.log(`\n📝 Found ${data.length} feedback item(s):\n`);
  console.log("=".repeat(60));

  for (const item of data) {
    console.log(`\n#${item.id.slice(0, 8)} — ${item.path || "/"}`);
    console.log(`Element: ${item.element_selector}`);
    if (item.element_text) {
      console.log(`Text: "${item.element_text.slice(0, 50)}..."`);
    }
    console.log(`Comment: ${item.comment}`);
    if (item.screenshot_url) {
      console.log(`Screenshot: ${item.screenshot_url}`);
    }
    console.log(`Created: ${new Date(item.created_at).toLocaleString()}`);
    console.log("-".repeat(60));
  }
}

async function resolveFeedback(id: string) {
  const { error } = await supabase
    .from("feedback")
    .update({ resolved: true, resolved_at: new Date().toISOString() })
    .eq("id", id);

  if (error) {
    console.error("Error resolving feedback:", error);
    return;
  }

  console.log(`✓ Marked feedback ${id} as resolved`);
}

// CLI handling
const args = process.argv.slice(2);

if (args[0] === "resolve" && args[1]) {
  resolveFeedback(args[1]);
} else if (args[0] === "--all") {
  getFeedback(true);
} else {
  getFeedback(false);
}
