"use client";

import { useState, useSyncExternalStore } from "react";
import { Check, Copy, FlaskConical, Laptop } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function CopyPrompt({
  prompt,
  label = "Prompt da incollare",
}: {
  prompt: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="overflow-hidden rounded-md border border-code-border bg-code">
      <div className="flex items-center justify-between gap-3 border-b border-code-border px-3 py-2">
        <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
          {label}
        </span>
        <button
          type="button"
          onClick={() => {
            navigator.clipboard?.writeText(prompt);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
          }}
          className="relative inline-flex items-center gap-1.5 rounded-sm px-2 py-1 text-xs text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          <span className="relative inline-block size-3.5">
            <Copy
              className={`absolute inset-0 size-3.5 transition-all duration-200 ease-in-out ${
                copied ? "scale-50 opacity-0" : "scale-100 opacity-100"
              }`}
            />
            <Check
              className={`absolute inset-0 size-3.5 text-accent transition-all duration-200 ease-in-out ${
                copied ? "scale-100 opacity-100" : "scale-50 opacity-0"
              }`}
            />
          </span>
          {copied ? "Copiato" : "Copia"}
        </button>
      </div>
      <pre className="overflow-x-auto px-3 py-3 font-mono text-sm leading-relaxed whitespace-pre-wrap text-foreground-2">
        {prompt}
      </pre>
    </div>
  );
}

const flagListeners = new Set<() => void>();

function subscribeToFlags(callback: () => void) {
  flagListeners.add(callback);
  return () => flagListeners.delete(callback);
}

/** Persisted per-exercise checkmark. Reads through localStorage so the state
 *  survives reloads without a hydration mismatch on the server render. */
function useDoneFlag(key: string) {
  const done = useSyncExternalStore(
    subscribeToFlags,
    () => window.localStorage.getItem(key) === "1",
    () => false,
  );

  const toggle = () => {
    if (done) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, "1");
    flagListeners.forEach((listener) => listener());
  };

  return [done, toggle] as const;
}

export type ExerciseData = {
  goal: string;
  time: string;
  needsLaptop?: boolean;
  prompt: string;
  observe: readonly string[];
  note?: string;
};

export function Exercise({
  id,
  exercise,
}: {
  id: string;
  exercise: ExerciseData;
}) {
  const [done, toggle] = useDoneFlag(`esercizio:${id}`);

  return (
    <div className="overflow-hidden rounded-lg border border-accent/30 border-l-[3px] border-l-accent bg-accent-soft">
      <Accordion type="single" collapsible>
        <AccordionItem value={id} className="border-b-0">
          <AccordionTrigger className="items-center gap-3 rounded-none border-0 px-4 py-4 hover:no-underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset">
            <span className="flex min-w-0 flex-1 items-start gap-3">
              <FlaskConical className="mt-0.5 size-4 shrink-0 text-accent" />
              <span className="min-w-0">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="font-medium text-foreground">
                    Provalo in Cursor
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {exercise.time}
                  </span>
                  {exercise.needsLaptop ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
                      <Laptop className="size-3" />
                      serve il laptop
                    </span>
                  ) : null}
                  {done ? (
                    <span className="inline-flex items-center gap-1 text-xs text-success">
                      <Check className="size-3" />
                      fatto
                    </span>
                  ) : null}
                </span>
                <span className="mt-0.5 block text-sm text-muted-foreground">
                  {exercise.goal}
                </span>
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-5">
            <div className="space-y-4">
              <CopyPrompt prompt={exercise.prompt} />
              <div>
                <p className="mb-2 text-xs tracking-wide text-foreground uppercase">
                  Cosa guardare
                </p>
                <ul className="space-y-1.5">
                  {exercise.observe.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {exercise.note ? (
                <p className="text-sm text-muted-foreground italic">
                  {exercise.note}
                </p>
              ) : null}
              <button
                type="button"
                onClick={toggle}
                className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition-colors duration-200 ${
                  done
                    ? "border-success/40 text-success"
                    : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground"
                }`}
              >
                <span
                  className={`flex size-4 items-center justify-center rounded-sm border ${
                    done ? "border-success bg-success/15" : "border-border"
                  }`}
                >
                  {done ? <Check className="size-3" /> : null}
                </span>
                {done ? "Completato" : "Segna come fatto"}
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export type DeepDiveData = {
  title: string;
  points: readonly { term: string; text: string }[];
};

export function DeepDive({
  id,
  data,
}: {
  id: string;
  data: DeepDiveData;
}) {
  return (
    <div
      data-disclosure="avanzato"
      className="overflow-hidden rounded-lg border border-border bg-card"
    >
      <Accordion type="single" collapsible>
        <AccordionItem value={id} className="border-b-0">
          <AccordionTrigger className="items-center rounded-none border-0 px-4 py-3.5 text-sm text-muted-foreground hover:text-foreground hover:no-underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset">
            {data.title}
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <dl className="space-y-3">
              {data.points.map((point) => (
                <div key={point.term}>
                  <dt className="text-sm font-medium text-foreground">
                    {point.term}
                  </dt>
                  <dd className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {point.text}
                  </dd>
                </div>
              ))}
            </dl>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
