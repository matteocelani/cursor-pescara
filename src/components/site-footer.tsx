import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Cursor } from "@/assets/icons";
import { event } from "@/lib/event";

/** Shared footer. Home of the theme switch, so every page has it. */
export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border pt-6">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
          <Cursor className="size-4" />
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-foreground"
          >
            Cafe Cursor Pescara
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm">
          <Link
            href={event.cursorPath}
            className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            Guida
          </Link>
          <Link
            href={event.grokPath}
            className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            Grok Bot
          </Link>
          <Link
            href={event.creditsPath}
            className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            Crediti
          </Link>
          <a
            href={event.cursorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            cursor.com
          </a>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
