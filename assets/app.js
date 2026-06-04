/*
  WTP Framework diagnostic: behavior.
  Vanilla JS, no dependencies. Reads the WTP data model from framework.js.
*/
(function () {
  "use strict";

  // Static UI strings (the dynamic content lives in WTP / framework.js)
  var STRINGS = {
    brandSub: { en: "The Willingness-to-Pay Framework", id: "Kerangka Willingness-to-Pay" },
    navRead: { en: "Read the framework", id: "Baca kerangka" },
    navRepo: { en: "Source", id: "Sumber" },
    heroEyebrow: { en: "Interactive diagnostic", id: "Diagnostik interaktif" },
    heroTitleA: { en: "Why do people", id: "Mengapa orang" },
    heroTitleB: { en: "pay?", id: "membayar?" },
    heroLede: {
      en: "A four-step read of any product or offer. It returns the primary driver, the positioning to take, the first tactics to deploy, and the demand-side brakes you need to clear.",
      id: "Baca cepat empat langkah untuk produk atau tawaran apa pun. Hasilnya: pendorong utama, posisi yang diambil, taktik pertama, dan rem sisi permintaan yang harus dilewati."
    },
    heroMeta1: { en: "13 drivers", id: "13 pendorong" },
    heroMeta2: { en: "5 clusters", id: "5 rumpun" },
    heroMeta3: { en: "demand and supply", id: "permintaan dan penawaran" },
    heroStart: { en: "Start the diagnostic", id: "Mulai diagnostik" },
    toolTitle: { en: "The diagnostic", id: "Diagnostik" },
    step1: { en: "Cluster", id: "Rumpun" },
    step2: { en: "Driver", id: "Pendorong" },
    step3: { en: "Refine", id: "Sesuaikan" },
    step4: { en: "Diagnosis", id: "Diagnosis" },
    q1: { en: "What is the buyer mainly trying to do?", id: "Apa yang terutama ingin dilakukan pembeli?" },
    q2: { en: "Within that, which is closest?", id: "Di dalamnya, mana yang paling dekat?" },
    q3: { en: "Two optional refinements.", id: "Dua penyetelan opsional untuk menajamkan." },
    back: { en: "Back", id: "Kembali" },
    refineStage: { en: "Which journey stage is this for?", id: "Untuk tahap perjalanan yang mana?" },
    refineB2b: { en: "Who is buying?", id: "Siapa yang membeli?" },
    modeB2c: { en: "A person", id: "Perorangan" },
    modeB2b: { en: "An organization", id: "Organisasi" },
    run: { en: "Run diagnosis", id: "Jalankan diagnosis" },
    restart: { en: "Start over", id: "Ulang dari awal" },
    closerNote: {
      en: "This tool runs the decision tree in section 20 of the framework. It is a starting hypothesis, not a measurement. Return to the full document to refine.",
      id: "Alat ini menjalankan pohon keputusan di bagian 20 kerangka. Anggap hasilnya hipotesis awal, bukan hasil ukur. Balik ke dokumen lengkap untuk menajamkannya."
    },
    closerEn: { en: "Framework (English)", id: "Framework (English)" },
    closerId: { en: "Kerangka (Indonesia)", id: "Kerangka (Indonesia)" },
    closerSrc: { en: "Sources", id: "Sumber" },
    footAuthor: { en: "Originated and developed by Dharmawan.", id: "Digagas dan dikembangkan oleh Dharmawan." },
    footLicense: { en: "Framework text CC BY 4.0, tool code MIT.", id: "Teks framework CC BY 4.0, kode tool MIT." },
    // result labels
    rDriver: { en: "Primary driver", id: "Pendorong utama" },
    rPositioning: { en: "Positioning", id: "Posisi" },
    rPromise: { en: "Core promise", id: "Janji inti" },
    rTactics: { en: "First tactics", id: "Taktik pertama" },
    rMessage: { en: "Message direction", id: "Arah pesan" },
    rStage: { en: "Amplifiers for this stage", id: "Penguat untuk tahap ini" },
    rInhibitors: { en: "Now clear the brakes", id: "Sekarang cek remnya" },
    rInhibitorsHint: { en: "Name the one or two strongest. A strong driver with weak conversion is almost always an inhibitor problem.", id: "Sebut satu atau dua yang terkuat. Pendorong kuat dengan konversi lemah hampir selalu soal penghambat." },
    rMagnitude: { en: "Set the magnitude", id: "Tetapkan besaran" },
    rEthic: { en: "Before you deploy", id: "Sebelum mengerahkan" },
    rB2b: { en: "Organizational overlay", id: "Lapisan organisasi" },
    rSecondary: { en: "Remember: most purchases run on 2 to 4 drivers. This is the primary. Layer secondary drivers to raise willingness to pay.", id: "Ingat: kebanyakan pembelian jalan di atas 2 sampai 4 pendorong. Ini yang utama. Lapisi dengan pendorong sekunder untuk menaikkan kesediaan membayar." }
  };

  var state = { lang: "en", cluster: null, driver: null, stage: "decision", mode: "b2c" };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function t(key) { return (STRINGS[key] && STRINGS[key][state.lang]) || ""; }
  function L(obj) { return obj ? obj[state.lang] : ""; }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  // ---------- i18n ----------
  function applyStatic() {
    document.documentElement.lang = state.lang;
    $$("[data-i18n]").forEach(function (node) {
      var k = node.getAttribute("data-i18n");
      if (STRINGS[k]) node.textContent = STRINGS[k][state.lang];
    });
  }

  // ---------- Step navigation ----------
  function goStep(n) {
    $$(".panel").forEach(function (p) { p.classList.toggle("is-active", p.getAttribute("data-panel") === String(n)); });
    $$(".stepper__item").forEach(function (s) {
      var sn = Number(s.getAttribute("data-step"));
      s.classList.toggle("is-current", sn === n);
      s.classList.toggle("is-done", sn < n);
    });
    var tool = $("#tool");
    if (tool && n > 1) tool.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ---------- Renders ----------
  function renderClusters() {
    var wrap = $("#cluster-cards");
    wrap.innerHTML = "";
    WTP.clusters.forEach(function (c, i) {
      var card = el("button", "card");
      card.type = "button";
      card.style.animation = "rise 0.5s var(--ease) " + (i * 0.05) + "s both";
      card.innerHTML =
        '<span class="card__k">0' + (i + 1) + "</span>" +
        '<span class="card__t">' + esc(L(c.label)) + "</span>" +
        '<p class="card__b">' + esc(L(c.blurb)) + "</p>";
      card.addEventListener("click", function () { state.cluster = c.id; state.driver = null; renderDrivers(); goStep(2); });
      wrap.appendChild(card);
    });
  }

  function renderDrivers() {
    var wrap = $("#driver-cards");
    wrap.innerHTML = "";
    var cluster = WTP.clusters.filter(function (c) { return c.id === state.cluster; })[0];
    if (!cluster) return;
    cluster.drivers.forEach(function (id, i) {
      var d = WTP.drivers[id];
      var card = el("button", "card");
      card.type = "button";
      card.style.animation = "rise 0.5s var(--ease) " + (i * 0.05) + "s both";
      card.innerHTML =
        '<span class="card__k">' + esc(L(d.name)) + "</span>" +
        '<span class="card__t">' + esc(L(d.ask)) + "</span>";
      card.addEventListener("click", function () { state.driver = id; renderStages(); goStep(3); });
      wrap.appendChild(card);
    });
  }

  function renderStages() {
    var wrap = $("#stage-chips");
    wrap.innerHTML = "";
    WTP.stages.forEach(function (s) {
      var chip = el("button", "chip" + (s.id === state.stage ? " is-active" : ""));
      chip.type = "button";
      chip.setAttribute("aria-pressed", s.id === state.stage ? "true" : "false");
      chip.textContent = L(s.label);
      chip.addEventListener("click", function () {
        state.stage = s.id;
        $$("#stage-chips .chip").forEach(function (x) { x.classList.remove("is-active"); x.setAttribute("aria-pressed", "false"); });
        chip.classList.add("is-active"); chip.setAttribute("aria-pressed", "true");
      });
      wrap.appendChild(chip);
    });
  }

  function block(k, bodyHtml) {
    return '<div class="block"><p class="block__k">' + esc(k) + "</p>" + bodyHtml + "</div>";
  }

  function renderResult() {
    var d = WTP.drivers[state.driver];
    if (!d) return;
    var r = $("#result");
    var stage = WTP.stages.filter(function (s) { return s.id === state.stage; })[0];

    var html = "";

    // Head
    html +=
      '<div class="result__head">' +
      '<p class="result__k">' + esc(t("rDriver")) + "</p>" +
      '<h3 class="result__driver">' + esc(L(d.name)) + "</h3>" +
      '<p class="result__transition">' + esc(L(d.stateA)) + '<span class="arrow">→</span>' + esc(L(d.stateB)) + "</p>" +
      "</div>";

    // Positioning grid
    var tacticItems = L(d.tactics).map(function (x) { return "<li><span class=\"tag\">" + esc(x) + "</span></li>"; }).join("");
    var grid =
      block(t("rPositioning"), '<p class="block__big">' + esc(L(d.vp)) + "</p><p>" + esc(L(d.promise)) + "</p>") +
      block(t("rTactics"), "<ul>" + tacticItems + "</ul>") +
      block(t("rMessage"), "<p>" + esc(L(d.message)) + "</p>") +
      block(t("rStage") + " · " + esc(L(stage.label)), "<p>" + esc(L(stage.amps)) + "</p>");
    html += '<div class="result__grid">' + grid + "</div>";

    html += '<p class="closer__note" style="margin-top:18px">' + esc(t("rSecondary")) + "</p>";

    // B2B overlay
    if (state.mode === "b2b") {
      html += '<div class="b2b-note"><p class="block__k">' + esc(t("rB2b")) + "</p><p>" + esc(L(WTP.b2b)) + "</p></div>";
    }

    // Inhibitors checklist
    html += '<p class="result__section-k">' + esc(t("rInhibitors")) + "</p>";
    html += '<p class="closer__note" style="margin-top:-2px">' + esc(t("rInhibitorsHint")) + "</p>";
    var groups = ["functional", "psychological", "economic"];
    var checks = '<div class="block checklist">';
    groups.forEach(function (g) {
      var grp = WTP.inhibitors[g];
      checks += '<div class="group-k">' + esc(L(grp.label)) + "</div>";
      L(grp.items).forEach(function (item, idx) {
        var id = "inh-" + g + "-" + idx;
        checks += '<label for="' + id + '"><input type="checkbox" id="' + id + '" /> <span>' + esc(item) + "</span></label>";
      });
    });
    checks += "</div>";
    html += checks;

    // Magnitude
    html += '<p class="result__section-k">' + esc(t("rMagnitude")) + "</p>";
    var mag = '<div class="block"><ul>' + L(WTP.magnitude).map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("") + "</ul></div>";
    html += mag;

    // Ethical gate
    html += '<p class="result__section-k">' + esc(t("rEthic")) + "</p>";
    html += '<div class="ethic"><p class="ethic__k">Consumer Autonomy Test</p><p>' + esc(L(WTP.ethic.test)) + "</p></div>";

    r.innerHTML = html;
  }

  // ---------- Wiring ----------
  function init() {
    applyStatic();
    renderClusters();
    renderStages();

    // language
    $$(".lang__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.lang = btn.getAttribute("data-lang");
        $$(".lang__btn").forEach(function (b) {
          var on = b === btn;
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-pressed", on ? "true" : "false");
        });
        applyStatic();
        renderClusters();
        if (state.cluster) renderDrivers();
        renderStages();
        if (state.driver && $(".panel[data-panel='4']").classList.contains("is-active")) renderResult();
      });
    });

    // mode chips
    $$("#mode-chips .chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        state.mode = chip.getAttribute("data-mode");
        $$("#mode-chips .chip").forEach(function (x) { x.classList.remove("is-active"); x.setAttribute("aria-pressed", "false"); });
        chip.classList.add("is-active"); chip.setAttribute("aria-pressed", "true");
      });
    });

    // back buttons
    $$(".back").forEach(function (b) {
      b.addEventListener("click", function () { goStep(Number(b.getAttribute("data-back"))); });
    });

    // run + restart
    $("#run").addEventListener("click", function () { renderResult(); goStep(4); });
    $("#restart").addEventListener("click", function () {
      state.cluster = null; state.driver = null; state.stage = "decision"; state.mode = "b2c";
      $$("#mode-chips .chip").forEach(function (x, i) { var on = i === 0; x.classList.toggle("is-active", on); x.setAttribute("aria-pressed", on ? "true" : "false"); });
      renderStages();
      goStep(1);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
