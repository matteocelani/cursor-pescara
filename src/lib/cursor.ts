export const guide = {
  title: "Cursor, spiegato da zero",
  tagline: "Coding agent for building ambitious software",

  intro: {
    lead: "Cursor è un programma che scrive software al posto tuo, seguendo quello che gli chiedi a parole. Questa guida spiega cos’è, cosa ci si fa e come si usa.",
    body: [
      "Sei livelli. I primi due sono corti e si leggono senza computer. Dal terzo si passa alla pratica. Gli ultimi due sono i più densi e sono per chi scrive codice.",
      "Ogni capitolo dichiara il suo livello, così puoi saltare quello che già sai. Nella tabella qui sotto scegli da dove entrare.",
    ],
    meta: [
      { label: "Livelli", value: "6, indipendenti" },
      { label: "I primi due", value: "11 minuti in tutto" },
      { label: "Serve saper programmare", value: "No" },
    ],
    version:
      "Scritta ad agosto 2026 sulla versione 3.17 di Cursor. Il programma cambia spesso: se un bottone non si chiama esattamente come qui, cerca quello che gli somiglia.",
  },

  /** Compact map at the top of the page: the fastest way to skip ahead. */
  levelMap: {
    title: "Da dove entrare",
    rows: [
      {
        id: "livello-1",
        n: 1,
        name: "Capire cos’è",
        who: "Non sai cos’è l’intelligenza artificiale",
        time: "6 min",
        tier: 1,
      },
      {
        id: "livello-2",
        n: 2,
        name: "Come funziona",
        who: "Sai cos’è, vuoi capire cosa succede quando lo usi",
        time: "5 min",
        tier: 1,
      },
      {
        id: "livello-3",
        n: 3,
        name: "Installarlo",
        who: "Vuoi metterlo sul computer e usarlo la prima volta",
        time: "14 min",
        tier: 2,
      },
      {
        id: "livello-4",
        n: 4,
        name: "Usarlo bene",
        who: "Ce l’hai installato e vuoi ottenere risultati migliori",
        time: "10 min",
        tier: 3,
      },
      {
        id: "livello-5",
        n: 5,
        name: "Usarlo per lavoro",
        who: "Scrivi codice e lo vuoi usare tutti i giorni",
        time: "13 min",
        tier: 3,
      },
      {
        id: "livello-6",
        n: 6,
        name: "Estenderlo",
        who: "Vuoi collegarlo ai tuoi strumenti e automatizzare",
        time: "15 min",
        tier: 4,
      },
    ],
  },

  links: {
    site: "https://cursor.com",
    download: "https://cursor.com/download",
    docs: "https://cursor.com/docs",
    vibeCoding: "https://cursor.com/help/ai-features/vibe-coding",
    codingAgents: "https://cursor.com/help/ai-features/coding-agents",
    learn: "https://cursor.com/learn",
    toolCalling: "https://cursor.com/learn/tool-calling",
    agentsLearn: "https://cursor.com/learn/agents",
    pricing: "https://cursor.com/pricing",
    quickstart: "https://cursor.com/docs/get-started/quickstart",
    installHelp: "https://cursor.com/help/getting-started/install",
    migrateVsCode: "https://cursor.com/help/getting-started/migrate-vscode",
    tab: "https://cursor.com/help/ai-features/tab",
    agentOverview: "https://cursor.com/docs/agent/overview",
    planMode: "https://cursor.com/docs/agent/plan-mode",
    browser: "https://cursor.com/docs/agent/tools/browser",
    canvas: "https://cursor.com/docs/agent/tools/canvas",
    designMode: "https://cursor.com/docs/agent/design-mode",
    rules: "https://cursor.com/docs/rules",
    skills: "https://cursor.com/docs/skills",
    mcp: "https://cursor.com/docs/mcp",
    subagents: "https://cursor.com/docs/subagents",
    cloudAgent: "https://cursor.com/docs/cloud-agent",
    automations: "https://cursor.com/docs/cloud-agent/automations",
    runModes: "https://cursor.com/docs/agent/security/run-modes",
    marketplace: "https://cursor.com/marketplace",
    troubleshooting: "https://cursor.com/help/troubleshooting/install-issues",
  },

  levels: [
    {
      n: 1,
      id: "livello-1",
      name: "Capire cos’è",
      subtitle: "Intelligenza artificiale, codice, e cosa fa Cursor",
      mode: "Da leggere",
      assumes: "Niente. Nemmeno il computer acceso.",
      time: "6 minuti",
      exitCriterion:
        "Sai spiegare a un amico, in due frasi, cosa fa Cursor e in cosa è diverso da ChatGPT.",
    },
    {
      n: 2,
      id: "livello-2",
      name: "Come funziona",
      subtitle: "Cosa succede quando qualcuno lo usa",
      mode: "Da leggere",
      assumes: "Il livello 1.",
      time: "5 minuti",
      exitCriterion:
        "Sai cosa succede quando qualcuno usa Cursor, cosa non sa fare, e che chi lo usa ha sempre l’ultima parola.",
    },
    {
      n: 3,
      id: "livello-3",
      name: "Installarlo e provarlo",
      subtitle: "Dal download al primo file, passo per passo",
      mode: "Istruzioni",
      assumes: "Il livello 2 e un computer davanti.",
      time: "14 minuti",
      exitCriterion:
        "Cursor è aperto sul tuo computer, gli hai fatto una domanda e ha creato un file che sai ritrovare da solo.",
    },
    {
      n: 4,
      id: "livello-4",
      name: "Usarlo bene",
      subtitle: "Le parole, come si chiede, le scorciatoie",
      mode: "Istruzioni",
      assumes: "Cursor installato e una richiesta andata a buon fine.",
      time: "10 minuti",
      exitCriterion:
        "Scrivi una richiesta con obiettivo e vincoli, capisci le parole che leggi in giro e sai cosa fare quando qualcosa si blocca.",
    },
    {
      n: 5,
      id: "livello-5",
      name: "Usarlo per lavoro",
      subtitle: "Agent, modalità e contesto, tutti i giorni",
      mode: "Come si fa",
      assumes: "Il vocabolario del livello 4. Lavori su progetti veri.",
      time: "13 minuti",
      exitCriterion:
        "Fai lavorare l’agent su più file, sai fermarlo, sai tornare indietro e sai dargli le regole del progetto.",
    },
    {
      n: 6,
      id: "livello-6",
      name: "Estenderlo",
      subtitle: "Collegarlo ai tuoi strumenti e automatizzare",
      mode: "Riferimento",
      assumes: "Sviluppi software di professione.",
      time: "15 minuti",
      exitCriterion:
        "Sai estendere Cursor sul tuo flusso di lavoro e sai cosa ti costerà.",
    },
  ],

  /** Order matters: difficulty never goes back down. */
  chapters: [
    { id: "cos-e-un-programma", levelId: "livello-1", title: "Cos’è un programma", tier: 1 },
    { id: "cos-e-ai", levelId: "livello-1", title: "Cos’è l’intelligenza artificiale", tier: 1 },
    { id: "cos-e-codice", levelId: "livello-1", title: "Cosa vuol dire scrivere codice", tier: 1 },
    { id: "cursor-in-una-frase", levelId: "livello-1", title: "Cosa fa Cursor", tier: 1 },
    { id: "non-e-chatgpt", levelId: "livello-1", title: "Che differenza c’è con ChatGPT", tier: 1 },

    { id: "il-ciclo", levelId: "livello-2", title: "Come funziona, in cinque passaggi", tier: 1 },
    { id: "cosa-puoi-chiedere", levelId: "livello-2", title: "Cosa puoi chiedergli, con esempi", tier: 1 },
    { id: "lo-schermo", levelId: "livello-2", title: "Cosa vedi sullo schermo", tier: 2 },
    { id: "cosa-non-fa", levelId: "livello-2", title: "Cosa non sa fare", tier: 2 },

    { id: "cosa-ti-serve", levelId: "livello-3", title: "Cosa ti serve prima di iniziare", tier: 2 },
    { id: "account", levelId: "livello-3", title: "Creare l’account gratuito", tier: 2 },
    { id: "installare", levelId: "livello-3", title: "Scaricare e installare il programma", tier: 2 },
    { id: "cartelle", levelId: "livello-3", title: "Cosa sono file, cartelle e progetti", tier: 2 },
    { id: "prima-domanda", levelId: "livello-3", title: "Fare la prima domanda", tier: 2 },
    { id: "primo-file", levelId: "livello-3", title: "Farsi creare il primo file", tier: 2 },

    { id: "parole", levelId: "livello-4", title: "Il vocabolario: modello, prompt, contesto, token", tier: 2 },
    { id: "richiesta-che-funziona", levelId: "livello-4", title: "Come scrivere una richiesta che funziona", tier: 3 },
    { id: "tab-e-k", levelId: "livello-4", title: "Le due scorciatoie che userai sempre: Tab e ⌘K", tier: 3 },
    { id: "quando-si-blocca", levelId: "livello-4", title: "Cosa fare quando qualcosa va storto", tier: 3 },

    { id: "agent-checkpoint", levelId: "livello-5", title: "L’Agent: cosa fa e come tornare indietro", tier: 3 },
    { id: "modalita", levelId: "livello-5", title: "Le quattro modalità: Agent, Plan, Ask, Debug", tier: 3 },
    { id: "contesto", levelId: "livello-5", title: "Il contesto: cosa vede l’agent e come guidarlo", tier: 4 },

    { id: "estendere", levelId: "livello-6", title: "Skills, Hooks e MCP: collegare strumenti esterni", tier: 4 },
    { id: "scalare", levelId: "livello-6", title: "Più agent insieme: subagent, cloud, automazioni", tier: 4 },
    { id: "costi", levelId: "livello-6", title: "Costi, permessi e privacy", tier: 4 },
  ],

  // ── LEVEL 1 ────────────────────────────────────────────────────────────
  l1: {
    programma: {
      title: "Cos’è un programma",
      paragraphs: [
        "Un computer da solo non sa fare niente: sa solo eseguire istruzioni. Un programma è un pacchetto di istruzioni che gli dice cosa fare. Sul telefono li chiamiamo app.",
        "Cursor è un programma anche lui: si scarica, si installa e si apre come gli altri. Quello che lo rende diverso è cosa contiene dentro.",
      ],
      analogy: {
        title: "Un’immagine per fissarlo",
        text: "Il computer è un cuoco veloce e ubbidiente che non ha idee proprie. Il programma è il ricettario.",
      },
    },

    ai: {
      title: "Cos’è l’intelligenza artificiale",
      paragraphs: [
        "È un programma che ha letto una quantità enorme di testi scritti da persone, e da lì ha imparato come vanno di solito le frasi. Per questo se gli scrivi una domanda ti risponde in modo sensato.",
        "L’hai già usata senza accorgertene: quando il telefono ti suggerisce la parola successiva mentre scrivi un messaggio, il meccanismo è lo stesso, in piccolo.",
      ],
      howItWorks: {
        title: "La cosa importante da sapere",
        text: "Non sa le cose e non le cerca in un archivio: indovina come continua un testo, e ci riesce così bene che sembra ragionare. Ecco perché è utilissima e perché a volte sbaglia con grande sicurezza. Va guidata, e quello che dice va controllato.",
      },
      examples: [
        {
          title: "Scrivere",
          text: "Una mail, un annuncio, un riassunto.",
          icon: "chat" as const,
        },
        {
          title: "Spiegare",
          text: "Un documento difficile, una parola che non conosci.",
          icon: "book" as const,
        },
        {
          title: "Organizzare",
          text: "Una lista disordinata che diventa una tabella.",
          icon: "loop" as const,
        },
        {
          title: "Costruire",
          text: "Qui entra Cursor: cose che funzionano, non solo testi.",
          icon: "hammer" as const,
        },
      ],
    },

    codice: {
      title: "Cosa vuol dire «scrivere codice»",
      paragraphs: [
        "Le istruzioni di un programma qualcuno le ha dovute scrivere. Scriverle si chiama programmare, e il testo che ne esce si chiama codice. Non è italiano: è una lingua con regole rigidissime, dove una virgola fuori posto ferma tutto.",
        "Il codice sta dentro dei file, cioè documenti sul computer come un file di Word. Solo che dentro, invece di una lettera, c’è un elenco di istruzioni.",
      ],
      why: {
        title: "E a te che ti riguarda?",
        text: "Fino a poco tempo fa, per far fare a un computer qualcosa che nessuna app prevedeva, dovevi saper scrivere codice o pagare chi lo sapeva fare. Adesso lo puoi chiedere a parole. È tutta la novità.",
      },
    },

    inOneSentence: {
      title: "Cosa fa Cursor",
      sentence:
        "Cursor è il programma in cui apri i tuoi file e chiedi a un’intelligenza artificiale di scriverli o modificarli per te.",
      paragraphs: [
        "Sul sito ufficiale si definisce «il tuo coding agent per costruire software ambizioso». La parola da tenere è agent: in inglese vuol dire qualcuno che agisce, che fa le cose. Non solo risponde: apre i file, li modifica e ti mostra cosa ha cambiato.",
      ],
      analogy: {
        title: "Quanto vuoi delegare: l’analogia che usa Cursor",
        text: "Per attraversare la città puoi andare a piedi, in bici o in auto: gratis e lento, poco e più veloce, costoso e rapido. Costruire software è lo stesso. Non è una scala di merito, è una scelta fra tempo, soldi e fatica, e la scelta resta tua.",
      },
    },

    notChatGpt: {
      title: "Che differenza c’è con ChatGPT",
      answer:
        "L’intelligenza artificiale dietro è la stessa. Cambiano due cose: cosa riesce a vedere, e cosa riesce a fare.",
      paragraphs: [
        "Cursor usa gli stessi modelli che stanno dentro ChatGPT e Gemini, quindi non è più intelligente. La differenza è che ChatGPT può soltanto scriverti una risposta, mentre Cursor può aprire i tuoi file e modificarli.",
      ],
      analogy: {
        title: "Il consulente al telefono e il collega alla scrivania",
        text: "ChatGPT è un consulente bravissimo al telefono: gli descrivi il problema, lui ti dice cosa fare, tu riattacchi e lo fai da solo. E la volta dopo gli devi rispiegare tutto da capo, perché non ha visto niente. Cursor è lo stesso consulente, ma seduto alla tua scrivania: i tuoi documenti li ha davanti, li apre e li corregge lui, mentre tu guardi.",
        reassurance:
          "Vede solo la cartella che gli apri tu, non tutto il computer.",
      },
      table: {
        head: ["", "Un chatbot", "Un agent come Cursor"],
        rows: [
          [
            "Cosa vede",
            "Solo quello che incolli tu",
            "I file del progetto che gli apri",
          ],
          [
            "Cosa fa",
            "Ti risponde con del testo",
            "Modifica i file, e ti mostra cosa ha cambiato",
          ],
          [
            "Se c’è un errore",
            "Glielo racconti tu",
            "Lo legge da solo e riprova",
          ],
          ["Chi decide", "Tu, copiando a mano", "Tu, guardando e confermando"],
          [
            "Il lavoro noioso",
            "Copia e incolla avanti e indietro",
            "Non c’è: lavora dove stanno i file",
          ],
        ],
      },
      both: "Puoi usarli tutti e due, e in molti fanno così: si ragiona e si discute con il chatbot, si costruisce con Cursor.",
      deepDive: {
        title: "Approfondisci: la differenza tecnica, per chi la vuole",
        points: [
          {
            term: "Sono i tool, non il cervello",
            text: "Cursor gira su GPT, Claude, Gemini, Grok e Composer: gli stessi modelli che stanno sotto i chatbot. Quello che cambia è che qui il modello ha strumenti per agire — leggere file, scriverli, lanciare comandi, aprire un browser — e legge il risultato di ogni azione prima di decidere la successiva.",
          },
          {
            term: "La definizione ufficiale",
            text: "Nella documentazione di Cursor: «un agent è semplicemente strumenti in un ciclo». E ancora: senza strumenti il modello sarebbe limitato alle informazioni che gli fornisci tu; con gli strumenti può esplorare e agire da solo.",
          },
          {
            term: "Obiettivo invece di istruzioni",
            text: "L’immagine che usa Cursor: è la differenza fra dare a qualcuno le indicazioni svolta per svolta e dirgli solo la destinazione, lasciandogli usare il navigatore.",
          },
        ],
      },
    },
  },

  // ── LEVEL 2 ────────────────────────────────────────────────────────────
  l2: {
    ciclo: {
      title: "Come funziona, in cinque passaggi",
      intro:
        "Questi cinque passaggi si ripetono sempre, qualunque cosa stiate facendo. Nessuno richiede di saper programmare.",
      steps: [
        {
          title: "Chiedi",
          text: "Scrivi in italiano cosa vuoi, in una casella di testo.",
        },
        {
          title: "Cerca",
          text: "Apre e legge i file che gli servono, da solo.",
        },
        {
          title: "Propone",
          text: "Scrive le modifiche: in verde quello che aggiunge, in rosso quello che toglie.",
        },
        {
          title: "Controlli",
          text: "Leggi e decidi se tenere o annullare.",
        },
        {
          title: "Continui",
          text: "Se non va, glielo dici e riprova. Come con una persona.",
        },
      ],
      important: {
        title: "«E se sbaglia e mi rovina i file?»",
        text: "Le modifiche vengono scritte sul file nel momento in cui l’agent le fa: non c’è un tasto Salva da premere. Ma non si perde niente, perché Cursor salva da solo una copia dei file prima di ogni modifica importante, e con un clic torni alla versione di prima. Queste copie si chiamano checkpoint.",
      },
    },

    schermo: {
      title: "Cosa vedi sullo schermo",
      intro:
        "Sembra complicato la prima volta. Sono quattro zone, e per iniziare ne usi una sola.",
      zones: [
        {
          term: "A sinistra: l’elenco dei file",
          text: "Il contenuto della cartella su cui lavori. Clicchi un nome e il file si apre.",
        },
        {
          term: "Al centro: il file aperto",
          text: "Qui si legge e si scrive, e qui vedi le modifiche proposte, colorate.",
        },
        {
          term: "A destra: la chat",
          text: "La casella dove parli con l’intelligenza artificiale. È la zona che ti serve. Nella documentazione si chiama pannello Agent.",
        },
        {
          term: "In basso: il terminale",
          text: "Dove si scrivono comandi. All’inizio non ti serve: la usa l’agent, chiedendoti il permesso.",
        },
      ],
      note: "Se ti sembra troppo, ignora tutto tranne la casella a destra: è lì che succede il novanta per cento delle cose.",
    },

    whatToAsk: {
      title: "Cosa puoi chiedergli, con esempi",
      intro:
        "Quattro richieste concrete, tutte con un risultato che si vede. Nessuna richiede di saper programmare.",
      items: [
        {
          title: "Una pagina web",
          text: "«Fammi una pagina con il programma della festa e un bottone per iscriversi.» Ottieni un file che si apre nel browser.",
          icon: "laptop" as const,
        },
        {
          title: "Un’immagine",
          text: "«Genera un poster minimalista per una serata.» L’immagine compare nella chat e viene salvata nel progetto.",
          icon: "spark" as const,
        },
        {
          title: "Una tabella ragionata",
          text: "«Riassumi questi dati in una tabella con tre statistiche in cima.» Il risultato si apre in una finestra a fianco, chiamata canvas.",
          icon: "book" as const,
        },
        {
          title: "Capire qualcosa",
          text: "«Spiegami come è fatto questo progetto e da dove partirei.» Legge i file e te lo racconta.",
          icon: "chat" as const,
        },
      ],
      official: {
        title: "Cosa dice Cursor di chi non programma",
        quote:
          "«Programmare a intuito apre il software come mezzo espressivo a persone che non sono ingegneri di professione. I designer possono costruire prototipi funzionanti di un’idea. Chi si occupa di prodotto può tirare su strumenti interni. Rende la costruzione di software accessibile a persone senza esperienza di programmazione.»",
        source: "Dalla documentazione ufficiale di Cursor",
      },
    },

    cosaNonFa: {
      title: "Cosa non sa fare",
      intro:
        "Quattro limiti, che la documentazione di Cursor ammette per prima.",
      items: [
        {
          title: "Non è infallibile",
          text: "Sbaglia, e a volte sbaglia con sicurezza. Quello che scrive va guardato.",
          icon: "alert" as const,
        },
        {
          title: "Non si ricorda tutto",
          text: "Ha una memoria di lavoro limitata. Nelle conversazioni lunghe le cose vecchie sfumano.",
          icon: "loop" as const,
        },
        {
          title: "Non decide per te",
          text: "Ti propone, tu confermi. E puoi sempre tornare indietro.",
          icon: "shield" as const,
        },
        {
          title: "Non gira nel tuo computer",
          text: "Vede la cartella che gli apri tu, e i comandi te li chiede.",
          icon: "code" as const,
        },
      ],
      quotes: [
        "«Pensa agli agent come a sviluppatori junior veloci che hanno bisogno di indicazioni chiare, che possono dimenticare le cose e che quindi richiedono supervisione. Possono incastrarsi in loop, ripetendo lo stesso approccio sbagliato senza rendersi conto che serve una strategia diversa.»",
        "«Non è consigliabile pubblicare software che non capisci. Va benissimo per prototipi, esperimenti e strumenti interni, dove conta la velocità e un errore non fa danni.»",
      ],
      quotesSource: "Entrambe dalla documentazione ufficiale di Cursor",
    },

    stop: {
      title: "Puoi fermarti qui",
      text: "Se volevi capire cos’è, ora lo sai: cos’è un programma, cos’è l’intelligenza artificiale, cosa fa Cursor e in cosa è diverso da un chatbot. Per molti questo è tutto quello che serve, e va benissimo. Se invece ti va di provarlo davvero, il livello 3 ti mette Cursor sul computer in una decina di minuti, senza dare niente per scontato.",
      continueLabel: "Vai al livello 3",
      leaveLabel: "Torna indietro",
    },
  },

  // ── LEVEL 3 ────────────────────────────────────────────────────────────
  l3: {
    cosaTiServe: {
      title: "Cosa ti serve prima di iniziare",
      intro:
        "Tre cose, tutte probabilmente già tue. Meglio verificarle adesso che scoprirlo a metà.",
      items: [
        {
          title: "Un computer",
          text: "Mac con macOS 12 o più recente, oppure Windows 10 o più recente, oppure Linux. Non il telefono e non il tablet: Cursor è un programma da computer.",
          icon: "laptop" as const,
        },
        {
          title: "Internet",
          text: "Serve per scaricare il programma e perché l’intelligenza artificiale gira su computer altrui, non sul tuo.",
          icon: "cloud" as const,
        },
        {
          title: "Un indirizzo email",
          text: "Serve per creare l’account. Va bene quello che usi tutti i giorni.",
          icon: "chat" as const,
        },
      ],
      note: "Tempo totale, senza fretta: una ventina di minuti dall’inizio al primo file creato.",
    },

    account: {
      goal: "Creare l’account",
      before: ["Un indirizzo email"],
      time: "2 minuti",
      steps: [
        {
          do: "Apri il programma con cui navighi in internet: Chrome, Safari, Edge o Firefox.",
          see: "Si apre una finestra con, in alto, una barra dove si scrivono gli indirizzi dei siti.",
        },
        {
          do: "Clicca dentro quella barra in alto, scrivi cursor.com e premi Invio.",
          see: "Si apre il sito di Cursor: sfondo scuro, la scritta Cursor in grande.",
        },
        {
          do: "Guarda in alto a destra nella pagina e clicca la scritta Sign in.",
          see: "Si apre una pagina che ti chiede come vuoi entrare.",
        },
        {
          do: "Scegli come registrarti e completa la procedura che ti propone.",
          see: "Torni sul sito, e in alto a destra al posto di Sign in compare la tua iniziale o la tua foto. Vuol dire che sei dentro.",
        },
      ],
      done: "Hai un account gratuito. Serve per far funzionare il programma che stai per installare.",
      ifStuck: [
        {
          symptom: "Non trovo il bottone per entrare.",
          fix: "È in alto a destra nella pagina. Se la finestra è stretta potrebbe essere nascosto dietro un’icona con tre righe orizzontali: cliccala e cerca lì dentro.",
        },
        {
          symptom: "Mi chiede una carta di credito.",
          fix: "Il piano gratuito non la chiede. Se te la chiede, stai guardando un piano a pagamento: torna indietro e cerca la voce gratuita, che si chiama Hobby.",
        },
      ],
    },

    installMac: {
      goal: "Installare su Mac",
      before: ["L’account creato", "macOS 12 o più recente"],
      time: "5 minuti",
      steps: [
        {
          do: "Nella barra degli indirizzi scrivi cursor.com/download e premi Invio.",
          see: "Si apre la pagina di scaricamento, con un bottone grande al centro.",
        },
        {
          do: "Clicca il bottone per macOS.",
          see: "Il file inizia a scaricarsi. In alto a destra nel browser una freccia si muove.",
        },
        {
          do: "Aspetta che la freccia smetta di muoversi, poi apri il file scaricato. Si chiama Cursor e finisce per .dmg",
          see: "Si apre una finestra con due icone e una freccia in mezzo.",
        },
        {
          do: "Trascina l’icona di Cursor sopra la cartella Applicazioni, dentro quella stessa finestra.",
          see: "Una barretta mostra la copia in corso. Sono pochi secondi.",
        },
        {
          do: "Apri la cartella Applicazioni e fai doppio clic su Cursor.",
          see: "Il Mac chiede conferma perché il programma arriva da internet. Confermi che vuoi aprirlo.",
        },
        {
          do: "Quando te lo chiede, entra con l’account che hai creato prima.",
          see: "Si apre la finestra vera e propria di Cursor.",
        },
      ],
      done: "Cursor è installato e sei dentro col tuo account.",
      ifStuck: [
        {
          symptom: "Il Mac dice che «Cursor è danneggiato».",
          fix: "Non è vero, il file non è rotto: è un difetto noto di macOS e lo dice anche la documentazione di Cursor. Chiudi il programma, aspetta un minuto e riaprilo. Se il messaggio torna, spostalo nel cestino, svuota il cestino e scaricalo di nuovo.",
        },
        {
          symptom: "Non me lo lascia aprire, dice che non è sicuro.",
          fix: "Clicca sull’icona col tasto destro del mouse (o con due dita sul trackpad) e scegli Apri. Chiede conferma una volta sola.",
        },
      ],
    },

    installWindows: {
      goal: "Installare su Windows",
      before: ["L’account creato", "Windows 10 o più recente"],
      time: "5 minuti",
      steps: [
        {
          do: "Nella barra degli indirizzi scrivi cursor.com/download e premi Invio.",
          see: "Si apre la pagina di scaricamento, con un bottone grande al centro.",
        },
        {
          do: "Clicca il bottone per Windows.",
          see: "Il file inizia a scaricarsi. Finisce per .exe",
        },
        {
          do: "Apri il file scaricato.",
          see: "Windows può avvisarti di aver protetto il computer.",
        },
        {
          do: "Se compare quell’avviso, clicca Ulteriori informazioni e poi Esegui comunque.",
          see: "Parte l’installazione.",
        },
        {
          do: "Segui le schermate cliccando avanti fino alla fine.",
          see: "Compare l’icona di Cursor fra i programmi.",
        },
        {
          do: "Apri Cursor ed entra con l’account che hai creato prima.",
          see: "Si apre la finestra vera e propria di Cursor.",
        },
      ],
      done: "Cursor è installato e sei dentro col tuo account.",
      ifStuck: [
        {
          symptom: "Windows non mi lascia aprire il file.",
          fix: "Quell’avviso compare per tutti i programmi scaricati da internet, non è un problema di Cursor. Clicca Ulteriori informazioni, poi Esegui comunque.",
        },
        {
          symptom: "Si apre e resta tutto bianco.",
          fix: "Chiudilo. Poi clicca sull’icona col tasto destro e scegli Esegui come amministratore.",
        },
      ],
    },

    installLinux: {
      title: "Su Linux",
      note: "Su Debian e Ubuntu i pacchetti apt sono preferibili all’AppImage: danno l’icona nel menu, gli aggiornamenti automatici e gli strumenti da terminale. Questi sono i comandi della documentazione ufficiale.",
      command:
        'curl -fsSL https://downloads.cursor.com/keys/anysphere.asc | gpg --dearmor | sudo tee /etc/apt/keyrings/cursor.gpg > /dev/null\n\necho "deb [arch=amd64,arm64 signed-by=/etc/apt/keyrings/cursor.gpg] https://downloads.cursor.com/aptrepo stable main" | sudo tee /etc/apt/sources.list.d/cursor.list > /dev/null\n\nsudo apt update\nsudo apt install cursor',
      warning:
        "Attenzione a non confondere: sul sito è ben visibile anche un comando che installa la CLI di Cursor. È un altro prodotto, che funziona solo da terminale. Se vuoi il programma con la finestra, scaricalo da cursor.com/download.",
    },

    cartelle: {
      title: "File, cartelle e progetti",
      intro:
        "Cursor lavora su una cartella. Vale la pena chiarire tre parole prima di andare avanti, perché tornano continuamente.",
      terms: [
        {
          term: "File",
          text: "Un singolo documento sul computer, con un nome. Come un foglio di carta. Tutto quello che Cursor scrive per te finisce in uno o più file.",
        },
        {
          term: "Cartella",
          text: "Un contenitore che tiene dentro dei file, e magari altre cartelle. Come una scatola che può contenere fogli e scatole più piccole. Quando vedi scritto qualcosa tipo documenti/lavoro/lettera.txt, quelle barre sono scatole dentro scatole, e l’ultima cosa è il foglio.",
        },
        {
          term: "Progetto",
          text: "La cartella che contiene tutto quello che serve a un lavoro. Quando apri quella cartella in Cursor, il programma può leggere e modificare ciò che c’è dentro. E soltanto quello.",
        },
      ],
      procedure: {
        goal: "Creare una cartella e aprirla in Cursor",
        before: ["Cursor installato"],
        time: "3 minuti",
        steps: [
          {
            do: "Riduci a icona la finestra di Cursor, così vedi la scrivania del computer.",
            see: "Vedi lo sfondo con le icone.",
          },
          {
            do: "Clicca col tasto destro del mouse su un punto vuoto della scrivania.",
            see: "Si apre un menu con alcune voci.",
          },
          {
            do: "Scegli la voce che crea una nuova cartella.",
            see: "Compare una cartella nuova, con il nome pronto da scrivere.",
          },
          {
            do: "Scrivi prove-cursor e premi Invio.",
            see: "La cartella ha il nome che le hai dato. Dentro è vuota.",
          },
          {
            do: "Torna in Cursor. Clicca la scritta File.",
            see: "Si apre un elenco di voci. Su Mac la scritta File è nella barra in cima allo schermo; su Windows è nella riga di scritte piccole in alto nella finestra.",
          },
          {
            do: "Nell’elenco clicca Open Folder.",
            see: "Si apre una finestra che mostra le cartelle del tuo computer.",
          },
          {
            do: "Trova la cartella prove-cursor sulla scrivania, selezionala e conferma.",
            see: "La finestra si chiude. A sinistra in Cursor compare l’elenco del contenuto della cartella: per ora vuoto.",
          },
        ],
        done: "Cursor sta guardando dentro quella cartella. Quell’elenco a sinistra è la tua cartella, vista da dentro il programma.",
        ifStuck: [
          {
            symptom: "Non trovo la scritta File.",
            fix: "Su Mac guarda nella barra in cima a tutto lo schermo, non dentro la finestra di Cursor. Su Windows è nella riga di scritte piccole in alto a sinistra nella finestra.",
          },
          {
            symptom: "Ho aperto la cartella ma a sinistra non vedo niente.",
            fix: "È giusto: la cartella è vuota, non c’è ancora niente da elencare. Fra un attimo ci mettiamo qualcosa.",
          },
        ],
      },
    },

    primaDomanda: {
      title: "La prima domanda",
      safeMode: {
        title: "Prima, la stanza sicura",
        text: "Cursor ha una modalità chiamata Ask in cui può soltanto leggere e rispondere: non modifica nulla, mai. È il posto giusto per le prime domande, e ci si può sempre tornare quando si ha paura di combinare guai.",
      },
      procedure: {
        goal: "Fare la prima domanda",
        before: ["La cartella aperta in Cursor"],
        time: "3 minuti",
        steps: [
          {
            do: "Premi insieme il tasto Comando e il tasto I. Su Windows premi insieme Ctrl e I.",
            see: "A destra si apre un pannello con, in basso, una casella dove si può scrivere.",
          },
          {
            do: "Guarda appena sopra o sotto la casella: c’è un menu che indica la modalità.",
            see: "Probabilmente dice Agent.",
          },
          {
            do: "Premi insieme Maiuscolo e Tab, ripetutamente, finché quel menu non dice Ask.",
            see: "Il menu mostra la scritta Ask.",
          },
          {
            do: "Clicca dentro la casella, scrivi la domanda qui sotto (o copiala) e premi Invio.",
            see: "Compare un testo che si scrive da solo, riga dopo riga. Sono pochi secondi.",
          },
          {
            do: "Se qualcosa non è chiaro, scrivi nella stessa casella «spiegamelo più semplice» e premi Invio.",
            see: "Riformula la risposta con parole diverse.",
          },
        ],
        done: "Hai fatto la cosa da cui dipende tutto il resto: hai chiesto, e ha risposto.",
        ifStuck: [
          {
            symptom: "Premo i tasti e non si apre niente.",
            fix: "Clicca prima una volta dentro la finestra di Cursor, poi riprova. Il computer deve sapere che stai parlando con questo programma e non con un altro.",
          },
          {
            symptom: "Dice che devo fare l’accesso.",
            fix: "Sei installato ma non sei entrato nell’account. Cerca la voce per accedere e usa l’account creato prima.",
          },
          {
            symptom: "Non trovo il menu della modalità.",
            fix: "Sta nella zona della casella di scrittura, in piccolo. Se non lo vedi, prova comunque a scrivere la domanda: leggere e rispondere lo fa in qualsiasi modalità.",
          },
        ],
      },
      askPrompt:
        "Spiegami, come se non avessi mai programmato, che differenza c’è tra un file e una cartella. Usa un’analogia della vita quotidiana e non più di 100 parole.",
    },

    primoFile: {
      title: "Il primo file",
      intro:
        "Adesso il passaggio più importante di tutta la guida: chiedere di creare un file, e poi andare a ritrovarlo fuori da Cursor, sulla scrivania del computer.",
      exercise: {
        goal: "Crea il tuo primo file e ritrovalo sulla scrivania.",
        time: "~5 min",
        needsLaptop: true,
        prompt:
          "Questa cartella è vuota. Crea un file di testo chiamato appunti.md che contenga una lista di cinque cose che voglio imparare su Cursor. Non creare altri file. Poi spiegami in due frasi cosa hai fatto.",
        observe: [
          "Prima di scrivere, riporta la modalità su Agent con Maiuscolo e Tab: in Ask non può creare niente.",
          "Compaiono delle righe che raccontano cosa sta facendo: sono le sue azioni, una per una.",
          "Nell’elenco a sinistra compare un nuovo nome: appunti.md",
          "Ora la parte importante. Riduci a icona Cursor, apri la cartella prove-cursor sulla scrivania: il file è lì davvero. E non hai premuto nessun tasto Salva.",
        ],
        note: "Questo è il momento in cui l’idea diventa concreta, e vale più di dieci pagine di spiegazioni.",
      },
      afterward: {
        title: "Cosa è appena successo",
        text: "Hai chiesto una cosa a parole e sul tuo computer è comparso un documento vero, che puoi aprire, spostare, mandare per email. Non hai scritto codice e non hai salvato niente. Da qui in avanti cambia solo la dimensione di quello che chiedi.",
      },
    },

    stop: {
      title: "Anche qui puoi fermarti",
      text: "Hai installato Cursor, gli hai fatto una domanda e hai creato un file che sai ritrovare. È già abbastanza per usarlo: se ti serve altro, chiedilo a lui. I livelli 4, 5 e 6 servono a chi vuole andare più a fondo o scrive codice per lavoro.",
      continueLabel: "Vai al livello 4",
      leaveLabel: "Torna indietro",
    },
  },

  // ── LEVEL 4 ────────────────────────────────────────────────────────────
  l4: {
    words: {
      title: "Le parole che sentirai",
      intro:
        "Ora che hai visto la cosa funzionare, le parole hanno qualcosa a cui attaccarsi. Sono sette, e bastano per leggere qualsiasi guida o video.",
      terms: [
        {
          term: "Modello",
          text: "Il cervello che genera il testo. Ce ne sono diversi — GPT, Claude, Gemini, Grok, Composer — e cambiano per quanto sono capaci, quanto sono veloci e quanto costano. In inglese si dice LLM, che sta per large language model: modello di linguaggio di grandi dimensioni.",
        },
        {
          term: "Prompt",
          text: "Quello che scrivi tu. Il brief che dai. Brief vago, risultato vago. Non serve un italiano perfetto: capisce comunque.",
        },
        {
          term: "Contesto",
          text: "Tutto quello che il modello ha davanti in quel momento: i tuoi messaggi, le sue risposte, i file che ha letto. Cursor lo paragona a una scrivania: ci sta solo quello che ci sta, e se accumuli troppo qualcosa cade dal bordo. Quando si riempie, la parte vecchia della conversazione viene riassunta.",
        },
        {
          term: "Token",
          text: "L’unità con cui si conta il testo, più o meno un pezzo di parola. Sia la memoria del modello sia il prezzo si misurano in token. Come se ti contassero le sillabe invece delle parole.",
        },
        {
          term: "Tool (strumento)",
          text: "Le azioni che il modello può compiere: leggere un file, scriverlo, lanciare un comando, aprire una pagina. Cursor lo dice così: sono gli strumenti che permettono al modello di agire sul mondo invece di limitarsi a descriverlo.",
        },
        {
          term: "Agent",
          text: "Un modello con degli strumenti, che li usa in un ciclo: fa una cosa, guarda il risultato, decide la prossima. È la definizione ufficiale: strumenti in un ciclo.",
        },
        {
          term: "Diff",
          text: "Il confronto fra il prima e il dopo. Verde quello che si aggiunge, rosso quello che si toglie. Come le revisioni in Word.",
        },
      ],
    },

    surfaces: {
      title: "Tab e ⌘K",
      intro:
        "Due modi di farsi aiutare che non richiedono di cambiare abitudini: continui a scrivere e loro ti vengono incontro.",
      tab: {
        title: "Tab — il suggerimento grigio",
        points: [
          "Mentre scrivi compare un testo grigio davanti al cursore: è la proposta. Premi Tab e la accetti; premi Esc o continui a scrivere e la rifiuti.",
          "Con Comando e freccia destra (Ctrl e freccia destra su Windows) la accetti una parola per volta.",
          "Propone più righe insieme, e aggiunge da sé le parti mancanti in cima al file.",
          "Dopo aver accettato, premi ancora Tab: salta al punto successivo da modificare. Se è in un altro file, compare una finestrella in basso.",
          "Lo spegni o lo metti in pausa dall’indicatore in basso a destra nella finestra.",
        ],
      },
      inline: {
        title: "⌘K — modifica quello che hai selezionato",
        points: [
          "Selezioni un pezzo di testo, premi Comando e K (Ctrl e K su Windows), scrivi a parole la modifica e premi Invio. La modifica appare lì, senza aprire la chat.",
          "Su una riga vuota, invece, genera del testo nuovo nel punto dove sei.",
          "Con il riquadro aperto, Opzione e Invio (Alt e Invio su Windows) passa a «fai una domanda» sulla selezione. Se poi vuoi applicare, scrivi «do it» e premi Invio.",
          "Se il lavoro tocca più file, seleziona e premi Comando e L: passa all’Agent portandosi dietro la selezione.",
        ],
      },
      deepDive: {
        title: "Approfondisci: tre limiti che confondono tutti",
        points: [
          {
            term: "Le regole di progetto non valgono per Tab",
            text: "La documentazione è esplicita: le rules non influenzano Tab né le altre funzioni di completamento. Valgono per l’Agent.",
          },
          {
            term: "Le User Rules non valgono per ⌘K",
            text: "Le regole personali globali si applicano solo all’Agent, cioè alla chat, non alla modifica in linea.",
          },
          {
            term: "⌘I e ⌘L aprono la stessa cosa",
            text: "Entrambe aprono e chiudono il pannello dell’Agent. ⌘L in più ci porta dentro la selezione, se ne hai una.",
          },
        ],
      },
    },

    goodPrompt: {
      title: "Una richiesta che funziona",
      intro:
        "Una richiesta utile dice tre cose: cosa vuoi ottenere, cosa non deve fare, e come si capisce che è venuta bene.",
      comparison: {
        bad: {
          label: "Richiesta vaga",
          text: "Fammi un sito per la mia attività.",
          why: "Non dice con che tecnologia, quante pagine, cosa ci va dentro. Il risultato sarà una sorpresa, e probabilmente non quella che volevi.",
        },
        good: {
          label: "Richiesta utile",
          text: "Crea una pagina sola, in un unico file HTML, solo HTML e CSS, senza librerie esterne. Ci vanno il nome dell’attività, gli orari di apertura e un bottone che apre il numero di telefono. Alla fine dimmi come apro il file nel browser.",
          why: "Obiettivo, vincoli e verifica. Il risultato è prevedibile e lo sai controllare.",
        },
      },
      tips: [
        "Un obiettivo per volta, scritto come lo diresti a un collega.",
        "Di’ come si verifica: «deve aprirsi nel browser», «il test X deve passare».",
        "Quando la conversazione diventa lunga o l’agent si confonde, aprine una nuova. Costa meno e funziona meglio.",
        "Se una risposta non va, spiega cosa non torna invece di ripetere la stessa richiesta.",
      ],
      exercise: {
        goal: "Costruisci una pagina vera, poi modificala in due modi diversi.",
        time: "~8 min",
        needsLaptop: true,
        prompt:
          "Crea una pagina web di una sola pagina, in un unico file HTML, che presenti un piccolo evento: titolo, data, luogo e un bottone per iscriversi. Usa solo HTML e CSS, senza librerie e senza installare nulla. Poi apri la pagina nel browser integrato e mostrami uno screenshot.",
        observe: [
          "L’agent chiede il permesso di eseguire dei comandi: è normale, e sei tu a decidere.",
          "Il browser si apre in un riquadro dentro Cursor e torna uno screenshot nella chat.",
          "Ora seleziona nel file solo la parte del bottone e premi ⌘K: chiedi «rendilo arancione e più grande». Senti quanto è più rapido di una richiesta all’Agent.",
        ],
      },
    },

    troubleshooting: {
      title: "Quando qualcosa va storto",
      intro:
        "Cinque situazioni che capitano a tutti, con cosa fare. Nessuna è colpa tua.",
      items: [
        {
          symptom: "Ha fatto una cosa diversa da quella che volevo.",
          fix: "Non ripetere la stessa frase: spiega cosa non torna. «No, il bottone deve stare in alto, non in fondo.» Capisce le correzioni molto meglio delle ripetizioni.",
        },
        {
          symptom: "Ha cambiato dei file che non doveva toccare.",
          fix: "Passa il mouse su un tuo messaggio precedente nella chat e cerca Restore Checkpoint: i file tornano come erano, e la conversazione resta.",
        },
        {
          symptom: "Continua a sbagliare la stessa cosa.",
          fix: "Apri una conversazione nuova. Quando la chat diventa lunga la memoria dell’agent si riempie e continua a ripetere lo stesso errore. Lo consiglia la documentazione ufficiale.",
        },
        {
          symptom: "Mi chiede il permesso di eseguire un comando e non so cosa fare.",
          fix: "Leggi cosa sta per fare. Se stai seguendo una guida o un esercizio, di’ sì. Se non capisci cosa sia e non l’hai chiesto tu, di’ no: non si rompe niente.",
        },
        {
          symptom: "Si è bloccato e continua a lavorare senza finire.",
          fix: "Premi il bottone Stop, oppure Comando, Maiuscolo e Backspace insieme. Poi riformula la richiesta in modo più piccolo.",
        },
      ],
    },
  },

  // ── LEVEL 5 ────────────────────────────────────────────────────────────
  l5: {
    agent: {
      title: "L’Agent e i checkpoint",
      intro:
        "L’Agent si apre con ⌘I. La documentazione lo descrive come costruito su tre componenti, e capirli spiega quasi tutto il comportamento che vedrai.",
      components: [
        {
          title: "Istruzioni",
          text: "Il prompt di sistema e le regole che ne guidano il comportamento.",
          icon: "book" as const,
        },
        {
          title: "Tool",
          text: "Ricerca nel codice, modifica dei file, terminale, browser, generazione di immagini.",
          icon: "hammer" as const,
        },
        {
          title: "Modello",
          text: "Quello che scegli per il compito. Cursor adatta istruzioni e tool a ciascun modello.",
          icon: "spark" as const,
        },
      ],
      tools: [
        "Cerca file e cartelle, e trova pattern esatti dentro i file",
        "Cerca sul web e recupera pagine",
        "Legge file, immagini incluse",
        "Modifica i file e applica le modifiche",
        "Esegue comandi nel terminale e ne legge l’output",
        "Controlla un browser in un riquadro dentro Cursor: naviga, clicca, fa screenshot",
        "Genera immagini, salvate in assets/ e mostrate nella chat",
        "Ti fa domande — e mentre aspetta la risposta continua a lavorare",
      ],
      noLimit:
        "Non c’è un limite al numero di azioni che l’agent può compiere durante un compito.",
      diskWarning: {
        title: "Le modifiche sono già sul disco",
        text: "Questa è la cosa che sorprende tutti: l’agent scrive i file mentre lavora, non c’è uno stato «in attesa» e non c’è un tasto Salva. Se vedi i controlli Keep e Undo, Keep non salva niente — la modifica c’era già. È Undo che riporta indietro il file.",
      },
      checkpoints: {
        title: "Checkpoint: il vero tasto per tornare indietro",
        text: "Cursor salva automaticamente una fotografia dei file prima delle modifiche importanti. Passi il mouse su un messaggio precedente nella chat, clicchi Restore Checkpoint e i file tornano a quello stato. La conversazione però resta: il contesto non si perde, e puoi dire subito «no, fai invece così».",
        warning:
          "I checkpoint sono locali e separati da Git. Servono ad annullare le modifiche di un agent, non a versionare: per quello usa Git.",
      },
      windowsGotcha: {
        title: "Attenzione: da Cursor 3 ci sono due finestre",
        text: "Si apre per default la Agents Window, dove i controlli di revisione Keep e Undo possono non esserci. I diff rossi e verdi con Keep e Undo stanno nella finestra classica: si passa con ⌘⇧P e Open Editor Window, e si attivano da Cursor Settings → Agents → Applying Changes → Inline Diffs. Se qualcuno non vede i diff, è quasi sempre questo.",
      },
      steering: [
        {
          term: "Invio",
          text: "Accoda il messaggio: aspetta che il lavoro in corso finisca. I messaggi in coda si riordinano trascinandoli.",
        },
        {
          term: "⌘Invio",
          text: "Invia subito, salta la coda. Per interrompere o cambiare direzione.",
        },
        {
          term: "Invio due volte, o Send now",
          text: "Corregge la rotta senza interrompere: il messaggio arriva alla prossima azione dell’agent, così il lavoro fatto non si perde.",
        },
        {
          term: "Stop, o ⌘⇧Backspace",
          text: "Ferma tutto. Se vedi che sta andando nella direzione sbagliata, fermalo e ridirigilo.",
        },
        {
          term: "/goal",
          text: "Dà un obiettivo a lungo termine su cui insistere finché non è completo. È in rilascio graduale: se non lo vedi, prova in una chat nuova.",
        },
      ],
      exercise: {
        goal: "Rompi qualcosa di proposito e torna indietro.",
        time: "~5 min",
        needsLaptop: true,
        prompt:
          "Riscrivi completamente appunti.md in inglese e cancella la lista che c’era prima. Fallo subito, senza chiedermi conferma.",
        observe: [
          "Guarda il file cambiare: è già scritto sul disco, non c’è nessuna conferma da dare.",
          "Passa il mouse sul tuo messaggio precedente e clicca Restore Checkpoint.",
          "Il file torna come prima, ma la conversazione resta: scrivi «troppo, rifallo solo sulle prime due righe».",
        ],
        note: "Fallo su un file di prova. È l’esercizio che toglie la paura di usare l’agent.",
      },
    },
    modes: {
      title: "Le modalità",
      intro:
        "⇧Tab ruota tra le modalità dalla casella della chat (⌘. apre il menu). Ogni modalità usa un contesto suo: cambiarla apre una finestra di contesto nuova.",
      table: {
        head: ["Modalità", "Meglio per", "Può modificare i file?"],
        rows: [
          [
            "Agent",
            "Costruire funzionalità, rifattorizzare, sistemare bug",
            "Sì",
          ],
          [
            "Ask",
            "Capire il codice, esplorare l’architettura",
            "No, sola lettura",
          ],
          [
            "Plan",
            "Lavori complessi dove vuoi rivedere l’approccio prima",
            "Sì, dopo che approvi il piano",
          ],
          ["Debug", "Bug difficili che richiedono prove a runtime", "Sì"],
        ],
      },
      plan: {
        title: "Plan Mode, in quattro punti",
        points: [
          "Fa domande di chiarimento, esplora il progetto e produce un piano che puoi leggere e correggere. Costruisce solo dopo la tua approvazione.",
          "Cursor propone Plan Mode da sé quando scrivi parole che indicano un lavoro complesso.",
          "I piani sono salvati per default nella tua cartella home: clicca Save to workspace per portarli nel progetto e condividerli.",
          "Se il risultato non è quello che volevi, la documentazione consiglia di annullare e migliorare il piano invece di rattoppare con dieci follow-up.",
        ],
      },
      debug: {
        title: "Debug Mode, come funziona davvero",
        text: "Non indovina: formula ipotesi, inserisce dei log che parlano con un server di debug locale, ti chiede di riprodurre il problema, analizza i dati raccolti, fa una correzione mirata e poi rimuove le tracce che aveva messo. È la modalità giusta per race condition, regressioni e problemi di performance.",
      },
      design: {
        title: "Design Mode",
        text: "Prompt visivi dal browser dentro la Agents Window: si attiva con ⌘⇧D. Clicchi un elemento, o disegni sopra la pagina, o descrivi a voce; l’agent riceve identità dell’elemento e screenshot. Quando finisce, l’app si ricarica e vedi la modifica nel prodotto in funzione. La documentazione consiglia Composer 2.5.",
      },
      exercise: {
        goal: "Confronta lo stesso compito in Plan e in Agent.",
        time: "~10 min",
        needsLaptop: true,
        prompt:
          "Trasforma questa pagina in un sito di tre pagine: home, dettagli, contatti. Non scrivere ancora codice: fammi prima delle domande, poi proponi un piano che io possa leggere e correggere.",
        observe: [
          "In Plan Mode non parte a scrivere: fa domande e produce un piano modificabile.",
          "Correggi una riga del piano a mano, poi avvia la costruzione.",
          "Rifallo in Agent Mode in una chat nuova e confronta i due risultati.",
        ],
      },
    },
    context: {
      title: "Il contesto è tutto",
      intro:
        "La differenza fra una risposta inutile e una giusta è quasi sempre il contesto. Cursor ne raccoglie molto da sé; saperlo guidare è la competenza che rende davvero più veloci.",
      ring: {
        title: "Il context ring",
        text: "Accanto alla casella del prompt c’è un anello che mostra quanto è piena la finestra di contesto. Cliccalo: si apre la ripartizione dei token fra prompt di sistema, tool, regole, skill, MCP, subagent, conversazione riassunta e conversazione. È l’argomento più convincente per disattivare i server MCP che non usi.",
      },
      tools: [
        {
          title: "@ per puntare",
          text: "File e cartelle, @Terminals per l’output del terminale, @Chats per una conversazione passata, @Commit e @Branch per i diff, @Browser per il browser integrato.",
          icon: "external" as const,
        },
        {
          title: "Instant Grep",
          text: "Il motore di ricerca di Cursor, più veloce di ripgrep sui repo grandi, con regex complete. Parte da solo.",
          icon: "book" as const,
        },
        {
          title: "Immagini e voce",
          text: "Trascina uno screenshot o incollalo con ⌘V. C’è anche il microfono nella casella della chat.",
          icon: "spark" as const,
        },
        {
          title: "AGENTS.md",
          text: "Markdown semplice nella radice del progetto: stack, convenzioni, divieti. Funziona anche annidato nelle sottocartelle, con le istruzioni più specifiche che vincono.",
          icon: "shield" as const,
        },
        {
          title: "Project Rules",
          text: "File in .cursor/rules, versionati col progetto: sempre attive, a giudizio dell’agent, legate a certi file, o solo se le richiami con @.",
          icon: "code" as const,
        },
        {
          title: ".cursorignore",
          text: "Esclude file e cartelle da indicizzazione e agent. Cursor già ignora .env, .git/ e i lockfile, e rispetta .gitignore.",
          icon: "alert" as const,
        },
      ],
      counterintuitive: {
        title: "Il consiglio controintuitivo della documentazione",
        text: "Usa le @-mention quando sai quali file contano. Se non ne sei sicuro, non usarle: l’Agent trova i file rilevanti con la sua ricerca, e spesso meglio di te. Chi inizia tende a riempire il contesto di allegati e ottiene risposte peggiori.",
      },
      rulesExample:
        "# Regole del progetto\n\n- Stack: Next.js (App Router) + TypeScript + Tailwind\n- Package manager: pnpm\n- Testi per l'utente in italiano, codice e commit in inglese\n- Non aggiungere dipendenze senza chiedere\n- Prima di chiudere un task: pnpm lint",
      deepDive: {
        title: "Approfondisci: quattro trappole su regole e privacy",
        points: [
          {
            term: "Un .md dentro .cursor/rules viene ignorato",
            text: "Le project rules devono avere estensione .mdc, perché servono i metadati in testa al file. Per markdown semplice usa AGENTS.md.",
          },
          {
            term: "L’ordine di precedenza",
            text: "Team Rules → Project Rules → User Rules. Tutte le regole applicabili vengono unite, e in caso di conflitto vince la fonte che viene prima.",
          },
          {
            term: ".cursorignore non è una barriera di sicurezza",
            text: "Blocca indicizzazione e accesso dell’agent, ma i comandi nel terminale e i tool MCP girano fuori dai controlli di accesso ai file di Cursor e possono comunque leggerli.",
          },
          {
            term: "Come funziona l’indicizzazione",
            text: "I percorsi dei file sono cifrati prima di essere inviati; il contenuto non viene mai salvato in chiaro, sta in memoria durante l’indicizzazione e poi viene scartato. I chunk vengono decifrati lato client quando l’agent cerca.",
          },
        ],
      },
      exercise: {
        goal: "Scrivi le regole del progetto e guarda quanto contesto consumano.",
        time: "~6 min",
        needsLaptop: true,
        prompt:
          "Crea un file AGENTS.md nella radice del progetto con le regole di questo repo: deduci lo stack dai file che vedi, indica il package manager, la lingua dei testi e la regola «non aggiungere dipendenze senza chiedere». Poi proponimi una modifica qualsiasi e dimmi quale regola hai rispettato.",
        observe: [
          "Lo stack viene dedotto dai file reali, non indovinato.",
          "Nelle chat successive quelle regole valgono senza ripeterle.",
          "Clicca il context ring: guarda quanti token si prendono tool e MCP prima che tu scriva qualcosa.",
        ],
      },
    },
  },

  // ── LEVEL 6 ────────────────────────────────────────────────────────────
  l6: {
    extend: {
      title: "Skills, Hooks, MCP",
      intro:
        "Qui Cursor smette di essere un editor e diventa una piattaforma. Tutto si gestisce dalla pagina Customize nella barra laterale, a livello utente, progetto o team.",
      components: [
        {
          title: "Skills",
          text: "Capacità che l’agent carica quando servono: cartelle con un file SKILL.md. Standard aperto (agentskills.io). Le richiami anche a mano con «/».",
          icon: "gift" as const,
        },
        {
          title: "Rules",
          text: "Istruzioni persistenti che modellano il comportamento dell’agent.",
          icon: "shield" as const,
        },
        {
          title: "Subagents",
          text: "Assistenti specializzati con una finestra di contesto propria.",
          icon: "users" as const,
        },
        {
          title: "Hooks",
          text: "Script che scattano sugli eventi del ciclo dell’agent: possono osservare, bloccare o modificare.",
          icon: "loop" as const,
        },
        {
          title: "Commands",
          text: "Prompt riutilizzabili richiamati con «/», definiti come file markdown.",
          icon: "terminal" as const,
        },
        {
          title: "Plugins",
          text: "Pacchetti che mettono insieme regole, skill, subagent, comandi, server MCP e hook.",
          icon: "code" as const,
        },
      ],
      skillDirs:
        "Cursor carica automaticamente .cursor/skills/ e .agents/skills/ nel progetto, le corrispondenti nella home, e per compatibilità anche .claude/skills/ e .codex/skills/.",
      builtinSkills: [
        { name: "/onboard", text: "Percorso guidato per orientarti in Cursor." },
        { name: "/create-skill", text: "Crea una skill partendo da una descrizione." },
        { name: "/create-rule", text: "Scrive una regola di progetto coi metadati giusti." },
        { name: "/review", text: "Review delle tue modifiche locali." },
        { name: "/babysit", text: "Porta un PR fino al merge: commenti, conflitti, CI." },
        { name: "/loop", text: "Ripete un prompt o una skill a intervalli." },
        { name: "/automate", text: "Configura una Automation descrivendola a parole." },
        { name: "/canvas", text: "Visualizzazioni React live per dati e analisi." },
        { name: "/split-to-prs", text: "Divide un lavoro grosso in PR piccoli." },
      ],
      mcp: {
        title: "MCP — Model Context Protocol",
        plain:
          "MCP è una presa standard che collega Cursor a tool e dati esterni. Invece di raccontare a parole com’è fatto il tuo Linear, Figma, Notion o database, colleghi il servizio: l’agent legge i dati veri e può compiere azioni. Un server MCP si scrive in qualunque linguaggio capace di stampare su stdout o servire un endpoint HTTP.",
        transports: {
          head: ["Trasporto", "Dove gira", "Utenti", "Input", "Auth"],
          rows: [
            ["stdio", "Locale", "Un utente", "Comando da shell", "Manuale"],
            ["SSE", "Locale o remoto", "Più utenti", "URL endpoint SSE", "OAuth"],
            [
              "Streamable HTTP",
              "Locale o remoto",
              "Più utenti",
              "URL endpoint HTTP",
              "OAuth",
            ],
          ],
        },
        configWhere:
          "Installazione con un clic dal Marketplace, dove ogni plugin è rivisto a mano e deve essere open source. Oppure a mano: .cursor/mcp.json nel progetto, ~/.cursor/mcp.json globale. Per la community c’è cursor.directory.",
        json: '{\n  "mcpServers": {\n    "il-mio-tool": {\n      "command": "npx",\n      "args": ["-y", "mcp-server"],\n      "env": { "API_KEY": "${env:API_KEY}" }\n    }\n  }\n}',
        security: [
          "Installa solo server di sviluppatori e repository di cui ti fidi.",
          "Controlla a quali dati e API accede il server.",
          "Chiavi API sempre da variabili d’ambiente, mai scritte nel file.",
          "I server MCP possono accedere a servizi esterni ed eseguire codice a tuo nome: capisci cosa fa un server prima di installarlo.",
        ],
        debug:
          "Log MCP: pannello Output (⌘⇧U) → voce MCP Logs. Se un server va in crash resta isolato, gli altri continuano.",
        paidNote:
          "Attenzione per i piani gratuiti: MCP, skill e hook sono elencati fra le funzioni dei piani a pagamento.",
      },
      exercise: {
        goal: "Scrivi una skill per un lavoro che rifai sempre.",
        time: "~8 min",
        needsLaptop: true,
        prompt:
          "Usa /create-skill per creare una skill che descriva i controlli da fare prima di considerare concluso un task in questo progetto. Deve coprire lint, build, rilettura dei diff e nessuna dipendenza aggiunta senza chiedere. Dimmi dove l’hai scritta e come la richiamo.",
        observe: [
          "La skill diventa un file nel progetto: versionabile e condivisibile col team.",
          "La richiami con «/» invece di riscrivere le istruzioni.",
          "Selezionala con ⌥Invio invece di Invio: diventa una Custom Mode e resta attiva per tutta la sessione.",
        ],
      },
    },
    scale: {
      title: "Subagent, cloud, automazioni",
      subagents: {
        title: "Subagent",
        text: "Assistenti specializzati a cui l’agent principale delega pezzi di lavoro. Ognuno ha la propria finestra di contesto e restituisce solo il risultato. Partono con contesto pulito: non vedono la conversazione precedente, quindi il genitore deve passargli le informazioni utili.",
        builtin: [
          {
            term: "Explore",
            text: "Cerca e analizza il codice con molte ricerche in parallelo su un modello più veloce.",
          },
          {
            term: "Bash",
            text: "Esegue serie di comandi, il cui output sarebbe troppo verboso per la chat principale.",
          },
          {
            term: "Browser",
            text: "Controlla il browser, i cui snapshot del DOM e screenshot sono rumorosi.",
          },
        ],
        tradeoffs: [
          "Consumano token in modo indipendente: cinque in parallelo costano circa cinque volte un agent singolo.",
          "Possono essere più lenti. Il vantaggio è l’isolamento del contesto, non la velocità.",
          "L’annidamento ha un limite: un subagent lanciato da un subagent non può lanciarne altri.",
        ],
      },
      cloud: {
        title: "Cloud Agents",
        text: "Girano su macchine virtuali isolate con un ambiente di sviluppo completo. Li lanci dal desktop scegliendo Cloud nel menu sotto la casella, da cursor.com/agents, da iOS, da Slack con @cursor, da un commento su GitHub o Bitbucket, da Linear o via API. Producono artefatti — screenshot, video, log — e puoi prendere il controllo del loro desktop per provare tu il software.",
        notes: [
          "Prima si chiamavano Background Agents: se trovi quel nome in guide vecchie, è la stessa cosa.",
          "Non usano le Run Modes e non chiedono approvazioni: stanno su una macchina dedicata.",
          "Richiedono un piano a pagamento. Vale anche per «Start from scratch», la funzione che crea un progetto senza repository: è dei Cloud Agents, non del programma locale.",
          "Come dice la documentazione: non allestire un ambiente di sviluppo per i cloud agent è come non dare un computer ai tuoi sviluppatori.",
        ],
      },
      automations: {
        title: "Automations",
        text: "Cloud agent che partono su orario o su evento: da GitHub, GitLab, Slack, webhook, Linear, Sentry, PagerDuty. Il modo più semplice di crearne una è la skill /automate: descrivi il flusso a parole e Cursor configura trigger, istruzioni e tool.",
        examples: [
          "La CI si rompe sul main: un agent apre da solo il PR che la sistema.",
          "Un bug segnalato su Slack diventa un tentativo di fix da rivedere.",
          "Triage delle issue e digest periodico di cosa è cambiato nel codice.",
        ],
        managed: [
          {
            term: "Bugbot",
            text: "Rivede i pull request e segnala bug, problemi di sicurezza e di qualità. Parte a ogni aggiornamento del PR, o a mano commentando «cursor review» o «bugbot run». Legge le regole del repo dai file BUGBOT.md.",
          },
          {
            term: "Security Agents",
            text: "Scansione di vulnerabilità sui PR e sul codice esistente.",
          },
          {
            term: "PR Routing & Approval",
            text: "Instradamento e approvazione dei pull request.",
          },
        ],
      },
      cli: {
        title: "CLI",
        install: "curl https://cursor.com/install -fsS | bash",
        warning:
          "Nota: questo installa la CLI, che è un prodotto diverso dall’editor. Chi vuole il programma con la finestra deve scaricarlo da cursor.com/download.",
        notes: [
          "Si avvia con il comando agent e ha le stesse modalità dell’editor (⇧Tab, /plan, /ask).",
          'Modalità non interattiva per script e CI: agent -p "..." --output-format text',
          "Metti & davanti a un messaggio per passare la conversazione a un Cloud Agent.",
        ],
      },
    },
    costs: {
      title: "Costi, permessi, privacy",
      free: {
        title: "Cosa dà il piano gratuito",
        text: "Il piano Hobby è gratuito, non chiede la carta e dà accesso ad Agent, Chat e completamenti Tab con il modello Auto, con un numero limitato di richieste. Restano fuori: limiti estesi, accesso ai modelli di punta, MCP, skill e hook, i Cloud Agents, Bugbot e la condivisione dei canvas.",
      },
      plans: {
        head: ["Piano", "Prezzo"],
        rows: [
          ["Hobby", "Gratis"],
          ["Pro", "20 $/mese"],
          ["Pro+", "60 $/mese"],
          ["Ultra", "200 $/mese"],
          ["Teams Standard", "40 $/utente/mese"],
          ["Teams Premium", "120 $/utente/mese"],
        ],
      },
      pools:
        "I piani a pagamento includono due contatori mensili: Cursor Models (Grok 4.6, Grok 4.5, Composer 2.5) e Other Models, i modelli di terze parti al loro prezzo. Si azzerano col ciclo di fatturazione e quello che non usi non si accumula.",
      efficiency: [
        "Il caching di prompt e contesto fa la parte grossa del risparmio, e Cursor lo gestisce da solo.",
        "Quando la finestra si riempie, la conversazione vecchia viene riassunta: chat pulite costano meno di chat infinite.",
        "Pianificare prima riduce i giri a vuoto.",
        "Disattiva i server MCP che non usi: le loro definizioni occupano contesto anche quando non li chiami.",
      ],
      runModes: {
        title: "Run Modes: chi decide cosa può girare",
        text: "In Cursor Settings → Agents → Approvals & Execution scegli quanto l’agent può fare senza chiedere. Vale per i comandi shell, i tool MCP e le richieste di rete.",
        table: {
          head: ["Modalità", "Cosa gira senza chiedere"],
          rows: [
            [
              "Auto-review",
              "Le chiamate in allowlist subito; i comandi shell nella sandbox quando possibile; il resto passa da un classificatore. È la predefinita.",
            ],
            ["Allowlist", "Solo quello che hai messo in lista."],
            ["Run Everything", "Tutto, senza chiedere."],
          ],
        },
        warnings: [
          "La documentazione lo dice a chiare lettere: Auto-review non è una barriera di sicurezza. Il classificatore può permettere qualcosa che tu bloccheresti, e viceversa.",
          "«Ask Every Time» non esiste più: deprecata a maggio 2026. «Run in Sandbox» è stata assorbita in Allowlist con la sandbox attiva.",
          "Con le impostazioni predefinite gli agent non possono fare richieste di rete arbitrarie: solo GitHub, recupero diretto di link e ricerca web.",
          "Privacy Mode garantisce che il tuo codice non venga usato per l’addestramento: si attiva da Cursor Settings → General, ed è attiva per default nei team. Non si applica se usi le tue chiavi API.",
        ],
      },
      corrections: {
        title: "Approfondisci: quattro cose che le guide vecchie sbagliano",
        points: [
          {
            term: "Max Mode è solo per i piani legacy",
            text: "Estende la finestra di contesto oltre il limite predefinito con un sovrapprezzo del 20% sul prezzo API, e c’è solo sui vecchi piani a richieste. Molti video lo presentano ancora come la leva per andare più forte: sui piani attuali non è la cosa da cercare.",
          },
          {
            term: "Auto è stato diviso in tre",
            text: "La vecchia modalità Auto è diventata Cost, Balance e Intelligence. Chi la usava prima si ritrova su Auto Cost. Il router però arriva prima su Teams ed Enterprise: sui piani individuali con qualche mese di ritardo.",
          },
          {
            term: "Non esiste una funzione «Memories» nell’editor",
            text: "L’indirizzo della documentazione reindirizza alla pagina delle Rules. Le Memories esistono come strumento delle Automations, un file MEMORIES.md che persiste fra le esecuzioni, non come memoria del programma.",
          },
          {
            term: "Le estensioni arrivano da Open VSX",
            text: "Non dal Marketplace di VS Code. Molte delle più diffuse ci sono, ma non tutte, e non tutte si comportano identicamente.",
          },
        ],
      },
    },
  },

  fromVsCode: {
    title: "Se vieni da VS Code",
    text: "Cursor Settings (⌘⇧J / Ctrl+⇧J) → General → Account → VS Code Import porta estensioni, temi, impostazioni e scorciatoie in un clic. Le scorciatoie predefinite sono le stesse, e puoi tenere aperti Cursor e VS Code sullo stesso progetto insieme.",
    warning:
      "Due cose da sapere: le estensioni arrivano da Open VSX e non dal Marketplace di VS Code, quindi non ci sono tutte. E ⌘K qui significa modifica in linea, non è il prefisso delle scorciatoie doppie come in VS Code.",
  },

  /** Sits at the foot of the page: the product Cursor is pushing next. */
  grokNext: {
    title: "Il passo successivo: agenti che restano",
    lead: "Cursor lavora sui file che hai davanti, sul tuo computer, mentre tu guardi. Grok Bot è l’altra metà: agenti che restano, con un computer nel cloud, e continuano anche a portatile chiuso.",
    points: [
      {
        title: "Non è una chat",
        text: "Un agent che crei resta, ricorda il contesto e riprende da dove aveva lasciato.",
      },
      {
        title: "Ha un computer suo",
        text: "Gira nel cloud: apre un browser, usa file, porta a termine cose senza il tuo portatile.",
      },
      {
        title: "Si collega ai tuoi strumenti",
        text: "Plugin verso i servizi che usi, e routine che partono da sole su un orario.",
      },
    ],
    cta: {
      title: "Guida a Grok Bot",
      text: "Cos’è, in cosa è diverso da Cursor e come si crea il primo agent",
    },
  },

  shortcuts: [
    { action: "Pannello Agent", mac: "⌘I o ⌘L", win: "Ctrl+I o Ctrl+L" },
    { action: "Modifica in linea", mac: "⌘K", win: "Ctrl+K" },
    { action: "Cambia modalità", mac: "⇧Tab", win: "⇧Tab" },
    { action: "Menu modalità", mac: "⌘.", win: "Ctrl+." },
    { action: "Cambia modello", mac: "⌘/", win: "Ctrl+/" },
    { action: "Accetta suggerimento", mac: "Tab", win: "Tab" },
    { action: "Accetta una parola", mac: "⌘→", win: "Ctrl+→" },
    { action: "Ferma l’agent", mac: "⌘⇧Backspace", win: "Ctrl+⇧Backspace" },
    { action: "Impostazioni Cursor", mac: "⌘⇧J", win: "Ctrl+⇧J" },
    { action: "Palette comandi", mac: "⌘⇧P", win: "Ctrl+⇧P" },
  ],
} as const;
