import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Support | API Documentation",
  description: `How to contact support for ${process.env.NEXT_PUBLIC_BRAND_NAME} API.`,
};

export default function ContactSupportPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Contact Support</h1>
      <div className="space-y-4">
        <p>
          If you need any assistance or have any questions, please reach out to our support team.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Contact Information</h2>
        <ul>
          <li><strong>Phone:</strong> <code>+263772724514 / +263771234567</code></li>
          <li><strong>Email:</strong> <a href={`mailto:techsupport@${process.env.NEXT_PUBLIC_BRAND_URL}`} className="text-blue-600">techsupport@{process.env.NEXT_PUBLIC_BRAND_URL}</a></li>
        </ul>
      </div>
    </div>
  );
}