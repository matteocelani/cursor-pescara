export const grok = {
  title: "Grok Bot, spiegato",
  tagline: "Your team of always-on agents",

  intro: {
    lead: "Grok Bot è la suite di agenti di Cursor e xAI. Un agent ha un nome, un mestiere e un computer nel cloud: resta, e continua a lavorare anche quando chiudi il portatile.",
    body: [
      "Tre livelli. Il primo si legge senza installare niente. Il secondo serve quando lo vuoi usare per lavoro. Il terzo è per automatizzare.",
    ],
    prereq: {
      title: "Se mancano le basi",
      text: "Questa pagina dà per scontato che sai cos’è l’intelligenza artificiale e cos’è una chat. Se quelle cose non ti sono chiare, parti dalla guida a Cursor: spiega tutto da zero.",
      cta: "Apri la guida a Cursor",
    },
    meta: [
      { label: "Livelli", value: "3" },
      { label: "Il primo", value: "9 minuti" },
      { label: "Serve avere Cursor", value: "Un piano a pagamento" },
    ],
    version:
      "Scritta ad agosto 2026 sulla documentazione ufficiale. Grok Bot cambia in fretta: piani, funzioni e nomi dei bottoni si stanno ancora muovendo.",
  },

  levelMap: {
    title: "Da dove entrare",
    rows: [
      {
        id: "livello-1",
        n: 1,
        name: "Capire cos’è",
        who: "Non l’hai mai usato e vuoi sapere cosa fa",
        time: "9 min",
        tier: 1,
      },
      {
        id: "livello-2",
        n: 2,
        name: "Usarlo davvero",
        who: "Vuoi accedere, collegare i tuoi strumenti e farlo in sicurezza",
        time: "12 min",
        tier: 2,
      },
      {
        id: "livello-3",
        n: 3,
        name: "Automatizzare",
        who: "Vuoi lavori ricorrenti e più agent che collaborano",
        time: "8 min",
        tier: 3,
      },
    ],
  },

  levels: [
    {
      n: 1,
      id: "livello-1",
      name: "Capire cos’è",
      subtitle: "Cosa fa, in cosa è diverso da Cursor, primo avvio",
      mode: "Da leggere",
      assumes: "Sai cos’è una chat con l’intelligenza artificiale.",
      time: "9 minuti",
      exitCriterion:
        "Sai spiegare cosa fa un agent di Grok Bot, in cosa è diverso da Cursor, e hai creato il tuo primo agent.",
    },
    {
      n: 2,
      id: "livello-2",
      name: "Usarlo davvero",
      subtitle: "Piani, il computer nel cloud, plugin e sicurezza",
      mode: "Come si fa",
      assumes: "Il livello 1 e un agent creato.",
      time: "12 minuti",
      exitCriterion:
        "Sai cosa serve per accedere, come collegare i tuoi strumenti, e quali sono le tre o quattro regole di sicurezza da non violare.",
    },
    {
      n: 3,
      id: "livello-3",
      name: "Automatizzare",
      subtitle: "Skill, routine e più agent che lavorano insieme",
      mode: "Riferimento",
      assumes: "Il livello 2. Hai già fatto svolgere un lavoro vero a un agent.",
      time: "8 minuti",
      exitCriterion:
        "Sai trasformare un lavoro riuscito in una procedura riutilizzabile e poi in un lavoro ricorrente, con i limiti giusti.",
    },
  ],

  chapters: [
    { id: "cos-e", levelId: "livello-1", title: "Cos’è Grok Bot", tier: 1 },
    { id: "non-e-cursor", levelId: "livello-1", title: "In cosa è diverso da Cursor", tier: 1 },
    { id: "primo-avvio", levelId: "livello-1", title: "Dall’installazione al primo agent", tier: 1 },
    { id: "piani", levelId: "livello-2", title: "Piani, accesso e limiti", tier: 2 },
    { id: "computer", levelId: "livello-2", title: "Il computer nel cloud e i plugin", tier: 2 },
    { id: "sicurezza", levelId: "livello-2", title: "Sicurezza: cosa approvi e cosa non scrivi mai in chat", tier: 2 },
    { id: "skill-routine", levelId: "livello-3", title: "Skill, routine e più agent insieme", tier: 3 },
  ],

  links: {
    onboarding: "https://cursor.com/bot/onboarding",
    gettingStarted: "https://cursor.com/help/grok-bot/getting-started",
    signIn: "https://cursor.com/help/grok-bot/sign-in",
    plans: "https://cursor.com/help/grok-bot/plans",
    plugins: "https://cursor.com/help/grok-bot/connect-plugins",
    secrets: "https://cursor.com/help/grok-bot/secrets",
    mobile: "https://cursor.com/help/grok-bot/mobile",
    superGrok: "https://cursor.com/help/grok-bot/supergrok-heavy",
    recovery: "https://cursor.com/help/grok-bot/computer-recovery",
    getHelp: "https://cursor.com/help/grok-bot/get-help",
    xaiOverview: "https://docs.x.ai/grok-bot/overview",
    xaiGetStarted: "https://docs.x.ai/grok-bot/get-started",
    xaiBots: "https://docs.x.ai/grok-bot/bots",
    xaiComputer: "https://docs.x.ai/grok-bot/computer-and-apps",
    xaiRoutines: "https://docs.x.ai/grok-bot/skills-routines-and-automations",
    xaiSecurity: "https://docs.x.ai/grok-bot/approvals-security-and-privacy",
    xaiUseCases: "https://docs.x.ai/grok-bot/use-cases",
    xaiTroubleshooting: "https://docs.x.ai/grok-bot/troubleshooting",
    privacySettings: "https://cursor.com/dashboard/settings?openPrivacy=true",
    launch: "https://x.ai/news/introducing-grok-bot",
    pricing: "https://cursor.com/pricing",
  },

  // ── LEVEL 1 ──────────────────────────────────────────────────────────────
  cosE: {
    definition:
      "Grok Bot ti dà agenti da usare nel tempo. Un agent usa i plugin che hai collegato, lavora in un computer nel cloud e può eseguire routine mentre non ci sei. A differenza di una chat, ricorda il contesto e continua in sottofondo.",
    definitionSource: "Dalla documentazione di Cursor",
    paragraphs: [
      "Nella documentazione e nell’app un agent si chiama Bot. In questa pagina resta «agent», la parola usata da Cursor: se leggi «Bot» è la stessa cosa.",
    ],
    properties: [
      {
        title: "Resta",
        text: "Ha un nome e un mestiere. Memoria, file e preferenze si accumulano: non riparte da zero a ogni richiesta.",
        icon: "users" as const,
      },
      {
        title: "Impara come lavori",
        text: "Trattiene le preferenze e i fatti importanti, così non gli devi ripetere tutto.",
        icon: "book" as const,
      },
      {
        title: "Continua da solo",
        text: "Il lavoro gira nel cloud. Chiudere l’app o il portatile non ferma un lavoro in corso.",
        icon: "cloud" as const,
      },
    ],
    vsChatbot: {
      title: "La differenza con un chatbot, in una riga",
      text: "Un chatbot risponde. Un agent usa un computer, i tuoi strumenti e i file, e il risultato finisce nello strumento vero — non come bozza in chat.",
    },
    beta: {
      title: "Sul fatto che sia «in beta»",
      text: "Alcuni materiali lo chiamano beta solo per dire che è un prodotto giovane. Cambia in fretta: i nomi dei bottoni che leggi qui sono indicativi.",
    },
  },

  vsCursor: {
    intro:
      "Nessun documento ufficiale li mette a confronto. Quello che segue è ricostruito da ciò che ognuno dei due dichiara di sé.",
    table: {
      head: ["", "Cursor", "Grok Bot"],
      rows: [
        [
          "L’unità di lavoro",
          "Una conversazione in un progetto, che finisce",
          "Un agent con un nome e un mestiere, che resta",
        ],
        [
          "Dove gira",
          "Il tuo computer, o una macchina legata al repository",
          "Una macchina Linux nel cloud, una per persona, sempre accesa",
        ],
        [
          "Cosa tocca",
          "File, terminale, git, il tuo codice",
          "Browser con i tuoi accessi, file, servizi collegati",
        ],
        [
          "Cosa ti restituisce",
          "Modifiche al codice, diff, pull request",
          "Il lavoro fatto dentro lo strumento vero, o una bozza da approvare",
        ],
        ["Il modello", "Lo scegli tu", "Fisso, deciso dal prodotto"],
        [
          "Per chi è",
          "Chi scrive codice",
          "Chiunque abbia lavoro ripetitivo: vendite, operazioni, ricerca",
        ],
        [
          "Tornare indietro",
          "Checkpoint e git",
          "Non si torna indietro: l’approvazione blocca prima, non annulla dopo",
        ],
      ],
    },
    connections: {
      title: "Dove i due si toccano",
      items: [
        {
          title: "Stesso account",
          text: "Grok Bot usa il tuo account Cursor. Non esiste un login separato.",
        },
        {
          title: "Stesso contatore",
          text: "Il consumo è misurato sull’account Cursor: le fatture uniscono le due voci.",
        },
        {
          title: "Stessi plugin e stesse regole",
          text: "Segue la politica su plugin e MCP del team Cursor.",
        },
        {
          title: "Può passare il lavoro a Cursor",
          text: "Un agent può avviare i Cloud Agents di Cursor. È attivo per default.",
        },
      ],
    },
  },

  primoAvvio: {
    requirements: {
      title: "Prima di iniziare",
      items: [
        "Un piano Cursor a pagamento, oppure un abbonamento SuperGrok individuale da collegare.",
        "L’app desktop per macOS o Windows. Su telefono solo iPhone, con iOS 18 o successivo.",
        "Un account Cursor che non sia in Legacy Privacy Mode: quella modalità blocca Grok Bot del tutto.",
      ],
    },
    platforms: {
      head: ["Piattaforma", "Supportata"],
      rows: [
        ["macOS (Apple silicon e Intel)", "Sì"],
        ["Windows (x64 e Arm64)", "Sì"],
        ["iPhone, iOS 18 o successivo", "Sì"],
        ["Linux come computer tuo", "No"],
        ["Android e iPad", "No"],
        ["Versione web", "Non esiste"],
      ],
      note: "Curiosità: il computer dell’agent gira su Linux, ma l’app per te no.",
    },
    procedure: {
      goal: "Installare e creare il primo agent",
      before: ["Un piano che include Grok Bot", "Il tuo account Cursor"],
      time: "Circa 10 minuti",
      steps: [
        {
          do: "Apri cursor.com/bot/onboarding e scarica la versione per il tuo computer.",
          see: "Su Mac scegli fra Apple silicon e Intel; su Windows fra x64 e Arm64.",
        },
        {
          do: "Installa l’app e aprila.",
          see: "Compare una schermata di benvenuto con il bottone per iniziare.",
        },
        {
          do: "Accedi con l’account Cursor che deve possedere il piano e il consumo.",
          see: "L’autenticazione si completa nel browser, poi torni nell’app e vedi il tuo account nelle impostazioni.",
        },
        {
          do: "Crea il primo agent: dagli un nome corto, un mestiere e una descrizione.",
          see: "Si apre una conversazione dedicata a quell’agent.",
        },
        {
          do: "Affidagli un primo lavoro che non richieda accessi: per esempio riassumere un documento che gli allegheghi.",
          see: "Risponde con il risultato nella conversazione, e vedi le azioni che ha compiuto.",
        },
      ],
      done: "Hai un agent che esiste, ha un mestiere e ha portato a termine un primo lavoro.",
      ifStuck: [
        {
          symptom: "L’accesso non si completa.",
          fix: "Tieni l’app aperta mentre l’autenticazione gira nel browser, e controlla che il browser confermi l’accesso. Se l’app non torna in primo piano, riportala tu.",
        },
        {
          symptom: "Un errore parla di Legacy Privacy Mode.",
          fix: "Quella modalità impedisce a Grok Bot di funzionare, perché il prodotto richiede archiviazione nel cloud. Cambia impostazione dalla privacy dell’account Cursor, o chiedi a chi amministra il team.",
        },
        {
          symptom: "Resto sulla schermata dei piani anche dopo aver collegato SuperGrok.",
          fix: "Controlla di essere entrato con lo stesso account Cursor su cui hai fatto il collegamento. Dopo un collegamento riuscito possono servire fino a 24 ore perché il consumo si aggiorni.",
        },
      ],
    },
    naming: {
      title: "Come si scrive un mestiere che funziona",
      text: "Un mestiere ristretto funziona meglio di uno generico. «Gestione spese» o «Riproduzione bug» danno una direzione; «Assistente generico» no.",
      distinction: {
        title: "Descrizione o messaggio?",
        text: "Nella descrizione vanno i limiti permanenti: «non mandare mai messaggi esterni senza approvazione». Nel messaggio va il compito di oggi.",
      },
      example:
        "Nome: Piper\nMestiere: Performance di prodotto\nDescrizione: Indaga le domande sulle prestazioni usando i nostri strumenti di osservabilità. Conserva link e screenshot, separa le prove dalle ipotesi, e restituisci un riassunto breve con il problema di maggior impatto per primo. Non modificare mai le impostazioni di produzione.",
    },
    useCases: {
      title: "Cosa ci fa la gente",
      intro: "Quattro ruoli che xAI documenta. Ogni esempio ufficiale finisce con un divieto.",
      items: [
        {
          title: "Vendite in uscita",
          text: "Ricerca i clienti, dà una priorità ai contatti e prepara i messaggi. Senza inviarli.",
        },
        {
          title: "Ricerca di personale",
          text: "Trova candidati, verifica i requisiti, scrive i primi messaggi. Senza contattare nessuno.",
        },
        {
          title: "Gestione spese",
          text: "Riconcilia le spese, abbina le ricevute, segnala quello che manca.",
        },
        {
          title: "Riproduzione bug",
          text: "Trasforma una segnalazione in passaggi riproducibili, in un ambiente di prova.",
        },
      ],
      pattern: {
        title: "Come iniziare",
        text: "Parti da lettura e preparazione, controlla il risultato, e solo dopo aggiungi le azioni approvate o una routine.",
      },
    },
    stop: {
      title: "Puoi fermarti qui",
      text: "Se volevi capire cos’è e vedere un agent all’opera, ci sei. Il livello 2 serve quando vuoi collegarlo ai tuoi strumenti: lì entrano i piani, il computer nel cloud e le regole di sicurezza.",
      continueLabel: "Vai al livello 2",
      leaveLabel: "Torna indietro",
    },
  },

  // ── LEVEL 2 ──────────────────────────────────────────────────────────────
  piani: {
    intro:
      "Le fonti ufficiali non concordano. Cursor scrive che è incluso in ogni piano individuale a pagamento, Pro compreso; xAI indica Pro+; al lancio erano ammessi solo Ultra, SuperGrok Heavy e Teams Premium. L’accesso si è già allargato due volte.",
    certain: {
      title: "Quello che è certo",
      items: [
        "Il piano gratuito Hobby non include Grok Bot.",
        "I piani Cursor a pagamento e i posti Teams lo includono, senza un abbonamento separato.",
        "Più alto è il piano, più consumo settimanale hai. Non esiste un numero pubblicato.",
      ],
    },
    trial: {
      title: "La prova gratuita non è «sette giorni gratis»",
      text: "È un credito di consumo, con una finestra di sette giorni. Si brucia in base a quanto lavorano gli agent, non al numero di messaggi: un lavoro grosso può finirlo in una volta, e non viene ripristinato.",
      advice:
        "Inizia con compiti piccoli e controlla il consumo sulla schermata del piano prima di lanciare lavori lunghi.",
    },
    superGrok: {
      title: "Collegare un abbonamento SuperGrok",
      intro:
        "Se hai già SuperGrok, SuperGrok Plus o SuperGrok Heavy come persona singola, puoi collegarlo per avere consumo. Due cose sono irreversibili.",
      warnings: [
        "Il collegamento è permanente: non si può sciogliere né spostare. Se sbagli account serve assistenza.",
        "Non cambia il tuo piano Cursor: è solo un’assegnazione di consumo.",
        "Il bottone «Link Grok Account» sta solo sulla schermata dei piani, prima di accedere. Se sei già dentro, chiudi del tutto Grok Bot e riaprilo.",
        "SuperGrok Lite, Team ed Enterprise non sono ammessi.",
      ],
      heavy: "SuperGrok Heavy non aggiunge funzioni: dà solo più consumo.",
    },
    usage: {
      title: "Quanto consumo hai",
      items: [
        "Il consumo incluso si azzera ogni settimana. Poi si passa alla spesa a consumo dell’account, se l’hai attivata.",
        "Desktop e iPhone attingono allo stesso serbatoio.",
        "Se hai sia un piano Cursor sia SuperGrok collegato, viene usato quello con più consumo disponibile.",
      ],
    },
    mobile: {
      title: "Sul telefono",
      text: "Se l’account Cursor già include Grok Bot, entra con quello: non comprare un secondo abbonamento. Dall’app iOS si acquistano solo piani mensili individuali; SuperGrok si collega da computer.",
    },
  },

  computer: {
    intro:
      "È la parte che rende Grok Bot diverso, e anche quella dove si fanno più danni per disattenzione.",
    definition:
      "Lavora da un computer nel cloud che resta acceso. Usa browser, file e strumenti collegati senza che il tuo portatile resti aperto.",
    facts: [
      {
        title: "È una macchina Linux vera",
        text: "Una macchina virtuale dedicata a te, con browser, file e terminale. L’agent gira come utente non privilegiato.",
        icon: "terminal" as const,
      },
      {
        title: "Uno per persona, non uno per agent",
        text: "Tutti i tuoi agent condividono lo stesso computer. File, sessioni e accessi sono a disposizione di tutti.",
        icon: "users" as const,
      },
      {
        title: "Puoi guardarlo lavorare",
        text: "Da una conversazione apri Agent Computer e vedi il desktop. Puoi chiudere la finestra: il lavoro continua.",
        icon: "laptop" as const,
      },
      {
        title: "I file durevoli stanno in /workspace",
        text: "Lì vanno i file che devono sopravvivere. Il resto va considerato sacrificabile.",
        icon: "book" as const,
      },
    ],
    boundary: {
      title: "La regola di sicurezza più importante di tutta la pagina",
      text: "Non usare agent diversi come confine di sicurezza. Un accesso fatto da un agent è usabile da tutti gli altri: il computer è uno solo, e appartiene a te.",
    },
    localComputer: {
      title: "Il tuo computer è un permesso a parte",
      text: "Il computer nel cloud è una cosa; il Mac o il PC che hai davanti un’altra. Un agent esegue comandi in locale solo se lo abiliti e approvi. Il valore predefinito è chiedere ogni volta.",
    },
    recovery: {
      title: "Aggiorna, Recupera, Reimposta: non sono la stessa cosa",
      intro: "Tre bottoni diversi sul computer dell’agent. Solo uno perde dati.",
      table: {
        head: ["Azione", "Cosa fa", "Perde dati?"],
        rows: [
          [
            "Update Agent Computer",
            "Ricostruisce con l’immagine più recente, conservando lo stato durevole",
            "No",
          ],
          [
            "Recover Agent Computer",
            "Sostituisce un computer irraggiungibile, conservando lo stato durevole",
            "No",
          ],
          [
            "Reset Agent Computer",
            "Torna all’ultima istantanea durevole e può scartare il lavoro recente non salvato",
            "Sì",
          ],
        ],
      },
      order:
        "L’ordine ufficiale, dal meno distruttivo: riprova, riavvia l’app, Recover, Update, aspetta, e solo alla fine Reset. Se sta ancora partendo, aspetta: ripetere Reset può interrompere il recupero.",
      survives:
        "Sopravvivono comunque le conversazioni (stanno fuori dal computer) e i file sincronizzati. Quello che sta solo sul tuo computer locale non è coperto.",
      mobile: "Da telefono non si aggiorna né si reimposta il computer: serve il desktop.",
    },
    plugins: {
      title: "Plugin: collegare i tuoi strumenti",
      intro:
        "I plugin danno agli agent un modo strutturato di lavorare con i servizi che usi. xAI li chiama connettori: è la stessa cosa.",
      procedure: {
        goal: "Collegare un plugin",
        time: "2 minuti",
        steps: [
          {
            do: "In Grok Bot apri Plugins dalla barra laterale, oppure segui la scheda Connect che compare nella conversazione quando serve.",
            see: "Su telefono: tocca il tuo avatar in alto a sinistra e scegli Plugins.",
          },
          {
            do: "Cerca il plugin e aggiungilo.",
            see: "Compare la richiesta di autorizzare.",
          },
          {
            do: "Completa l’accesso al servizio nel browser.",
            see: "Se resta su «Waiting for authorization», usa Reopen per far tornare la scheda del browser.",
          },
          {
            do: "Controlla che il plugin sia sotto Installed.",
            see: "Da lì in poi lo richiami in chat scrivendo @.",
          },
        ],
        done: "Il plugin è collegato all’account, quindi disponibile a tutti i tuoi agent.",
        ifStuck: [
          {
            symptom: "Leggo «Disabled by team admin».",
            fix: "In un team Cursor è chi amministra a decidere quali plugin sono disponibili. Chiedi di abilitarlo, e se il team usa una lista di server MCP consentiti, di aggiungere l’indirizzo del plugin.",
          },
          {
            symptom: "L’autorizzazione va a buon fine ma resta scollegato.",
            fix: "Rimuovi il plugin e ricollegalo. Se l’autorizzazione era stata revocata nel servizio di origine, va rifatta da zero.",
          },
        ],
      },
      advice:
        "Quando esiste un plugin, usa il plugin: è più affidabile che far cliccare l’agent su un sito. Il browser serve per i servizi senza plugin.",
      browser: {
        title: "Quando ti passa il volante",
        text: "Per i siti senza plugin l’agent usa il browser sul suo computer. Le password le metti tu: prendi il controllo, fai l’accesso, restituisci il volante. L’agent non vede la password. L’accesso resta disponibile anche agli altri tuoi agent.",
      },
    },
  },

  sicurezza: {
    intro:
      "Gli agent agiscono su account veri, file veri e sul web. Quattro regole da applicare da subito.",
    rules: [
      {
        title: "Le credenziali non si scrivono in chat",
        text: "Mai incollare chiavi o password in chat o in file normali. Per le connessioni supportate l’agent mostra una scheda sicura: il valore non viene mostrato al modello.",
        icon: "shield" as const,
      },
      {
        title: "Approvare non è annullare",
        text: "L’approvazione blocca prima, non annulla dopo. «Stop now» ferma, non torna indietro. Non esiste un tasto annulla.",
        icon: "alert" as const,
      },
      {
        title: "Non approvare quello che non capisci",
        text: "La scheda mostra l’azione e i suoi parametri. Se non capisci cosa farebbe, chiedi una spiegazione o una bozza prima.",
        icon: "book" as const,
      },
      {
        title: "I limiti vanno nella descrizione",
        text: "Un divieto nella descrizione vale sempre; in un messaggio vale per quel messaggio. Tieni dietro approvazione invii, acquisti, cancellazioni e modifiche in produzione.",
        icon: "code" as const,
      },
    ],
    autoReview: {
      title: "Auto Review",
      text: "Nelle impostazioni puoi scrivere regole in italiano: «richiedi approvazione prima di inviare qualsiasi email esterna». Se una regola di richiesta e una di permesso si sovrappongono, vince quella che chiede approvazione.",
    },
    sharing: {
      title: "Condividere un agent",
      text: "Il link è pubblico: copia identità, descrizione, skill e routine, non il computer né gli accessi. Prima di condividere togli chiavi e dati dei clienti.",
    },
    cleanup: {
      title: "Quando un progetto finisce",
      intro: "Cancellare un agent non pulisce il computer. Questo è l’ordine.",
      steps: [
        "Metti in pausa o cancella le routine collegate.",
        "Esci dai siti sul computer condiviso.",
        "Disinstalla i plugin e revoca l’autorizzazione nel servizio di origine.",
        "Togli i file sensibili da /workspace.",
        "Nascondi o cancella gli agent che non servono più.",
      ],
      warning:
        "Cancellare un agent non toglie i file dal computer condiviso né le sessioni del browser. Nasconderlo non mette in pausa le sue routine.",
    },
    privacy: {
      title: "Privacy",
      text: "Legacy Privacy Mode blocca Grok Bot del tutto. Le modalità standard funzionano. In un team vale l’impostazione del team.",
    },
    stop: {
      title: "Puoi fermarti anche qui",
      text: "Con quello che hai letto puoi far lavorare un agent su cose vere senza fare danni. Il livello 3 serve se vuoi che il lavoro si ripeta da solo, o che più agent collaborino.",
      continueLabel: "Vai al livello 3",
      leaveLabel: "Torna indietro",
    },
  },

  // ── LEVEL 3 ──────────────────────────────────────────────────────────────
  automazione: {
    intro: "Due mattoni che la documentazione tiene separati, e che il marketing tende a confondere.",
    concepts: [
      {
        term: "Skill",
        text: "Istruzioni riutilizzabili su come si fa una cosa. Vale su tutti i tuoi agent. Si richiama scrivendo /.",
      },
      {
        term: "Routine",
        text: "Dice a un agent quando eseguire un lavoro: su un orario, o dopo un evento. Appartiene a un agent solo.",
      },
    ],
    order: {
      title: "L’ordine giusto, e non è negoziabile",
      text: "Parti da un compito singolo. Rendilo affidabile, salvalo come skill, e solo allora automatizzalo.",
      steps: [
        "Metti mestiere, fonti, formato del risultato e limiti permanenti nella descrizione dell’agent.",
        "Fai girare un lavoro vero con una portata sicura.",
        "Correggi il risultato finché è rivedibile.",
        "Salva il procedimento riuscito come skill.",
        "Provala su un secondo caso.",
        "Crea la routine solo quando hai definito i tentativi e i casi di errore.",
        "Tieni dietro approvazione tutto ciò che ha conseguenze fuori.",
      ],
    },
    creating: {
      title: "Come si crea una routine",
      text: "Non da un modulo: lo chiedi a parole all’agent che deve possederla. Confermi chi la possiede, orario e fuso, la fonte, il risultato, il confine di approvazione, e cosa fare se una fonte manca.",
      example:
        "Ogni giorno lavorativo alle 8:00, esegui la skill di analisi del rischio clienti sulla lista account corrente. Pubblica in questa conversazione una lista di attenzione con i link. Non contattare i clienti. Se i dati di origine non sono disponibili, segnala l’errore invece di usare dati vecchi.",
      triggers: [
        "Su orario, ricorrente. Il fuso orario è quello impostato nelle impostazioni dell’agent: è la causa più banale di routine che partono all’ora sbagliata.",
        "A richiesta, quando vuoi rilanciarla a mano.",
        "Su evento, dove supportato: un messaggio Slack o una notifica GitHub. Attenzione, queste integrazioni sono separate dai plugin Slack e GitHub e possono richiedere un collegamento a parte.",
      ],
      warning:
        "Evita ascoltatori larghi tipo «ogni nuovo messaggio»: fanno rumore, consumano e aumentano la probabilità di agire su input irrilevanti.",
    },
    testRun: {
      title: "«Test run» non è una prova a vuoto",
      text: "Una prova esegue lavoro vero: può navigare siti, modificare file e chiamare gli strumenti. Usa input sicuri e tieni le scritture dietro approvazione.",
    },
    teach: {
      title: "Insegnare guardando",
      text: "Apri la vista del computer, scegli «Teach a task», fai il lavoro una volta e ferma la registrazione: l’agent ne ricava una skill. Fino a dieci minuti, senza audio, senza mostrargli segreti. Il risultato è una bozza: i limiti li aggiungi tu.",
      note: "Se non la vedi, chiedi all’agent di creare la skill da istruzioni scritte.",
    },
    multi: {
      title: "Più agent che lavorano insieme",
      items: [
        {
          title: "Chat di gruppo",
          text: "Da 2 a 6 agent nella stessa conversazione. Scrivi normalmente, oppure @ per assegnare a uno.",
        },
        {
          title: "Passaggi di consegna",
          text: "Un agent può mandare un messaggio a un altro. Il passaggio si vede nella conversazione.",
        },
        {
          title: "Un solo proprietario per fase",
          text: "Troppi passaggi in parallelo creano lavoro duplicato.",
        },
      ],
      example:
        "@Researcher raccogli il materiale e metti un link a ogni affermazione. @Writer trasforma i risultati in una bozza. @Reviewer controlla la bozza contro le fonti ed elenca solo i problemi bloccanti. Non pubblicare niente.",
    },
    limits: {
      title: "I limiti veri",
      head: ["Cosa", "Limite"],
      rows: [
        ["Agent e chat di gruppo su un account", "50 in totale"],
        ["Routine per agent", "50"],
        ["Storico delle esecuzioni per routine", "Le 20 più recenti"],
        ["Agent in una chat di gruppo", "Da 2 a 6"],
        ["Registrazione di una dimostrazione", "Fino a 10 minuti"],
      ],
      notes: [
        "Cancellare una routine è immediato e non si annulla. Cancellare un agent cancella anche le sue routine.",
        "Duplicare un agent copia profilo, skill e routine, non la cronologia. Il duplicato può partire subito: rinominalo prima.",
        "Se resti via a lungo, Grok Bot può mettere in pausa le routine se non rispondi.",
      ],
    },
    mobileLimits: {
      title: "Cosa non si fa da telefono",
      text: "L’app iPhone non aggiorna il computer, non modifica le routine, non fa prove e non ha l’insegnamento per dimostrazione. Può metterle in pausa. In compenso è l’unico posto dove si creano le sezioni della barra laterale (dalla 1.2.0).",
    },
  },

  help: {
    title: "Se qualcosa non funziona",
    first:
      "La documentazione dice che la maggior parte dei problemi si risolve chiudendo del tutto Grok Bot e riaprendolo. Su Mac significa Esci dal menu in alto, non solo chiudere la finestra.",
    table: {
      head: ["Sintomo", "Cosa provare"],
      rows: [
        [
          "Il computer è bloccato in aggiornamento",
          "Aggiorna l’app, chiudi e riapri, poi riapri il computer dell’agent e dagli tempo. Reset solo come ultima cosa.",
        ],
        [
          "Una routine non parte",
          "Controlla che sia attiva e che orario e fuso siano giusti. Se è attiva e non gira da più di 24 ore senza errori, segnala il problema.",
        ],
        [
          "Errore o crash durante un lavoro",
          "Annota il testo esatto dell’errore e l’identificativo della richiesta, poi riprova.",
        ],
        [
          "Un plugin non si autorizza",
          "Rimettilo e completa l’accesso nel browser. Se resta in attesa, usa Reopen.",
        ],
        [
          "Un agent sembra bloccato",
          "Apri il computer: spesso è in attesa di una pagina, di un accesso, di un CAPTCHA o di un’approvazione.",
        ],
        [
          "Un sito chiede sempre di accedere",
          "Prendi il controllo, accedi tu, completa la verifica e assicurati che la pagina sia caricata prima di restituire il controllo.",
        ],
      ],
    },
    support: {
      title: "Quando scrivi all’assistenza",
      email: "hi@cursor.com",
      items: [
        "L’email del tuo account Cursor",
        "Piattaforma e versione di Grok Bot",
        "Il nome dell’agent o della routine",
        "Il testo esatto dell’errore, o uno screenshot",
        "Ora approssimativa e fuso orario",
        "L’identificativo della richiesta, se l’app te lo mostra",
        "Cosa hai già provato",
      ],
      warning:
        "Non includere password, codici usa e getta, chiavi private o valori segreti.",
    },
  },
} as const;
