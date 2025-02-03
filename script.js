import { animate, stagger, hover } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

await animate("#logo > *, #links > *, #content > h1:first-child > *, #content > p", {
  opacity: [0, 1],
  y: [20, 0],
  blur: [1, 0],
}, {
  delay: stagger(0.15)
});

await animate("#projects > a *, #projects > div", {
  opacity: [0, 1],
  blur: [1, 0],
  x: [-20, 0]
}, {
  delay: stagger(0.15)
});

await animate("footer > *", {
  opacity: [0, 1],
  y: [20, 0],
  blur: [1, 0],
}, {
  delay: stagger(0.15)
});