import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Python Examples | API Documentation",
  description: `Examples of using the ${process.env.NEXT_PUBLIC_BRAND_NAME} API with Python`,
};

export default function PythonExamplesPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Python Examples</h1>
      <div className="space-y-4">
        <p>
          Here are some examples of how to use the {process.env.NEXT_PUBLIC_BRAND_NAME} API with Python.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Initiating a Transaction</h2>
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight pt-4">Python</h4>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          {`import requests

url = "${process.env.NEXT_PUBLIC_API_URL}/v1/transactions"

headers = {
    "Authorization": "Bearer ${process.env.NEXT_PUBLIC_TRANSACTION_ID_PREFIX}_test_26PHem9AhJZvU623DfE1x4sd",
    "Content-Type": "application/json"
}

data = {
    "currency": "USD",
    "amount": 1000,
    "email": "customer@example.com",
    "mobile_money_number": "254712345678",
    "payment_method_code": "mpesa",
    "transaction_reference": "${process.env.NEXT_PUBLIC_TRANSACTION_REFERENCE_PREFIX}1234567890"
}

response = requests.post(url, headers=headers, json=data)
if response.status_code == 200:
    print("Transaction initiated:", response.json())
else:
    print("Error:", response.status_code, response.text)`}
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Listing Wallets</h2>
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight pt-4">Python</h4>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          {`import requests

url = "${process.env.NEXT_PUBLIC_API_URL}/v1/wallets/list"

params = {
    "limit": 100
}

headers = {
    "Authorization": "Bearer ${process.env.NEXT_PUBLIC_WALLET_ID_PREFIX}_test_26PHem9AhJZvU623DfE1x4sd",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers, params=params)

if response.status_code == 200:
    print("Wallet details:", response.json())
else:
    print("Error:", response.status_code, response.text)`}
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Authenticating API Requests</h2>
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight pt-4">Python</h4>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          {`import requests

url = "${process.env.NEXT_PUBLIC_API_URL}/v1/authenticate"

headers = {
    "Authorization": "Bearer ${process.env.NEXT_PUBLIC_AUTH_ID_PREFIX}_test_26PHem9AhJZvU623DfE1x4sd",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print("Authentication successful:", response.json())
else:
    print("Error:", response.status_code, response.text)`}
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Creating a Wallet</h2>
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight pt-4">Python</h4>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          {`import requests

url = "${process.env.NEXT_PUBLIC_API_URL}/v1/wallets/create"

headers = {
    "Authorization": "Bearer ${process.env.NEXT_PUBLIC_WALLET_ID_PREFIX}_test_26PHem9AhJZvU623DfE1x4sd",
    "Content-Type": "application/json"
}

data = {
    "currency": "USD",
    "balance": 1000
}

response = requests.post(url, headers=headers, json=data)
if response.status_code == 200:
    print("Wallet created:", response.json())
else:
    print("Error:", response.status_code, response.text)`}
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Fetching Wallet Balance</h2>
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight pt-4">Python</h4>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          {`import requests

url = "${process.env.NEXT_PUBLIC_API_URL}/v1/wallets/balance"

headers = {
    "Authorization": "Bearer ${process.env.NEXT_PUBLIC_WALLET_ID_PREFIX}_test_26PHem9AhJZvU623DfE1x4sd",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print("Wallet balance:", response.json())
else:
    print("Error:", response.status_code, response.text)`}
        </pre>
      </div>
    </div>
  );
}