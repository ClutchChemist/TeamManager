function e(e){let[t,n]=(e??``).split(`:`).map(Number);return!Number.isFinite(t)||!Number.isFinite(n)?0:(t??0)*60+(n??0)}function t(e){return String(e).padStart(2,`0`)}function n(e){let t=String(e??``).trim();if(!/^\d{4}-\d{2}-\d{2}$/.test(t))return null;let n=new Date(`${t}T00:00:00`);return Number.isNaN(n.getTime())?null:n}function r(e){let r=n(e);return r?`${t(r.getDate())}.${t(r.getMonth()+1)}.${r.getFullYear()}`:``}function i(e,t=`de`){let r=n(e);if(!r)return``;let i=t===`en`?`en-GB`:`de-DE`;return new Intl.DateTimeFormat(i,{day:`2-digit`,month:`2-digit`,year:`2-digit`}).format(r)}function a(e){let t=n(e);return t?new Intl.DateTimeFormat(`de-DE`,{weekday:`short`}).format(t).replace(`.`,``):``}function o(e,t=`de`){let r=n(e);if(!r)return``;let i=t===`en`?`en-GB`:`de-DE`;return new Intl.DateTimeFormat(i,{weekday:`short`}).format(r).replace(`.`,``)}function s(e,n){let[r,i]=e.split(`:`).map(e=>parseInt(e,10)),a=r*60+i+n,o=Math.floor(a%1440/60),s=a%60;return`${t(o)}:${t(s)}`}function c(e){return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}function l(){return c(new Date)}function u(e,t){let r=n(e)??new Date;return r.setDate(r.getDate()+t),c(r)}function d(e,t){return Array.from({length:t},(n,r)=>u(e,r-(t-1)))}function f(e,t){return e.filter(e=>e!==t).reverse()}function p(e){let t=n(e)??new Date,r=(t.getDay()+6)%7;return t.setDate(t.getDate()-r),c(t)}function m(e){let t=String(e??``).trim().toLowerCase();return t.startsWith(`mo`)?0:t.startsWith(`di`)?1:t.startsWith(`mi`)?2:t.startsWith(`do`)?3:t.startsWith(`fr`)?4:t.startsWith(`sa`)?5:t.startsWith(`so`)?6:null}function h(e){let t=n(e);if(!t)return-1;let r=(t.getDay()+6)%7;t.setDate(t.getDate()-r+3);let i=new Date(t.getFullYear(),0,4),a=(i.getDay()+6)%7;i.setDate(i.getDate()-a+3);let o=t.getTime()-i.getTime();return 1+Math.round(o/6048e5)}var g={sourceVersion:`2025.1`,competitions:[{competition:`DBB`,defaultSeasonCutover:`08-01`,primaryAgeClasses:[`U20`,`U19`,`U18`,`U17`,`U16`,`U15`,`U14`,`U13`,`U12`,`U11`,`U10`,`U9`,`U8`],ageClassBaseMode:`FORMULA`,explicitSeasonTables:[{seasonStartYear:2025,baseYears:{U20:2006,U19:2007,U18:2008,U17:2009,U16:2010,U15:2011,U14:2012,U13:2013,U12:2014,U11:2015,U10:2016,U9:2017,U8:2018},sourceRef:`DBB Wichtige Hinweise 2025/26, Ziff. 3.1`}],dateOverrides:[],seasonRules:[],fallbackPolicy:{allowDBBPlayUpDefault:!0,markAsProvisionalWhenNoSeasonDoc:!1}},{competition:`WBV`,defaultSeasonCutover:`08-01`,primaryAgeClasses:[`U18`,`U17`,`U16`,`U15`,`U14`,`U13`,`U12`,`U11`,`U10`],ageClassBaseMode:`EXPLICIT_TABLE`,explicitSeasonTables:[{seasonStartYear:2025,baseYears:{U18:2008,U17:2009,U16:2010,U15:2011,U14:2012,U13:2013,U12:2014,U11:2015,U10:2016},sourceRef:`WBV Ausschreibung 2025/26, C.2.1`}],dateOverrides:[{from:`2025-06-14`,to:`2025-06-14`,ageClass:`U18`,mode:`EXACT_AUTO_YEARS`,autoYears:[2008,2009],notes:[`WBV Jugend-Qualifikation männlich/offen 1. Mannschaft`,`2. Mannschaft nur älterer Jahrgang ausgeschlossen -> effektiv nur 2009`],sourceRef:`WBV Quali 2025/26 männlich/offen`},{from:`2025-06-15`,to:`2025-06-15`,ageClass:`U16`,mode:`EXACT_AUTO_YEARS`,autoYears:[2010,2011],notes:[`WBV Jugend-Qualifikation männlich/offen 1. Mannschaft`,`2. Mannschaft nur älterer Jahrgang ausgeschlossen -> effektiv nur 2011`],sourceRef:`WBV Quali 2025/26 männlich/offen`}],seasonRules:[{ageClass:`U18`,ruleType:`OLDER_YEAR_LIMIT`,olderYearLimit:1,olderYearRequires:`NBBL_TA`,olderYearBirthOffset:-1,sourceRef:`WBV Ausschreibung 2025/26, C.2.3`},{ageClass:`U16`,ruleType:`OLDER_YEAR_LIMIT`,olderYearLimit:1,olderYearRequires:`JBBL_TA`,olderYearBirthOffset:-1,sourceRef:`WBV Ausschreibung 2025/26, C.2.3`}],fallbackPolicy:{allowDBBPlayUpDefault:!0,markAsProvisionalWhenNoSeasonDoc:!1}},{competition:`NBBL`,defaultSeasonCutover:`08-01`,primaryAgeClasses:[`U19`],ageClassBaseMode:`FORMULA`,explicitSeasonTables:[],dateOverrides:[{from:`2025-06-21`,to:`2025-06-29`,ageClass:`U19`,mode:`EXACT_RANGE`,range:{minBirthYear:2007,maxBirthYear:2012},notes:[`Gilt nur für NBBL-Qualifikation 2025/26`,`Qualifikation zählt zum Wettbewerb 2025/26`],sourceRef:`NBBL Quali 2025/26, Ziff. 2/4/9`}],seasonRules:[],fallbackPolicy:{allowDBBPlayUpDefault:!0,markAsProvisionalWhenNoSeasonDoc:!0}},{competition:`JBBL`,defaultSeasonCutover:`08-01`,primaryAgeClasses:[`U16`],ageClassBaseMode:`FORMULA`,explicitSeasonTables:[],dateOverrides:[],seasonRules:[],fallbackPolicy:{allowDBBPlayUpDefault:!0,markAsProvisionalWhenNoSeasonDoc:!0}}]},_=class extends Error{code;constructor(e){super(e),this.name=`EligibilityValidationError`,this.code=`invalidAgeClassForCompetition`}},v=`DBB`,y=[`U20`,`U19`,`U18`,`U17`,`U16`,`U15`,`U14`,`U13`,`U12`,`U11`,`U10`,`U9`,`U8`],b={20:{autoMaxTarget:20,conditionalMaxTarget:20},19:{autoMaxTarget:20,conditionalMaxTarget:20},18:{autoMaxTarget:20,conditionalMaxTarget:20},17:{autoMaxTarget:20,conditionalMaxTarget:20},16:{autoMaxTarget:20,conditionalMaxTarget:20},15:{autoMaxTarget:20,conditionalMaxTarget:20},14:{autoMaxTarget:17,conditionalMaxTarget:19},13:{autoMaxTarget:16,conditionalMaxTarget:18},12:{autoMaxTarget:15,conditionalMaxTarget:16},11:{autoMaxTarget:14,conditionalMaxTarget:14},10:{autoMaxTarget:13,conditionalMaxTarget:13},9:{autoMaxTarget:12,conditionalMaxTarget:12},8:{autoMaxTarget:12,conditionalMaxTarget:12}};function x(e){return typeof e==`string`?e:e.toISOString().slice(0,10)}function S(e){let t=String(e??``).trim().toUpperCase().match(/^U(\d{1,2})$/);if(!t)return null;let n=Number.parseInt(t[1],10);return Number.isFinite(n)?n:null}function C(e,t){let n=Number.parseInt(e.slice(0,4),10);return e.slice(5,10)>=t?n:n-1}function w(e){return g.competitions.find(t=>t.competition===e)??g.competitions.find(e=>e.competition===v)}function T(e,t,n){return e.find(e=>e.ageClass.toUpperCase()===n.toUpperCase()&&t>=e.from&&t<=e.to)??null}function E(e,t){if(e>t)return`none`;let n=b[e];return n?t<=n.autoMaxTarget?`auto`:t<=n.conditionalMaxTarget?`conditional`:`none`:e===t?`auto`:`none`}function D(e){let{competition:t,ageClass:n,seasonStartYear:r,override:i}=e,a=i.mode===`EXACT_AUTO_YEARS`?[...i.autoYears??[]]:Array.from({length:(i.range?.maxBirthYear??0)-(i.range?.minBirthYear??0)+1},(e,t)=>(i.range?.minBirthYear??0)+t);return{competition:t,ageClass:n,seasonStartYear:r,phase:`override`,coreYears:a.length>0?[Math.min(...a)]:[],autoEligibleYears:Array.from(new Set(a)).sort((e,t)=>e-t),conditionalEligibleYears:[],exceptions:[],notes:i.notes??[],provisional:!1,resolvedBy:`override`,sourceRef:i.sourceRef,sourceVersion:g.sourceVersion}}function O(e,t,n){let r=e.explicitSeasonTables.find(e=>e.seasonStartYear===t);if(r?.baseYears?.[n]!==void 0)return r.baseYears[n];let i=S(n);return i?t-(i-1):null}function k(e){let t=x(e.referenceDate),n=w(e.competition),r=String(e.ageClass??``).toUpperCase();if(!n.primaryAgeClasses.includes(r))throw new _(`invalidAgeClassForCompetition: ${n.competition}/${r}`);let i=C(t,n.defaultSeasonCutover),a=T(n.dateOverrides,t,r);if(a)return D({competition:n.competition,ageClass:r,seasonStartYear:i,override:a});let o=O(n,i,r);if(o===null)return{competition:n.competition,ageClass:r,seasonStartYear:i,phase:`regular`,coreYears:[],autoEligibleYears:[],conditionalEligibleYears:[],exceptions:[],notes:[`No base year configured for ${r}`],provisional:!0,resolvedBy:`dbbFallback`,sourceRef:void 0,sourceVersion:g.sourceVersion};let s=S(r)??0,c=new Set,l=new Set;for(let e of y){let t=S(e);if(!t)continue;let n=i-(t-1),r=E(t,s);r===`auto`&&c.add(n),r===`conditional`&&l.add(n)}let u={competition:n.competition,ageClass:r,seasonStartYear:i,phase:`regular`,coreYears:[o],autoEligibleYears:Array.from(c).sort((e,t)=>e-t),conditionalEligibleYears:Array.from(l).sort((e,t)=>e-t),exceptions:[],notes:[],provisional:!1,resolvedBy:`dbbFallback`,sourceRef:void 0,sourceVersion:g.sourceVersion},d=n.explicitSeasonTables.find(e=>e.seasonStartYear===i);d?.sourceRef&&(u.sourceRef=d.sourceRef,u.resolvedBy=`seasonRule`);for(let e of n.seasonRules.filter(e=>e.ageClass.toUpperCase()===r)){if(e.ruleType===`OLDER_YEAR_LIMIT`&&typeof e.olderYearLimit==`number`){let t=typeof e.olderYearBirthOffset==`number`?o+e.olderYearBirthOffset:void 0,n=`olderYearLimit=${e.olderYearLimit}`,r=t===void 0?``:` year=${t}`,i=e.olderYearRequires?` requires=${e.olderYearRequires}`:``;u.exceptions.push(`${n}${r}${i}`),typeof e.olderYearBirthOffset==`number`&&(u.conditionalEligibleYears=Array.from(new Set([...u.conditionalEligibleYears,o+e.olderYearBirthOffset])).sort((e,t)=>e-t))}e.ruleType===`CUSTOM_NOTE`&&e.note&&u.notes.push(e.note),e.sourceRef&&(u.notes.push(`source:${e.sourceRef}`),u.sourceRef=e.sourceRef,u.resolvedBy=`seasonRule`)}return!n.explicitSeasonTables.some(e=>e.seasonStartYear===i)&&n.fallbackPolicy.markAsProvisionalWhenNoSeasonDoc&&(u.provisional=!0,u.notes.push(`provisional:no_explicit_season_doc`)),u}function A(e,t=`DBB`){let n=[`U19`,`U18`,`U17`,`U16`].map(n=>{try{return k({referenceDate:e,competition:t,ageClass:n}).coreYears[0]}catch{return}}).filter(e=>Number.isFinite(e));return Array.from(new Set(n)).sort((e,t)=>e-t).map(String)}var j=A(new Date,`DBB`),M=[...j.map((e,t)=>({id:e,label:e,order:t})),{id:`Herren`,label:`1RLH`,order:j.length},{id:`TBD`,label:`TBD`,order:j.length+1}];new Map(M.map(e=>[e.id,e.order]));var ee=[...j,`Herren`,`TBD`];function N(e){let t=String(e??``).trim();if(!t)return``;let n=t.toUpperCase();return n===`HERREN`||n===`1RLH`?`Herren`:t}function P(e){return e===`Herren`?`1RLH`:e}function F(e){if(e.birthDate&&e.birthDate.length>=4){let t=parseInt(e.birthDate.slice(0,4),10);if(Number.isFinite(t))return t}return typeof e.birthYear==`number`&&Number.isFinite(e.birthYear)?e.birthYear:null}function I(e){if(e.id===`TBD`||(e.name??``).toLowerCase()===`tbd`)return`TBD`;let t=(e.defaultTeams??[]).map(e=>String(e).toUpperCase()),n=F(e);if(n!==null){let t=String(n);if(j.includes(t)&&!e.yearGroupDeselected)return t}let r=N(e.group);if(r)return r;if(t.includes(`1RLH`)||t.includes(`HOL`))return`Herren`;let i=t.find(e=>e&&e!==`TBD`);if(i){let e=N(i);if(e)return e}return`TBD`}var te=[`NBBL`,`U18`,`1H`,`2H`,`3H`,`HOL`,`1RLH`,`Herren`];function ne(e){let t=te.indexOf(e);return t>=0?t:e===`TBD`?999:te.length}function re(e){if(e.id===`TBD`||(e.name??``).toLowerCase()===`tbd`)return`TBD`;let t=(e.herrenTeam??``).trim();if(t)return t;let n=(e.defaultTeams??[]).map(e=>String(e).toUpperCase());return n.includes(`NBBL`)?`NBBL`:n.includes(`U18`)?`U18`:e.primarySeniorTeam?e.primarySeniorTeam:n.find(e=>e&&e!==`TBD`)||`TBD`}function ie(e){return e?e.length===8?`#${e.slice(2)}`:e.length===6?`#${e}`:null:null}function ae(e){let t=String(e??``).trim().replace(`#`,``);if(!/^[0-9a-fA-F]{6}$/.test(t))return null;let n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),i=parseInt(t.slice(4,6),16);return[n,r,i].some(e=>Number.isNaN(e))?null:{r:n,g:r,b:i}}function L(e){let t=ae(e);if(!t)return`#111`;let{r:n,g:r,b:i}=t;return(.299*n+.587*r+.114*i)/255>.6?`#111`:`#fff`}function oe(e){let t=String(e??``).trim().toUpperCase();return t?t===`RLH`?`1RLH`:t:``}function se(e){let t=e.map(e=>oe(e));return t.includes(`NBBL`)?`NBBL`:t.includes(`JBBL`)?`JBBL`:t.some(e=>e===`U18`||e===`HOL`||e===`1RLH`)?`DBB`:null}function ce(e){return e.isMorningSession===!0&&e.sessionType!==`game`&&e.day!==`Sa`&&e.day!==`So`}function le(e){return e.filter(ce)}function ue(e){return e.filter(e=>!ce(e))}function de(e){let t=new Map;for(let n of e){if(n.excludeFromRoster)continue;let e=t.get(n.date)??new Set;for(let t of n.participants??[])e.add(t);t.set(n.date,e)}return t}function fe(e){let t=new Map;for(let n of e){let e=t.get(n.date)??new Set;e.add(n.playerId),t.set(n.date,e)}return t}function pe(e){let{sessions:t,dailyWellness:n,players:r,dates:i}=e,a=new Map(r.map(e=>[e.id,e])),o=de(t),s=fe(n),c=[];for(let e of i){let t=o.get(e);if(!t||t.size===0)continue;let n=s.get(e)??new Set,r=[...t].map(e=>a.get(e)).filter(e=>!!e),i=r.filter(e=>n.has(e.id)),l=r.filter(e=>!n.has(e.id));c.push({date:e,scheduled:r,submitted:i,missing:l})}return c}var R={gelb:{bg:`#fef08a`,symbol:`●`,name:`Gelb`},blau:{bg:`#bfdbfe`,symbol:`◆`,name:`Blau`},gruen:{bg:`#bbf7d0`,symbol:`▲`,name:`Grün`},rosa:{bg:`#fbcfe8`,symbol:`■`,name:`Rosa`}},me=Object.keys(R);function he(e,t,n=[t.id]){return e.scope===`all`?!0:e.scope===`games`?U(t):n.some(t=>e.scope.includes(t))}function ge(e,t,n,r){return(e??[]).filter(e=>e.playerIds.includes(n)&&he(e,t,r))}function z(e){return e.length===0?``:`<span aria-hidden="true" style="font-size:0.85em; margin-right:3px;">${e.map(e=>R[e.color].symbol).join(``)}</span>`}function B(e){return e.length===0?``:`<div style="margin-top:6px; font-size:10px; color:#222;"><b style="margin-right:8px;">Markierungen:</b>${e.map(e=>{let t=R[e.color];return`<span style="display:inline-flex; align-items:center; gap:4px; margin-right:14px;"><span style="display:inline-block; padding:0 5px; border:1px solid #999; background:${t.bg}; -webkit-print-color-adjust:exact; print-color-adjust:exact;">${t.symbol}</span>${V(e.label)}</span>`}).join(``)}</div>`}function _e(e,t){let n=e.map((e,t)=>t>0?`<div class="v3-page-break"></div>${e.html}`:e.html).join(``);return`<html><head><title>${V(t)}</title><style>
      * { box-sizing: border-box; }
      @media print { .v3-page-break { page-break-before: always; } }
      body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #fff; color: #000; }
    </style></head><body>${n}</body></html>`}function V(e){return e?e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`):``}function H(e){let t=new Date(e);return isNaN(t.getTime())?e:`${String(t.getDate()).padStart(2,`0`)}-${[`Jan`,`Feb`,`Mrz`,`Apr`,`Mai`,`Jun`,`Jul`,`Aug`,`Sep`,`Okt`,`Nov`,`Dez`][t.getMonth()]??``}`}function U(e){if(e.sessionType===`game`)return!0;let t=e.info||``;return t.includes(`vs`)||t.includes(`@`)}function W(e,t){if(e.id===`TBD`||String(e.name??``).trim().toUpperCase()===`TBD`)return``;let n=String(t??``).trim().toUpperCase();return((e.lizenzen??[]).find(e=>String(e.typ??``).trim().toUpperCase()===n)?.tna??``).trim()}function G(e,t){let n=t?.locations||{},r=t?.custom||{};return n?.[e]?.address?n[e].address:e===`BSH`?t?.bsh||``:e===`SHP`?t?.shp||``:e===`Seminarraum`?t?.seminarraum||``:r?.[e]||``}function ve(e,t){let n=t?.definitions||{},r=Array.from(new Set(e.map(e=>(e.location||``).trim()).filter(e=>!!(e&&e!==`TBD`)))).sort((e,t)=>e.localeCompare(t,`de`));if(r.length===0)return``;let i=r.map(e=>{let r=((n[e]??{abbr:e,name:e,hallNo:``}).abbr||e).trim(),i=G(e,t).trim();return!r||!i?null:{abbr:r,address:i}}).filter(e=>!!e);return i.length===0?``:`
    <div style="display:flex; flex-wrap:wrap; row-gap:2px; column-gap:0; align-items:baseline; font-size:8px; line-height:1.35; color:#374151;">
      ${i.map((e,t)=>`<span style="white-space:nowrap; display:inline-block;">${t>0?`<span style="font-weight:900;"> | </span>`:``}<span style="font-weight:900;">${V(e.abbr)}</span> - ${V(e.address)}</span>`).join(``)}
    </div>
  `}function K(e){let{title:t,clubName:n,logoUrl:r,kwText:i}=e;return`
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; gap: 12px;">
      <!-- LINKS: LOGO -->
      <div style="flex: 1; display: flex; align-items: center;">
        ${r?`<img src="${V(r)}" alt="Logo" style="height: 48px; object-fit: contain;" />`:`<div style="width: 48px; height: 48px; background: #eee;"></div>`}
      </div>

      <!-- MITTE: TITEL & KW -->
      <div style="flex: 1; text-align: center; display: flex; flex-direction: column; justify-content: center;">
        <div style="font-size: 18px; font-weight: 900;">${V(t)}</div>
        <div style="font-size: 14px; font-weight: 800;">- ${V(i||``)} -</div>
      </div>

      <!-- RECHTS: VEREIN -->
      <div style="flex: 1; text-align: right; display: flex; flex-direction: column; align-items: flex-end;">
        <div style="font-size: 14px; font-weight: 900; margin-bottom: 2px;">${V(n)}</div>
      </div>
    </div>
  `}function q(e){let{clubName:t,locale:n,locationsFootnoteHtml:r}=e,i=n===`de`?`Basketballtraining`:`Basketball Training`,a=n===`de`?`Wochenplanung`:`Weekly Plan`;return`
    <div class="print-footer" style="margin-top: 14px; padding-top: 8px; border-top: 1px solid #ddd; color: #666;">
      ${r?`<div style="margin-bottom:6px;">${r}</div>`:``}
      <div style="font-size: 11px;">
        ${V(t)} &middot; ${i} &middot; ${a}
      </div>
    </div>
  `}function J(){return`border: 1px solid #ccc; padding: 8px; background: #f5f5f5; text-align: left; font-weight: bold;`}function Y(e){return`border: 1px solid #ccc; padding: 8px;${e?` background:${e}; -webkit-print-color-adjust:exact; print-color-adjust:exact;`:``}`}function X(e){let t=e.firstName?.trim(),n=e.lastName?.trim();if(t&&n)return{first:t,last:n};let r=(e.name??``).trim().split(/\s+/);return r.length>=2?{first:r[0],last:r[r.length-1]}:{first:e.name??``,last:``}}function Z(e,t){let n=t?.get(e.id);if(n)return n;let{first:r,last:i}=X(e);return i?`${r} ${i.charAt(0)}`:r}function ye(e,t=!1){let n=new Map;for(let t of e){let{first:e}=X(t),r=e.toLocaleLowerCase(`de`),i=n.get(r);i?i.push(t):n.set(r,[t])}let r=new Map;for(let e of n.values())for(let n of e){let{first:i,last:a}=X(n);if(!a){r.set(n.id,i);continue}let o=1,s=t=>e.some(e=>{if(e.id===n.id)return!1;let r=X(e).last;return r?r.slice(0,t).toLocaleLowerCase(`de`)===a.slice(0,t).toLocaleLowerCase(`de`):!1});for(;o<a.length&&s(o);)o++;r.set(n.id,`${i} ${a.slice(0,o)}${t?`.`:``}`)}return r}function be(e){return(e.teams??[]).join(`/`)||e.info||e.title||``}function xe(e){return`${(e.day??``).slice(0,2)}-${be(e)}`}var Se={Mo:`Montag`,Di:`Dienstag`,Mi:`Mittwoch`,Do:`Donnerstag`,Fr:`Freitag`,Sa:`Samstag`,So:`Sonntag`};function Ce(e){let t=e.map(e=>e.trim()).filter(Boolean);if(t.length===0)return``;let n=t.map(e=>e.split(/\s+/)),r=n[0].length;for(let e of n.slice(1)){let t=0;for(;t<r&&t<e.length&&e[t]===n[0][t];)t++;r=Math.min(r,t)}return n[0].slice(0,r).join(` `).trim()||t[0]}var Q=new Set([`strength`,`athletic`,`individual`]);function we(e){let t=[],n=new Set;for(let r=0;r<e.length;r++){if(n.has(r))continue;let i=e[r];if(!Q.has(i.sessionType)){t.push(i);continue}let a=[...i.participants??[]].sort().join(`,`),o=[i];if(a)for(let t=r+1;t<e.length;t++){if(n.has(t))continue;let r=e[t];r.date===i.date&&Q.has(r.sessionType)&&[...r.participants??[]].sort().join(`,`)===a&&(o.push(r),n.add(t))}t.push(o.length>1?{...o[0],info:Ce(o.map(e=>e.info||e.title||``))}:i)}return t}var Te={excused:{symbol:`○`,color:`#b45309`,label:`entschuldigt`},absent:{symbol:`✕`,color:`#b91c1c`,label:`abwesend`},other:{symbol:`△`,color:`#525252`,label:`sonstiges`}};function Ee(e){return!!e&&e!==`planned`&&e!==`confirmed`}function De(e){let t=Te[e]??{symbol:`•`,color:`#525252`,label:e};return`<span style="margin-left:3px; font-weight:900; color:${t.color};" aria-hidden="true">${t.symbol}</span>`}function Oe(e){return e.length===0?``:`<div style="margin-top:5px; font-size:8px; line-height:1.5; color:#374151;">${e.map(e=>{let t=e.note?` – ${V(e.note)}`:``;return`<span style="white-space:nowrap; display:inline-block; margin-right:10px;"><span style="font-weight:900;">${V(e.header)}</span> ${V(e.name)}: <em>${V(e.label)}</em>${t}</span>`}).join(``)}</div>`}var $=ee;function ke(e){if(!e)return $.length;let t=$.indexOf(e);return t===-1?$.length:t}function Ae(e){return[...e].sort((e,t)=>{let n=ke(I(e)),r=ke(I(t));return n===r?(e.name??``).localeCompare(t.name??``,`de`):n-r})}var je=1.05;function Me(e){let{sessions:t,players:n,groupColors:r,groupTextColors:i={},compactLevel:a=0,showAbsences:o=!0,markings:s,usedMarkings:c,shortNames:l=!1,scale:u=1}=e;if(t.length===0)return``;let d=we(t),f=Math.min(u,je),p=(a>=2?9:a===1?10:11)*f,m=(a>=2?9:a===1?10:11)*f,h=(a>=2?7:a===1?8:9)*f,g=(a>=2?1:a===1?2:3)*u,_=a>=2?4:a===1?5:7,v=(a>=2?10:a===1?11:12)*f,y=a>=2?10:a===1?11:12,b=a>=2?3:4,x=new Map(n.map(e=>[e.id,e])),S=ye(n,l),C=e=>[...e.participants??[]].sort().join(`,`),w=d.map(e=>{let n=(e.participants??[]).map(e=>x.get(e)).filter(e=>!!e);return{session:e,ids:t.filter(t=>t.id===e.id||t.date===e.date&&Q.has(t.sessionType)&&Q.has(e.sessionType)&&C(t)===C(e)).map(e=>e.id),players:Ae(n)}}),T=Math.max(0,...w.map(e=>e.players.length)),E=e=>e>0&&w[e].session.date!==w[e-1].session.date?`border-left: 3px solid #888;`:``,D=[];for(let e of w){let t=D[D.length-1];t&&t.date===e.session.date?t.span++:D.push({span:1,day:e.session.day??``,date:e.session.date})}let O=D.map(e=>{let t=Se[e.day]??e.day;return`<th colspan="${e.span}" style="border:1px solid #999; padding:${g+1}px ${_}px; background:#e2e2e2; font-size:${p}px; font-weight:900; text-align:center;">${V(t)}</th>`}).join(``),k=w.map((e,t)=>{let n=be(e.session);return`<th style="border:1px solid #bbb; padding:${g+2}px ${_}px; background:#f0f0f0; font-size:${p}px; font-weight:900; white-space:${u>1.05?`normal`:`nowrap`}; text-align:left; ${E(t)}">${V(n)}</th>`}).join(``),A=[],j=[];for(let e=0;e<T;e++){let t=w.map((t,n)=>{let a=t.players[e];if(!a)return`<td style="border:1px solid #ddd; padding:${g}px ${_}px; height:${v}px; ${E(n)}"></td>`;let l=I(a),u=ge(s,t.session,a.id,t.ids);u.forEach(e=>c?.add(e));let d=u.length?R[u[0].color].bg:ie(a.yearColor)??r[l]??`#eee`,f=u.length?`#111`:a.yearColor?L(d):i[l]||L(d),p=Z(a,S),x=f===`#fff`?`rgba(255,255,255,0.82)`:`rgba(0,0,0,0.62)`,C=t.session.participantStatuses?.[a.id],w=o&&Ee(C?.status),T=w&&C?De(C.status):``;if(w&&C){let e=Te[C.status];A.push({header:xe(t.session),name:p,label:e?.label??C.status,note:C.comment?.trim()||C.otherReason?.trim()||void 0})}return`<td style="border:1px solid #ddd; padding:${g}px ${_}px; background:${V(d)}; color:${V(f)}; font-size:${m}px; white-space:nowrap; line-height:1.1; height:${v}px; -webkit-print-color-adjust:exact; print-color-adjust:exact; forced-color-adjust:none; ${E(n)}"><span style="display:inline-block; min-width:${y}px; margin-right:${b}px; font-size:${h}px; font-weight:800; color:${x}; text-align:right;">${e+1}</span>${z(u)}${V(p)}${T}</td>`}).join(``);j.push(`<tr>${t}</tr>`)}return`
    <table style="border-collapse:collapse; font-size:11px; width:100%;">
      <thead><tr>${O}</tr><tr>${k}</tr></thead>
      <tbody>${j.join(``)}</tbody>
    </table>
    ${Oe(A)}
  `}function Ne(e){let{sessions:t,clubName:n,locale:r,locations:i,logoUrl:a,kwText:o,compactLevel:s=0,title:c,highlightTimes:l,scale:u=1}=e,d=u>1.05,f=r===`de`?{title:`Trainingswoche`,date:`Datum`,day:`Tag`,teams:`Teams`,time:`Zeit`,loc:`Ort`,info:`Info`}:{title:`Training week`,date:`Date`,day:`Day`,teams:`Teams`,time:`Time`,loc:`Location`,info:`Info`},p=ve(t,i),m=(s>=2?8:s===1?8.5:9)*Math.min(u,1.5),h=(s>=2?2:3)*u,g=(s>=2?4:5)*u,_=t.map((e,t,n)=>{let r=U(e),i=n[t-1],a=i?i.date===e.date:!1,o=a?`border-top: 1px solid #ddd;`:`border-top: ${d?3:2}px solid ${d?`#555`:`#aaa`};`,s=`border: 1px solid #ccc; padding: ${h}px ${g}px; font-size: ${m}px; overflow: hidden; text-overflow: ellipsis; line-height:1.15;`,c=e.rowColor?`background: ${V(e.rowColor)};`:r?`background: #F59E0B;`:``,u=`${s} white-space: nowrap; ${d?`font-weight: 800;`:``} ${o}`,f=`${s} white-space: normal; overflow-wrap: anywhere; word-break: break-word; ${c} color: #111; ${o}`,p=`${s} white-space: normal; overflow-wrap: anywhere; word-break: break-word; text-align: left; ${c} color: #111; ${o}`;return`
        <tr>
          <td style="${u}">${a?``:H(e.date)}</td>
          <td style="${u}">${a?``:V(e.day)}</td>
          <td style="${f}">${V(e.teams.join(`, `))}</td>
          <td style="${f}${d?` font-weight: 800; white-space: nowrap;`:``}${l?.sessionIds.includes(e.id)?` background: ${V(l.color)}; -webkit-print-color-adjust:exact; print-color-adjust:exact;`:``}">${V(e.time)}</td>
          <td style="${f}">${V(e.location)}</td>
          <td style="${p}">${V(e.info||``)}</td>
        </tr>
      `}).join(``),v=`border: 1px solid ${d?`#222`:`#ccc`}; padding: ${h+1}px ${g}px; background: ${d?`#222; color: #fff`:`#f5f5f5`}; -webkit-print-color-adjust:exact; print-color-adjust:exact; font-size: ${m}px; font-weight: bold; white-space: nowrap; overflow: hidden;`;return`
    <div class="page">
      ${K({title:c??f.title,clubName:n,logoUrl:a,kwText:o})}
      <table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
        <colgroup>
          ${(d?[9,6,27,13,19,26]:[10,10,10,10,10,50]).map(e=>`<col style="width: ${e}%;" />`).join(``)}
        </colgroup>
        <thead>
          <tr>
            <th style="${v}">${f.date}</th>
            <th style="${v}">${f.day}</th>
            <th style="${v}">${f.teams}</th>
            <th style="${v}">${f.time}</th>
            <th style="${v}">${f.loc}</th>
            <th style="${v} text-align: left; white-space: normal;">${f.info}</th>
          </tr>
        </thead>
        <tbody>${_}</tbody>
      </table>
      ${q({clubName:n,locale:r,locationsFootnoteHtml:p})}
    </div>
  `}function Pe(e){let t=1290/((e.compactLevel>=2?.88:1)*(130+15.7*e.scheduleRows+40+16*e.trainingMaxRows+(e.hasGames?50+16*e.gameMaxRows:0)));return Math.max(1,Math.min(Fe,Math.round(t*20)/20))}var Fe=2.4;function Ie(e){let{sessions:t,players:n,clubName:r,locale:i,locations:a,logoUrl:o,shortNames:s,highlightTimes:c,groupColors:l={},groupTextColors:u={},kwText:d,pageTitle:f,rosterTrainingLabel:p,rosterGamesLabel:m,showAbsences:h=!0,markings:g}=e,_=new Set,v=t,y=v.filter(e=>!e.excludeFromRoster),b=e=>U(e)||/^(sa|so)/i.test(e.day||``),x=y.filter(e=>!b(e)),S=y.filter(e=>b(e)),C=Math.max(0,...x.map(e=>(e.participants??[]).length)),w=Math.max(0,...S.map(e=>(e.participants??[]).length)),T=x.length+S.length,E=Math.max(C,w)+Math.ceil(T/2),D=E>24?2:+(E>17),O=Pe({compactLevel:D,scheduleRows:v.length,trainingMaxRows:C,gameMaxRows:w,hasGames:S.length>0}),k=Ne({sessions:v,clubName:r,locale:i,locations:a,logoUrl:o,kwText:d,compactLevel:D,title:f,highlightTimes:c,scale:O}),A=ve(v,a),j=k.replace(/^\s*<div class="page">/,``).replace(/<\/div>\s*$/,``).replace(/\s*<div class="print-footer"[\s\S]*?<\/div>\s*$/,``),M=i===`de`?{rosterTitle:`Kader-Listen`,trainingMoFr:`Training (Mo-Fr)`,gamesWeekends:`Spiele / Weekend`}:{rosterTitle:`Roster lists`,trainingMoFr:`Practice (Mon-Fri)`,gamesWeekends:`Games / Weekend`},ee=Me({sessions:x,players:n,groupColors:l,groupTextColors:u,compactLevel:D,showAbsences:h,markings:g,usedMarkings:_,shortNames:s,scale:O}),N=Me({sessions:S,players:n,groupColors:l,groupTextColors:u,compactLevel:D,showAbsences:h,markings:g,usedMarkings:_,shortNames:s,scale:O}),P=(D>=2?11:D===1?12:13)*Math.min(O,1.3),F=(D>=2?8:14)*O,I=(D>=2?8:14)*O;return`
    <div class="page">
      ${j}
      ${`
    <div style="margin-top:${F}px; break-inside:avoid; page-break-inside:avoid;">
      <div style="font-weight:900; font-size:${P}px; margin-bottom:${D>=2?4:8}px;">${V(M.rosterTitle)} &middot; ${V(p??M.trainingMoFr)}:</div>
      ${ee||`<div style="font-size:11px; color:#666;">Keine Termine</div>`}
    </div>
    ${S.length>0?`
    <div style="margin-top:${I}px; padding-top:${I}px; border-top: 2px dashed #eee; break-inside:avoid; page-break-inside:avoid;">
      <div style="font-weight:900; font-size:${P}px; margin-bottom:${D>=2?4:8}px;">${V(M.rosterTitle)} &middot; ${V(m??M.gamesWeekends)}:</div>
      ${N}
    </div>
    `:``}
  `}
      ${B((g??[]).filter(e=>_.has(e)))}
      ${q({clubName:r,locale:i,locationsFootnoteHtml:A})}
    </div>
  `}function Le(e){let{session:t,players:n,coaches:r,clubName:i,locale:a,locations:o,logoUrl:s,markings:c,shortNames:l=!1}=e,u=new Set,d=t.teams.join(` - `),f=t.info||``,p=String(t.location??``).trim(),m=`${p} | ${G(p,o).trim()||`-`}`,h=new Map(n.map(e=>[e.id,e])),g=(t.participants??[]).map(e=>h.get(e)).filter(e=>!!e),_=t.teams[0]||``,v=g.map(e=>({player:e,jersey:e.jerseyByTeam?.[_]??999})).sort((e,t)=>e.jersey-t.jersey).map(e=>e.player),y=[];for(let e=0;e<15;e++)y.push(v[e]||null);let b=y.map((e,n)=>{let r=e?.firstName?.trim(),i=e?.lastName?.trim(),a=e?.name?.trim()??``,o=a.split(/\s+/),s=r||(o.length>1?o[0]:``),d=i||(o.length>1?o.slice(1).join(` `):a),f=l&&d?`${d.charAt(0)}.`:d,p=se(t.teams??[]),m=e?p?W(e,p):W(e,`DBB`)||W(e,`NBBL`)||W(e,`JBBL`):``,h=e?e.id===`TBD`?``:e.isLocalPlayer?`LP`:`-`:``,g=e?.jerseyByTeam?.[_]??``,v=e?ge(c,t,e.id):[];v.forEach(e=>u.add(e));let y=v.length?R[v[0].color].bg:void 0;return`
        <tr>
          <td style="${Y(y)} text-align:center; font-size:10px; color:#555; width:22px;">${n+1}</td>
          <td style="${Y(y)} text-align:center; width:44px;">${V(String(g))}</td>
          <td style="${Y(y)}">${z(v)}${V(f)}</td>
          <td style="${Y(y)}">${V(s)}</td>
          <td style="${Y(y)} width:120px;">${V(m)}</td>
          <td style="${Y(y)} text-align:center; width:42px;">${V(h)}</td>
          <td style="${Y(y)} text-align:center; width:54px;"></td>
          <td style="${Y(y)} width:170px;"></td>
        </tr>`}).join(``),x=r.slice().sort((e,t)=>`${e.role} ${e.name}`.localeCompare(`${t.role} ${t.name}`,a)),S=``;for(let e of x)S+=`
      <tr>
        <td style="${Y()}">${V(e.name)}</td>
        <td style="${Y()}">${V(e.license||``)}</td>
      </tr>
    `;return`
    <div class="page">
      ${K({title:`Spielbogen: ${d}`,clubName:i,logoUrl:s})}
      
      <div style="margin-bottom: 16px;">
        <strong>Spiel:</strong> ${V(t.date)} - ${V(t.day)} - ${V(t.time)}<br/>
        <strong>Ort:</strong> ${V(m)}<br/>
        <strong>Gegner:</strong> ${V(f)}
      </div>

      <h3 style="margin-top: 24px; margin-bottom: 8px;">Spieler (15 Plaetze)</h3>
      <table>
        <thead>
          <tr>
            <th style="${J()} width:22px; text-align:center; font-size:10px;">#</th>
            <th style="${J()} width:44px; text-align:center;">Trikot</th>
            <th style="${J()}">Nachname</th>
            <th style="${J()}">Vorname</th>
            <th style="${J()} width:120px;">TA-Nr.</th>
            <th style="${J()} width:42px; text-align:center;">LP</th>
            <th style="${J()} width:54px; text-align:center;">Aktiv</th>
            <th style="${J()} width:170px;">Notizen</th>
          </tr>
        </thead>
        <tbody>
          ${b}
        </tbody>
      </table>
      ${B((c??[]).filter(e=>u.has(e)))}

      <div style="font-size:11px; color:#555; margin-top:8px;">
        Hinweis: Bitte maximal <b>12</b> Spieler als <b>Aktiv</b> markieren. Insgesamt sind <b>15</b> Zeilen fuer kurzfristige Aenderungen vorgesehen.
      </div>

      <h3 style="margin-top: 24px; margin-bottom: 8px;">Trainer</h3>
      <table>
        <thead>
          <tr>
            <th style="${J()}">Name</th>
            <th style="${J()}">Lizenz</th>
          </tr>
        </thead>
        <tbody>
          ${S||`<tr><td style="${Y()}" colspan="2">Keine Trainer zugewiesen</td></tr>`}
        </tbody>
      </table>

      ${q({clubName:i,locale:a})}
    </div>
  `}function Re(e){let{stats:t,clubName:n,locale:r,kwText:i,logoUrl:a}=e,o=r===`de`?{title:`Wellness-Statistik`,total:`Gesamt`,date:`Datum`,quote:`Abgabe`,submitted:`Abgegeben`,missing:`Nicht abgegeben`,none:`Keine Daten`}:{title:`Wellness stats`,total:`Total`,date:`Date`,quote:`Completion`,submitted:`Submitted`,missing:`Missing`,none:`No data`},s=t.reduce((e,t)=>e+t.scheduled.length,0),c=s-t.reduce((e,t)=>e+t.missing.length,0),l=ye(t.flatMap(e=>[...e.submitted,...e.missing])),u=t.map(e=>{let t=e.submitted.map(e=>V(Z(e,l))).join(`, `)||`-`,n=e.missing.map(e=>V(Z(e,l))).join(`, `)||`-`;return`
        <tr>
          <td style="${Y()}">${H(e.date)}</td>
          <td style="${Y()} text-align:center;">${e.submitted.length}/${e.scheduled.length}</td>
          <td style="${Y()}">${t}</td>
          <td style="${Y()}">${n}</td>
        </tr>
      `}).join(``);return`
    <div class="page">
      ${K({title:o.title,clubName:n,logoUrl:a,kwText:i})}
      <div style="font-weight:900; font-size:13px; margin-bottom:10px;">${o.total}: ${c}/${s}</div>
      <table style="border-collapse:collapse; width:100%; font-size:11px;">
        <thead>
          <tr>
            <th style="${J()}">${o.date}</th>
            <th style="${J()}">${o.quote}</th>
            <th style="${J()}">${o.submitted}</th>
            <th style="${J()}">${o.missing}</th>
          </tr>
        </thead>
        <tbody>${u||`<tr><td style="${Y()}" colspan="4">${o.none}</td></tr>`}</tbody>
      </table>
      ${q({clubName:n,locale:r})}
    </div>
  `}function ze(e){let{sessions:t,coaches:n,clubName:r,locale:i,locations:a,logoUrl:o,groupColors:s,groupTextColors:c,kwText:l,showAbsences:u=!0,dailyWellness:d,weekDates:f,statsSessions:p,markings:m,shortNames:h=!1,combined:g=!1,highlightTimes:_}=e,v=e.players.filter(e=>!e.polarPlaceholder),y=[],b=g?[...t].sort((e,t)=>e.date.localeCompare(t.date)||(e.startMin??0)-(t.startMin??0)):ue(t),x=g?[]:le(t),S=Ie({sessions:b,players:v,clubName:r,locale:i,locations:a,logoUrl:o,groupColors:s,groupTextColors:c,kwText:l,showAbsences:u,markings:m,shortNames:h,highlightTimes:_});if(y.push({type:`overview`,html:S,title:i===`de`?`Trainingswoche + Kaderlisten`:`Training week + roster lists`}),d&&f){let e=pe({sessions:p??t,dailyWellness:d,players:v,dates:f});e.length>0&&y.push({type:`stats`,html:Re({stats:e,clubName:r,locale:i,kwText:l,logoUrl:o}),title:i===`de`?`Wellness-Statistik`:`Wellness stats`})}x.length>0&&y.push({type:`morning`,html:Ie({sessions:x,players:v,clubName:r,locale:i,locations:a,logoUrl:o,groupColors:s,groupTextColors:c,kwText:l,pageTitle:i===`de`?`Morgensessions`:`Morning sessions`,rosterTrainingLabel:i===`de`?`Morgensessions`:`Morning sessions`,rosterGamesLabel:i===`de`?`Spiele / Weekend`:`Games / Weekend`,showAbsences:u,markings:m,shortNames:h,highlightTimes:_}),title:i===`de`?`Morgensessions`:`Morning sessions`});let C=b.filter(e=>U(e)&&!(e.teams??[]).includes(`1. Herren (ProB)`));for(let e of C){let t=Le({session:e,players:v,coaches:n,clubName:r,locale:i,locations:a,logoUrl:o,markings:m,shortNames:h}),s=`Spielbogen: ${e.teams.join(` - `)} - ${e.info||``}`;y.push({type:`game`,html:t,title:s})}return y}function Be(e){let t=e?.[0],n=t?h(t):-1;return n>0?`KW${n}_Trainingswoche`:`Trainingswoche`}export{e as C,o as E,f as S,a as T,i as _,Be as a,h as b,M as c,re as d,P as f,r as g,s as h,ze as i,F as l,u as m,R as n,ie as o,ne as p,_e as r,L as s,me as t,I as u,l as v,m as w,d as x,p as y};