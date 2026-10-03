function e(e){let[t,n]=(e??``).split(`:`).map(Number);return!Number.isFinite(t)||!Number.isFinite(n)?0:(t??0)*60+(n??0)}function t(e){return String(e).padStart(2,`0`)}function n(e){let t=String(e??``).trim();if(!/^\d{4}-\d{2}-\d{2}$/.test(t))return null;let n=new Date(`${t}T00:00:00`);return Number.isNaN(n.getTime())?null:n}function r(e){let r=n(e);return r?`${t(r.getDate())}.${t(r.getMonth()+1)}.${r.getFullYear()}`:``}function i(e,t=`de`){let r=n(e);if(!r)return``;let i=t===`en`?`en-GB`:`de-DE`;return new Intl.DateTimeFormat(i,{day:`2-digit`,month:`2-digit`,year:`2-digit`}).format(r)}function a(e){let t=n(e);return t?new Intl.DateTimeFormat(`de-DE`,{weekday:`short`}).format(t).replace(`.`,``):``}function o(e,t=`de`){let r=n(e);if(!r)return``;let i=t===`en`?`en-GB`:`de-DE`;return new Intl.DateTimeFormat(i,{weekday:`short`}).format(r).replace(`.`,``)}function s(e,n){let[r,i]=e.split(`:`).map(e=>parseInt(e,10)),a=r*60+i+n,o=Math.floor(a%1440/60),s=a%60;return`${t(o)}:${t(s)}`}function c(e){return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}function l(){return c(new Date)}function u(e,t){let r=n(e)??new Date;return r.setDate(r.getDate()+t),c(r)}function d(e,t){return Array.from({length:t},(n,r)=>u(e,r-(t-1)))}function f(e,t){return e.filter(e=>e!==t).reverse()}function p(e){let t=n(e)??new Date,r=(t.getDay()+6)%7;return t.setDate(t.getDate()-r),c(t)}function m(e){let t=String(e??``).trim().toLowerCase();return t.startsWith(`mo`)?0:t.startsWith(`di`)?1:t.startsWith(`mi`)?2:t.startsWith(`do`)?3:t.startsWith(`fr`)?4:t.startsWith(`sa`)?5:t.startsWith(`so`)?6:null}function h(e){let t=n(e);if(!t)return-1;let r=(t.getDay()+6)%7;t.setDate(t.getDate()-r+3);let i=new Date(t.getFullYear(),0,4),a=(i.getDay()+6)%7;i.setDate(i.getDate()-a+3);let o=t.getTime()-i.getTime();return 1+Math.round(o/6048e5)}var g={sourceVersion:`2025.1`,competitions:[{competition:`DBB`,defaultSeasonCutover:`08-01`,primaryAgeClasses:[`U20`,`U19`,`U18`,`U17`,`U16`,`U15`,`U14`,`U13`,`U12`,`U11`,`U10`,`U9`,`U8`],ageClassBaseMode:`FORMULA`,explicitSeasonTables:[{seasonStartYear:2025,baseYears:{U20:2006,U19:2007,U18:2008,U17:2009,U16:2010,U15:2011,U14:2012,U13:2013,U12:2014,U11:2015,U10:2016,U9:2017,U8:2018},sourceRef:`DBB Wichtige Hinweise 2025/26, Ziff. 3.1`}],dateOverrides:[],seasonRules:[],fallbackPolicy:{allowDBBPlayUpDefault:!0,markAsProvisionalWhenNoSeasonDoc:!1}},{competition:`WBV`,defaultSeasonCutover:`08-01`,primaryAgeClasses:[`U18`,`U17`,`U16`,`U15`,`U14`,`U13`,`U12`,`U11`,`U10`],ageClassBaseMode:`EXPLICIT_TABLE`,explicitSeasonTables:[{seasonStartYear:2025,baseYears:{U18:2008,U17:2009,U16:2010,U15:2011,U14:2012,U13:2013,U12:2014,U11:2015,U10:2016},sourceRef:`WBV Ausschreibung 2025/26, C.2.1`}],dateOverrides:[{from:`2025-06-14`,to:`2025-06-14`,ageClass:`U18`,mode:`EXACT_AUTO_YEARS`,autoYears:[2008,2009],notes:[`WBV Jugend-Qualifikation männlich/offen 1. Mannschaft`,`2. Mannschaft nur älterer Jahrgang ausgeschlossen -> effektiv nur 2009`],sourceRef:`WBV Quali 2025/26 männlich/offen`},{from:`2025-06-15`,to:`2025-06-15`,ageClass:`U16`,mode:`EXACT_AUTO_YEARS`,autoYears:[2010,2011],notes:[`WBV Jugend-Qualifikation männlich/offen 1. Mannschaft`,`2. Mannschaft nur älterer Jahrgang ausgeschlossen -> effektiv nur 2011`],sourceRef:`WBV Quali 2025/26 männlich/offen`}],seasonRules:[{ageClass:`U18`,ruleType:`OLDER_YEAR_LIMIT`,olderYearLimit:1,olderYearRequires:`NBBL_TA`,olderYearBirthOffset:-1,sourceRef:`WBV Ausschreibung 2025/26, C.2.3`},{ageClass:`U16`,ruleType:`OLDER_YEAR_LIMIT`,olderYearLimit:1,olderYearRequires:`JBBL_TA`,olderYearBirthOffset:-1,sourceRef:`WBV Ausschreibung 2025/26, C.2.3`}],fallbackPolicy:{allowDBBPlayUpDefault:!0,markAsProvisionalWhenNoSeasonDoc:!1}},{competition:`NBBL`,defaultSeasonCutover:`08-01`,primaryAgeClasses:[`U19`],ageClassBaseMode:`FORMULA`,explicitSeasonTables:[],dateOverrides:[{from:`2025-06-21`,to:`2025-06-29`,ageClass:`U19`,mode:`EXACT_RANGE`,range:{minBirthYear:2007,maxBirthYear:2012},notes:[`Gilt nur für NBBL-Qualifikation 2025/26`,`Qualifikation zählt zum Wettbewerb 2025/26`],sourceRef:`NBBL Quali 2025/26, Ziff. 2/4/9`}],seasonRules:[],fallbackPolicy:{allowDBBPlayUpDefault:!0,markAsProvisionalWhenNoSeasonDoc:!0}},{competition:`JBBL`,defaultSeasonCutover:`08-01`,primaryAgeClasses:[`U16`],ageClassBaseMode:`FORMULA`,explicitSeasonTables:[],dateOverrides:[],seasonRules:[],fallbackPolicy:{allowDBBPlayUpDefault:!0,markAsProvisionalWhenNoSeasonDoc:!0}}]},_=class extends Error{code;constructor(e){super(e),this.name=`EligibilityValidationError`,this.code=`invalidAgeClassForCompetition`}},v=`DBB`,y=[`U20`,`U19`,`U18`,`U17`,`U16`,`U15`,`U14`,`U13`,`U12`,`U11`,`U10`,`U9`,`U8`],b={20:{autoMaxTarget:20,conditionalMaxTarget:20},19:{autoMaxTarget:20,conditionalMaxTarget:20},18:{autoMaxTarget:20,conditionalMaxTarget:20},17:{autoMaxTarget:20,conditionalMaxTarget:20},16:{autoMaxTarget:20,conditionalMaxTarget:20},15:{autoMaxTarget:20,conditionalMaxTarget:20},14:{autoMaxTarget:17,conditionalMaxTarget:19},13:{autoMaxTarget:16,conditionalMaxTarget:18},12:{autoMaxTarget:15,conditionalMaxTarget:16},11:{autoMaxTarget:14,conditionalMaxTarget:14},10:{autoMaxTarget:13,conditionalMaxTarget:13},9:{autoMaxTarget:12,conditionalMaxTarget:12},8:{autoMaxTarget:12,conditionalMaxTarget:12}};function x(e){return typeof e==`string`?e:e.toISOString().slice(0,10)}function S(e){let t=String(e??``).trim().toUpperCase().match(/^U(\d{1,2})$/);if(!t)return null;let n=Number.parseInt(t[1],10);return Number.isFinite(n)?n:null}function C(e,t){let n=Number.parseInt(e.slice(0,4),10);return e.slice(5,10)>=t?n:n-1}function w(e){return g.competitions.find(t=>t.competition===e)??g.competitions.find(e=>e.competition===v)}function T(e,t,n){return e.find(e=>e.ageClass.toUpperCase()===n.toUpperCase()&&t>=e.from&&t<=e.to)??null}function E(e,t){if(e>t)return`none`;let n=b[e];return n?t<=n.autoMaxTarget?`auto`:t<=n.conditionalMaxTarget?`conditional`:`none`:e===t?`auto`:`none`}function D(e){let{competition:t,ageClass:n,seasonStartYear:r,override:i}=e,a=i.mode===`EXACT_AUTO_YEARS`?[...i.autoYears??[]]:Array.from({length:(i.range?.maxBirthYear??0)-(i.range?.minBirthYear??0)+1},(e,t)=>(i.range?.minBirthYear??0)+t);return{competition:t,ageClass:n,seasonStartYear:r,phase:`override`,coreYears:a.length>0?[Math.min(...a)]:[],autoEligibleYears:Array.from(new Set(a)).sort((e,t)=>e-t),conditionalEligibleYears:[],exceptions:[],notes:i.notes??[],provisional:!1,resolvedBy:`override`,sourceRef:i.sourceRef,sourceVersion:g.sourceVersion}}function O(e,t,n){let r=e.explicitSeasonTables.find(e=>e.seasonStartYear===t);if(r?.baseYears?.[n]!==void 0)return r.baseYears[n];let i=S(n);return i?t-(i-1):null}function k(e){let t=x(e.referenceDate),n=w(e.competition),r=String(e.ageClass??``).toUpperCase();if(!n.primaryAgeClasses.includes(r))throw new _(`invalidAgeClassForCompetition: ${n.competition}/${r}`);let i=C(t,n.defaultSeasonCutover),a=T(n.dateOverrides,t,r);if(a)return D({competition:n.competition,ageClass:r,seasonStartYear:i,override:a});let o=O(n,i,r);if(o===null)return{competition:n.competition,ageClass:r,seasonStartYear:i,phase:`regular`,coreYears:[],autoEligibleYears:[],conditionalEligibleYears:[],exceptions:[],notes:[`No base year configured for ${r}`],provisional:!0,resolvedBy:`dbbFallback`,sourceRef:void 0,sourceVersion:g.sourceVersion};let s=S(r)??0,c=new Set,l=new Set;for(let e of y){let t=S(e);if(!t)continue;let n=i-(t-1),r=E(t,s);r===`auto`&&c.add(n),r===`conditional`&&l.add(n)}let u={competition:n.competition,ageClass:r,seasonStartYear:i,phase:`regular`,coreYears:[o],autoEligibleYears:Array.from(c).sort((e,t)=>e-t),conditionalEligibleYears:Array.from(l).sort((e,t)=>e-t),exceptions:[],notes:[],provisional:!1,resolvedBy:`dbbFallback`,sourceRef:void 0,sourceVersion:g.sourceVersion},d=n.explicitSeasonTables.find(e=>e.seasonStartYear===i);d?.sourceRef&&(u.sourceRef=d.sourceRef,u.resolvedBy=`seasonRule`);for(let e of n.seasonRules.filter(e=>e.ageClass.toUpperCase()===r)){if(e.ruleType===`OLDER_YEAR_LIMIT`&&typeof e.olderYearLimit==`number`){let t=typeof e.olderYearBirthOffset==`number`?o+e.olderYearBirthOffset:void 0,n=`olderYearLimit=${e.olderYearLimit}`,r=t===void 0?``:` year=${t}`,i=e.olderYearRequires?` requires=${e.olderYearRequires}`:``;u.exceptions.push(`${n}${r}${i}`),typeof e.olderYearBirthOffset==`number`&&(u.conditionalEligibleYears=Array.from(new Set([...u.conditionalEligibleYears,o+e.olderYearBirthOffset])).sort((e,t)=>e-t))}e.ruleType===`CUSTOM_NOTE`&&e.note&&u.notes.push(e.note),e.sourceRef&&(u.notes.push(`source:${e.sourceRef}`),u.sourceRef=e.sourceRef,u.resolvedBy=`seasonRule`)}return!n.explicitSeasonTables.some(e=>e.seasonStartYear===i)&&n.fallbackPolicy.markAsProvisionalWhenNoSeasonDoc&&(u.provisional=!0,u.notes.push(`provisional:no_explicit_season_doc`)),u}function A(e,t=`DBB`){let n=[`U19`,`U18`,`U17`,`U16`].map(n=>{try{return k({referenceDate:e,competition:t,ageClass:n}).coreYears[0]}catch{return}}).filter(e=>Number.isFinite(e));return Array.from(new Set(n)).sort((e,t)=>e-t).map(String)}var j=A(new Date,`DBB`),M=[...j.map((e,t)=>({id:e,label:e,order:t})),{id:`Herren`,label:`1RLH`,order:j.length},{id:`TBD`,label:`TBD`,order:j.length+1}];new Map(M.map(e=>[e.id,e.order]));var ee=[...j,`Herren`,`TBD`];function N(e){let t=String(e??``).trim();if(!t)return``;let n=t.toUpperCase();return n===`HERREN`||n===`1RLH`?`Herren`:t}function te(e){return e===`Herren`?`1RLH`:e}function P(e){if(e.birthDate&&e.birthDate.length>=4){let t=parseInt(e.birthDate.slice(0,4),10);if(Number.isFinite(t))return t}return typeof e.birthYear==`number`&&Number.isFinite(e.birthYear)?e.birthYear:null}function F(e){if(e.id===`TBD`||(e.name??``).toLowerCase()===`tbd`)return`TBD`;let t=(e.defaultTeams??[]).map(e=>String(e).toUpperCase()),n=P(e);if(n!==null){let t=String(n);if(j.includes(t)&&!e.yearGroupDeselected)return t}let r=N(e.group);if(r)return r;if(t.includes(`1RLH`)||t.includes(`HOL`))return`Herren`;let i=t.find(e=>e&&e!==`TBD`);if(i){let e=N(i);if(e)return e}return`TBD`}var ne=[`NBBL`,`U18`,`1H`,`2H`,`3H`,`HOL`,`1RLH`,`Herren`];function re(e){let t=ne.indexOf(e);return t>=0?t:e===`TBD`?999:ne.length}function ie(e){if(e.id===`TBD`||(e.name??``).toLowerCase()===`tbd`)return`TBD`;let t=(e.herrenTeam??``).trim();if(t)return t;let n=(e.defaultTeams??[]).map(e=>String(e).toUpperCase());return n.includes(`NBBL`)?`NBBL`:n.includes(`U18`)?`U18`:e.primarySeniorTeam?e.primarySeniorTeam:n.find(e=>e&&e!==`TBD`)||`TBD`}function ae(e){return e?e.length===8?`#${e.slice(2)}`:e.length===6?`#${e}`:null:null}function oe(e){let t=String(e??``).trim().replace(`#`,``);if(!/^[0-9a-fA-F]{6}$/.test(t))return null;let n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),i=parseInt(t.slice(4,6),16);return[n,r,i].some(e=>Number.isNaN(e))?null:{r:n,g:r,b:i}}function I(e){let t=oe(e);if(!t)return`#111`;let{r:n,g:r,b:i}=t;return(.299*n+.587*r+.114*i)/255>.6?`#111`:`#fff`}function se(e){let t=String(e??``).trim().toUpperCase();return t?t===`RLH`?`1RLH`:t:``}function ce(e){let t=e.map(e=>se(e));return t.includes(`NBBL`)?`NBBL`:t.includes(`JBBL`)?`JBBL`:t.some(e=>e===`U18`||e===`HOL`||e===`1RLH`)?`DBB`:null}function L(e){return e.isMorningSession===!0&&e.sessionType!==`game`&&e.day!==`Sa`&&e.day!==`So`}function le(e){return e.filter(L)}function ue(e){return e.filter(e=>!L(e))}function de(e){let t=new Map;for(let n of e){if(n.excludeFromRoster)continue;let e=t.get(n.date)??new Set;for(let t of n.participants??[])e.add(t);t.set(n.date,e)}return t}function fe(e){let t=new Map;for(let n of e){let e=t.get(n.date)??new Set;e.add(n.playerId),t.set(n.date,e)}return t}function pe(e){let{sessions:t,dailyWellness:n,players:r,dates:i}=e,a=new Map(r.map(e=>[e.id,e])),o=de(t),s=fe(n),c=[];for(let e of i){let t=o.get(e);if(!t||t.size===0)continue;let n=s.get(e)??new Set,r=[...t].map(e=>a.get(e)).filter(e=>!!e),i=r.filter(e=>n.has(e.id)),l=r.filter(e=>!n.has(e.id));c.push({date:e,scheduled:r,submitted:i,missing:l})}return c}var R={gelb:{bg:`#fef08a`,symbol:`●`,name:`Gelb`},blau:{bg:`#bfdbfe`,symbol:`◆`,name:`Blau`},gruen:{bg:`#bbf7d0`,symbol:`▲`,name:`Grün`},rosa:{bg:`#fbcfe8`,symbol:`■`,name:`Rosa`}},me=Object.keys(R);function he(e,t,n=[t.id]){return e.scope===`all`?!0:e.scope===`games`?V(t):n.some(t=>e.scope.includes(t))}function z(e,t,n,r){return(e??[]).filter(e=>e.playerIds.includes(n)&&he(e,t,r))}function ge(e){return e.length===0?``:`<span aria-hidden="true" style="font-size:0.85em; margin-right:3px;">${e.map(e=>R[e.color].symbol).join(``)}</span>`}function _e(e){return e.length===0?``:`<div style="margin-top:6px; font-size:10px; color:#222;"><b style="margin-right:8px;">Markierungen:</b>${e.map(e=>{let t=R[e.color];return`<span style="display:inline-flex; align-items:center; gap:4px; margin-right:14px;"><span style="display:inline-block; padding:0 5px; border:1px solid #999; background:${t.bg}; -webkit-print-color-adjust:exact; print-color-adjust:exact;">${t.symbol}</span>${B(e.label)}</span>`}).join(``)}</div>`}function ve(e,t){let n=e.map((e,t)=>t>0?`<div class="v3-page-break"></div>${e.html}`:e.html).join(``);return`<html><head><title>${B(t)}</title><style>
      * { box-sizing: border-box; }
      @media print { .v3-page-break { page-break-before: always; } }
      body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #fff; color: #000; }
    </style></head><body>${n}</body></html>`}function B(e){return e?e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`):``}function ye(e){let t=new Date(e);return isNaN(t.getTime())?e:`${String(t.getDate()).padStart(2,`0`)}-${[`Jan`,`Feb`,`Mrz`,`Apr`,`Mai`,`Jun`,`Jul`,`Aug`,`Sep`,`Okt`,`Nov`,`Dez`][t.getMonth()]??``}`}function V(e){if(e.sessionType===`game`)return!0;let t=e.info||``;return t.includes(`vs`)||t.includes(`@`)}function H(e,t){if(e.id===`TBD`||String(e.name??``).trim().toUpperCase()===`TBD`)return``;let n=String(t??``).trim().toUpperCase();return((e.lizenzen??[]).find(e=>String(e.typ??``).trim().toUpperCase()===n)?.tna??``).trim()}function U(e,t){let n=t?.locations||{},r=t?.custom||{};return n?.[e]?.address?n[e].address:e===`BSH`?t?.bsh||``:e===`SHP`?t?.shp||``:e===`Seminarraum`?t?.seminarraum||``:r?.[e]||``}function W(e,t){let n=t?.definitions||{},r=Array.from(new Set(e.map(e=>(e.location||``).trim()).filter(e=>!!(e&&e!==`TBD`)))).sort((e,t)=>e.localeCompare(t,`de`));if(r.length===0)return``;let i=r.map(e=>{let r=((n[e]??{abbr:e,name:e,hallNo:``}).abbr||e).trim(),i=U(e,t).trim();return!r||!i?null:{abbr:r,address:i}}).filter(e=>!!e);return i.length===0?``:`
    <div style="display:flex; flex-wrap:wrap; row-gap:2px; column-gap:0; align-items:baseline; font-size:8px; line-height:1.35; color:#374151;">
      ${i.map((e,t)=>`<span style="white-space:nowrap; display:inline-block;">${t>0?`<span style="font-weight:900;"> | </span>`:``}<span style="font-weight:900;">${B(e.abbr)}</span> - ${B(e.address)}</span>`).join(``)}
    </div>
  `}function G(e){let{title:t,clubName:n,logoUrl:r,kwText:i}=e;return`
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; gap: 12px;">
      <!-- LINKS: LOGO -->
      <div style="flex: 1; display: flex; align-items: center;">
        ${r?`<img src="${B(r)}" alt="Logo" style="height: 48px; object-fit: contain;" />`:`<div style="width: 48px; height: 48px; background: #eee;"></div>`}
      </div>

      <!-- MITTE: TITEL & KW -->
      <div style="flex: 1; text-align: center; display: flex; flex-direction: column; justify-content: center;">
        <div style="font-size: 18px; font-weight: 900;">${B(t)}</div>
        <div style="font-size: 14px; font-weight: 800;">- ${B(i||``)} -</div>
      </div>

      <!-- RECHTS: VEREIN -->
      <div style="flex: 1; text-align: right; display: flex; flex-direction: column; align-items: flex-end;">
        <div style="font-size: 14px; font-weight: 900; margin-bottom: 2px;">${B(n)}</div>
      </div>
    </div>
  `}function K(e){let{clubName:t,locale:n,locationsFootnoteHtml:r}=e,i=n===`de`?`Basketballtraining`:`Basketball Training`,a=n===`de`?`Wochenplanung`:`Weekly Plan`;return`
    <div class="print-footer" style="margin-top: 14px; padding-top: 8px; border-top: 1px solid #ddd; color: #666;">
      ${r?`<div style="margin-bottom:6px;">${r}</div>`:``}
      <div style="font-size: 11px;">
        ${B(t)} &middot; ${i} &middot; ${a}
      </div>
    </div>
  `}function q(){return`border: 1px solid #ccc; padding: 8px; background: #f5f5f5; text-align: left; font-weight: bold;`}function J(e){return`border: 1px solid #ccc; padding: 8px;${e?` background:${e}; -webkit-print-color-adjust:exact; print-color-adjust:exact;`:``}`}function Y(e){let t=e.firstName?.trim(),n=e.lastName?.trim();if(t&&n)return{first:t,last:n};let r=(e.name??``).trim().split(/\s+/);return r.length>=2?{first:r[0],last:r[r.length-1]}:{first:e.name??``,last:``}}function X(e,t){let n=t?.get(e.id);if(n)return n;let{first:r,last:i}=Y(e);return i?`${r} ${i.charAt(0)}`:r}function be(e){let t=new Map;for(let n of e){let{first:e}=Y(n),r=e.toLocaleLowerCase(`de`),i=t.get(r);i?i.push(n):t.set(r,[n])}let n=new Map;for(let e of t.values())for(let t of e){let{first:r,last:i}=Y(t);if(!i){n.set(t.id,r);continue}let a=1,o=n=>e.some(e=>{if(e.id===t.id)return!1;let r=Y(e).last;return r?r.slice(0,n).toLocaleLowerCase(`de`)===i.slice(0,n).toLocaleLowerCase(`de`):!1});for(;a<i.length&&o(a);)a++;n.set(t.id,`${r} ${i.slice(0,a)}`)}return n}function xe(e){return(e.teams??[]).join(`/`)||e.info||e.title||``}function Se(e){return`${(e.day??``).slice(0,2)}-${xe(e)}`}var Ce={Mo:`Montag`,Di:`Dienstag`,Mi:`Mittwoch`,Do:`Donnerstag`,Fr:`Freitag`,Sa:`Samstag`,So:`Sonntag`};function we(e){let t=e.map(e=>e.trim()).filter(Boolean);if(t.length===0)return``;let n=t.map(e=>e.split(/\s+/)),r=n[0].length;for(let e of n.slice(1)){let t=0;for(;t<r&&t<e.length&&e[t]===n[0][t];)t++;r=Math.min(r,t)}return n[0].slice(0,r).join(` `).trim()||t[0]}var Z=new Set([`strength`,`athletic`,`individual`]);function Te(e){let t=[],n=new Set;for(let r=0;r<e.length;r++){if(n.has(r))continue;let i=e[r];if(!Z.has(i.sessionType)){t.push(i);continue}let a=[...i.participants??[]].sort().join(`,`),o=[i];if(a)for(let t=r+1;t<e.length;t++){if(n.has(t))continue;let r=e[t];r.date===i.date&&Z.has(r.sessionType)&&[...r.participants??[]].sort().join(`,`)===a&&(o.push(r),n.add(t))}t.push(o.length>1?{...o[0],info:we(o.map(e=>e.info||e.title||``))}:i)}return t}var Ee={excused:{symbol:`○`,color:`#b45309`,label:`entschuldigt`},absent:{symbol:`✕`,color:`#b91c1c`,label:`abwesend`},other:{symbol:`△`,color:`#525252`,label:`sonstiges`}};function De(e){return!!e&&e!==`planned`&&e!==`confirmed`}function Oe(e){let t=Ee[e]??{symbol:`•`,color:`#525252`,label:e};return`<span style="margin-left:3px; font-weight:900; color:${t.color};" aria-hidden="true">${t.symbol}</span>`}function ke(e){return e.length===0?``:`<div style="margin-top:5px; font-size:8px; line-height:1.5; color:#374151;">${e.map(e=>{let t=e.note?` – ${B(e.note)}`:``;return`<span style="white-space:nowrap; display:inline-block; margin-right:10px;"><span style="font-weight:900;">${B(e.header)}</span> ${B(e.name)}: <em>${B(e.label)}</em>${t}</span>`}).join(``)}</div>`}var Q=ee;function Ae(e){if(!e)return Q.length;let t=Q.indexOf(e);return t===-1?Q.length:t}function je(e){return[...e].sort((e,t)=>{let n=Ae(F(e)),r=Ae(F(t));return n===r?(e.name??``).localeCompare(t.name??``,`de`):n-r})}function $(e){let{sessions:t,players:n,groupColors:r,groupTextColors:i={},compactLevel:a=0,showAbsences:o=!0,markings:s,usedMarkings:c}=e;if(t.length===0)return``;let l=Te(t),u=a>=2?9:a===1?10:11,d=a>=2?9:a===1?10:11,f=a>=2?7:a===1?8:9,p=a>=2?1:a===1?2:3,m=a>=2?4:a===1?5:7,h=a>=2?10:a===1?11:12,g=a>=2?10:a===1?11:12,_=a>=2?3:4,v=new Map(n.map(e=>[e.id,e])),y=be(n),b=e=>[...e.participants??[]].sort().join(`,`),x=l.map(e=>{let n=(e.participants??[]).map(e=>v.get(e)).filter(e=>!!e);return{session:e,ids:t.filter(t=>t.id===e.id||t.date===e.date&&Z.has(t.sessionType)&&Z.has(e.sessionType)&&b(t)===b(e)).map(e=>e.id),players:je(n)}}),S=Math.max(0,...x.map(e=>e.players.length)),C=e=>e>0&&x[e].session.date!==x[e-1].session.date?`border-left: 3px solid #888;`:``,w=[];for(let e of x){let t=w[w.length-1];t&&t.date===e.session.date?t.span++:w.push({span:1,day:e.session.day??``,date:e.session.date})}let T=w.map(e=>{let t=Ce[e.day]??e.day;return`<th colspan="${e.span}" style="border:1px solid #999; padding:${p+1}px ${m}px; background:#e2e2e2; font-size:${u}px; font-weight:900; text-align:center;">${B(t)}</th>`}).join(``),E=x.map((e,t)=>{let n=xe(e.session);return`<th style="border:1px solid #bbb; padding:${p+2}px ${m}px; background:#f0f0f0; font-size:${u}px; font-weight:900; white-space:nowrap; text-align:left; ${C(t)}">${B(n)}</th>`}).join(``),D=[],O=[];for(let e=0;e<S;e++){let t=x.map((t,n)=>{let a=t.players[e];if(!a)return`<td style="border:1px solid #ddd; padding:${p}px ${m}px; height:${h}px; ${C(n)}"></td>`;let l=F(a),u=z(s,t.session,a.id,t.ids);u.forEach(e=>c?.add(e));let v=u.length?R[u[0].color].bg:ae(a.yearColor)??r[l]??`#eee`,b=u.length?`#111`:a.yearColor?I(v):i[l]||I(v),x=X(a,y),S=b===`#fff`?`rgba(255,255,255,0.82)`:`rgba(0,0,0,0.62)`,w=t.session.participantStatuses?.[a.id],T=o&&De(w?.status),E=T&&w?Oe(w.status):``;if(T&&w){let e=Ee[w.status];D.push({header:Se(t.session),name:x,label:e?.label??w.status,note:w.comment?.trim()||w.otherReason?.trim()||void 0})}return`<td style="border:1px solid #ddd; padding:${p}px ${m}px; background:${B(v)}; color:${B(b)}; font-size:${d}px; white-space:nowrap; line-height:1.1; height:${h}px; -webkit-print-color-adjust:exact; print-color-adjust:exact; forced-color-adjust:none; ${C(n)}"><span style="display:inline-block; min-width:${g}px; margin-right:${_}px; font-size:${f}px; font-weight:800; color:${S}; text-align:right;">${e+1}</span>${ge(u)}${B(x)}${E}</td>`}).join(``);O.push(`<tr>${t}</tr>`)}return`
    <table style="border-collapse:collapse; font-size:11px; width:100%;">
      <thead><tr>${T}</tr><tr>${E}</tr></thead>
      <tbody>${O.join(``)}</tbody>
    </table>
    ${ke(D)}
  `}function Me(e){let{sessions:t,clubName:n,locale:r,locations:i,logoUrl:a,kwText:o,compactLevel:s=0,title:c}=e,l=r===`de`?{title:`Trainingswoche`,date:`Datum`,day:`Tag`,teams:`Teams`,time:`Zeit`,loc:`Ort`,info:`Info`}:{title:`Training week`,date:`Date`,day:`Day`,teams:`Teams`,time:`Time`,loc:`Location`,info:`Info`},u=W(t,i),d=s>=2?8:s===1?8.5:9,f=s>=2?2:3,p=s>=2?4:5,m=t.map((e,t,n)=>{let r=V(e),i=n[t-1],a=i?i.date===e.date:!1,o=a?`border-top: 1px solid #ddd;`:`border-top: 2px solid #aaa;`,s=`border: 1px solid #ccc; padding: ${f}px ${p}px; font-size: ${d}px; overflow: hidden; text-overflow: ellipsis; line-height:1.15;`,c=e.rowColor?`background: ${B(e.rowColor)};`:r?`background: #F59E0B;`:``,l=`${s} white-space: nowrap; ${o}`,u=`${s} white-space: normal; overflow-wrap: anywhere; word-break: break-word; ${c} color: #111; ${o}`,m=`${s} white-space: normal; overflow-wrap: anywhere; word-break: break-word; text-align: left; ${c} color: #111; ${o}`;return`
        <tr>
          <td style="${l}">${a?``:ye(e.date)}</td>
          <td style="${l}">${a?``:B(e.day)}</td>
          <td style="${u}">${B(e.teams.join(`, `))}</td>
          <td style="${u}">${B(e.time)}</td>
          <td style="${u}">${B(e.location)}</td>
          <td style="${m}">${B(e.info||``)}</td>
        </tr>
      `}).join(``),h=`border: 1px solid #ccc; padding: ${f+1}px ${p}px; background: #f5f5f5; font-size: ${d}px; font-weight: bold; white-space: nowrap; overflow: hidden;`;return`
    <div class="page">
      ${G({title:c??l.title,clubName:n,logoUrl:a,kwText:o})}
      <table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
        <colgroup>
          <col style="width: 10%;" />
          <col style="width: 10%;" />
          <col style="width: 10%;" />
          <col style="width: 10%;" />
          <col style="width: 10%;" />
          <col style="width: 50%;" />
        </colgroup>
        <thead>
          <tr>
            <th style="${h}">${l.date}</th>
            <th style="${h}">${l.day}</th>
            <th style="${h}">${l.teams}</th>
            <th style="${h}">${l.time}</th>
            <th style="${h}">${l.loc}</th>
            <th style="${h} text-align: left; white-space: normal;">${l.info}</th>
          </tr>
        </thead>
        <tbody>${m}</tbody>
      </table>
      ${K({clubName:n,locale:r,locationsFootnoteHtml:u})}
    </div>
  `}function Ne(e){let{sessions:t,players:n,clubName:r,locale:i,locations:a,logoUrl:o,groupColors:s={},groupTextColors:c={},kwText:l,pageTitle:u,rosterTrainingLabel:d,rosterGamesLabel:f,showAbsences:p=!0,markings:m}=e,h=new Set,g=t,_=g.filter(e=>!e.excludeFromRoster),v=e=>V(e)||/^(sa|so)/i.test(e.day||``),y=_.filter(e=>!v(e)),b=_.filter(e=>v(e)),x=Math.max(0,...y.map(e=>(e.participants??[]).length)),S=Math.max(0,...b.map(e=>(e.participants??[]).length)),C=y.length+b.length,w=Math.max(x,S)+Math.ceil(C/2),T=w>24?2:+(w>17),E=Me({sessions:g,clubName:r,locale:i,locations:a,logoUrl:o,kwText:l,compactLevel:T,title:u}),D=W(g,a),O=E.replace(/^\s*<div class="page">/,``).replace(/<\/div>\s*$/,``).replace(/\s*<div class="print-footer"[\s\S]*?<\/div>\s*$/,``),k=i===`de`?{rosterTitle:`Kader-Listen`,trainingMoFr:`Training (Mo-Fr)`,gamesWeekends:`Spiele / Weekend`}:{rosterTitle:`Roster lists`,trainingMoFr:`Practice (Mon-Fri)`,gamesWeekends:`Games / Weekend`},A=$({sessions:y,players:n,groupColors:s,groupTextColors:c,compactLevel:T,showAbsences:p,markings:m,usedMarkings:h}),j=$({sessions:b,players:n,groupColors:s,groupTextColors:c,compactLevel:T,showAbsences:p,markings:m,usedMarkings:h}),M=T>=2?11:T===1?12:13,ee=T>=2?8:14,N=T>=2?8:14;return`
    <div class="page">
      ${O}
      ${`
    <div style="margin-top:${ee}px; break-inside:avoid; page-break-inside:avoid;">
      <div style="font-weight:900; font-size:${M}px; margin-bottom:${T>=2?4:8}px;">${B(k.rosterTitle)} &middot; ${B(d??k.trainingMoFr)}:</div>
      ${A||`<div style="font-size:11px; color:#666;">Keine Termine</div>`}
    </div>
    ${b.length>0?`
    <div style="margin-top:${N}px; padding-top:${N}px; border-top: 2px dashed #eee; break-inside:avoid; page-break-inside:avoid;">
      <div style="font-weight:900; font-size:${M}px; margin-bottom:${T>=2?4:8}px;">${B(k.rosterTitle)} &middot; ${B(f??k.gamesWeekends)}:</div>
      ${j}
    </div>
    `:``}
  `}
      ${_e((m??[]).filter(e=>h.has(e)))}
      ${K({clubName:r,locale:i,locationsFootnoteHtml:D})}
    </div>
  `}function Pe(e){let{session:t,players:n,coaches:r,clubName:i,locale:a,locations:o,logoUrl:s,markings:c}=e,l=new Set,u=t.teams.join(` - `),d=t.info||``,f=String(t.location??``).trim(),p=`${f} | ${U(f,o).trim()||`-`}`,m=new Map(n.map(e=>[e.id,e])),h=(t.participants??[]).map(e=>m.get(e)).filter(e=>!!e),g=t.teams[0]||``,_=h.map(e=>({player:e,jersey:e.jerseyByTeam?.[g]??999})).sort((e,t)=>e.jersey-t.jersey).map(e=>e.player),v=[];for(let e=0;e<15;e++)v.push(_[e]||null);let y=v.map((e,n)=>{let r=e?.firstName?.trim(),i=e?.lastName?.trim(),a=e?.name?.trim()??``,o=a.split(/\s+/),s=r||(o.length>1?o[0]:``),u=i||(o.length>1?o.slice(1).join(` `):a),d=ce(t.teams??[]),f=e?d?H(e,d):H(e,`DBB`)||H(e,`NBBL`)||H(e,`JBBL`):``,p=e?e.id===`TBD`?``:e.isLocalPlayer?`LP`:`-`:``,m=e?.jerseyByTeam?.[g]??``,h=e?z(c,t,e.id):[];h.forEach(e=>l.add(e));let _=h.length?R[h[0].color].bg:void 0;return`
        <tr>
          <td style="${J(_)} text-align:center; font-size:10px; color:#555; width:22px;">${n+1}</td>
          <td style="${J(_)} text-align:center; width:44px;">${B(String(m))}</td>
          <td style="${J(_)}">${ge(h)}${B(u)}</td>
          <td style="${J(_)}">${B(s)}</td>
          <td style="${J(_)} width:120px;">${B(f)}</td>
          <td style="${J(_)} text-align:center; width:42px;">${B(p)}</td>
          <td style="${J(_)} text-align:center; width:54px;"></td>
          <td style="${J(_)} width:170px;"></td>
        </tr>`}).join(``),b=r.slice().sort((e,t)=>`${e.role} ${e.name}`.localeCompare(`${t.role} ${t.name}`,a)),x=``;for(let e of b)x+=`
      <tr>
        <td style="${J()}">${B(e.name)}</td>
        <td style="${J()}">${B(e.license||``)}</td>
      </tr>
    `;return`
    <div class="page">
      ${G({title:`Spielbogen: ${u}`,clubName:i,logoUrl:s})}
      
      <div style="margin-bottom: 16px;">
        <strong>Spiel:</strong> ${B(t.date)} - ${B(t.day)} - ${B(t.time)}<br/>
        <strong>Ort:</strong> ${B(p)}<br/>
        <strong>Gegner:</strong> ${B(d)}
      </div>

      <h3 style="margin-top: 24px; margin-bottom: 8px;">Spieler (15 Plaetze)</h3>
      <table>
        <thead>
          <tr>
            <th style="${q()} width:22px; text-align:center; font-size:10px;">#</th>
            <th style="${q()} width:44px; text-align:center;">Trikot</th>
            <th style="${q()}">Nachname</th>
            <th style="${q()}">Vorname</th>
            <th style="${q()} width:120px;">TA-Nr.</th>
            <th style="${q()} width:42px; text-align:center;">LP</th>
            <th style="${q()} width:54px; text-align:center;">Aktiv</th>
            <th style="${q()} width:170px;">Notizen</th>
          </tr>
        </thead>
        <tbody>
          ${y}
        </tbody>
      </table>
      ${_e((c??[]).filter(e=>l.has(e)))}

      <div style="font-size:11px; color:#555; margin-top:8px;">
        Hinweis: Bitte maximal <b>12</b> Spieler als <b>Aktiv</b> markieren. Insgesamt sind <b>15</b> Zeilen fuer kurzfristige Aenderungen vorgesehen.
      </div>

      <h3 style="margin-top: 24px; margin-bottom: 8px;">Trainer</h3>
      <table>
        <thead>
          <tr>
            <th style="${q()}">Name</th>
            <th style="${q()}">Lizenz</th>
          </tr>
        </thead>
        <tbody>
          ${x||`<tr><td style="${J()}" colspan="2">Keine Trainer zugewiesen</td></tr>`}
        </tbody>
      </table>

      ${K({clubName:i,locale:a})}
    </div>
  `}function Fe(e){let{stats:t,clubName:n,locale:r,kwText:i,logoUrl:a}=e,o=r===`de`?{title:`Wellness-Statistik`,total:`Gesamt`,date:`Datum`,quote:`Abgabe`,submitted:`Abgegeben`,missing:`Nicht abgegeben`,none:`Keine Daten`}:{title:`Wellness stats`,total:`Total`,date:`Date`,quote:`Completion`,submitted:`Submitted`,missing:`Missing`,none:`No data`},s=t.reduce((e,t)=>e+t.scheduled.length,0),c=s-t.reduce((e,t)=>e+t.missing.length,0),l=be(t.flatMap(e=>[...e.submitted,...e.missing])),u=t.map(e=>{let t=e.submitted.map(e=>B(X(e,l))).join(`, `)||`-`,n=e.missing.map(e=>B(X(e,l))).join(`, `)||`-`;return`
        <tr>
          <td style="${J()}">${ye(e.date)}</td>
          <td style="${J()} text-align:center;">${e.submitted.length}/${e.scheduled.length}</td>
          <td style="${J()}">${t}</td>
          <td style="${J()}">${n}</td>
        </tr>
      `}).join(``);return`
    <div class="page">
      ${G({title:o.title,clubName:n,logoUrl:a,kwText:i})}
      <div style="font-weight:900; font-size:13px; margin-bottom:10px;">${o.total}: ${c}/${s}</div>
      <table style="border-collapse:collapse; width:100%; font-size:11px;">
        <thead>
          <tr>
            <th style="${q()}">${o.date}</th>
            <th style="${q()}">${o.quote}</th>
            <th style="${q()}">${o.submitted}</th>
            <th style="${q()}">${o.missing}</th>
          </tr>
        </thead>
        <tbody>${u||`<tr><td style="${J()}" colspan="4">${o.none}</td></tr>`}</tbody>
      </table>
      ${K({clubName:n,locale:r})}
    </div>
  `}function Ie(e){let{sessions:t,coaches:n,clubName:r,locale:i,locations:a,logoUrl:o,groupColors:s,groupTextColors:c,kwText:l,showAbsences:u=!0,dailyWellness:d,weekDates:f,statsSessions:p,markings:m}=e,h=e.players.filter(e=>!e.polarPlaceholder),g=[],_=ue(t),v=le(t),y=Ne({sessions:_,players:h,clubName:r,locale:i,locations:a,logoUrl:o,groupColors:s,groupTextColors:c,kwText:l,showAbsences:u,markings:m});if(g.push({type:`overview`,html:y,title:i===`de`?`Trainingswoche + Kaderlisten`:`Training week + roster lists`}),d&&f){let e=pe({sessions:p??t,dailyWellness:d,players:h,dates:f});e.length>0&&g.push({type:`stats`,html:Fe({stats:e,clubName:r,locale:i,kwText:l,logoUrl:o}),title:i===`de`?`Wellness-Statistik`:`Wellness stats`})}v.length>0&&g.push({type:`morning`,html:Ne({sessions:v,players:h,clubName:r,locale:i,locations:a,logoUrl:o,groupColors:s,groupTextColors:c,kwText:l,pageTitle:i===`de`?`Morgensessions`:`Morning sessions`,rosterTrainingLabel:i===`de`?`Morgensessions`:`Morning sessions`,rosterGamesLabel:i===`de`?`Spiele / Weekend`:`Games / Weekend`,showAbsences:u,markings:m}),title:i===`de`?`Morgensessions`:`Morning sessions`});let b=_.filter(e=>V(e)&&!(e.teams??[]).includes(`1. Herren (ProB)`));for(let e of b){let t=Pe({session:e,players:h,coaches:n,clubName:r,locale:i,locations:a,logoUrl:o,markings:m}),s=`Spielbogen: ${e.teams.join(` - `)} - ${e.info||``}`;g.push({type:`game`,html:t,title:s})}return g}function Le(e){let t=e?.[0],n=t?h(t):-1;return n>0?`KW${n}_Trainingswoche`:`Trainingswoche`}export{e as C,o as E,f as S,a as T,i as _,Le as a,h as b,M as c,ie as d,te as f,r as g,s as h,Ie as i,P as l,u as m,R as n,ae as o,re as p,ve as r,I as s,me as t,F as u,l as v,m as w,d as x,p as y};