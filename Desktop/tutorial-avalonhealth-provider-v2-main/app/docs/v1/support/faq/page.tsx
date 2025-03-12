"use client";

import { Metadata } from "next";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";


const faqs = [
  {
    category: "General Questions",
    questions: [
      { question: `What is ${process.env.NEXT_PUBLIC_BRAND_NAME}?`, answer: `${process.env.NEXT_PUBLIC_BRAND_NAME} is a One API/One Link payment platform for emerging markets.` },
      { question: "How do I get started?", answer: `You can get started by reading our <a href="/docs/getting-started" className="text-blue-600">Getting Started Guide</a>.` },
      { question: "What payment methods are supported?", answer: `${process.env.NEXT_PUBLIC_BRAND_NAME} supports various payment methods including credit/debit cards, mobile money, and bank transfers.` },
      { question: "Is there a sandbox environment available?", answer: `Yes, we provide a sandbox environment for testing purposes. You can access it using the sandbox API key from the ${process.env.NEXT_PUBLIC_BRAND_NAME} dashboard.` },
      { question: "How can I contact support?", answer: `You can contact our support team via email at <a href="mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}" className="text-blue-600">${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</a>.` },
    ],
  },
  {
    category: "Technical Questions",
    questions: [
      { question: "Where can I find the API documentation?", answer: `The API documentation is available <a href="${process.env.NEXT_PUBLIC_API_DOCS_URL}" className="text-blue-600">here</a>.` },
      { question: "How do I authenticate with the API?", answer: `You need to use an API key, which you can obtain from the ${process.env.NEXT_PUBLIC_BRAND_NAME} dashboard.` },
      { question: "What is the rate limit for API requests?", answer: "The rate limit for API requests is 1000 requests per minute. If you exceed this limit, you will receive a rate limit error." },
      { question: "How do I handle errors from the API?", answer: `Our API returns standard HTTP status codes for errors. You can find more details about error handling in our <a href="${process.env.NEXT_PUBLIC_API_DOCS_URL}/errors" className="text-blue-600">error documentation</a>.` },
      { question: "Can I use the API for recurring payments?", answer: "Not yet, but we are working on it." },
    ],
  },
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q => q.question.toLowerCase().includes(searchTerm.toLowerCase())),
  }));

  useEffect(() => {
    document.title = "FAQ | API Documentation";
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded-md flex-1"
          />
          <Search className="text-gray-500" />
        </div>
        <p>
          Here you will find answers to the most common questions about our API.
        </p>

        {filteredFaqs.map((category, index) => (
          <div key={index}>
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">{category.category}</h2>
            <ul>
              {category.questions.map((faq, idx) => (
                <li key={idx}>
                  <strong>{faq.question}</strong> <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}