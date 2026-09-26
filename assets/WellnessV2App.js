import{i as e}from"./rolldown-runtime.js";import{Dt as t,R as n,St as r,_t as i,at as a,ct as o,dt as s,it as c,lt as l,nt as u,ot as d,rt as f,st as p,tt as m,vt as h}from"./app-features.js";import{h as g}from"./index.js";import{C as _,m as v,v as y,y as b}from"./app-features2.js";import{A as x,D as S,_ as C,a as w,k as T,m as E,p as D,t as O,w as k}from"./sparklinePath.js";var A=e(t(),1),j=s();function M({player:e,onBack:t}){let[n,r]=(0,A.useState)([]),[i,a]=(0,A.useState)([]),[o,s]=(0,A.useState)([]),[c,l]=(0,A.useState)([]),[u,d]=(0,A.useState)(!0),[f,p]=(0,A.useState)(null);(0,A.useEffect)(()=>{let t=!1;return Promise.all([C(e.club_id,!0),E(e.id),D(e.id)]).then(([e,n,i])=>{t||(r(e),a(n),s(i.goals),l(i.notes))}).catch(e=>{t||p(w(e))}).finally(()=>{t||d(!1)}),()=>{t=!0}},[e.club_id,e.id]);let m=(0,A.useMemo)(()=>k(n,i,o,c),[n,i,o,c]),h=m.series.filter(e=>e.results.length>0);return(0,j.jsxs)(`div`,{className:`wl-shell`,children:[(0,j.jsxs)(`div`,{className:`wl-head`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h1`,{children:`Meine Ziele & Tests`}),(0,j.jsx)(`div`,{className:`wl-sub`,children:`Nur Ansicht — Einträge macht dein Coach / Athletiktrainer.`})]}),(0,j.jsx)(`button`,{type:`button`,className:`wl-btn ghost`,style:{width:`auto`},onClick:t,children:`← Zurück`})]}),f&&(0,j.jsx)(`div`,{className:`wl-error`,children:f}),(0,j.jsxs)(`div`,{className:`wl-card wl-daylist`,children:[(0,j.jsx)(`h3`,{children:`Zielvereinbarungen`}),u?(0,j.jsx)(`div`,{className:`wl-sub`,children:`Lade …`}):m.goals.length===0?(0,j.jsx)(`div`,{className:`wl-sub`,children:`Noch keine Ziele vereinbart.`}):m.goals.map(e=>{let t=m.notesByGoal[e.id]??[];return(0,j.jsxs)(`div`,{className:`wl-row`,style:{display:`grid`,gap:4,cursor:`default`},children:[(0,j.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,flexWrap:`wrap`},children:[(0,j.jsx)(`div`,{className:`wl-row-title`,style:{flex:1},children:e.title}),(0,j.jsxs)(`span`,{className:`wl-status ${e.status===`achieved`?`done`:`open`}`,children:[x[e.status],` · `,T[e.kind]]})]}),e.description&&(0,j.jsx)(`div`,{className:`wl-sub`,style:{whiteSpace:`pre-wrap`},children:e.description}),e.review_at&&(0,j.jsxs)(`div`,{className:`wl-sub`,children:[`Review: `,v(e.review_at)]}),t.map(e=>(0,j.jsxs)(`div`,{className:`wl-sub`,children:[v(e.created_at.slice(0,10)),` · `,e.note]},e.id))]},e.id)})]}),(0,j.jsxs)(`div`,{className:`wl-card wl-daylist`,children:[(0,j.jsx)(`h3`,{children:`Testwerte`}),u?(0,j.jsx)(`div`,{className:`wl-sub`,children:`Lade …`}):h.length===0?(0,j.jsx)(`div`,{className:`wl-sub`,children:`Noch keine Messwerte.`}):h.map(e=>{let t=e.results.map(e=>e.value),n=e.definition;return(0,j.jsxs)(`div`,{className:`wl-row`,style:{display:`grid`,gap:6,cursor:`default`},children:[(0,j.jsxs)(`div`,{style:{display:`flex`,gap:10,alignItems:`center`},children:[(0,j.jsx)(`div`,{className:`wl-row-title`,style:{flex:1},children:n.name}),(0,j.jsx)(`svg`,{viewBox:`0 0 100 100`,preserveAspectRatio:`none`,width:80,height:24,style:{overflow:`visible`},"aria-hidden":!0,children:(0,j.jsx)(`path`,{d:O(t),fill:`none`,stroke:`currentColor`,strokeWidth:2,vectorEffect:`non-scaling-stroke`})}),(0,j.jsx)(`strong`,{children:e.latest?`${S(e.latest.value,n.decimals)} ${n.unit}`:`—`}),e.delta!=null&&(0,j.jsxs)(`span`,{className:`wl-status ${e.improved?`done`:`open`}`,children:[e.delta>0?`+`:``,S(e.delta,n.decimals)]})]}),(0,j.jsx)(`div`,{className:`wl-sub`,children:[...e.results].reverse().slice(0,5).map(e=>`${v(e.measured_on)}: ${S(e.value,n.decimals)}`).join(` · `)})]},n.id)})]})]})}function ee(e){let[t,n]=(0,A.useState)(()=>h()?`loading`:`unconfigured`),[r,s]=(0,A.useState)(``),[g,_]=(0,A.useState)(!1),[v,y]=(0,A.useState)(``),[b,x]=(0,A.useState)(null),[S,C]=(0,A.useState)(null),w=(0,A.useCallback)(async()=>{y(``);try{let e=await u();if(!e){n(`claim`);return}x(e);let t=await f(e);C(t),n(`home`)}catch(e){y(o(e)),n(`login`)}},[]);(0,A.useEffect)(()=>{let e=i();if(!e){n(`unconfigured`);return}let t=!0;return e.auth.getSession().then(({data:e})=>{t&&(e.session?w():n(`login`))}),()=>{t=!1}},[w]);let T=(0,A.useCallback)(async e=>{_(!0),y(``);try{await c(e),s(e),n(`otp`)}catch(e){y(o(e))}finally{_(!1)}},[]),E=(0,A.useCallback)(async e=>{_(!0),y(``);try{await l(r,e),await w()}catch(e){y(o(e))}finally{_(!1)}},[r,w]),D=(0,A.useCallback)(async(e,t)=>{_(!0),y(``);try{await m(e,t),await w()}catch(e){y(o(e))}finally{_(!1)}},[w]),O=(0,A.useCallback)(async()=>{if(b)try{C(await f(b))}catch(e){y(o(e))}},[b]),k=(0,A.useCallback)(async(e,t)=>{if(b){_(!0);try{await d({playerId:b.id,date:e,values:t}),await O()}catch(e){y(o(e))}finally{_(!1)}}},[b,O]),j=(0,A.useCallback)(async(e,t,n)=>{if(b){_(!0);try{await p({sessionId:e,playerId:b.id,srpe:t,participationConfirmed:n,answers:{}}),await O()}catch(e){y(o(e))}finally{_(!1)}}},[b,O]),M=(0,A.useCallback)(async()=>{await a(),x(null),C(null),n(`login`)},[]);return{stage:t,busy:g,error:v,email:r,player:b,home:S,hasClaimToken:(0,A.useMemo)(()=>!!e,[e]),claimToken:e,requestOtp:T,confirmOtp:E,claim:D,saveDaily:k,saveSrpe:j,logout:M,clearError:()=>y(``)}}function te(e){let t=String(e??``).split(/\r?\n/),n=[],r=[],i=[],a=()=>{i.length!==0&&(n.push((0,j.jsx)(`p`,{style:{margin:0,color:`var(--ui-text)`,lineHeight:1.55},children:i.join(` `)},`p_${n.length}`)),i=[])},o=()=>{r.length!==0&&(n.push((0,j.jsx)(`ul`,{style:{margin:0,paddingLeft:18,display:`grid`,gap:6,color:`var(--ui-text)`},children:r.map((e,t)=>(0,j.jsx)(`li`,{children:e},`${e}_${t}`))},`ul_${n.length}`)),r=[])};for(let e of t){let t=e.trim();if(!t){a(),o();continue}if(t.startsWith(`# `)){a(),o(),n.push((0,j.jsx)(`h2`,{style:{margin:0,fontSize:18},children:t.slice(2)},`h2_${n.length}`));continue}if(t.startsWith(`## `)){a(),o(),n.push((0,j.jsx)(`h3`,{style:{margin:0,fontSize:15},children:t.slice(3)},`h3_${n.length}`));continue}if(t.startsWith(`- `)){a(),r.push(t.slice(2));continue}i.push(t)}return a(),o(),n}function ne({article:e}){let t=Array.isArray(e.keyTakeaways)?e.keyTakeaways:[],n=Array.isArray(e.citations)?e.citations:[];return(0,j.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,j.jsxs)(`div`,{style:{display:`grid`,gap:6},children:[(0,j.jsx)(`div`,{style:{fontSize:18,fontWeight:900},children:e.title}),(0,j.jsx)(`div`,{style:{color:`var(--ui-muted)`,lineHeight:1.5},children:e.summary})]}),(0,j.jsxs)(`div`,{style:{display:`grid`,gap:6},children:[(0,j.jsx)(`div`,{style:{fontSize:12,fontWeight:900,color:`var(--ui-muted)`,textTransform:`uppercase`,letterSpacing:.6},children:`Key Takeaways`}),(0,j.jsx)(`ul`,{style:{margin:0,paddingLeft:18,display:`grid`,gap:6},children:t.map(e=>(0,j.jsx)(`li`,{children:e},e))})]}),(0,j.jsx)(`div`,{style:{display:`grid`,gap:10},children:te(e.bodyMarkdown)}),(0,j.jsxs)(`div`,{style:{display:`grid`,gap:6},children:[(0,j.jsx)(`div`,{style:{fontSize:12,fontWeight:900,color:`var(--ui-muted)`,textTransform:`uppercase`,letterSpacing:.6},children:`Quellen`}),(0,j.jsx)(`ul`,{style:{margin:0,paddingLeft:18,display:`grid`,gap:6},children:n.map(e=>(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{children:e.label}),`: `,e.source]},`${e.label}_${e.source}`))})]})]})}var re=`# Wellness im Monitoring verstehen

## TL;DR

Wellness beschreibt den aktuellen subjektiven Zustand eines Spielers, nicht die Belastung selbst. Typische Inhalte sind Erholung, Muskelstatus, Schlaf, Stress und optional Stimmung. In der Belastungssteuerung ist Wellness damit ein Response-Signal.

## Mathe

Load (Input) != Wellness (Response)

Input:

- plannedLoad
- sessionLoad
- Spiele und Double Days
- optionale HR- oder Polar-Signale

Response:

- wellnessScore
- einzelne Wellness-Dimensionen

## Praxis und Interpretation

Trainings- und Spielbelastung sagen, was gemacht wurde. Wellness sagt, wie der Spieler darauf reagiert. Gerade deshalb ist Wellness fuer Belastungssteuerung wertvoll: Zwei Spieler koennen dieselbe Session absolvieren und trotzdem sehr unterschiedlich antworten.

## Quellen

- Athlete monitoring consensus
- Reviews zu subjektiven Self-Report-Massen im Sport
`,ie=`# Warum Wellness trotz Polar und Wearables wichtig bleibt

## TL;DR

Subjektive Wellness-Fragen sind kein Notbehelf, sondern ein eigener Informationskanal. Sie machen Dinge sichtbar, die ein einzelnes Wearable nur unvollstaendig erfasst, zum Beispiel mentale Ermuedung, Schlafprobleme, Schwere in den Beinen oder erlebten Stress.

## Mathe

Gesamtmonitoring = Load-Signale + Response-Signale

Load-Signale:

- sessionLoad
- Spiele
- Sessiondichte
- Polar oder HR

Response-Signale:

- Wellness
- Schlaf
- Stress
- Muskelstatus

## Praxis und Interpretation

Objektive und subjektive Daten messen nicht dasselbe. Genau deshalb ist ihre Kombination wertvoll. Ein Spieler kann physiologisch unauffaellig wirken und trotzdem schwere Beine, wenig Schlaf oder hohen Alltagsstress haben.

## Quellen

- Systematic review: subjective self-report measures for athlete monitoring
- Single-item self-report wellbeing measures in team sport
`,N=`# Welche Wellness-Bereiche am wichtigsten sind

## TL;DR

Die in der Literatur am haeufigsten genutzten Wellness-Dimensionen sind Fatigue oder Frische, Muskelstatus oder Soreness, Schlaf, Stress und haeufig auch Mood. Fuer Basketball sind vor allem Erholung und Muskelstatus sehr praxisnah.

## Mathe

Mögliche Wellness-Dimensionen:

- recoveryScore
- muscleScore
- sleepScore
- stressScore
- moodScore

## Praxis und Interpretation

Nicht jede Dimension muss immer abgefragt werden. Fuer eine App mit geringer Eingabehuerde sind zwei Kernfragen oft besser als ein grosses Fragepaket. Fuer Basketball passen Erholung/Belastbarkeit und Muskelstatus besonders gut zum Sessionkontext.

## Quellen

- Hooper-style wellness use in team sports
- Basketball season monitoring with wellness and sRPE
`,P=`# Warum nur zwei Default-Fragen sinnvoll sind

## TL;DR

Fuer eine schnelle Session-Abfrage sind zwei Default-Fragen sinnvoll:

- Wie erholt oder belastbar fuehlst du dich gerade?
- Wie ist dein Muskelstatus oder deine Beine gerade?

Diese Kombination deckt die praxisrelevanten Kernbereiche mit minimalem Aufwand ab.

## Mathe

wellnessBase = mean(recoveryScore, muscleScore)

Beispiel:

recoveryScore = 2
muscleScore = 3

wellnessBase = (2 + 3) / 2 = 2.5

## Praxis und Interpretation

Diese beiden Fragen passen gut zu Basketball und zu einer Session-nahen App. Sie erfassen eine allgemeine Readiness-Komponente und eine staerker neuromuskulaere bzw. muskuläre Komponente. Schlaf und Stress koennen bei Bedarf als Zusatzfragen eingeblendet werden.

## Quellen

- Self-report implementation factors in elite sport
- Team-sport wellbeing monitoring reviews
`,F=`# Schlaf, Erholung und Basketball-Kontext

## TL;DR

Schlaf ist fuer Erholung, Reaktionsfaehigkeit, kognitive Leistung und Performance im Basketball wichtig. Dichte Spielplaene, Reisen und spaete Belastungen koennen den Schlaf verschlechtern. Deshalb sollte Schlaf in der App mitgedacht werden, aber nicht zwingend bei jeder Session als Pflichtfrage.

## Mathe

sleepQualityScore in {1,2,3,4,5}

Optional spaeter:

sleepDuration = Stunden
sleepDebt3d = targetSleep - mean(last 3 nights)

## Praxis und Interpretation

Fuer V1 ist Schlafqualitaet meist der beste Zusatzwert. Einfache Schlaf-Flags sind nuetzlicher als eine ueberladene Standardabfrage. Schlaf wird besonders interessant nach Spielen, bei Double Days und bei schlechten Wellness-Trends.

## Quellen

- Sleep recommendations and extension for athletes
- Basketball performance and sleep extension
- Expert consensus on athlete sleep
`,ae=`# Stress und psychische Belastung

## TL;DR

Stress gehoert in ein gutes Wellness-System, weil Belastung nicht nur physisch ist. Schule, Studium, Reisen, Spielzeit, Rollenstress und private Faktoren beeinflussen, wie gut ein Spieler Training und Wettkampf vertraegt.

## Mathe

stressScore in {1,2,3,4,5}

stressDelta = stressScore_today - mean_28d

## Praxis und Interpretation

Ein erhoehter Stresswert ist kein medizinischer Befund, sondern ein Hinweis, Belastung und Regeneration genauer anzuschauen. Im Teamkontext hilft Stress, warum zwei Spieler dieselbe Woche unterschiedlich vertragen.

## Quellen

- Load monitoring consensus with non-sport load context
- Self-report wellness literature in team sport
`,oe=`# Wie Wellness mit sRPE, Last und Baselines zusammenspielt

## TL;DR

Wellness sollte in der App nicht das Hauptsignal sein, sondern ein Modulator. Die wichtigste Basis bleibt Teilnahme, Dauer und sRPE. Wellness hilft danach zu beurteilen, wie gut diese Belastung aktuell vertragen wird.

## Mathe

sessionLoad = durationMinutes \\* sRPE

monitoringState = f(
sessionLoad,
acuteLoad7d,
baselineLoad28d,
wellness,
optionalPolar
)

Persoenliche Baseline:

baseline_28d = mean(last 28 days or last 10 valid values)
sd_28d = standardDeviation(same window)
zScore = (todayScore - baseline_28d) / sd_28d

## Praxis und Interpretation

Ein Rohwert wie 3 von 5 ist allein wenig aussagekraeftig. Relevanter ist: Ist der heutige Wert schlechter als sonst, wie lange schon und zusammen mit welcher Last? Deshalb sind individuelle Trends meist wichtiger als starre Universalgrenzen.

## Quellen

- Athlete monitoring consensus
- Reviews on individual baselines and athlete monitoring
`,se=`# Ampel, Warnflags und Datenqualitaet

## TL;DR

Die Wellness-Ampel ist ein Coaching-Signal, keine Diagnose und keine Verletzungsvorhersage. Gleichzeitig ist ein Wellness-System nur so gut wie seine Nutzung. Fehlende Antworten duerfen nicht als gut interpretiert werden.

## Mathe

alertPoints =
loadPoints

- stackingPoints
- wellnessPoints
- optionalPolarPoints

Beispiel:

- 0 bis 1 = gruen
- 2 bis 3 = gelb
- 4 oder mehr = rot

completionRate14d = answeredResponses / expectedResponses

## Praxis und Interpretation

Gruen bedeutet nicht automatisch perfekt, Rot nicht automatisch krank oder verletzt. Die Ampel soll helfen, Belastung, Erholung und Kontext gemeinsam zu lesen. Gleichzeitig braucht das System eine niedrige Eingabehuerde, gute Compliance und sichtbares Feedback.

## Quellen

- Implementation considerations for self-report measures
- Team-sport single-item wellbeing review
`,I=`https://pubmed.ncbi.nlm.nih.gov/28463642/`,L=`https://pubmed.ncbi.nlm.nih.gov/26423706/`,R=`https://pubmed.ncbi.nlm.nih.gov/27834546/`,z=`https://pubmed.ncbi.nlm.nih.gov/32991706/`,B=[{id:`wellness-basics`,title:`Was Wellness im Monitoring bedeutet`,shortTitle:`Wellness Basics`,category:`wellness`,summary:`Wellness beschreibt den aktuellen subjektiven Zustand des Spielers und ergaenzt Lastdaten um ein Response-Signal.`,bodyMarkdown:re,keyTakeaways:[`Wellness misst nicht die Last selbst, sondern die Antwort auf Last.`,`Wellness ist fuer Belastungssteuerung ergaenzend, nicht ersetzend.`,`Der Wert entsteht vor allem im Zusammenspiel mit sRPE, Last und Kontext.`],tags:[`wellness`,`response`,`monitoring`],relatedMetrics:[`wellnessBase`,`sessionLoad`],citations:[{label:`Monitoring Athlete Training Loads: Consensus Statement`,source:`Bourdon et al. 2017`,url:I},{label:`Monitoring the athlete training response: subjective self-reported measures trump commonly used objective measures`,source:`Saw et al. 2016`,url:L}],updatedAt:`2026-03-15`},{id:`why-self-report-matters`,title:`Warum Wellness trotz Polar und Wearables wichtig bleibt`,shortTitle:`Warum Self-Report`,category:`wellness`,summary:`Self-Reports liefern Informationen, die in physiologischen oder Trackingdaten oft nur unvollstaendig sichtbar sind.`,bodyMarkdown:ie,keyTakeaways:[`Subjektive und objektive Daten messen unterschiedliche Dinge.`,`Mentale Ermuedung, Schlaf und Stress sind oft frueh ueber Self-Reports sichtbar.`,`Gerade deshalb sind Wellness-Fragen kein Ersatz, sondern ein eigener Kanal.`],tags:[`self-report`,`wearables`,`response`],relatedMetrics:[`wellnessBase`,`playerDailyWellness`],citations:[{label:`Monitoring the athlete training response: subjective self-reported measures trump commonly used objective measures`,source:`Saw et al. 2016`,url:L},{label:`The use of single-item self-report measures of team-sport athlete wellbeing and their relationship with training load: a systematic review`,source:`Duignan et al. 2020`,url:z}],updatedAt:`2026-03-15`},{id:`wellness-dimensions`,title:`Welche Wellness-Bereiche am wichtigsten sind`,shortTitle:`Dimensionen`,category:`wellness`,summary:`Fatigue, Muskelstatus, Schlaf, Stress und Mood sind die klassischen Wellness-Dimensionen im Teamsport.`,bodyMarkdown:N,keyTakeaways:[`Fuer Basketball sind Erholung und Muskelstatus besonders praxisnah.`,`Schlaf und Stress sind wichtige Zusatzdimensionen.`,`Nicht jede Dimension muss in jeder Abfrage Pflicht sein.`],tags:[`fatigue`,`soreness`,`sleep`,`stress`,`mood`],relatedMetrics:[`recoveryScore`,`muscleScore`,`sleepScore`,`stressScore`],citations:[{label:`Internal training load and its longitudinal relationship with seasonal player wellness in professional basketball`,source:`Clemente et al. 2019`,url:`https://pubmed.ncbi.nlm.nih.gov/31523318/`},{label:`The use of single-item self-report measures of team-sport athlete wellbeing and their relationship with training load: a systematic review`,source:`Duignan et al. 2020`,url:z}],updatedAt:`2026-03-15`},{id:`default-questions`,title:`Warum nur zwei Default-Fragen sinnvoll sind`,shortTitle:`2 Default-Fragen`,category:`wellness`,summary:`Zwei Default-Fragen halten die Huerde niedrig und liefern im Basketball trotzdem schon sehr brauchbare Hinweise.`,bodyMarkdown:P,keyTakeaways:[`Weniger Fragen verbessern oft die Compliance.`,`Erholung und Muskelstatus decken die wichtigste Session-nahe Ebene ab.`,`Mehr Tiefe sollte nur bei Bedarf zugeschaltet werden.`],tags:[`ux`,`compliance`,`default`,`questions`],relatedMetrics:[`wellnessBase`,`completionRate14d`],citations:[{label:`Monitoring the athlete training response: subjective self-reported measures trump commonly used objective measures`,source:`Saw et al. 2016`,url:L},{label:`Athlete self-report measures in research and practice: considerations for the discerning reader and fastidious practitioner`,source:`Saw et al. 2016`,url:R}],updatedAt:`2026-03-15`},{id:`sleep-and-recovery`,title:`Schlaf, Erholung und Basketball-Kontext`,shortTitle:`Schlaf`,category:`sleep`,summary:`Schlaf ist fuer Erholung und Leistung wichtig, sollte aber in einer App mit niedriger Huerde eher situativ als immer abgefragt werden.`,bodyMarkdown:F,keyTakeaways:[`Schlaf ist fuer Regeneration und kognitive Leistung zentral.`,`Im Basketball sind Abendspiele, Reisen und Spielplaene besonders relevant.`,`Fuer V1 ist Schlafqualitaet oft die praktikabelste Zusatzfrage.`],tags:[`sleep`,`recovery`,`basketball`],relatedMetrics:[`sleepQualityScore`,`sleepDebt3d`],citations:[{label:`Sleep and the athlete: narrative review and 2021 expert consensus recommendations`,source:`Walsh et al. 2021`,url:`https://pubmed.ncbi.nlm.nih.gov/33144349/`},{label:`The effects of sleep extension on the athletic performance of collegiate basketball players`,source:`Mah et al. 2011`,url:`https://pubmed.ncbi.nlm.nih.gov/21731144/`}],updatedAt:`2026-03-15`},{id:`stress-and-mental-load`,title:`Stress und psychische Belastung`,shortTitle:`Stress`,category:`psychology`,summary:`Stress gehoert in ein gutes Wellness-System, weil Belastung nicht nur physisch ist.`,bodyMarkdown:ae,keyTakeaways:[`Stress beeinflusst, wie gut Training und Spiel vertragen werden.`,`Schule, Reisen und Rollenstress sind sportlich relevant.`,`Stress ist ein Kontextsignal, kein medizinischer Befund.`],tags:[`stress`,`psychology`,`mental-load`],relatedMetrics:[`stressScore`,`stressDelta`],citations:[{label:`Monitoring Athlete Training Loads: Consensus Statement`,source:`Bourdon et al. 2017`,url:I},{label:`The use of single-item self-report measures of team-sport athlete wellbeing and their relationship with training load: a systematic review`,source:`Duignan et al. 2020`,url:z}],updatedAt:`2026-03-15`},{id:`wellness-with-load-and-baselines`,title:`Wie Wellness mit sRPE, Last und Baselines zusammenspielt`,shortTitle:`Baselines`,category:`analytics`,summary:`Wellness wird erst in Relation zu Last und persoenlicher Historie wirklich aussagekraeftig.`,bodyMarkdown:oe,keyTakeaways:[`Session Load bleibt die Last-Basis, Wellness modifiziert die Einordnung.`,`Persoenliche Baselines sind wichtiger als starre Grenzwerte.`,`Trends sind relevanter als ein Einzelrohwert.`],tags:[`sRPE`,`baseline`,`trend`,`z-score`],relatedMetrics:[`sessionLoad`,`acuteLoad7d`,`baseline_28d`,`zScore`],citations:[{label:`Monitoring Athlete Training Loads: Consensus Statement`,source:`Bourdon et al. 2017`,url:I},{label:`Athlete self-report measures in research and practice: considerations for the discerning reader and fastidious practitioner`,source:`Saw et al. 2016`,url:R}],updatedAt:`2026-03-15`},{id:`wellness-flags-and-compliance`,title:`Ampel, Warnflags und Datenqualitaet`,shortTitle:`Flags & Compliance`,category:`data-quality`,summary:`Die Wellness-Ampel ist eine Coaching-Hilfe, keine Diagnose, und ihre Qualitaet haengt stark von guter Compliance ab.`,bodyMarkdown:se,keyTakeaways:[`Flags sind transparente Coaching-Signale, keine Blackbox-Prognosen.`,`Missing wellness ist nicht gleich alles okay.`,`Niedrige Huerde und klares Feedback verbessern die Datenqualitaet.`],tags:[`flags`,`compliance`,`confidence`,`data-quality`],relatedMetrics:[`alertPoints`,`completionRate14d`],citations:[{label:`Experience implementing a self-report measure in elite athletes`,source:`Implementation study / PMID 25729301`,url:`https://pubmed.ncbi.nlm.nih.gov/25729301/`},{label:`Athlete self-report measures in research and practice: considerations for the discerning reader and fastidious practitioner`,source:`Saw et al. 2016`,url:R}],updatedAt:`2026-03-15`}];new Map(B.map(e=>[e.id,e]));var V=[`Sehr niedrig`,`Niedrig`,`Mittel`,`Hoch`,`Sehr hoch`];function H(e,t){return t===5?[...e]:t<=1?[e[2]]:Array.from({length:t},(n,r)=>{let i=r/(t-1);return e[Math.round(i*(e.length-1))]})}var U={description:`Schätze deinen heutigen Zustand auf der Skala ein. Wichtig ist die ehrliche, tägliche Selbsteinschätzung — Trends zählen mehr als Einzelwerte.`,scaleAnchors:V,medium:`1 steht für die schlechteste, 5 für die beste Ausprägung dieser Frage. Der Verlauf über mehrere Tage ist aussagekräftiger als ein einzelner Tageswert — schätze konsistent, nicht perfekt.`,articleIds:[`wellness-basics`,`wellness-with-load-and-baselines`]},W={schlafqualitat:{description:`Wie erholsam war dein Schlaf letzte Nacht? Schlafqualität (nicht nur -dauer) ist einer der stärksten Frühindikatoren für Erholung und Verletzungsrisiko.`,scaleAnchors:[`Sehr schlecht`,`Schlecht`,`Okay`,`Gut`,`Sehr gut`],medium:`1–2: unruhiger Schlaf, häufiges Aufwachen, du fühlst dich beim Aufstehen nicht erholt. 3: durchschnittliche Nacht. 4–5: durchgeschlafen und erholsam, du wachst von selbst und ausgeruht auf. Es zählt die gefühlte Erholsamkeit, nicht nur die reine Schlafdauer.`,articleIds:[`sleep-and-recovery`,`wellness-dimensions`]},schlaf:{description:`Wie erholsam war dein Schlaf letzte Nacht? Schlafqualität ist ein starker Frühindikator für Erholung.`,scaleAnchors:[`Sehr schlecht`,`Schlecht`,`Okay`,`Gut`,`Sehr gut`],medium:`1–2: unruhiger Schlaf, häufiges Aufwachen, du fühlst dich beim Aufstehen nicht erholt. 3: durchschnittliche Nacht. 4–5: durchgeschlafen und erholsam, du wachst von selbst und ausgeruht auf. Es zählt die gefühlte Erholsamkeit, nicht nur die reine Schlafdauer.`,articleIds:[`sleep-and-recovery`,`wellness-dimensions`]},mudigkeit:{description:`Wie frisch oder müde fühlst du dich heute? Anhaltende Müdigkeit über mehreren Tagen ist ein Warnsignal für Überlastung.`,scaleAnchors:[`Leer`,`Müde`,`Okay`,`Frisch`,`Voll erholt`],medium:`1–2: du fühlst dich schon vor dem Training erschöpft, wie nach einer durchwachten Nacht oder überstandener Krankheit. 3 ist ein normaler Trainingstag. 4–5: du fühlst dich bereit für intensive Belastung. Wichtig ist der Verlauf über mehrere Tage, nicht der Einzelwert.`,articleIds:[`wellness-dimensions`,`wellness-with-load-and-baselines`]},muskelkater:{description:`Wie stark ist dein Muskelkater / Muskelgefühl? Hoher Muskelkater bei gleichbleibender Last deutet auf unvollständige Erholung hin.`,scaleAnchors:[`Sehr schwer`,`Schwer`,`Okay`,`Locker`,`Sehr frisch`],medium:`1–2: Muskeln fühlen sich schwer/wund an, z. B. am Tag nach einer intensiven Einheit oder einem Spiel. 3 ist normale muskuläre Grundspannung. 4–5: Beine/Körper fühlen sich locker und erholt an. Anhaltend niedrige Werte bei gleicher Belastung sind ein Warnsignal.`,articleIds:[`wellness-dimensions`,`wellness-with-load-and-baselines`]},stimmung:{description:`Wie ist deine Stimmung / mentale Verfassung heute? Stimmung und Stress beeinflussen Trainingsantwort und Regeneration messbar.`,scaleAnchors:[`Sehr hoch`,`Hoch`,`Mittel`,`Niedrig`,`Sehr niedrig`],medium:`1–2: du fühlst dich aktuell stark belastet/gestresst (Schule, Job, Privates, Trainingsdruck). 3 ist ein normales Belastungsniveau. 4–5: du fühlst dich entspannt und mental frei. Mentale Belastung wirkt sich direkt auf Regeneration und Verletzungsrisiko aus.`,articleIds:[`stress-and-mental-load`,`wellness-dimensions`]},energie:{description:`Wie erholt und einsatzbereit fühlst du dich gerade? Energielevel ist ein direkter Indikator für aktuelle Belastbarkeit.`,scaleAnchors:[`Leer`,`Müde`,`Okay`,`Frisch`,`Voll erholt`],medium:`1–2: du fühlst dich schon vor dem Training erschöpft, wie nach einer durchwachten Nacht oder überstandener Krankheit. 3 ist ein normaler Trainingstag. 4–5: du fühlst dich bereit für intensive Belastung. Wichtig ist der Verlauf über mehrere Tage, nicht der Einzelwert.`,articleIds:[`wellness-dimensions`,`wellness-with-load-and-baselines`]},wieentspanntfuhlstdudichaktuell:{description:`Wie entspannt fühlst du dich aktuell? Mentale Last ist oft früher über Self-Reports sichtbar als über Wearables.`,scaleAnchors:[`Sehr angespannt`,`Angespannt`,`Mittel`,`Entspannt`,`Sehr entspannt`],medium:`1–2: du fühlst dich aktuell stark belastet/gestresst (Schule, Job, Privates, Trainingsdruck). 3 ist ein normales Belastungsniveau. 4–5: du fühlst dich entspannt und mental frei. Mentale Belastung wirkt sich direkt auf Regeneration und Verletzungsrisiko aus.`,articleIds:[`stress-and-mental-load`,`wellness-dimensions`]}};function G(e){return e.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``).replace(/[^a-z]/g,``)}function ce(e){return e<=1?[V[2]]:Array.from({length:e},(t,n)=>{let r=n/(e-1);return V[Math.round(r*(V.length-1))]})}function K(e,t){let n=W[G(e)];return n?H(n.scaleAnchors,t):ce(t)}function le(e){let t=W[G(e)]??U,n=t.articleIds.map(e=>B.find(t=>t.id===e)).filter(e=>!!e);return{description:t.description,medium:t.medium,articles:n}}var q={simple:`Einfach`,medium:`Mittel`,expert:`Experte`};function J({title:e,level:t,onLevelChange:n,onClose:r,children:i}){return(0,j.jsx)(`div`,{className:`wl-overlay`,role:`dialog`,"aria-modal":`true`,onClick:e=>{e.target===e.currentTarget&&r()},children:(0,j.jsxs)(`div`,{className:`wl-sheet`,children:[(0,j.jsxs)(`div`,{className:`wl-sheet-head`,children:[(0,j.jsx)(`h2`,{children:e}),(0,j.jsx)(`button`,{type:`button`,className:`wl-close`,"aria-label":`Schließen`,onClick:r,children:`×`})]}),(0,j.jsx)(`div`,{className:`wl-tabs`,children:Object.keys(q).map(e=>(0,j.jsx)(`button`,{type:`button`,className:`wl-tab-btn${t===e?` sel`:``}`,onClick:()=>n(e),children:q[e]},e))}),i]})})}function Y({text:e}){return(0,j.jsx)(`p`,{className:`wl-scale-legend`,children:e})}function ue({label:e,scale:t}){let{description:n,medium:r,articles:i}=(0,A.useMemo)(()=>le(e),[e]),a=(0,A.useMemo)(()=>K(e,t),[e,t]),[o,s]=(0,A.useState)(null),[c,l]=(0,A.useState)(0),u=i[c]??i[0];return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`button`,{type:`button`,className:`wl-info-btn`,"aria-label":`Info zu ${e}`,title:`Was bedeutet das?`,onClick:()=>s(`simple`),children:`i`}),i.length>0&&(0,j.jsx)(`button`,{type:`button`,className:`wl-info-btn`,"aria-label":`Forschung zu ${e}`,title:`Forschung & Formeln`,onClick:()=>{l(0),s(`expert`)},children:`🔬`}),o&&(0,j.jsxs)(J,{title:e,level:o,onLevelChange:s,onClose:()=>s(null),children:[o===`simple`&&(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{style:{margin:0,lineHeight:1.55},children:n}),(0,j.jsx)(`ol`,{className:`wl-scale-anchor-list`,children:a.map((e,t)=>(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{children:t+1}),` `,e]},t))})]}),o===`medium`&&(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`ol`,{className:`wl-scale-anchor-list`,children:a.map((e,t)=>(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{children:t+1}),` `,e]},t))}),(0,j.jsx)(`p`,{style:{margin:`10px 0 0`,lineHeight:1.55},children:r})]}),o===`expert`&&(u?(0,j.jsxs)(`div`,{children:[i.length>1&&(0,j.jsx)(`div`,{className:`wl-article-pick`,children:i.map((e,t)=>(0,j.jsx)(`button`,{type:`button`,className:t===c?`sel`:``,onClick:()=>l(t),children:e.shortTitle},e.id))}),(0,j.jsx)(ne,{article:u})]}):(0,j.jsx)(`p`,{style:{margin:0,lineHeight:1.55},children:n}))]})]})}var de=[`Ruhe`,`Sehr, sehr leicht`,`Leicht`,`Moderat`,`Eher hart`,`Hart`,`Hart–sehr hart`,`Sehr hart`,`Sehr hart+`,`Fast maximal`,`Maximal`],fe=`0 Ruhe · 1–2 Leicht · 3–4 Moderat · 5–6 Hart · 7–8 Sehr hart · 9–10 Maximal`,X=n.get(`srpe-subjective-load`);function pe(){let[e,t]=(0,A.useState)(null);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`button`,{type:`button`,className:`wl-info-btn`,"aria-label":`Info zu sRPE`,title:`Was bedeutet das?`,onClick:()=>t(`simple`),children:`i`}),(0,j.jsx)(`button`,{type:`button`,className:`wl-info-btn`,"aria-label":`Forschung zu sRPE`,title:`Forschung & Formeln`,onClick:()=>t(`expert`),children:`🔬`}),e&&(0,j.jsxs)(J,{title:`sRPE — Belastung der Einheit`,level:e,onLevelChange:t,onClose:()=>t(null),children:[e===`simple`&&(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{style:{margin:0,lineHeight:1.55},children:`Wie hart hat sich die gesamte Einheit für dich angefühlt? 0 = Ruhe, 10 = maximal.`}),(0,j.jsx)(`ol`,{className:`wl-scale-anchor-list`,start:0,children:de.map((e,t)=>(0,j.jsxs)(`li`,{value:t,children:[(0,j.jsx)(`strong`,{children:t}),` `,e]},t))})]}),e===`medium`&&(0,j.jsx)(`div`,{children:`Bewerte die GESAMTE Einheit, nicht nur den härtesten Moment — am besten ca. 20–30 Minuten nach Trainingsende, wenn die unmittelbare Erschöpfung abgeklungen ist.

0 Ruhe: kein Training, reine Regeneration.
1–2 Leicht: lockeres Auslaufen, reine Technikarbeit ohne Pulsanstieg.
3–4 Moderat: normales Skill-Training, Halbfeld-Übungen mit Pausen.
5–6 Hart: intensive Angriffs-/Verteidigungsübungen, Conditioning mit Sprints.
7–8 Sehr hart: Vollgas-Scrimmage, intensives Turnierspiel.
9–10 Maximal: mehrere enge Spiele am Stück, Belastung an deiner absoluten Grenze.`.split(`

`).map((e,t)=>(0,j.jsx)(`p`,{style:{margin:t===0?0:`10px 0 0`,lineHeight:1.55},children:e},t))}),e===`expert`&&(0,j.jsxs)(`div`,{children:[`Die sRPE-Methode (Session-RPE, Borg-CR-10-Skala, Foster et al. 2001) misst die subjektive Gesamtbelastung einer Einheit. Trainingsload (AU) = sRPE × Dauer in Minuten. Beispiel: RPE 7 × 90 Min = 630 AU. sRPE ist auch bei jugendlichen Athleten meta-analytisch abgesichert (Liu et al. 2023) und erfasst genau die Anteile, die Herzfrequenz-Gurte unterschätzen (Sprints, Sprünge, Kontakt).

Für Wochen-Trends nutzen wir EWMA (exponentiell gewichteter Durchschnitt, akut 7 Tage vs. chronisch 28 Tage) — sensibler für Lastsprünge als starre Wochenregeln. Die klassische 10-%-Regel („nie mehr als 10 % Steigerung pro Woche“) gilt inzwischen als widerlegt, und die ACWR-„Danger Zone“ (feste Cut-offs wie 0.8–1.3) ist statistisch umstritten (Impellizzeri et al. 2020) — deshalb gibt es bei uns keine harten Ampeln mit Verletzungsrisiko-Versprechen, sondern Trend-Hinweise relativ zu deiner eigenen Baseline.

Wichtig für valide Daten: ehrliche, konsistente Selbsteinschätzung ist wichtiger als Perfektion bei einzelnen Werten — Trends über mehrere Wochen zählen mehr als ein einzelner Tag.`.split(`

`).map((e,t)=>(0,j.jsx)(`p`,{style:{margin:t===0?0:`10px 0 0`,lineHeight:1.55},children:e},t)),X&&(0,j.jsxs)(`div`,{style:{marginTop:14,borderTop:`1px solid var(--ui-border, #30363d)`,paddingTop:10},children:[(0,j.jsxs)(`strong`,{style:{fontSize:`0.9rem`},children:[`Weiterlesen: `,X.title]}),(0,j.jsx)(`ul`,{style:{margin:`8px 0 0`,paddingLeft:18,display:`grid`,gap:4,fontSize:`0.85rem`},children:X.keyTakeaways.map(e=>(0,j.jsx)(`li`,{children:e},e))}),X.citations.map(e=>(0,j.jsx)(`p`,{style:{margin:`8px 0 0`,fontSize:`0.8rem`},children:(0,j.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer`,children:[e.label,` (`,e.source,`)`]})},e.url))]})]})]})]})}function me(){let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function Z(e){return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`}function he({v2:e}){let[t,n]=(0,A.useState)(``),[i,a]=(0,A.useState)(``);return(0,j.jsxs)(`div`,{className:`wl-shell`,children:[(0,j.jsx)(`div`,{className:`wl-head`,children:(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h1`,{children:`💚 Wellness`}),(0,j.jsx)(`div`,{className:`wl-sub`,children:e.stage===`otp`?`Code an ${e.email} gesendet`:`Anmeldung per E-Mail-Code`})]})}),(0,j.jsxs)(`div`,{className:`wl-card`,style:{display:`grid`,gap:10},children:[e.stage===`otp`?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`input`,{className:`wl-input wl-otp`,inputMode:`numeric`,autoFocus:!0,value:i,onChange:e=>a(e.target.value.replace(/\D/g,``).slice(0,6)),placeholder:`000000`}),(0,j.jsx)(`button`,{type:`button`,className:`wl-btn`,disabled:e.busy||i.length<6,onClick:()=>void e.confirmOtp(i),children:e.busy?`Prüfe …`:`Anmelden`})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`input`,{className:`wl-input`,type:`email`,autoFocus:!0,value:t,onChange:e=>n(e.target.value),placeholder:`name@mail.de`}),(0,j.jsx)(`button`,{type:`button`,className:`wl-btn`,disabled:e.busy||!t.trim(),onClick:()=>void e.requestOtp(t),children:e.busy?`Sende …`:`Code anfordern`})]}),e.error&&(0,j.jsx)(`div`,{className:`wl-error`,children:e.error})]}),(0,j.jsx)(`button`,{type:`button`,className:`wl-link`,onClick:r,children:`← Zurück zur Übersicht`})]})}function ge({v2:e}){let[t,n]=(0,A.useState)(e.claimToken??``),[r,i]=(0,A.useState)(!1);return(0,j.jsxs)(`div`,{className:`wl-shell`,children:[(0,j.jsx)(`div`,{className:`wl-head`,children:(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h1`,{children:`Account verknüpfen`}),(0,j.jsx)(`div`,{className:`wl-sub`,children:`Einladungscode vom Coach eingeben`})]})}),(0,j.jsxs)(`div`,{className:`wl-card`,style:{display:`grid`,gap:12},children:[(0,j.jsx)(`input`,{className:`wl-input`,value:t,onChange:e=>n(e.target.value),placeholder:`Einladungscode`}),(0,j.jsxs)(`label`,{style:{display:`flex`,gap:10,alignItems:`flex-start`,fontSize:`0.85rem`},children:[(0,j.jsx)(`input`,{type:`checkbox`,checked:r,onChange:e=>i(e.target.checked),style:{marginTop:3}}),(0,j.jsx)(`span`,{children:`Ich stimme der Verarbeitung der Wellness-/Trainingsdaten zu. Bei Spielern unter 16 bestätigen dies die Erziehungsberechtigten.`})]}),(0,j.jsx)(`button`,{type:`button`,className:`wl-btn`,disabled:e.busy||!t.trim()||!r,onClick:()=>void e.claim(t,r),children:e.busy?`Verknüpfe …`:`Verknüpfen`}),e.error&&(0,j.jsx)(`div`,{className:`wl-error`,children:e.error})]}),(0,j.jsx)(`button`,{type:`button`,className:`wl-link`,onClick:()=>void e.logout(),children:`Abmelden`})]})}function _e({home:e,date:t,busy:n,onSave:r,onCancel:i}){let a=e.dailyByDate[t]?.values??{},[o,s]=(0,A.useState)(a);return(0,j.jsxs)(`div`,{className:`wl-card`,children:[(0,j.jsxs)(`h3`,{children:[`Check-in · `,v(t)]}),e.questions.length===0&&(0,j.jsx)(`p`,{className:`wl-sub`,children:`Kein Fragenkatalog hinterlegt.`}),e.questions.map(e=>(0,j.jsxs)(`div`,{className:`wl-q`,children:[(0,j.jsxs)(`span`,{className:`wl-q-label`,children:[e.label,(0,j.jsx)(ue,{label:e.label,scale:e.scale})]}),(0,j.jsx)(`div`,{className:`wl-scale`,children:Array.from({length:e.scale},(e,t)=>String(t+1)).map(t=>(0,j.jsx)(`button`,{type:`button`,className:`wl-scale-btn${o[e.label]===t?` sel`:``}`,onClick:()=>s(n=>({...n,[e.label]:t})),children:t},t))}),(0,j.jsx)(Y,{text:K(e.label,e.scale).map((e,t)=>`${t+1} ${e}`).join(` · `)})]},e.id)),(0,j.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:6},children:[(0,j.jsx)(`button`,{type:`button`,className:`wl-btn`,disabled:n,onClick:()=>r(t,o),children:n?`Speichere …`:`Speichern`}),(0,j.jsx)(`button`,{type:`button`,className:`wl-btn ghost`,onClick:i,children:`Abbrechen`})]})]})}function Q({session:e,busy:t,initial:n,onSave:r,onCancel:i}){let[a,o]=(0,A.useState)(n);return(0,j.jsxs)(`div`,{className:`wl-card`,children:[(0,j.jsxs)(`h3`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[`sRPE · `,e.title||e.session_type,(0,j.jsx)(pe,{})]}),(0,j.jsxs)(`div`,{className:`wl-sub`,style:{marginBottom:10},children:[_(e.date),` `,v(e.date),` ·`,` `,Z(e.start_min)]}),(0,j.jsx)(`div`,{className:`wl-scale`,style:{gridAutoColumns:`1fr`},children:Array.from({length:11},(e,t)=>t).map(e=>(0,j.jsx)(`button`,{type:`button`,className:`wl-scale-btn${a===e?` sel`:``}`,onClick:()=>o(e),children:e},e))}),(0,j.jsx)(Y,{text:fe}),(0,j.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:12},children:[(0,j.jsx)(`button`,{type:`button`,className:`wl-btn`,disabled:t||a===null,onClick:()=>a!==null&&r(e.id,a,!0),children:t?`Speichere …`:`Speichern`}),(0,j.jsx)(`button`,{type:`button`,className:`wl-btn ghost`,onClick:i,children:`Abbrechen`})]})]})}function $({session:e,srpe:t,onOpen:n}){return(0,j.jsxs)(`button`,{type:`button`,className:`wl-row`,onClick:()=>n(e),children:[(0,j.jsxs)(`div`,{className:`wl-row-main`,children:[(0,j.jsx)(`div`,{className:`wl-row-title`,children:e.title||e.session_type}),(0,j.jsx)(`div`,{className:`wl-row-sub`,children:Z(e.start_min)})]}),(0,j.jsx)(`span`,{className:`wl-status ${t==null?`open`:`done`}`,children:t==null?`sRPE`:`✓ ${t}`})]})}function ve({v2:e,home:t,initialView:n=`home`}){let[r,i]=(0,A.useState)(null),[a,o]=(0,A.useState)(null),[s,c]=(0,A.useState)(n),l=me(),u=t.player.first_name||t.player.last_name,d=b(y(l,5),l),f=new Map;for(let e of t.sessions)f.set(e.date,[...f.get(e.date)??[],e]);let p=f.get(l)??[];return s===`athletik`?(0,j.jsx)(M,{player:t.player,onBack:()=>c(`home`)}):r?(0,j.jsxs)(`div`,{className:`wl-shell`,children:[(0,j.jsx)(_e,{home:t,date:r,busy:e.busy,onSave:(t,n)=>{e.saveDaily(t,n),i(null)},onCancel:()=>i(null)}),e.error&&(0,j.jsx)(`div`,{className:`wl-error`,children:e.error})]}):a?(0,j.jsxs)(`div`,{className:`wl-shell`,children:[(0,j.jsx)(Q,{session:a,busy:e.busy,initial:t.responseBySession[a.id]?.srpe??null,onSave:(t,n,r)=>{e.saveSrpe(t,n,r),o(null)},onCancel:()=>o(null)}),e.error&&(0,j.jsx)(`div`,{className:`wl-error`,children:e.error})]}):(0,j.jsxs)(`div`,{className:`wl-shell`,children:[(0,j.jsxs)(`div`,{className:`wl-head`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsxs)(`h1`,{children:[`Hi `,u,` 👋`]}),(0,j.jsx)(`div`,{className:`wl-sub`,children:t.week?`${t.week.label||`Woche`} · ${v(t.week.week_start)}`:`Keine aktive Woche`})]}),(0,j.jsx)(`button`,{type:`button`,className:`wl-btn ghost`,style:{width:`auto`},onClick:()=>void e.logout(),children:`Abmelden`})]}),(0,j.jsxs)(`div`,{className:`wl-card wl-daylist`,children:[(0,j.jsxs)(`h3`,{children:[`Heute · `,v(l)]}),(0,j.jsxs)(`button`,{type:`button`,className:`wl-row`,onClick:()=>i(l),children:[(0,j.jsx)(`div`,{className:`wl-row-main`,children:(0,j.jsx)(`div`,{className:`wl-row-title`,children:`Wellness Check-in`})}),(0,j.jsx)(`span`,{className:`wl-status ${t.dailyByDate[l]?`done`:`open`}`,children:t.dailyByDate[l]?`✓ erledigt`:`offen`})]}),p.map(e=>(0,j.jsx)($,{session:e,srpe:t.responseBySession[e.id]?.srpe,onOpen:o},e.id))]}),(0,j.jsxs)(`div`,{className:`wl-card wl-daylist`,children:[(0,j.jsx)(`h3`,{children:`Athletik`}),(0,j.jsxs)(`button`,{type:`button`,className:`wl-row`,onClick:()=>c(`athletik`),children:[(0,j.jsx)(`div`,{className:`wl-row-main`,children:(0,j.jsx)(`div`,{className:`wl-row-title`,children:`Meine Ziele & Tests`})}),(0,j.jsx)(`span`,{className:`wl-status open`,children:`ansehen →`})]})]}),(0,j.jsxs)(`div`,{className:`wl-card wl-daylist`,children:[(0,j.jsx)(`h3`,{children:`Science Lab`}),(0,j.jsxs)(`button`,{type:`button`,className:`wl-row`,onClick:g,children:[(0,j.jsx)(`div`,{className:`wl-row-main`,children:(0,j.jsx)(`div`,{className:`wl-row-title`,children:`Protein, Zucker, Kreatin, Schlaf & mehr lernen`})}),(0,j.jsx)(`span`,{className:`wl-status open`,children:`spielen →`})]})]}),(0,j.jsxs)(`div`,{className:`wl-card wl-daylist`,children:[(0,j.jsx)(`h3`,{children:`Letzte Tage`}),d.map(e=>{let n=f.get(e)??[],r=!!t.dailyByDate[e];return(0,j.jsxs)(`div`,{style:{display:`grid`,gap:6},children:[(0,j.jsxs)(`div`,{className:`wl-dayhead`,children:[_(e),` `,v(e)]}),(0,j.jsxs)(`button`,{type:`button`,className:`wl-row`,onClick:()=>i(e),children:[(0,j.jsx)(`div`,{className:`wl-row-main`,children:(0,j.jsx)(`div`,{className:`wl-row-title`,children:`Check-in`})}),(0,j.jsx)(`span`,{className:`wl-status ${r?`done`:`open`}`,children:r?`✓`:`offen`})]}),n.map(e=>(0,j.jsx)($,{session:e,srpe:t.responseBySession[e.id]?.srpe,onOpen:o},e.id))]},e)})]}),e.error&&(0,j.jsx)(`div`,{className:`wl-error`,children:e.error})]})}function ye({claimToken:e=null,initialView:t=`home`}){let n=ee(e);return(0,j.jsx)(`div`,{className:`wl-root`,children:n.stage===`unconfigured`?(0,j.jsx)(`div`,{className:`wl-shell`,children:(0,j.jsx)(`div`,{className:`wl-card`,children:`v2 ist auf diesem Gerät nicht konfiguriert.`})}):n.stage===`loading`?(0,j.jsx)(`div`,{className:`wl-shell`,children:(0,j.jsx)(`div`,{className:`wl-card`,children:`Lade …`})}):n.stage===`home`&&n.home?(0,j.jsx)(ve,{v2:n,home:n.home,initialView:t}):n.stage===`claim`?(0,j.jsx)(ge,{v2:n}):(0,j.jsx)(he,{v2:n})})}export{ye as default};