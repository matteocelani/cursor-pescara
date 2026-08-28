import type { ReactNode } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export function InfoCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-lg border border-border bg-card p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
          {icon}
        </span>
        <h2 className="text-xl font-normal tracking-tight text-foreground">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

export function FeatureTile({
  icon,
  title,
  children,
  href,
}: {
  icon: ReactNode;
  title: string;
  children?: ReactNode;
  href?: string;
}) {
  const content = (
    <>
      <span className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-background text-accent">
        {icon}
      </span>
      <p className="text-sm font-medium text-foreground">{title}</p>
      {children ? (
        <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {children}
        </div>
      ) : null}
    </>
  );

  const className = "card-hover rounded-lg border border-border bg-card p-4 text-center";

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={`block ${className}`}>
          {content}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`block ${className}`}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

export function FeatureRow({
  icon,
  title,
  children,
  href,
  linkLabel = "Maps",
}: {
  icon: ReactNode;
  title: string;
  children?: ReactNode;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-sm border border-border bg-card p-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background text-accent">
        {icon}
      </span>
      <div className="min-w-0 flex-1 pt-0.5">
        <p className="text-sm font-medium text-foreground">{title}</p>
        {children ? (
          <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
            {children}
          </p>
        ) : null}
      </div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center self-center rounded-sm border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-accent transition-colors duration-200 hover:bg-accent-soft"
        >
          {linkLabel}
        </a>
      ) : null}
    </div>
  );
}

export function Tip({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 rounded-md border border-accent/30 bg-accent-soft p-3 text-sm">
      <Sparkles className="mt-0.5 size-4 shrink-0 text-accent" />
      <p className="leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
