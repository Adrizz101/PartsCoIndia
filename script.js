/* =========================================================
   PRODUCTS
   =========================================================
   Part No. and Machine fields are derived from the product
   name where possible. Where they can't be derived, the
   field is set to null and hidden on the card.
   ========================================================= */

const PRODUCTS = [
  {
    id: "27510883830",
    name: "4 Hole Cutting Blade",
    price: "Ask Price",
    dimensions: "Not specified",
    partNo: null,
    machine: null,
    category: "cutting",
    categoryName: "Cutting Blades",
    url: "https://www.indiamart.com/partsco-india/cutting-blade.html#27510883830"
  },
  {
    id: "27538191855",
    name: "C52 Bar Cutting Blade",
    price: "Ask Price",
    dimensions: "Not specified",
    partNo: "C52",
    machine: null,
    category: "cutting",
    categoryName: "Cutting Blades",
    url: "https://www.indiamart.com/partsco-india/cutting-blade.html#27538191855"
  },
  {
    id: "27538191597",
    name: "Cutting Blade C42 Jaypee",
    price: "Ask Price",
    dimensions: "78 × 58 × 25 mm",
    partNo: "C42",
    machine: "Jaypee",
    category: "cutting",
    categoryName: "Cutting Blades",
    url: "https://www.indiamart.com/partsco-india/cutting-blade.html#27538191597"
  },
  {
    id: "27538203130",
    name: "Iron Centre Pin",
    price: "Ask Price",
    dimensions: "Not specified",
    partNo: null,
    machine: null,
    category: "pins",
    categoryName: "Metal Pins",
    url: "https://www.indiamart.com/partsco-india/metal-pin.html#27538203130"
  },
  {
    id: "27538206897",
    name: "Mild Steel Square Pin",
    price: "Ask Price",
    dimensions: "Not specified",
    partNo: null,
    machine: null,
    category: "pins",
    categoryName: "Metal Pins",
    url: "https://www.indiamart.com/partsco-india/metal-pin.html#27538206897"
  },
  {
    id: "27538193988",
    name: "Sigma DCM 52 Cutting Blade",
    price: "₹ 1,250 / Piece",
    dimensions: "85 × 85 × 25 mm",
    partNo: "DCM 52",
    machine: "Sigma",
    category: "cutting",
    categoryName: "Cutting Blades",
    url: "https://www.indiamart.com/partsco-india/metal-pin.html#27538193988"
  },
  {
    id: "27510818088",
    name: "Checking Block for Bar Bending Machine",
    price: "Ask Price",
    dimensions: "Not specified",
    partNo: null,
    machine: null,
    category: "checking",
    categoryName: "Checking Blocks",
    url: "https://www.indiamart.com/partsco-india/checking-block.html#27510818088"
  },
  {
    id: "27538202233",
    name: "Stainless Steel Checking Block",
    price: "Ask Price",
    dimensions: "Not specified",
    partNo: null,
    machine: null,
    category: "checking",
    categoryName: "Checking Blocks",
    url: "https://www.indiamart.com/partsco-india/checking-block.html#27538202233"
  },
  {
    id: "27510891633",
    name: "Coupling Nib Support",
    price: "Ask Price",
    dimensions: "Not specified",
    partNo: null,
    machine: null,
    category: "coupling",
    categoryName: "Camlock Couplings",
    url: "https://www.indiamart.com/partsco-india/camlock-coupling.html#27510891633"
  },
  {
    id: "27538196573",
    name: "Mild Steel Adopter Coupling",
    price: "Ask Price",
    dimensions: "Not specified",
    partNo: null,
    machine: null,
    category: "coupling",
    categoryName: "Camlock Couplings",
    url: "https://www.indiamart.com/partsco-india/camlock-coupling.html#27538196573"
  },
  {
    id: "27538194691",
    name: "Stainless Steel Bar Cutting Blades",
    price: "Ask Price",
    dimensions: "Not specified",
    partNo: null,
    machine: null,
    category: "cutting",
    categoryName: "Cutting Blades",
    url: "https://www.indiamart.com/partsco-india/cutting-blades.html#27538194691"
  },
  {
    id: "27510881488",
    name: "Coupling Cam Sparton Bar Cutting Machine",
    price: "Ask Price",
    dimensions: "Not specified",
    partNo: null,
    machine: "Spartan",
    category: "coupling",
    categoryName: "Camlock Couplings",
    url: "https://www.indiamart.com/partsco-india/cutting-blades.html#27510881488"
  },
  {
    id: "27510897712",
    name: "Connecting Rod Bush",
    price: "Ask Price",
    dimensions: "Not specified",
    partNo: null,
    machine: null,
    category: "connecting",
    categoryName: "Connecting Rods",
    url: "https://www.indiamart.com/partsco-india/connecting-rod.html#27510897712"
  },
  {
    id: "27510886291",
    name: "Cast Iron Connecting Rod",
    price: "₹ 12,500 / Piece",
    dimensions: "Not specified",
    partNo: null,
    machine: null,
    category: "connecting",
    categoryName: "Connecting Rods",
    url: "https://www.indiamart.com/partsco-india/connecting-rod.html#27510886291"
  },
  {
    id: "27510911148",
    name: "Coupling Nib",
    price: "Ask Price",
    dimensions: "Not specified",
    partNo: null,
    machine: null,
    category: "coupling",
    categoryName: "Camlock Couplings",
    url: "https://www.indiamart.com/partsco-india/reverse-switch.html#27510911148"
  },
  {
    id: "27538212330",
    name: "Forward Reverse Switch",
    price: "Ask Price",
    dimensions: "Not specified",
    partNo: null,
    machine: null,
    category: "electrical",
    categoryName: "Switches & Electricals",
    url: "https://www.indiamart.com/partsco-india/reverse-switch.html#27538212330"
  },
  {
    id: "27510673748",
    name: "Mild Steel Eccentric Shafts",
    price: "₹ 10,500 / Piece",
    dimensions: "Not specified",
    partNo: null,
    machine: null,
    category: "shafts",
    categoryName: "Shafts",
    url: "https://www.indiamart.com/partsco-india/eccentric-shaft.html#27510673748"
  },
  {
    id: "27538204130",
    name: "Mild Steel Dia Mandrel",
    price: "Ask Price",
    dimensions: "50 mm",
    partNo: "50mm",
    machine: null,
    category: "machine",
    categoryName: "Machine Parts",
    url: "https://www.indiamart.com/partsco-india/dia-mandrel.html#27538204130"
  },
  {
    id: "27538207548",
    name: "Saddle Adjustment Knob",
    price: "Ask Price",
    dimensions: "Not specified",
    partNo: null,
    machine: null,
    category: "machine",
    categoryName: "Machine Parts",
    url: "https://www.indiamart.com/partsco-india/stainless-steel-knob.html#27538207548"
  },
  {
    id: "27510944697",
    name: "Main Gear for C-42 Bar Cutting Machine",
    price: "₹ 27,500 / Piece",
    dimensions: "Not specified",
    partNo: "C-42",
    machine: null,
    category: "machine",
    categoryName: "Machine Parts",
    url: "https://www.indiamart.com/partsco-india/gear-cutting-machine.html#27510944697"
  },
  {
    id: "27538206530",
    name: "Checking Block for Spartan Bar Bending Machine",
    price: "Price on Request",
    dimensions: "Not specified",
    partNo: null,
    machine: "Spartan",
    category: "checking",
    categoryName: "Checking Blocks",
    url: "https://www.indiamart.com/partsco-india/bar-cutting-machine.html#27538206530"
  },
  {
    id: "27510947262",
    name: "Shaft Pinion for C-42 Bar Cutting Machine",
    price: "Price on Request",
    dimensions: "Not specified",
    partNo: "C-42",
    machine: null,
    category: "shafts",
    categoryName: "Shafts",
    url: "https://www.indiamart.com/partsco-india/bar-cutting-machine.html#27510947262"
  },
  {
    id: "27538213273",
    name: "Emergency Stop Switch",
    price: "Price on Request",
    dimensions: "Not specified",
    partNo: null,
    machine: null,
    category: "electrical",
    categoryName: "Switches & Electricals",
    url: "https://www.indiamart.com/partsco-india/stop-switch.html#27538213273"
  },
  {
    id: "27538208430",
    name: "Lever Limit Switch",
    price: "Price on Request",
    dimensions: "Not specified",
    partNo: null,
    machine: null,
    category: "electrical",
    categoryName: "Switches & Electricals",
    url: "https://www.indiamart.com/partsco-india/limit-switch.html#27538208430"
  }
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

  const whatsappText = encodeURIComponent(
    `Hello Partsco India, I would like to enquire about ${product.name}.`
  );

  return `
    <article class="product-card">

      <div class="product-category">
        ${escapeHTML(product.categoryName)}
      </div>

      <h3 class="product-name">
        ${escapeHTML(product.name)}
      </h3>

      <div class="product-specs">
        ${specs.join("")}
      </div>

      <div class="product-actions">

        <a
          class="product-enquire"
          href="https://wa.me/918047546467?text=${whatsappText}"
          target="_blank"
          rel="noopener"
        >
          Enquire
        </a>

        <a
          class="product-view"
          href="${escapeHTML(product.url)}"
          target="_blank"
          rel="noopener"
        >
          View on IndiaMART
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
const categoryFilters = document.getElementById("categoryFilters");
const categoryGrid = document.getElementById("categoryGrid");


/* =========================================================
   STATE
   ========================================================= */

let currentCategory = "all";
let currentSearch = "";


/* =========================================================
   FILTER PRODUCTS
   ========================================================= */

function getFilteredProducts() {

  const searchTerm = currentSearch.trim().toLowerCase();

  return PRODUCTS.filter(product => {

    const categoryMatch =
      currentCategory === "all" ||
      product.category === currentCategory;

    if (!categoryMatch) return false;
    if (!searchTerm) return true;

    const searchableText = [
      product.name,
      product.categoryName,
      product.category,
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
   CATEGORY FILTERS
   ========================================================= */

categoryFilters.addEventListener("click", event => {
  const button = event.target.closest(".filter-btn");
  if (!button) return;

  document
    .querySelectorAll(".filter-btn")
    .forEach(btn => btn.classList.remove("active"));

  button.classList.add("active");
  currentCategory = button.dataset.category;
  renderProducts();
});


/* =========================================================
   RESET SEARCH
   ========================================================= */

resetSearch.addEventListener("click", () => {
  productSearch.value = "";
  currentSearch = "";
  currentCategory = "all";

  document
    .querySelectorAll(".filter-btn")
    .forEach(button => button.classList.remove("active"));

  const allButton = document.querySelector('.filter-btn[data-category="all"]');
  if (allButton) allButton.classList.add("active");

  renderProducts();
});


/* =========================================================
   CATEGORY GRID
   ========================================================= */

const CATEGORY_LABELS = {
  cutting: "Cutting Blades",
  pins: "Pins",
  checking: "Checking Blocks",
  coupling: "Couplings",
  connecting: "Connecting Rods",
  shafts: "Shafts",
  electrical: "Electricals",
  machine: "Machine Parts"
};

function buildCategoryGrid() {

  if (!categoryGrid) return;

  const counts = {};
  PRODUCTS.forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });

  categoryGrid.innerHTML = Object.entries(CATEGORY_LABELS)
    .filter(([key]) => counts[key])
    .map(([key, label]) => `
      <button
        type="button"
        class="category-tile"
        data-category="${key}"
      >
        <span class="category-name">${label}</span>
        <span class="category-count">
          ${counts[key]} ${counts[key] === 1 ? "product" : "products"}
        </span>
      </button>
    `)
    .join("");

  categoryGrid.addEventListener("click", event => {
    const tile = event.target.closest(".category-tile");
    if (!tile) return;

    const category = tile.dataset.category;

    document
      .querySelectorAll(".filter-btn")
      .forEach(btn => {
        btn.classList.toggle("active", btn.dataset.category === category);
      });

    currentCategory = category;
    productSearch.value = "";
    currentSearch = "";

    renderProducts();

    document
      .getElementById("catalog")
      .scrollIntoView({ behavior: "smooth" });
  });
}


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
   INIT
   ========================================================= */

buildCategoryGrid();
renderProducts();
