"use client";

import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/** Collapsed by default: optional depth the reader can skip without
 *  scrolling past it. */
export function Disclosure({
  id,
  title,
  hint,
  icon,
  defaultOpen = false,
  children,
}: {
  id: string;
  title: string;
  hint?: string;
  icon?: ReactNode;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <Accordion
        type="single"
        collapsible
        defaultValue={defaultOpen ? id : undefined}
      >
        <AccordionItem value={id} className="border-b-0">
          <AccordionTrigger className="items-center gap-3 rounded-none border-0 px-4 py-3.5 hover:no-underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset">
            <span className="flex min-w-0 flex-1 items-center gap-3">
              {icon ? (
                <span className="shrink-0 text-accent">{icon}</span>
              ) : null}
              <span className="min-w-0">
                <span className="block font-medium text-foreground">
                  {title}
                </span>
                {hint ? (
                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {hint}
                  </span>
                ) : null}
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-5">{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
