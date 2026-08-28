import Link from "next/link";
import {
  AlertTriangle,
  Apple,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Book,
  Boxes,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  Gift,
  Hammer,
  Laptop,
  MessageSquare,
  Monitor,
  Repeat,
  Shield,
  Sparkles,
  Terminal,
  Users,
} from "lucide-react";
import { Cursor, GrokBot } from "@/assets/icons";
import { Disclosure } from "@/components/disclosure";
import { CopyPrompt, DeepDive, Exercise } from "@/components/exercise";
import { LevelChips, LevelRail } from "@/components/level-rail";
import { LevelSection } from "@/components/level-section";
import { Procedure, VerticalSteps } from "@/components/procedure";
import { ReadingProgress, Reveal } from "@/components/motion";
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
import { guide as g } from "@/lib/cursor";
import { event } from "@/lib/event";

const icons = {
  laptop: Laptop,
  spark: Sparkles,
  book: Book,
  terminal: Terminal,
  cloud: Cloud,
  loop: Repeat,
  code: Code2,
  hammer: Hammer,
  users: Users,
  alert: AlertTriangle,
  shield: Shield,
  gift: Gift,
  external: ExternalLink,
  chat: MessageSquare,
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

export default function CursorPage() {
  const [l1, l2, l3, l4, l5, l6] = g.levels;

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
              <Cursor className="size-6 text-foreground" />
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

            {/* The fastest way to skip ahead */}
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
                      <span className="shrink-0 font-medium whitespace-nowrap text-foreground transition-colors duration-200 group-hover:text-accent sm:w-40">
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
            {/* ── LEVEL 1 ─────────────────────────────────────────── */}
            <LevelSection level={l1}>
              <Chapter id="cos-e-un-programma" title="Cos’è un programma">
                {g.l1.programma.paragraphs.map((p) => (
                  <Prose key={p}>{p}</Prose>
                ))}
                <Callout title={g.l1.programma.analogy.title} tone="accent">
                  {g.l1.programma.analogy.text}
                </Callout>
              </Chapter>

              <Chapter id="cos-e-ai" title="Cos’è l’intelligenza artificiale">
                {g.l1.ai.paragraphs.map((p) => (
                  <Prose key={p}>{p}</Prose>
                ))}
                <Callout title={g.l1.ai.howItWorks.title} tone="accent">
                  {g.l1.ai.howItWorks.text}
                </Callout>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {g.l1.ai.examples.map((item) => (
                    <Tile
                      key={item.title}
                      icon={<Icon name={item.icon} />}
                      title={item.title}
                    >
                      {item.text}
                    </Tile>
                  ))}
                </div>
              </Chapter>

              <Chapter id="cos-e-codice" title="Cosa vuol dire scrivere codice">
                {g.l1.codice.paragraphs.map((p) => (
                  <Prose key={p}>{p}</Prose>
                ))}
                <Callout title={g.l1.codice.why.title} tone="accent">
                  {g.l1.codice.why.text}
                </Callout>
              </Chapter>

              <Chapter
                id="cursor-in-una-frase"
                title="Cosa fa Cursor"
              >
                <p className="border-l-2 border-accent pl-5 text-xl leading-relaxed text-balance text-foreground">
                  {g.l1.inOneSentence.sentence}
                </p>
                {g.l1.inOneSentence.paragraphs.map((p) => (
                  <Prose key={p}>{p}</Prose>
                ))}
                <Callout title={g.l1.inOneSentence.analogy.title} tone="accent">
                  {g.l1.inOneSentence.analogy.text}
                </Callout>
              </Chapter>

              <Chapter id="non-e-chatgpt" title="Che differenza c’è con ChatGPT">
                <p className="text-xl leading-relaxed text-balance text-foreground">
                  {g.l1.notChatGpt.answer}
                </p>
                {g.l1.notChatGpt.paragraphs.map((p) => (
                  <Prose key={p}>{p}</Prose>
                ))}
                <Callout title={g.l1.notChatGpt.analogy.title} tone="accent">
                  {g.l1.notChatGpt.analogy.text}
                  <span className="mt-2 block font-medium text-foreground">
                    {g.l1.notChatGpt.analogy.reassurance}
                  </span>
                </Callout>
                <Table
                  head={g.l1.notChatGpt.table.head}
                  rows={g.l1.notChatGpt.table.rows}
                />
                <Prose>{g.l1.notChatGpt.both}</Prose>
                <DeepDive id="dd-chatgpt" data={g.l1.notChatGpt.deepDive} />
              </Chapter>
            </LevelSection>

            {/* ── LEVEL 2 ─────────────────────────────────────────── */}
            <LevelSection level={l2}>
              <Chapter id="il-ciclo" title="Come funziona, in cinque passaggi">
                <Prose>{g.l2.ciclo.intro}</Prose>
                <VerticalSteps
                  steps={g.l2.ciclo.steps.map((step) => ({
                    title: step.title,
                    action: step.text,
                  }))}
                />
                <Callout title={g.l2.ciclo.important.title} tone="accent">
                  {g.l2.ciclo.important.text}
                </Callout>
              </Chapter>

              <Chapter
                id="cosa-puoi-chiedere"
                title="Cosa puoi chiedergli, con esempi"
              >
                <Prose>{g.l2.whatToAsk.intro}</Prose>
                <div className="grid gap-3 sm:grid-cols-2">
                  {g.l2.whatToAsk.items.map((item) => (
                    <Tile
                      key={item.title}
                      icon={<Icon name={item.icon} />}
                      title={item.title}
                    >
                      {item.text}
                    </Tile>
                  ))}
                </div>
                <blockquote className="border-l-2 border-accent pl-5">
                  <p className="leading-relaxed text-pretty text-foreground-2">
                    {g.l2.whatToAsk.official.quote}
                  </p>
                  <footer className="mt-2 text-sm text-muted-foreground">
                    {g.l2.whatToAsk.official.source}
                  </footer>
                </blockquote>
              </Chapter>

              <Chapter id="lo-schermo" title="Cosa vedi sullo schermo">
                <Prose>{g.l2.schermo.intro}</Prose>
                <DefinitionList items={g.l2.schermo.zones} />
                <Prose>{g.l2.schermo.note}</Prose>
              </Chapter>

              <Chapter id="cosa-non-fa" title="Cosa non sa fare">
                <Prose>{g.l2.cosaNonFa.intro}</Prose>
                <div className="grid gap-3 sm:grid-cols-2">
                  {g.l2.cosaNonFa.items.map((item) => (
                    <Tile
                      key={item.title}
                      icon={<Icon name={item.icon} />}
                      title={item.title}
                    >
                      {item.text}
                    </Tile>
                  ))}
                </div>
                <div className="space-y-4">
                  {g.l2.cosaNonFa.quotes.map((quote) => (
                    <blockquote
                      key={quote}
                      className="border-l-2 border-border pl-5"
                    >
                      <p className="leading-relaxed text-pretty text-foreground-2">
                        {quote}
                      </p>
                    </blockquote>
                  ))}
                  <p className="text-sm text-muted-foreground">
                    {g.l2.cosaNonFa.quotesSource}
                  </p>
                </div>
              </Chapter>

              <StopPoint
                title={g.l2.stop.title}
                text={g.l2.stop.text}
                continueLabel={g.l2.stop.continueLabel}
                continueHref="#livello-3"
                leaveLabel={g.l2.stop.leaveLabel}
                leaveHref="/"
              />
            </LevelSection>

            {/* ── LEVEL 3 ─────────────────────────────────────────── */}
            <LevelSection level={l3}>
              <Chapter id="cosa-ti-serve" title="Cosa ti serve prima di iniziare">
                <Prose>{g.l3.cosaTiServe.intro}</Prose>
                <div className="grid gap-3 sm:grid-cols-3">
                  {g.l3.cosaTiServe.items.map((item) => (
                    <Tile
                      key={item.title}
                      icon={<Icon name={item.icon} />}
                      title={item.title}
                    >
                      {item.text}
                    </Tile>
                  ))}
                </div>
                <Prose>{g.l3.cosaTiServe.note}</Prose>
              </Chapter>

              <Chapter id="account" title="Creare l’account gratuito">
                <Procedure data={g.l3.account} />
              </Chapter>

              <Chapter id="installare" title="Scaricare e installare il programma">
                <Prose>
                  Apri solo la voce del tuo computer. Le altre due non ti
                  servono.
                </Prose>
                <div className="space-y-3">
                  <Disclosure
                    id="install-mac"
                    title="Ho un Mac"
                    hint="macOS 12 o più recente · 5 minuti"
                    icon={<Apple className="size-5" />}
                  >
                    <Procedure data={g.l3.installMac} bare />
                  </Disclosure>

                  <Disclosure
                    id="install-windows"
                    title="Ho Windows"
                    hint="Windows 10 o più recente · 5 minuti"
                    icon={<Monitor className="size-5" />}
                  >
                    <Procedure data={g.l3.installWindows} bare />
                  </Disclosure>

                  <Disclosure
                    id="install-linux"
                    title="Ho Linux"
                    hint="Comandi da terminale · per chi ci è abituato"
                    icon={<Terminal className="size-5" />}
                  >
                    <p className="leading-relaxed text-foreground-2">
                      {g.l3.installLinux.note}
                    </p>
                    <div className="mt-4">
                      <CopyPrompt
                        prompt={g.l3.installLinux.command}
                        label="Comandi da terminale"
                      />
                    </div>
                    <div className="mt-4">
                      <Callout title="Non confonderti" tone="warn">
                        {g.l3.installLinux.warning}
                      </Callout>
                    </div>
                  </Disclosure>
                </div>
                <DocsLink href={g.links.installHelp}>
                  Istruzioni ufficiali di installazione
                </DocsLink>
              </Chapter>

              <Chapter id="cartelle" title="Cosa sono file, cartelle e progetti">
                <Prose>{g.l3.cartelle.intro}</Prose>
                <DefinitionList items={g.l3.cartelle.terms} />
                <Procedure data={g.l3.cartelle.procedure} />
              </Chapter>

              <Chapter id="prima-domanda" title="Fare la prima domanda">
                <Callout title={g.l3.primaDomanda.safeMode.title} tone="accent">
                  {g.l3.primaDomanda.safeMode.text}
                </Callout>
                <Procedure data={g.l3.primaDomanda.procedure}>
                  <div className="mt-4">
                    <CopyPrompt
                      prompt={g.l3.primaDomanda.askPrompt}
                      label="La domanda da copiare"
                    />
                  </div>
                </Procedure>
              </Chapter>

              <Chapter id="primo-file" title="Farsi creare il primo file">
                <Prose>{g.l3.primoFile.intro}</Prose>
                <Exercise id="ex-primo-file" exercise={g.l3.primoFile.exercise} />
                <Callout title={g.l3.primoFile.afterward.title} tone="accent">
                  {g.l3.primoFile.afterward.text}
                </Callout>
              </Chapter>

              <StopPoint
                title={g.l3.stop.title}
                text={g.l3.stop.text}
                continueLabel={g.l3.stop.continueLabel}
                continueHref="#livello-4"
                leaveLabel={g.l3.stop.leaveLabel}
                leaveHref="/"
              />
            </LevelSection>

            {/* ── LEVEL 4 ─────────────────────────────────────────── */}
            <LevelSection level={l4}>
              <Chapter id="parole" title="Il vocabolario: modello, prompt, contesto, token">
                <Prose>{g.l4.words.intro}</Prose>
                <DefinitionList items={g.l4.words.terms} />
              </Chapter>

              <Chapter
                id="richiesta-che-funziona"
                title="Come scrivere una richiesta che funziona"
              >
                <Prose>{g.l4.goodPrompt.intro}</Prose>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-destructive/30 bg-destructive/8 p-4">
                    <p className="text-sm font-medium text-foreground">
                      {g.l4.goodPrompt.comparison.bad.label}
                    </p>
                    <p className="mt-2 font-mono text-sm text-foreground-2">
                      {g.l4.goodPrompt.comparison.bad.text}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {g.l4.goodPrompt.comparison.bad.why}
                    </p>
                  </div>
                  <div className="rounded-lg border border-success/30 bg-success/8 p-4">
                    <p className="text-sm font-medium text-foreground">
                      {g.l4.goodPrompt.comparison.good.label}
                    </p>
                    <p className="mt-2 font-mono text-sm text-foreground-2">
                      {g.l4.goodPrompt.comparison.good.text}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {g.l4.goodPrompt.comparison.good.why}
                    </p>
                  </div>
                </div>
                <Bullets items={g.l4.goodPrompt.tips} />
                <Exercise id="ex-prompt" exercise={g.l4.goodPrompt.exercise} />
              </Chapter>

              <Chapter id="tab-e-k" title="Le due scorciatoie che userai sempre: Tab e ⌘K">
                <Prose>{g.l4.surfaces.intro}</Prose>
                <div>
                  <SubHeading>{g.l4.surfaces.tab.title}</SubHeading>
                  <div className="mt-3">
                    <Bullets items={g.l4.surfaces.tab.points} />
                  </div>
                </div>
                <div>
                  <SubHeading>{g.l4.surfaces.inline.title}</SubHeading>
                  <div className="mt-3">
                    <Bullets items={g.l4.surfaces.inline.points} />
                  </div>
                </div>
                <div>
                  <SubHeading>Le scorciatoie che contano</SubHeading>
                  <div className="mt-3">
                    <Table
                      head={["Azione", "Mac", "Windows / Linux"]}
                      rows={g.shortcuts.map((s) => [s.action, s.mac, s.win])}
                      mono={[1, 2]}
                    />
                  </div>
                </div>
                <Disclosure
                  id="dd-vscode"
                  title={g.fromVsCode.title}
                  hint="Solo se usi già VS Code. Altrimenti salta."
                  icon={<Code2 className="size-5" />}
                >
                  <div className="space-y-4">
                    <p className="leading-relaxed text-foreground-2">
                      {g.fromVsCode.text}
                    </p>
                    <Callout title="Due differenze che contano" tone="warn">
                      {g.fromVsCode.warning}
                    </Callout>
                  </div>
                </Disclosure>
                <DeepDive id="dd-surfaces" data={g.l4.surfaces.deepDive} />
              </Chapter>

              <Chapter
                id="quando-si-blocca"
                title="Cosa fare quando qualcosa va storto"
              >
                <Prose>{g.l4.troubleshooting.intro}</Prose>
                <dl className="space-y-3">
                  {g.l4.troubleshooting.items.map((item) => (
                    <div
                      key={item.symptom}
                      className="rounded-lg border border-border bg-card p-4"
                    >
                      <dt className="font-medium text-foreground italic">
                        {item.symptom}
                      </dt>
                      <dd className="mt-1.5 flex gap-2.5 leading-relaxed text-foreground-2">
                        <span aria-hidden className="text-accent">
                          →
                        </span>
                        {item.fix}
                      </dd>
                    </div>
                  ))}
                </dl>
                <DocsLink href={g.links.troubleshooting}>
                  Problemi di installazione, pagina ufficiale
                </DocsLink>
              </Chapter>
            </LevelSection>

            {/* ── LEVEL 5 ─────────────────────────────────────────── */}
            <LevelSection level={l5}>
              <Chapter id="agent-checkpoint" title="L’Agent: cosa fa e come tornare indietro">
                <Prose>{g.l5.agent.intro}</Prose>
                <div className="grid gap-3 sm:grid-cols-3">
                  {g.l5.agent.components.map((item) => (
                    <Tile
                      key={item.title}
                      icon={<Icon name={item.icon} />}
                      title={item.title}
                    >
                      {item.text}
                    </Tile>
                  ))}
                </div>
                <div>
                  <SubHeading>Cosa sa fare, concretamente</SubHeading>
                  <div className="mt-3">
                    <Bullets items={g.l5.agent.tools} />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {g.l5.agent.noLimit}
                  </p>
                </div>
                <Callout title={g.l5.agent.diskWarning.title} tone="warn">
                  {g.l5.agent.diskWarning.text}
                </Callout>
                <Callout title={g.l5.agent.checkpoints.title} tone="accent">
                  {g.l5.agent.checkpoints.text}
                </Callout>
                <Callout title="Da non confondere">
                  {g.l5.agent.checkpoints.warning}
                </Callout>
                <Callout title={g.l5.agent.windowsGotcha.title} tone="warn">
                  {g.l5.agent.windowsGotcha.text}
                </Callout>
                <div>
                  <SubHeading>Come si guida mentre lavora</SubHeading>
                  <div className="mt-3">
                    <DefinitionList items={g.l5.agent.steering} />
                  </div>
                </div>
                <Exercise id="ex-checkpoint" exercise={g.l5.agent.exercise} />
                <DocsLink href={g.links.agentOverview}>Docs: Agent</DocsLink>
              </Chapter>

              <Chapter id="modalita" title="Le quattro modalità: Agent, Plan, Ask, Debug">
                <Prose>{g.l5.modes.intro}</Prose>
                <Table
                  head={g.l5.modes.table.head}
                  rows={g.l5.modes.table.rows}
                />
                <div>
                  <SubHeading>{g.l5.modes.plan.title}</SubHeading>
                  <div className="mt-3">
                    <Bullets items={g.l5.modes.plan.points} />
                  </div>
                </div>
                <Callout title={g.l5.modes.debug.title}>
                  {g.l5.modes.debug.text}
                </Callout>
                <Callout title={g.l5.modes.design.title}>
                  {g.l5.modes.design.text}
                </Callout>
                <Exercise id="ex-plan" exercise={g.l5.modes.exercise} />
                <DocsLink href={g.links.planMode}>Docs: Plan Mode</DocsLink>
              </Chapter>

              <Chapter id="contesto" title="Il contesto: cosa vede l’agent e come guidarlo">
                <Prose>{g.l5.context.intro}</Prose>
                <Callout title={g.l5.context.ring.title} tone="accent">
                  {g.l5.context.ring.text}
                </Callout>
                <div className="grid gap-3 sm:grid-cols-2">
                  {g.l5.context.tools.map((item) => (
                    <Tile
                      key={item.title}
                      icon={<Icon name={item.icon} />}
                      title={item.title}
                    >
                      {item.text}
                    </Tile>
                  ))}
                </div>
                <Callout
                  title={g.l5.context.counterintuitive.title}
                  tone="warn"
                >
                  {g.l5.context.counterintuitive.text}
                </Callout>
                <div>
                  <SubHeading>Un AGENTS.md di esempio</SubHeading>
                  <div className="mt-3">
                    <CopyPrompt
                      prompt={g.l5.context.rulesExample}
                      label="AGENTS.md"
                    />
                  </div>
                </div>
                <DeepDive id="dd-context" data={g.l5.context.deepDive} />
                <Exercise id="ex-rules" exercise={g.l5.context.exercise} />
                <DocsLink href={g.links.rules}>Docs: Rules</DocsLink>
              </Chapter>
            </LevelSection>

            {/* ── LEVEL 6 ─────────────────────────────────────────── */}
            <LevelSection level={l6}>
              <Chapter id="estendere" title="Skills, Hooks e MCP: collegare strumenti esterni">
                <Prose>{g.l6.extend.intro}</Prose>
                <div className="grid gap-3 sm:grid-cols-3">
                  {g.l6.extend.components.map((item) => (
                    <Tile
                      key={item.title}
                      icon={<Icon name={item.icon} />}
                      title={item.title}
                    >
                      {item.text}
                    </Tile>
                  ))}
                </div>
                <Prose>{g.l6.extend.skillDirs}</Prose>
                <div>
                  <SubHeading>Alcune skill già incluse</SubHeading>
                  <div className="mt-3 divide-y divide-border border-y border-border">
                    {g.l6.extend.builtinSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-baseline gap-3 py-2.5"
                      >
                        <code className="shrink-0 rounded-sm border border-code-border bg-code px-1.5 py-0.5 font-mono text-xs text-accent">
                          {skill.name}
                        </code>
                        <p className="text-sm text-muted-foreground">
                          {skill.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-card p-5">
                  <div className="mb-3 flex items-center gap-2.5">
                    <Boxes className="size-5 text-accent" />
                    <h4 className="text-xl font-normal tracking-tight text-foreground">
                      {g.l6.extend.mcp.title}
                    </h4>
                  </div>
                  <p className="leading-relaxed text-pretty text-foreground-2">
                    {g.l6.extend.mcp.plain}
                  </p>

                  <h5 className="mt-6 mb-3 font-medium text-foreground">
                    I tre trasporti
                  </h5>
                  <Table
                    head={g.l6.extend.mcp.transports.head}
                    rows={g.l6.extend.mcp.transports.rows}
                    mono={[0]}
                  />

                  <h5 className="mt-6 mb-2 font-medium text-foreground">
                    Dove si configura
                  </h5>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    {g.l6.extend.mcp.configWhere}
                  </p>
                  <CopyPrompt
                    prompt={g.l6.extend.mcp.json}
                    label="mcp.json"
                  />

                  <h5 className="mt-6 mb-3 font-medium text-foreground">
                    Sicurezza
                  </h5>
                  <Bullets items={g.l6.extend.mcp.security} />
                  <p className="mt-4 text-sm text-muted-foreground">
                    {g.l6.extend.mcp.debug}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {g.l6.extend.mcp.paidNote}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-5">
                    <DocsLink href={g.links.mcp}>Docs: MCP</DocsLink>
                    <DocsLink href={g.links.marketplace}>Marketplace</DocsLink>
                  </div>
                </div>

                <Exercise id="ex-skill" exercise={g.l6.extend.exercise} />
                <DocsLink href={g.links.skills}>Docs: Skills</DocsLink>
              </Chapter>

              <Chapter id="scalare" title="Più agent insieme: subagent, cloud, automazioni">
                <div>
                  <SubHeading>{g.l6.scale.subagents.title}</SubHeading>
                  <p className="mt-3 leading-relaxed text-pretty text-foreground-2">
                    {g.l6.scale.subagents.text}
                  </p>
                  <div className="mt-4">
                    <DefinitionList items={g.l6.scale.subagents.builtin} />
                  </div>
                  <div className="mt-4">
                    <Callout title="I compromessi, detti chiaramente" tone="warn">
                      <ul className="space-y-1.5">
                        {g.l6.scale.subagents.tradeoffs.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </Callout>
                  </div>
                </div>

                <div>
                  <SubHeading>{g.l6.scale.cloud.title}</SubHeading>
                  <p className="mt-3 leading-relaxed text-pretty text-foreground-2">
                    {g.l6.scale.cloud.text}
                  </p>
                  <div className="mt-3">
                    <Bullets items={g.l6.scale.cloud.notes} />
                  </div>
                </div>

                <div>
                  <SubHeading>{g.l6.scale.automations.title}</SubHeading>
                  <p className="mt-3 leading-relaxed text-pretty text-foreground-2">
                    {g.l6.scale.automations.text}
                  </p>
                  <div className="mt-3">
                    <Bullets items={g.l6.scale.automations.examples} />
                  </div>
                  <div className="mt-4">
                    <DefinitionList items={g.l6.scale.automations.managed} />
                  </div>
                </div>

                <div>
                  <SubHeading>{g.l6.scale.cli.title}</SubHeading>
                  <div className="mt-3">
                    <CopyPrompt
                      prompt={g.l6.scale.cli.install}
                      label="Installazione CLI"
                    />
                  </div>
                  <div className="mt-3">
                    <Bullets items={g.l6.scale.cli.notes} />
                  </div>
                  <div className="mt-3">
                    <Callout title="Attenzione" tone="warn">
                      {g.l6.scale.cli.warning}
                    </Callout>
                  </div>
                </div>

                <div className="flex flex-wrap gap-5">
                  <DocsLink href={g.links.subagents}>Docs: Subagents</DocsLink>
                  <DocsLink href={g.links.cloudAgent}>
                    Docs: Cloud Agents
                  </DocsLink>
                  <DocsLink href={g.links.automations}>
                    Docs: Automations
                  </DocsLink>
                </div>
              </Chapter>

              <Chapter id="costi" title="Costi, permessi e privacy">
                <Callout title={g.l6.costs.free.title}>
                  {g.l6.costs.free.text}
                </Callout>
                <Table
                  head={g.l6.costs.plans.head}
                  rows={g.l6.costs.plans.rows}
                  mono={[1]}
                />
                <Prose>{g.l6.costs.pools}</Prose>
                <div>
                  <SubHeading>Non bruciare crediti</SubHeading>
                  <div className="mt-3">
                    <Bullets items={g.l6.costs.efficiency} />
                  </div>
                </div>
                <div>
                  <SubHeading>{g.l6.costs.runModes.title}</SubHeading>
                  <p className="mt-3 leading-relaxed text-foreground-2">
                    {g.l6.costs.runModes.text}
                  </p>
                  <div className="mt-4">
                    <Table
                      head={g.l6.costs.runModes.table.head}
                      rows={g.l6.costs.runModes.table.rows}
                    />
                  </div>
                  <div className="mt-4">
                    <Bullets items={g.l6.costs.runModes.warnings} />
                  </div>
                </div>
                <DeepDive id="dd-costs" data={g.l6.costs.corrections} />
                <div className="flex flex-wrap gap-5">
                  <DocsLink href={g.links.pricing}>Prezzi ufficiali</DocsLink>
                  <DocsLink href={g.links.runModes}>Docs: Run Modes</DocsLink>
                </div>
              </Chapter>
            </LevelSection>

            {/* The next product: deliberately given weight */}
            <Reveal>
              <section
                id="grok-bot"
                className="mt-14 scroll-mt-24 border-t border-border pt-12"
              >
                <p className="text-xs tracking-wide text-accent uppercase">
                  E adesso
                </p>
                <h2 className="mt-2 text-2xl font-normal tracking-tighter text-balance text-foreground sm:text-3xl">
                  {g.grokNext.title}
                </h2>
                <p className="mt-3 max-w-[68ch] text-lg leading-relaxed text-pretty text-foreground-2">
                  {g.grokNext.lead}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {g.grokNext.points.map((point) => (
                    <div
                      key={point.title}
                      className="rounded-lg border border-border bg-card p-4"
                    >
                      <p className="font-medium text-foreground">
                        {point.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {point.text}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href={event.grokPath}
                  className="group mt-6 flex items-center gap-4 rounded-lg border border-accent/40 bg-accent-soft p-5 transition-colors duration-200 hover:border-accent/70 hover:bg-accent-soft-hover sm:p-6"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <GrokBot className="size-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-medium text-foreground">
                      {g.grokNext.cta.title}
                    </span>
                    <span className="mt-0.5 block text-muted-foreground">
                      {g.grokNext.cta.text}
                    </span>
                  </span>
                  <ArrowRight className="size-5 shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </section>
            </Reveal>

            {/* Closing */}
            <Reveal>
              <section className="mt-14 border-t border-border pt-12">
                <h2 className="text-2xl font-normal tracking-tighter text-foreground">
                  Dove continuare
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <Tile
                    icon={<Icon name="book" />}
                    title="Docs"
                    href={g.links.docs}
                  >
                    La documentazione ufficiale
                  </Tile>
                  <Tile
                    icon={<Icon name="spark" />}
                    title="Learn"
                    href={g.links.learn}
                  >
                    Il corso ufficiale, per chi programma
                  </Tile>
                  <Tile
                    icon={<Icon name="hammer" />}
                    title="Vibe coding"
                    href={g.links.vibeCoding}
                  >
                    Costruire senza essere sviluppatore
                  </Tile>
                  <Tile
                    icon={<Download className="size-5" />}
                    title="Scarica"
                    href={g.links.download}
                  >
                    cursor.com/download
                  </Tile>
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
