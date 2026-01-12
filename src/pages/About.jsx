import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(target * progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return count;
};

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('uz');
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const flags = {
    uz: 'https://flagcdn.com/w20/uz.png',
    ru: 'https://flagcdn.com/w20/ru.png',
    en: 'https://flagcdn.com/w20/gb.png',
  };

  const images = [
    {
      img: 'https://static-basket-01.wbbasket.ru/vol2/site/i/v3/header/logo-new-year-2026.webp',
    },
  ];

  useEffect(() => {
    // User ma'lumotlarini olish
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }

    // Loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700">
        <span className="loading loading-bars loading-xl text-yellow-300"></span>
      </div>
    );
  }

  return (
    <>
      <header className="bg-linear-to-r from-purple-600 to-pink-600 text-white sticky top-0 z-50 shadow-lg">
        {/* Top Info Bar */}
        <div className="bg-purple-700/50 border-b border-white/10">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Tashkent</span>
            </div>

            {/* Top Navigation Menu */}
            <nav className="hidden md:flex items-center gap-4 flex-1 justify-center text-xs font-semibold">
              <Link to='/'>Бренды</Link>
              <Link to='/about'>О нас</Link>
              <Link to='/buildings'>Хозтовары</Link>
              <Link to='/workwb'>Работа в WB</Link>
            </nav>

            {/* Right: Language/Currency */}
            <div className="flex items-center gap-3">
              <div className="dropdown dropdown-end">
                <button className="btn btn-xs btn-ghost text-white gap-1">
                  КЕШБЭК
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <select className="bg-transparent border-none text-white cursor-pointer text-xs font-bold outline-none ">
                <option className='text-black' value="RUB">RUB</option>
                <option className='text-black' value="USD">USD</option>
                <option className='text-black' value="EUR">EUR</option>
              </select>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <button className="btn btn-ghost btn-circle btn-sm md:hidden">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <Link to="/" className="shrink-0 hidden sm:block">
                <img className="h-16 object-contain" src={images[0].img} alt="WB Logo" />
              </Link>
            </div>
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Найти на Wildberries"
                  className="w-full px-4 py-2.5 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-sm"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-3 shrink-0">
              <a href="#" className="hidden sm:flex flex-col items-center gap-0.5 text-white hover:text-yellow-300 transition-colors group">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="text-xs">Адреса</span>
              </a>
              {currentUser ? (
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="cursor-pointer flex flex-col items-center gap-0.5 text-white hover:text-yellow-300 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-xs hidden sm:block">{currentUser.name.split(' ')[0]}</span>
                  </label>
                  <ul tabIndex={0} className="dropdown-content z-1 menu p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                    <li className="menu-title">
                      <span className="text-purple-600 font-bold">{currentUser.name}</span>
                    </li>
                    <li><a onClick={handleLogout} className="text-red-600">Выйти</a></li>
                  </ul>
                </div>
              ) : (
                <Link to="/login" className="flex flex-col items-center gap-0.5 text-white hover:text-yellow-300 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-xs hidden sm:block">Войти</span>
                </Link>
              )}

              <Link to="/cart" className="flex flex-col items-center gap-0.5 text-white hover:text-yellow-300 transition-colors relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-xs hidden sm:block">Корзина</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* === About section (qisqartirilgan shaklda) === */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          {/* Hero mini */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">О нас</h1>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Wildberries — крупнейшая онлайн-платформа России и стран СНГ
            </p>
          </div>

          {/* Statistics - 4 ta katta raqam */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-base-200 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-2"><Counter target={100} />+</div>
              <p className="text-base-content/70">Миллионов товаров</p>
            </div>
            <div className="bg-base-200 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-secondary mb-2"><Counter target={50} />+</div>
              <p className="text-base-content/70">Тысяч продавцов</p>
            </div>
            <div className="bg-base-200 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-accent mb-2"><Counter target={10000} duration={2500} /> </div>
              <p className="text-base-content/70">Пунктов выдачи</p>
            </div>
            <div className="bg-base-200 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-2"><Counter target={2004} duration={3000} /></div>
              <p className="text-base-content/70">Год основания</p>
            </div>
          </div>

          {/* Qisqa matn + CTA */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-base-content/80 mb-10 leading-relaxed">
              Wildberries 2004-yildan buyon faoliyat yuritib kelmoqda va bugungi kunda millionlab
              tovarlar, minglab sotuvchilar va qulay xizmatlar bilan mamlakatimizda yetakchi
              onlayn-do'konlardan biriga aylandi.
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/buildings" className="btn btn-primary btn-lg">
                Начать покупки
              </Link>
              <Link to="/workwb" className="btn btn-outline btn-lg">
                Стать продавцом
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Swiper / Banner joyi */}
      <div className="swiper">
        {/* Mrabdulaziz — bu yerga swiper/slider qo'yishingiz mumkin */}
      </div>

      {/* Qolgan qismlar (katalog, mahsulotlar va h.k.) */}
      <section>{/* muhammadli — bu yerga asosiy kontent keladi */}</section>
      <Footer />
    </>
  );
};

export default Home;
