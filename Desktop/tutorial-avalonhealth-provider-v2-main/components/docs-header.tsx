import Link from "next/link";
import { docsConfig } from "@/lib/docs";

export function DocsHeader() {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
      <div className="flex-1 space-y-4">
        <h1 className="inline-block font-heading text-4xl lg:text-5xl">
          Documentation
        </h1>
        <p className="text-xl text-muted-foreground">
          Learn how to integrate {process.env.NEXT_PUBLIC_BRAND_NAME} into your application.
        </p>
      </div>
    </div>
  );
}