import { mkdirSync, writeFileSync } from "node:fs";

// A one-line, one-star review of the entrant's own Monday: the
// review framing names the day, then three concrete Monday details
// pile up — a 9 AM "quick sync" with 14 people and no agenda, and a
// laptop that picks that exact minute to update, reboot, and demand
// a password from 2019.
const lines = [
  "Monday, one star: my 9 AM 'quick sync' had 14 people, no agenda, and my laptop picked that exact minute to update, reboot, and ask for a password I set in 2019.",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-200 characters and exactly one line.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
