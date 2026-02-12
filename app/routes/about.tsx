import type { Route } from "./+types/about";

import { Link } from "react-router";
import { Button } from "@heroui/button";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "About Teknohub - Microsoft Solutions Partner in Africa",
    },
    {
      name: "description",
      content:
        "Learn about Teknohub, a trusted Microsoft solutions partner delivering modern, scalable business applications across Africa. Our story, values, and commitment to excellence.",
    },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#0B2B5D] to-[#0a1f42] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Empowering Business Through
              <span className="text-[#EC820C]"> Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We're more than a Microsoft partner — we're your strategic ally in
              digital transformation, helping organizations across Africa unlock
              their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0B2B5D] mb-6">
                  Our Story
                </h2>
                <div className="w-24 h-1 bg-[#EC820C] mb-6"></div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Teknohub was founded on a simple belief: technology should
                  empower people, not complicate their work. We've grown from a
                  small team of Microsoft enthusiasts to a trusted solutions
                  partner serving organizations across Africa and beyond.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our journey has been driven by our commitment to understanding
                  the unique challenges faced by African businesses and
                  delivering solutions that are not just technically sound, but
                  culturally relevant and practically applicable.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, we're proud to be at the forefront of digital
                  transformation in Africa, helping businesses streamline
                  operations, enhance productivity, and achieve sustainable
                  growth through Microsoft technologies.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-sm overflow-hidden border-4 border-[#0B2B5D]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#EC820C] text-white p-6 rounded-sm shadow-xl">
                  <div className="text-4xl font-bold">10+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-white p-8 rounded-sm border-l-4 border-[#EC820C] hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#EC820C] rounded-sm flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0B2B5D] mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To empower African businesses with world-class Microsoft
                  solutions that drive efficiency, innovation, and sustainable
                  growth. We deliver technology that works for you, not the
                  other way around.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 rounded-sm border-l-4 border-[#0B2B5D] hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#0B2B5D] rounded-sm flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0B2B5D] mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To be Africa's most trusted Microsoft solutions partner,
                  recognized for our deep expertise, innovative approach, and
                  unwavering commitment to client success. We envision a future
                  where every business can leverage technology to thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B2B5D] mb-4">
                Our Core Values
              </h2>
              <div className="w-24 h-1 bg-[#EC820C] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  ),
                  title: "Excellence",
                  description:
                    "We pursue excellence in everything we do, from solution design to customer support.",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  ),
                  title: "Collaboration",
                  description:
                    "We work closely with clients as partners, ensuring solutions align with their business goals.",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  ),
                  title: "Innovation",
                  description:
                    "We stay at the cutting edge of Microsoft technologies to deliver forward-thinking solutions.",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                  title: "Reliability",
                  description:
                    "Our clients count on us to deliver on time, every time, with consistent quality.",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  ),
                  title: "Integrity",
                  description:
                    "We operate with transparency, honesty, and ethical practices in all our engagements.",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                  title: "Impact",
                  description:
                    "We measure success by the positive impact we create for our clients and communities.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 p-8 rounded-sm transition-all duration-300 hover:shadow-sm"
                >
                  <div className="w-14 h-14 bg-[#EC820C] rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {value.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B2B5D] mb-3 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed transition-colors">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-20 bg-[#0B2B5D] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Clients Served" },
                { number: "50+", label: "Successful Projects" },
                { number: "15+", label: "Microsoft Certifications" },
                { number: "3", label: "Countries" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#EC820C] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-[#EC820C] to-[#d67509] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how our Microsoft solutions can help you achieve
              your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                to="/contact"
                className="bg-white text-[#EC820C] font-semibold px-8 hover:bg-gray-100 transition-colors"
                radius="sm"
                size="lg"
              >
                Get in Touch
              </Button>
              <Button
                as={Link}
                to="/pricing"
                variant="bordered"
                className="border-2 border-white text-white font-semibold px-8 hover:bg-white/10 transition-colors"
                radius="sm"
                size="lg"
              >
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
