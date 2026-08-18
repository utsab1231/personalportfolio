import { footer } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="px-4 md:px-24 py-8 text-muted">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-5xl mx-auto">
        <span className="text-sm text-center md:text-left">{footer.copyright}</span>
        <span className="text-sm text-center md:text-left font-deva">{footer.location}</span>
      </div>
    </footer>
  );
}
