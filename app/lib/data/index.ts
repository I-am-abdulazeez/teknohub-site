export interface MicrosoftProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  billingPeriod: "Monthly" | "Annual";
  features: string[];
  category: string;
  popular?: boolean;
}


export function getMockProducts(): MicrosoftProduct[] {
  return [
    {
      id: "m365-business-basic",
      title: "Microsoft 365 Business Basic",
      description: "Web and mobile versions of Office apps",
      price: 6,
      currency: "USD",
      billingPeriod: "Monthly",
      category: "business",
      features: [
        "Web and mobile versions of Office apps",
        "1 TB cloud storage per user",
        "Business-class email",
        "Microsoft Teams",
        "Standard security",
      ],
    },
    {
      id: "m365-business-standard",
      title: "Microsoft 365 Business Standard",
      description: "Desktop versions of Office apps plus cloud services",
      price: 12.5,
      currency: "USD",
      billingPeriod: "Monthly",
      category: "business",
      popular: true,
      features: [
        "Desktop versions of Office apps",
        "Web and mobile versions",
        "1 TB cloud storage per user",
        "Business-class email",
        "Microsoft Teams",
        "Webinar capabilities",
      ],
    },
    {
      id: "m365-business-premium",
      title: "Microsoft 365 Business Premium",
      description: "Everything in Business Standard plus advanced security",
      price: 22,
      currency: "USD",
      billingPeriod: "Monthly",
      category: "business",
      features: [
        "All Business Standard features",
        "Advanced security",
        "Access and data control",
        "Cyberthreat protection",
        "Device management",
      ],
    },
    {
      id: "m365-e3",
      title: "Microsoft 365 E3",
      description: "Best-in-class productivity apps with security",
      price: 36,
      currency: "USD",
      billingPeriod: "Monthly",
      category: "enterprise",
      features: [
        "Office apps with premium features",
        "Unlimited cloud storage",
        "Advanced security and compliance",
        "Windows 10 Enterprise",
        "Enterprise Mobility + Security",
      ],
    },
    {
      id: "m365-e5",
      title: "Microsoft 365 E5",
      description: "Everything in E3 plus advanced compliance and analytics",
      price: 57,
      currency: "USD",
      billingPeriod: "Monthly",
      category: "enterprise",
      features: [
        "All E3 features",
        "Advanced compliance",
        "Phone System",
        "Audio Conferencing",
        "Advanced analytics",
        "Advanced threat protection",
      ],
    },
    {
      id: "office-365-e1",
      title: "Office 365 E1",
      description: "Web-based apps and services",
      price: 10,
      currency: "USD",
      billingPeriod: "Monthly",
      category: "enterprise",
      features: [
        "Web and mobile Office apps",
        "1 TB cloud storage",
        "Email and calendaring",
        "Microsoft Teams",
        "SharePoint and OneDrive",
      ],
    },
  ];
}
