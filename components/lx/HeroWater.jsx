// Water surface for the dark inner-page heroes. The canvas stays invisible until
// lib/lumora/runtime.js starts the WebGL ripple simulation on it (pointer-driven, same
// technique as the Designer Trends hero). Without WebGL, or with reduced motion, the
// plain dark CSS background shows instead.
export default function HeroWater() {
  return <canvas className="water" aria-hidden="true" />
}
