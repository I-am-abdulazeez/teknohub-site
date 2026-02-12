import { useState } from "react";

interface Testimonial {
  id: number;
  company: string;
  preview: string;
  fullText: string;
  author: string;
  role: string;
  date: string;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      company: "Planova",
      preview: "Implementing Business Central and Power Apps ac...",
      fullText:
        "Implementing Business Central and Power Apps across our operations has been transformative. The system has streamlined our workflows and improved our decision-making capabilities significantly.",
      author: "Tomas Malling",
      role: "Owner",
      date: "15/01/2024",
    },
    {
      id: 2,
      company: "Kema Group Limited",
      preview: "Working with Teknohub has been a transformative step f...",
      fullText:
        "Working with Teknohub has been a transformative step for Kema Group. As a diversified conglomerate operating in agribusiness, flour milling, and animal feeds manufacturing across Kenya, we needed a solution that could handle complex intercompany transactions and deliver reliable consolidated financials. Teknohub understood our business, gave us just that.",
      author: "Chris Kioko",
      role: "Head, ICT",
      date: "12/09/2023",
    },
    {
      id: 3,
      company: "Dodai Manufacturing",
      preview: "Business Central, Power Automate, and Power Apps...",
      fullText:
        "Business Central, Power Automate, and Power Apps with Teknohub has been a pivotal step for us. As an e‑mobility manufacturer operating in Ethiopia, we needed a solution that could unify our manufacturing operations, finance, warehouse, and logistics while supporting the realities of a growing production environment. Teknohub delivered and addressed our operational pain points.",
      author: "Evans Obiero",
      role: "Operations",
      date: "28/05/2025",
    },
  ];

  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2B5D] mb-4">
            How's our Service?
          </h2>
          <div className="w-24 h-1 bg-[#EC820C] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white border-2 border-gray-100 rounded-sm p-8 transition-all duration-300 hover:border-[#EC820C] hover:shadow-xl cursor-pointer relative overflow-hidden"
              onMouseEnter={() => setExpandedCard(testimonial.id)}
              onMouseLeave={() => setExpandedCard(null)}
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-2 h-full bg-[#EC820C] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

              {/* Company Name */}
              <h3 className="text-2xl font-bold text-[#0B2B5D] mb-4 transition-colors duration-300 group-hover:text-[#EC820C]">
                {testimonial.company}
              </h3>

              {/* Quote Icon */}
              <div className="text-[#EC820C] mb-4 transform transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Text with smooth transition */}
              <div className="mb-6 relative min-h-30">
                {/* Preview text */}
                <p
                  className={`text-gray-700 leading-relaxed transition-all duration-500 ${
                    expandedCard === testimonial.id
                      ? "opacity-0 transform -translate-y-2 absolute"
                      : "opacity-100 transform translate-y-0"
                  }`}
                >
                  "{testimonial.preview}"
                </p>

                {/* Full text */}
                <p
                  className={`text-gray-700 leading-relaxed transition-all duration-500 ${
                    expandedCard === testimonial.id
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-2 absolute"
                  }`}
                >
                  "{testimonial.fullText}"
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t-2 border-[#EC820C] pt-4 transition-colors duration-300">
                <p className="font-bold text-[#0B2B5D]">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
                <p className="text-gray-500 text-xs mt-2">{testimonial.date}</p>
              </div>

              {/* Hover indicator with fade animation */}
              <div
                className={`absolute bottom-4 right-4 text-[#EC820C] text-sm font-semibold transition-all duration-300 ${
                  expandedCard === testimonial.id
                    ? "opacity-0 transform translate-x-2"
                    : "opacity-100 transform translate-x-0"
                }`}
              >
                Hover to read more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
