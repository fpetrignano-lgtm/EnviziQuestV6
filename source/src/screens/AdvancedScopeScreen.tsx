import React, { useState } from "react";
import type { Language, Profile, Screen } from "../types";
import type { CommonProps } from "./types";
import type { ScopePhase } from "./FunctionalScopeScreen";

export interface AdvancedScopeItem {
  id: string;
  num: number;
  title: string;
  titleEn: string;
  shortDesc: string;
  shortDescEn: string;
  clientNeed: string;
  clientNeedEn: string;
  extendedDesc: string;
  extendedDescEn: string;
  examples: string;
  examplesEn: string;
  benefits: string[];
  benefitsEn: string[];
  icon: string;
  defaultPhase: ScopePhase;
}

export const ADVANCED_SCOPE_ITEMS: AdvancedScopeItem[] = [
  {
    id: "scope3-supply-chain-intel",
    num: 1,
    title: "Gestione delle emissioni – Intelligence della supply chain Scope 3",
    titleEn: "Emissions Management – Scope 3 Supply Chain Intelligence",
    icon: "🔍",
    shortDesc: "Acquisizione, elaborazione e aggregazione di dati transazionali per fornitore e prodotto.",
    shortDescEn: "High-volume transactional data intake, processing and aggregation by supplier and product.",
    clientNeed: "«Abbiamo migliaia di fornitori e molti dati d'acquisto nell'ERP: vogliamo capire quali fornitori e prodotti pesano di più sulle emissioni e dove intervenire, senza analisi manuali.»",
    clientNeedEn: "«We have thousands of suppliers and extensive ERP procurement data: we want to understand which suppliers and items drive our emissions without manual analysis.»",
    extendedDesc: "Fornisce dashboard operativi, elaborazione automatica dei dati e motori di calcolo per acquisire e aggregare transazioni ad alto volume a livello di singolo fornitore e codice prodotto. Supporta metodi spend-based, quantità fisiche e integrazione di dati primari dei fornitori con ranking per intensità emissiva.",
    extendedDescEn: "Provides operational dashboards and emission engines to ingest high-volume transactions by supplier and product code, ranking emission hotspots and enabling primary data substitution.",
    examples: "Un produttore con 3.000 fornitori carica le fatture dell'anno: il sistema evidenzia che 40 fornitori generano il 65% delle emissioni dei beni acquistati, consentendo di ingaggiare prioritariamente tali fornitori.",
    examplesEn: "A manufacturer with 3,000 suppliers ingests annual invoices: analytics reveal 40 suppliers account for 65% of upstream Scope 3 emissions, prioritizing direct supplier engagement.",
    benefits: [
      "Priorità chiare: identificazione immediata di pochi fornitori che concentrano la maggior parte delle emissioni",
      "Stime Scope 3 molto più accurate rispetto ai soli fattori di spesa medi di settore",
      "Azioni di riduzione mirate e congiunte tra ufficio acquisti e fornitori strategici",
      "Azzeramento delle analisi manuali su fogli Excel ed estrazioni ERP"
    ],
    benefitsEn: [
      "Clear priorities: spotlighting key suppliers driving the bulk of value-chain emissions",
      "Significantly higher Scope 3 calculation accuracy compared to sector-average spend factors",
      "Targeted decarbonisation initiatives coordinated between Procurement and strategic suppliers",
      "Elimination of manual spreadsheet analyses on large ERP transaction tables"
    ],
    defaultPhase: "none"
  },
  {
    id: "supplier-engagement",
    num: 2,
    title: "Intelligence della supply chain Scope 3 – Coinvolgimento dei fornitori",
    titleEn: "Scope 3 Supply Chain – Supplier Engagement Portal & Surveys",
    icon: "🤝",
    shortDesc: "Dashboard di gestione, workflow e Portale fornitori per acquisire dati primari tramite questionari o caricamento file.",
    shortDescEn: "Supplier management dashboards, workflows and dedicated Supplier Portal for primary ESG data collection.",
    clientNeed: "«I nostri clienti e la normativa ci chiedono dati reali dalla filiera, ma raccoglierli con e-mail e fogli Excel è ingestibile.»",
    clientNeedEn: "«Customers and regulations demand primary data from our supply chain, but collecting it via emails and spreadsheets is unmanageable.»",
    extendedDesc: "Mette a disposizione dashboard di gestione fornitori, workflow di sollecito automatico e un Portale web sicuro in cui i fornitori compilano questionari o caricano l'impronta carbonica di prodotto (PCF), consumi energetici e quote di riciclato, sostituendo le stime con dati primari certificati.",
    extendedDescEn: "Provides supplier workflows and a secure web portal for suppliers to submit Product Carbon Footprints (PCF), energy metrics and recycled content, replacing estimates with primary data.",
    examples: "L'azienda invia richieste di PCF ai 200 fornitori principali: la piattaforma traccia l'avanzamento, invia solleciti automatici e importa i dati validati nel calcolo Scope 3.",
    examplesEn: "Sends structured PCF questionnaires to 200 priority suppliers: the platform manages automated reminders and feeds validated metrics into Scope 3 calculations.",
    benefits: [
      "Dati primari reali al posto delle stime per un calcolo Scope 3 certificabile",
      "Richieste strutturate e standardizzate su PCF, quote rinnovabili e contenuto riciclato",
      "Solleciti e monitoraggio dello stato di avanzamento delle risposte completamente automatici",
      "Maggiore trasparenza e collaborazione strategica con la filiera di fornitura"
    ],
    benefitsEn: [
      "Primary supplier data replacing sector estimates for auditable Scope 3 accounting",
      "Standardized data capture for PCF, renewable energy share and recycled content",
      "Automated response tracking, reminders and validation workflows",
      "Stronger collaborative engagement and ESG transparency across suppliers"
    ],
    defaultPhase: "none"
  },
  {
    id: "target-setting-tracking",
    num: 3,
    title: "Gestione delle emissioni – Impostazione e monitoraggio degli obiettivi",
    titleEn: "Emissions Management – Target Setting & Tracking",
    icon: "🎯",
    shortDesc: "Impostazione e monitoraggio di target quantitativi su consumi, emissioni, energia, costi e intensità.",
    shortDescEn: "Quantitative target setting and tracking for consumption, emissions, energy, costs and intensity metrics.",
    clientNeed: "«Dobbiamo fissare obiettivi di riduzione credibili e mostrare al management e agli stakeholder se siamo in linea con la traiettoria.»",
    clientNeedEn: "«We need to set credible reduction targets and demonstrate continuous progress against our roadmap to management and lenders.»",
    extendedDesc: "Permette di definire target di riduzione (assoluti o di intensità per m² o unità prodotta), con anno base, traiettorie intermedie e scadenze Net Zero, calcolando in tempo reale lo scostamento tra andamento effettivo e traiettoria prevista per ciascuna sede.",
    extendedDescEn: "Configures absolute and intensity-based reduction targets against baseline years, tracking real-time variances across sites and business units.",
    examples: "Obiettivo del -30% di Scope 1 e 2 al 2030 rispetto al 2022: la dashboard mostra per ogni stabilimento se è in anticipo, in linea o in ritardo rispetto alla curva di riduzione programmata.",
    examplesEn: "30% Scope 1 & 2 reduction target by 2030 vs 2022 baseline: dashboard shows per-facility performance against planned trajectory curves.",
    benefits: [
      "Obiettivi chiari, misurabili e condivisi tra direzione e singoli stabilimenti",
      "Individuazione precoce degli scostamenti negativi quando è ancora possibile intervenire",
      "Rendicontazione solida e credibile verso revisori, banche e investitori",
      "Responsabilità e KPI di decarbonizzazione chiaramente assegnati per sede e funzione"
    ],
    benefitsEn: [
      "Clear, measurable targets shared across corporate and facility managers",
      "Early variance detection enabling proactive corrective actions",
      "Credible progress reporting for stakeholders, auditors and lenders",
      "Accountability assigned per site and operational function"
    ],
    defaultPhase: "none"
  },
  {
    id: "building-benchmarks",
    num: 4,
    title: "Reporting ESG – Benchmark e valutazioni immobiliari (ENERGY STAR, GRESB)",
    titleEn: "ESG Reporting – Building Benchmark & Ratings (ENERGY STAR, GRESB)",
    icon: "🏢",
    shortDesc: "Benchmark e reporting per ENERGY STAR, GRESB e valutazioni indicative NABERS per patrimoni immobiliari.",
    shortDescEn: "Benchmarking and reporting for ENERGY STAR, GRESB and indicative NABERS ratings across real estate assets.",
    clientNeed: "«Dobbiamo confrontare le prestazioni dei nostri immobili con benchmark riconosciuti e compilare le sottomissioni richieste da investitori e certificazioni.»",
    clientNeedEn: "«We must benchmark our property portfolio against recognised sector indices and streamline GRESB and ENERGY STAR submissions.»",
    extendedDesc: "Consente di confrontare le prestazioni energetiche e ambientali del proprio patrimonio immobiliare con parametri di riferimento riconosciuti (ENERGY STAR, GRESB, NABERS), predisponendo automaticamente i dati per le sottomissioni periodiche.",
    extendedDescEn: "Benchmarks real estate environmental metrics against international standards (ENERGY STAR, GRESB, NABERS) and automates annual rating submissions.",
    examples: "Una società con 25 edifici confronta l'intensità energetica di ciascuno con la media di mercato, individua gli immobili meno performanti e genera i file per la submission GRESB.",
    examplesEn: "A property company with 25 buildings benchmarks energy intensity against market standards, identifies poor performers and prepares GRESB disclosures.",
    benefits: [
      "Individuazione immediata degli edifici meno efficienti su cui concentrare gli investimenti",
      "Preparazione rapida e automatizzata delle sottomissioni GRESB ed ENERGY STAR",
      "Confronto oggettivo e certificabile con benchmark di settore riconosciuti",
      "Maggiore attrattività e valorizzazione degli immobili verso investitori e conduttori"
    ],
    benefitsEn: [
      "Immediate identification of underperforming assets for CapEx prioritization",
      "Faster and automated GRESB and ENERGY STAR disclosure preparation",
      "Objective comparisons against recognized real estate indices",
      "Enhanced asset value and tenant/investor attraction"
    ],
    defaultPhase: "none"
  },
  {
    id: "surveys-assessments",
    num: 5,
    title: "Reporting ESG – Sondaggi e questionari interni (Surveys & Assessments)",
    titleEn: "ESG Reporting – Internal Surveys & Assessments",
    icon: "📝",
    shortDesc: "Questionari personalizzabili per raccogliere dati qualitativi e quantitativi da dipendenti, sedi e funzioni interne.",
    shortDescEn: "Customizable surveys and assessment workflows to gather ESG metrics and narrative data from internal teams.",
    clientNeed: "«Molti dati ESG non sono nei gestionali (rifiuti, formazione, infortuni, acqua, policy) e dobbiamo chiederli alle sedi in modo ordinato e verificabile.»",
    clientNeedEn: "«Many ESG data points (waste, safety, training, water, governance) exist only on local spreadsheets: we need an auditable collection workflow.»",
    extendedDesc: "Modulo per la raccolta di metriche ESG quantitative (consumi idrici, tonnellate rifiuti, infortuni) e qualitative (politiche del lavoro, parità di genere, codici di condotta) da stakeholder interni e responsabili di sito, allineate a framework come GRI, SASB e CDP.",
    extendedDescEn: "Collects quantitative non-energy metrics (waste, water, health & safety) and qualitative governance responses from internal departments aligned with GRI, SASB and CDP.",
    examples: "Il team ESG invia ai direttori di 30 stabilimenti il questionario annuale su rifiuti, ore di formazione e sicurezza; le risposte validate confluiscono nel bilancio di sostenibilità.",
    examplesEn: "ESG sends annual questionnaires to 30 plant directors on waste, safety and training: validated responses populate the sustainability report automatically.",
    benefits: [
      "Dati non contabili raccolti in modo strutturato, tracciato e auditabile",
      "Eliminazione di scambi infiniti di e-mail e consolidamenti manuali di fogli Excel",
      "Solleciti e notifiche di scadenza automatici per i compilatori interni",
      "Risposte già mappate e aggregate sui capitoli del report di sostenibilità"
    ],
    benefitsEn: [
      "Structured, traceable data collection for non-financial ESG metrics",
      "Elimination of endless email chains and fragmented spreadsheet chasing",
      "Automated notifications, reminders and deadline tracking for contributors",
      "Responses natively mapped and aggregated into disclosure frameworks"
    ],
    defaultPhase: "none"
  },
  {
    id: "sustainability-program-tracking",
    num: 6,
    title: "Decarbonizzazione – Monitoraggio programmi di sostenibilità (Program Tracking)",
    titleEn: "Decarbonization – Sustainability Program & Project Tracking",
    icon: "📉",
    shortDesc: "Monitoraggio e rendicontazione di progetti di efficienza energetica, fonti rinnovabili e riduzione impatti.",
    shortDescEn: "Tracking and reporting of energy efficiency initiatives, renewables CapEx and abatement projects.",
    clientNeed: "«Abbiamo molti progetti di efficienza e decarbonizzazione, ma non sappiamo se stanno producendo i risparmi promessi a budget.»",
    clientNeedEn: "«We have multiple efficiency and renewable CapEx projects, but cannot verify whether they deliver the promised ROI and CO₂e savings.»",
    extendedDesc: "Gestisce le iniziative di miglioramento come programmi strutturati con responsabile, budget CapEx/OpEx, stato di avanzamento, risparmi attesi e misurazione a consuntivo del risparmio energetico ed emissivo effettivamente conseguito.",
    extendedDescEn: "Manages sustainability initiatives as structured programs with owners, CapEx/OpEx budgets, milestones, expected savings and post-intervention M&V savings verification.",
    examples: "Progetto relamping LED in 10 siti con risparmio stimato di 800 MWh/anno: dopo l'installazione la piattaforma confronta i consumi reali con la baseline ante-intervento e calcola il ROI effettivo.",
    examplesEn: "LED relamping project across 10 plants: post-installation, Envizi benchmarks actuals against baseline to verify payback and CO₂e abatement.",
    benefits: [
      "Visibilità trasparente sul ritorno economico ed emissivo degli investimenti ESG",
      "Verifica analitica dei risparmi reali rispetto a quelli promessi a budget",
      "Prioritizzazione basata su dati oggettivi dei progetti a più alto rendimento",
      "Stato di avanzamento e milestone sempre aggiornati e condivisibili col CdA"
    ],
    benefitsEn: [
      "Full visibility into financial ROI and avoided carbon emissions across CapEx projects",
      "Measurement and verification (M&V) of actual vs projected savings",
      "Data-driven prioritization of high-impact decarbonisation initiatives",
      "Executive dashboard reporting milestones, spend and results to the Board"
    ],
    defaultPhase: "none"
  },
  {
    id: "bill-analytics",
    num: 7,
    title: "Decarbonizzazione – Analytics delle bollette e gestione tariffaria",
    titleEn: "Decarbonization – Bill Analytics & Tariff Optimization",
    icon: "🧾",
    shortDesc: "Analisi di costi, consumi, anomalie di fatturazione, penali reattive e opportunità di ottimizzazione tariffaria.",
    shortDescEn: "Detailed utility bill auditing, tariff analysis, billing error detection and cost recovery.",
    clientNeed: "«Riceviamo centinaia di bollette energetiche controllate a mano o per niente: vogliamo individuare errori, picchi e recuperare costi.»",
    clientNeedEn: "«We receive hundreds of utility invoices checked manually or not at all: we want to catch billing errors, peak penalties and recover costs.»",
    extendedDesc: "Acquisisce e disaggrega le bollette di energia, gas e acqua, verificando la correttezza delle componenti tariffarie, penali per reattiva e picchi di potenza, alimentando al contempo i calcoli di emissioni Scope 1 e 2.",
    extendedDescEn: "Ingests and validates power, gas and water bills, auditing tariff components, power factor penalties and peak demands, while feeding Scope 1 & 2 GHG calculations.",
    examples: "Il sistema rileva che una fattura elettrica presenta un addebito anomalo per penale reattiva del 25%: l'energy manager contesta la fattura al fornitore e recupera la differenza.",
    examplesEn: "Flags a 25% unexpected penalty on power factor in a factory bill: energy management challenges the utility and secures a refund.",
    benefits: [
      "Errori di fatturazione e penali individuati tempestivamente con recupero dei costi",
      "Riduzione della spesa energetica grazie all'analisi comparata delle tariffe",
      "Drastica riduzione dei tempi di controllo manuale delle fatture",
      "Dati contabili già pronti e riconciliati per la contabilità Scope 1 e 2"
    ],
    benefitsEn: [
      "Prompt billing error and penalty detection leading to direct cost recovery",
      "Energy spend reduction through systematic tariff comparison and anomaly flagging",
      "Drastic reduction in manual invoice auditing workload",
      "Financial data seamlessly connected to Scope 1 & 2 carbon accounting"
    ],
    defaultPhase: "none"
  },
  {
    id: "interval-meter-analytics",
    num: 8,
    title: "Decarbonizzazione – Analisi dati contatori a intervalli (Smart Metering)",
    titleEn: "Decarbonization – Interval Meter Analytics (Smart Metering)",
    icon: "⏱️",
    shortDesc: "Acquisizione e analisi di dati ad alta frequenza (15-60 min) per profili di carico e individuazione sprechi notturni.",
    shortDescEn: "High-frequency sub-meter data ingestion (15-60 min intervals) for load profile analysis and baseload waste reduction.",
    clientNeed: "«Vogliamo vedere quando e dove consumiamo energia durante la giornata per eliminare gli sprechi notturni e nei weekend.»",
    clientNeedEn: "«We want to see intraday load curves to stop baseload energy waste during nights, weekends and non-production hours.»",
    extendedDesc: "Raccoglie serie temporali ad alta frequenza (5, 15, 30 o 60 minuti) da smart meter e contatori di sotto-misura, identificando carichi di base anomali, impianti lasciati accesi e generando azioni correttive per i tecnici di stabilimento.",
    extendedDescEn: "Captures granular sub-meter telemetry (5 to 60-min intervals), identifying baseload anomalies and generating automated alerts for facility managers.",
    examples: "In uno stabilimento il consumo notturno e nel weekend resta pari al 70% di quello diurno: il sistema segnala lo spreco e guida la programmazione dello spegnimento automatico dei compressori.",
    examplesEn: "Plant telemetry reveals weekend power draw is 70% of peak shift: triggers automated workflow to power down idle compressors, saving 15% of annual power.",
    benefits: [
      "Sprechi energetici (carichi notturni, impianti accesi a vuoto) azzerati",
      "Ottimizzazione dei picchi di potenza contrattuale impegnata",
      "Azioni correttive assegnate ai manutentori e verificate nel tempo",
      "Consapevolezza e responsabilizzazione continua dei responsabili di reparto"
    ],
    benefitsEn: [
      "Elimination of baseload waste during nights, weekends and downtime",
      "Optimization of contracted peak demand capacity",
      "Corrective tasks assigned to facility teams and tracked over time",
      "Heightened operational energy awareness across plant supervisors"
    ],
    defaultPhase: "none"
  },
  {
    id: "api-access-addon",
    num: 9,
    title: "Componente aggiuntivo Accesso API (REST API Ingestion & Extraction)",
    titleEn: "API Access Add-On (REST API Integration)",
    icon: "⚡",
    shortDesc: "API REST per estrarre e integrare dati e report da Envizi verso Power BI, Tableau, app e portali interni.",
    shortDescEn: "REST APIs to extract and stream data from Envizi into Power BI, Tableau, ERPs and custom enterprise portals.",
    clientNeed: "«Le nostre applicazioni (portale interno, Power BI, fogli Excel) devono interrogare Envizi e mostrare dati sempre aggiornati.»",
    clientNeedEn: "«Our internal executive dashboards, Power BI models and custom apps must query Envizi via secure REST APIs for live metrics.»",
    extendedDesc: "Fornisce endpoint REST documentati per consentire a sistemi terzi di interrogare ed estrarre dataset, metriche emissive e report consolidati in formato JSON per cruscotti direzionali o app aziendali.",
    extendedDescEn: "Provides documented REST endpoints enabling external applications to query reports and emission datasets in JSON format for automated enterprise integration.",
    examples: "Power BI interroga le API di Envizi ogni notte per aggiornare il cruscotto della direzione generale con le emissioni per sito e divisione, senza estrazioni manuali.",
    examplesEn: "Enterprise Power BI dashboard queries Envizi APIs nightly to refresh carbon metrics across all business units with zero manual exports.",
    benefits: [
      "Dati ESG sempre sincronizzati e consultabili nelle app aziendali già in uso",
      "Eliminazione completa di estrazioni manuali di report e file CSV",
      "Integrazione nativa con Power BI, Tableau, Qlik e data lake aziendali",
      "Sviluppo rapido di cruscotti direzionali personalizzati"
    ],
    benefitsEn: [
      "Always synchronized ESG metrics embedded directly in existing corporate dashboards",
      "Zero manual report exporting or repetitive spreadsheet downloads",
      "Native compatibility with Power BI, Tableau, Qlik and enterprise data lakes",
      "Rapid integration into custom portal and executive reporting frontends"
    ],
    defaultPhase: "none"
  },
  {
    id: "data-export-addon",
    num: 10,
    title: "Componente aggiuntivo Esportazione Dati (Automated SFTP / S3 Export)",
    titleEn: "Automated Data Export Add-On (SFTP / Amazon S3 Pipeline)",
    icon: "📦",
    shortDesc: "Esportazione automatizzata e periodica di dataset completi verso SFTP o Amazon S3 per data warehouse e BI.",
    shortDescEn: "Automated batch delivery of full underlying datasets to SFTP or Amazon S3 for enterprise data lakes and BI.",
    clientNeed: "«Vogliamo ricevere tutti i dati ESG consolidati nel nostro data lake aziendale per combinarli con i dati finanziari.»",
    clientNeedEn: "«We want scheduled batch delivery of all granular ESG records directly into our enterprise data lake to combine with financial data.»",
    extendedDesc: "Esporta in modo schedulato i file di dataset mensili completi verso una destinazione SFTP o Amazon S3 del cliente, alimentando data warehouse, strumenti di BI avanzata e archivi storici aziendali.",
    extendedDescEn: "Delivers scheduled monthly raw datasets directly to customer SFTP or Amazon S3 buckets, feeding corporate data warehouses and cross-functional BI.",
    examples: "Ogni mese Envizi deposita su S3 i dataset consolidati di consumi ed emissioni; la funzione Data Analytics li integra con i ricavi e genera modelli predittivi avanzati.",
    examplesEn: "Envizi deposits monthly consolidated emission datasets to customer S3 bucket; corporate analytics merges ESG with ERP revenue for predictive modeling.",
    benefits: [
      "Dataset mensili completi consegnati in automatico senza intervento umano",
      "Integrazione del patrimonio ESG con i sistemi contabili e gestionali aziendali",
      "Capacità di analisi storiche e predittive multidimensionali su larga scala",
      "Nessun onere di sviluppo: basta configurare le credenziali SFTP o il bucket S3"
    ],
    benefitsEn: [
      "Automated monthly dataset delivery requiring zero manual intervention",
      "Seamless blending of ESG records with corporate ERP and financial repositories",
      "Enables advanced enterprise-wide historical analytics and predictive modeling",
      "Turnkey configuration with standard SFTP and AWS S3 connectors"
    ],
    defaultPhase: "none"
  },
  {
    id: "planning-analytics-addon",
    num: 11,
    title: "Componente aggiuntivo Planning Analytics (Modellazione Scenari & Budget Net Zero)",
    titleEn: "Planning Analytics Add-On (Scenario Modeling & Decarbonization Budgeting)",
    icon: "📊",
    shortDesc: "Budgeting, simulazione di scenari di decarbonizzazione, pianificazione CapEx e analisi multidimensionale.",
    shortDescEn: "Decarbonization scenario modeling, Net Zero budgeting, multi-variable abatement simulation and CapEx planning.",
    clientNeed: "«Vogliamo pianificare budget, scenari di riduzione e investimenti di decarbonizzazione con lo stesso rigore della pianificazione finanziaria.»",
    clientNeedEn: "«We need to simulate Net Zero CapEx scenarios, abatement curves and multi-year budgets with full financial rigor.»",
    extendedDesc: "Integra il motore di analisi multidimensionale IBM Planning Analytics per costruire scenari what-if di decarbonizzazione, simulare combinazioni di investimenti (rinnovabili, efficienza, elettrificazione) e confrontare il consuntivo con il piano.",
    extendedDescEn: "Leverages IBM Planning Analytics multidimensional engine to build what-if decarbonisation scenarios, evaluate abatement curves against budget constraints and track variance.",
    examples: "Il CFO e l'ESG Manager simulano tre scenari di riduzione delle emissioni al 2030 (prudente, base, accelerato), calcolando per ciascuno il CapEx necessario e i risparmi energetici attesi.",
    examplesEn: "CFO and ESG Director model three 2030 Net Zero pathways (conservative, baseline, accelerated), evaluating required CapEx against expected energy cost savings.",
    benefits: [
      "Piani di decarbonizzazione collegati direttamente al budget aziendale e ai piani CapEx",
      "Simulazione interattiva di molteplici scenari prima di impegnare risorse finanziarie",
      "Confronto continuo e dinamico tra investimenti pianificati e risultati consuntivi",
      "Linguaggio comune e dialogo strategico efficace tra team Sostenibilità e Direzione Finance"
    ],
    benefitsEn: [
      "Decarbonisation roadmaps directly tied to corporate budget and CapEx allocations",
      "Interactive multi-variable scenario modeling prior to capital commitments",
      "Continuous variance tracking between planned investments and actual carbon abatement",
      "Unified strategic dialogue and common financial language between ESG and CFO teams"
    ],
    defaultPhase: "none"
  },
  {
    id: "sandbox-addon",
    num: 12,
    title: "Componente aggiuntivo Sandbox Environment (Ambiente di Test & Staging)",
    titleEn: "Sandbox Environment Add-On (Dedicated Testing & Staging Tenant)",
    icon: "🧪",
    shortDesc: "Ambiente non produttivo dedicato per testare configurazioni, nuovi connettori e formare gli utenti in sicurezza.",
    shortDescEn: "Dedicated non-production staging instance to test configurations, new data connectors and train users safely.",
    clientNeed: "«Prima di toccare i dati ufficiali vogliamo provare modifiche, nuove integrazioni e formare i nuovi utenti in un ambiente protetto.»",
    clientNeedEn: "«Before updating live production data, we want to test new connectors, structural changes and train staff in a risk-free environment.»",
    extendedDesc: "Ambiente autonomo e protetto speculare alla produzione per testare nuove configurazioni di sedi, tracciati di dati e integrazioni prima del rilascio ufficiale, senza alcun rischio per i dati storici e le disclosure validate.",
    extendedDescEn: "Isolated sandbox tenant replicating production settings to validate hierarchy changes, connector mappings and user training safely prior to production go-live.",
    examples: "Prima di attivare un nuovo connettore SFTP con 50.000 righe mensili, il team ne verifica il mapping e la corretta quadratura nella sandbox prima del rilascio in produzione.",
    examplesEn: "Before deploying a new 50k-row utility connector, the team validates parsing rules and emission calculations in the sandbox environment.",
    benefits: [
      "Zero rischi per l'integrità e la conformità dei dati ufficiali di produzione",
      "Validazione preventiva di modifiche e nuovi connettori prima del rilascio",
      "Ambiente ideale per la formazione pratica di nuovi utenti e amministratori",
      "Cicli di test e integrazione più rapidi, sicuri e conformi alla governance IT"
    ],
    benefitsEn: [
      "Complete protection of live production data integrity and audited figures",
      "Pre-deployment validation of data mappings, schema updates and new connectors",
      "Safe hands-on training ground for newly onboarded team members",
      "Accelerated integration testing aligned with enterprise IT governance"
    ],
    defaultPhase: "none"
  }
];

interface Props extends CommonProps {
  displayCompanyName: string;
  name: string;
  advancedScopePhases: Record<string, ScopePhase>;
  setAdvancedScopePhases: React.Dispatch<React.SetStateAction<Record<string, ScopePhase>>>;
  advancedScopeNotes?: Record<string, string>;
  setAdvancedScopeNotes?: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  onSave?: (name: string) => void;
  defaultSaveName?: string;
  onContinue?: () => void;
}

export function AdvancedScopeScreen({
  language,
  profile,
  setLanguage,
  setScreen,
  reset,
  goBack,
  renderTrustBar,
  displayCompanyName,
  name,
  advancedScopePhases,
  setAdvancedScopePhases,
  advancedScopeNotes = {},
  setAdvancedScopeNotes,
  onSave,
  defaultSaveName = "",
  onContinue,
}: Props) {
  const isIt = language === "it";
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const phaseCounts = {
    fase1: ADVANCED_SCOPE_ITEMS.filter((item) => (advancedScopePhases[item.id] || item.defaultPhase) === "fase1").length,
    fase2: ADVANCED_SCOPE_ITEMS.filter((item) => (advancedScopePhases[item.id] || item.defaultPhase) === "fase2").length,
    none: ADVANCED_SCOPE_ITEMS.filter((item) => (advancedScopePhases[item.id] || item.defaultPhase) === "none").length,
  };

  const handleSetPhase = (id: string, phase: ScopePhase) => {
    setAdvancedScopePhases((prev) => ({
      ...prev,
      [id]: phase,
    }));
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleNext = () => {
    if (onContinue) {
      onContinue();
    } else {
      setScreen("priorityData");
    }
  };

  return (
    <main
      className="advancedScopeScreen"
      style={{
        minHeight: "100vh",
        height: "1080px",
        background: "#07110e",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "#3b82f4", zIndex: 100 }} />

      {/* Top Header */}
      <header className="missionNav">
        <button className="brand brandButton" onClick={reset}>
          <span className="brandMark">e·</span>
          <span>Envizi<br />Impact Quest</span>
        </button>
        <div className="missionProgress" style={{ fontSize: "20px", fontWeight: 800 }}>
          <span className="activeDot" /> {isIt ? "10 · SCOPE MODULI AVANZATI" : "10 · ADVANCED MODULES SCOPE"}
        </div>
      </header>

      {/* Main Body */}
      <section
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "16px 3.5vw 20px",
          maxWidth: "1620px",
          margin: "0 auto",
          width: "100%",
          boxSizing: "border-box",
          zIndex: 2,
          overflow: "hidden",
        }}
      >
        {/* Title & Scope Progress Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "14px",
            flexShrink: 0,
            gap: "20px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "6px 14px",
                background: "rgba(57,239,180,.15)",
                border: "1.5px solid #39efb4",
                borderRadius: "8px",
                marginBottom: "8px",
              }}
            >
              <span style={{ fontSize: "20px" }}>⚡</span>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono,monospace)",
                  fontSize: "18px",
                  fontWeight: 800,
                  color: "#39efb4",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                }}
              >
                {isIt ? "SCOPING AVANZATO & COMPONENTI ADDIZIONALI" : "ADVANCED SCOPING & ADDITIONAL MODULES"}
              </span>
              <span
                style={{
                  color: "#ffffff",
                  background: "#0c2820",
                  fontSize: "18px",
                  fontWeight: 700,
                  padding: "3px 12px",
                  borderRadius: "12px",
                  border: "1px solid #2e6b54",
                }}
              >
                {displayCompanyName}
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(28px, 2.5vw, 38px)",
                fontWeight: 800,
                color: "#ffffff",
                margin: "0 0 6px",
                letterSpacing: "-.02em",
                lineHeight: 1.2,
              }}
            >
              {isIt ? "Scope Moduli Avanzati (Advanced Capabilities)" : "Advanced Modules Scope (Advanced Capabilities)"}
            </h1>
            <p
              style={{
                fontSize: "20px",
                color: "#c9e8dc",
                maxWidth: "1100px",
                margin: 0,
                lineHeight: 1.35,
              }}
            >
              {isIt
                ? "Valuta i moduli specialistici di filiera, decarbonizzazione, analytics avanzate e integrazione: assegna ciascun elemento a Fase 1, Fase 2 o Non in Scope."
                : "Evaluate specialized supply chain, decarbonization, analytics and integration modules: assign each to Phase 1, Phase 2 or Out of Scope."}
            </p>
          </div>

          {/* Scope Phase Summary Counters */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              background: "#0a221b",
              border: "2px solid #244f3f",
              borderRadius: "14px",
              padding: "12px 20px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#39efb4" }} />
              <span style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff" }}>
                {isIt ? "Fase 1" : "Phase 1"}: <strong style={{ color: "#39efb4", fontSize: "22px" }}>{phaseCounts.fase1}</strong>
              </span>
            </div>
            <div style={{ width: "2px", height: "24px", background: "#244f3f" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#38bdf8" }} />
              <span style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff" }}>
                {isIt ? "Fase 2" : "Phase 2"}: <strong style={{ color: "#38bdf8", fontSize: "22px" }}>{phaseCounts.fase2}</strong>
              </span>
            </div>
            <div style={{ width: "2px", height: "24px", background: "#244f3f" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#94a3b8" }} />
              <span style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff" }}>
                {isIt ? "Non in Scope" : "Out of Scope"}: <strong style={{ color: "#94a3b8", fontSize: "22px" }}>{phaseCounts.none}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Checklist Container */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            paddingRight: "8px",
            paddingBottom: "12px",
          }}
        >
          {ADVANCED_SCOPE_ITEMS.map((item) => {
            const currentPhase = advancedScopePhases[item.id] || item.defaultPhase;
            const isExpanded = expandedId === item.id;
            const title = isIt ? item.title : item.titleEn;
            const shortDesc = isIt ? item.shortDesc : item.shortDescEn;
            const clientNeed = isIt ? item.clientNeed : item.clientNeedEn;
            const extendedDesc = isIt ? item.extendedDesc : item.extendedDescEn;
            const examples = isIt ? item.examples : item.examplesEn;
            const benefits = isIt ? item.benefits : item.benefitsEn;

            return (
              <div
                key={item.id}
                style={{
                  background: currentPhase === "fase1" ? "#0c2820" : currentPhase === "fase2" ? "#0a2228" : "#0f1715",
                  border:
                    currentPhase === "fase1"
                      ? "2px solid #3db88f"
                      : currentPhase === "fase2"
                      ? "2px solid #0284c7"
                      : "2px solid #334155",
                  borderRadius: "14px",
                  padding: "16px 22px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all .18s ease",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                }}
              >
                {/* Item Row Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "18px",
                    flexWrap: "nowrap",
                  }}
                >
                  {/* Left: Icon, Number, Title & Short Desc */}
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1, minWidth: 0 }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "48px",
                        height: "48px",
                        borderRadius: "10px",
                        background:
                          currentPhase === "fase1"
                            ? "rgba(57,239,180,.15)"
                            : currentPhase === "fase2"
                            ? "rgba(56,189,248,.15)"
                            : "rgba(148,163,184,.12)",
                        border:
                          currentPhase === "fase1"
                            ? "1.5px solid #39efb4"
                            : currentPhase === "fase2"
                            ? "1.5px solid #38bdf8"
                            : "1.5px solid #64748b",
                        fontSize: "24px",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </span>

                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-geist-mono,monospace)",
                            fontSize: "20px",
                            fontWeight: 800,
                            color: currentPhase === "fase1" ? "#39efb4" : currentPhase === "fase2" ? "#38bdf8" : "#94a3b8",
                          }}
                        >
                          [{item.num}]
                        </span>
                        <h3
                          style={{
                            fontSize: "22px",
                            fontWeight: 800,
                            color: "#ffffff",
                            margin: 0,
                            letterSpacing: "-.01em",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {title}
                        </h3>
                      </div>
                      <p
                        style={{
                          fontSize: "20px",
                          color: "#c9e8dc",
                          margin: "4px 0 0",
                          lineHeight: 1.35,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Right: Expand details button + 3-state phase selector */}
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
                    <button
                      onClick={() => toggleExpand(item.id)}
                      style={{
                        background: "rgba(12,40,32,0.8)",
                        border: "1.5px solid #244f3f",
                        color: "#72f7ca",
                        borderRadius: "8px",
                        padding: "8px 18px",
                        fontSize: "20px",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: ".15s",
                      }}
                    >
                      {isExpanded ? "▲ " + (isIt ? "Meno dettagli" : "Less") : "▼ " + (isIt ? "Dettagli & Benefici" : "Details")}
                    </button>

                    {/* Phase Selector Pill Group */}
                    <div
                      style={{
                        display: "inline-flex",
                        background: "#061511",
                        border: "2px solid #1a3c30",
                        borderRadius: "10px",
                        padding: "3px",
                        gap: "4px",
                      }}
                    >
                      <button
                        onClick={() => handleSetPhase(item.id, "fase1")}
                        style={{
                          background: currentPhase === "fase1" ? "#184e3b" : "transparent",
                          color: currentPhase === "fase1" ? "#ffffff" : "#72f7ca",
                          border: currentPhase === "fase1" ? "1.5px solid #39efb4" : "1.5px solid transparent",
                          borderRadius: "8px",
                          padding: "8px 20px",
                          fontSize: "20px",
                          fontWeight: currentPhase === "fase1" ? 800 : 600,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          transition: ".15s",
                          boxShadow: currentPhase === "fase1" ? "0 0 12px rgba(57,239,180,.3)" : "none",
                        }}
                      >
                        <span style={{ color: "#39efb4", fontSize: "20px" }}>●</span> {isIt ? "Fase 1" : "Phase 1"}
                      </button>

                      <button
                        onClick={() => handleSetPhase(item.id, "fase2")}
                        style={{
                          background: currentPhase === "fase2" ? "#0369a1" : "transparent",
                          color: currentPhase === "fase2" ? "#ffffff" : "#bae6fd",
                          border: currentPhase === "fase2" ? "1.5px solid #38bdf8" : "1.5px solid transparent",
                          borderRadius: "8px",
                          padding: "8px 20px",
                          fontSize: "20px",
                          fontWeight: currentPhase === "fase2" ? 800 : 600,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          transition: ".15s",
                          boxShadow: currentPhase === "fase2" ? "0 0 12px rgba(56,189,248,.3)" : "none",
                        }}
                      >
                        <span style={{ color: "#38bdf8", fontSize: "20px" }}>●</span> {isIt ? "Fase 2" : "Phase 2"}
                      </button>

                      <button
                        onClick={() => handleSetPhase(item.id, "none")}
                        style={{
                          background: currentPhase === "none" ? "#334155" : "transparent",
                          color: currentPhase === "none" ? "#ffffff" : "#94a3b8",
                          border: currentPhase === "none" ? "1.5px solid #64748b" : "1.5px solid transparent",
                          borderRadius: "8px",
                          padding: "8px 20px",
                          fontSize: "20px",
                          fontWeight: currentPhase === "none" ? 800 : 600,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          transition: ".15s",
                        }}
                      >
                        <span style={{ color: "#94a3b8", fontSize: "20px" }}>✕</span> {isIt ? "Non in Scope" : "Out of Scope"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div
                    style={{
                      marginTop: "16px",
                      paddingTop: "16px",
                      borderTop: "1.5px solid rgba(57,239,180,0.2)",
                      display: "grid",
                      gridTemplateColumns: "1.1fr 1fr",
                      gap: "24px",
                      background: "rgba(0,0,0,0.35)",
                      padding: "20px 22px",
                      borderRadius: "10px",
                    }}
                  >
                    <div>
                      {/* Client Need Quote */}
                      <div
                        style={{
                          background: "rgba(57,239,180,0.1)",
                          borderLeft: "4px solid #39efb4",
                          padding: "12px 16px",
                          borderRadius: "6px",
                          marginBottom: "14px",
                        }}
                      >
                        <span style={{ fontSize: "20px", fontWeight: 800, color: "#39efb4", textTransform: "uppercase" }}>
                          {isIt ? "Esigenza Funzionale Cliente:" : "Client Functional Need:"}
                        </span>
                        <p style={{ fontSize: "20px", color: "#e6f8f1", margin: "8px 0 0", fontStyle: "italic", lineHeight: 1.45 }}>
                          {clientNeed}
                        </p>
                      </div>

                      {/* Extended Description */}
                      <p style={{ fontSize: "20px", color: "#c9e8dc", margin: "0 0 14px", lineHeight: 1.45 }}>
                        <strong style={{ color: "#ffffff" }}>{isIt ? "Descrizione estesa: " : "Full description: "}</strong>
                        {extendedDesc}
                      </p>

                      {/* Example */}
                      <p style={{ fontSize: "20px", color: "#a5d5c5", margin: 0, lineHeight: 1.45 }}>
                        <strong style={{ color: "#72f7ca" }}>{isIt ? "Esempio pratico: " : "Practical example: "}</strong>
                        {examples}
                      </p>
                    </div>

                    {/* Right: Benefits */}
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div>
                        <span style={{ fontSize: "20px", fontWeight: 800, color: "#39efb4", textTransform: "uppercase" }}>
                          {isIt ? "Benefici Tipici Attesi:" : "Expected Business Benefits:"}
                        </span>
                        <ul style={{ margin: "10px 0 0", paddingLeft: "24px", fontSize: "20px", color: "#e6f8f1", lineHeight: 1.5 }}>
                          {benefits.map((b, bIdx) => (
                            <li key={bIdx} style={{ marginBottom: "8px" }}>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Optional Note input */}
                      {setAdvancedScopeNotes && (
                        <div style={{ marginTop: "16px" }}>
                          <input
                            type="text"
                            placeholder={isIt ? "Aggiungi nota per il cliente / partner..." : "Add client/partner scoping note..."}
                            value={advancedScopeNotes[item.id] || ""}
                            onChange={(e) => {
                              const val = e.target.value;
                              setAdvancedScopeNotes((prev) => ({ ...prev, [item.id]: val }));
                            }}
                            style={{
                              width: "100%",
                              background: "#0c2820",
                              border: "1.5px solid #2e6b54",
                              borderRadius: "8px",
                              color: "#ffffff",
                              padding: "10px 16px",
                              fontSize: "20px",
                              outline: "none",
                              boxSizing: "border-box",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Navigation Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "14px",
            paddingTop: "14px",
            borderTop: "1px solid #1a3c30",
            flexShrink: 0,
          }}
        >
          <button
            onClick={goBack}
            style={{
              background: "#0c2820",
              border: "2px solid #3db88f",
              color: "#72f7ca",
              padding: "12px 28px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: 800,
              fontSize: "20px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: ".15s",
            }}
          >
            ← {isIt ? "Indietro (Scope Primario)" : "Back (Primary Scope)"}
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            {onSave && (
              <button
                onClick={() => onSave(defaultSaveName || displayCompanyName)}
                style={{
                  background: "transparent",
                  border: "2px solid #2e6b54",
                  color: "#39efb4",
                  padding: "12px 24px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: 800,
                  fontSize: "20px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                💾 {isIt ? "Salva Scoping" : "Save Scoping"}
              </button>
            )}

            <button
              onClick={handleNext}
              style={{
                background: "#184e3b",
                border: "2px solid #39efb4",
                color: "#ffffff",
                padding: "12px 34px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: 800,
                fontSize: "20px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 0 20px rgba(57,239,180,0.35)",
                transition: ".15s",
              }}
            >
              {isIt ? "Avanti (Esigenze di Dati)" : "Next (Data Needs)"} <b>→</b>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
