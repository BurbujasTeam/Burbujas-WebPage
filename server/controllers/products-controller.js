let products = [
  {
    id: 1,
    name: "Mic. SKP UHF-2071",
    brand: "SKP",
    article: "Microfono",
    description: "",
    images: [
      "https://res.cloudinary.com/deoj28v2n/image/upload/v1715293752/MIC%20SKP%20UHF%202071/main-img_kiw4ud.webp",
      "https://res.cloudinary.com/deoj28v2n/image/upload/v1715293657/MIC%20SKP%20UHF%202071/second-img_gwhmfj.jpg",
    ],
    stock: 5,
    price: "17500",
  },
  {
    id: 2,
    name: 'Bafle PP1516AU 15" Amplificado',
    brand: "CICLOS",
    article: "Parlante",
    description: "",
    images: [
      "https://res.cloudinary.com/deoj28v2n/image/upload/v1716586222/PARLANTE%20CICLOS%20PP1516AU/D_NQ_NP_2X_785111-MLA52668014374_112022-F_tmrxn3.webp",
    ],
    stock: 2,
    price: "758900",
  },
  {
    id: 3,
    name: "Teclado CT-S100 61 Teclas",
    brand: "CASIO",
    article: "Teclado",
    description: "",
    images: [
      "https://res.cloudinary.com/deoj28v2n/image/upload/v1716587829/Teclado%20Casio%20CT-S100/cts1001-e8d2525c309ec1018616274002489720-1024-1024_zhytgo.jpg",
    ],
    stock: 2,
    price: "371990",
  },
  {
    id: 4,
    name: "Tocadiscos Winco W-408",
    brand: "WINCO",
    article: "Tocadisco",
    description: "",
    images: [
      "https://res.cloudinary.com/deoj28v2n/image/upload/v1716588901/Tocadiscos%20Winco%20W408/D_NQ_NP_621755-MLA69723257216_052023-O_rtamfn.webp",
    ],
    stock: 2,
    price: "199600",
  },
  {
    id: 5,
    name: "Guitarra Gracia M1 Lustre Ecologico",
    brand: "Gracia",
    article: "Guitarra",
    description: "",
    images: [
      "https://res.cloudinary.com/deoj28v2n/image/upload/v1716591762/Guitarra%20Gracia%20M1/D_NQ_NP_701802-MLA53101900826_122022-O_njkjdk.webp",
    ],
    stock: 2,
    price: "201300",
  },
];

async function getProducts(req, res) {
  try {
    if (products && products.length > 0) {
      res.status(200).json(products);
    }
  } catch (error) {
    res
      .status(500)
      .json("There's an error in the server, please try again later.");
  }
}

module.exports = { getProducts };
