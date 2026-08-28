import type { ReactNode } from "react";
import { Check } from "lucide-react";

export type LevelMeta = {
  n: number;
  id: string;
  name: string;
  subtitle: string;
  mode: string;
  assumes: string;
  exitCriterion: string;
  time: string;
};

export function LevelSection({
  level,
  children,
}: {
  level: LevelMeta;
  children: ReactNode;
}) {
  // Header, body and the closing card all share one measure, so nothing
  // sticks out past the reading column.
  const measure =
    level.n <= 2
      ? "max-w-[62ch]"
      : level.n <= 4
        ? "max-w-[68ch]"
        : "max-w-[72ch]";

  return (
    <section
      id={level.id}
      data-level={level.n}
      className={`scroll-mt-24 border-t border-border first:border-t-0 first:pt-0 ${
        level.n <= 2 ? "py-16" : level.n <= 4 ? "py-14" : "py-12"
      }`}
    >
      <header className={`${measure} mb-8`}>
        <div className="flex items-start gap-5">
          <span
            aria-hidden
            className="text-5xl leading-none font-normal tracking-tightest text-transparent [-webkit-text-stroke:1px_var(--border-strong)] sm:text-6xl"
          >
            {level.n}
          </span>
          <div className="min-w-0 pt-1">
            <p className="font-mono text-xs tracking-wide text-accent uppercase">
              Livello {level.n} · {level.mode}
            </p>
            <h2
              className={`mt-1.5 font-normal tracking-tighter text-balance text-foreground ${
                level.n <= 2 ? "text-3xl" : "text-2xl"
              }`}
            >
              {level.name}
            </h2>
            <p className="mt-1 text-lg text-muted-foreground">
              {level.subtitle}
            </p>
          </div>
        </div>

        <dl className="mt-6 grid gap-3 border-y border-border py-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-muted-foreground">Serve aver letto</dt>
            <dd className="mt-0.5 text-foreground-2">{level.assumes}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Tempo di lettura</dt>
            <dd className="mt-0.5 text-foreground-2">{level.time}</dd>
          </div>
        </dl>
      </header>

      <div
        className={`${measure} ${
          level.n <= 2 ? "space-y-8" : level.n <= 4 ? "space-y-7" : "space-y-6"
        }`}
      >
        {children}
      </div>

      <div
        className={`${measure} mt-10 flex gap-3 rounded-lg border border-success/25 bg-success/8 p-4`}
      >
        <Check className="mt-0.5 size-5 shrink-0 text-success" />
        <div>
          <p className="text-sm font-medium text-foreground">
            Alla fine di questo livello
          </p>
          <p className="mt-1 leading-relaxed text-foreground-2">
            {level.exitCriterion}
          </p>
        </div>
      </div>
    </section>
  );
}
