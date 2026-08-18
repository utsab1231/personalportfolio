import Link from "next/link";
import { person } from "@/content/site";

export function NameMark() {
  return (
    <Link href="#intro" className="group fixed top-8 left-4 md:left-8 z-50 leading-tight">
      <span className="relative inline-block text-2xl md:text-3xl font-display font-medium text-fg">
        {person.name}
        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-fg transition-all duration-500 ease-out group-hover:w-full" />
      </span>
      <span className="block font-deva text-xs md:text-sm text-muted mt-0.5">{person.nameDeva}</span>
    </Link>
  );
}
