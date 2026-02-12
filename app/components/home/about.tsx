import { useState } from "react";
import { Button } from "@heroui/button";

export function About() {
  const [activeTab, setActiveTab] = useState<"experience" | "approach">(
    "experience",
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2B5D] mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-[#EC820C] mx-auto"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-8 py-3 font-semibold transition-all duration-300 border-b-4 ${
              activeTab === "experience"
                ? "border-[#EC820C] text-[#EC820C]"
                : "border-transparent text-gray-600 hover:text-[#0B2B5D]"
            }`}
          >
            Our Experience
          </button>
          <button
            onClick={() => setActiveTab("approach")}
            className={`px-8 py-3 font-semibold transition-all duration-300 border-b-4 ${
              activeTab === "approach"
                ? "border-[#EC820C] text-[#EC820C]"
                : "border-transparent text-gray-600 hover:text-[#0B2B5D]"
            }`}
          >
            Our Approach
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Media Column */}
          <div className="order-2 md:order-1">
            <div className="relative overflow-hidden">
              {/* Experience Tab Content */}
              <div
                className={`transition-all duration-500 ${
                  activeTab === "experience"
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-full absolute inset-0"
                }`}
              >
                <div className="aspect-video bg-gray-900 rounded-sm overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/q9Q1fOA0818"
                    title="Teknohub Experience"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>

              {/* Approach Tab Content */}
              <div
                className={`transition-all duration-500 ${
                  activeTab === "approach"
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full absolute inset-0"
                }`}
              >
                <div className="aspect-video rounded-sm overflow-hidden border-4 border-[#0B2B5D]">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden min-h-100">
              {/* Experience Tab Content */}
              <div
                className={`transition-all duration-500 ${
                  activeTab === "experience"
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full absolute inset-0"
                }`}
              >
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Teknohub is a trusted Microsoft solutions partner delivering
                    modern, scalable, and automation-driven business
                    applications for organizations across Africa and beyond.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We help businesses streamline operations, enhance
                    productivity, and unlock long-term value through strategic
                    adoption of Microsoft Dynamics 365 Business Central and
                    Power Platform.
                  </p>
                  <div className="bg-[#0B2B5D] text-white p-6 rounded-sm">
                    <h3 className="text-xl font-bold mb-3">
                      Our Core Solutions
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="text-[#EC820C]">▸</span>
                        <span>Microsoft Dynamics 365 Business Central</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#EC820C]">▸</span>
                        <span>Power Platform & Automation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#EC820C]">▸</span>
                        <span>Modern Workplace Solutions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#EC820C]">▸</span>
                        <span>Cloud Services & IT Consultancy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Approach Tab Content */}
              <div
                className={`transition-all duration-500 ${
                  activeTab === "approach"
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-full absolute inset-0"
                }`}
              >
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our service includes comprehensive consultation to identify
                    gaps and opportunities, followed by detailed project plans
                    with clear timelines and milestones.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We provide thorough cost analysis and ensure every
                    implementation is backed by transparent communication and
                    measurable outcomes.
                  </p>
                  <div className="bg-[#0B2B5D] text-white p-8 rounded-sm">
                    <h3 className="text-xl font-bold mb-4">Our Commitment</h3>
                    <p className="leading-relaxed">
                      Delivering solutions built with scalability, usability,
                      and long-term value in mind — ensuring your business gains
                      a competitive advantage today and into the future.
                    </p>
                  </div>
                  <Button
                    as="a"
                    href="/about"
                    className="mt-6 bg-[#EC820C] text-white font-semibold hover:bg-[#d67509] transition-colors"
                    radius="sm"
                    size="lg"
                  >
                    Learn More About Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
