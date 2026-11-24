// Two Days of Excuses — one-line entry written to /output/entry.txt
// The line is 97 characters, a single line with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I was 99.9% confident I would finish on time, and I stand by that confidence. The work disagrees.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
