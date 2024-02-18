import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description: 'SEO Description',
  keywords: ['about Page', 'Carlos', 'esto es un metaTag']
};

export default function AboutPage() {
  return (

    <span className="text-7xl">About Page</span>

  );
}