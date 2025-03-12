import { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_BRAND_NAME + " - Frequently Asked Questions",
  description: "Find answers to commonly asked questions about Avalon Health",
};

export default function FAQPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
      <p className="text-lg text-muted-foreground">
        Find answers to the most common questions about Avalon Health. If you can't find what you're looking for, please {" "}
        <Link href="mailto:support@avalonhealth.cloud" className="text-primary hover:underline">{/* /docs/troubleshooting/contact-support */}
          contact our support team
        </Link>.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">General Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-is-taskmaster">
              <AccordionTrigger>What is Avalon Health?</AccordionTrigger>
              <AccordionContent>
              Avalon Healthcare is an AI-powered assistant designed to help doctors, patients, and pharmacists efficiently record, manage, and track medical documentation. It offers features such as medical transcriptions, appointment scheduling, billing management, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="who-can-use">
              <AccordionTrigger>Who can use Avalon Healthcare?</AccordionTrigger>
              <AccordionContent>
              Avalon Healthcare is designed for medical professionals, including doctors, nurses, and pharmacists, as well as patients who need to manage their healthcare records and appointments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="platforms">
              <AccordionTrigger>What platforms is Avalon Health available on?</AccordionTrigger>
              <AccordionContent>
                Avalon Health is available as a web application that works in any modern browser, as well as native mobile apps for iOS and Android devices. This allows you to access your documents and scheduling from anywhere, on any device.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="internet-required">
              <AccordionTrigger>Do I need an internet connection to use Avalon Health?</AccordionTrigger>
              <AccordionContent>
                While Avalon Health primarily works online to ensure your data is synced across all your devices, our mobile apps offer limited offline functionality. You can view and edit your tasks offline, and changes will sync once you're back online.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="data-security">
              <AccordionTrigger>How secure is my data in Avalon Healthcare?</AccordionTrigger>
              <AccordionContent>
               Yes. Avalon Healthcare uses advanced encryption and security measures to ensure that all medical records and transactions remain private and protected.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Account & Subscription</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="create-account">
              <AccordionTrigger>How do I create an account?</AccordionTrigger>
              <AccordionContent>
                Creating an account is easy! Simply visit our website, click on "Sign Up," and follow the prompts to create your account. You can sign up using your email address or through Google or Apple authentication.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="pricing-plans">
            <AccordionTrigger>What pricing plans are available?</AccordionTrigger>
<AccordionContent>
  Avalon Healthcare offers flexible pricing plans to suit different healthcare practice needs:
  <ul className="list-disc pl-6 mt-2 space-y-1">
    <li><strong>Standard ($80/month):</strong> Ideal for up to 5 users, includes patient management, appointment booking, and digital claims processing.</li>
    <li><strong>Premium ($150/month):</strong> Advanced plan for up to 5 users, featuring unlimited voice-to-text transcriptions, billing reconciliation, and debt collection reminders.</li>
    <li><strong>Distributors Plan (Custom Pricing):</strong> Allows resellers to purchase Standard & Premium accounts, set their own pricing, and earn from clients.</li>
  </ul>
</AccordionContent>
            </AccordionItem>
            <AccordionItem value="cancel-subscription">
              <AccordionTrigger>How do I cancel my subscription?</AccordionTrigger>
              <AccordionContent>
                You can cancel your subscription at any time from your account settings. Go to "Account" → "Subscription" and click on "Cancel Subscription." Your account will remain active until the end of your current billing period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="change-plan">
              <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
              <AccordionContent>
                Yes, you can upgrade or downgrade your plan at any time. Changes to a higher-tier plan take effect immediately, with prorated billing for the remainder of your billing cycle. Downgrades take effect at the end of your current billing period.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Features & Usage</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="project-limit">
              <AccordionTrigger>Is there a limit to how many records I can create?</AccordionTrigger>
              <AccordionContent>
               No, Avalon Healthcare allows unlimited patient records and documentation in all plans. However, some advanced features, such as unlimited voice-to-text transcriptions, are available only in the Premium plan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="team-members">
              <AccordionTrigger>How many team members can I add?</AccordionTrigger>
              <AccordionContent>
               The Standard and Premium plans cover up to 5 users by default. Additional team members can be added for an extra fee:
               <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Standard Plan:</strong> $5 per additional user</li>
                  <li><strong>Premium Plan:</strong> $10 per additional user</li>
               </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="file-storage">
              <AccordionTrigger>How much file storage do I get?</AccordionTrigger>
              <AccordionContent>
              Avalon Healthcare provides secure cloud storage for medical documentation. Storage limits are based on your subscription plan:
               <ul className="list-disc pl-6 mt-2 space-y-1">
                 <li><strong>Standard Plan:</strong> 50GB of cloud storage</li>
                 <li><strong>Premium Plan:</strong> 200GB of cloud storage</li>
                 <li><strong>Distributors Plan:</strong> Custom storage allocation based on agreement</li>
               </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="integrations">
              <AccordionTrigger>What integrations does Avalon Healthcare support?</AccordionTrigger>
              <AccordionContent>
              Avalon Healthcare integrates with various platforms to enhance functionality, including:
               <ul className="list-disc pl-6 mt-2 space-y-1">
                 <li>Health263 for digital medical claims processing</li>
                 <li>WhatsApp for appointment booking and invoice generation</li>
                 <li>Billing and reconciliation systems</li>
               </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="data-export">
              <AccordionTrigger>Can I export my data from Avalon Healthcare?</AccordionTrigger>
              <AccordionContent>
               Yes, you can export patient records, billing details, and appointment history as CSV or PDF files for easy backup and sharing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="forgot-password">
              <AccordionTrigger>I forgot my password. How do I reset it?</AccordionTrigger>
              <AccordionContent>
                On the login screen, click on "Forgot Password" and enter your email address. We'll send you a link to reset your password. If you don't receive the email, check your spam folder or contact support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sync-issues">
              <AccordionTrigger>My changes aren't syncing between devices</AccordionTrigger>
              <AccordionContent>
                If you're experiencing sync issues, try these steps:
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Ensure you have an active internet connection</li>
                  <li>Close and reopen the app</li>
                  <li>Check that you're logged into the same account on all devices</li>
                  <li>If the problem persists, try logging out and back in</li>
                </ol>
                If none of these solutions work, please contact our support team.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="missing-features">
              <AccordionTrigger>I can't find a feature that I need</AccordionTrigger>
              <AccordionContent>
                We're constantly improving Avalon Health based on user feedback. If there's a feature you'd like to see, please submit a feature request through the "Help & Feedback" section in the app or contact our support team.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="mt-8 p-6 bg-muted rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Still have questions?</h2>
        <p className="mb-4">
          If you couldn't find the answer you were looking for, please reach out to our support team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="support@avalonhealth.cloud" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Contact Support
          </Link>
          <Link 
            href="/docs/video-tutorials" 
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
          >
            Watch Tutorial Videos
          </Link>
        </div>
      </div>
    </div>
  );
} 