// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const product = await stripe.products.create({ name: "T-shirt" });
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: 2000,
      currency: "usd",
    });
    res.status(200).json({ product, price });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
