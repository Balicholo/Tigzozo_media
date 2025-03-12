"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { docsConfig } from "@/lib/docs";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
      <div className="w-full">
        {docsConfig.sidebarNav.map((section, index) => (
          <div key={index} className="pb-8">
            <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
              {section.title}
            </h4>
            {section.items.map((item) => {
              if ('items' in item) {
                return (
                  <div key={item.title} className="mb-4">
                    <h5 className="mb-1 rounded-md px-4 py-1 text-sm font-medium text-muted-foreground">
                      {item.title}
                    </h5>
                    {(item.items as Array<{ href: string }>).map((subItem) => (
                      <div key={subItem.href} className="mb-1">
                        <Link
                          href={subItem.href}
                          className={cn(
                            "block rounded-md px-6 py-1 text-sm hover:text-foreground",
                            pathname === subItem.href
                              ? "font-medium text-foreground"
                              : "text-muted-foreground"
                          )}
                        >
                          {(subItem as { href: string; title: string }).title}
                        </Link>
                      </div>
                    ))}
                  </div>
                );
              }
              return (
                <div key={item.href} className="mb-1">
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-md px-4 py-1 text-sm hover:text-foreground",
                      pathname === item.href
                        ? "font-medium text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}