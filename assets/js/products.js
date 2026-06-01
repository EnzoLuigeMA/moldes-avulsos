// ============================================================
// CATÁLOGO DE MOLDES — Fonte única de verdade.
// Para adicionar/editar um molde, altere apenas este arquivo.
// cat: 'blusas' | 'vestidos' | 'saias' | 'calcas' | 'blazers'
// active:false => exibe selo 'EM BREVE' e desabilita o botão.
// ============================================================

const CATEGORIES = [
  { id: 'blusas',   label: 'Blusas e Tops' },
  { id: 'vestidos', label: 'Vestidos' },
  { id: 'saias',    label: 'Saias' },
  { id: 'calcas',   label: 'Calças, Shorts e Macacões' },
  { id: 'blazers',  label: 'Blazers e Sobreposições' },
];

const PRODUCTS = [
  {
    "name": "Blusa Boho",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-boho.jpg",
    "link": "https://go.hotmart.com/W104750862S",
    "active": true
  },
  {
    "name": "Blusa Cava Americana",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-cava-americana.jpg",
    "link": "https://go.hotmart.com/B104750886S",
    "active": true
  },
  {
    "name": "Blusa Decote V",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-decote-v.jpg",
    "link": "https://go.hotmart.com/K104750908O",
    "active": true
  },
  {
    "name": "Blusa Gola Alta Manga Franzida",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-gola-alta-manga-franzida.jpg",
    "link": "https://go.hotmart.com/E104751388V",
    "active": true
  },
  {
    "name": "Blusa Lenço",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-lenco.jpg",
    "link": "https://go.hotmart.com/R104756889M",
    "active": true
  },
  {
    "name": "Blusa Morcego",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-morcego.jpg",
    "link": "https://go.hotmart.com/W104751813J",
    "active": true
  },
  {
    "name": "Blusa Ombro a Ombro Manga Longa",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-ombro-a-ombro.jpg",
    "link": "https://go.hotmart.com/R104751021J",
    "active": true
  },
  {
    "name": "Blusa Pala e Franzidos",
    "cat": "blusas",
    "price": "39,90",
    "img": "produtos/blusa-pala-e-franzidos.jpg",
    "link": "https://go.hotmart.com/O106063608O",
    "active": true
  },
  {
    "name": "Blusa Peplum",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-peplum.jpg",
    "link": "https://go.hotmart.com/P104751588F",
    "active": true
  },
  {
    "name": "Blusa Peplum Assimétrica",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-peplum-assimetrica.jpg",
    "link": "https://go.hotmart.com/D104757659S",
    "active": true
  },
  {
    "name": "Blusa Peplum Manga Franzida",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-peplum-manga-franzida.jpg",
    "link": "https://go.hotmart.com/G104751727V",
    "active": true
  },
  {
    "name": "Camisa Bolsos",
    "cat": "blusas",
    "price": "39,90",
    "img": "produtos/camisa-bolsos.jpg",
    "link": "https://go.hotmart.com/D106063316T",
    "active": true
  },
  {
    "name": "Camisa Oversized",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/camisa-oversized.jpg",
    "link": "https://go.hotmart.com/I104751484W",
    "active": true
  },
  {
    "name": "Molde Blusa Babados",
    "cat": "blusas",
    "price": "27,90",
    "img": "produtos/molde-blusa-babados.jpg",
    "link": "https://go.hotmart.com/B99886468K",
    "active": true
  },
  {
    "name": "Molde Blusa Manga Flare",
    "cat": "blusas",
    "price": "17,90",
    "img": "produtos/molde-blusa-manga-flare.jpg",
    "link": "https://go.hotmart.com/Q99637627K",
    "active": true
  },
  {
    "name": "Regata Alça Grossa",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/regata-alca-grossa.jpg",
    "link": "https://go.hotmart.com/M104751454A",
    "active": true
  },
  {
    "name": "Top Nó",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/top-no.jpg",
    "link": "https://go.hotmart.com/C104751355U",
    "active": true
  },
  {
    "name": "Vestido Aberto Franzido",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-aberto-franzido.jpg",
    "link": "https://go.hotmart.com/H106064670A",
    "active": true
  },
  {
    "name": "Vestido Boho",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-boho.jpg",
    "link": "https://go.hotmart.com/L105093646P",
    "active": true
  },
  {
    "name": "Vestido Drapeado",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-drapeado.jpg",
    "link": "https://go.hotmart.com/C105093527O",
    "active": true
  },
  {
    "name": "Vestido Fluido Um Ombro Só",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-fluido-um-ombro-so.jpg",
    "link": "https://go.hotmart.com/A105457728O",
    "active": true
  },
  {
    "name": "Vestido Longo Cava Americana",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-cava-americana.jpg",
    "link": "https://go.hotmart.com/T105093177N",
    "active": true
  },
  {
    "name": "Vestido Longo Cavado",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-longo-cavado.jpg",
    "link": "https://go.hotmart.com/L105457575B",
    "active": true
  },
  {
    "name": "Vestido Longo Decote Reto",
    "cat": "vestidos",
    "price": "34,90",
    "img": "produtos/vestido-longo-decote-reto.jpg",
    "link": "https://go.hotmart.com/F105044008A",
    "active": true
  },
  {
    "name": "Vestido Midi Abotoamento",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-midi-abotoamento.jpg",
    "link": "https://go.hotmart.com/V105458471P",
    "active": true
  },
  {
    "name": "Vestido Midi Amarração",
    "cat": "vestidos",
    "price": "34,90",
    "img": "produtos/vestido-midi-amarracao.jpg",
    "link": "https://go.hotmart.com/M105041901U",
    "active": true
  },
  {
    "name": "Vestido Midi de Nesga",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-midi-nesgas.jpg",
    "link": "https://go.hotmart.com/V104340800J",
    "active": true
  },
  {
    "name": "Vestido Midi Franzido Assimétrico",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-franzido-assimetrico.jpg",
    "link": "https://go.hotmart.com/J105458598Y",
    "active": true
  },
  {
    "name": "Vestido Nó",
    "cat": "vestidos",
    "price": "34,90",
    "img": "produtos/vestido-no.jpg",
    "link": "https://go.hotmart.com/C105042323P",
    "active": true
  },
  {
    "name": "Vestido Pala Franzido",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-pala-franzido.jpg",
    "link": "https://go.hotmart.com/N105457890C",
    "active": true
  },
  {
    "name": "Vestido Pregas na Cintura",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-pregas-cintura.jpg",
    "link": "https://go.hotmart.com/P105458681N",
    "active": true
  },
  {
    "name": "Vestido Tomara que Caia",
    "cat": "vestidos",
    "price": "34,90",
    "img": "produtos/vestido-tomara-que-caia.jpg",
    "link": "https://go.hotmart.com/G104747802M",
    "active": true
  },
  {
    "name": "Vestido Trespasse Pregas",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-trespasse-pregas.jpg",
    "link": "https://go.hotmart.com/W105458224E",
    "active": true
  },
  {
    "name": "Vestido Tubinho Tweed",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-tubinho-tweed.jpg",
    "link": "https://go.hotmart.com/M105458112E",
    "active": true
  },
  {
    "name": "VT Chemise Bolsos",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vt-chemise-bolsos.jpg",
    "link": "https://go.hotmart.com/S106058299B",
    "active": true
  },
  {
    "name": "VT Decote Canoa Franzido Lateral",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vt-decote-canoa-franzido-lateral.jpg",
    "link": "https://go.hotmart.com/H105458158R",
    "active": true
  },
  {
    "name": "VT Manga Flare com Marias na Barra",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-manga-flare.jpg",
    "link": "https://go.hotmart.com/C105458751J",
    "active": true
  },
  {
    "name": "Molde Saia Jabour",
    "cat": "saias",
    "price": "14,90",
    "img": "produtos/molde-saia-jabour.jpg",
    "link": "https://go.hotmart.com/S80363437G",
    "active": true
  },
  {
    "name": "Saia Assimétrica Evasê Camadas",
    "cat": "saias",
    "price": "29,90",
    "img": "produtos/saia-assimetrica-camadas.jpg",
    "link": "https://go.hotmart.com/B104761353O",
    "active": true
  },
  {
    "name": "Saia Camadas",
    "cat": "saias",
    "price": "29,90",
    "img": "produtos/saia-camadas.jpg",
    "link": "https://go.hotmart.com/V104758094C",
    "active": true
  },
  {
    "name": "Saia Franzida",
    "cat": "saias",
    "price": "29,90",
    "img": "produtos/saia-franzida.jpg",
    "link": "https://go.hotmart.com/D104761419M",
    "active": true
  },
  {
    "name": "Saia Lápis",
    "cat": "saias",
    "price": "29,90",
    "img": "produtos/saia-lapis.jpg",
    "link": "https://go.hotmart.com/P104758204C",
    "active": true
  },
  {
    "name": "Saia Midi Assimétrica",
    "cat": "saias",
    "price": "29,90",
    "img": "produtos/saia-midi-assimetrica.jpg",
    "link": "https://go.hotmart.com/A104757888Y",
    "active": true
  },
  {
    "name": "Saia Nó",
    "cat": "saias",
    "price": "29,90",
    "img": "produtos/saia-no.jpg",
    "link": "https://go.hotmart.com/U104758302F",
    "active": true
  },
  {
    "name": "Saia Pala e Pregas",
    "cat": "saias",
    "price": "39,90",
    "img": "produtos/saia-pala-e-pregas.jpg",
    "link": "https://go.hotmart.com/X106062788V",
    "active": true
  },
  {
    "name": "Saia Reta Alfaiataria",
    "cat": "saias",
    "price": "29,90",
    "img": "produtos/saia-reta-alfaiataria.jpg",
    "link": "https://go.hotmart.com/X104761314K",
    "active": true
  },
  {
    "name": "Bermuda Alfaiataria Pregas",
    "cat": "calcas",
    "price": "29,90",
    "img": "produtos/bermuda-alfaiataria.jpg",
    "link": "https://go.hotmart.com/N104749193F",
    "active": true
  },
  {
    "name": "Calça Abertura Diagonal",
    "cat": "calcas",
    "price": "29,90",
    "img": "produtos/calca-abertura-diagonal.jpg",
    "link": "https://go.hotmart.com/K104761541G",
    "active": true
  },
  {
    "name": "Calça Alfaiataria",
    "cat": "calcas",
    "price": "29,90",
    "img": "produtos/calca-alfaiataria.jpg",
    "link": "https://go.hotmart.com/J104761647B",
    "active": true
  },
  {
    "name": "Calça Alfaiataria Pregas",
    "cat": "calcas",
    "price": "39,90",
    "img": "produtos/calca-alfaiataria-pregas.jpg",
    "link": "https://go.hotmart.com/K106063015O",
    "active": true
  },
  {
    "name": "Calça Amarração",
    "cat": "calcas",
    "price": "29,90",
    "img": "produtos/calca-amarracao.jpg",
    "link": "https://go.hotmart.com/H104761461Y",
    "active": true
  },
  {
    "name": "Calça Balão",
    "cat": "calcas",
    "price": "29,90",
    "img": "produtos/calca-balao.jpg",
    "link": "https://go.hotmart.com/E104761440O",
    "active": true
  },
  {
    "name": "Calça de Moletom",
    "cat": "calcas",
    "price": "29,90",
    "img": "produtos/calca-de-moletom.jpg",
    "link": "https://go.hotmart.com/W104761471K",
    "active": true
  },
  {
    "name": "Calça Elástico",
    "cat": "calcas",
    "price": "29,90",
    "img": "produtos/calca-elastico.jpg",
    "link": "https://go.hotmart.com/D104761582N",
    "active": true
  },
  {
    "name": "Calça Pantalona",
    "cat": "calcas",
    "price": "29,90",
    "img": "produtos/calca-pantalona.jpg",
    "link": "https://go.hotmart.com/F104761618A",
    "active": true
  },
  {
    "name": "Macacão Assimétrico",
    "cat": "calcas",
    "price": "39,90",
    "img": "produtos/macacao-assimetrico.jpg",
    "link": "https://go.hotmart.com/I106068566T",
    "active": true
  },
  {
    "name": "Macacão Bolso Frontal",
    "cat": "calcas",
    "price": "39,90",
    "img": "produtos/macacao-bolso-frontal.jpg",
    "link": "https://go.hotmart.com/T106068603X",
    "active": true
  },
  {
    "name": "Macacão Gola e Trespasse",
    "cat": "calcas",
    "price": "39,90",
    "img": "produtos/macacao-gola-e-trespasse.jpg",
    "link": "https://go.hotmart.com/A106068629S",
    "active": true
  },
  {
    "name": "Macacão Luiza Sobral",
    "cat": "calcas",
    "price": "39,90",
    "img": "produtos/macacao-luiza-sobral.jpg",
    "link": "https://go.hotmart.com/L106068359W",
    "active": true
  },
  {
    "name": "Molde de Calça Alfaiataria",
    "cat": "calcas",
    "price": "14,90",
    "img": "produtos/molde-de-calca-alfaiataria.jpg",
    "link": "https://go.hotmart.com/H80739958A",
    "active": true
  },
  {
    "name": "Molde de Short Alfaiataria",
    "cat": "calcas",
    "price": "14,90",
    "img": "produtos/molde-de-short-alfaiataria.jpg",
    "link": "https://go.hotmart.com/V80098823B",
    "active": true
  },
  {
    "name": "Short Alfaiataria",
    "cat": "calcas",
    "price": "29,90",
    "img": "produtos/short-alfaiataria.jpg",
    "link": "https://go.hotmart.com/A104761664Q",
    "active": true
  },
  {
    "name": "Short Elástico",
    "cat": "calcas",
    "price": "39,90",
    "img": "produtos/short-elastico.jpg",
    "link": "https://go.hotmart.com/X106062628I",
    "active": true
  },
  {
    "name": "Blazer Amarração",
    "cat": "blazers",
    "price": "39,90",
    "img": "produtos/blazer-amarracao.jpg",
    "link": "https://go.hotmart.com/Q106061132Y",
    "active": true
  },
  {
    "name": "Blazer Feminino",
    "cat": "blazers",
    "price": "39,90",
    "img": "produtos/blazer-feminino.jpg",
    "link": "https://go.hotmart.com/I106061319H",
    "active": true
  },
  {
    "name": "Casaqueto Tweed",
    "cat": "blazers",
    "price": "39,90",
    "img": "produtos/casaqueto-tweed.jpg",
    "link": "https://go.hotmart.com/Y106062215G",
    "active": true
  },
  {
    "name": "Colete Alfaiataria",
    "cat": "blazers",
    "price": "29,90",
    "img": "produtos/colete-alfaiataria.jpg",
    "link": "https://go.hotmart.com/W104749693D",
    "active": true
  },
  {
    "name": "Colete Amarração",
    "cat": "blazers",
    "price": "29,90",
    "img": "produtos/colete-amarracao.jpg",
    "link": "https://go.hotmart.com/P104751543P",
    "active": true
  },
  {
    "name": "Colete Assimétrico",
    "cat": "blazers",
    "price": "29,90",
    "img": "produtos/colete-assimetrico.jpg",
    "link": "https://go.hotmart.com/L104751629H",
    "active": true
  },
  {
    "name": "Colete Gola Alta",
    "cat": "blazers",
    "price": "39,90",
    "img": "produtos/colete-gola-alta.jpg",
    "link": "https://go.hotmart.com/B106063502M",
    "active": true
  },
  {
    "name": "Colete Maxi",
    "cat": "blazers",
    "price": "39,90",
    "img": "produtos/colete-maxi.jpg",
    "link": "https://go.hotmart.com/M106063693F",
    "active": true
  },
  {
    "name": "Colete Tomara que Caia",
    "cat": "blazers",
    "price": "29,90",
    "img": "produtos/colete-tqc.jpg",
    "link": "https://go.hotmart.com/M104751504Y",
    "active": true
  },
  {
    "name": "Jaqueta Bolsos",
    "cat": "blazers",
    "price": "39,90",
    "img": "produtos/jaqueta-bolsos.jpg",
    "link": "https://go.hotmart.com/Q106061091C",
    "active": true
  },
  {
    "name": "Jaqueta de Sarja",
    "cat": "blazers",
    "price": "39,90",
    "img": "produtos/jaqueta-sarja.jpg",
    "link": "https://go.hotmart.com/H104750779G",
    "active": true
  },
  {
    "name": "Kimono",
    "cat": "blazers",
    "price": "39,90",
    "img": "produtos/kimono.jpg",
    "link": "https://go.hotmart.com/R106061212K",
    "active": true
  },
  {
    "name": "Sobretudo Feminino",
    "cat": "blazers",
    "price": "49,90",
    "img": "produtos/sobretudo-feminino.jpg",
    "link": "https://go.hotmart.com/X106061157F",
    "active": true
  }
];
