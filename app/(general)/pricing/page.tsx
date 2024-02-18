import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'this is the pricing page',
  keywords: ['pricing Page', 'Carlos', 'esto es un metaTag']
}

export default function PricingPage() {
  return (

    <span className="text-7xl">Pricing Page</span>

  );
}
