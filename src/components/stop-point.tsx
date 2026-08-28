import Link from "next/link";
import { ArrowDown, ArrowLeft } from "lucide-react";

/** Explicit permission to stop reading, so a casual reader does not feel
 *  obliged to reach the bottom of a long page. */
export function StopPoint({
  title,
  text,
  continueLabel,
  continueHref,
  leaveLabel,
  leaveHref,
}: {
  title: string;
  text: string;
  continueLabel: string;
  continueHref: string;
  leaveLabel: string;
  leaveHref: string;
}) {
  return (
    <aside className="border-l-2 border-accent bg-accent-soft/50 py-5 pl-5">
      <h3 className="text-xl font-normal tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 max-w-[60ch] leading-relaxed text-pretty text-foreground-2">
        {text}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={continueHref}
          className="group inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-all duration-200 hover:brightness-110"
        >
          {continueLabel}
          <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
        </a>
        <Link
          href={leaveHref}
          className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-border-strong hover:bg-card-hover"
        >
          <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          {leaveLabel}
        </Link>
      </div>
    </aside>
  );
}
