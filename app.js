/* ===== DOM READY ===== */
document.addEventListener('DOMContentLoaded', () => {
  const LIST_STORAGE_KEY = 'sun-sien-list-v1';
  const LIST_SHARE_PARAM = 'lijst';
  const LANGUAGE_STORAGE_KEY = 'sun-sien-language-v1';
  const DEFAULT_LANGUAGE = 'nl';
  const SUPPORTED_LANGUAGES = new Set(['nl', 'en']);
  const SHARED_COPY = globalThis.SUN_SIEN_COPY ?? {
    callWaitNote: {
      nl: 'Afhalen na 1 uur na het plaatsen van een telefonische bestelling.',
      en: 'Pickup about 1 hour after placing a phone order.',
    },
  };

  const TRANSLATIONS = {
    nl: {
      'brand.lineOne': 'Surinaams • Chinees • Caribisch',
      'brand.lineTwo': 'Afhaalcentrum in Hoogvliet',
      'nav.home': 'Home',
      'nav.about': 'Over Ons',
      'nav.menu': 'Menu',
      'nav.contact': 'Contact',
      'nav.callOrder': 'Bel & bestel',
      'common.callShort': 'Bellen',
      'common.openMenu': 'Menu openen',
      'common.closeMenu': 'Menu sluiten',
      'common.scrollTop': 'Terug naar boven',
      'common.allergens': 'Allergenen',
      'common.menuPdf': 'Menu PDF',
      'common.route': 'Route plannen',
      'common.routeInline': 'Route plannen ->',
      'common.callWaitNote': SHARED_COPY.callWaitNote.nl,
      'common.phone': 'Telefoon',
      'common.address': 'Adres',
      'common.hours': 'Openingstijden',
      'common.price': 'Prijs',
      'status.open': 'Nu geopend',
      'status.closed': 'Nu gesloten',
      'status.openUntil': 'Nu geopend · Tot {time}',
      'status.closedOpensToday': 'Nu gesloten · Opent vandaag om {time}',
      'status.closedOpensTomorrow': 'Nu gesloten · Opent morgen om {time}',
      'status.closedOpensDay': 'Nu gesloten · Opent {day} om {time}',
      'day.monday': 'Maandag',
      'day.tuesday': 'Dinsdag',
      'day.wednesday': 'Woensdag',
      'day.thursday': 'Donderdag',
      'day.friday': 'Vrijdag',
      'day.saturday': 'Zaterdag',
      'day.sunday': 'Zondag',
      'footer.copyright': '© 2026 Sun Sien Afhaalcentrum - Alle rechten voorbehouden',
      'home.heroTitle': 'Sun Sien',
      'home.heroEyebrow': 'Welkom bij',
      'home.highlightTitle': 'Surinaams',
      'home.highlightCopy': 'Roti, moksi meti, pom en meer',
      'home.menuLabel': 'Populaire categorieen',
      'home.menuHeading': 'Ontdek onze gerechten',
      'home.menuCopy': 'Meer dan 100 authentieke Surinaamse, Chinese en Caribische gerechten - allemaal dagvers bereid met de beste ingredienten.',
      'home.menuCta': 'Bekijk volledige menu ->',
      'home.aboutHeading': 'Een begrip in Hoogvliet',
      'home.aboutCopyOne': 'Heb je trek in Surinaams, Chinees of Caribisch eten? Dan ben je bij Sun Sien aan het juiste adres. Al meer dan 40 jaar zijn we een vertrouwd afhaalcentrum in Hoogvliet en omstreken.',
      'home.aboutCopyTwo': 'Je kunt vooral bij ons afhalen, maar ook even rustig iets eten. Kom gerust langs.',
      'home.aboutCopyThree': 'We koken dagelijks vers en staan bekend om klassiekers als roti, moksi meti, broodjes en warme Surinaamse en Chinese gerechten.',
      'home.noticePhoneTitle': 'Telefonisch bestellen',
      'home.noticePhoneBody': 'De tijd voor afhalen van een bestelling die via telefoon is geplaatst bedraagt altijd <strong>minimaal een uur</strong>. Indien u niet zo lang kunt wachten, kunt u beter in de winkel bestellen.',
      'home.noticePhoneTag': 'Minimaal 1 uur wachttijd',
      'home.noticeFridayTitle': 'Drukte op vrijdag',
      'home.noticeFridayBody': 'Vanwege de drukte op vrijdag is de kans groot dat de telefoon tussen <strong>11:30 en 12:30</strong> niet wordt opgenomen. Bellen kan tussen <strong>09:00 en 11:00</strong>.',
      'home.noticeFridayTag': 'Vrijdag bellen voor 11:00',
      'home.reviewsLabel': 'Reviews',
      'home.reviewsHeading': 'Wat onze klanten zeggen',
      'home.reviewOneQuote': '"Top plaats! Altijd lekker!"',
      'home.reviewTwoQuote': '"Het was afhaal maar het eten was zeer goed voor de prijs."',
      'home.reviewThreeQuote': '"Lekker broodje, geweldige Soto soep of roti rol."',
      'home.reviewSource': 'Google',
      'home.contactHeading': 'Neem contact op',
      'home.contactSubtitle': 'Bel ons om te bestellen of kom langs bij onze zaak in Hoogvliet.',
      'home.contactPageCta': 'FAQ & reviews',
      'home.contactPhoneCopy': 'Bel om te bestellen of voor vragen.',
      'home.contactAddressCopy': 'Hoogvliet, Rotterdam',
      'about.title': 'Over Ons',
      'about.subtitle': 'Al meer dan 40 jaar een vertrouwd afhaalcentrum in Hoogvliet en omstreken.',
      'contact.label': 'Contact & FAQ',
      'contact.title': 'Contact',
      'contact.subtitle': 'Bekijk onze veelgestelde vragen om te zien of wij deze voor je kunnen beantwoorden. Neem anders gerust contact op.',
      'contact.addressBlock': 'Oude Wal 47<br>3193 EM Hoogvliet Rotterdam',
      'contact.reviewKicker': 'Google reviews',
      'contact.reviewScoreCopy': 'Publieke Google score zoals weergegeven via Restaurant Guru.',
      'contact.reviewGoogleLink': 'Bekijk op Google Maps',
      'contact.reviewSourceLink': 'Review bron',
      'contact.phoneCopy': 'Bel om te bestellen, iets te checken of een gerecht na te vragen.',
      'contact.addressCopy': '3193 EM Hoogvliet Rotterdam',
      'contact.faqLabel': 'Veelgestelde vragen',
      'contact.faqTitle': 'Praktische dingen die mensen vaak willen weten',
      'contact.faqSubtitle': 'Kort en duidelijk, zodat je snel weet waar je aan toe bent.',
      'contact.moreInfoLabel': 'Nog even checken?',
      'contact.moreInfoTitle': 'Gebruik de kaart en allergenenpagina als laatste check',
      'contact.moreInfoCopy': 'Voor allergenen, ingredienten en dieetwensen blijft even bellen het veiligst. De online kaart is handig, maar niet alles staat daar expliciet op gemarkeerd.',
      'contact.reviewLabel': 'Review spotlight',
      'contact.reviewTitle': 'Reviews',
      'contact.reviewSubtitle': 'Kort, visueel en meteen duidelijk.',
      'contact.reviewCardSource': 'Google review snippet',
      'contact.reviewGijsQuote': '"Echt een toptent. Eten altijd goed."',
      'contact.reviewGijsMeta': 'Gijs van Mechelen · · via Google',
      'contact.reviewDanielBody': 'Food 5 · Service 5 · Atmosphere 5',
      'contact.reviewDanielMeta': 'Publieke scorekaart zoals getoond in het Google-overzicht.',
      'contact.reviewRobertBody': 'Food 5 · Service 5 · Atmosphere 5',
      'contact.reviewRobertMeta': 'Nog een publieke 5/5-score uit dezelfde Google-linked reviewfeed.',
      'contact.themeRoti': 'Roti wordt vaak genoemd',
      'contact.themeSandwiches': 'Broodjes vallen op',
      'contact.themeChicken': 'Kip komt vaak terug',
      'contact.themeService': 'Vriendelijke service',
      'contact.themeAtmosphere': 'Fijne sfeer',
      'contact.sourceNote': 'Bronnen: het originele <a href="https://www.sunsien.nl" target="_blank" rel="noreferrer">sunsien.nl</a> voor de uitleg over de wachtrij, de publieke <a href="https://allergenen.sho-horeca.nl/kaart/sunsien" target="_blank" rel="noreferrer">allergenenkaart</a> voor dieetinformatie, en publieke Google-gelinkte reviewsnippets via <a href="https://restaurantguru.com/Sun-Sien-Hoogvliet-Rotterdam" target="_blank" rel="noreferrer">Restaurant Guru</a>.',
      'faq.queueQuestion': 'Sta ik in dezelfde rij met mensen die aan de balie bestellen als ik via telefoon bestel ?',
      'faq.queueAnswer': 'Ja. Bestellingen via telefoon en en mensen die bestelling aan de balie doen sluiten zich aan te sluiten in 1 rij',
      'faq.halalQuestion': 'Zijn er halal opties?',
      'faq.halalAnswer': 'Op de publieke menukaart en allergenenkaart staat geen halal-label. Bel even voor een specifiek gerecht als dit belangrijk is voor je bestelling.',
      'faq.phoneQuestion': 'Kan ik telefonisch bestellen?',
      'faq.phoneAnswer': 'Ja, maar voor telefonisch geplaatste bestellingen geldt volgens de site meestal minimaal een uur wachttijd voor afhalen.',
      'faq.fridayQuestion': 'Wanneer kan ik op vrijdag het beste bellen?',
      'faq.fridayAnswer': 'Vrijdag is het tussen 11:30 en 12:30 vaak te druk aan de telefoon. De site adviseert om tussen 09:00 en 11:00 te bellen.',
      'menuPage.title': 'Onze menukaart',
      'menu.heroLabel': 'Menu',
      'menu.heroSubtitle': 'Blader snel door categorieen, check prijzen en open een gerecht voor details.',
      'menu.heroPanelKicker': 'Sneller kiezen',
      'menu.heroPanelBody': 'Gebruik de categorieenbalk om direct te springen, of open een gerecht voor meer detail.',
      'menu.heroTagPhone': 'Telefonisch bestellen',
      'menu.heroTagDetails': 'Details per gerecht',
      'menu.statsCategories': 'categorieen',
      'menu.statsDishes': 'keuzes',
      'menu.statsFrom': 'vanaf',
      'menu.lineupHeading': 'Ontdek de categorieen.',
      'menu.lineupLink': 'Bekijk alle categorieen \u203a',
      'menu.lineupFromPrice': 'Vanaf {price}',
      'menu.lineupCta': 'Naar categorie',
      'menu.lineupCtaNamed': 'Naar {category}',
      'item.callOrder': 'Bel & bestel',
      'item.backToMenu': 'Terug naar menu',
      'order.quantity': 'Aantal',
      'order.decreaseQuantity': 'Aantal verlagen',
      'order.increaseQuantity': 'Aantal verhogen',
      'order.addToList': 'Aan lijstje toevoegen',
      'order.sambal': 'Sambal',
      'order.sambal.with': 'Met sambal',
      'order.sambal.extra': 'Met extra sambal',
      'order.sambal.without': 'Zonder sambal',
      'order.cucumber': 'Komkommer',
      'order.cucumber.with': 'Met komkommer',
      'order.cucumber.without': 'Zonder komkommer',
      'list.label': 'Bestelling',
      'list.cta': 'Je bestelling',
      'list.drawerTitle': 'Jouw bestelling',
      'list.close': 'Lijstje sluiten',
      'list.empty': 'Je lijstje is nog leeg.',
      'list.copy': 'Kopieer (En zet het in je notities!)',
      'list.clear': 'Wis',
      'list.remove': 'Verwijder',
      'list.added': 'Toegevoegd aan je lijstje.',
      'list.copyTitle': 'Sun Sien lijstje',
      'list.confirmClear': 'Wil je het hele lijstje wissen?',
      'list.noticeTitle': 'Alleen lijstje',
      'list.noticeBody': 'Niet bestelbaar via deze site',
      'list.saveLink': 'Bewaar via link',
      'list.saveLinkCopied': 'Link gekopieerd',
      'list.summarySingular': '{count} item in je lijstje',
      'list.summaryPlural': '{count} items in je lijstje',
      'list.qtyTimes': '{count} x {amount}',
      'list.fromAmount': 'Vanaf {amount}',
      'list.totalExact': 'Totaal {amount}',
      'list.totalFrom': 'Totaal vanaf {amount}',
      'list.totalRange': 'Totaal {min} - {max}',
      'category.combis': "Combi's",
      'category.eenpersoons': 'Eenpersoons',
      'category.broodjes': 'Broodjes',
      'category.specialiteiten': 'Specialiteiten',
      'category.nieuwe': 'Nieuw',
      'category.surinaams': 'Surinaams',
      'category.caribisch': 'Caribisch',
      'category.vlees': 'Vlees',
      'category.kip': 'Kip',
      'category.ei': 'Ei',
      'category.groente': 'Groente',
      'category.nasi': 'Nasi',
      'category.bami': 'Bami',
      'category.mihoen': 'Mihoen',
      'category.snacks': 'Snacks',
      'language.switchTo': 'Schakel naar {language}',
      'language.english': 'Engels',
      'language.dutch': 'Nederlands',
    },
    en: {
      'brand.lineOne': 'Surinamese • Chinese • Caribbean',
      'brand.lineTwo': 'Takeaway in Hoogvliet',
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.menu': 'Menu',
      'nav.contact': 'Contact',
      'nav.callOrder': 'Call & order',
      'common.callShort': 'Call',
      'common.openMenu': 'Open menu',
      'common.closeMenu': 'Close menu',
      'common.scrollTop': 'Back to top',
      'common.allergens': 'Allergens',
      'common.menuPdf': 'Menu PDF',
      'common.route': 'Plan route',
      'common.routeInline': 'Plan route ->',
      'common.callWaitNote': SHARED_COPY.callWaitNote.en,
      'common.phone': 'Phone',
      'common.address': 'Address',
      'common.hours': 'Opening hours',
      'common.price': 'Price',
      'status.open': 'Open now',
      'status.closed': 'Closed now',
      'status.openUntil': 'Open now · Until {time}',
      'status.closedOpensToday': 'Closed now · Opens today at {time}',
      'status.closedOpensTomorrow': 'Closed now · Opens tomorrow at {time}',
      'status.closedOpensDay': 'Closed now · Opens {day} at {time}',
      'day.monday': 'Monday',
      'day.tuesday': 'Tuesday',
      'day.wednesday': 'Wednesday',
      'day.thursday': 'Thursday',
      'day.friday': 'Friday',
      'day.saturday': 'Saturday',
      'day.sunday': 'Sunday',
      'footer.copyright': '© 2026 Sun Sien Afhaalcentrum - All rights reserved',
      'home.heroTitle': 'Sun Sien',
      'home.heroEyebrow': 'Welcome to',
      'home.highlightTitle': 'Surinamese',
      'home.highlightCopy': 'Roti, moksi meti, pom and more',
      'home.menuLabel': 'Menu',
      'home.menuHeading': 'Discover our dishes',
      'home.menuCopy': 'More than 100 authentic Surinamese, Chinese and Caribbean dishes - all prepared fresh every day with the best ingredients.',
      'home.menuCta': 'View full menu ->',
      'home.aboutHeading': 'A familiar name in Hoogvliet',
      'home.aboutCopyOne': 'Craving Surinamese, Chinese or Caribbean food? You are in the right place. Sun Sien has been around for 40 years and has become a local staple in Hoogvliet and the surrounding area.',
      'home.aboutCopyTwo': 'Most guests order takeaway, but you can also enjoy a quick bite on site. Feel free to stop by.',
      'home.aboutCopyThree': 'We cook fresh every day and are known for classics like roti, moksi meti, sandwiches and warm Surinamese and Chinese dishes.',
      'home.noticePhoneTitle': 'Ordering by phone',
      'home.noticePhoneBody': 'Pick-up time for orders placed by phone is usually <strong>at least one hour</strong>. If you cannot wait that long, it is better to order in the shop.',
      'home.noticePhoneTag': 'At least 1 hour wait',
      'home.noticeFridayTitle': 'Busy on Friday',
      'home.noticeFridayBody': 'Because Friday is busy, there is a good chance the phone will not be answered between <strong>11:30 and 12:30</strong>. Calling is best between <strong>09:00 and 11:00</strong>.',
      'home.noticeFridayTag': 'Call before 11:00 on Friday',
      'home.reviewsLabel': 'Reviews',
      'home.reviewsHeading': 'What guests say',
      'home.reviewOneQuote': 'Translated from Dutch: "Top place. Always tasty!"',
      'home.reviewTwoQuote': 'Translated from Dutch: "It was takeaway, but the food was very good for the price."',
      'home.reviewThreeQuote': 'Translated from Dutch: "Tasty sandwich, great soto soup or roti roll."',
      'home.reviewSource': 'Google',
      'home.contactHeading': 'Get in touch',
      'home.contactSubtitle': 'Call us to order or stop by our shop in Hoogvliet.',
      'home.contactPageCta': 'FAQ & reviews',
      'home.contactPhoneCopy': 'Call to order or ask a question.',
      'home.contactAddressCopy': 'Hoogvliet, Rotterdam',
      'about.title': 'About',
      'about.subtitle': 'A trusted takeaway spot in Hoogvliet and nearby for more than 40 years.',
      'contact.label': 'Contact & FAQ',
      'contact.title': 'Contact',
      'contact.subtitle': 'Contact us directly or check the FAQ first.',
      'contact.addressBlock': 'Oude Wal 47<br>3193 EM Hoogvliet Rotterdam',
      'contact.reviewKicker': 'Google reviews',
      'contact.reviewScoreCopy': 'Public Google score as surfaced through Restaurant Guru.',
      'contact.reviewGoogleLink': 'View on Google Maps',
      'contact.reviewSourceLink': 'Review source',
      'contact.phoneCopy': 'Call to place an order, double-check something or ask about a dish.',
      'contact.addressCopy': '3193 EM Hoogvliet Rotterdam',
      'contact.faqLabel': 'FAQ',
      'contact.faqTitle': 'Practical questions people often have',
      'contact.faqSubtitle': 'Short and clear, so you can scan it quickly.',
      'contact.moreInfoLabel': 'Need one more check?',
      'contact.moreInfoTitle': 'Use the menu and allergen page as your final check',
      'contact.moreInfoCopy': 'For allergens, ingredients and diet questions, calling is still the safest move. The online menu is useful, but not everything is explicitly labeled there.',
      'contact.reviewLabel': 'Review spotlight',
      'contact.reviewTitle': 'Reviews',
      'contact.reviewSubtitle': 'Short, visual and easy to scan.',
      'contact.reviewCardSource': 'Google review snippet',
      'contact.reviewGijsQuote': 'Translated from Dutch: "Really a top place. The food is always good."',
      'contact.reviewGijsMeta': 'Gijs van Mechelen · 2 months ago · via Google',
      'contact.reviewDanielBody': 'Food 5 · Service 5 · Atmosphere 5',
      'contact.reviewDanielMeta': 'Public scorecard shown in the Google overview.',
      'contact.reviewRobertBody': 'Food 5 · Service 5 · Atmosphere 5',
      'contact.reviewRobertMeta': 'Another public 5/5 score from the same Google-linked review feed.',
      'contact.themeRoti': 'Roti gets mentioned often',
      'contact.themeSandwiches': 'Sandwiches stand out',
      'contact.themeChicken': 'Chicken comes up often',
      'contact.themeService': 'Friendly service',
      'contact.themeAtmosphere': 'Comfortable atmosphere',
      'contact.sourceNote': 'Sources: the original <a href="https://www.sunsien.nl" target="_blank" rel="noreferrer">sunsien.nl</a> site for the queue explanation, the public <a href="https://allergenen.sho-horeca.nl/kaart/sunsien" target="_blank" rel="noreferrer">allergen page</a> for diet info, and public Google-linked review snippets via <a href="https://restaurantguru.com/Sun-Sien-Hoogvliet-Rotterdam" target="_blank" rel="noreferrer">Restaurant Guru</a>.',
      'faq.queueQuestion': 'If I place an order via phone, do I wait in the same queue as people who order in-person?',
      'faq.queueAnswer': 'Yes. Phone orders and counter orders wait in the same queue to place/receive their order',
      'faq.halalQuestion': 'Are there halal options?',
      'faq.halalAnswer': 'There is no halal label on the public menu or allergen page. If this matters for your order, call first and ask about the specific dish.',
      'faq.phoneQuestion': 'Can I order by phone?',
      'faq.phoneAnswer': 'Yes, but the site says phone orders usually have at least a one hour wait before pickup.',
      'faq.fridayQuestion': 'When is the best time to call on Friday?',
      'faq.fridayAnswer': 'Friday is often too busy to answer calls between 11:30 and 12:30. The site advises calling between 09:00 and 11:00.',
      'menuPage.title': 'Our menu',
      'menu.heroLabel': 'Menu',
      'menu.heroSubtitle': 'Scan categories quickly, check prices and open any dish for more detail.',
      'menu.heroPanelKicker': 'Pick faster',
      'menu.heroPanelBody': 'Use the category bar to jump directly, or open a dish for more detail.',
      'menu.heroTagPhone': 'Phone orders',
      'menu.heroTagDetails': 'Dish details',
      'menu.statsCategories': 'categories',
      'menu.statsDishes': 'dishes',
      'menu.statsFrom': 'from',
      'menu.lineupHeading': 'Explore the categories.',
      'menu.lineupLink': 'View all categories \u203a',
      'menu.lineupFromPrice': 'From {price}',
      'menu.lineupCta': 'Go to category',
      'menu.lineupCtaNamed': 'Go to {category}',
      'item.callOrder': 'Call & order',
      'item.backToMenu': 'Back to menu',
      'order.quantity': 'Quantity',
      'order.decreaseQuantity': 'Decrease quantity',
      'order.increaseQuantity': 'Increase quantity',
      'order.addToList': 'Add to list',
      'order.sambal': 'Sambal',
      'order.sambal.with': 'With sambal',
      'order.sambal.extra': 'With extra sambal',
      'order.sambal.without': 'Without sambal',
      'order.cucumber': 'Cucumber',
      'order.cucumber.with': 'With cucumber',
      'order.cucumber.without': 'Without cucumber',
      'list.label': 'List',
      'list.cta': 'Your list',
      'list.drawerTitle': 'Your order',
      'list.close': 'Close list',
      'list.empty': 'Your list is still empty.',
      'list.copy': 'Copy (and paste it into Notes!)',
      'list.clear': 'Clear',
      'list.remove': 'Remove',
      'list.added': 'Added to your list.',
      'list.copyTitle': 'Sun Sien list',
      'list.confirmClear': 'Do you want to clear the whole list?',
      'list.noticeTitle': 'List only',
      'list.noticeBody': 'Not orderable on this site',
      'list.saveLink': 'Save via link',
      'list.saveLinkCopied': 'Link copied',
      'list.summarySingular': '{count} item in your list',
      'list.summaryPlural': '{count} items in your list',
      'list.qtyTimes': '{count} x {amount}',
      'list.fromAmount': 'From {amount}',
      'list.totalExact': 'Total {amount}',
      'list.totalFrom': 'Total from {amount}',
      'list.totalRange': 'Total {min} - {max}',
      'category.combis': 'Combos',
      'category.eenpersoons': 'Single meals',
      'category.broodjes': 'Sandwiches',
      'category.specialiteiten': 'Specialties',
      'category.nieuwe': 'New',
      'category.surinaams': 'Surinamese',
      'category.caribisch': 'Caribbean',
      'category.vlees': 'Meat',
      'category.kip': 'Chicken',
      'category.ei': 'Egg',
      'category.groente': 'Vegetables',
      'category.nasi': 'Nasi',
      'category.bami': 'Bami',
      'category.mihoen': 'Rice noodles',
      'category.snacks': 'Snacks',
      'language.switchTo': 'Switch to {language}',
      'language.english': 'English',
      'language.dutch': 'Dutch',
    },
  };

  const OPTION_VALUE_MAP = {
    sambal: {
      with_sambal: 'with_sambal',
      'Met sambal': 'with_sambal',
      'With sambal': 'with_sambal',
      extra_sambal: 'extra_sambal',
      'Met extra sambal': 'extra_sambal',
      'With extra sambal': 'extra_sambal',
      without_sambal: 'without_sambal',
      'Zonder sambal': 'without_sambal',
      'Without sambal': 'without_sambal',
    },
    komkommer: {
      with_cucumber: 'with_cucumber',
      'Met komkommer': 'with_cucumber',
      'With cucumber': 'with_cucumber',
      without_cucumber: 'without_cucumber',
      'Zonder komkommer': 'without_cucumber',
      'Without cucumber': 'without_cucumber',
    },
  };

  const OPTION_LABEL_KEYS = {
    with_sambal: 'order.sambal.with',
    extra_sambal: 'order.sambal.extra',
    without_sambal: 'order.sambal.without',
    with_cucumber: 'order.cucumber.with',
    without_cucumber: 'order.cucumber.without',
  };

  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const languageToggle = document.getElementById('language-toggle');
  const languageToggleLabel = document.getElementById('language-toggle-label');
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  const listToggle = document.getElementById('list-toggle');
  const listTotal = document.getElementById('list-total');
  const listDrawer = document.getElementById('list-drawer');
  const listOverlay = document.getElementById('list-overlay');
  const listClose = document.getElementById('list-close');
  const listCount = document.getElementById('list-count');
  const listEmpty = document.getElementById('list-empty');
  const listItems = document.getElementById('list-items');
  const listSummary = document.getElementById('list-summary');
  const listCopy = document.getElementById('list-copy');
  const listClear = document.getElementById('list-clear');
  const listHeader = listDrawer?.querySelector('.list-drawer-header');
  const listActions = listDrawer?.querySelector('.list-drawer-actions');
  const orderForms = document.querySelectorAll('.item-order-form');
  const statusContainer = document.getElementById('status-container');
  const hoursTable = document.getElementById('hours-table');
  const loadingScreen = document.getElementById('loading-screen');
  const shouldShowLoadingScreen = document.documentElement.classList.contains('show-loading-screen');
  const themeLogoElements = document.querySelectorAll('.logo-img, .footer-logo');
  const lightModeLogoSrc = '/images/hero-title-logo-light.png';
  const darkModeLogoSrc = 'https://www.sunsien.nl/wp-content/uploads/2024/03/logo-voetbalclub.png2_-220x101.png';
  const darkModeQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  const OPENING_HOURS = {
    0: { open: 12 * 60 + 30, close: 20 * 60 + 30 },
    1: null,
    2: { open: 11 * 60 + 30, close: 20 * 60 + 30 },
    3: { open: 11 * 60 + 30, close: 20 * 60 + 30 },
    4: { open: 11 * 60 + 30, close: 20 * 60 + 30 },
    5: { open: 11 * 60 + 30, close: 20 * 60 + 30 },
    6: { open: 11 * 60 + 30, close: 20 * 60 + 30 },
  };
  const DAY_KEYS = [
    'day.sunday',
    'day.monday',
    'day.tuesday',
    'day.wednesday',
    'day.thursday',
    'day.friday',
    'day.saturday',
  ];
  let refreshScrollIndicator = () => { };
  let refreshMenuPage = () => { };
  let listSaveLinkButton = null;
  const loadingScreenMinDuration = 1100;
  const loadingScreenRemoveDelay = 700;
  const loadingScreenFallbackDelay = 2400;
  const loadingScreenStartedAt = typeof performance !== 'undefined' ? performance.now() : Date.now();
  let loadingScreenDismissQueued = false;
  let loadingScreenDismissed = false;

  let currentLanguage = readLanguage();

  function markPageLoaded() {
    document.body.classList.add('page-loaded');
  }

  function updateThemeLogos() {
    if (themeLogoElements.length === 0) return;

    const nextSrc = darkModeQuery?.matches ? darkModeLogoSrc : lightModeLogoSrc;

    themeLogoElements.forEach((image) => {
      if (image.getAttribute('src') === nextSrc) return;
      image.setAttribute('src', nextSrc);
    });
  }

  function dismissLoadingScreen() {
    if (loadingScreenDismissed) return;

    loadingScreenDismissed = true;
    document.body.classList.remove('is-loading');
    markPageLoaded();
    document.documentElement.classList.remove('show-loading-screen');

    if (!loadingScreen) return;

    loadingScreen.classList.add('done');
    window.setTimeout(() => {
      loadingScreen.remove();
    }, loadingScreenRemoveDelay);
  }

  function queueLoadingScreenDismiss() {
    if (loadingScreenDismissQueued) return;

    loadingScreenDismissQueued = true;
    const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
    const elapsed = now - loadingScreenStartedAt;
    const delay = Math.max(0, loadingScreenMinDuration - elapsed);

    window.setTimeout(dismissLoadingScreen, delay);
  }

  if (loadingScreen && shouldShowLoadingScreen) {
    document.body.classList.add('is-loading');

    if (document.readyState === 'complete') {
      queueLoadingScreenDismiss();
    } else {
      window.addEventListener('load', queueLoadingScreenDismiss, { once: true });
      window.setTimeout(queueLoadingScreenDismiss, loadingScreenFallbackDelay);
    }
  } else {
    loadingScreen?.remove();
    markPageLoaded();
  }

  updateThemeLogos();
  if (darkModeQuery?.addEventListener) {
    darkModeQuery.addEventListener('change', updateThemeLogos);
  } else if (darkModeQuery?.addListener) {
    darkModeQuery.addListener(updateThemeLogos);
  }

  function readLanguage() {
    try {
      const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      return SUPPORTED_LANGUAGES.has(storedLanguage) ? storedLanguage : DEFAULT_LANGUAGE;
    } catch (error) {
      return DEFAULT_LANGUAGE;
    }
  }

  function writeLanguage(language) {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch (error) {
      // Ignore storage errors and keep the in-memory selection.
    }
  }

  function translate(key, replacements = {}) {
    const template =
      TRANSLATIONS[currentLanguage]?.[key] ??
      TRANSLATIONS[DEFAULT_LANGUAGE]?.[key] ??
      '';

    return template.replace(/\{(\w+)\}/g, (_, token) => replacements[token] ?? '');
  }

  function applyTranslations() {
    document.documentElement.lang = currentLanguage;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      element.textContent = translate(element.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      element.innerHTML = translate(element.dataset.i18nHtml);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
      element.setAttribute('aria-label', translate(element.dataset.i18nAriaLabel));
    });

    updateLanguageToggle();
    syncNavToggleLabel();
    updateStatus();
    renderList();
    refreshScrollIndicator();
    refreshMenuPage();
  }

  function updateLanguageToggle() {
    if (!languageToggle || !languageToggleLabel) return;

    const nextLanguage = currentLanguage === 'nl' ? 'en' : 'nl';
    const nextLanguageName = translate(nextLanguage === 'en' ? 'language.english' : 'language.dutch');

    languageToggleLabel.textContent = nextLanguage.toUpperCase();
    languageToggle.setAttribute('aria-label', translate('language.switchTo', { language: nextLanguageName }));
    languageToggle.setAttribute('title', translate('language.switchTo', { language: nextLanguageName }));
  }

  function escapeHtml(value = '') {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function copyTextToClipboard(text) {
    if (navigator.clipboard?.writeText) {
      return navigator.clipboard.writeText(text).catch(() => {
        const fallback = document.createElement('textarea');
        fallback.value = text;
        document.body.appendChild(fallback);
        fallback.select();
        document.execCommand('copy');
        fallback.remove();
      });
    }

    return Promise.resolve().then(() => {
      const fallback = document.createElement('textarea');
      fallback.value = text;
      document.body.appendChild(fallback);
      fallback.select();
      document.execCommand('copy');
      fallback.remove();
    });
  }

  function flashButtonLabel(button, translationKey) {
    if (!button || !translationKey) return;

    window.clearTimeout(button._flashTimeoutId);
    button.textContent = translate(translationKey);
    button._flashTimeoutId = window.setTimeout(() => {
      const defaultKey = button.dataset.i18n;
      if (defaultKey) {
        button.textContent = translate(defaultKey);
      }
    }, 1800);
  }

  function createBase64UrlValue(text) {
    const bytes = new TextEncoder().encode(text);
    let binary = '';
    bytes.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return btoa(binary)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/g, '');
  }

  function parseBase64UrlValue(value) {
    const normalized = String(value || '')
      .replace(/-/g, '+')
      .replace(/_/g, '/');
    const paddingLength = (4 - (normalized.length % 4)) % 4;
    const padded = normalized + '='.repeat(paddingLength);
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }

  function serializeListForUrl(items) {
    const payload = items.map((entry) => ({
      id: entry.id || '',
      name: entry.name || '',
      price: entry.price || '',
      category: entry.category || '',
      quantity: normalizeQuantity(entry.quantity),
      sambal: entry.sambal || '',
      komkommer: entry.komkommer || '',
    }));

    return createBase64UrlValue(JSON.stringify(payload));
  }

  function deserializeListFromUrl(value) {
    try {
      const parsedValue = JSON.parse(parseBase64UrlValue(value));
      if (!Array.isArray(parsedValue)) return [];

      return parsedValue
        .filter((entry) => entry && typeof entry === 'object')
        .map((entry) => normalizeEntry(entry))
        .filter((entry) => entry.name && normalizeQuantity(entry.quantity) > 0);
    } catch (error) {
      return [];
    }
  }

  function buildSharedListUrl(items) {
    const url = new URL(window.location.href);
    url.searchParams.set(LIST_SHARE_PARAM, serializeListForUrl(items));
    return url.toString();
  }

  function restoreListFromUrl() {
    const url = new URL(window.location.href);
    const encodedList = url.searchParams.get(LIST_SHARE_PARAM) || url.searchParams.get('list');
    if (!encodedList) return false;

    const restoredItems = deserializeListFromUrl(encodedList);
    if (!restoredItems.length) return false;

    writeList(restoredItems);
    url.searchParams.delete(LIST_SHARE_PARAM);
    url.searchParams.delete('list');
    window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
    return true;
  }

  function ensureListDrawerEnhancements() {
    if (!listDrawer) return;

    if (listHeader && listClose) {
      let headerActions = listHeader.querySelector('.list-header-actions');
      if (!headerActions) {
        headerActions = document.createElement('div');
        headerActions.className = 'list-header-actions';
        listHeader.appendChild(headerActions);
      }

      let notice = headerActions.querySelector('.list-notice');
      if (!notice) {
        notice = document.createElement('div');
        notice.className = 'list-notice';

        const title = document.createElement('strong');
        title.className = 'list-notice-title';
        title.dataset.i18n = 'list.noticeTitle';

        const body = document.createElement('span');
        body.className = 'list-notice-body';
        body.dataset.i18n = 'list.noticeBody';

        notice.append(title, body);
        headerActions.appendChild(notice);
      }

      if (listClose.parentElement !== headerActions) {
        headerActions.appendChild(listClose);
      }
    }

    if (listActions && !listActions.querySelector('#list-save-link')) {
      const saveLinkButton = document.createElement('button');
      saveLinkButton.className = 'btn btn-glass btn-sm';
      saveLinkButton.id = 'list-save-link';
      saveLinkButton.type = 'button';
      saveLinkButton.dataset.i18n = 'list.saveLink';
      listActions.insertBefore(saveLinkButton, listCopy || listClear || null);
      listSaveLinkButton = saveLinkButton;
    } else if (listActions) {
      listSaveLinkButton = listActions.querySelector('#list-save-link');
    }
  }

  function formatTime(minutes) {
    const safeMinutes = Math.max(0, Number(minutes) || 0);
    const hours = Math.floor(safeMinutes / 60);
    const mins = safeMinutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
  }

  function getTranslatedDay(dayIndex) {
    const dayName = translate(DAY_KEYS[dayIndex]);
    return currentLanguage === 'nl' ? dayName.toLowerCase() : dayName;
  }

  function getNextOpening(dayIndex, time) {
    const todaySchedule = OPENING_HOURS[dayIndex];
    if (todaySchedule && time < todaySchedule.open) {
      return {
        labelKey: 'status.closedOpensToday',
        time: formatTime(todaySchedule.open),
      };
    }

    for (let offset = 1; offset <= 7; offset += 1) {
      const nextDayIndex = (dayIndex + offset) % 7;
      const nextDaySchedule = OPENING_HOURS[nextDayIndex];
      if (!nextDaySchedule) continue;

      if (offset === 1) {
        return {
          labelKey: 'status.closedOpensTomorrow',
          time: formatTime(nextDaySchedule.open),
        };
      }

      return {
        labelKey: 'status.closedOpensDay',
        day: getTranslatedDay(nextDayIndex),
        time: formatTime(nextDaySchedule.open),
      };
    }

    return null;
  }

  function getStatusInfo(now) {
    const dayIndex = now.getDay();
    const time = now.getHours() * 60 + now.getMinutes();
    const todaySchedule = OPENING_HOURS[dayIndex];
    const isOpen = Boolean(todaySchedule && time >= todaySchedule.open && time < todaySchedule.close);

    if (isOpen) {
      return {
        dayIndex,
        isOpen: true,
        text: translate('status.openUntil', {
          time: formatTime(todaySchedule.close),
        }),
      };
    }

    const nextOpening = getNextOpening(dayIndex, time);
    return {
      dayIndex,
      isOpen: false,
      text: nextOpening
        ? translate(nextOpening.labelKey, nextOpening)
        : translate('status.closed'),
    };
  }

  function syncPageLock() {
    const navOpen = navLinks?.classList.contains('open');
    const listOpen = document.body.classList.contains('list-open');
    document.body.style.overflow = navOpen || listOpen ? 'hidden' : '';
  }

  function syncNavToggleLabel() {
    if (!navToggle) return;
    navToggle.setAttribute(
      'aria-label',
      navLinks?.classList.contains('open') ? translate('common.closeMenu') : translate('common.openMenu')
    );
  }

  function normalizeQuantity(value) {
    const parsedValue = parseInt(value, 10);
    if (Number.isNaN(parsedValue) || parsedValue < 1) return 1;
    if (parsedValue > 99) return 99;
    return parsedValue;
  }

  function parseEuroAmount(value = '') {
    const normalizedValue = String(value)
      .trim()
      .replace(/\./g, '')
      .replace(',', '.');

    const parsedValue = Number.parseFloat(normalizedValue);
    if (Number.isNaN(parsedValue)) return null;
    return Math.round(parsedValue * 100);
  }

  function parsePriceModel(price = '') {
    const rawPrice = String(price).trim();
    const amountMatches = [...rawPrice.matchAll(/€\s*([\d.,]+)/g)]
      .map((match) => parseEuroAmount(match[1]))
      .filter((amount) => amount != null);

    if (!amountMatches.length) {
      return { kind: 'unknown', raw: rawPrice };
    }

    const normalizedPrice = rawPrice.toLowerCase();

    if (normalizedPrice.startsWith('vanaf')) {
      return {
        kind: 'from',
        raw: rawPrice,
        minCents: amountMatches[0],
      };
    }

    if (normalizedPrice.includes('/')) {
      const minCents = Math.min(...amountMatches);
      const maxCents = Math.max(...amountMatches);
      return {
        kind: 'range',
        raw: rawPrice,
        minCents,
        maxCents,
      };
    }

    return {
      kind: 'exact',
      raw: rawPrice,
      cents: amountMatches[0],
    };
  }

  function formatEuro(cents) {
    if (typeof cents !== 'number' || Number.isNaN(cents)) {
      return '';
    }

    const locale = currentLanguage === 'nl' ? 'nl-NL' : 'en-IE';
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(cents / 100);
  }

  function getEntryPricing(entry) {
    const quantity = normalizeQuantity(entry.quantity);
    const priceModel = parsePriceModel(entry.price);

    if (priceModel.kind === 'exact') {
      const lineCents = priceModel.cents * quantity;
      return {
        kind: 'exact',
        label: formatEuro(lineCents),
        detailLabel: quantity > 1 ? translate('list.qtyTimes', { count: quantity, amount: formatEuro(priceModel.cents) }) : '',
        minCents: lineCents,
        maxCents: lineCents,
      };
    }

    if (priceModel.kind === 'from') {
      const minCents = priceModel.minCents * quantity;
      return {
        kind: 'from',
        label: translate('list.fromAmount', { amount: formatEuro(minCents) }),
        detailLabel: quantity > 1 ? translate('list.qtyTimes', { count: quantity, amount: priceModel.raw }) : '',
        minCents,
        maxCents: null,
      };
    }

    if (priceModel.kind === 'range') {
      const minCents = priceModel.minCents * quantity;
      const maxCents = priceModel.maxCents * quantity;
      return {
        kind: 'range',
        label: `${formatEuro(minCents)} - ${formatEuro(maxCents)}`,
        detailLabel: quantity > 1 ? translate('list.qtyTimes', { count: quantity, amount: priceModel.raw }) : priceModel.raw,
        minCents,
        maxCents,
      };
    }

    return {
      kind: 'unknown',
      label: entry.price || '',
      detailLabel: '',
      minCents: null,
      maxCents: null,
    };
  }

  function getCartTotalLabel(items) {
    const totals = items.reduce((acc, entry) => {
      const pricing = getEntryPricing(entry);

      if (typeof pricing.minCents === 'number') {
        acc.minCents += pricing.minCents;
      }

      if (pricing.kind === 'from') {
        acc.hasFrom = true;
      } else if (pricing.kind === 'range' && typeof pricing.maxCents === 'number') {
        acc.hasRange = true;
        acc.maxCents += pricing.maxCents;
      } else if (pricing.kind === 'exact' && typeof pricing.maxCents === 'number') {
        acc.maxCents += pricing.maxCents;
      }

      return acc;
    }, {
      minCents: 0,
      maxCents: 0,
      hasFrom: false,
      hasRange: false,
    });

    if (totals.hasFrom) {
      return translate('list.totalFrom', { amount: formatEuro(totals.minCents) });
    }

    if (totals.hasRange) {
      return translate('list.totalRange', {
        min: formatEuro(totals.minCents),
        max: formatEuro(totals.maxCents),
      });
    }

    return translate('list.totalExact', { amount: formatEuro(totals.minCents) });
  }

  function getCartButtonTotalLabel(items) {
    const totalLabel = getCartTotalLabel(items);
    return totalLabel
      .replace(/^Totaal vanaf\s+/i, 'Vanaf ')
      .replace(/^Total from\s+/i, 'From ')
      .replace(/^Totaal\s+/i, '')
      .replace(/^Total\s+/i, '');
  }

  function normalizeOptionValue(type, value = '') {
    return OPTION_VALUE_MAP[type]?.[value] || '';
  }

  function getOptionLabel(value = '') {
    const labelKey = OPTION_LABEL_KEYS[value];
    return labelKey ? translate(labelKey) : value;
  }

  function getEntryKey(entry) {
    const baseId = entry.id ? String(entry.id) : `${entry.category || 'item'}:${entry.name}`;
    return [baseId, entry.sambal || '', entry.komkommer || ''].join('|');
  }

  function normalizeEntry(entry = {}) {
    const normalizedEntry = {
      ...entry,
      sambal: normalizeOptionValue('sambal', entry.sambal || ''),
      komkommer: normalizeOptionValue('komkommer', entry.komkommer || ''),
      quantity: normalizeQuantity(entry.quantity),
    };

    normalizedEntry.key = getEntryKey(normalizedEntry);
    return normalizedEntry;
  }

  function readList() {
    try {
      const rawValue = window.localStorage.getItem(LIST_STORAGE_KEY);
      const parsedValue = rawValue ? JSON.parse(rawValue) : [];
      if (!Array.isArray(parsedValue)) return [];
      return parsedValue
        .filter((entry) => entry && typeof entry === 'object')
        .map((entry) => normalizeEntry(entry));
    } catch (error) {
      return [];
    }
  }

  function writeList(items) {
    try {
      const normalizedItems = items.map((entry) => normalizeEntry(entry));
      window.localStorage.setItem(LIST_STORAGE_KEY, JSON.stringify(normalizedItems));
    } catch (error) {
      // Ignore storage errors to avoid breaking the UI.
    }
  }

  function getEntryOptions(entry) {
    return [entry.sambal, entry.komkommer]
      .filter(Boolean)
      .map((value) => getOptionLabel(value))
      .filter(Boolean);
  }

  function renderList() {
    if (!listItems || !listCount || !listSummary || !listEmpty) {
      return;
    }

    const items = readList();
    const totalQuantity = items.reduce((sum, entry) => sum + normalizeQuantity(entry.quantity), 0);
    const summaryKey = totalQuantity === 1 ? 'list.summarySingular' : 'list.summaryPlural';
    const totalLabel = getCartTotalLabel(items);

    listCount.textContent = String(totalQuantity);
    if (listTotal) {
      listTotal.textContent = getCartButtonTotalLabel(items);
    }
    listSummary.innerHTML = `
      <span>${escapeHtml(translate(summaryKey, { count: totalQuantity }))}</span>
      <strong>${escapeHtml(totalLabel)}</strong>
    `;
    listEmpty.hidden = items.length > 0;

    listItems.innerHTML = items.map((entry) => {
      const pricing = getEntryPricing(entry);
      const optionTags = getEntryOptions(entry)
        .map((option) => `<span class="list-tag">${escapeHtml(option)}</span>`)
        .join('');
      const priceTag = pricing.detailLabel
        ? `<span class="list-tag list-tag--price">${escapeHtml(pricing.detailLabel)}</span>`
        : '';
      const metaContent = [optionTags, priceTag].filter(Boolean).join('');

      return `
        <div class="list-item" data-entry-key="${escapeHtml(entry.key)}">
          <div class="list-item-top">
            <div>
              <p class="list-item-name">${escapeHtml(entry.name)}</p>
            </div>
            <span class="list-item-price">${escapeHtml(pricing.label)}</span>
          </div>

          ${metaContent ? `<div class="list-item-meta">${metaContent}</div>` : ''}

          <div class="list-item-controls">
            <div class="list-qty-controls">
              <button class="list-qty-btn" type="button" data-list-action="decrease" data-entry-key="${escapeHtml(entry.key)}">-</button>
              <span class="list-qty-value">${normalizeQuantity(entry.quantity)}</span>
              <button class="list-qty-btn" type="button" data-list-action="increase" data-entry-key="${escapeHtml(entry.key)}">+</button>
            </div>

            <button class="list-remove-btn" type="button" data-list-action="remove" data-entry-key="${escapeHtml(entry.key)}">${escapeHtml(translate('list.remove'))}</button>
          </div>
        </div>`;
    }).join('');
  }

  function openList() {
    if (!listDrawer || !listOverlay || !listToggle) return;
    listDrawer.classList.add('open');
    listDrawer.setAttribute('aria-hidden', 'false');
    listToggle.setAttribute('aria-expanded', 'true');
    listOverlay.hidden = false;
    document.body.classList.add('list-open');
    syncPageLock();
  }

  function closeList() {
    if (!listDrawer || !listOverlay || !listToggle) return;
    listDrawer.classList.remove('open');
    listDrawer.setAttribute('aria-hidden', 'true');
    listToggle.setAttribute('aria-expanded', 'false');
    listOverlay.hidden = true;
    document.body.classList.remove('list-open');
    syncPageLock();
  }

  function updateEntryQuantity(entryKey, nextQuantity) {
    const items = readList()
      .map((entry) => (entry.key === entryKey ? { ...entry, quantity: normalizeQuantity(nextQuantity) } : entry))
      .filter((entry) => normalizeQuantity(entry.quantity) > 0);
    writeList(items);
    renderList();
  }

  function removeEntry(entryKey) {
    const items = readList().filter((entry) => entry.key !== entryKey);
    writeList(items);
    renderList();
  }

  async function copyListToClipboard() {
    const items = readList();
    if (!items.length) return;

    const lines = [translate('list.copyTitle'), ''];
    items.forEach((entry) => {
      const options = getEntryOptions(entry);
      const optionText = options.length ? ` (${options.join(', ')})` : '';
      const pricing = getEntryPricing(entry);
      lines.push(`- ${normalizeQuantity(entry.quantity)}x ${entry.name}${optionText} - ${pricing.label}`);
    });
    lines.push('');
    lines.push(getCartTotalLabel(items));

    const output = lines.join('\n');

    await copyTextToClipboard(output);
  }

  async function copyListRestoreLink() {
    const items = readList();
    if (!items.length) return;

    await copyTextToClipboard(buildSharedListUrl(items));
    flashButtonLabel(listSaveLinkButton, 'list.saveLinkCopied');
  }

  function updateStatus() {
    const now = new Date();
    const { dayIndex, isOpen, text } = getStatusInfo(now);

    const heroStatus = document.getElementById('hero-status');
    const heroBadge = document.getElementById('hero-status-badge');
    if (heroStatus) {
      heroStatus.textContent = text;
    }

    const statusDot = heroBadge?.querySelector('.status-dot');
    if (statusDot) {
      statusDot.classList.toggle('closed', !isOpen);
    }

    if (statusContainer) {
      const statusClass = isOpen ? '' : 'closed-status';
      statusContainer.innerHTML = `
        <div class="status-indicator ${statusClass}">
          <span class="dot"></span>
          ${escapeHtml(text)}
        </div>
      `;
    }

    if (hoursTable) {
      hoursTable.querySelectorAll('tr').forEach((row) => {
        const rowDay = parseInt(row.dataset.day, 10);
        row.classList.toggle('today', rowDay === dayIndex);
      });
    }
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
      syncNavToggleLabel();
      syncPageLock();
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        syncNavToggleLabel();
        syncPageLock();
      });
    });
  }

  languageToggle?.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'nl' ? 'en' : 'nl';
    writeLanguage(currentLanguage);
    applyTranslations();
  });

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ===== SCROLL INDICATOR (persistent, updates label per section) ===== */
  const scrollIndicator = document.getElementById('scroll-indicator');
  const scrollIndicatorText = document.getElementById('scroll-indicator-text');

  if (scrollIndicator && scrollIndicatorText) {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const getScrollSections = () => {
      const useDarkVariantOnSection = !colorSchemeQuery.matches;

      return [
        { id: 'home', label: 'Scroll', useDarkVariant: false },
        { id: 'menu-preview', label: translate('nav.menu'), useDarkVariant: useDarkVariantOnSection },
        { id: 'over-ons', label: translate('nav.about'), useDarkVariant: useDarkVariantOnSection },
        { id: 'reviews', label: translate('home.reviewsLabel'), useDarkVariant: useDarkVariantOnSection },
        { id: 'contact', label: translate('common.hours'), useDarkVariant: useDarkVariantOnSection },
      ];
    };

    let scrollSections = getScrollSections();

    let currentLabel = 'Scroll';
    let ticking = false;
    let switching = false;

    function setLabelAnimated(newLabel) {
      if (switching) return;
      switching = true;

      // Slide old text out
      scrollIndicatorText.classList.add('is-out');

      setTimeout(() => {
        scrollIndicatorText.classList.remove('is-out');
        scrollIndicatorText.textContent = newLabel;
        scrollIndicatorText.classList.add('is-in');

        setTimeout(() => {
          scrollIndicatorText.classList.remove('is-in');
          switching = false;
        }, 200);
      }, 200);
    }

    function updateScrollIndicator() {
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;

      // Hide near bottom of page
      if (scrollY + windowH >= docH - 100) {
        scrollIndicator.classList.add('is-hidden');
        ticking = false;
        return;
      }
      scrollIndicator.classList.remove('is-hidden');

      // In the hero area, always show "Scroll"
      const heroEl = document.getElementById('home');
      if (heroEl && scrollY < heroEl.offsetHeight * 0.3) {
        if (currentLabel !== scrollSections[0].label) {
          setLabelAnimated(scrollSections[0].label);
          currentLabel = scrollSections[0].label;
        }
        scrollIndicator.classList.remove('scroll-indicator--dark');
        ticking = false;
        return;
      }

      // Find the next section that hasn't been scrolled past
      const viewMid = scrollY + windowH * 0.6;
      let nextLabel = scrollSections[scrollSections.length - 1].label;
      let useDarkVariant = scrollSections[scrollSections.length - 1].useDarkVariant;

      for (let i = 1; i < scrollSections.length; i++) {
        const el = document.getElementById(scrollSections[i].id);
        if (el && el.getBoundingClientRect().top + scrollY > viewMid) {
          nextLabel = scrollSections[i].label;
          useDarkVariant = scrollSections[i - 1].useDarkVariant;
          break;
        }
      }

      if (nextLabel !== currentLabel) {
        setLabelAnimated(nextLabel);
        currentLabel = nextLabel;
      }

      scrollIndicator.classList.toggle('scroll-indicator--dark', useDarkVariant);
      ticking = false;
    }

    function requestScrollIndicatorUpdate() {
      if (!ticking) {
        requestAnimationFrame(updateScrollIndicator);
        ticking = true;
      }
    }

    refreshScrollIndicator = () => {
      scrollSections = getScrollSections();
      requestScrollIndicatorUpdate();
    };

    window.addEventListener('scroll', requestScrollIndicatorUpdate);

    if (typeof colorSchemeQuery.addEventListener === 'function') {
      colorSchemeQuery.addEventListener('change', refreshScrollIndicator);
    } else if (typeof colorSchemeQuery.addListener === 'function') {
      colorSchemeQuery.addListener(refreshScrollIndicator);
    }

    updateScrollIndicator();
  }

  ensureListDrawerEnhancements();
  const restoredListFromUrl = restoreListFromUrl();

  if (listToggle && listDrawer && listOverlay && listClose) {
    listToggle.addEventListener('click', () => {
      if (listDrawer.classList.contains('open')) {
        closeList();
      } else {
        openList();
      }
    });

    listClose.addEventListener('click', closeList);
    listOverlay.addEventListener('click', closeList);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && listDrawer.classList.contains('open')) {
        closeList();
      }
    });

    listItems?.addEventListener('click', (event) => {
      const actionButton = event.target.closest('[data-list-action]');
      if (!actionButton) return;

      const { listAction, entryKey } = actionButton.dataset;
      const matchingEntry = readList().find((entry) => entry.key === entryKey);
      if (!matchingEntry) return;

      if (listAction === 'increase') {
        updateEntryQuantity(entryKey, normalizeQuantity(matchingEntry.quantity) + 1);
      }

      if (listAction === 'decrease') {
        const nextQuantity = normalizeQuantity(matchingEntry.quantity) - 1;
        if (nextQuantity < 1) {
          removeEntry(entryKey);
        } else {
          updateEntryQuantity(entryKey, nextQuantity);
        }
      }

      if (listAction === 'remove') {
        removeEntry(entryKey);
      }
    });

    listClear?.addEventListener('click', () => {
      if (!readList().length) return;
      if (!window.confirm(translate('list.confirmClear'))) return;
      writeList([]);
      renderList();
    });

    listCopy?.addEventListener('click', async () => {
      await copyListToClipboard();
    });

    listSaveLinkButton?.addEventListener('click', async () => {
      await copyListRestoreLink();
    });
  }

  orderForms.forEach((form) => {
    const quantityInput = form.querySelector('.quantity-input');
    const feedback = form.querySelector('.item-order-feedback');
    let feedbackTimeoutId = null;

    form.addEventListener('click', (event) => {
      const quantityButton = event.target.closest('[data-qty-action]');
      if (!quantityButton || !quantityInput) return;

      const currentQuantity = normalizeQuantity(quantityInput.value);
      const nextQuantity = quantityButton.dataset.qtyAction === 'increase'
        ? currentQuantity + 1
        : currentQuantity - 1;

      quantityInput.value = String(normalizeQuantity(nextQuantity));
    });

    quantityInput?.addEventListener('change', () => {
      quantityInput.value = String(normalizeQuantity(quantityInput.value));
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const quantity = normalizeQuantity(quantityInput?.value || 1);
      const order = normalizeEntry({
        id: form.dataset.itemId || '',
        name: form.dataset.itemName || '',
        price: form.dataset.itemPrice || '',
        category: form.dataset.itemCategory || '',
        quantity,
        sambal: form.dataset.itemCategory === 'broodjes' ? form.elements.sambal?.value || '' : '',
        komkommer: form.dataset.itemCategory === 'broodjes' ? form.elements.komkommer?.value || '' : '',
      });

      const items = readList();
      const existingIndex = items.findIndex((entry) => entry.key === order.key);

      if (existingIndex >= 0) {
        items[existingIndex].quantity = normalizeQuantity(items[existingIndex].quantity) + quantity;
      } else {
        items.push(order);
      }

      writeList(items);
      renderList();
      openList();

      if (feedback) {
        feedback.textContent = translate('list.added');
        feedback.classList.add('is-success');
        window.clearTimeout(feedbackTimeoutId);
        feedbackTimeoutId = window.setTimeout(() => {
          feedback.textContent = '';
          feedback.classList.remove('is-success');
        }, 2200);
      }

      quantityInput.value = '1';
    });
  });

  const isItemDetailPage = document.body.classList.contains('item-detail-page');
  if (isItemDetailPage) {
    const backToMenuLinks = document.querySelectorAll('.item-actions a[data-i18n="item.backToMenu"]');

    backToMenuLinks.forEach((link) => {
      const targetUrl = new URL(link.getAttribute('href') || '../menu.html', window.location.href);
      targetUrl.hash = '';
      const cleanHref = targetUrl.toString();

      link.setAttribute('href', cleanHref);
      link.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.assign(cleanHref);
      });
    });
  }

  const isMenuPage = document.body.classList.contains('menu-page');
  if (isMenuPage) {
    const catLinks = document.querySelectorAll('.cat-link');
    const categories = document.querySelectorAll('.menu-category');
    const lineupCards = document.querySelectorAll('.lineup-card[data-category-target]');
    const lineupCardsContainer = document.querySelector('.menu-lineup-cards');
    const catNavWrapper = document.getElementById('category-nav-wrapper');
    const header = document.getElementById('header');
    const menuStatCategories = document.getElementById('menu-stat-categories');
    const menuStatItems = document.getElementById('menu-stat-items');
    const menuStatPrice = document.getElementById('menu-stat-price');
    let activeCategoryId = '';
    let isMenuScrollTicking = false;

    function parsePriceValue(value) {
      const normalized = String(value ?? '')
        .replace(/[^\d,.-]/g, '')
        .replace(/\./g, '')
        .replace(',', '.');
      const parsed = Number.parseFloat(normalized);
      return Number.isFinite(parsed) ? parsed : null;
    }

    function formatPriceValue(value) {
      return new Intl.NumberFormat(currentLanguage === 'nl' ? 'nl-NL' : 'en-IE', {
        style: 'currency',
        currency: 'EUR',
      }).format(value);
    }

    function getLineupCategoryLabel(card) {
      const title = card.querySelector('h3');
      const label = title?.dataset.i18n
        ? translate(title.dataset.i18n)
        : title?.textContent?.trim() || '';

      return label.toLocaleLowerCase(currentLanguage === 'nl' ? 'nl-NL' : 'en-US');
    }

    function refreshMenuOverview() {
      const itemLinks = document.querySelectorAll('.menu-item-link');
      const lowestPrice = Array.from(itemLinks)
        .map((item) => parsePriceValue(item.querySelector('.mi-price')?.textContent))
        .filter((value) => value !== null)
        .reduce((minValue, value) => Math.min(minValue, value), Number.POSITIVE_INFINITY);

      if (menuStatCategories) {
        menuStatCategories.textContent = String(categories.length);
      }

      if (menuStatItems) {
        menuStatItems.textContent = String(itemLinks.length);
      }

      if (menuStatPrice && Number.isFinite(lowestPrice)) {
        menuStatPrice.textContent = formatPriceValue(lowestPrice);
      }

      lineupCards.forEach((card) => {
        const targetId = card.dataset.categoryTarget;
        const targetSection = targetId ? document.getElementById(targetId) : null;
        if (!targetSection) return;

        const categoryLowestPrice = Array.from(targetSection.querySelectorAll('.menu-item-link'))
          .map((item) => parsePriceValue(item.querySelector('.mi-price')?.textContent))
          .filter((value) => value !== null)
          .reduce((minValue, value) => Math.min(minValue, value), Number.POSITIVE_INFINITY);

        if (!Number.isFinite(categoryLowestPrice)) return;

        let meta = card.querySelector('.lineup-card-meta');
        if (!meta) {
          meta = document.createElement('div');
          meta.className = 'lineup-card-meta';
          card.appendChild(meta);
        }

        let price = meta.querySelector('.lineup-card-price');
        if (!price) {
          price = document.createElement('span');
          price.className = 'lineup-card-price';
          meta.appendChild(price);
        }

        let cta = meta.querySelector('.lineup-card-cta');
        if (!cta || cta.tagName !== 'BUTTON') {
          cta?.remove();
          cta = document.createElement('button');
          cta.className = 'lineup-card-cta';
          cta.type = 'button';
          meta.appendChild(cta);
        }

        price.textContent = translate('menu.lineupFromPrice', { price: formatPriceValue(categoryLowestPrice) });
        cta.dataset.cat = targetId;
        cta.textContent = translate('menu.lineupCtaNamed', {
          category: getLineupCategoryLabel(card),
        });
      });
    }

    function setActiveCategoryLink(categoryId, { centerNav = false } = {}) {
      if (!categoryId || categoryId === activeCategoryId) return;

      activeCategoryId = categoryId;
      catLinks.forEach((link) => {
        link.classList.toggle('active', link.dataset.cat === categoryId);
      });

      const activeLink = document.querySelector(`.cat-link[data-cat="${categoryId}"]`);
      if (activeLink && activeLink.parentElement) {
        const nav = activeLink.parentElement;
        const navRect = nav.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        const scrollLeft = nav.scrollLeft + (linkRect.left - navRect.left) - (navRect.width / 2) + (linkRect.width / 2);
        nav.scrollTo({ left: scrollLeft, behavior: centerNav ? 'smooth' : 'auto' });
      }
    }

    function getMenuOffset() {
      return (header?.offsetHeight || 0) + (catNavWrapper?.offsetHeight || 0) + 20;
    }

    function syncActiveCategoryFromScroll() {
      if (!categories.length) return;

      const threshold = getMenuOffset();
      let nextCategoryId = categories[0].id;

      categories.forEach((category) => {
        if (category.getBoundingClientRect().top <= threshold) {
          nextCategoryId = category.id;
        }
      });

      setActiveCategoryLink(nextCategoryId);
    }

    function requestMenuSync() {
      if (isMenuScrollTicking) return;
      isMenuScrollTicking = true;

      window.requestAnimationFrame(() => {
        syncActiveCategoryFromScroll();
        isMenuScrollTicking = false;
      });
    }

    function scrollToCategory(categoryId, smooth = true) {
      const target = document.getElementById(categoryId);
      if (!target) return;
      const offset = getMenuOffset();
      const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: smooth ? 'smooth' : 'auto',
      });
    }

    window.addEventListener('scroll', requestMenuSync, { passive: true });

    catLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const categoryId = link.dataset.cat;
        setActiveCategoryLink(categoryId, { centerNav: true });
        scrollToCategory(categoryId, true);
        history.replaceState(null, '', `#${categoryId}`);
      });
    });

    lineupCardsContainer?.addEventListener('click', (event) => {
      const cta = event.target.closest('.lineup-card-cta');
      if (!cta) return;

      event.preventDefault();
      const categoryId = cta.dataset.cat;
      if (!categoryId) return;

      setActiveCategoryLink(categoryId, { centerNav: true });
      scrollToCategory(categoryId, true);
      history.replaceState(null, '', `#${categoryId}`);
    });

    if (window.location.hash) {
      const hashId = window.location.hash.slice(1);
      setActiveCategoryLink(hashId, { centerNav: false });
      // Wait for layout to settle before scrolling
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToCategory(hashId, false);
        });
      });
    } else if (categories[0]) {
      setActiveCategoryLink(categories[0].id);
    }

    window.addEventListener('hashchange', () => {
      const targetId = window.location.hash.slice(1);
      if (targetId) {
        setActiveCategoryLink(targetId, { centerNav: true });
        scrollToCategory(targetId, true);
      }
    });

    refreshMenuPage = () => {
      refreshMenuOverview();
      requestMenuSync();
    };

    refreshMenuOverview();
  }

  const animateElements = document.querySelectorAll(
    '.highlight-card, .notice-card, .contact-card, .food-card, .about-content, .about-image, .menu-cta-content, .menu-hero-copy, .menu-hero-panel, .item-card, .contact-page-heading, .contact-simple-item, .faq-intro, .faq-item, .review-entry'
  );

  if (animateElements.length > 0) {
    const animObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (!entry.isIntersecting) return;

        window.setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, index * 80);
        animObserver.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    animateElements.forEach((element) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(24px)';
      animObserver.observe(element);
    });
  }

  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (!header) return;
    header.style.borderBottomColor = window.scrollY > 60 ? 'var(--border-strong)' : 'var(--border)';
  });

  applyTranslations();
  if (restoredListFromUrl) {
    openList();
  }
  updateStatus();
  setInterval(updateStatus, 60000);
});
