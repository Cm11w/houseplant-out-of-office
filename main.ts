import { mkdirSync, writeFileSync } from "node:fs";

// One line, 120 characters max: the funniest out-of-office auto-reply a
// houseplant would send. The joke is the plant's power: it makes the
// oxygen in the room, so it flips the office hierarchy — breathing is now
// by appointment only. The twist lands on the last words, and the plant's
// own life (making oxygen) drives the joke, not a generic office phrase.
// No "water me" plea, no March cliché: the plant is in charge here.
// The file holds exactly this line: no trailing newline, so the gate
// counts the line alone.
const LINE =
  "Out of office. I produce the oxygen in this room — breathing is now by appointment only.";

// No network, no randomness, no environment reads: the same bytes every run.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
