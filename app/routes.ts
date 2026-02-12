import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/default.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
    route("pricing", "routes/pricing.tsx")
  ])
] satisfies RouteConfig;
