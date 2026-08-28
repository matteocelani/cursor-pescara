import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  CreditCard,
  Gift,
  LogIn,
  MessageSquare,
  Shield,
  Sparkles,
} from "lucide-react";
import { StepFlow, VerticalSteps } from "@/components/procedure";
import { Reveal } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { credits, event } from "@/lib/event";

const noteIcons = {
  alert: AlertTriangle,
  login: LogIn,
  shield: Shield,
  chat: MessageSquare,
  clock: Clock,
  spark: Sparkles,
} as const;

export default function CreditiPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <Link
        href="/"
        className="group mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
      >
        <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
        Cafe Cursor Pescara
      </Link>

      {/* Not animated: this is the first thing that must appear, always. */}
      <div className="bloom">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-sm font-medium text-accent">
          <Gift className="size-4" />
          Crediti Cursor
        </span>

        <h1 className="mt-4 text-3xl leading-tight font-normal tracking-tightest text-balance text-foreground sm:text-4xl">
          {credits.title}
        </h1>

        <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-pretty text-foreground-2">
          {credits.lead}
        </p>
      </div>

      <Reveal>
        <Link
          href={event.cursorPath}
          className="group mt-6 flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors duration-200 hover:border-accent/50 hover:bg-card-hover"
        >
          <BookOpen className="size-5 shrink-0 text-accent" />
          <span className="min-w-0 flex-1 text-sm">
            <span className="block font-medium text-foreground">
              Non sai cos’è Cursor?
            </span>
            <span className="block text-muted-foreground">
              La guida spiega tutto da zero, senza dare niente per scontato.
            </span>
          </span>
          <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </Reveal>

      <Reveal>
        <div className="mt-8 rounded-lg border border-border bg-card p-5 sm:p-6">
          <h2 className="text-xl font-normal tracking-tight text-foreground">
            {credits.whatAreThey.title}
          </h2>
          <p className="mt-2 leading-relaxed text-pretty text-foreground-2">
            {credits.whatAreThey.text}
          </p>
        </div>
      </Reveal>

      {/* The flow at a glance */}
      <Reveal>
        <section className="mt-12">
          <h2
            id="flusso"
            className="text-2xl font-normal tracking-tighter text-foreground"
          >
            Il percorso, a colpo d’occhio
          </h2>
          <p className="mt-2 max-w-[62ch] text-muted-foreground">
            Cinque passaggi. Sotto trovi gli stessi, uno per uno, con cosa devi
            vedere sullo schermo.
          </p>
          <div className="mt-8">
            <StepFlow steps={credits.overview} labelledBy="flusso" />
          </div>
        </section>
      </Reveal>

      {/* Full instructions, stacked vertically */}
      <Reveal>
        <section className="mt-14">
          <h2 className="text-2xl font-normal tracking-tighter text-foreground">
            Le istruzioni, per esteso
          </h2>
          <p className="mt-2 max-w-[62ch] text-muted-foreground">
            Segui le frecce dall’alto verso il basso. Ogni passaggio dice cosa
            fare, cosa deve comparire e, sotto la riga, il dettaglio in più se
            ti serve.
          </p>
          <div className="mt-8">
            <VerticalSteps steps={credits.steps} />
          </div>
        </section>
      </Reveal>

      {/* The Stripe verification case */}
      <Reveal>
        <section className="mt-14">
          <div className="rounded-lg border border-caution/35 bg-caution/8 p-5 sm:p-6">
            <div className="flex items-center gap-2.5">
              <CreditCard className="size-5 shrink-0 text-caution" />
              <h2 className="text-xl font-normal tracking-tight text-foreground">
                {credits.stripe.title}
              </h2>
            </div>
            <p className="mt-2 leading-relaxed text-pretty text-foreground-2">
              {credits.stripe.intro}
            </p>
            <ol className="mt-4 space-y-2.5">
              {credits.stripe.steps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span
                    aria-hidden
                    className="grid size-6 shrink-0 place-items-center rounded-full border border-caution/40 text-xs text-caution tabular-nums"
                  >
                    {index + 1}
                  </span>
                  <span className="leading-relaxed text-foreground-2">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </Reveal>

      {/* Common errors */}
      <Reveal>
        <section className="mt-14">
          <h2 className="text-2xl font-normal tracking-tighter text-foreground">
            {credits.commonErrors.title}
          </h2>
          <p className="mt-2 max-w-[62ch] text-muted-foreground">
            {credits.commonErrors.intro}
          </p>
          <dl className="mt-6 space-y-3">
            {credits.commonErrors.items.map((item) => (
              <div
                key={item.symptom}
                className="rounded-lg border border-border bg-card p-4"
              >
                <dt className="font-medium text-foreground italic">
                  {item.symptom}
                </dt>
                <dd className="mt-1.5 flex gap-2.5 leading-relaxed text-foreground-2">
                  <span aria-hidden className="shrink-0 text-accent">
                    →
                  </span>
                  {item.fix}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </Reveal>

      {/* Good to know */}
      <Reveal>
        <section className="mt-14">
          <h2 className="text-2xl font-normal tracking-tighter text-foreground">
            Cose da sapere
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {credits.notes.map((note) => {
              const Icon = noteIcons[note.icon];
              return (
                <div
                  key={note.title}
                  className="rounded-lg border border-border bg-card p-4 transition-colors duration-200 hover:border-accent/50"
                >
                  <Icon className="mb-2.5 size-5 text-accent" />
                  <p className="font-medium text-foreground">{note.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {note.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </Reveal>

      <div className="mt-14 grid gap-3 sm:grid-cols-2">
        <a
          href="https://cursor.com/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-3 font-medium text-foreground transition-colors duration-200 hover:border-border-strong hover:bg-card-hover"
        >
          Apri la dashboard di Cursor
        </a>
        <Link
          href="/"
          className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 font-medium text-accent-foreground transition-all duration-200 hover:brightness-110"
        >
          <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          Torna all’evento
        </Link>
      </div>

      <SiteFooter />
    </main>
  );
}
