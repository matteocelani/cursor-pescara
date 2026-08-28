import type { ReactNode } from "react";

/** Traffic-light difficulty: green, yellow, orange, red. The dot count is
 *  kept as well, so colour is never the only signal. */
const TIERS = [
  { label: "Super base", dot: "bg-success", text: "text-success" },
  { label: "Base", dot: "bg-warning", text: "text-warning" },
  { label: "Intermedio", dot: "bg-caution", text: "text-caution" },
  { label: "Avanzato", dot: "bg-destructive", text: "text-destructive" },
] as const;

export function TierBadge({ tier }: { tier: number }) {
  const { label, dot, text } = TIERS[Math.min(Math.max(tier, 1), 4) - 1];

  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-2.5 py-1 text-xs">
      <span aria-hidden className="flex gap-0.5">
        {[1, 2, 3, 4].map((step) => (
          <span
            key={step}
            className={`size-1.5 rounded-full ${
              step <= tier ? dot : "bg-border-strong"
            }`}
          />
        ))}
      </span>
      <span className={text}>{label}</span>
    </span>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <p className="leading-relaxed text-pretty text-foreground-2">{children}</p>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className="text-lg font-medium tracking-snug text-foreground">
      {children}
    </h4>
  );
}

export function Tile({
  icon,
  title,
  children,
  href,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  href?: string;
}) {
  const inner = (
    <>
      <span className="mb-2.5 block text-accent">{icon}</span>
      <p className="font-medium text-foreground">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {children}
      </p>
    </>
  );
  const cls = "card-hover block rounded-lg border border-border bg-card p-4";

  if (!href) return <div className={cls}>{inner}</div>;
  if (href.startsWith("/"))
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  );
}

export function Callout({
  title,
  children,
  tone = "neutral",
}: {
  title: string;
  children: ReactNode;
  tone?: "neutral" | "accent" | "warn";
}) {
  const tones = {
    neutral: "border-border bg-card",
    accent: "border-accent/30 bg-accent-soft",
    warn: "border-destructive/30 bg-destructive/8",
  } as const;

  return (
    <div className={`rounded-lg border p-4 ${tones[tone]}`}>
      <p className="font-medium text-foreground">{title}</p>
      <div className="mt-1.5 leading-relaxed text-pretty text-foreground-2">
        {children}
      </div>
    </div>
  );
}

export function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 leading-relaxed text-foreground-2"
        >
          <span
            aria-hidden
            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function DefinitionList({
  items,
}: {
  items: readonly { term: string; text: string }[];
}) {
  return (
    <dl className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <div key={item.term} className="py-4">
          <dt className="font-medium text-foreground">{item.term}</dt>
          <dd className="mt-1 leading-relaxed text-pretty text-muted-foreground">
            {item.text}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Scrollable on narrow screens, with the first column acting as a row header. */
export function Table({
  head,
  rows,
  mono = [],
}: {
  head: readonly string[];
  rows: ReadonlyArray<readonly string[]>;
  mono?: readonly number[];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-card">
            {head.map((cell, index) => (
              <th
                key={index}
                scope="col"
                className="px-3.5 py-2.5 text-left font-normal whitespace-nowrap text-muted-foreground"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-3.5 py-2.5 align-top ${
                    mono.includes(cellIndex)
                      ? "font-mono text-xs whitespace-nowrap text-accent"
                      : cellIndex === 0
                        ? "font-medium text-foreground"
                        : "text-muted-foreground"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
