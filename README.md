# Cafe Cursor Pescara

Sito dell'evento **Cafe Cursor Pescara** — sabato 29 agosto 2026, Riky Rock Bar.

Tre pagine, ognuna con un compito preciso:

| Pagina | A cosa serve |
| --- | --- |
| `/` | Informazioni sull'evento: quando, dove, come partecipare, cosa portare. |
| `/cursor` | Guida a Cursor su sei livelli, da «cos'è un programma» a MCP. Nessun riferimento all'evento: è riutilizzabile per qualsiasi Cafe Cursor. |
| `/crediti` | Come riscattare i crediti Cursor distribuiti all'evento, passo per passo. |

## La guida

`/cursor` è la parte più consistente del progetto. È scritta per un pubblico
che va da chi non ha mai sentito parlare di intelligenza artificiale a chi
sviluppa software di professione, e per farlo usa alcune scelte precise:

- **Sei livelli** nominati per quello che il lettore ottiene (`Capire cos'è`,
  `Come funziona`, `Installarlo e provarlo`, `Usarlo bene`, `Usarlo per
  lavoro`, `Estenderlo`), mai per quello che gli manca.
- **Difficoltà crescente e monotona.** Ogni capitolo dichiara il proprio
  livello con un semaforo a quattro pallini, e la difficoltà non torna mai
  indietro fra un capitolo e il successivo.
- **Concreto prima di astratto.** Il glossario sta al livello 4, non al
  primo: le parole arrivano quando c'è già qualcosa a cui attaccarle.
- **Punti di stop espliciti** dopo il livello 2 e il livello 3, che dicono al
  lettore che può fermarsi lì.
- **Procedure con un'azione per passaggio**, ognuna con cosa deve comparire
  sullo schermo e un blocco «Se qualcosa va storto».

I contenuti sono verificati sulla documentazione ufficiale di Cursor
(agosto 2026, versione 3.17) e vivono in `src/lib/`, separati dai componenti.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [shadcn/ui](https://ui.shadcn.com) su base Radix
- [motion](https://motion.dev) per le animazioni
- [lucide-react](https://lucide.dev) per le icone, SVGR per i marchi
- pnpm

## Sviluppo

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Prima di chiudere una modifica:

```bash
pnpm lint
pnpm build
```

## Struttura

```
src/
├── app/
│   ├── page.tsx          # /          informazioni sull'evento
│   ├── cursor/page.tsx   # /cursor    la guida, sei livelli
│   ├── crediti/page.tsx  # /crediti   riscatto dei crediti
│   ├── not-found.tsx     # 404
│   ├── icon.svg          # favicon
│   ├── layout.tsx        # font, tema, metadata
│   └── globals.css       # design token e decorazioni
├── assets/icons/         # SVG dei marchi, via SVGR (?component)
├── components/
│   ├── motion.tsx        # Reveal, Stagger, ReadingProgress
│   ├── level-rail.tsx    # navigazione dei livelli, con scroll-spy
│   ├── level-section.tsx # intestazione e criterio di uscita di un livello
│   ├── procedure.tsx     # istruzioni passo passo e flussi numerati
│   ├── exercise.tsx      # blocchi «Provalo in Cursor» e «Approfondisci»
│   ├── wiki.tsx          # tipografia, tabelle, tile, badge di difficoltà
│   └── ui/               # shadcn
└── lib/
    ├── event.ts          # testi dell'evento e dei crediti
    └── cursor.ts         # contenuti della guida
```

## Contenuti

Tutti i testi stanno in `src/lib/`. Per correggere una data, un prezzo o una
frase non serve toccare i componenti.

- `event.ts` — dettagli dell'evento, checklist, flusso dei crediti
- `cursor.ts` — livelli, capitoli, esercizi, glossario della guida

## Convenzioni

Le regole del progetto stanno in [`AGENTS.md`](./AGENTS.md): palette,
tipografia, tono dei testi e vincoli sulla guida. Vanno lette prima di
modificare il codice.

In sintesi:

- Titoli con peso normale e tracking negativo. Niente grassetto nella prosa.
- Testo di lettura a 16px, contrasto oltre 7:1.
- Angoli arrotondati (`--radius: 0.875rem`), hover sul bordo e non sullo sfondo.
- Palette calda di Cursor: fondo `#14120b`, accento `#ff7a29`.
- Tema chiaro, scuro o di sistema, con il selettore nel footer.
- La prima schermata di una pagina non è mai animata.

## Licenza

MIT
