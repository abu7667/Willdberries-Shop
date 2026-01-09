import React, { useState } from "react";
import { mahsulotlar } from "./section_produkts";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Section = ({ searchQuery = "" }) => {
  const [addedItems, setAddedItems] = useState({});

  const filteredProducts = mahsulotlar.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (item) => {
    const existingCart = localStorage.getItem('cart');
    const cart = existingCart ? JSON.parse(existingCart) : [];

    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    setAddedItems(prev => ({
      ...prev,
      [item.id]: true
    }));

    setTimeout(() => {
      setAddedItems(prev => ({
        ...prev,
        [item.id]: false
      }));
    }, 1500);
  };

  return (
    <div className="bg-base-200 py-8 px-4">
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-96">
          <svg className="w-20 h-20 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <p className="text-2xl text-gray-500 font-semibold">Продукты не найдены</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {filteredProducts.map((item) => (
            <div key={item.id} className="card bg-base-100 shadow hover:shadow-2xl transition transform hover:scale-105">
              <Link to={`/product/${item.id}`} className="block">
                <figure className="relative h-96">
                  <img src={item.img} alt={item.name} className="h-96 w-full object-cover" />
                  <span className="badge badge-secondary absolute top-3 left-3 text-xs font-bold">ХИТ</span>
                </figure>
                <div className="card-body p-4 gap-2">
                  <div className="text-lg font-bold text-secondary">{item.price_rub.toLocaleString()} ₽</div>
                  <p className="text-sm text-base-content line-clamp-2"><strong>{item.brand}</strong>/ {item.name}</p>
                  <div className="flex items-center gap-1 text-sm">
                    <span className="text-accent font-semibold">⭐ {item.rating}</span>
                    <span className="text-base-content/50">({item.reviews_count.toLocaleString()})</span>
                  </div>
                </div>
              </Link>
              <div className="p-4">
                <button
                  onClick={(e) => { e.preventDefault(); handleAddToCart(item); }}
                  className={`btn w-full border-none text-base font-bold rounded-lg transition ${addedItems[item.id] ? 'bg-green-500 text-white' : 'bg-secondary text-base-100 hover:bg-secondary/80'}`}
                >
                  {addedItems[item.id] ? <>✓ В корзину</> : <><FaCartShopping /> Купить</>}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
