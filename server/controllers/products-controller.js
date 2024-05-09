let products = [
  {
    id: 1,
    name: "Mic. SKP UHF-2071",
    brand: "Skp",
    article: "",
    description: "",
    images: [],
    type: [],
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
