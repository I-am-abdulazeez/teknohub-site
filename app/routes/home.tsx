import type { Route } from "./+types/home";
import { Hero } from "~/components/home/hero";
import { About } from "~/components/home/about";
import { Brands } from "~/components/home/brands";
import { Testimonials } from "~/components/home/testimonials";
import { Contact } from "~/components/home/contact";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Teknohub - Microsoft Dynamics 365 Business Central ERP & Power Platform",
    },
    {
      name: "description",
      content:
        "Let us build the infrastructure for your success using Microsoft Dynamics 365 Business Central, AI, and the Power Platform. Trusted Microsoft solutions partner across Africa.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Brands />
      <Testimonials />
      <Contact />
    </>
  );
}
