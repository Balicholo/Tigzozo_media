import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JavaScript Examples | API Documentation",
  description: `Examples of using the ${process.env.NEXT_PUBLIC_BRAND_NAME} API with JavaScript`,
};

export default function JavaScriptExamplesPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">JavaScript Examples</h1>
      <div className="space-y-4">
        <p>
          Here are some examples of how to use the {process.env.NEXT_PUBLIC_BRAND_NAME} API with JavaScript.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Initiating a Transaction</h2>
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight pt-4">JavaScript</h4>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          {`const axios = require('axios');

const url = "${process.env.NEXT_PUBLIC_API_URL}/v1/transactions";

const headers = {
    "Authorization": "Bearer ${process.env.NEXT_PUBLIC_TRANSACTION_ID_PREFIX}_test_26PHem9AhJZvU623DfE1x4sd",
    "Content-Type": "application/json"
};

const data = {
    "currency": "USD",
    "amount": 1000,
    "email": "customer@example.com",
    "mobile_money_number": "254712345678",
    "payment_method_code": "mpesa",
    "transaction_reference": "${process.env.NEXT_PUBLIC_TRANSACTION_REFERENCE_PREFIX}1234567890"
};

axios.post(url, data, { headers })
    .then(response => {
        console.log("Transaction initiated:", response.data);
    })
    .catch(error => {
        console.error("Error:", error.response.status, error.response.data);
    });`}
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Listing Wallets</h2>
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight pt-4">JavaScript</h4>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          {`const axios = require('axios');

const url = "${process.env.NEXT_PUBLIC_API_URL}/v1/wallets/list";

const params = {
    "limit": 100
};

const headers = {
    "Authorization": "Bearer ${process.env.NEXT_PUBLIC_WALLET_ID_PREFIX}_test_26PHem9AhJZvU623DfE1x4sd",
    "Content-Type": "application/json"
};

axios.get(url, { headers, params })
    .then(response => {
        console.log("Wallet details:", response.data);
    })
    .catch(error => {
        console.error("Error:", error.response.status, error.response.data);
    });`}
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Authenticating API Requests</h2>
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight pt-4">JavaScript</h4>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          {`const axios = require('axios');

const url = "${process.env.NEXT_PUBLIC_API_URL}/v1/authenticate";

const headers = {
    "Authorization": "Bearer ${process.env.NEXT_PUBLIC_AUTH_ID_PREFIX}_test_26PHem9AhJZvU623DfE1x4sd",
    "Content-Type": "application/json"
};

axios.get(url, { headers })
    .then(response => {
        console.log("Authentication successful:", response.data);
    })
    .catch(error => {
        console.error("Error:", error.response.status, error.response.data);
    });`}
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Creating a Wallet</h2>
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight pt-4">JavaScript</h4>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          {`const axios = require('axios');

const url = "${process.env.NEXT_PUBLIC_API_URL}/v1/wallets/create";

const headers = {
    "Authorization": "Bearer ${process.env.NEXT_PUBLIC_WALLET_ID_PREFIX}_test_26PHem9AhJZvU623DfE1x4sd",
    "Content-Type": "application/json"
};

const data = {
    "currency": "USD",
    "balance": 1000
};

axios.post(url, data, { headers })
    .then(response => {
        console.log("Wallet created:", response.data);
    })
    .catch(error => {
        console.error("Error:", error.response.status, error.response.data);
    });`}
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Fetching Wallet Balance</h2>
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight pt-4">JavaScript</h4>
        <pre className="bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">
          {`const axios = require('axios');

const url = "${process.env.NEXT_PUBLIC_API_URL}/v1/wallets/balance";

const headers = {
    "Authorization": "Bearer ${process.env.NEXT_PUBLIC_WALLET_ID_PREFIX}_test_26PHem9AhJZvU623DfE1x4sd",
    "Content-Type": "application/json"
};

axios.get(url, { headers })
    .then(response => {
        console.log("Wallet balance:", response.data);
    })
    .catch(error => {
        console.error("Error:", error.response.status, error.response.data);
    });`}
        </pre>
      </div>
    </div>
  );
}