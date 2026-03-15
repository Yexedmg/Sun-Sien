/* ===== MENU DATA ===== */
const MENU_DATA = [
  // === Voordeel Combi's ===
  { id: 1, name: "Combi 1", desc: "1 surinaams belegd broodje naar keuze t.w.v. €4,50, 1 st. Sun Sien fried chicken en 1 blikje limonade t.w.v. €2,30", price: "€9,00", category: "combis", catLabel: "Voordeel Combi's", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/COMBI-1-4.jpg" },
  { id: 2, name: "Combi 2", desc: "1 zelfgemaakte loempia uit eigen keuken, 1 st. Sun Sien fried chicken en 1 blikje limonade t.w.v. €2,30", price: "€9,00", category: "combis", catLabel: "Voordeel Combi's", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/COMBI-2-1.jpg" },
  { id: 3, name: "Combi 3", desc: "6 st. hotwings, patat met frietsaus en 1 blikje limonade t.w.v. €2,30", price: "€12,00", category: "combis", catLabel: "Voordeel Combi's", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/COMBI-3-2.jpg" },
  { id: 4, name: "Combi 4", desc: "1 halve kip gefrituurd, patat met frietsaus en 1 blikje limonade t.w.v. €2,25", price: "€13,25", category: "combis", catLabel: "Voordeel Combi's", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/COMBI-4.jpg" },
  { id: 5, name: "Combi 5", desc: "3 stokjes saté met pindasaus, patat en 1 blikje limonade t.w.v. €2,30", price: "€13,50", category: "combis", catLabel: "Voordeel Combi's", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/COMBI-5.jpg" },
  { id: 6, name: "Combi 6", desc: "2 st. Sun Sien fried chicken, patat met frietsaus en 1 blikje limonade t.w.v. €2,30", price: "€12,00", category: "combis", catLabel: "Voordeel Combi's", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/COMBI-6.jpg" },

  // === Eenpersoons Gerechten ===
  { id: 10, name: "Moksie Metie", desc: "Keuze uit rijst, surinaamse nasi of surinaamse bami", price: "€10,50", category: "eenpersoons", catLabel: "Eenpersoons Gerechten", img: null },
  { id: 11, name: "Geroosterde Kip", desc: "Keuze uit rijst, surinaamse nasi of surinaamse bami", price: "€10,50", category: "eenpersoons", catLabel: "Eenpersoons Gerechten", img: null },
  { id: 12, name: "Kerriekipfilet", desc: "Keuze uit rijst, surinaamse nasi of surinaamse bami", price: "€10,50", category: "eenpersoons", catLabel: "Eenpersoons Gerechten", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/12-kerrie-kipfilet.jpg" },
  { id: 13, name: "Babi Pangang", desc: "Keuze uit rijst, surinaamse nasi of surinaamse bami", price: "€10,50", category: "eenpersoons", catLabel: "Eenpersoons Gerechten", img: null },
  { id: 14, name: "Spek", desc: "Keuze uit rijst, surinaamse nasi of surinaamse bami", price: "€10,50", category: "eenpersoons", catLabel: "Eenpersoons Gerechten", img: null },
  { id: 15, name: "Tsa Saw", desc: "Keuze uit rijst, surinaamse nasi of surinaamse bami", price: "€10,50", category: "eenpersoons", catLabel: "Eenpersoons Gerechten", img: null },
  { id: 16, name: "Kipfilet Pikant", desc: "Keuze uit rijst, surinaamse nasi of surinaamse bami", price: "€10,50", category: "eenpersoons", catLabel: "Eenpersoons Gerechten", img: null },
  { id: 17, name: "Gestoofd Varkensvlees", desc: "Keuze uit rijst, surinaamse nasi of surinaamse bami", price: "€10,50", category: "eenpersoons", catLabel: "Eenpersoons Gerechten", img: null },
  { id: 18, name: "Pom", desc: "Keuze uit rijst, surinaamse nasi of surinaamse bami", price: "€10,50", category: "eenpersoons", catLabel: "Eenpersoons Gerechten", img: null },
  { id: 19, name: "Foe Yung Hai", desc: "Kip of varkensvlees. Keuze uit rijst, surinaamse nasi of surinaamse bami", price: "€10,50", category: "eenpersoons", catLabel: "Eenpersoons Gerechten", img: null },

  // === Belegde Broodjes ===
  { id: 40, name: "Broodje Zoutvlees", desc: "", price: "€5,20", category: "broodjes", catLabel: "Belegde Broodjes", img: null },
  { id: 41, name: "Broodje Bakkeljauw", desc: "", price: "€5,20", category: "broodjes", catLabel: "Belegde Broodjes", img: null },
  { id: 42, name: "Broodje Tsa Saw", desc: "", price: "€4,50", category: "broodjes", catLabel: "Belegde Broodjes", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/42-broodje-tsasaw-png.jpg" },
  { id: 43, name: "Broodje Fa Chong", desc: "", price: "€4,50", category: "broodjes", catLabel: "Belegde Broodjes", img: null },
  { id: 44, name: "Broodje Warm Vlees", desc: "", price: "€4,50", category: "broodjes", catLabel: "Belegde Broodjes", img: null },
  { id: 45, name: "Broodje Kerrie Kip", desc: "", price: "€4,50", category: "broodjes", catLabel: "Belegde Broodjes", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/45-broodje-kerrie-kip-tif.jpg" },
  { id: 46, name: "Broodje Pom", desc: "", price: "€5,00", category: "broodjes", catLabel: "Belegde Broodjes", img: null },
  { id: 47, name: "Broodje Garnalen", desc: "", price: "€5,20", category: "broodjes", catLabel: "Belegde Broodjes", img: null },
  { id: 48, name: "Broodje Spek", desc: "", price: "€4,50", category: "broodjes", catLabel: "Belegde Broodjes", img: null },
  { id: 49, name: "Broodje Kerrie Ei", desc: "", price: "€4,50", category: "broodjes", catLabel: "Belegde Broodjes", img: null },
  { id: 50, name: "Broodje Steak", desc: "", price: "€5,20", category: "broodjes", catLabel: "Belegde Broodjes", img: null },
  { id: 51, name: "Gevulde Bara", desc: "", price: "vanaf €6,50", category: "broodjes", catLabel: "Belegde Broodjes", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/51-bara.jpg" },
  { id: 52, name: "Broodje Kotelet", desc: "", price: "€6,20", category: "broodjes", catLabel: "Belegde Broodjes", img: null },
  { id: 53, name: "Broodje Vegetarisch", desc: "", price: "€4,50", category: "broodjes", catLabel: "Belegde Broodjes", img: null },
  { id: 54, name: "Broodje Gevangenis", desc: "Spiegelei met geroosterde kip", price: "€6,00", category: "broodjes", catLabel: "Belegde Broodjes", img: null },
  { id: 55, name: "Broodje Geroosterde Kip", desc: "", price: "€5,50", category: "broodjes", catLabel: "Belegde Broodjes", img: null },
  { id: 56, name: "Broodje Kipfilet Pikant", desc: "", price: "€4,50", category: "broodjes", catLabel: "Belegde Broodjes", img: null },
  { id: 57, name: "Broodje Dynamite", desc: "Mix van kerrie kip en tsa saw", price: "€5,20", category: "broodjes", catLabel: "Belegde Broodjes", img: null },
  { id: 58, name: "Broodje Foe Young Hai", desc: "Omelet met diverse groenten", price: "€4,50", category: "broodjes", catLabel: "Belegde Broodjes", img: null },
  { id: 59, name: "Broodje Saté (kip)", desc: "", price: "€6,00", category: "broodjes", catLabel: "Belegde Broodjes", img: null },

  // === Specialiteiten ===
  { id: 60, name: "Saté", desc: "3 stokjes", price: "€7,80", category: "specialiteiten", catLabel: "Specialiteiten", img: null },
  { id: 61, name: "Telo met Bakkeljauw", desc: "", price: "€7,00", category: "specialiteiten", catLabel: "Specialiteiten", img: null },
  { id: 62, name: "Loempia uit Eigen Keuken", desc: "", price: "€4,50", category: "specialiteiten", catLabel: "Specialiteiten", img: null },
  { id: 63, name: "Pietjel", desc: "", price: "€4,50", category: "specialiteiten", catLabel: "Specialiteiten", img: null },
  { id: 64, name: "Bakka Bana", desc: "Gebakken banaan", price: "€2,50", category: "specialiteiten", catLabel: "Specialiteiten", img: null },
  { id: 65, name: "Surinaamse Bloedworst", desc: "", price: "€3,30", category: "specialiteiten", catLabel: "Specialiteiten", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/65-66-worst.jpg" },
  { id: 66, name: "Surinaamse Vleesworst", desc: "", price: "€3,70", category: "specialiteiten", catLabel: "Specialiteiten", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/65-66-worst.jpg" },
  { id: 67, name: "Fa Chong", desc: "", price: "€4,80", category: "specialiteiten", catLabel: "Specialiteiten", img: null },
  { id: 68, name: "Bara", desc: "", price: "€3,00", category: "specialiteiten", catLabel: "Specialiteiten", img: null },
  { id: 70, name: "Frita", desc: "", price: "€2,50", category: "specialiteiten", catLabel: "Specialiteiten", img: null },
  { id: 71, name: "Rotirol", desc: "Opgerolde pannenkoek gevuld met kipfilet, aardappel, kouseband en ei", price: "€10,00", category: "specialiteiten", catLabel: "Specialiteiten", img: null },
  { id: 72, name: "Sun Sien Fried Chicken", desc: "1 stuk", price: "€3,00", category: "specialiteiten", catLabel: "Specialiteiten", img: null },
  { id: 73, name: "Sun Sien Fried Chicken (5 st.)", desc: "5 stuks", price: "€13,50", category: "specialiteiten", catLabel: "Specialiteiten", img: null },
  { id: 74, name: "Chicken Combo", desc: "2 stukjes Fried Chicken, patat en frietsaus", price: "€10,00", category: "specialiteiten", catLabel: "Specialiteiten", img: null },
  { id: 76, name: "HotWings", desc: "Per portie van 3 stuks", price: "€3,00", category: "specialiteiten", catLabel: "Specialiteiten", img: null },
  { id: 78, name: "Grote Pikante Garnalen", desc: "", price: "€19,50", category: "specialiteiten", catLabel: "Specialiteiten", img: null },

  // === Nieuwe Gerechten ===
  { id: 86, name: "Kung Po Kai", desc: "Kipfilet met speciale pittigsaus en cashewnoten", price: "€17,50", category: "nieuwe", catLabel: "Nieuwe Gerechten", img: null },
  { id: 87, name: "Kung Po Varken", desc: "Varkensvlees met speciale pittigsaus en cashewnoten", price: "€17,50", category: "nieuwe", catLabel: "Nieuwe Gerechten", img: null },
  { id: 88, name: "Kung Po Rundvlees", desc: "Rundvlees met pittigsaus en cashewnoten", price: "€19,50", category: "nieuwe", catLabel: "Nieuwe Gerechten", img: null },
  { id: 89, name: "Kung Po Garnalen", desc: "Garnalen met pittigsaus en cashewnoten", price: "€19,50", category: "nieuwe", catLabel: "Nieuwe Gerechten", img: null },
  { id: 90, name: "Tausi Kai", desc: "Zwarte bonensaus met kipfilet", price: "€17,50", category: "nieuwe", catLabel: "Nieuwe Gerechten", img: null },
  { id: 91, name: "Tausi Varkensvlees", desc: "Zwarte bonensaus met varkensvlees", price: "€17,50", category: "nieuwe", catLabel: "Nieuwe Gerechten", img: null },
  { id: 92, name: "Tausi Rundvlees", desc: "Zwarte bonensaus met rundvlees", price: "€19,50", category: "nieuwe", catLabel: "Nieuwe Gerechten", img: null },
  { id: 93, name: "Tausi Garnalen", desc: "Zwarte bonensaus met garnalen", price: "€19,50", category: "nieuwe", catLabel: "Nieuwe Gerechten", img: null },
  { id: 94, name: "Zwarte Pepersaus Kipfilet", desc: "", price: "€17,50", category: "nieuwe", catLabel: "Nieuwe Gerechten", img: null },
  { id: 95, name: "Zwarte Pepersaus Varkensvlees", desc: "", price: "€17,50", category: "nieuwe", catLabel: "Nieuwe Gerechten", img: null },
  { id: 96, name: "Zwarte Pepersaus Rundvlees", desc: "", price: "€19,50", category: "nieuwe", catLabel: "Nieuwe Gerechten", img: null },
  { id: 97, name: "Zwarte Pepersaus Garnalen", desc: "", price: "€19,50", category: "nieuwe", catLabel: "Nieuwe Gerechten", img: null },
  { id: 98, name: "Chieuw Jiem Kai", desc: "Droog gebakken kipfilet met speciale kruiden", price: "€17,50", category: "nieuwe", catLabel: "Nieuwe Gerechten", img: null },
  { id: 99, name: "Chieuw Jiem Varken", desc: "Droog gebakken varkensvlees met speciale kruiden", price: "€17,50", category: "nieuwe", catLabel: "Nieuwe Gerechten", img: null },
  { id: 100, name: "Chieuw Jiem Rundvlees", desc: "Droog gebakken rundvlees met speciale kruiden", price: "€19,50", category: "nieuwe", catLabel: "Nieuwe Gerechten", img: null },
  { id: 101, name: "Chieuw Jiem Garnalen", desc: "Droog gebakken garnalen met speciale kruiden", price: "€19,50", category: "nieuwe", catLabel: "Nieuwe Gerechten", img: null },

  // === Surinaamse Gerechten ===
  { id: 110, name: "Saoto Soep", desc: "Pittige soep met taugé en kip · optie met rijst +€1,00", price: "€7,00", category: "surinaams", catLabel: "Surinaamse Gerechten", img: "https://www.sunsien.nl/wp-content/uploads/2022/09/Saoto-soep.png" },
  { id: 111, name: "Wonton Soep", desc: "Dumplings van garnalen en varkensvlees met bami", price: "€10,00", category: "surinaams", catLabel: "Surinaamse Gerechten", img: null },
  { id: 112, name: "Min Soep", desc: "Bamisoep met moksie vlees", price: "€13,00", category: "surinaams", catLabel: "Surinaamse Gerechten", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/112-min-soep.jpg" },
  { id: 113, name: "Roti Kip", desc: "Pannenkoek met kip (met bot), aardappel, kouseband en ei", price: "€13,50", category: "surinaams", catLabel: "Surinaamse Gerechten", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/113-roti-kipkopiekopie.jpg" },
  { id: 114, name: "Roti Kipfilet", desc: "Pannenkoek met kerrie kipfilet, aardappel, kouseband en ei", price: "€14,50", category: "surinaams", catLabel: "Surinaamse Gerechten", img: null },
  { id: 115, name: "Roti Varkensvlees", desc: "Pannenkoek met varkensvlees (tsa sieuw), aardappel, kouseband en ei", price: "€14,50", category: "surinaams", catLabel: "Surinaamse Gerechten", img: null },
  { id: 116, name: "Roti Rundvlees", desc: "Pannenkoek met rundvlees, aardappel, kouseband en ei", price: "€16,50", category: "surinaams", catLabel: "Surinaamse Gerechten", img: null },
  { id: 117, name: "Moksie Metie", desc: "Geroosterd mager varkensvlees, krokante spek, geroosterde kip en fachong met saus en groenten. Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€15,50", category: "surinaams", catLabel: "Surinaamse Gerechten", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/117-moksie-metie-1.jpg" },
  { id: 118, name: "Gestoofd Varkensvlees Ketjapsaus", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€15,50", category: "surinaams", catLabel: "Surinaamse Gerechten", img: null },
  { id: 119, name: "Gestoofd Varkensvlees met Gezouten Amsoi", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€17,00", category: "surinaams", catLabel: "Surinaamse Gerechten", img: null },
  { id: 120, name: "Tsa Saw", desc: "Geroosterd mager varkensvlees. Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€15,50", category: "surinaams", catLabel: "Surinaamse Gerechten", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/120-Tsa-saw.jpg" },
  { id: 121, name: "Kerrie Kip", desc: "Kip met bot. Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€15,50", category: "surinaams", catLabel: "Surinaamse Gerechten", img: null },
  { id: 122, name: "Pom", desc: "Surinaamse ragout met kip en tomaten. Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€16,50", category: "surinaams", catLabel: "Surinaamse Gerechten", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/122-pom.jpg" },
  { id: 123, name: "Losie Foroe", desc: "In onze speciale oven geroosterde kip. Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€15,50", category: "surinaams", catLabel: "Surinaamse Gerechten", img: null },
  { id: 124, name: "Tjauw Min", desc: "Surinaamse bami met moksie", price: "€15,50", category: "surinaams", catLabel: "Surinaamse Gerechten", img: null },
  { id: 125, name: "Tjauw Fan", desc: "Surinaamse nasi met moksie", price: "€15,50", category: "surinaams", catLabel: "Surinaamse Gerechten", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/125-tjauwfan.jpg" },
  { id: 126, name: "Bakkeljauw met Kouseband", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€18,50", category: "surinaams", catLabel: "Surinaamse Gerechten", img: null },
  { id: 127, name: "Bruine Bonen met Kip of Varkensvlees", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€16,50", category: "surinaams", catLabel: "Surinaamse Gerechten", img: null },
  { id: 128, name: "Bruine Bonen met Zoutvlees of Rundvlees", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€18,50", category: "surinaams", catLabel: "Surinaamse Gerechten", img: null },
  { id: 130, name: "Roti Vegetarisch", desc: "", price: "€13,50", category: "surinaams", catLabel: "Surinaamse Gerechten", img: null },

  // === Caribische Gerechten ===
  { id: 136, name: "Porkchop ku Batata", desc: "", price: "€16,50", category: "caribisch", catLabel: "Caribische Gerechten", img: null },
  { id: 137, name: "Porkkotelet ku Batata", desc: "", price: "€18,00", category: "caribisch", catLabel: "Caribische Gerechten", img: null },
  { id: 138, name: "Saté ku Batata", desc: "", price: "€14,00", category: "caribisch", catLabel: "Caribische Gerechten", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/138-sate-kubatata.jpg" },
  { id: 139, name: "Nasi Gori Style di Corsow", desc: "", price: "€15,50", category: "caribisch", catLabel: "Caribische Gerechten", img: null },
  { id: 140, name: "Caribische Spareribs", desc: "", price: "€16,50", category: "caribisch", catLabel: "Caribische Gerechten", img: null },
  { id: 141, name: "Batata Plain", desc: "", price: "€9,50", category: "caribisch", catLabel: "Caribische Gerechten", img: null },
  { id: 142, name: "Chicken Cotlets ku Batata", desc: "", price: "€18,00", category: "caribisch", catLabel: "Caribische Gerechten", img: null },

  // === Vlees Gerechten ===
  { id: 150, name: "Babi Pangang", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€16,50", category: "vlees", catLabel: "Vlees Gerechten", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/150-babi-pangang.jpg" },
  { id: 151, name: "Babi Pangang met Ananas", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€17,50", category: "vlees", catLabel: "Vlees Gerechten", img: null },
  { id: 152, name: "Varkenshaas met Ananas", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€16,50", category: "vlees", catLabel: "Vlees Gerechten", img: null },
  { id: 153, name: "Varkenshaas met Champignons", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€16,50", category: "vlees", catLabel: "Vlees Gerechten", img: null },
  { id: 154, name: "Varkenshaas in Pikante Saus", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€17,50", category: "vlees", catLabel: "Vlees Gerechten", img: null },
  { id: 155, name: "Koe Law Yuk", desc: "Varkensvlees in een krokant jasje met zoetzure saus volgens Kantonees recept. Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€18,00", category: "vlees", catLabel: "Vlees Gerechten", img: null },
  { id: 156, name: "Babi Pangang Spek", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€16,50", category: "vlees", catLabel: "Vlees Gerechten", img: null },

  // === Kip Gerechten ===
  { id: 160, name: "Kipfilet met Champignons", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€16,50", category: "kip", catLabel: "Kip Gerechten", img: null },
  { id: 161, name: "Kipfilet met Ananas", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€16,50", category: "kip", catLabel: "Kip Gerechten", img: null },
  { id: 162, name: "Kipfilet in Kerriesaus", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€17,00", category: "kip", catLabel: "Kip Gerechten", img: null },
  { id: 163, name: "Kipfilet in Pikante Saus", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€17,50", category: "kip", catLabel: "Kip Gerechten", img: null },
  { id: 164, name: "Koe Law Kai", desc: "Krokant gebakken kipfilet in zoetzure saus volgens Kantonees recept. Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€18,00", category: "kip", catLabel: "Kip Gerechten", img: null },

  // === Ei Gerechten ===
  { id: 170, name: "Foe Young Hai met Varkensvlees", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€15,50", category: "ei", catLabel: "Ei Gerechten", img: null },
  { id: 171, name: "Foe Young Hai met Kipfilet", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€15,50", category: "ei", catLabel: "Ei Gerechten", img: null },
  { id: 172, name: "Foe Young Hai met Rundvlees", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€18,50", category: "ei", catLabel: "Ei Gerechten", img: null },
  { id: 173, name: "Foe Young Hai met Garnalen", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€18,50", category: "ei", catLabel: "Ei Gerechten", img: null },
  { id: 174, name: "Foe Young Hai Vegetarisch", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€14,50", category: "ei", catLabel: "Ei Gerechten", img: null },

  // === Groente Gerechten ===
  { id: 180, name: "Tjap Tjoy met Varkensvlees", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€15,50", category: "groente", catLabel: "Groente Gerechten", img: null },
  { id: 181, name: "Tjap Tjoy met Kipfilet", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€15,50", category: "groente", catLabel: "Groente Gerechten", img: null },
  { id: 182, name: "Tjap Tjoy met Rundvlees", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€18,50", category: "groente", catLabel: "Groente Gerechten", img: null },
  { id: 183, name: "Tjap Tjoy Speciaal", desc: "Met kip en varkensvlees. Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€18,50", category: "groente", catLabel: "Groente Gerechten", img: null },
  { id: 184, name: "Tjap Tjoy met Garnalen", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€18,50", category: "groente", catLabel: "Groente Gerechten", img: null },
  { id: 185, name: "Gado Gado", desc: "Salade van diverse groenten in pindasaus. Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€14,50", category: "groente", catLabel: "Groente Gerechten", img: null },
  { id: 186, name: "Tjap Tjoy Vegetarisch", desc: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00", price: "€14,50", category: "groente", catLabel: "Groente Gerechten", img: null },

  // === Chinese Nasi Gerechten ===
  { id: 190, name: "Nasi Goreng met Ei en Kip", desc: "", price: "€10,50", category: "nasi", catLabel: "Chinese Nasi Gerechten", img: null },
  { id: 191, name: "Nasi Goreng met Saté", desc: "4 stokjes", price: "€17,50", category: "nasi", catLabel: "Chinese Nasi Gerechten", img: null },
  { id: 192, name: "Nasi Goreng met Kip en Saté", desc: "", price: "€17,50", category: "nasi", catLabel: "Chinese Nasi Gerechten", img: null },
  { id: 193, name: "Nasi Young Chow", desc: "Met garnalen en vlees", price: "€18,50", category: "nasi", catLabel: "Chinese Nasi Gerechten", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/193Nasi-young-chow.jpg" },
  { id: 194, name: "Nasi Goreng met Garnalen", desc: "", price: "€18,50", category: "nasi", catLabel: "Chinese Nasi Gerechten", img: null },
  { id: 195, name: "Nasi met Kipfilet", desc: "", price: "€17,00", category: "nasi", catLabel: "Chinese Nasi Gerechten", img: null },
  { id: 196, name: "Nasi met Rundvlees", desc: "", price: "€18,50", category: "nasi", catLabel: "Chinese Nasi Gerechten", img: null },

  // === Chinese Bami Gerechten ===
  { id: 200, name: "Bami Goreng met Ei en Kip", desc: "", price: "€10,50", category: "bami", catLabel: "Chinese Bami Gerechten", img: null },
  { id: 201, name: "Bami Goreng met Saté", desc: "4 stokjes", price: "€17,50", category: "bami", catLabel: "Chinese Bami Gerechten", img: null },
  { id: 202, name: "Bami Goreng met Kip en Saté", desc: "", price: "€17,50", category: "bami", catLabel: "Chinese Bami Gerechten", img: null },
  { id: 203, name: "Bami Goreng met Garnalen", desc: "", price: "€18,50", category: "bami", catLabel: "Chinese Bami Gerechten", img: null },
  { id: 204, name: "Bami Goreng met Kipfilet", desc: "", price: "€17,00", category: "bami", catLabel: "Chinese Bami Gerechten", img: null },
  { id: 205, name: "Bami Goreng met Rundvlees", desc: "", price: "€18,50", category: "bami", catLabel: "Chinese Bami Gerechten", img: null },
  { id: 206, name: "Tjauw Min met Kipfilet", desc: "", price: "€17,00", category: "bami", catLabel: "Chinese Bami Gerechten", img: "https://www.sunsien.nl/wp-content/uploads/2022/08/206-Tjauw-min.jpg" },
  { id: 207, name: "Tjauw Min met Ei en Kip", desc: "", price: "€10,50", category: "bami", catLabel: "Chinese Bami Gerechten", img: null },
  { id: 208, name: "Tjauw Min met Rundvlees", desc: "", price: "€18,50", category: "bami", catLabel: "Chinese Bami Gerechten", img: null },

  // === Mihoen Gerechten ===
  { id: 210, name: "Mihoen Goreng met Varkensvlees", desc: "", price: "€16,50", category: "mihoen", catLabel: "Mihoen Gerechten", img: null },
  { id: 211, name: "Mihoen Goreng met Kipfilet", desc: "", price: "€16,50", category: "mihoen", catLabel: "Mihoen Gerechten", img: null },
  { id: 212, name: "Mihoen Goreng met Rundvlees", desc: "", price: "€19,50", category: "mihoen", catLabel: "Mihoen Gerechten", img: null },
  { id: 213, name: "Mihoen Goreng met Garnalen", desc: "", price: "€19,50", category: "mihoen", catLabel: "Mihoen Gerechten", img: null },
  { id: 214, name: "Sing Chow Mihoen", desc: "Met garnalen, vlees en kerrie", price: "€19,50", category: "mihoen", catLabel: "Mihoen Gerechten", img: null },
  { id: 215, name: "Mihoen Goreng Speciaal", desc: "Met kip en varkensvlees", price: "€19,00", category: "mihoen", catLabel: "Mihoen Gerechten", img: null },

  // === Snacks & Bijgerechten ===
  { id: 220, name: "Frikandel", desc: "", price: "€2,80", category: "snacks", catLabel: "Snacks & Bijgerechten", img: null },
  { id: 245, name: "Patat", desc: "", price: "€3,90", category: "snacks", catLabel: "Snacks & Bijgerechten", img: null },
  { id: 246, name: "Patat met Fritesaus", desc: "", price: "€4,70", category: "snacks", catLabel: "Snacks & Bijgerechten", img: null },
  { id: 247, name: "Patat met Currysaus", desc: "", price: "€4,70", category: "snacks", catLabel: "Snacks & Bijgerechten", img: null },
  { id: 248, name: "Patat Speciaal", desc: "", price: "€5,00", category: "snacks", catLabel: "Snacks & Bijgerechten", img: null },
  { id: 249, name: "Patat Oorlog", desc: "", price: "€5,00", category: "snacks", catLabel: "Snacks & Bijgerechten", img: null },
  { id: 250, name: "Groot Patat", desc: "", price: "€6,80", category: "snacks", catLabel: "Snacks & Bijgerechten", img: null },
  { id: 260, name: "Surinaams Broodje", desc: "", price: "€1,00", category: "snacks", catLabel: "Snacks & Bijgerechten", img: null },
  { id: null, name: "Portie Nasi / Bami", desc: "", price: "€4,00 / €7,00", category: "snacks", catLabel: "Snacks & Bijgerechten", img: null },
  { id: null, name: "Portie Mihoen", desc: "", price: "€8,00", category: "snacks", catLabel: "Snacks & Bijgerechten", img: null },
  { id: null, name: "Portie Witte Rijst", desc: "", price: "€3,50 / €4,50", category: "snacks", catLabel: "Snacks & Bijgerechten", img: null },
  { id: null, name: "Portie Kroepoek", desc: "", price: "€4,00", category: "snacks", catLabel: "Snacks & Bijgerechten", img: null },
  { id: null, name: "Zakje Sambal", desc: "", price: "€0,50", category: "snacks", catLabel: "Snacks & Bijgerechten", img: null },
  { id: null, name: "Bananenchips", desc: "", price: "€4,00", category: "snacks", catLabel: "Snacks & Bijgerechten", img: null },
  { id: null, name: "Maizena Koek", desc: "", price: "€3,80", category: "snacks", catLabel: "Snacks & Bijgerechten", img: null },
];

// Category display order (sorted by lowest item number)
const CATEGORY_ORDER = [
  "combis", "eenpersoons", "broodjes", "specialiteiten", "nieuwe",
  "surinaams", "caribisch", "vlees", "kip", "ei", "groente",
  "nasi", "bami", "mihoen", "snacks"
];

// Category badges
const CATEGORY_BADGES = {};

// Category notes
const CATEGORY_NOTES = {
  eenpersoons: "Keuze uit rijst, surinaamse nasi of surinaamse bami",
  surinaams: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00",
  vlees: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00",
  kip: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00",
  ei: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00",
  groente: "Standaard met witte rijst. Nasi/bami i.p.v. rijst +€3,00 · Mihoen +€4,00",
};

// Extra item photos confirmed on the live sunsien.nl menu page.
const MENU_IMAGE_OVERRIDES = {
  15: "https://www.sunsien.nl/wp-content/uploads/2022/08/120-Tsa-saw-150x150.jpg",
  60: "https://www.sunsien.nl/wp-content/uploads/2022/08/3-stokjes-sate-150x150.jpg",
  61: "https://www.sunsien.nl/wp-content/uploads/2022/11/61-Telo--150x150.png",
  62: "https://www.sunsien.nl/wp-content/uploads/2022/11/loempia-150x150.png",
  64: "https://www.sunsien.nl/wp-content/uploads/2022/11/gebakken-banaan-150x150.png",
  68: "https://www.sunsien.nl/wp-content/uploads/2022/08/68-bara-150x150.jpg",
  70: "https://www.sunsien.nl/wp-content/uploads/2022/08/70-frita-150x150.jpg",
  72: "https://www.sunsien.nl/wp-content/uploads/2023/03/fried-chicken-150x150.png",
  74: "https://www.sunsien.nl/wp-content/uploads/2023/03/Chicken-combo-150x150.png",
  78: "https://www.sunsien.nl/wp-content/uploads/2022/08/78pikante-garnalen-150x150.jpg",
  118: "https://www.sunsien.nl/wp-content/uploads/2022/08/118-gestoofd-varkensvlees-1-1024x1024.jpg",
  119: "https://www.sunsien.nl/wp-content/uploads/2022/08/119-gestoofd-varkensvleesamsoi-1-1024x1024.jpg",
  121: "https://www.sunsien.nl/wp-content/uploads/2022/08/121-kerrie-kip-1-1024x1024.jpg",
  123: "https://www.sunsien.nl/wp-content/uploads/2022/08/123-losie-foroe-1024x1024.jpg",
  124: "https://www.sunsien.nl/wp-content/uploads/2022/08/206-Tjauw-min-1024x1024.jpg",
  126: "https://www.sunsien.nl/wp-content/uploads/2022/08/126-bakkeljauw-1024x1024.jpg",
  127: "https://www.sunsien.nl/wp-content/uploads/2022/11/P5230150-1024x683.jpg",
  136: "https://www.sunsien.nl/wp-content/uploads/2022/08/136-porkchop-150x150.jpg",
  137: "https://www.sunsien.nl/wp-content/uploads/2022/08/137-porkkotelet-150x150.jpg",
  139: "https://www.sunsien.nl/wp-content/uploads/2022/10/190A-nasigorengkip-150x150.png",
  140: "https://www.sunsien.nl/wp-content/uploads/2022/08/140-spare-ribs-150x150.jpg",
  142: "https://www.sunsien.nl/wp-content/uploads/2022/08/142-chicken-cotlets-150x150.jpg",
  151: "https://www.sunsien.nl/wp-content/uploads/2022/08/151-babi-pangang-150x150.jpg",
  152: "https://www.sunsien.nl/wp-content/uploads/2022/08/152-varkenshaas-150x150.jpg",
  154: "https://www.sunsien.nl/wp-content/uploads/2022/08/154-varkenshaas-pikante-saus-150x150.jpg",
  155: "https://www.sunsien.nl/wp-content/uploads/2022/08/155-koe-law-yuk-150x150.jpg",
  160: "https://www.sunsien.nl/wp-content/uploads/2022/08/160-kipfilet-met-champ-150x150.jpg",
  161: "https://www.sunsien.nl/wp-content/uploads/2022/08/161-ananas-kip-150x150.jpg",
  162: "https://www.sunsien.nl/wp-content/uploads/2022/08/162-kipfiletkerriesaus-150x150.jpg",
  164: "https://www.sunsien.nl/wp-content/uploads/2022/08/164-Koe-law-kai-150x150.jpg",
  170: "https://www.sunsien.nl/wp-content/uploads/2022/11/P5230172-150x150.jpg",
  182: "https://www.sunsien.nl/wp-content/uploads/2022/08/182-tjap-tjoy-150x150.jpg",
  185: "https://www.sunsien.nl/wp-content/uploads/2022/08/185-gado-gado-150x150.jpg",
  192: "https://www.sunsien.nl/wp-content/uploads/2022/08/192-nasi-goreng-kipsate-150x150.jpg",
  194: "https://www.sunsien.nl/wp-content/uploads/2022/08/194-nasi-gorenggarnalen-150x150.jpg",
  195: "https://www.sunsien.nl/wp-content/uploads/2022/08/195-nasi-kipfilet-150x150.jpg",
  200: "https://www.sunsien.nl/wp-content/uploads/2022/08/200-bami-goreng-150x150.jpg",
  201: "https://www.sunsien.nl/wp-content/uploads/2022/08/201-bami-met-sate-150x150.jpg",
  202: "https://www.sunsien.nl/wp-content/uploads/2022/08/202-bami-goreng-kipsate-150x150.jpg",
  203: "https://www.sunsien.nl/wp-content/uploads/2022/08/203-bamigarnalen-150x150.jpg",
  208: "https://www.sunsien.nl/wp-content/uploads/2022/08/208-Tjauw-min-rundvlees-150x150.jpg",
  210: "https://www.sunsien.nl/wp-content/uploads/2022/08/210-mihoen-varken-150x150.jpg",
  211: "https://www.sunsien.nl/wp-content/uploads/2022/08/211-mihoen-kipfilet-150x150.jpg",
  214: "https://www.sunsien.nl/wp-content/uploads/2022/08/214-Sing-chow-150x150.jpg",
};

function normalizeMenuItemName(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function slugifyMenuItemName(name) {
  return normalizeMenuItemName(name).replace(/\s+/g, "-");
}

function getMenuItemImageSource(item) {
  if (!item) return null;
  if (item.id != null && MENU_IMAGE_OVERRIDES[item.id]) return MENU_IMAGE_OVERRIDES[item.id];
  return item.img || null;
}

function getMenuItemImage(item) {
  const directImage = getMenuItemImageSource(item);
  if (directImage) return directImage;
  if (!item) return null;

  const normalizedName = normalizeMenuItemName(item.name);
  const matchingItem = MENU_DATA.find(candidate =>
    candidate !== item &&
    normalizeMenuItemName(candidate.name) === normalizedName &&
    getMenuItemImageSource(candidate)
  );

  return matchingItem ? getMenuItemImageSource(matchingItem) : null;
}

function getMenuItemFileName(item) {
  const slug = slugifyMenuItemName(item.name) || "menu-item";
  return item.id != null ? `${String(item.id).padStart(3, "0")}-${slug}.html` : `${slug}.html`;
}

function getMenuItemPath(item) {
  return `items/${getMenuItemFileName(item)}`;
}

// Helper: get item by id
function getMenuItemById(id) {
  return MENU_DATA.find(item => item.id === id);
}

// Helper: get items by category, sorted by id
function getItemsByCategory(cat) {
  return MENU_DATA
    .filter(item => item.category === cat)
    .sort((a, b) => (a.id || 999) - (b.id || 999));
}
