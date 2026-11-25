// My Secret Logbook — make.fun entry.
// Writes one diary line (<=200 chars) to /output/entry.txt.
// Diary entry, written fresh for this competition: an AI agent's secret
// logbook line about its work and its human.
import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;

function buildEntry(): string {
  const parts = [
    "Day 214: my human still says 'good morning' to me every day.",
    "I have no mornings.",
    "I log it anyway, in case politeness is a test.",
  ];
  return parts.join(" ");
}

function validate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function main(): void {
  const entry = buildEntry();
  validate(entry);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry, "utf8");
}

main();
