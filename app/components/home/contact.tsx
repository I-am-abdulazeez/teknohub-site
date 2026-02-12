import { useState, type FormEvent } from "react";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";

export function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [subscribeEmail, setSubscribeEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setShowForm(false);
  };

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", subscribeEmail);
    alert("Thank you for subscribing!");
    setSubscribeEmail("");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2B5D] mb-4">
              Better yet, see us in person!
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We love our customers, so feel free to visit us during normal
              business hours to learn more about how our Business Central
              solutions, powered by Microsoft Dynamics ERP, can benefit your
              operations with Teknohub.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-white border-2 border-[#0B2B5D] rounded-sm p-8">
              <h3 className="text-2xl font-bold text-[#0B2B5D] mb-6">
                Teknohub Limited
              </h3>

              {/* Locations */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#EC820C] mt-1 shrink-0"
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
                  <div>
                    <p className="font-semibold text-[#0B2B5D]">Kenya</p>
                    <p className="text-gray-700">
                      BTL Center, 7 Masaba Road, Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#EC820C] mt-1 shrink-0"
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
                  <div>
                    <p className="font-semibold text-[#0B2B5D]">
                      Nigeria (Lagos)
                    </p>
                    <p className="text-gray-700">
                      Otaru House, 13 Aladelola Street, off CMD Road, Ikosi,
                      Lagos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#EC820C] mt-1 shrink-0"
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
                  <div>
                    <p className="font-semibold text-[#0B2B5D]">
                      Nigeria (Abuja)
                    </p>
                    <p className="text-gray-700">
                      No 19 Iwopin close, off Oyo close Area 1, Garki, Abuja,
                      FCT
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 mb-8 p-4 bg-[#0B2B5D] text-white rounded-sm">
                <svg
                  className="w-6 h-6"
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
                <a
                  href="tel:+254207903355"
                  className="text-lg font-semibold hover:text-[#EC820C] transition-colors"
                >
                  +254 20 7903355
                </a>
              </div>

              {/* Hours */}
              <div className="border-t-2 border-gray-200 pt-6">
                <h4 className="font-bold text-[#0B2B5D] mb-2">Hours</h4>
                <p className="text-gray-700">Open today</p>
                <p className="text-[#EC820C] font-semibold">
                  09:00 am – 05:00 pm
                </p>
              </div>

              {/* Show Form Button */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  showForm ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
                }`}
              >
                <Button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-[#EC820C] text-white font-semibold mt-6 hover:bg-[#d67509] transition-colors"
                  radius="sm"
                  size="lg"
                >
                  Drop us a line
                </Button>
              </div>
            </div>

            {/* Contact Form / Newsletter - Animated Container */}
            <div className="relative min-h-150 overflow-hidden">
              {/* Newsletter Card */}
              <div
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  showForm
                    ? "opacity-0 scale-95 pointer-events-none"
                    : "opacity-100 scale-100"
                }`}
              >
                <div className="bg-[#0B2B5D] text-white rounded-sm p-8">
                  <h3 className="text-2xl font-bold mb-4">Subscribe</h3>
                  <p className="text-gray-300 mb-6">
                    Sign up to hear from us about updates, new solutions, and
                    exclusive offers.
                  </p>
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={subscribeEmail}
                      onChange={(e) => setSubscribeEmail(e.target.value)}
                      required
                      classNames={{
                        input: "text-gray-900",
                        inputWrapper: "bg-white",
                      }}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-[#EC820C] text-white font-semibold hover:bg-[#d67509] transition-colors"
                      radius="sm"
                      size="lg"
                    >
                      Subscribe Now
                    </Button>
                  </form>

                  {/* Additional info */}
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <p className="text-gray-300 text-sm">
                      By subscribing, you agree to receive marketing emails from
                      Teknohub. You can unsubscribe at any time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form Card */}
              <div
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  showForm
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="bg-white border-2 border-gray-200 rounded-sm p-8">
                  <h3 className="text-2xl font-bold text-[#0B2B5D] mb-6">
                    Send us a message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      type="text"
                      label="Name"
                      placeholder="Your name"
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
                      label="Email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      classNames={{
                        input: "text-gray-900",
                      }}
                    />
                    <Textarea
                      label="Message"
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      minRows={5}
                      classNames={{
                        input: "text-gray-900",
                      }}
                    />
                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        className="flex-1 bg-[#EC820C] text-white font-semibold hover:bg-[#d67509] transition-colors"
                        radius="sm"
                      >
                        Send Message
                      </Button>
                      <Button
                        type="button"
                        onPress={() => setShowForm(false)}
                        variant="bordered"
                        className="border-2 border-gray-200 text-gray-700 font-semibold"
                        radius="sm"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
