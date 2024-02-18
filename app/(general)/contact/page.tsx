import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'this is the contact page',
  keywords: ['contact Page', 'Carlos', 'esto es un metaTag']
}

export default function ContactPage() {
  return (

    <span className="text-7xl">Contact Page</span>

  );
}
