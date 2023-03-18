# next-stripe
Built with [next](https://nextjs.org/) and [@stripe/stripe.js](https://stripe.com/docs/js) to mock product creation and checkout.

Based on [Stripe Next Quick Start](https://stripe.com/docs/checkout/quickstart).

## Init

1. `npm install`
2. `npm run dev`

## Use

1. navigate to `http://localhost:3000/admin`
2. click "Create Product"
3. copy `price.id`
4. paste into `src/pages/api/checkout_sessions.js` on line 11 in place of `{PRICE_ID}`
5. navigate back to `http://localhost:3000`
6. click "Checkout"

## Test Checkout

Test the checkout page with test card numbers
- Payment succeeds: `4242 4242 4242 4242`
- Payment requires authentication: `4000 0025 0000 3155`
- Payment is declined: `4000 0000 0000 9995`
