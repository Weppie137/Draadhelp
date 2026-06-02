const threadData = {
  "M3": {type:"Metrische draad", diameter:3, pitch:0.5, drill:2.5},
  "M4": {type:"Metrische draad", diameter:4, pitch:0.7, drill:3.3},
  "M5": {type:"Metrische draad", diameter:5, pitch:0.8, drill:4.2},
  "M6": {type:"Metrische draad", diameter:6, pitch:1.0, drill:5.0},
  "M8": {type:"Metrische draad", diameter:8, pitch:1.25, drill:6.8},
  "M10": {type:"Metrische draad", diameter:10, pitch:1.5, drill:8.5},
  "M12": {type:"Metrische draad", diameter:12, pitch:1.75, drill:10.2},
  "M14": {type:"Metrische draad", diameter:14, pitch:2.0, drill:12.0},
  "M16": {type:"Metrische draad", diameter:16, pitch:2.0, drill:14.0},
  "M18": {type:"Metrische draad", diameter:18, pitch:2.5, drill:15.5},
  "M20": {type:"Metrische draad", diameter:20, pitch:2.5, drill:17.5},
  "M22": {type:"Metrische draad", diameter:22, pitch:2.5, drill:19.5},
  "M24": {type:"Metrische draad", diameter:24, pitch:3.0, drill:21.0},
  "M27": {type:"Metrische draad", diameter:27, pitch:3.0, drill:24.0},
  "M30": {type:"Metrische draad", diameter:30, pitch:3.5, drill:26.5},
  "M36": {type:"Metrische draad", diameter:36, pitch:4.0, drill:32.0},
  "M42": {type:"Metrische draad", diameter:42, pitch:4.5, drill:37.5},
  "M48": {type:"Metrische draad", diameter:48, pitch:5.0, drill:43.0},

  "M8X1": {type:"Metrische fijne draad", diameter:8, pitch:1.0, drill:7.0},
  "M10X1": {type:"Metrische fijne draad", diameter:10, pitch:1.0, drill:9.0},
  "M10X1.25": {type:"Metrische fijne draad", diameter:10, pitch:1.25, drill:8.8},
  "M12X1": {type:"Metrische fijne draad", diameter:12, pitch:1.0, drill:11.0},
  "M12X1.5": {type:"Metrische fijne draad", diameter:12, pitch:1.5, drill:10.5},
  "M16X1.5": {type:"Metrische fijne draad", diameter:16, pitch:1.5, drill:14.5},
  "M20X1.5": {type:"Metrische fijne draad", diameter:20, pitch:1.5, drill:18.5},
  "M24X2": {type:"Metrische fijne draad", diameter:24, pitch:2.0, drill:22.0},
  "M30X2": {type:"Metrische fijne draad", diameter:30, pitch:2.0, drill:28.0},

  "MF10": {type:"Metrische fijne draad", diameter:10, pitch:1.0, drill:9.0},
  "MF10X0.75": {type:"Metrische fijne draad", diameter:10, pitch:0.75, drill:9.25},
  "MF10X1": {type:"Metrische fijne draad", diameter:10, pitch:1.0, drill:9.0},
  "MF10X1.25": {type:"Metrische fijne draad", diameter:10, pitch:1.25, drill:8.8},
  "MF12": {type:"Metrische fijne draad", diameter:12, pitch:1.5, drill:10.5},
  "MF12X1": {type:"Metrische fijne draad", diameter:12, pitch:1.0, drill:11.0},
  "MF12X1.5": {type:"Metrische fijne draad", diameter:12, pitch:1.5, drill:10.5},
  "MF16": {type:"Metrische fijne draad", diameter:16, pitch:1.5, drill:14.5},
  "MF20": {type:"Metrische fijne draad", diameter:20, pitch:1.5, drill:18.5},

  "G1/8": {type:"BSP G draad", diameter:9.728, pitch:0.907, drill:8.8},
  "G1/4": {type:"BSP G draad", diameter:13.157, pitch:1.337, drill:11.8},
  "G3/8": {type:"BSP G draad", diameter:16.662, pitch:1.337, drill:15.25},
  "G1/2": {type:"BSP G draad", diameter:20.955, pitch:1.814, drill:19.0},
  "R1/8": {type:"BSP R conisch", diameter:9.728, pitch:0.907, drill:8.8},
  "R1/4": {type:"BSP R conisch", diameter:13.157, pitch:1.337, drill:11.8},
  "R3/8": {type:"BSP R conisch", diameter:16.662, pitch:1.337, drill:15.25},
  "R1/2": {type:"BSP R conisch", diameter:20.955, pitch:1.814, drill:19.0},
  "NPT1/8": {type:"NPT draad", diameter:10.242, pitch:0.941, drill:8.6},
  "NPT1/4": {type:"NPT draad", diameter:13.616, pitch:1.411, drill:11.1},
  "NPT3/8": {type:"NPT draad", diameter:17.055, pitch:1.411, drill:14.6},
  "NPT1/2": {type:"NPT draad", diameter:21.223, pitch:1.814, drill:17.9}
};

const radiusData = {
  "M3 STAAL": {spread:"0.03 (0.06)", steps:[
    ["Beginmaat",1.20,"good"],["2x laten lopen ADM",1.20,"good"],["Toegestaan",1.19,"good"],["Toegestaan",1.17,"good"],["Laatste goed",1.16,"warn"],["2x laten lopen afkeur",1.15,"orange"],["Afkeur",1.14,"bad"]]},
  "M3 ALU": {spread:"0.03 (0.06)", steps:[["Beginmaat",1.20,"good"],["2x laten lopen ADM",1.19,"good"],["Toegestaan",1.18,"good"],["Laatste goed",1.15,"warn"],["2x laten lopen afkeur",1.14,"orange"],["Afkeur",1.13,"bad"]]},
  "M4 STAAL": {spread:"0.02 (0.04)", steps:[["Beginmaat",1.61,"good"],["2x laten lopen ADM",1.60,"good"],["Toegestaan",1.58,"good"],["Laatste goed",1.56,"warn"],["2x laten lopen afkeur",1.54,"orange"],["Afkeur",1.53,"bad"]]},
  "M4 ALU": {spread:"0.02 (0.04)", steps:[["Beginmaat",1.60,"good"],["2x laten lopen ADM",1.60,"good"],["Toegestaan",1.58,"good"],["Laatste goed",1.56,"warn"],["2x laten lopen afkeur",1.54,"orange"],["Afkeur",1.53,"bad"]]},
  "M5 STAAL": {spread:"0.02 (0.04)", steps:[["Beginmaat",1.95,"good"],["2x laten lopen ADM",1.95,"good"],["Toegestaan",1.94,"good"],["Laatste goed",1.93,"warn"],["2x laten lopen afkeur",1.92,"orange"],["Afkeur",1.91,"bad"]]},
  "M5 ALU": {spread:"0.02 (0.04)", steps:[["Beginmaat",1.96,"good"],["2x laten lopen ADM",1.96,"good"],["Toegestaan",1.94,"good"],["Laatste goed",1.93,"warn"],["2x laten lopen afkeur",1.92,"orange"],["Afkeur",1.92,"bad"]]},
  "M6 STAAL": {spread:"0.04 (0.08)", steps:[["Beginmaat",2.40,"good"],["2x laten lopen ADM",2.39,"good"],["Toegestaan",2.38,"good"],["Toegestaan",2.36,"good"],["Laatste goed",2.34,"warn"],["2x laten lopen afkeur",2.33,"orange"],["Afkeur",2.32,"bad"]]},
  "M6 ALU": {spread:"0.05 (0.10)", steps:[["Beginmaat",2.40,"good"],["2x laten lopen ADM",2.39,"good"],["Toegestaan",2.38,"good"],["Toegestaan",2.36,"good"],["Laatste goed",2.33,"warn"],["2x laten lopen afkeur",2.32,"orange"],["Afkeur",2.31,"bad"]]},
  "M8 STAAL": {spread:"0.04 (0.080)", steps:[["Beginmaat",2.97,"good"],["2x laten lopen ADM",2.96,"good"],["Toegestaan",2.95,"good"],["Toegestaan",2.93,"good"],["Laatste goed",2.91,"warn"],["2x laten lopen afkeur",2.89,"orange"],["Afkeur",2.88,"bad"]]},
  "M8 ALU": {spread:"0.04 (0.080)", steps:[["Beginmaat",2.97,"good"],["2x laten lopen ADM",2.97,"good"],["Toegestaan",2.95,"good"],["Toegestaan",2.93,"good"],["Laatste goed",2.91,"warn"],["2x laten lopen afkeur",2.90,"orange"],["Afkeur",2.89,"bad"]]},
  "M10 STAAL": {spread:"0.07 (0.14)", steps:[["Beginmaat",3.90,"good"],["2x laten lopen ADM",3.87,"good"],["Toegestaan",3.86,"good"],["Toegestaan",3.82,"good"],["Laatste goed",3.79,"warn"],["2x laten lopen afkeur",3.78,"orange"],["Afkeur",3.77,"bad"]]},
  "M10 ALU": {spread:"0.06 (0.12)", steps:[["Beginmaat",3.90,"good"],["2x laten lopen ADM",3.98,"good"],["Toegestaan",3.86,"good"],["Toegestaan",3.82,"good"],["Laatste goed",3.80,"warn"],["2x laten lopen afkeur",3.79,"orange"],["Afkeur",3.78,"bad"]]},
  "M12 STAAL": {spread:"0.08 (0.16)", steps:[["Beginmaat",4.50,"good"],["2x laten lopen ADM",4.49,"good"],["Toegestaan",4.48,"good"],["Toegestaan",4.44,"good"],["Laatste goed",4.40,"warn"],["2x laten lopen afkeur",4.39,"orange"],["Afkeur",4.38,"bad"]]},
  "M12 ALU": {spread:"0.08 (0.16)", steps:[["Beginmaat",4.50,"good"],["2x laten lopen ADM",4.49,"good"],["Toegestaan",4.48,"good"],["Toegestaan",4.44,"good"],["Laatste goed",4.40,"warn"],["2x laten lopen afkeur",4.39,"orange"],["Afkeur",4.38,"bad"]]},
  "M16 STAAL": {spread:"0.09 (0.18)", steps:[["Beginmaat",5.92,"good"],["2x laten lopen ADM",5.87,"good"],["Toegestaan",5.86,"good"],["Toegestaan",5.84,"good"],["Laatste goed",5.77,"warn"],["2x laten lopen afkeur",5.76,"orange"],["Afkeur",5.75,"bad"]]},
  "M16 ALU": {spread:"0.08 (0.16)", steps:[["Beginmaat",5.92,"good"],["2x laten lopen ADM",5.87,"good"],["Toegestaan",5.86,"good"],["Toegestaan",5.80,"good"],["Laatste goed",5.78,"warn"],["2x laten lopen afkeur",5.77,"orange"],["Afkeur",5.76,"bad"]]},
  "M20 ALU": {spread:"0.08 (0.16)", steps:[["Beginmaat",8.273,"good"],["Correctie",8.20,"good"],["2x laten lopen ADM",8.18,"good"],["Toegestaan",8.16,"good"],["Toegestaan",8.13,"good"],["Toegestaan",8.10,"good"],["Laatste goed",8.08,"warn"],["2x laten lopen afkeur",8.07,"orange"],["Afkeur",8.06,"bad"]]},
  "M20 RVS": {spread:"0.05 (0.10)", steps:[["Beginmaat",8.27,"good"],["Correctie",8.17,"good"],["2x laten lopen ADM",8.13,"good"],["Toegestaan",8.12,"good"],["Toegestaan",8.09,"good"],["Laatste goed",8.07,"warn"],["2x laten lopen afkeur",8.05,"orange"],["Afkeur",8.04,"bad"]]},
  "M20 STAAL": {spread:"0.07 (0.14)", steps:[["Beginmaat",8.27,"good"],["Correctie",8.20,"good"],["2x laten lopen ADM",8.17,"good"],["Toegestaan",8.15,"good"],["Toegestaan",8.10,"good"],["Laatste goed",8.08,"warn"],["2x laten lopen afkeur",8.06,"orange"],["Afkeur",8.05,"bad"]]},
  "M24 ALU": {spread:"0.08 (0.16)", steps:[["Beginmaat",9.50,"good"],["Correctie",9.44,"good"],["2x laten lopen ADM",9.42,"good"],["Toegestaan",9.40,"good"],["Toegestaan",9.37,"good"],["Toegestaan",9.34,"good"],["Laatste goed",9.32,"warn"],["2x laten lopen afkeur",9.31,"orange"],["Afkeur",9.30,"bad"]]},
  "M24 RVS": {spread:"0.07 (0.14)", steps:[["Beginmaat",9.50,"good"],["Correctie",9.42,"good"],["2x laten lopen ADM",9.40,"good"],["Toegestaan",9.38,"good"],["Toegestaan",9.35,"good"],["Laatste goed",9.31,"warn"],["2x laten lopen afkeur",9.30,"orange"],["Afkeur",9.28,"bad"]]},
  "M24 STAAL": {spread:"0.06 (0.12)", steps:[["Beginmaat",9.50,"good"],["Correctie",9.44,"good"],["2x laten lopen ADM",9.40,"good"],["Toegestaan",9.39,"good"],["Laatste goed",9.33,"warn"],["2x laten lopen afkeur",9.32,"orange"],["Afkeur",9.31,"bad"]]},
  "M30 ALU": {spread:"0.08 (0.16)", steps:[["Beginmaat",12.02,"good"],["Correctie",11.96,"good"],["2x laten lopen ADM",11.89,"good"],["Toegestaan",11.86,"good"],["Toegestaan",11.83,"good"],["Toegestaan",11.80,"good"],["Laatste goed",11.78,"warn"],["2x laten lopen afkeur",11.76,"orange"],["Afkeur",11.75,"bad"]]},
  "M30 RVS": {spread:"0.08 (0.16)", steps:[["Beginmaat",12.02,"good"],["Correctie",11.96,"good"],["2x laten lopen ADM",11.89,"good"],["Toegestaan",11.86,"good"],["Toegestaan",11.83,"good"],["Toegestaan",11.80,"good"],["Laatste goed",11.78,"warn"],["2x laten lopen afkeur",11.75,"orange"],["Afkeur",11.74,"bad"]]},
  "M30 STAAL": {spread:"0.08 (0.16)", steps:[["Beginmaat",12.02,"good"],["Correctie",11.92,"good"],["2x laten lopen ADM",11.86,"good"],["Toegestaan",11.85,"good"],["Laatste goed",11.78,"warn"],["2x laten lopen afkeur",11.76,"orange"],["Afkeur",11.75,"bad"]]},
  "M36 ALU": {spread:"0.11 (0.22)", steps:[["Beginmaat",14.48,"good"],["Correctie",14.38,"good"],["2x laten lopen ADM",14.33,"good"],["Toegestaan",14.31,"good"],["Toegestaan",14.25,"good"],["Laatste goed",14.20,"warn"],["2x laten lopen afkeur",14.17,"orange"],["Afkeur",14.16,"bad"]]},
  "M36 RVS": {spread:"0.08 (0.16)", steps:[["Beginmaat",14.48,"good"],["Correctie",14.38,"good"],["2x laten lopen ADM",14.31,"good"],["Toegestaan",14.28,"good"],["Toegestaan",14.24,"good"],["Laatste goed",14.20,"warn"],["2x laten lopen afkeur",14.17,"orange"],["Afkeur",14.16,"bad"]]},
  "M36 STAAL": {spread:"0.08 (0.16)", steps:[["Beginmaat",14.48,"good"],["Correctie",14.38,"good"],["2x laten lopen ADM",14.31,"good"],["Toegestaan",14.28,"good"],["Toegestaan",14.24,"good"],["Laatste goed",14.20,"warn"],["2x laten lopen afkeur",14.18,"orange"],["Afkeur",14.15,"bad"]]}
};

const result = document.getElementById("result");
const input = document.getElementById("searchInput");

input.addEventListener("input", () => search(input.value));
document.querySelectorAll("[data-example]").forEach(btn => {
  btn.addEventListener("click", () => {
    input.value = btn.dataset.example;
    search(input.value);
    input.focus();
  });
});

function search(raw) {
  const text = raw.trim().toUpperCase().replace(/,/g,".").replace(/\s+/g," ");
  const compact = text.replace(/\s/g,"");
  if (!text) return renderEmpty();

  const rpmCalc = parseRpm(text);
  if (rpmCalc) return renderRpm(rpmCalc);

  const feedCalc = parseFeed(text);
  if (feedCalc) return renderFeed(feedCalc);

  const fit = parseFit(compact);
  if (fit) return renderFit(fit);

  const radiusKey = findRadiusKey(text);
  const threadKey = findThreadKey(text);
  if (threadKey || radiusKey) return renderThreadAndRadius(threadKey, radiusKey);

  renderError(`Geen resultaat voor "${escapeHtml(raw)}". Probeer M20 STAAL, M10, 25H7, G1/4, VC200 D80 of RPM800 Z8 FZ0.15.`);
}

function findThreadKey(text) {
  const compact = text.replace(/\s/g,"");
  if (threadData[compact]) return compact;
  const first = text.split(" ")[0];
  if (threadData[first]) return first;
  return null;
}

function findRadiusKey(text) {
  const parts = text.split(" ");
  const size = parts.find(p => /^M\d+$/.test(p));
  const mat = parts.find(p => ["STAAL","ALU","ALUMINIUM","RVS"].includes(p));
  if (!size || !mat) return null;
  const material = mat === "ALUMINIUM" ? "ALU" : mat;
  const key = `${size} ${material}`;
  return radiusData[key] ? key : null;
}

function renderThreadAndRadius(threadKey, radiusKey) {
  let html = "";
  const size = radiusKey ? radiusKey.split(" ")[0] : threadKey;
  const activeMaterial = radiusKey ? radiusKey.split(" ")[1] : null;

  if (threadKey) html += threadBlock(threadKey, threadData[threadKey]);

  if (size && /^M\d+$/.test(size)) {
    const available = ["STAAL","ALU","RVS"].filter(m => radiusData[`${size} ${m}`]);
    if (available.length) html += materialSwitchBlock(size, available, activeMaterial);
  }

  if (radiusKey) html += radiusBlock(radiusKey, radiusData[radiusKey]);

  result.className = "result";
  result.innerHTML = html;
}

function threadBlock(key, d) {
  const core = (d.diameter - 1.22687 * d.pitch).toFixed(3);
  return block(`Draadgegevens`, key, `
    <div class="grid">
      ${row("Type", d.type)}
      ${row("Diameter", fmt(d.diameter) + " mm")}
      ${row("Spoed", fmt(d.pitch) + " mm")}
      ${row("Tapboor", fmt(d.drill) + " mm")}
      ${row("Kerndiameter indicatie", core + " mm")}
    </div>
    <div class="note">Tapboor en kerndiameter zijn praktijk/indicatie waarden. Kritische draad altijd controleren met officiële tabel.</div>
  `);
}

function radiusBlock(key, d) {
  const steps = d.steps.map((s, i) => statusRow(s[0], s[1], s[2], 100 - (i * (70 / Math.max(1, d.steps.length - 1))))).join("");
  return block("Radiuscompensatie draadfrezen", key, `
    <div class="status-table">${steps}</div>
    <div class="note">Goedkeur spreiding radius: ${d.spread} mm. Kleuren: groen = goed, geel = laatste goed, oranje = 2x laten lopen, rood = afkeur.</div>
  `);
}

function materialSwitchBlock(size, materials, activeMaterial) {
  return block("Materiaalkeuze radiuscompensatie", size, `
    <div class="material-switch">
      ${materials.map(m => `<button class="material-btn ${m === activeMaterial ? "active" : ""}" onclick="selectMaterial('${size}','${m}')">${m}</button>`).join("")}
    </div>
    <div class="note">Klik op een materiaal om te wisselen zonder opnieuw te typen.</div>
  `);
}

function selectMaterial(size, material) {
  input.value = `${size} ${material}`;
  search(input.value);
  input.focus();
}

function parseFit(compact) {
  const m = compact.match(/^(\d+(\.\d+)?)([A-Za-z]+)(\d+)$/);
  if (!m) return null;
  const diameter = Number(m[1]);
  const letter = m[3];
  const grade = Number(m[4]);
  const isHole = letter === letter.toUpperCase();
  const it = calcIT(diameter, grade);
  if (!it) return null;
  let upper = 0, lower = 0;
  if (isHole && letter.toUpperCase() === "H") { lower = 0; upper = it; }
  else if (!isHole && letter === "h") { upper = 0; lower = -it; }
  else if (!isHole && letter === "g") { upper = -Math.round(2.5 * Math.pow(diameter, 0.34)); lower = upper - it; }
  else if (!isHole && letter === "f") { upper = -Math.round(5.5 * Math.pow(diameter, 0.41)); lower = upper - it; }
  else return null;
  return {diameter, letter, grade, isHole, it, upper, lower};
}

function renderFit(f) {
  const min = f.diameter + f.lower / 1000;
  const max = f.diameter + f.upper / 1000;
  result.className = "result";
  result.innerHTML = block(f.isHole ? "Gatpassing" : "Aspassing", `${f.diameter}${f.letter}${f.grade}`, `
    <div class="grid">
      ${row("Nominaal", f.diameter.toFixed(3) + " mm")}
      ${row("Onder", f.lower + " µm")}
      ${row("Boven", f.upper + " µm")}
      ${row("Tolerantie", f.it + " µm")}
      ${row("Min maat", min.toFixed(3) + " mm")}
      ${row("Max maat", max.toFixed(3) + " mm")}
    </div>
    <div class="note">Ondersteund: H, h, g en f. Benadering volgens ISO-formule. Voor eindcontrole officiële passingtabel gebruiken.</div>
  `);
}

function parseRpm(text) {
  const vc = text.match(/VC\s*(\d+(\.\d+)?)/);
  const d = text.match(/D\s*(\d+(\.\d+)?)/);
  if (!vc || !d) return null;
  const vcVal = Number(vc[1]);
  const dVal = Number(d[1]);
  if (!vcVal || !dVal) return null;
  return {vc: vcVal, d: dVal, rpm: Math.round((vcVal * 1000) / (Math.PI * dVal))};
}

function renderRpm(x) {
  result.className = "result";
  result.innerHTML = block("Toerental calculator", `VC${x.vc} D${x.d}`, `
    <div class="grid">
      ${row("Vc", x.vc + " m/min")}
      ${row("Diameter", x.d + " mm")}
      ${row("Toerental", x.rpm + " rpm")}
    </div>
    <div class="note">Formule: rpm = Vc × 1000 / (π × D)</div>
  `);
}

function parseFeed(text) {
  const rpm = text.match(/RPM\s*(\d+(\.\d+)?)/);
  const z = text.match(/Z\s*(\d+(\.\d+)?)/);
  const fz = text.match(/FZ\s*(\d+(\.\d+)?)/);
  if (!rpm || !z || !fz) return null;
  const rpmVal = Number(rpm[1]);
  const zVal = Number(z[1]);
  const fzVal = Number(fz[1]);
  if (!rpmVal || !zVal || !fzVal) return null;
  return {rpm:rpmVal, z:zVal, fz:fzVal, feed: Math.round(rpmVal * zVal * fzVal)};
}

function renderFeed(x) {
  result.className = "result";
  result.innerHTML = block("Voeding calculator", `RPM${x.rpm} Z${x.z} FZ${x.fz}`, `
    <div class="grid">
      ${row("RPM", x.rpm)}
      ${row("Tanden Z", x.z)}
      ${row("fz", x.fz + " mm/tand")}
      ${row("Voeding", x.feed + " mm/min")}
    </div>
    <div class="note">Formule: voeding = rpm × Z × fz</div>
  `);
}

function block(title, sub, content) {
  return `<article class="block"><div class="block-title"><strong>${title}</strong><span>${sub}</span></div>${content}</article>`;
}
function row(k, v) { return `<div class="row"><div class="key">${k}</div><div class="val">${v}</div></div>`; }
function statusRow(name, value, type, width) {
  const colors = {good:"var(--green)", warn:"var(--yellow)", orange:"var(--orange)", bad:"var(--red2)"};
  return `<div class="status-row"><div class="status-name">${name}</div><div class="status-bar-wrap"><div class="status-bar"><div class="status-fill" style="--w:${width}%;--c:${colors[type] || "var(--red2)"}"></div></div></div><div class="status-value">${fmt(value)}</div></div>`;
}
function calcIT(d, grade) {
  const i = 0.45 * Math.cbrt(d) + 0.001 * d;
  const factors = {5:7,6:10,7:16,8:25,9:40,10:64,11:100,12:160};
  return factors[grade] ? Math.round(i * factors[grade]) : null;
}
function fmt(n) {
  return Number(n).toLocaleString("nl-NL", {minimumFractionDigits: Number.isInteger(Number(n)) ? 0 : 2, maximumFractionDigits: 3});
}
function escapeHtml(s) {
  return s.replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[c]));
}
function renderEmpty() {
  result.className = "result empty";
  result.innerHTML = `<div class="empty-state"><strong>Typ een maat of berekening.</strong><span>Bijvoorbeeld M20 STAAL voor draadgegevens + radiuscompensatie.</span></div>`;
}
function renderError(msg) {
  result.className = "result";
  result.innerHTML = `<div class="error">${msg}</div>`;
}
