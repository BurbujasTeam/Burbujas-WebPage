let products = [
  {
    id: 1,
    name: "Mic. SKP UHF-2071",
    brand: "Skp",
    article: "Mic",
    description: "",
    images: [
      "https://res.cloudinary.com/deoj28v2n/image/upload/v1715293752/MIC%20SKP%20UHF%202071/main-img_kiw4ud.webp",
      "https://res.cloudinary.com/deoj28v2n/image/upload/v1715293657/MIC%20SKP%20UHF%202071/second-img_gwhmfj.jpg",
    ],
    stock: 5,
    price: "17500",
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
