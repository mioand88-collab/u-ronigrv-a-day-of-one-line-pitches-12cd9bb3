import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line pitch: convince a friend who has never coded to let an AI
// agent build their first app idea on make.fun.
// Revised: "Just tell" lowers the bar, "you'll get a first working version
// you can try and tweak yourself" gives the concrete, low-risk reason to
// say yes now, and "sitting in your head" keeps it warm and human.
const sentence =
  "Just tell make.fun your app idea in plain words and you'll get a first working version you can try and tweak yourself, so the idea that's been sitting in your head finally gets its shot at being real.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
