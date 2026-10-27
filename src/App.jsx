import { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

export default function App() {
  const [showProductList, setShowProductList] = useState(false);
  if (showProductList) return <ProductList onHomeClick={() => setShowProductList(false)} />;
  return (
    <main className="landing-page">
      <div className="background-image" aria-hidden="true" />
      <div className="landing-layout">
        <section className="landing-content">
          <p className="eyebrow">A little nature. A happier home.</p>
          <h1>Paradise Nursery</h1>
          <div className="divider" />
          <p className="tagline">Where Green Meets Serenity</p>
          <button className="get-started-button" onClick={() => setShowProductList(true)}>Get Started</button>
        </section>
        <AboutUs />
      </div>
    </main>
  );
}
