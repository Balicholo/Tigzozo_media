import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication | API Documentation",
  description: `How to authenticate`,
};

export default function AuthenticationPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Authentication</h1>
      <div className="space-y-4">
        <p>
          To use the {process.env.NEXT_PUBLIC_BRAND_NAME} API, you need to authenticate using an API key. You can obtain your API key from the {process.env.NEXT_PUBLIC_BRAND_NAME} dashboard.
        </p>
        <p>
          Authenticate your API calls by including your secret key in the Authorization header of every request you make. You can manage your API keys from the dashboard.
        </p>
        <p>
          If for any reason you believe your secret key has been compromised or you wish to reset them, you can do so from the dashboard.
        </p>
        <p>
          Get your secret key on your dashboard on the link below:
        </p>
        <a href={`https://dashboard.${process.env.NEXT_PUBLIC_BRAND_URL}`} target="_blank" className="text-blue-500 underline">
          {process.env.NEXT_PUBLIC_BRAND_NAME} Dashboard
        </a>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Secure your secret key</h2>
        <p>
          Do not commit your secret keys to git, or use them in client-side code.
        </p>
        <p>
          Authorization headers should be in the following format:
        </p>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          {`Authorization: Bearer YOUR_SECRET_KEY`}
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">API Endpoints</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>API Base URL: <a href={`${process.env.NEXT_PUBLIC_API_URL}`} target="_blank" className="text-blue-500 underline">{process.env.NEXT_PUBLIC_API_URL}</a></li>
        </ul>
        <p>
          API requests made without authentication will fail with the status code 401: Unauthorized. All API requests must be made over HTTPS.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Sample Request to Retrieve {process.env.NEXT_PUBLIC_BRAND_NAME} Balance for a Specific Currency</h2>
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight pt-2">cURL</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          {`curl -X GET ${process.env.NEXT_PUBLIC_API_URL}/v1/wallet/balance?currency=USD \\
-H "Authorization: Bearer YOUR_SECRET_KEY"`}
        </pre>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight pt-2">Python</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          {`import requests \\
url = "${process.env.NEXT_PUBLIC_API_URL}/v1/wallets/balance?currency=USD" \\
headers = {
    "Authorization": "Bearer YOUR_SECRET_KEY"
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print("Balance for USD:", response.json())
else:
    print("Error:", response.status_code, response.text)`}
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Sample Request to Retrieve {process.env.NEXT_PUBLIC_BRAND_NAME} Balance for All Wallets</h2>
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight pt-2">cURL</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          {`curl -X GET ${process.env.NEXT_PUBLIC_API_URL}/v1/wallets/balance \\
-H "Authorization: Bearer YOUR_SECRET_KEY"`}
        </pre>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight pt-2">Python</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          {`import requests \\
url = "${process.env.NEXT_PUBLIC_API_URL}/v1/wallets/balance" \\

headers = {
    "Authorization": "Bearer YOUR_SECRET_KEY"
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print("Balance for all wallets:", response.json())
else:
    print("Error:", response.status_code, response.text)`}
        </pre>
      </div>
    </div>
  );
}