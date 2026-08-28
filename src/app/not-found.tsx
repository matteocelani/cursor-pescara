import Link from "next/link";
import { ArrowLeft, BookOpen, Gift } from "lucide-react";
import { Cursor } from "@/assets/icons";
import { SiteFooter } from "@/components/site-footer";
import { event } from "@/lib/event";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-svh max-w-2xl flex-col px-4 py-10 sm:py-14">
      <div className="flex flex-1 flex-col justify-center">
        <Cursor className="size-8 text-accent" />

        <p className="mt-6 font-mono text-sm text-muted-foreground">404</p>
        <h1 className="mt-2 text-3xl leading-tight font-normal tracking-tightest text-balance text-foreground sm:text-4xl">
          Questa pagina non esiste
        </h1>
        <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-pretty text-foreground-2">
          Forse l’indirizzo è scritto male, oppure la pagina è stata spostata.
          Da qui puoi tornare dove serve.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 font-medium text-accent-foreground transition-all duration-200 hover:brightness-110"
          >
            <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            L’evento
          </Link>
          <Link
            href={event.cursorPath}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-4 py-3 font-medium text-foreground transition-colors duration-200 hover:border-border-strong hover:bg-card-hover"
          >
            <BookOpen className="size-4" />
            La guida
          </Link>
          <Link
            href={event.creditsPath}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-4 py-3 font-medium text-foreground transition-colors duration-200 hover:border-border-strong hover:bg-card-hover"
          >
            <Gift className="size-4" />
            I crediti
          </Link>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
