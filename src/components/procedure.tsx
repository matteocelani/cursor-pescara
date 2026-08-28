"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export type FlowStep = {
  title: string;
  text: string;
};

/** Numbered steps joined by a connector that draws itself in: vertical on
 *  phones, horizontal from lg up. Markers are decorative. */
export function StepFlow({
  steps,
  labelledBy,
}: {
  steps: readonly FlowStep[];
  labelledBy?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.ol
      aria-labelledby={labelledBy}
      className="grid gap-7 lg:grid-cols-5 lg:gap-5"
      initial={reduced ? false : "hidden"}
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.1 } } }}
    >
      {steps.map((step, index) => (
        <motion.li
          key={step.title}
          className="relative pl-12 lg:flex lg:flex-col lg:items-center lg:pl-0 lg:text-center"
          variants={{ hidden: {}, shown: {} }}
        >
          {/* Connector: down the left on phones, across on wide screens. */}
          {index < steps.length - 1 ? (
            <motion.span
              aria-hidden
              className="absolute top-11 bottom-[-1.75rem] left-[1.0625rem] w-px origin-top bg-border-strong lg:top-[1.125rem] lg:bottom-auto lg:left-[calc(50%+1.5rem)] lg:h-px lg:w-[calc(100%-3rem)] lg:origin-left"
              variants={{
                hidden: { scaleX: 0, scaleY: 0 },
                shown: {
                  scaleX: 1,
                  scaleY: 1,
                  transition: { duration: 0.45, ease: EASE },
                },
              }}
            />
          ) : null}

          <motion.span
            aria-hidden
            className="relative grid size-9 place-items-center rounded-full border border-accent/40 bg-accent-soft text-sm font-medium text-accent tabular-nums max-lg:absolute max-lg:top-0 max-lg:left-0"
            variants={{
              hidden: { opacity: 0, scale: 0.6 },
              shown: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.35, ease: [0.34, 1.36, 0.64, 1] },
              },
            }}
          >
            {index + 1}
          </motion.span>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 8 },
              shown: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: EASE },
              },
            }}
          >
            <h3 className="font-medium text-balance text-foreground lg:mt-3">
              {step.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {step.text}
            </p>
          </motion.div>
        </motion.li>
      ))}
    </motion.ol>
  );
}

export type VerticalStep = {
  title?: string;
  /** The single action to perform. */
  action?: string;
  /** What must appear on screen once it worked. */
  see?: string;
  /** Optional extra detail for whoever needs it. */
  detail?: string;
};

function StepArrow() {
  return (
    <div aria-hidden className="flex justify-center py-2.5">
      <svg
        viewBox="0 0 12 28"
        className="h-7 w-3 text-border-strong"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M6 1v20" />
        <path d="M1.5 17 6 22l4.5-5" />
      </svg>
    </div>
  );
}

/** Steps stacked vertically, joined by a centred arrow pointing down.
 *  Reads as a single path, which is what a beginner needs. */
export function VerticalSteps({
  steps,
}: {
  steps: readonly (VerticalStep | string)[];
}) {
  const items = steps.map((step) =>
    typeof step === "string" ? { title: step } : step,
  );

  return (
    <ol className="space-y-0">
      {items.map((step, index) => {
        const heading = step.title ?? step.action;
        const body = step.title ? step.action : undefined;

        return (
          <li key={`${heading}-${index}`}>
            <div className="rounded-lg border border-border bg-card p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-accent text-sm font-medium text-accent-foreground tabular-nums"
                >
                  {index + 1}
                </span>
                <p className="font-medium text-foreground">{heading}</p>
              </div>

              {body ? (
                <p className="mt-3 leading-relaxed text-foreground-2">{body}</p>
              ) : null}

              {step.see ? (
                <p className="mt-2 flex gap-2 text-sm text-muted-foreground">
                  <span aria-hidden className="shrink-0 text-accent">
                    →
                  </span>
                  <span className="italic">{step.see}</span>
                </p>
              ) : null}

              {step.detail ? (
                <p className="mt-3 border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.detail}
                </p>
              ) : null}
            </div>

            {index < items.length - 1 ? <StepArrow /> : null}
          </li>
        );
      })}
    </ol>
  );
}

export type ProcedureStep = {
  /** One single action, starting with an imperative verb. */
  do: string;
  /** What the reader should see once the action worked. */
  see?: string;
};

export type ProcedureData = {
  goal: string;
  before?: readonly string[];
  time?: string;
  steps: readonly ProcedureStep[];
  ifStuck?: readonly { symptom: string; fix: string }[];
  done?: string;
};

/** One action per step, each with its expected result. Modelled on
 *  van der Meij's four components: goal, prerequisites, action +
 *  reaction, recovery. */
export function Procedure({
  data,
  children,
  /** Drops the card chrome and the title, for use inside a disclosure. */
  bare = false,
}: {
  data: ProcedureData;
  children?: ReactNode;
  bare?: boolean;
}) {
  return (
    <div>
      {bare ? null : (
        <h3 className="text-xl font-normal tracking-tight text-foreground">
          {data.goal}
        </h3>
      )}

      {data.before || data.time ? (
        <dl
          className={`flex flex-wrap gap-x-8 gap-y-2 border-b border-border pb-4 text-sm ${
            bare ? "" : "mt-3"
          }`}
        >
          {data.before ? (
            <div>
              <dt className="text-muted-foreground">Ti serve</dt>
              <dd className="text-foreground-2">{data.before.join(" · ")}</dd>
            </div>
          ) : null}
          {data.time ? (
            <div>
              <dt className="text-muted-foreground">Tempo</dt>
              <dd className="text-foreground-2">{data.time}</dd>
            </div>
          ) : null}
        </dl>
      ) : null}

      {children}

      <div className="mt-4">
        <VerticalSteps
          steps={data.steps.map((step) => ({
            title: step.do,
            see: step.see,
          }))}
        />
      </div>

      {data.done ? (
        <p className="mt-5 rounded-md border border-success/30 bg-success/10 px-4 py-3 text-sm text-foreground-2">
          <span className="font-medium text-foreground">Fatto. </span>
          {data.done}
        </p>
      ) : null}

      {data.ifStuck?.length ? (
        <div className="mt-5 border-t border-border pt-4">
          <p className="mb-2.5 text-sm font-medium text-foreground">
            Se qualcosa va storto
          </p>
          <dl className="space-y-2.5">
            {data.ifStuck.map((item) => (
              <div key={item.symptom} className="text-sm">
                <dt className="text-muted-foreground italic">
                  {item.symptom}
                </dt>
                <dd className="mt-0.5 flex gap-2 text-foreground-2">
                  <span aria-hidden className="text-accent">
                    →
                  </span>
                  {item.fix}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}
    </div>
  );
}
