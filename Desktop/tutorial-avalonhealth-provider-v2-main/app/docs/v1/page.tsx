import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview | API Documentation",
  description: "Overview of the API and its capabilities",
};

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Overview</h1>
      <div className="space-y-4">
        <p>
          {process.env.NEXT_PUBLIC_BRAND_NAME} provides a comprehensive suite of APIs
          that enable you to process payments, manage transactions, and handle
          subscriptions. Our REST APIs accept form-encoded request bodies, return
          JSON-encoded responses, and use standard HTTP response codes.
        </p>
        
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Base URL</h2>
        <p className="text-muted-foreground">
          All API requests should be made to:
        </p>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          https://api.{process.env.NEXT_PUBLIC_BRAND_URL}/v1
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Request Format</h2>
        <p>
          The API accepts requests with Content-Type: application/json and
          application/x-www-form-urlencoded. All responses are returned in JSON
          format.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Authentication</h2>
        <p>
          All API requests require authentication using your secret key. You can
          find your API keys in your dashboard.
        </p>
      </div>
    </div>
  );
}