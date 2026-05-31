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
    "name": "Blusa Peplum Assimétrica",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-peplum-assimetrica.jpg",
    "link": "https://pay.hotmart.com/D104757659S",
    "active": true
  },
  {
    "name": "Blusa Morcego",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-morcego.jpg",
    "link": "https://pay.hotmart.com/W104751813J",
    "active": true
  },
  {
    "name": "Blusa Peplum Manga Franzida",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-peplum-manga-franzida.jpg",
    "link": "https://pay.hotmart.com/G104751727V",
    "active": true
  },
  {
    "name": "Blusa Peplum",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-peplum.jpg",
    "link": "https://pay.hotmart.com/P104751588F",
    "active": true
  },
  {
    "name": "Colete Assimétrico",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/colete-assimetrico.jpg",
    "link": "https://pay.hotmart.com/L104751629H",
    "active": true
  },
  {
    "name": "Colete Amarração",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/colete-amarracao.jpg",
    "link": "https://pay.hotmart.com/P104751543P",
    "active": true
  },
  {
    "name": "Colete Tomara Que Caia",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/colete-tqc.jpg",
    "link": "https://pay.hotmart.com/M104751504Y",
    "active": true
  },
  {
    "name": "Camisa Oversized",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/camisa-oversized.jpg",
    "link": "https://pay.hotmart.com/I104751484W",
    "active": true
  },
  {
    "name": "Regata Alça Grossa",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/regata-alca-grossa.jpg",
    "link": "https://pay.hotmart.com/M104751454A",
    "active": true
  },
  {
    "name": "Blusa Gola Alta Manga Franzida",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-gola-alta-manga-franzida.jpg",
    "link": "https://pay.hotmart.com/E104751388V",
    "active": true
  },
  {
    "name": "Blusa Ombro a Ombro",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-ombro-a-ombro.jpg",
    "link": "https://pay.hotmart.com/R104751021J",
    "active": true
  },
  {
    "name": "Blusa Decote V",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-decote-v.jpg",
    "link": "https://pay.hotmart.com/K104750908O",
    "active": true
  },
  {
    "name": "Top Nó",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/top-no.jpg",
    "link": "https://pay.hotmart.com/C104751355U",
    "active": true
  },
  {
    "name": "Blusa Cava Americana",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-cava-americana.jpg",
    "link": "https://pay.hotmart.com/B104750886S",
    "active": true
  },
  {
    "name": "Colete Alfaiataria",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/colete-alfaiataria.jpg",
    "link": "https://pay.hotmart.com/W104749693D",
    "active": true
  },
  {
    "name": "Blusa Boho",
    "cat": "blusas",
    "price": "29,90",
    "img": "produtos/blusa-boho.jpg",
    "link": "https://pay.hotmart.com/W104750862S",
    "active": true
  },
  {
    "name": "Vestido Nó",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-no.jpg",
    "link": "https://pay.hotmart.com/C105042323P",
    "active": true
  },
  {
    "name": "Vestido Longo Decote Reto",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-longo-decote-reto.jpg",
    "link": "https://pay.hotmart.com/F105044008A",
    "active": true
  },
  {
    "name": "Vestido Cava Americana",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-cava-americana.jpg",
    "link": "https://pay.hotmart.com/T105093177N",
    "active": true
  },
  {
    "name": "Vestido Midi Amarração",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-midi-amarracao.jpg",
    "link": "https://pay.hotmart.com/M105041901U",
    "active": true
  },
  {
    "name": "Vestido Drapeado",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-drapeado.jpg",
    "link": "https://pay.hotmart.com/C105093527O",
    "active": true
  },
  {
    "name": "Vestido Boho",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-boho.jpg",
    "link": "",
    "active": false
  },
  {
    "name": "Vestido Longo Cavado",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-longo-cavado.jpg",
    "link": "https://pay.hotmart.com/L105457575B",
    "active": true
  },
  {
    "name": "Vestido Pala Franzido",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-pala-franzido.jpg",
    "link": "https://pay.hotmart.com/N105457890C",
    "active": true
  },
  {
    "name": "Vestido Tubinho Tweed",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-tubinho-tweed.jpg",
    "link": "https://pay.hotmart.com/M105458112E",
    "active": true
  },
  {
    "name": "Vestido Franzido Lateral",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-franzido-lateral.jpg",
    "link": "https://pay.hotmart.com/H105458158R",
    "active": true
  },
  {
    "name": "Vestido Trespasse Pregas",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-trespasse-pregas.jpg",
    "link": "https://pay.hotmart.com/W105458224E",
    "active": true
  },
  {
    "name": "Vestido Midi Nesgas",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-midi-nesgas.jpg",
    "link": "https://pay.hotmart.com/V104340800J",
    "active": true
  },
  {
    "name": "Vestido Midi Abotoamento",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-midi-abotoamento.jpg",
    "link": "https://pay.hotmart.com/V105458471P",
    "active": true
  },
  {
    "name": "Vestido Franzido Assimétrico",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-franzido-assimetrico.jpg",
    "link": "",
    "active": false
  },
  {
    "name": "Vestido Manga Flare com Marias na Barra",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-manga-flare.jpg",
    "link": "https://pay.hotmart.com/C105458751J",
    "active": true
  },
  {
    "name": "Vestido Pregas na Cintura",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-pregas-cintura.jpg",
    "link": "https://pay.hotmart.com/P105458681N",
    "active": true
  },
  {
    "name": "Vestido Tomara que Caia",
    "cat": "vestidos",
    "price": "39,90",
    "img": "produtos/vestido-tomara-que-caia.jpg",
    "link": "https://pay.hotmart.com/G104747802M",
    "active": true
  },
  {
    "name": "Saia Nó",
    "cat": "saias",
    "price": "29,90",
    "img": "produtos/saia-no.jpg",
    "link": "https://pay.hotmart.com/U104758302F",
    "active": true
  },
  {
    "name": "Saia Lápis",
    "cat": "saias",
    "price": "29,90",
    "img": "produtos/saia-lapis.jpg",
    "link": "https://pay.hotmart.com/P104758204C",
    "active": true
  },
  {
    "name": "Saia Assimétrica Camadas",
    "cat": "saias",
    "price": "29,90",
    "img": "produtos/saia-assimetrica-camadas.jpg",
    "link": "https://pay.hotmart.com/B104761353O",
    "active": true
  },
  {
    "name": "Saia Franzida",
    "cat": "saias",
    "price": "29,90",
    "img": "produtos/saia-franzida.jpg",
    "link": "https://pay.hotmart.com/D104761419M",
    "active": true
  },
  {
    "name": "Saia Camadas",
    "cat": "saias",
    "price": "29,90",
    "img": "produtos/saia-camadas.jpg",
    "link": "https://pay.hotmart.com/V104758094C",
    "active": true
  },
  {
    "name": "Mini Saia",
    "cat": "saias",
    "price": "29,90",
    "img": "produtos/mini-saia.jpg",
    "link": "",
    "active": false
  },
  {
    "name": "Saia Midi Assimétrica",
    "cat": "saias",
    "price": "29,90",
    "img": "produtos/saia-midi-assimetrica.jpg",
    "link": "https://pay.hotmart.com/A104757888Y",
    "active": true
  },
  {
    "name": "Saia Reta Alfaiataria",
    "cat": "saias",
    "price": "29,90",
    "img": "produtos/saia-reta-alfaiataria.jpg",
    "link": "https://pay.hotmart.com/X104761314K",
    "active": true
  },
  {
    "name": "Calça Balão",
    "cat": "calcas",
    "price": "34,90",
    "img": "produtos/calca-balao.jpg",
    "link": "https://pay.hotmart.com/E104761440O",
    "active": true
  },
  {
    "name": "Costura Completa",
    "cat": "calcas",
    "price": "34,90",
    "img": "produtos/costura-completa.jpg",
    "link": "",
    "active": false
  },
  {
    "name": "Macacão Bolso Frontal",
    "cat": "calcas",
    "price": "39,90",
    "img": "produtos/macacao-bolso-frontal.jpg",
    "link": "",
    "active": false
  },
  {
    "name": "Macacão Gola e Trespasse",
    "cat": "calcas",
    "price": "39,90",
    "img": "produtos/macacao-gola-trespasse.jpg",
    "link": "",
    "active": false
  },
  {
    "name": "Bermuda Alfaiataria",
    "cat": "calcas",
    "price": "29,90",
    "img": "produtos/bermuda-alfaiataria.jpg",
    "link": "https://pay.hotmart.com/N104749193F",
    "active": true
  },
  {
    "name": "Calça Moletom",
    "cat": "calcas",
    "price": "34,90",
    "img": "produtos/calca-moletom.jpg",
    "link": "",
    "active": false
  },
  {
    "name": "Calça Amarração",
    "cat": "calcas",
    "price": "34,90",
    "img": "produtos/calca-amarracao.jpg",
    "link": "https://pay.hotmart.com/H104761461Y",
    "active": true
  },
  {
    "name": "Calça Abertura Diagonal",
    "cat": "calcas",
    "price": "34,90",
    "img": "produtos/calca-abertura-diagonal.jpg",
    "link": "https://pay.hotmart.com/K104761541G",
    "active": true
  },
  {
    "name": "Calça Elástico",
    "cat": "calcas",
    "price": "34,90",
    "img": "produtos/calca-elastico.jpg",
    "link": "",
    "active": false
  },
  {
    "name": "Macacão Assimétrico",
    "cat": "calcas",
    "price": "39,90",
    "img": "produtos/macacao-assimetrico.jpg",
    "link": "",
    "active": false
  },
  {
    "name": "Short Alfaiataria",
    "cat": "calcas",
    "price": "29,90",
    "img": "produtos/short-alfaiataria.jpg",
    "link": "",
    "active": false
  },
  {
    "name": "Calça Alfaiataria",
    "cat": "calcas",
    "price": "34,90",
    "img": "produtos/calca-alfaiataria.jpg",
    "link": "",
    "active": false
  },
  {
    "name": "Calça Pantalona",
    "cat": "calcas",
    "price": "34,90",
    "img": "produtos/calca-pantalona.jpg",
    "link": "",
    "active": false
  },
  {
    "name": "Kimono",
    "cat": "blazers",
    "price": "39,90",
    "img": "produtos/kimono.jpg",
    "link": "",
    "active": false
  },
  {
    "name": "Casaqueto Tweed",
    "cat": "blazers",
    "price": "39,90",
    "img": "produtos/casaqueto-tweed.jpg",
    "link": "",
    "active": false
  },
  {
    "name": "Jaqueta de Sarja",
    "cat": "blazers",
    "price": "39,90",
    "img": "produtos/jaqueta-sarja.jpg",
    "link": "https://pay.hotmart.com/H104750779G",
    "active": true
  },
  {
    "name": "Blazer Feminino",
    "cat": "blazers",
    "price": "39,90",
    "img": "produtos/blazer-feminino.jpg",
    "link": "",
    "active": false
  }
];
