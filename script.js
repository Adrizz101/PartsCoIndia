/* =========================================================
   PRODUCTS — 42 total
   ========================================================= */

const PRODUCTS = [
  /* ---------- CUTTING BLADES ---------- */
  { id: "27510883830", name: "4 Hole Cutting Blade", price: "Ask Price", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/cutting-blade.html#27510883830" },
  { id: "27538191855", name: "C52 Bar Cutting Blade", price: "Ask Price", dimensions: "Not specified", partNo: "C52", machine: null, url: "https://www.indiamart.com/partsco-india/cutting-blade.html#27538191855" },
  { id: "27538191597", name: "Cutting Blade C42 Jaypee", price: "Ask Price", dimensions: "78 × 58 × 25 mm", partNo: "C42", machine: "Jaypee", url: "https://www.indiamart.com/partsco-india/cutting-blade.html#27538191597" },
  { id: "27538193988", name: "Sigma DCM 52 Cutting Blade", price: "₹ 1,250 / Piece", dimensions: "85 × 85 × 25 mm", partNo: "DCM 52", machine: "Sigma", url: "https://www.indiamart.com/partsco-india/metal-pin.html#27538193988" },
  { id: "27538194691", name: "Stainless Steel Bar Cutting Blades", price: "Ask Price", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/cutting-blades.html#27538194691" },

  /* ---------- PINS ---------- */
  { id: "27538203130", name: "Iron Centre Pin", price: "Ask Price", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/metal-pin.html#27538203130" },
  { id: "27538206897", name: "Mild Steel Square Pin", price: "Ask Price", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/metal-pin.html#27538206897" },
  { id: "new-locating", name: "Steel Jig Locator Pin", price: "Ask Price", dimensions: "4.5 mm dia × 2 mm", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/locating-pin.html" },
  { id: "new-centerpin", name: "Center Pin", price: "Ask Price", dimensions: "0–50 mm", partNo: null, machine: "Bar Bending", url: "https://www.indiamart.com/partsco-india/stainless-steel-dowel-pins.html" },

  /* ---------- CHECKING BLOCKS ---------- */
  { id: "27510818088", name: "Checking Block for Bar Bending Machine", price: "Ask Price", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/checking-block.html#27510818088" },
  { id: "27538202233", name: "Stainless Steel Checking Block", price: "Ask Price", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/checking-block.html#27538202233" },
  { id: "27538206530", name: "Checking Block for Spartan Bar Bending Machine", price: "Price on Request", dimensions: "Not specified", partNo: null, machine: "Spartan", url: "https://www.indiamart.com/partsco-india/bar-cutting-machine.html#27538206530" },

  /* ---------- COUPLINGS ---------- */
  { id: "27510891633", name: "Coupling Nib Support", price: "Ask Price", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/camlock-coupling.html#27510891633" },
  { id: "27538196573", name: "Mild Steel Adopter Coupling", price: "Ask Price", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/camlock-coupling.html#27538196573" },
  { id: "27510881488", name: "Coupling Cam Sparton Bar Cutting Machine", price: "Ask Price", dimensions: "Not specified", partNo: null, machine: "Spartan", url: "https://www.indiamart.com/partsco-india/cutting-blades.html#27510881488" },
  { id: "27510911148", name: "Coupling Nib", price: "Ask Price", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/reverse-switch.html#27510911148" },
  { id: "new-nibguide", name: "Coupling NIB Guide Plate", price: "Ask Price", dimensions: "SS 304 · Galvanized", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/gear-guide-plate.html" },

  /* ---------- CONNECTING RODS ---------- */
  { id: "27510897712", name: "Connecting Rod Bush", price: "Ask Price", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/connecting-rod.html#27510897712" },
  { id: "27510886291", name: "Cast Iron Connecting Rod", price: "₹ 12,500 / Piece", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/connecting-rod.html#27510886291" },
  { id: "new-rodplate", name: "Connecting Rod Fitting Plate", price: "Ask Price", dimensions: "25 mm thick · SS 304", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/stainless-steel-plate.html" },

  /* ---------- SHAFTS ---------- */
  { id: "27510673748", name: "Mild Steel Eccentric Shafts", price: "₹ 10,500 / Piece", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/eccentric-shaft.html#27510673748" },
  { id: "27510947262", name: "Shaft Pinion for C-42 Bar Cutting Machine", price: "Price on Request", dimensions: "Not specified", partNo: "C-42", machine: null, url: "https://www.indiamart.com/partsco-india/bar-cutting-machine.html#27510947262" },
  { id: "new-eccbush", name: "Eccentric Shaft Support Bush", price: "Ask Price", dimensions: "Mild Steel · Single Groove", partNo: null, machine: "Bar Cutting", url: "https://www.indiamart.com/partsco-india/eccentric-bushings.html" },

  /* ---------- ELECTRICALS ---------- */
  { id: "27538212330", name: "Forward Reverse Switch", price: "Ask Price", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/reverse-switch.html#27538212330" },
  { id: "27538213273", name: "Emergency Stop Switch", price: "Price on Request", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/stop-switch.html#27538213273" },
  { id: "27538208430", name: "Lever Limit Switch", price: "Price on Request", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/limit-switch.html#27538208430" },
  { id: "new-panel", name: "Panel Mounted Plug And Socket", price: "₹ 650 / Piece", dimensions: "6 pin", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/industrial-plug-and-socket.html" },
  { id: "new-foot", name: "Foot Switch Bending Machine", price: "Ask Price", dimensions: "180 mm bending radius", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/bending-machine.html" },

  /* ---------- MACHINE PARTS ---------- */
  { id: "27538204130", name: "Mild Steel Dia Mandrel", price: "Ask Price", dimensions: "50 mm", partNo: "50mm", machine: null, url: "https://www.indiamart.com/partsco-india/dia-mandrel.html#27538204130" },
  { id: "27538207548", name: "Saddle Adjustment Knob", price: "Ask Price", dimensions: "15 mm × 6 mm", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/stainless-steel-knob.html#27538207548" },
  { id: "27510944697", name: "Main Gear for C-42 Bar Cutting Machine", price: "₹ 27,500 / Piece", dimensions: "Not specified", partNo: "C-42", machine: null, url: "https://www.indiamart.com/partsco-india/gear-cutting-machine.html#27510944697" },
  { id: "new-handspring", name: "Hand Lever Return Spring", price: "₹ 40 / Piece", dimensions: "6 mm × 6 in · 40 HRC", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/brake-springs.html" },
  { id: "new-2wayspring", name: "2 way spring Return sl", price: "Ask Price", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/pneumatic-components.html" },
  { id: "new-gearbush", name: "G.M Gear Bush", price: "Ask Price", dimensions: "850 mm · Aluminium", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/gear-bushing.html" },
  { id: "new-hose", name: "Iron Hose Connectors", price: "Ask Price", dimensions: "2 inch · Iron", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/hose-connectors.html" },
  { id: "new-endcap", name: "Inner Threght End Cap", price: "Ask Price", dimensions: "1 inch · UPVC", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/end-cap.html" },
  { id: "new-endtip", name: "End Tip needle End", price: "Ask Price", dimensions: "Mild Steel", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/transmission-filters.html" },
  { id: "new-hex", name: "Hexogonal shank", price: "Ask Price", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/integral-drill-rod.html" },
  { id: "new-trans", name: "Transmission Filter", price: "Ask Price", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/transmission-filters.html" },
  { id: "new-ecc-support", name: "Eccentric Shaft Support", price: "Ask Price", dimensions: "Not specified", partNo: null, machine: null, url: "https://www.indiamart.com/partsco-india/eccentric-bushings.html" }
];


/* =========================================================
   HTML ESCAPE
   ========================================================= */

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}


/* =========================================================
   CREATE PRODUCT CARD
   ========================================================= */

function createProductCard(product) {

  const specs = [];

  if (product.partNo) {
    specs.push(`
      <div class="spec-item">
        <span>Part No.</span>
        <strong>${escapeHTML(product.partNo)}</strong>
      </div>
    `);
  }

  if (product.machine) {
    specs.push(`
      <div class="spec-item">
        <span>Machine</span>
        <strong>${escapeHTML(product.machine)}</strong>
      </div>
    `);
  }

  if (product.dimensions && product.dimensions !== "Not specified") {
    specs.push(`
      <div class="spec-item">
        <span>Dimensions</span>
        <strong>${escapeHTML(product.dimensions)}</strong>
      </div>
    `);
  }

  specs.push(`
    <div class="spec-item">
      <span>Price</span>
      <strong class="price">${escapeHTML(product.price)}</strong>
    </div>
  `);

  return `
    <article class="product-card">

      <div class="product-category">
        ${escapeHTML(product.name.split(" ").slice(0, 2).join(" "))}
      </div>

      <h3 class="product-name">
        ${escapeHTML(product.name)}
      </h3>

      <div class="product-specs">
        ${specs.join("")}
      </div>

      <div class="product-actions">

        <a
          class="product-enquire im-link"
          href="${escapeHTML(product.url)}"
          target="_blank"
          rel="noopener"
        >
          View on IndiaMART ↗
        </a>

        <a
          class="product-call im-link"
          href="tel:+918047546467"
        >
          Call IndiaMART →
        </a>

      </div>

    </article>
  `;
}


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const productGrid = document.getElementById("productGrid");
const productSearch = document.getElementById("productSearch");
const clearSearch = document.getElementById("clearSearch");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");
const resetSearch = document.getElementById("resetSearch");


/* =========================================================
   STATE
   ========================================================= */

let currentSearch = "";


/* =========================================================
   FILTER PRODUCTS
   ========================================================= */

function getFilteredProducts() {

  const searchTerm = currentSearch.trim().toLowerCase();

  if (!searchTerm) return PRODUCTS;

  return PRODUCTS.filter(product => {

    const searchableText = [
      product.name,
      product.price,
      product.dimensions,
      product.partNo || "",
      product.machine || ""
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(searchTerm);
  });
}


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts() {

  const filtered = getFilteredProducts();

  productGrid.innerHTML = filtered.map(createProductCard).join("");

  resultCount.textContent =
    `Showing ${filtered.length} ${
      filtered.length === 1 ? "product" : "products"
    }`;

  noResults.hidden = filtered.length !== 0;

  clearSearch.classList.toggle("visible", currentSearch.length > 0);
}


/* =========================================================
   SEARCH
   ========================================================= */

productSearch.addEventListener("input", event => {
  currentSearch = event.target.value;
  renderProducts();
});

clearSearch.addEventListener("click", () => {
  productSearch.value = "";
  currentSearch = "";
  renderProducts();
  productSearch.focus();
});


/* =========================================================
   RESET SEARCH
   ========================================================= */

resetSearch.addEventListener("click", () => {
  productSearch.value = "";
  currentSearch = "";
  renderProducts();
});


/* =========================================================
   SCROLL PROGRESS
   ========================================================= */

const scrollProgress = document.getElementById("scrollProgress");

if (scrollProgress) {
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = pct + "%";
  }, { passive: true });
}


/* =========================================================
   INDIAMART CONFIRMATION MODAL
   ========================================================= */

const imModal = document.getElementById("imModal");

let pendingImURL = null;
let pendingImTarget = null;

function openImModal(url, target) {
  if (!imModal) return;

  pendingImURL = url;
  pendingImTarget = target;

  imModal.hidden = false;
  document.body.style.overflow = "hidden";

  const continueBtn = imModal.querySelector("[data-im-continue]");
  if (continueBtn) continueBtn.focus();
}

function closeImModal() {
  if (!imModal) return;

  imModal.hidden = true;
  document.body.style.overflow = "";

  pendingImURL = null;
  pendingImTarget = null;
}

function proceedImNavigation() {

  if (!pendingImURL) {
    closeImModal();
    return;
  }

  const url = pendingImURL;
  const target = pendingImTarget;

  closeImModal();

  if (target === "_blank") {
    window.open(url, "_blank", "noopener,noreferrer");
  } else {
    window.location.href = url;
  }
}

document.addEventListener("click", event => {

  const link = event.target.closest(".im-link");
  if (!link) return;

  event.preventDefault();

  const url = link.getAttribute("href");
  const target = link.getAttribute("target") || "";

  if (!url) return;

  openImModal(url, target);
});

if (imModal) {

  imModal.addEventListener("click", event => {

    if (event.target.closest("[data-im-cancel]")) {
      event.preventDefault();
      closeImModal();
      return;
    }

    if (event.target.closest("[data-im-continue]")) {
      event.preventDefault();
      proceedImNavigation();
    }
  });
}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && imModal && !imModal.hidden) {
    closeImModal();
  }
});


/* =========================================================
   INIT
   ========================================================= */

renderProducts();
