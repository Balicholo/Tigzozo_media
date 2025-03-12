import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Errors | API Documentation",
  description: `Common errors and how to handle them`,
};

export default function ErrorsPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Errors</h1>
      <div className="space-y-4">
        <p>
          When using the {process.env.NEXT_PUBLIC_BRAND_NAME} API, you may encounter various errors. This section provides information on common errors and how to handle them.
        </p>
        <p>
          API requests made without authentication will fail with the status code 401: Unauthorized. All API requests must be made over HTTPS.
        </p>
        <p>
          If you encounter a 400 Bad Request error, it means that the request was invalid. Check the request parameters and try again.
        </p>
        <p>
          For 500 Internal Server Error, it indicates a problem with the server. Please try again later or contact support if the issue persists.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Common Error Codes</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>400 Bad Request</strong>: The request was invalid or cannot be otherwise served.</li>
          <li><strong>401 Unauthorized</strong>: Authentication credentials were missing or incorrect.</li>
          <li><strong>403 Forbidden</strong>: The request is understood, but it has been refused or access is not allowed.</li>
          <li><strong>404 Not Found</strong>: The URI requested is invalid or the resource requested does not exist.</li>
          <li><strong>500 Internal Server Error</strong>: An error occurred on the server.</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Sample Error Response</h2>
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight pt-2">400 Bad Request</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          {`{
    "result": "error",
    "message": "Invalid request parameters."
}`}
        </pre>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight pt-2">401 Unauthorized</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          {`{
    "result": "error",
    "message": "Unauthorized. Please provide a valid API key."
}`}
        </pre>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight pt-2">500 Internal Server Error</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          {`{
    "result": "error",
    "message": "Internal server error. Please try again later."
}`}
        </pre>
      </div>
    </div>
  );
}