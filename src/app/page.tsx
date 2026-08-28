import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  Clock,
  Download,
  ExternalLink,
  Gift,
  Globe,
  Hammer,
  Laptop,
  MapPin,
  MessageSquare,
  Sparkles,
  Ticket,
  Users,
} from "lucide-react";
import { Telegram } from "@/assets/icons";
import { Reveal } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { FeatureRow, FeatureTile, InfoCard, Tip } from "@/components/ui";
import { event } from "@/lib/event";

const detailIcon = {
  calendar: Calendar,
  clock: Clock,
  map: MapPin,
  language: Globe,
  ticket: Ticket,
} as const;

const prepIcon = {
  laptop: Laptop,
  download: Download,
  spark: Sparkles,
  gift: Gift,
  chat: MessageSquare,
  hammer: Hammer,
  users: Users,
} as const;

const usefulLinks = [
  {
    title: "Guida a Cursor",
    detail: "Cos’è, spiegato da zero",
    href: event.cursorPath,
    Icon: Sparkles,
  },
  {
    title: "Riscatta i crediti",
    detail: "Istruzioni passo per passo",
    href: event.creditsPath,
    Icon: Gift,
  },
  {
    title: "Luma",
    detail: "Iscriviti all’evento",
    href: event.lumaUrl,
    Icon: Ticket,
  },
  {
    title: "Scarica Cursor",
    detail: "cursor.com",
    href: event.cursorUrl,
    Icon: Download,
  },
  {
    title: "Documentazione",
    detail: "Guida ufficiale, in inglese",
    href: event.docsUrl,
    Icon: BookOpen,
  },
  {
    title: "Riky Rock Bar",
    detail: "Apri su Google Maps",
    href: "https://www.google.com/maps/search/?api=1&query=Riky+Rock+Bar%2C+Via+Fernando+Francesco+d%27Avalos+60%2C+Pescara",
    Icon: MapPin,
  },
] as const;

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
      {/* Not animated: this is the first thing that must appear, always. */}
      <div className="bloom">
        <h1 className="text-3xl leading-tight font-normal tracking-tightest text-balance text-foreground sm:text-4xl">
          {event.title}
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-pretty text-foreground-2">
          {event.subtitle}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href={event.lumaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-cta inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-3.5 text-center font-medium text-accent-foreground transition-all duration-200 hover:brightness-110"
          >
            <Ticket className="size-4" />
            Registrati su Luma
          </a>
          <Link
            href={event.creditsPath}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-card px-4 py-3.5 text-center font-medium text-foreground transition-colors duration-200 hover:border-border-strong hover:bg-card-hover"
          >
            <Gift className="size-4" />
            Riscatta i crediti
          </Link>
        </div>
      </div>

      {/* The way in for anyone who does not know what Cursor is */}
      <Reveal>
        <Link
          href={event.cursorPath}
          className="group mt-8 block overflow-hidden rounded-lg border border-accent/30 bg-accent-soft p-5 transition-colors duration-200 hover:border-accent/60 hover:bg-accent-soft-hover sm:p-6"
        >
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
              <BookOpen className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-accent-strong">
                {event.explainer.kicker}
              </p>
              <h2 className="mt-1 text-xl font-normal tracking-tight text-foreground">
                {event.explainer.title}
              </h2>
              <p className="mt-2 leading-relaxed text-pretty text-foreground-2">
                {event.explainer.text}
              </p>
              <ul className="mt-4 space-y-1.5">
                {event.explainer.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              <span className="mt-4 inline-flex items-center gap-1.5 font-medium text-accent">
                {event.explainer.cta}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>
      </Reveal>

      <div className="mt-8 flex flex-col gap-5">
        <Reveal>
          <InfoCard icon={<Calendar className="size-5" />} title="Dettagli">
            <ul className="space-y-2">
              {event.details.map((item) => {
                const Icon = detailIcon[item.icon];
                return (
                  <li key={item.label}>
                    <FeatureRow
                      icon={<Icon className="size-4" />}
                      title={item.label}
                      href={"href" in item ? item.href : undefined}
                      linkLabel={
                        "linkLabel" in item ? item.linkLabel : undefined
                      }
                    >
                      {item.value}
                    </FeatureRow>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3">
              <Tip>{event.arriveNote}</Tip>
            </div>
          </InfoCard>
        </Reveal>

        <Reveal>
          <InfoCard
            icon={<Users className="size-5" />}
            title="Come partecipare"
          >
            <div className="mb-6 grid gap-3 sm:grid-cols-2">
              {event.formats.map((format) => {
                const Icon = prepIcon[format.icon];
                return (
                  <FeatureTile
                    key={format.name}
                    icon={<Icon className="size-5" />}
                    title={`${format.name} · ${format.time}`}
                  >
                    {format.description}
                  </FeatureTile>
                );
              })}
            </div>

            <p className="mb-2.5 font-medium text-foreground">
              Prima di venire
            </p>
            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {event.beforeYouCome.map((item) => {
                const Icon = prepIcon[item.icon];
                return (
                  <FeatureTile
                    key={item.title}
                    icon={<Icon className="size-5" />}
                    title={item.title}
                    href={"href" in item ? item.href : undefined}
                  >
                    {item.text}
                  </FeatureTile>
                );
              })}
            </div>

            <p className="mb-2.5 font-medium text-foreground">
              Durante l’evento
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {event.duringEvent.map((item) => {
                const Icon = prepIcon[item.icon];
                return (
                  <FeatureTile
                    key={item.title}
                    icon={<Icon className="size-5" />}
                    title={item.title}
                  >
                    {item.text}
                  </FeatureTile>
                );
              })}
            </div>
          </InfoCard>
        </Reveal>

        <Reveal>
          <InfoCard
            icon={<Gift className="size-5" />}
            title="Crediti Cursor"
          >
            <p className="mb-4 leading-relaxed text-foreground-2">
              Al check-in ti diamo un link o un QR code personale. La pagina
              dedicata ti accompagna passo per passo: cosa cliccare, cosa devi
              vedere sullo schermo e cosa fare se qualcosa non torna.
            </p>
            <Link
              href={event.creditsPath}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 font-medium text-accent-foreground transition-all duration-200 hover:brightness-110"
            >
              <Gift className="size-4" />
              Vai alle istruzioni
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </InfoCard>
        </Reveal>

        <Reveal>
          <InfoCard
            icon={<ExternalLink className="size-5" />}
            title="Link utili"
          >
            <a
              href={event.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-4 flex items-center gap-4 rounded-md border border-border bg-card px-4 py-4 transition-colors duration-200 hover:border-accent/50 hover:bg-card-hover"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-[#2AABEE]/12 text-[#2AABEE]">
                <Telegram className="size-6" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-medium text-foreground">
                  Telegram · Cursor Italia
                </span>
                <span className="block text-sm text-muted-foreground">
                  Il gruppo dove chiedere aiuto, prima e dopo l’evento
                </span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {usefulLinks.map(({ title, detail, href, Icon }) => (
                <FeatureTile
                  key={title}
                  icon={<Icon className="size-5" />}
                  title={title}
                  href={href}
                >
                  {detail}
                </FeatureTile>
              ))}
            </div>
          </InfoCard>
        </Reveal>
      </div>

      <SiteFooter />
    </main>
  );
}
