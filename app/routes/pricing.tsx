import type { Route } from "./+types/pricing";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { useState, useEffect } from "react";
import {
  CheckIcon,
  InstantIcon,
  NotFoundIcon,
  SearchIcon,
  SecureIcon,
  SecurePaymentIcon,
} from "~/components/icons";
import { GridPattern } from "~/components/patterns";
import { getMockProducts, type MicrosoftProduct } from "~/lib/data";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Pricing - Microsoft 365 Licenses | Teknohub",
    },
    {
      name: "description",
      content:
        "Purchase Microsoft 365 licenses directly through Teknohub. Browse our catalog and get started with secure payment via Paystack.",
    },
  ];
}

export default function Pricing() {
  const [products, setProducts] = useState<MicrosoftProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<MicrosoftProduct[]>(
    [],
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBilling, setSelectedBilling] = useState<
    "all" | "Monthly" | "Annual"
  >("all");

  // Fetch Microsoft 365 products from your backend API
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // In production, this would call your backend API endpoint
      // which authenticates with Microsoft Partner Center API
      const response = await fetch("/api/microsoft-products");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data.products);
      setFilteredProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Fallback to mock data for demo
      const mockProducts = getMockProducts();
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
    } finally {
      setLoading(false);
    }
  };

  // Filter products based on search and category
  useEffect(() => {
    let filtered = products;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory,
      );
    }

    // Billing period filter
    if (selectedBilling !== "all") {
      filtered = filtered.filter(
        (product) => product.billingPeriod === selectedBilling,
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, selectedBilling, products]);

  // Handle Paystack payment
  const handlePurchase = (product: MicrosoftProduct) => {
    // Initialize Paystack payment
    const handler = (window as any).PaystackPop.setup({
      key: "pk_test_your_paystack_public_key", // Replace with your Paystack public key
      email: "customer@email.com", // Get from user input or session
      amount: product.price * 100, // Paystack expects amount in kobo (cents)
      currency: product.currency,
      ref: `${Date.now()}-${product.id}`, // Unique transaction reference
      metadata: {
        product_id: product.id,
        product_name: product.title,
        billing_period: product.billingPeriod,
      },
      callback: function (response: any) {
        // Payment successful
        console.log("Payment successful:", response);
        alert(
          `Payment successful! Reference: ${response.reference}\n\nYour license will be provisioned shortly.`,
        );
        // Send to your backend to provision the license
        provisionLicense(product, response.reference);
      },
      onClose: function () {
        alert("Payment window closed");
      },
    });
    handler.openIframe();
  };

  const provisionLicense = async (
    product: MicrosoftProduct,
    reference: string,
  ) => {
    try {
      // Call your backend to provision the Microsoft license
      await fetch("/api/provision-license", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          paymentReference: reference,
        }),
      });
    } catch (error) {
      console.error("Error provisioning license:", error);
    }
  };

  const categories = [
    "all",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#0B2B5D] to-[#0a1f42] text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <GridPattern />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Microsoft 365 <span className="text-[#EC820C]">Licenses</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Purchase authentic Microsoft 365 licenses directly through our
              secure platform
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b-2 border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-12 gap-4">
              {/* Search Bar */}
              <div className="md:col-span-6">
                <Input
                  type="text"
                  placeholder="Search licenses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  startContent={<SearchIcon />}
                  classNames={{
                    input: "text-gray-900",
                  }}
                  size="lg"
                />
              </div>

              {/* Category Filter */}
              <div className="md:col-span-3">
                <Select
                  selectedKeys={[selectedCategory]}
                  onSelectionChange={(keys) => {
                    const selected = Array.from(keys)[0] as string;
                    setSelectedCategory(selected);
                  }}
                  placeholder="Select category"
                  classNames={{
                    value: "text-gray-900",
                  }}
                  radius="sm"
                  size="lg"
                >
                  {categories.map((category) => (
                    <SelectItem key={category}>
                      {category === "all"
                        ? "All Categories"
                        : category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              {/* Billing Filter */}
              <div className="md:col-span-3">
                <Select
                  selectedKeys={[selectedBilling]}
                  onSelectionChange={(keys) => {
                    const selected = Array.from(keys)[0] as
                      | "all"
                      | "Monthly"
                      | "Annual";
                    setSelectedBilling(selected);
                  }}
                  placeholder="Select billing period"
                  classNames={{
                    value: "text-gray-900",
                  }}
                  radius="sm"
                  size="lg"
                >
                  <SelectItem key="all">All Billing Periods</SelectItem>
                  <SelectItem key="Monthly">Monthly</SelectItem>
                  <SelectItem key="Annual">Annual</SelectItem>
                </Select>
              </div>
            </div>

            {/* Results count */}
            <div className="mt-4 text-gray-600">
              Showing {filteredProducts.length} of {products.length} licenses
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block w-16 h-16 border-4 border-[#EC820C] border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600">Loading licenses...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <NotFoundIcon />
                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                  No licenses found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`relative bg-white rounded-sm border-2 p-8 hover:shadow-xl transition-all duration-300 group ${
                      product.popular
                        ? "border-[#EC820C] shadow-lg"
                        : "border-gray-200 hover:border-[#EC820C]"
                    }`}
                  >
                    {/* Popular Badge */}
                    {product.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#EC820C] text-white px-4 py-1 rounded-sm font-semibold text-sm">
                        Most Popular
                      </div>
                    )}

                    {/* Product Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[#0B2B5D] mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {product.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-[#EC820C]">
                          {product.currency === "USD" ? "$" : "₦"}
                          {product.price.toLocaleString()}
                        </span>
                        <span className="text-gray-600">
                          /{product.billingPeriod.toLowerCase()}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">per user</div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <ul className="space-y-3">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckIcon />
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Purchase Button */}
                    <Button
                      onPress={() => handlePurchase(product)}
                      className={`w-full font-semibold transition-colors ${
                        product.popular
                          ? "bg-[#EC820C] text-white hover:bg-[#d67509]"
                          : "bg-[#0B2B5D] text-white hover:bg-[#EC820C]"
                      }`}
                      radius="sm"
                      size="lg"
                    >
                      Purchase Now
                    </Button>

                    {/* Billing badge */}
                    <div className="mt-4 text-center">
                      <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-sm text-xs font-semibold">
                        {product.billingPeriod} Billing
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-linear-to-br from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-[#EC820C] rounded-sm flex items-center justify-center mx-auto mb-4">
                  <SecureIcon />
                </div>
                <h3 className="text-xl font-bold mb-2">Authentic Licenses</h3>
                <p className="text-gray-300">
                  100% genuine Microsoft licenses purchased directly through
                  official channels
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-[#EC820C] rounded-sm flex items-center justify-center mx-auto mb-4">
                  <SecurePaymentIcon />
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
                <p className="text-gray-300">
                  Pay securely with Paystack - supports cards, bank transfer,
                  and mobile money
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-[#EC820C] rounded-sm flex items-center justify-center mx-auto mb-4">
                  <InstantIcon />
                </div>
                <h3 className="text-xl font-bold mb-2">Instant Activation</h3>
                <p className="text-gray-300">
                  Licenses are provisioned immediately after successful payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paystack Script */}
      <script src="https://js.paystack.co/v1/inline.js"></script>
    </div>
  );
}
