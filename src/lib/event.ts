export const event = {
  title: "Cafe Cursor Pescara",
  subtitle:
    "Primo Cafe Cursor in città. Un pomeriggio per costruire con Cursor, scambiare idee e uscire con qualcosa da provare il giorno dopo.",
  lumaUrl: "https://luma.com/cursor-pescara-01",
  cursorUrl: "https://cursor.com",
  docsUrl: "https://cursor.com/docs",
  telegramUrl: "https://t.me/cursor_italia",
  creditsPath: "/crediti",
  cursorPath: "/cursor",
  explainer: {
    kicker: "Non sai cos’è Cursor?",
    title: "Abbiamo scritto una guida da zero",
    text: "Parte da cosa è l’intelligenza artificiale e arriva a come si usa Cursor, passo per passo. Sei livelli: puoi fermarti dove ti basta. Non serve saper programmare, e non serve leggerla tutta.",
    points: [
      "Cos’è l’AI, spiegata senza paroloni",
      "Perché Cursor e non ChatGPT",
      "Come si installa e il primo utilizzo",
    ],
    cta: "Apri la guida",
  },
  details: [
    { label: "Quando", value: "Sabato 29 agosto 2026", icon: "calendar" as const },
    { label: "Orario", value: "16:00 – 20:00", icon: "clock" as const },
    {
      label: "Dove",
      value: "Riky Rock Bar, Via Fernando Francesco d’Avalos 60, Pescara",
      icon: "map" as const,
      href: "https://www.google.com/maps/search/?api=1&query=Riky+Rock+Bar%2C+Via+Fernando+Francesco+d%27Avalos+60%2C+Pescara",
      linkLabel: "Maps",
    },
    { label: "Lingua", value: "Italiano (English ok)", icon: "language" as const },
    { label: "Iscrizione", value: "Obbligatoria su Luma", icon: "ticket" as const },
  ],
  formats: [
    {
      name: "Co-working",
      time: "16:00–20:00",
      description:
        "Welcome, crediti Cursor, build session, lightning demo e networking.",
      icon: "hammer" as const,
    },
    {
      name: "Drop-in",
      time: "~18:00–20:00",
      description: "Solo demo e networking. Non partecipi alla build session.",
      icon: "users" as const,
    },
  ],
  beforeYouCome: [
    {
      title: "Porta il laptop",
      text: "Non abbiamo computer da fornire.",
      icon: "laptop" as const,
    },
    {
      title: "Installa Cursor",
      text: "Account gratuito su cursor.com",
      href: "https://cursor.com",
      icon: "download" as const,
    },
    {
      title: "Curiosità basta",
      text: "Non serve essere developer.",
      icon: "spark" as const,
    },
  ],
  duringEvent: [
    {
      title: "Crediti sul momento",
      text: "Li distribuiamo al workshop da usare subito.",
      icon: "gift" as const,
    },
    {
      title: "Ti aiutiamo noi",
      text: "Prova qualcosa di semplice o parti dall’uso base.",
      icon: "chat" as const,
    },
  ],
  arriveNote: "Consigliamo di arrivare un po’ prima delle 16:00: alle 16 si inizia a buildare.",
} as const;

export const credits = {
  title: "Riscatta i tuoi crediti",
  lead: "I crediti sono soldi da spendere dentro Cursor: servono a far lavorare l’intelligenza artificiale. Al banco d’ingresso te ne diamo un po’, gratis, con un codice personale.",
  whatAreThey: {
    title: "Cosa stai per fare, in due righe",
    text: "Ti diamo un indirizzo internet (un link) o un quadratino da inquadrare con il telefono (un QR code). Quel link apre una pagina di Cursor con un bottone. Clicchi il bottone e i crediti finiscono sul tuo account. Fine.",
  },
  overview: [
    {
      title: "Prendi il codice",
      text: "Al banco d’ingresso ti diamo un link o un QR code. È solo tuo.",
    },
    {
      title: "Entra nel tuo account",
      text: "Su cursor.com, nello stesso browser che userai per aprire il link.",
    },
    {
      title: "Apri il link",
      text: "Si apre una pagina di Cursor con un bottone Redeem.",
    },
    {
      title: "Clicca Redeem",
      text: "“Redeem” in inglese vuol dire “riscatta”. È il bottone da premere.",
    },
    {
      title: "Controlla",
      text: "I crediti compaiono nella tua dashboard, alla voce Credits.",
    },
  ],
  steps: [
    {
      title: "Entra nel tuo account Cursor",
      action:
        "Apri il browser che usi di solito, vai su cursor.com e clicca Sign in in alto a destra.",
      see: "Al posto di Sign in compare la tua iniziale o la tua foto.",
      detail:
        "Questo passaggio va fatto prima, e nello stesso browser dove aprirai il link. È la causa numero uno dei problemi: se apri il link da un browser dove non hai fatto l’accesso, il riscatto non va a buon fine.",
    },
    {
      title: "Apri il tuo link personale",
      action:
        "Incolla il link nella barra degli indirizzi, nella stessa finestra. Se hai un QR code, inquadralo con la fotocamera del telefono.",
      see: "Si apre una pagina di Cursor che parla di crediti, con un bottone.",
      detail:
        "Finché non clicchi il bottone, il link resta valido: puoi richiuderlo e riaprirlo, anche da un altro browser. Quello che conta è che l’account sia quello giusto.",
    },
    {
      title: "Clicca Redeem",
      action:
        "«Redeem» in inglese vuol dire riscatta. È il bottone da premere.",
      see: "La pagina conferma che i crediti sono stati aggiunti al tuo account.",
      detail:
        "Da questo momento il link è consumato e non funziona più. Per questo è personale: se lo passi a qualcun altro, i crediti finiscono a lui.",
    },
    {
      title: "Controlla che ci siano",
      action:
        "Vai su cursor.com/dashboard e cerca la voce Credits.",
      see: "Vedi l’importo dei crediti sul tuo account.",
      detail:
        "Se non li vedi, ricarica la pagina forzando l’aggiornamento, oppure esci dall’account e rientra. Capita, e non vuol dire che il riscatto sia andato male.",
    },
    {
      title: "Ora la parte che sorprende tutti",
      action:
        "Riscattare aggiunge i crediti al tuo account, ma non li mette subito in uso: vengono applicati alla prossima fattura.",
      see: "In Dashboard → Credits li vedi come saldo disponibile.",
      detail:
        "Se sei su un piano gratuito continui a usare il gratuito fino a esaurirlo. Quando arrivi al limite, per usare i crediti devi avviare un piano Pro con un metodo di pagamento: serve come verifica, e se hai i crediti la carta non viene addebitata.",
    },
  ],

  stripe: {
    title: "Se i crediti non risultano applicati",
    intro:
      "È la situazione più comune, e la sequenza che funziona è questa. La carta serve solo come verifica: con i crediti a disposizione non viene addebitata.",
    steps: [
      "Riscatta il link dei crediti.",
      "Aggiungi una carta nella dashboard di Cursor: parte una prova gratuita di Pro di 7 giorni.",
      "Clicca «Start Pro Now»: i crediti vengono usati come pagamento e la carta non viene addebitata.",
    ],
  },

  commonErrors: {
    title: "Errori comuni",
    intro:
      "Sei situazioni che capitano davvero, con cosa fare. Nessuna è colpa tua.",
    items: [
      {
        symptom: "La pagina mi dice che devo fare l’accesso.",
        fix: "Stai aprendo il link in un browser dove non sei entrato. Vai su cursor.com in quella stessa finestra, fai l’accesso e riapri il link.",
      },
      {
        symptom: "Ho cliccato Redeem ma in dashboard non vedo niente.",
        fix: "Ricarica la pagina forzando l’aggiornamento. Se non basta, esci dall’account e rientra. Se ancora niente, prova ad aprire il pagamento su Stripe dalla dashboard e controlla se i crediti risultano lì.",
      },
      {
        symptom: "Mi chiede una carta di credito.",
        fix: "Serve come verifica, non come pagamento: Cursor la usa per sapere che sei una persona reale. Con i crediti disponibili non ti addebita niente.",
      },
      {
        symptom: "Il link dice che è già stato usato.",
        fix: "Ogni link funziona una volta sola. Vieni a cercarci: ti diamo una mano.",
      },
      {
        symptom: "Sono su un account aziendale o di gruppo.",
        fix: "I crediti funzionano solo sugli account personali (Free, Pro, Pro+, Ultra), non sui piani Team. Entra col tuo account personale e riprova.",
      },
      {
        symptom: "Ho i crediti ma una funzione non parte.",
        fix: "Alcune funzioni, come i Cloud Agents e la versione web, richiedono comunque un piano a pagamento attivo: i crediti da soli non li sbloccano.",
      },
    ],
  },
  notes: [
    {
      title: "Il link è solo tuo",
      text: "Funziona una volta sola. Se lo passi a qualcun altro, i crediti finiscono a lui.",
      icon: "alert" as const,
    },
    {
      title: "Stesso browser",
      text: "Devi essere entrato nel tuo account nella stessa finestra dove apri il link.",
      icon: "login" as const,
    },
    {
      title: "Hanno una scadenza",
      text: "I crediti valgono per un periodo limitato: la data la trovi nella dashboard. Usali finché ci siamo.",
      icon: "clock" as const,
    },
    {
      title: "Account personale",
      text: "Va bene qualsiasi piano personale. Non funziona sugli account di gruppo o aziendali.",
      icon: "shield" as const,
    },
    {
      title: "Vanno sulla prossima fattura",
      text: "Riscattarli li aggiunge al saldo. Vengono usati quando parte o si rinnova un abbonamento.",
      icon: "spark" as const,
    },
    {
      title: "Siamo lì",
      text: "Se ti blocchi, chiedi a noi: al banco d’ingresso è la cosa più veloce.",
      icon: "chat" as const,
    },
  ],
} as const;
