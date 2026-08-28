import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Book,
  Cloud,
  Code2,
  Laptop,
  Terminal,
  Users,
} from "lucide-react";
import { GrokBot } from "@/assets/icons";
import { Disclosure } from "@/components/disclosure";
import { CopyPrompt } from "@/components/exercise";
import { LevelChips, LevelRail } from "@/components/level-rail";
import { LevelSection } from "@/components/level-section";
import { ReadingProgress, Reveal } from "@/components/motion";
import { Procedure, VerticalSteps } from "@/components/procedure";
import { SiteFooter } from "@/components/site-footer";
import { StopPoint } from "@/components/stop-point";
import {
  Bullets,
  Callout,
  DefinitionList,
  Prose,
  SubHeading,
  Table,
  TierBadge,
  Tile,
} from "@/components/wiki";
import { grok as g } from "@/lib/grok";
import { event } from "@/lib/event";

const icons = {
  users: Users,
  book: Book,
  cloud: Cloud,
  terminal: Terminal,
  laptop: Laptop,
  shield: AlertTriangle,
  alert: AlertTriangle,
  code: Code2,
} as const;

function Icon({ name }: { name: keyof typeof icons }) {
  const Component = icons[name];
  return <Component className="size-5" />;
}

const tierByChapter = new Map<string, number>(
  g.chapters.map((chapter) => [chapter.id, chapter.tier]),
);

function Chapter({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  const tier = tierByChapter.get(id) ?? 2;

  return (
    <section className="space-y-5">
      <div
        id={id}
        className="flex scroll-mt-24 flex-wrap items-center justify-between gap-3 border-b border-border pb-2.5"
      >
        <h3 className="text-xl font-normal tracking-tight text-foreground">
          {title}
        </h3>
        <TierBadge tier={tier} />
      </div>
      {children}
    </section>
  );
}

function DocsLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm text-accent-strong transition-colors duration-200 hover:text-accent"
    >
      {children}
      <ArrowUpRight className="size-3.5" />
    </a>
  );
}

export default function GrokBotPage() {
  const [l1, l2, l3] = g.levels;

  return (
    <div className="min-h-svh">
      <ReadingProgress />

      {/* Hero */}
      <div className="hero-wash border-b border-border">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Link
            href="/"
            className="group mb-10 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Torna indietro
          </Link>

          <div className="bloom max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <GrokBot className="size-6 text-accent" />
              <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                {g.tagline}
              </p>
            </div>

            <h1 className="text-3xl leading-tight font-normal tracking-tightest text-balance text-foreground sm:text-4xl">
              {g.title}
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-pretty text-foreground-2">
              {g.intro.lead}
            </p>

            <div className="mt-4 space-y-3">
              {g.intro.body.map((paragraph) => (
                <Prose key={paragraph}>{paragraph}</Prose>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-border bg-card p-4 sm:p-5">
              <p className="font-medium text-foreground">
                {g.intro.prereq.title}
              </p>
              <p className="mt-1.5 leading-relaxed text-pretty text-foreground-2">
                {g.intro.prereq.text}
              </p>
              <Link
                href={event.cursorPath}
                className="group mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
              >
                {g.intro.prereq.cta}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
              {g.intro.meta.map((item) => (
                <div key={item.label}>
                  <dt className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-0.5 text-sm text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <h2 className="mb-3 font-mono text-xs tracking-wide text-muted-foreground uppercase">
                {g.levelMap.title}
              </h2>
              <ol className="divide-y divide-border overflow-hidden rounded-lg border border-border">
                {g.levelMap.rows.map((row) => (
                  <li key={row.id}>
                    <a
                      href={`#${row.id}`}
                      className="group flex flex-wrap items-center gap-x-4 gap-y-1.5 p-3.5 transition-colors duration-200 hover:bg-card-hover sm:flex-nowrap"
                    >
                      <span className="font-mono text-xs text-muted-foreground tabular-nums">
                        {row.n}
                      </span>
                      <span className="shrink-0 font-medium whitespace-nowrap text-foreground transition-colors duration-200 group-hover:text-accent sm:w-36">
                        {row.name}
                      </span>
                      <span className="min-w-0 flex-1 text-sm text-muted-foreground">
                        {row.who}
                      </span>
                      <TierBadge tier={row.tier} />
                      <span className="w-14 shrink-0 text-right font-mono text-xs text-muted-foreground">
                        {row.time}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 lg:hidden">
              <LevelChips levels={g.levels} />
            </div>

            <p className="mt-8 max-w-[62ch] text-sm text-muted-foreground">
              {g.intro.version}
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex max-w-6xl">
          <aside className="hidden w-52 shrink-0 px-4 pt-16 lg:block">
            <LevelRail levels={g.levels} chapters={g.chapters} />
          </aside>

          <main className="min-w-0 flex-1 px-4 pb-20 sm:px-6 lg:px-8">
            {/* ── LEVEL 1 ─────────────────────────────────────────────── */}
            <LevelSection level={l1}>
              <Chapter id="cos-e" title="Cos’è Grok Bot">
                <blockquote className="border-l-2 border-accent pl-5">
                  <p className="text-lg leading-relaxed text-pretty text-foreground">
                    {g.cosE.definition}
                  </p>
                  <footer className="mt-2 text-sm text-muted-foreground">
                    {g.cosE.definitionSource}
                  </footer>
                </blockquote>

                {g.cosE.paragraphs.map((p) => (
                  <Prose key={p}>{p}</Prose>
                ))}

                <div className="grid gap-3 sm:grid-cols-3">
                  {g.cosE.properties.map((item) => (
                    <Tile
                      key={item.title}
                      icon={<Icon name={item.icon} />}
                      title={item.title}
                    >
                      {item.text}
                    </Tile>
                  ))}
                </div>

                <Callout title={g.cosE.vsChatbot.title} tone="accent">
                  {g.cosE.vsChatbot.text}
                </Callout>

                <Callout title={g.cosE.beta.title}>{g.cosE.beta.text}</Callout>
                <DocsLink href={g.links.xaiOverview}>
                  Documentazione ufficiale di Grok Bot
                </DocsLink>
              </Chapter>

              <Chapter id="non-e-cursor" title="In cosa è diverso da Cursor">
                <Prose>{g.vsCursor.intro}</Prose>
                <Table
                  head={g.vsCursor.table.head}
                  rows={g.vsCursor.table.rows}
                />
                <div>
                  <SubHeading>{g.vsCursor.connections.title}</SubHeading>
                  <div className="mt-3">
                    <DefinitionList
                      items={g.vsCursor.connections.items.map((item) => ({
                        term: item.title,
                        text: item.text,
                      }))}
                    />
                  </div>
                </div>
              </Chapter>

              <Chapter
                id="primo-avvio"
                title="Dall’installazione al primo agent"
              >
                <Callout title={g.primoAvvio.requirements.title}>
                  <ul className="space-y-1.5">
                    {g.primoAvvio.requirements.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Callout>

                <div>
                  <SubHeading>Dove funziona</SubHeading>
                  <div className="mt-3">
                    <Table
                      head={g.primoAvvio.platforms.head}
                      rows={g.primoAvvio.platforms.rows}
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {g.primoAvvio.platforms.note}
                  </p>
                </div>

                <Procedure data={g.primoAvvio.procedure} />

                <Callout title={g.primoAvvio.naming.title} tone="accent">
                  {g.primoAvvio.naming.text}
                </Callout>
                <Callout title={g.primoAvvio.naming.distinction.title}>
                  {g.primoAvvio.naming.distinction.text}
                </Callout>
                <CopyPrompt
                  prompt={g.primoAvvio.naming.example}
                  label="Esempio ufficiale di agent"
                />

                <div>
                  <SubHeading>{g.primoAvvio.useCases.title}</SubHeading>
                  <p className="mt-2 leading-relaxed text-foreground-2">
                    {g.primoAvvio.useCases.intro}
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {g.primoAvvio.useCases.items.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-lg border border-border bg-card p-4"
                      >
                        <p className="font-medium text-foreground">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Callout
                      title={g.primoAvvio.useCases.pattern.title}
                      tone="accent"
                    >
                      {g.primoAvvio.useCases.pattern.text}
                    </Callout>
                  </div>
                </div>

                <div className="flex flex-wrap gap-5">
                  <DocsLink href={g.links.onboarding}>
                    Scarica Grok Bot
                  </DocsLink>
                  <DocsLink href={g.links.xaiUseCases}>
                    I ruoli documentati da xAI
                  </DocsLink>
                </div>
              </Chapter>

              <StopPoint
                title={g.primoAvvio.stop.title}
                text={g.primoAvvio.stop.text}
                continueLabel={g.primoAvvio.stop.continueLabel}
                continueHref="#livello-2"
                leaveLabel={g.primoAvvio.stop.leaveLabel}
                leaveHref="/"
              />
            </LevelSection>

            {/* ── LEVEL 2 ─────────────────────────────────────────────── */}
            <LevelSection level={l2}>
              <Chapter id="piani" title="Piani, accesso e limiti">
                <Callout title="Le fonti ufficiali non concordano" tone="warn">
                  {g.piani.intro}
                </Callout>

                <div>
                  <SubHeading>{g.piani.certain.title}</SubHeading>
                  <div className="mt-3">
                    <Bullets items={g.piani.certain.items} />
                  </div>
                </div>

                <Callout title={g.piani.trial.title} tone="warn">
                  {g.piani.trial.text}
                  <span className="mt-2 block">{g.piani.trial.advice}</span>
                </Callout>

                <div>
                  <SubHeading>{g.piani.usage.title}</SubHeading>
                  <div className="mt-3">
                    <Bullets items={g.piani.usage.items} />
                  </div>
                </div>

                <Disclosure
                  id="dd-supergrok"
                  title={g.piani.superGrok.title}
                  hint="Solo se hai già un abbonamento SuperGrok. Contiene due passaggi irreversibili."
                >
                  <div className="space-y-4">
                    <p className="leading-relaxed text-foreground-2">
                      {g.piani.superGrok.intro}
                    </p>
                    <Bullets items={g.piani.superGrok.warnings} />
                    <p className="text-sm text-muted-foreground">
                      {g.piani.superGrok.heavy}
                    </p>
                    <DocsLink href={g.links.superGrok}>
                      Docs: collegare SuperGrok
                    </DocsLink>
                  </div>
                </Disclosure>

                <Disclosure
                  id="dd-mobile-plans"
                  title={g.piani.mobile.title}
                  hint="Acquisti dall’app iPhone e cosa cambia"
                >
                  <p className="leading-relaxed text-foreground-2">
                    {g.piani.mobile.text}
                  </p>
                </Disclosure>

                <div className="flex flex-wrap gap-5">
                  <DocsLink href={g.links.plans}>Docs: piani</DocsLink>
                  <DocsLink href={g.links.pricing}>Prezzi Cursor</DocsLink>
                </div>
              </Chapter>

              <Chapter id="computer" title="Il computer nel cloud e i plugin">
                <Prose>{g.computer.intro}</Prose>
                <blockquote className="border-l-2 border-accent pl-5">
                  <p className="leading-relaxed text-pretty text-foreground">
                    {g.computer.definition}
                  </p>
                </blockquote>

                <div className="grid gap-3 sm:grid-cols-2">
                  {g.computer.facts.map((item) => (
                    <Tile
                      key={item.title}
                      icon={<Icon name={item.icon} />}
                      title={item.title}
                    >
                      {item.text}
                    </Tile>
                  ))}
                </div>

                <Callout title={g.computer.boundary.title} tone="warn">
                  {g.computer.boundary.text}
                </Callout>
                <Callout title={g.computer.localComputer.title}>
                  {g.computer.localComputer.text}
                </Callout>

                <div>
                  <SubHeading>{g.computer.recovery.title}</SubHeading>
                  <p className="mt-2 leading-relaxed text-foreground-2">
                    {g.computer.recovery.intro}
                  </p>
                  <div className="mt-4">
                    <Table
                      head={g.computer.recovery.table.head}
                      rows={g.computer.recovery.table.rows}
                    />
                  </div>
                  <div className="mt-4 space-y-3">
                    <Prose>{g.computer.recovery.order}</Prose>
                    <Prose>{g.computer.recovery.survives}</Prose>
                    <p className="text-sm text-muted-foreground">
                      {g.computer.recovery.mobile}
                    </p>
                  </div>
                </div>

                <div>
                  <SubHeading>{g.computer.plugins.title}</SubHeading>
                  <p className="mt-2 leading-relaxed text-foreground-2">
                    {g.computer.plugins.intro}
                  </p>
                  <div className="mt-4">
                    <Procedure data={g.computer.plugins.procedure} />
                  </div>
                  <div className="mt-4 space-y-3">
                    <Prose>{g.computer.plugins.advice}</Prose>
                    <Callout
                      title={g.computer.plugins.browser.title}
                      tone="accent"
                    >
                      {g.computer.plugins.browser.text}
                    </Callout>
                  </div>
                </div>

                <div className="flex flex-wrap gap-5">
                  <DocsLink href={g.links.xaiComputer}>
                    Docs: il computer e le app
                  </DocsLink>
                  <DocsLink href={g.links.plugins}>Docs: plugin</DocsLink>
                  <DocsLink href={g.links.recovery}>
                    Docs: recupero dei dati
                  </DocsLink>
                </div>
              </Chapter>

              <Chapter
                id="sicurezza"
                title="Sicurezza: cosa approvi e cosa non scrivi mai in chat"
              >
                <Prose>{g.sicurezza.intro}</Prose>

                <div className="grid gap-3 sm:grid-cols-2">
                  {g.sicurezza.rules.map((item) => (
                    <Tile
                      key={item.title}
                      icon={<Icon name={item.icon} />}
                      title={item.title}
                    >
                      {item.text}
                    </Tile>
                  ))}
                </div>

                <Callout title={g.sicurezza.autoReview.title}>
                  {g.sicurezza.autoReview.text}
                </Callout>
                <Callout title={g.sicurezza.sharing.title}>
                  {g.sicurezza.sharing.text}
                </Callout>

                <div>
                  <SubHeading>{g.sicurezza.cleanup.title}</SubHeading>
                  <p className="mt-2 leading-relaxed text-foreground-2">
                    {g.sicurezza.cleanup.intro}
                  </p>
                  <div className="mt-4">
                    <VerticalSteps steps={g.sicurezza.cleanup.steps} />
                  </div>
                  <div className="mt-4">
                    <Callout title="Attenzione" tone="warn">
                      {g.sicurezza.cleanup.warning}
                    </Callout>
                  </div>
                </div>

                <Callout title={g.sicurezza.privacy.title}>
                  {g.sicurezza.privacy.text}
                </Callout>

                <div className="flex flex-wrap gap-5">
                  <DocsLink href={g.links.xaiSecurity}>
                    Docs: approvazioni, sicurezza e privacy
                  </DocsLink>
                  <DocsLink href={g.links.secrets}>Docs: segreti</DocsLink>
                </div>
              </Chapter>

              <StopPoint
                title={g.sicurezza.stop.title}
                text={g.sicurezza.stop.text}
                continueLabel={g.sicurezza.stop.continueLabel}
                continueHref="#livello-3"
                leaveLabel={g.sicurezza.stop.leaveLabel}
                leaveHref="/"
              />
            </LevelSection>

            {/* ── LEVEL 3 ─────────────────────────────────────────────── */}
            <LevelSection level={l3}>
              <Chapter
                id="skill-routine"
                title="Skill, routine e più agent insieme"
              >
                <Prose>{g.automazione.intro}</Prose>
                <DefinitionList items={g.automazione.concepts} />

                <div>
                  <SubHeading>{g.automazione.order.title}</SubHeading>
                  <p className="mt-2 leading-relaxed text-foreground-2">
                    {g.automazione.order.text}
                  </p>
                  <div className="mt-4">
                    <VerticalSteps steps={g.automazione.order.steps} />
                  </div>
                </div>

                <div>
                  <SubHeading>{g.automazione.creating.title}</SubHeading>
                  <p className="mt-2 leading-relaxed text-foreground-2">
                    {g.automazione.creating.text}
                  </p>
                  <div className="mt-4">
                    <CopyPrompt
                      prompt={g.automazione.creating.example}
                      label="Esempio di richiesta"
                    />
                  </div>
                  <div className="mt-4">
                    <Bullets items={g.automazione.creating.triggers} />
                  </div>
                  <div className="mt-4">
                    <Callout title="Da evitare" tone="warn">
                      {g.automazione.creating.warning}
                    </Callout>
                  </div>
                </div>

                <Callout title={g.automazione.testRun.title} tone="warn">
                  {g.automazione.testRun.text}
                </Callout>

                <Disclosure
                  id="dd-teach"
                  title={g.automazione.teach.title}
                  hint="Far imparare una procedura guardandoti lavorare"
                >
                  <div className="space-y-3">
                    <p className="leading-relaxed text-foreground-2">
                      {g.automazione.teach.text}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {g.automazione.teach.note}
                    </p>
                  </div>
                </Disclosure>

                <div>
                  <SubHeading>{g.automazione.multi.title}</SubHeading>
                  <div className="mt-3">
                    <DefinitionList
                      items={g.automazione.multi.items.map((item) => ({
                        term: item.title,
                        text: item.text,
                      }))}
                    />
                  </div>
                  <div className="mt-4">
                    <CopyPrompt
                      prompt={g.automazione.multi.example}
                      label="Esempio di avvio in gruppo"
                    />
                  </div>
                </div>

                <div>
                  <SubHeading>{g.automazione.limits.title}</SubHeading>
                  <div className="mt-3">
                    <Table
                      head={g.automazione.limits.head}
                      rows={g.automazione.limits.rows}
                      mono={[1]}
                    />
                  </div>
                  <div className="mt-4">
                    <Bullets items={g.automazione.limits.notes} />
                  </div>
                </div>

                <Disclosure
                  id="dd-mobile-limits"
                  title={g.automazione.mobileLimits.title}
                  hint="Differenze fra app iPhone e desktop"
                >
                  <p className="leading-relaxed text-foreground-2">
                    {g.automazione.mobileLimits.text}
                  </p>
                </Disclosure>

                <DocsLink href={g.links.xaiRoutines}>
                  Docs: skill, routine e automazioni
                </DocsLink>
              </Chapter>
            </LevelSection>

            {/* Troubleshooting */}
            <Reveal>
              <section className="mt-14 border-t border-border pt-12">
                <h2 className="text-2xl font-normal tracking-tighter text-foreground">
                  {g.help.title}
                </h2>
                <p className="mt-2 max-w-[68ch] leading-relaxed text-foreground-2">
                  {g.help.first}
                </p>
                <div className="mt-6">
                  <Table head={g.help.table.head} rows={g.help.table.rows} />
                </div>

                <div className="mt-8 rounded-lg border border-border bg-card p-5">
                  <p className="font-medium text-foreground">
                    {g.help.support.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Scrivi a{" "}
                    <a
                      href={`mailto:${g.help.support.email}`}
                      className="text-accent-strong hover:underline"
                    >
                      {g.help.support.email}
                    </a>{" "}
                    e includi:
                  </p>
                  <div className="mt-3">
                    <Bullets items={g.help.support.items} />
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {g.help.support.warning}
                  </p>
                </div>
              </section>
            </Reveal>

            {/* Back to the Cursor guide */}
            <Reveal>
              <section className="mt-14 border-t border-border pt-12">
                <h2 className="text-2xl font-normal tracking-tighter text-foreground">
                  Dove continuare
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Link
                    href={event.cursorPath}
                    className="card-hover group block rounded-lg border border-border bg-card p-5"
                  >
                    <span className="mb-2.5 block text-accent">
                      <Book className="size-5" />
                    </span>
                    <p className="font-medium text-foreground">
                      Guida a Cursor
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      L’altro prodotto, spiegato da zero su sei livelli
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      Apri
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                  <a
                    href={g.links.gettingStarted}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-hover block rounded-lg border border-border bg-card p-5"
                  >
                    <span className="mb-2.5 block text-accent">
                      <GrokBot className="size-5" />
                    </span>
                    <p className="font-medium text-foreground">
                      Documentazione ufficiale
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Le pagine di Cursor e xAI su Grok Bot, in inglese
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      Vai
                      <ArrowUpRight className="size-4" />
                    </span>
                  </a>
                </div>
              </section>
            </Reveal>

            <SiteFooter />
          </main>
        </div>
      </div>
    </div>
  );
}
