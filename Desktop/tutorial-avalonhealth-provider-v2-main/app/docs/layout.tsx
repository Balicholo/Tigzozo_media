import { DocsSidebar } from "@/components/docs-sidebar";
import { DocsHeader } from "@/components/docs-header";
import { SearchDialog } from "@/components/search";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="border-b">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pl-8 pr-6 lg:py-8">
            <div className="mb-4">
              <SearchDialog />
            </div>
            <DocsSidebar />
          </div>
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <div className="pb-12 pt-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}