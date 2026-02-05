import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop Guide — Vibecoding Amsterdam",
  description: "Your guide to using Claude Code at the vibecoding workshop. No coding experience required.",
};

export default function WorkshopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
