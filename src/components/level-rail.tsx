"use client";

import { useEffect, useState } from "react";

type Chapter = { id: string; title: string; levelId: string };
type Level = { n: number; id: string; name: string };

/** Two tiers: the six levels are always visible, chapters appear only for
 *  the level you are reading. Lets an expert skip in one click. */
export function LevelRail({
  levels,
  chapters,
}: {
  levels: readonly Level[];
  chapters: readonly Chapter[];
}) {
  const [activeId, setActiveId] = useState(levels[0]?.id ?? "");

  useEffect(() => {
    let frame = 0;

    // The active level is the last one whose top edge has passed the band
    // under the header. Picking the topmost *intersecting* section instead
    // keeps the previous level highlighted, because sections are tall.
    const update = () => {
      frame = 0;
      let current = levels[0]?.id ?? "";
      for (const level of levels) {
        const el = document.getElementById(level.id);
        if (el && el.getBoundingClientRect().top <= 140) current = level.id;
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [levels]);

  const activeIndex = levels.findIndex((level) => level.id === activeId);

  return (
    <nav
      aria-label="Livelli"
      className="sticky top-24 self-start [scrollbar-width:thin]"
    >
      <p className="mb-3 font-mono text-xs tracking-wide text-muted-foreground uppercase">
        Livelli
      </p>
      <ol className="space-y-0.5 border-l border-border-soft">
        {levels.map((level, index) => {
          const isActive = level.id === activeId;
          const isPast = index < activeIndex;
          return (
            <li key={level.id}>
              <a
                href={`#${level.id}`}
                aria-current={isActive ? "step" : undefined}
                className={`-ml-px flex items-baseline gap-2.5 border-l-2 py-1.5 pl-4 text-sm transition-colors duration-200 ${
                  isActive
                    ? "border-accent text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  className={`text-xs tabular-nums ${
                    isPast ? "text-accent/70" : "text-muted-foreground/70"
                  }`}
                >
                  {level.n}
                </span>
                {level.name}
              </a>

              {isActive ? (
                <ol className="mt-0.5 mb-2 space-y-1 pl-9 text-xs">
                  {chapters
                    .filter((chapter) => chapter.levelId === level.id)
                    .map((chapter) => (
                      <li key={chapter.id}>
                        <a
                          href={`#${chapter.id}`}
                          className="block text-muted-foreground transition-colors duration-200 hover:text-accent"
                        >
                          {chapter.title}
                        </a>
                      </li>
                    ))}
                </ol>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Horizontal snap chips: the mobile and above-the-fold equivalent. */
export function LevelChips({ levels }: { levels: readonly Level[] }) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <ul className="flex w-max snap-x snap-mandatory gap-2">
        {levels.map((level) => (
          <li key={level.id} className="snap-start">
            <a
              href={`#${level.id}`}
              className="flex items-baseline gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm whitespace-nowrap transition-colors duration-200 hover:border-accent/50"
            >
              <span className="text-xs text-accent tabular-nums">
                {level.n}
              </span>
              {level.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
