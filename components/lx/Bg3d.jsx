// Decorative 3D backdrop for the inner-page heroes: a perspective floor grid, glossy
// spheres, an orbit ring and a slowly turning glass cube. Pure CSS (styles/lumora-site.css),
// no images or WebGL, so it costs nothing on LCP. Pointer parallax is added by
// lib/lumora/runtime.js on devices with a mouse; reduced-motion visitors get it static.
export default function Bg3d() {
  return (
    <div className="bg3d" aria-hidden="true">
      <div className="bg3d__floor" />
      <span className="bg3d__s bg3d__s--ring"><span className="bg3d__ring"><i /></span></span>
      <span className="bg3d__s bg3d__s--pearl" />
      <span className="bg3d__s bg3d__s--copper" />
      <span className="bg3d__s bg3d__s--ink" />
      <span className="bg3d__s bg3d__s--cube"><span className="bg3d__cube"><i /><i /><i /><i /><i /><i /></span></span>
    </div>
  )
}
