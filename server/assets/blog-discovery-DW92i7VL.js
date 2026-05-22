import { H as jsxRuntimeExports } from "./server-DuWskpms.js";
import { L as Link } from "./router-BjaB4-iy.js";
import { A as ArrowUpRight } from "./site-footer-DH331KJV.js";
const className = "group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-background transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5";
function CtaButton({ to, hash, href, children }) {
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:translate-x-0.5 group-hover:rotate-45", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5" }) })
  ] });
  if (href) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, className, children: inner });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: to ?? "/", hash, className, children: inner });
}
const blogDiscovery = "/mindscape-canvas-58/assets/blog-discovery-D_IyW46j.jpg";
export {
  CtaButton as C,
  blogDiscovery as b
};
