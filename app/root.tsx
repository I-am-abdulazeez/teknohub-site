import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Provider } from "./provider";
import { NotFound } from "./components/not-found";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap",
  },
  { rel: "icon", type: "image/png", href: "/logo-only.png" },
  { rel: "apple-touch-icon", href: "/logo-only.png" },
];

export function meta() {
  return [
    {
      title:
        "Teknohub - Microsoft Solutions Partner | Dynamics 365 Business Central",
    },
    {
      name: "description",
      content:
        "Teknohub is a trusted Microsoft solutions partner delivering modern, scalable, and automation-driven business applications, including Microsoft Dynamics 365 Business Central, for organizations across Africa and beyond.",
    },
    {
      name: "keywords",
      content:
        "Microsoft Dynamics 365, Business Central, ERP Solutions, Microsoft Partner, Business Applications, Africa, Automation, Cloud Solutions",
    },
    { name: "author", content: "Teknohub" },
    { name: "theme-color", content: "#0B2B5D" },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Teknohub - Microsoft Solutions Partner" },
    {
      property: "og:description",
      content:
        "Delivering modern, scalable, and automation-driven business applications with Microsoft Dynamics 365 Business Central.",
    },
    { property: "og:image", content: "/logo-only.png" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Teknohub - Microsoft Solutions Partner",
    },
    {
      name: "twitter:description",
      content:
        "Delivering modern, scalable, and automation-driven business applications with Microsoft Dynamics 365 Business Central.",
    },
    { name: "twitter:image", content: "/logo-only.png" },

    // Additional SEO
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Provider>{children}</Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  // Handle 404 errors with custom NotFound component
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }

  // Handle other errors
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = `Error ${error.status}`;
    details = error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0B2B5D] to-[#0a1f42] p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg p-8">
        <h1 className="text-4xl font-bold text-[#0B2B5D] mb-4">{message}</h1>
        <p className="text-gray-700 text-lg mb-6">{details}</p>
        {stack && (
          <div className="bg-gray-100 rounded p-4 overflow-x-auto">
            <pre className="text-sm text-gray-800">
              <code>{stack}</code>
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}
