import { promises as fs } from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MENU_PDF_URL = "https://www.sunsien.nl/wp-content/uploads/2026/03/1-Menukaart-2026.pdf";
const ALLERGENEN_URL = "https://allergenen.sho-horeca.nl/kaart/sunsien";
const ITEMS_DIR = path.join(__dirname, "items");

const CATEGORY_NAV_LABELS = {
  combis: "Combi's",
  eenpersoons: "Eenpersoons",
  broodjes: "Broodjes",
  specialiteiten: "Specialiteiten",
  nieuwe: "Nieuw",
  surinaams: "Surinaams",
  caribisch: "Caribisch",
  vlees: "Vlees",
  kip: "Kip",
  ei: "Ei",
  groente: "Groente",
  nasi: "Nasi",
  bami: "Bami",
  mihoen: "Mihoen",
  snacks: "Snacks",
};

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(value = "") {
  return escapeHtml(value);
}

function trimDescription(value = "") {
  return String(value).replace(/\s+/g, " ").trim();
}

async function loadMenuModule() {
  const source = await fs.readFile(path.join(__dirname, "menu-data.js"), "utf8");
  const sandbox = {};
  vm.runInNewContext(
    `${source}
this.MENU_DATA = MENU_DATA;
this.CATEGORY_ORDER = CATEGORY_ORDER;
this.CATEGORY_BADGES = CATEGORY_BADGES;
this.CATEGORY_NOTES = CATEGORY_NOTES;
this.getItemsByCategory = getItemsByCategory;
this.getMenuItemImage = getMenuItemImage;
this.getMenuItemPath = getMenuItemPath;
`,
    sandbox
  );
  return sandbox;
}

function renderHeader(rootPrefix, { activePage = "" } = {}) {
  const homePath = `${rootPrefix}index.html`;
  const aboutPath = `${rootPrefix}about.html`;
  const menuPath = `${rootPrefix}menu.html`;
  const contactPath = `${rootPrefix}contact.html`;
  const lightLogoPath = `${rootPrefix}images/hero-title-logo-light.png`;

  return `
  <header class="header" id="header">
    <div class="header-inner">
      <a href="${homePath}" class="logo" id="logo">
        <img src="${lightLogoPath}"
          alt="Sun Sien Logo" class="logo-img">
      </a>

      <nav class="nav-links" id="nav-links">
        <a href="${homePath}"${activePage === "home" ? ' class="active"' : ""} data-i18n="nav.home">Home</a>
        <a href="${aboutPath}"${activePage === "about" ? ' class="active"' : ""} data-i18n="nav.about">Over Ons</a>
        <a href="${menuPath}"${activePage === "menu" ? ' class="active"' : ""} data-i18n="nav.menu">Menu</a>
        <a href="${contactPath}"${activePage === "contact" ? ' class="active"' : ""} data-i18n="nav.contact">Contact</a>
        <a href="tel:0104382505" class="nav-call-link" data-i18n="nav.callOrder">Bel &amp; Bestel</a>
        <p class="nav-call-note" data-i18n="common.callWaitNote"></p>
      </nav>

      <div class="header-actions">
        <button
          class="language-toggle"
          id="language-toggle"
          type="button"
          aria-label="Switch language to English">
          <span class="language-toggle-icon" aria-hidden="true">🌐</span>
          <span class="language-toggle-label" id="language-toggle-label">EN</span>
        </button>
        <a href="tel:0104382505" class="btn-call" id="nav-call-btn">
          <span class="call-icon">📞</span>
          <span class="call-text" data-i18n="common.callShort">Bellen</span>
        </a>
        <button class="nav-toggle" id="nav-toggle" aria-label="Menu openen" data-i18n-aria-label="common.openMenu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>`;
}

function renderFooter(rootPrefix) {
  const homePath = `${rootPrefix}index.html`;
  const menuPath = `${rootPrefix}menu.html`;
  const contactPath = `${rootPrefix}contact.html`;
  const lightLogoPath = `${rootPrefix}images/hero-title-logo-light.png`;

  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <img src="${lightLogoPath}" alt="Sun Sien"
            class="footer-logo">
          <p>
            <span data-i18n="brand.lineOne">Surinaams • Chinees • Caribisch</span><br>
            <span data-i18n="brand.lineTwo">Afhaalcentrum in Hoogvliet</span>
          </p>
        </div>
        <div class="footer-links">
          <a href="${homePath}" data-i18n="nav.home">Home</a>
          <a href="${menuPath}" data-i18n="nav.menu">Menu</a>
          <a href="${contactPath}" data-i18n="nav.contact">Contact</a>
          <a href="${ALLERGENEN_URL}" target="_blank" rel="noreferrer" data-i18n="common.allergens">Allergenen</a>
        </div>
        <div class="footer-contact">
          <a href="tel:0104382505">📞 010 438 2505</a>
          <a href="mailto:info@sunsien.nl">✉️ info@sunsien.nl</a>
          <a href="https://www.google.com/maps/search/?api=1&query=Oude+Wal+47+3193+EM+Hoogvliet+Rotterdam" target="_blank" rel="noreferrer">Oude Wal 47, 3193 EM Hoogvliet Rotterdam</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p data-i18n="footer.copyright">&copy; 2026 Sun Sien Afhaalcentrum – Alle rechten voorbehouden</p>
      </div>
    </div>
  </footer>

  <button class="list-fab" id="list-toggle" type="button" aria-controls="list-drawer" aria-expanded="false">
    <span class="list-fab-burst" aria-hidden="true">⚡</span>
    <span class="list-fab-copy">
      <span class="list-fab-title" data-i18n="list.cta">BOOM ORDER LIST</span>
      <span class="list-fab-total" id="list-total">€0,00</span>
    </span>
    <span class="list-fab-count" id="list-count">0</span>
  </button>

  <div class="list-overlay" id="list-overlay" hidden></div>

  <aside class="list-drawer" id="list-drawer" aria-hidden="true">
    <div class="list-drawer-header">
      <div>
        <span class="label-tag" data-i18n="list.label">Lijstje</span>
        <h2 data-i18n="list.drawerTitle">Jouw bestelling</h2>
      </div>
      <button class="list-close" id="list-close" type="button" aria-label="Lijstje sluiten" data-i18n-aria-label="list.close">×</button>
    </div>

    <div class="list-drawer-body">
      <p class="list-empty" id="list-empty" data-i18n="list.empty">Je lijstje is nog leeg.</p>
      <div class="list-items" id="list-items"></div>
    </div>

    <div class="list-drawer-footer">
      <p class="list-summary" id="list-summary">0 items in je lijstje</p>
      <div class="list-drawer-actions">
        <div class="cta-stack">
          <a href="tel:0104382505" class="btn btn-primary btn-sm" data-i18n="common.callShort">Bel</a>
          <p class="cta-note" data-i18n="common.callWaitNote"></p>
        </div>
        <button class="btn btn-glass btn-sm" id="list-copy" type="button" data-i18n="list.copy">Kopieer (En zet het in je notities!)</button>
        <button class="btn btn-glass btn-sm" id="list-clear" type="button" data-i18n="list.clear">Wis</button>
      </div>
    </div>
  </aside>

  <button class="scroll-top-btn" id="scroll-top-btn" aria-label="Terug naar boven" data-i18n-aria-label="common.scrollTop">↑</button>

  <script src="${rootPrefix}site-copy.js"></script>
  <script src="${rootPrefix}app.js"></script>`;
}

function renderMediaMarkup(imageUrl, name, { large = false } = {}) {
  if (imageUrl) {
    return `<img src="${escapeAttr(imageUrl)}" alt="${escapeAttr(name)}" loading="${large ? "eager" : "lazy"}">`;
  }

  return `<div class="${large ? "item-photo-placeholder" : "menu-item-media-placeholder"}">Foto volgt</div>`;
}

function renderMenuItemRow(item, getMenuItemImage, getMenuItemPath) {
  const imageUrl = getMenuItemImage(item);
  const href = getMenuItemPath(item);
  const description = trimDescription(item.desc);

  return `
        <a class="menu-item menu-item-link" href="${escapeAttr(href)}">
          <div class="menu-item-media">
            ${renderMediaMarkup(imageUrl, item.name)}
          </div>
          ${item.id != null ? `<span class="mi-num">${escapeHtml(item.id)}</span>` : ""}
          <div class="mi-info">
            <span class="mi-name">${escapeHtml(item.name)}</span>
            ${description ? `<span class="mi-desc">${escapeHtml(description)}</span>` : ""}
          </div>
          <span class="mi-price">${escapeHtml(item.price)}</span>
          <span class="menu-item-arrow" aria-hidden="true">›</span>
        </a>`;
}

function buildCategorySections({ CATEGORY_ORDER, CATEGORY_BADGES, CATEGORY_NOTES, getItemsByCategory, getMenuItemImage, getMenuItemPath }) {
  const categories = CATEGORY_ORDER.filter(category => getItemsByCategory(category).length > 0);

  const nav = categories
    .map(category => {
      const isActive = category === categories[0] ? ' class="cat-link active"' : ' class="cat-link"';
      const label = CATEGORY_NAV_LABELS[category] || getItemsByCategory(category)[0].catLabel;
      return `      <a href="#cat-${category}"${isActive} data-cat="cat-${category}" data-i18n="category.${category}">${escapeHtml(label)}</a>`;
    })
    .join("\n");

  const sections = categories
    .map(category => {
      const items = getItemsByCategory(category);
      const badge = CATEGORY_BADGES[category];
      const note = CATEGORY_NOTES[category];
      const title = items[0].catLabel;

      return `
    <section class="menu-category" id="cat-${category}">
      <div class="cat-header">
        <h2 data-i18n="category.${category}">${escapeHtml(title)}</h2>${badge ? `<span class="badge ${escapeAttr(badge.class)}">${escapeHtml(badge.text)}</span>` : ""}
      </div>
      ${note ? `<div class="cat-note">${escapeHtml(note)}</div>` : ""}
      <div class="menu-items">
${items.map(item => renderMenuItemRow(item, getMenuItemImage, getMenuItemPath)).join("\n")}
      </div>
    </section>`;
    })
    .join("\n");

  return { nav, sections };
}

function getItemCopy(item, CATEGORY_NOTES) {
  const description = trimDescription(item.desc);
  const categoryNote = trimDescription(CATEGORY_NOTES[item.category] || "");

  if (!description && !categoryNote) {
    return {
      description: "Beschrijving volgt.",
      note: "",
    };
  }

  return {
    description: description || categoryNote,
    note: description && categoryNote && !description.includes(categoryNote) ? categoryNote : "",
  };
}

function renderBroodjesOptions(item) {
  if (item.category !== "broodjes") {
    return "";
  }

  return `
            <label class="order-field">
              <span class="order-field-label" data-i18n="order.sambal">Sambal</span>
              <select name="sambal" class="order-select">
                <option value="with_sambal" data-i18n="order.sambal.with">Met sambal</option>
                <option value="extra_sambal" data-i18n="order.sambal.extra">Met extra sambal</option>
                <option value="without_sambal" data-i18n="order.sambal.without">Zonder sambal</option>
              </select>
            </label>

            <label class="order-field">
              <span class="order-field-label" data-i18n="order.cucumber">Komkommer</span>
              <select name="komkommer" class="order-select">
                <option value="with_cucumber" data-i18n="order.cucumber.with">Met komkommer</option>
                <option value="without_cucumber" data-i18n="order.cucumber.without">Zonder komkommer</option>
              </select>
            </label>`;
}

function renderOrderForm(item) {
  const gridClass = item.category === "broodjes"
    ? "item-order-grid"
    : "item-order-grid item-order-grid--single";

  return `
          <form
            class="item-order-form"
            data-item-id="${escapeAttr(item.id ?? "")}"
            data-item-name="${escapeAttr(item.name)}"
            data-item-price="${escapeAttr(item.price)}"
            data-item-category="${escapeAttr(item.category)}">
            <div class="${gridClass}">
              <label class="order-field order-field-quantity">
                <span class="order-field-label" data-i18n="order.quantity">Aantal</span>
                <div class="quantity-stepper">
                  <button type="button" class="quantity-btn" data-qty-action="decrease" aria-label="Aantal verlagen" data-i18n-aria-label="order.decreaseQuantity">−</button>
                  <input class="quantity-input" type="number" name="quantity" min="1" max="99" value="1" inputmode="numeric">
                  <button type="button" class="quantity-btn" data-qty-action="increase" aria-label="Aantal verhogen" data-i18n-aria-label="order.increaseQuantity">+</button>
                </div>
              </label>
${renderBroodjesOptions(item)}
            </div>

            <div class="item-order-footer">
              <button class="btn btn-primary" type="submit" data-i18n="order.addToList">Aan lijstje toevoegen</button>
              <p class="item-order-feedback" aria-live="polite"></p>
            </div>
          </form>`;
}

function renderMenuPage(moduleData) {
  const {
    CATEGORY_ORDER,
    CATEGORY_BADGES,
    CATEGORY_NOTES,
    getItemsByCategory,
    getMenuItemImage,
    getMenuItemPath,
  } = moduleData;
  const { nav, sections } = buildCategorySections({
    CATEGORY_ORDER,
    CATEGORY_BADGES,
    CATEGORY_NOTES,
    getItemsByCategory,
    getMenuItemImage,
    getMenuItemPath,
  });

  return `<!DOCTYPE html>
<html lang="nl">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>Menu – Sun Sien Afhaalcentrum</title>
  <meta name="description"
    content="Bekijk het Sun Sien menu, gesorteerd van laag naar hoog, met een eigen pagina voor elk gerecht.">
  <meta name="theme-color" content="#CA1414" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="index.css">
  <link rel="icon" href="https://www.sunsien.nl/wp-content/uploads/2022/09/cropped-SunSien-colored@1x-32x32.png">
</head>

<body class="menu-page">
${renderHeader("", { activePage: "menu" })}

  <section class="menu-hero">
    <h1 data-i18n="menuPage.title">Onze Menukaart</h1>
    <div class="menu-hero-actions">
      <a href="${MENU_PDF_URL}" class="btn btn-glass btn-sm" target="_blank" rel="noreferrer" data-i18n="common.menuPdf">📋 Menu (PDF)</a>
      <a href="${ALLERGENEN_URL}" class="btn btn-glass btn-sm" target="_blank" rel="noreferrer" data-i18n="common.allergens">⚕️ Allergenen</a>
    </div>
  </section>

  <div class="category-nav-wrapper" id="category-nav-wrapper">
    <nav class="category-nav" id="category-nav">
${nav}
    </nav>
  </div>

  <main class="menu-content" id="menu-content">
${sections}

    <div class="menu-bottom-cta">
      <div class="menu-bottom-actions">
        <a href="${MENU_PDF_URL}" class="btn btn-primary" target="_blank" rel="noreferrer" data-i18n="common.menuPdf">📋 Menu PDF</a>
        <a href="${ALLERGENEN_URL}" class="btn btn-glass" target="_blank" rel="noreferrer" data-i18n="common.allergens">Allergenen</a>
        <div class="cta-stack">
          <a href="tel:0104382505" class="btn btn-primary" data-i18n="common.callShort">Bellen</a>
          <p class="cta-note" data-i18n="common.callWaitNote"></p>
        </div>
      </div>
    </div>
  </main>

${renderFooter("")}
</body>

</html>
`;
}

function renderItemPage(item, moduleData) {
  const { CATEGORY_NOTES, getMenuItemImage } = moduleData;
  const imageUrl = getMenuItemImage(item);
  const { description, note } = getItemCopy(item, CATEGORY_NOTES);
  const itemNumber = item.id != null ? `Nr. ${item.id}` : "Menu item";
  const titlePrefix = item.id != null ? `${item.id}. ` : "";
  const pageTitle = `${titlePrefix}${item.name} – Sun Sien Menu`;
  const metaDescription = `${item.name} bij Sun Sien. ${description} Prijs: ${item.price}`.slice(0, 155);

  return `<!DOCTYPE html>
<html lang="nl">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>${escapeHtml(pageTitle)}</title>
  <meta name="description" content="${escapeAttr(metaDescription)}">
  <meta name="theme-color" content="#CA1414" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../index.css">
  <link rel="icon" href="https://www.sunsien.nl/wp-content/uploads/2022/09/cropped-SunSien-colored@1x-32x32.png">
</head>

<body class="item-detail-page">
${renderHeader("../", { activePage: "menu" })}

  <main>
    <div class="item-detail-shell">
      <nav class="item-breadcrumbs" aria-label="Broodkruimel">
        <a href="../menu.html" data-i18n="nav.menu">Menu</a>
        <span>/</span>
        <a href="../menu.html#cat-${escapeAttr(item.category)}" data-i18n="category.${item.category}">${escapeHtml(item.catLabel)}</a>
        <span>/</span>
        <span>${escapeHtml(itemNumber)}</span>
      </nav>

      <article class="item-card">
        <div class="item-photo">
          ${renderMediaMarkup(imageUrl, item.name, { large: true })}
        </div>

        <div class="item-content">
          <div class="item-kicker"><span data-i18n="category.${item.category}">${escapeHtml(item.catLabel)}</span> • ${escapeHtml(itemNumber)}</div>
          <h1 class="item-title">${escapeHtml(item.name)}</h1>
          <p class="item-description">${escapeHtml(description)}</p>

          <div class="item-pricing">
            <span class="item-pricing-label" data-i18n="common.price">Prijs</span>
            <strong class="item-pricing-value">${escapeHtml(item.price)}</strong>
          </div>

${renderOrderForm(item)}

          <div class="item-actions">
            <div class="cta-stack">
              <a href="tel:0104382505" class="btn btn-primary" data-i18n="item.callOrder">Bel &amp; bestel</a>
              <p class="cta-note" data-i18n="common.callWaitNote"></p>
            </div>
            <a href="../menu.html#cat-${escapeAttr(item.category)}" class="btn btn-glass" data-i18n="item.backToMenu">Terug naar menu</a>
          </div>

          ${note ? `<p class="item-note">${escapeHtml(note)}</p>` : ""}
        </div>
      </article>
    </div>
  </main>

${renderFooter("../")}
</body>

</html>
`;
}

async function writeGeneratedFiles() {
  const moduleData = await loadMenuModule();
  const { MENU_DATA, getMenuItemPath } = moduleData;

  await fs.rm(ITEMS_DIR, { recursive: true, force: true });
  await fs.mkdir(ITEMS_DIR, { recursive: true });

  await fs.writeFile(path.join(__dirname, "menu.html"), renderMenuPage(moduleData), "utf8");

  for (const item of MENU_DATA) {
    const relativePath = getMenuItemPath(item);
    const outputPath = path.join(__dirname, relativePath);
    await fs.writeFile(outputPath, renderItemPage(item, moduleData), "utf8");
  }

  console.log(`Generated menu.html and ${MENU_DATA.length} item pages.`);
}

writeGeneratedFiles().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
