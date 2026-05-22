import { P as reactExports, H as jsxRuntimeExports } from "./server-DuWskpms.js";
import { L as Link } from "./router-BjaB4-iy.js";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$3 = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$2);
const __iconNode$1 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode);
const links = [
  { to: "/", label: "ABOUT US", hash: "about" },
  { to: "/", label: "SERVICES", hash: "services" },
  { to: "/", label: "BLOGS", hash: "blogs" },
  { to: "/", label: "CONTACT US", hash: "contact" }
];
function SiteNav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-30 border-b border-foreground/15 bg-background/85 px-4 py-3 backdrop-blur-md md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1400px] items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/",
        className: "flex items-center gap-2 font-display text-lg font-bold tracking-tight text-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background", children: "HM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "HisMind" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden text-primary sm:inline", children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden text-muted-foreground sm:inline", children: "Creatives" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 rounded-full border border-foreground/15 bg-card/70 p-1 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: l.to,
        hash: l.hash,
        className: "rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:bg-foreground hover:text-background",
        children: l.label
      },
      l.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        hash: "contact",
        className: "rounded-full bg-foreground px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-background transition-transform hover:-translate-y-0.5",
        children: "Let's Talk"
      }
    )
  ] }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-8 border-t border-foreground/15 bg-foreground text-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-[1400px] gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-4xl font-bold leading-none md:text-5xl", children: [
          "HisMind",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-sm text-sm text-background/70", children: "A digital strategy and creative communications studio. We build brands that get found, remembered and chosen." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-[0.25em] text-background/50", children: "Reach" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:creativeshismind@gmail.com", className: "mt-3 block break-all text-base text-background hover:text-primary", children: "creativeshismind@gmail.com" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-background/70", children: "(+254) 140-276-578" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-[0.25em] text-background/50", children: "Follow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex items-center gap-2", children: [Linkedin, Facebook, Instagram].map((Icon2, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "social", className: "group flex h-10 w-10 items-center justify-center rounded-full border border-background/30 hover:border-primary hover:bg-primary hover:text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-4 w-4" }) }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-background hover:text-primary", children: [
          "Start a project ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-background/15 px-4 py-5 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-2 text-[10px] uppercase tracking-[0.22em] text-background/50 md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " HisMind Creatives — All rights reserved"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Made with intent · Nairobi" })
    ] }) })
  ] });
}
export {
  ArrowUpRight as A,
  Facebook as F,
  Instagram as I,
  Linkedin as L,
  SiteFooter as S,
  SiteNav as a,
  createLucideIcon as c
};
