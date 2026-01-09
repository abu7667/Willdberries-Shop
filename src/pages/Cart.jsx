import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            removeItem(id);
            return;
        }
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price_rub * item.quantity), 0);
    };

    return (
        <>
            <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow">
                <div className="container mx-auto px-4 py-6">
                    <Link to="/" className="text-2xl font-bold text-white hover:text-yellow-300">← Назад в магазин</Link>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Моя Корзина</h1>

                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center min-h-96">
                        <svg className="w-20 h-20 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <p className="text-xl text-gray-500 mb-4">Корзина пуста</p>
                        <Link to="/" className="btn btn-primary">Продолжить покупки</Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="card bg-base-100 shadow hover:shadow-lg transition p-5 flex flex-row gap-4">
                                        <figure className="w-32 h-32 shrink-0">
                                            <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded" />
                                        </figure>
                                        <div className="flex-1">
                                            <p className="text-sm text-base-content/60 font-semibold"><strong>{item.brand}</strong></p>
                                            <p className="text-base font-semibold line-clamp-2">{item.name}</p>
                                            <p className="text-xl font-bold text-secondary mt-2">{item.price_rub.toLocaleString()} ₽</p>
                                        </div>
                                        <div className="flex flex-col items-end justify-between gap-3">
                                            <button onClick={() => removeItem(item.id)} className="btn btn-sm btn-ghost text-red-500 hover:bg-red-100">✕</button>
                                            <div className="flex items-center gap-2 bg-base-200 rounded-lg p-2">
                                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="btn btn-xs btn-outline">−</button>
                                                <span className="w-8 text-center font-bold text-lg">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="btn btn-xs btn-outline">+</button>
                                            </div>
                                            <p className="font-bold text-lg">{(item.price_rub * item.quantity).toLocaleString()} ₽</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="card bg-base-200 shadow sticky top-20">
                                <div className="card-body gap-4">
                                    <h2 className="card-title text-2xl">Итого</h2>
                                    <div className="divider my-0"></div>
                                    <div className="flex justify-between text-base">
                                        <span>Товаров:</span>
                                        <span className="font-bold">{cartItems.length}</span>
                                    </div>
                                    <div className="flex justify-between text-2xl pt-4 border-t">
                                        <span>Сумма:</span>
                                        <span className="font-bold text-secondary">{getTotalPrice().toLocaleString()} ₽</span>
                                    </div>
                                    <button className="btn btn-primary w-full mt-4">Оформить заказ</button>
                                    <Link to="/" className="btn btn-outline w-full">Продолжить покупки</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer className="mt-16" />
        </>
    );
};

export default Cart;
