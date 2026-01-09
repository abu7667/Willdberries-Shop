import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { mahsulotlar } from './section_produkts';
import { FaCartShopping, FaArrowLeft, FaCheck } from 'react-icons/fa6';
import Footer from '../components/Footer';

const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = mahsulotlar.find(p => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    if (!product) {
        return (
            <div className="min-h-screen bg-base-200">
                <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow">
                    <div className="container mx-auto px-4 py-6">
                        <button onClick={() => navigate(-1)} className="text-2xl font-bold text-white hover:text-yellow-300 flex items-center gap-2">
                            <FaArrowLeft /> Назад
                        </button>
                    </div>
                </header>
                <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
                    <p className="text-2xl text-gray-500 font-semibold">Товар не найден</p>
                    <Link to="/" className="btn btn-primary mt-4">Вернуться в магазин</Link>
                </div>
            </div>
        );
    }

    const handleAddToCart = () => {
        const existingCart = localStorage.getItem('cart');
        const cart = existingCart ? JSON.parse(existingCart) : [];
        const existingItem = cart.find(cartItem => cartItem.id === product.id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ ...product, quantity });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    const relatedProducts = mahsulotlar.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

    return (
        <>
            <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <button onClick={() => navigate(-1)} className="text-2xl font-bold text-white hover:text-yellow-300 flex items-center gap-2 mb-2">
                        <FaArrowLeft /> Назад
                    </button>
                </div>
            </header>

            <div className="bg-base-200 py-8 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-base-100 rounded-2xl shadow-lg p-6 md:p-10">
                        <div className="flex items-center justify-center">
                            <div className="w-full max-w-md">
                                <div className="relative bg-white rounded-xl overflow-hidden">
                                    <img src={product.img} alt={product.name} className="w-full h-[520px] md:h-[520px] object-contain" />
                                    <span className="badge badge-secondary absolute top-4 left-4 text-lg font-bold">ХИТ</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div>
                                <p className="text-sm text-base-content/60 font-semibold mb-1">{product.category}</p>
                                <p className="text-lg text-base-content/70 mb-2"><strong>{product.brand}</strong></p>
                                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                            </div>

                            <div className="flex items-center gap-4 w-full">
                                <div>
                                    <div className="text-sm text-base-content/70">Цена за единицу</div>
                                    <div className="text-2xl font-semibold text-secondary">{product.price_rub.toLocaleString()} ₽</div>
                                </div>
                                <div className="ml-auto text-right">
                                    <div className="text-sm text-base-content/70">Итого</div>
                                    <div className="text-3xl font-bold text-secondary">{(product.price_rub * quantity).toLocaleString()} ₽</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-base-200 p-4 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">⭐</span>
                                    <span className="text-xl font-bold">{product.rating}</span>
                                </div>
                                <div className="border-l-2 border-base-300 pl-4">
                                    <p className="text-sm text-base-content/70">{product.reviews_count.toLocaleString()} отзывов</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-lg font-semibold mb-2 block">Количество:</label>
                                    <div className="flex items-center gap-3 bg-base-200 w-fit px-4 py-2 rounded-lg">
                                        <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))} className="btn btn-sm btn-ghost">−</button>
                                        <span className="text-xl font-bold w-8 text-center">{quantity}</span>
                                        <button onClick={() => setQuantity(prev => prev + 1)} className="btn btn-sm btn-ghost">+</button>
                                    </div>
                                </div>

                                <button
                                    onClick={handleAddToCart}
                                    className={`btn w-full text-lg font-bold py-3 rounded-lg border-none transition ${added ? 'bg-green-500 text-white' : 'bg-secondary text-base-100 hover:bg-secondary/80'
                                        }`}
                                >
                                    {added ? (
                                        <>
                                            <FaCheck className="text-xl" /> Добавлено в корзину
                                        </>
                                    ) : (
                                        <>
                                            <FaCartShopping className="text-xl" /> Добавить в корзину — {(product.price_rub * quantity).toLocaleString()} ₽
                                        </>
                                    )}
                                </button>

                                <Link to="/cart" className="btn btn-outline w-full text-lg font-bold py-3 rounded-lg">
                                    Перейти в корзину
                                </Link>
                            </div>

                            <div className="border-t-2 pt-4">
                                <p className="text-sm text-base-content/60 leading-relaxed">
                                    ✓ Бесплатная доставка при заказе от 499₽<br />
                                    ✓ Возврат в течение 30 дней<br />
                                    ✓ Оригинальный товар с гарантией
                                </p>
                            </div>
                        </div>
                    </div>

                    {relatedProducts.length > 0 && (
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold mb-8">Похожие товары</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {relatedProducts.map(item => (
                                    <Link key={item.id} to={`/product/${item.id}`} className="card bg-base-100 shadow hover:shadow-2xl transition cursor-pointer transform hover:scale-105">
                                        <figure className="relative h-64">
                                            <img src={item.img} alt={item.name} className="h-64 w-full object-cover" />
                                            <span className="badge badge-secondary absolute top-2 left-2 text-xs font-bold">ХИТ</span>
                                        </figure>
                                        <div className="card-body p-3 gap-2">
                                            <div className="text-lg font-bold text-secondary">{item.price_rub.toLocaleString()} ₽</div>
                                            <p className="text-sm text-base-content line-clamp-2"><strong>{item.brand}</strong> / {item.name}</p>
                                            <div className="flex items-center gap-1 text-sm">
                                                <span className="text-accent font-semibold">⭐ {item.rating}</span>
                                                <span className="text-base-content/50">({item.reviews_count.toLocaleString()})</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Product;
