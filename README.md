# Paradise Nursery — Plant Shopping Application

A responsive online houseplant shop built with React, Redux Toolkit, and Vite for the IBM Developing Front-End Apps with React final project.

## Features

- A background-image landing page with company information and a Get Started button.
- Five plant categories with photos, names, descriptions, prices, and Add to Cart controls.
- Redux reducers for adding products, removing products, and updating quantities.
- A cart icon showing the total quantity across all selected plants.
- Disabled Added to Cart buttons that become available again when a product is deleted.
- A shopping cart with thumbnails, unit prices, quantity controls, item subtotals, total items, and total cost.
- Continue Shopping navigation and a Checkout button displaying a Coming Soon message.
- Responsive layouts and labeled keyboard-accessible controls.

## Run locally

```bash
npm install
npm run dev -- --host 0.0.0.0
```

## Validate and build

```bash
npm run lint
npm run build
```

## Main assignment files

`src/AboutUs.jsx`, `src/App.css`, `src/App.jsx`, `src/CartSlice.jsx`, `src/ProductList.jsx`, and `src/CartItem.jsx`.

## Credits and license

Adapted from the [IBM Skills Network e-plantShopping starter](https://github.com/ibm-developer-skills-network/e-plantShopping). Plant data and remote image references originate from the starter. Original Apache 2.0 license retained in LICENSE.
