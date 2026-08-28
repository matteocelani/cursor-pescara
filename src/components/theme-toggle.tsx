"use client";

import { useSyncExternalStore } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "tema";
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function readTheme(): Theme {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : "system";
}

function apply(theme: Theme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = theme === "dark" || (theme === "system" && prefersDark);
  document.documentElement.classList.toggle("dark", dark);
}

const options: { value: Theme; label: string; Icon: typeof Sun }[] = [
  { value: "light", label: "Tema chiaro", Icon: Sun },
  { value: "dark", label: "Tema scuro", Icon: Moon },
  { value: "system", label: "Come il sistema", Icon: Monitor },
];

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    readTheme,
    () => "system" as Theme,
  );
  const select = (next: Theme) => {
    if (next === "system") window.localStorage.removeItem(STORAGE_KEY);
    else window.localStorage.setItem(STORAGE_KEY, next);
    apply(next);
    listeners.forEach((listener) => listener());
  };

  return (
    <div
      role="group"
      aria-label="Aspetto della pagina"
      className="inline-flex items-center gap-0.5 rounded-md border border-border bg-card p-0.5"
    >
      {options.map(({ value, label, Icon }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => select(value)}
            aria-label={label}
            title={label}
            aria-pressed={active}
            className={`rounded-sm p-1.5 transition-colors duration-200 ${
              active
                ? "bg-accent-soft text-accent"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className="size-4" />
          </button>
        );
      })}
    </div>
  );
}
