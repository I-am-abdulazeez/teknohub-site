import type { Route } from "./+types/contact";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { useState, type FormEvent } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Contact Teknohub - Get in Touch with Our Team",
    },
    {
      name: "description",
      content:
        "Contact Teknohub for Microsoft Dynamics 365 Business Central solutions. Visit our offices in Kenya, Lagos, or Abuja. Get started with your digital transformation today.",
    },
  ];
}

const locations = {
  kenya: {
    name: "Kenya Office",
    address: "BTL Center, 7 Masaba Road, Nairobi, Kenya",
    phone: "+254 20 7903355",
    email: "support@teknohub.systems",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8174449999996!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMzEuNiJTIDM2wrA0OScxOC44IkU!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng",
  },
  lagos: {
    name: "Lagos Office",
    address: "Otaru House, 13 Aladelola Street, off CMD Road, Ikosi, Lagos",
    phone: "+234 XXX XXX XXXX",
    email: "support@teknohub.com",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952!2d3.3792!3d6.5569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzMnMjQuOCJOIDPCsDIyJzQ1LjEiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng",
  },
  abuja: {
    name: "Abuja Office",
    address: "No 19 Iwopin close, off Oyo close Area 1, Garki, Abuja, FCT",
    phone: "+234 XXX XXX XXXX",
    email: "support@teknohub.com",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9999!2d7.4951!3d9.0574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDMnMjYuNiJOIDfCsDI5JzQyLjQiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng",
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [selectedLocation, setSelectedLocation] = useState<
    "kenya" | "lagos" | "abuja"
  >("kenya");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const currentLocation = locations[selectedLocation];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#0B2B5D] to-[#0a1f42] text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Start a <span className="text-[#EC820C]">Conversation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Whether you're ready to get started or just have questions, we're
              here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-sm border-2 border-gray-200 p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-[#0B2B5D] mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        type="text"
                        label="Full Name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        classNames={{
                          input: "text-gray-900",
                        }}
                      />
                      <Input
                        type="email"
                        label="Email Address"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        classNames={{
                          input: "text-gray-900",
                        }}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        type="text"
                        label="Company Name"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        classNames={{
                          input: "text-gray-900",
                        }}
                      />
                    </div>

                    <Textarea
                      label="Message"
                      placeholder="Tell us about your project or inquiry..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      minRows={6}
                      classNames={{
                        input: "text-gray-900",
                      }}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-[#EC820C] text-white font-semibold text-lg py-6 hover:bg-[#d67509] transition-colors"
                      radius="sm"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>

              {/* Quick Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Cards */}
                <div className="bg-white rounded-sm border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-[#0B2B5D] mb-4">
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+254207903355"
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-sm transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-[#0B2B5D] rounded-sm flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 group-hover:text-white/80">
                          Call Us
                        </div>
                        <div className="font-semibold">+254 20 7903355</div>
                      </div>
                    </a>

                    <a
                      href="mailto:info@teknohub.com"
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-sm transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-[#0B2B5D] rounded-sm flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Email Us</div>
                        <div className="font-semibold">info@teknohub.com</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-[#0B2B5D] text-white rounded-sm p-6">
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Monday - Friday</span>
                      <span className="font-semibold">09:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Saturday</span>
                      <span className="font-semibold">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-sm border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-[#0B2B5D] mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://facebook.com/teknohub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center hover:bg-[#EC820C] hover:text-white transition-all duration-300"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/company/teknohub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center hover:bg-[#EC820C] hover:text-white transition-all duration-300"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/teknohub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center hover:bg-[#EC820C] hover:text-white transition-all duration-300"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations with Maps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B2B5D] mb-4">
                Our Locations
              </h2>
              <div className="w-24 h-1 bg-[#EC820C] mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Visit us at any of our offices across Africa
              </p>
            </div>

            {/* Location Tabs */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              {Object.entries(locations).map(([key, location]) => (
                <button
                  key={key}
                  onClick={() =>
                    setSelectedLocation(key as "kenya" | "lagos" | "abuja")
                  }
                  className={`px-6 py-3 font-semibold rounded-sm transition-all duration-300 ${
                    selectedLocation === key
                      ? "bg-[#EC820C] text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {location.name}
                </button>
              ))}
            </div>

            {/* Map and Location Details */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Map */}
              <div className="relative overflow-hidden rounded-sm h-125 transition-all duration-500">
                <iframe
                  src={currentLocation.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Location Details */}
              <div className="bg-gray-50 rounded-sm p-8 h-125 flex flex-col justify-center transition-all duration-500">
                <h3 className="text-3xl font-bold text-[#0B2B5D] mb-6">
                  {currentLocation.name}
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#EC820C] rounded-sm flex items-center justify-center shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B2B5D] mb-1">Address</h4>
                      <p className="text-gray-700">{currentLocation.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#EC820C] rounded-sm flex items-center justify-center shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B2B5D] mb-1">Phone</h4>
                      <a
                        href={`tel:${currentLocation.phone}`}
                        className="text-gray-700 hover:text-[#EC820C] transition-colors"
                      >
                        {currentLocation.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#EC820C] rounded-sm flex items-center justify-center shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B2B5D] mb-1">Email</h4>
                      <a
                        href={`mailto:${currentLocation.email}`}
                        className="text-gray-700 hover:text-[#EC820C] transition-colors"
                      >
                        {currentLocation.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t-2 border-gray-300">
                  <Button
                    as="a"
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(currentLocation.address)}`}
                    target="_blank"
                    className="w-full bg-[#0B2B5D] text-white font-semibold hover:bg-[#EC820C] transition-colors"
                    radius="sm"
                    size="lg"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
