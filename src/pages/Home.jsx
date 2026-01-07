import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-primary text-white">
        {/* Top Navigation Bar */}
        <nav className="border-b border-white/20">
          <div className="container mx-auto px-4">
            <ul className="flex items-center justify-center gap-6 text-sm py-3">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/wibes" className="hover:text-accent transition-colors">
                  Wibes
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="hover:text-accent transition-colors">
                  Отели
                </Link>
              </li>
              <li>
                <Link to="/automobiles" className="hover:text-accent transition-colors">
                  Автомобили
                </Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-accent transition-colors">
                  Туры с ВБ
                </Link>
              </li>
              <li>
                <Link to="/brands" className="hover:text-accent transition-colors">
                  Бренды
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-accent transition-colors">
                  Новостройки
                </Link>
              </li>
              <li>
                <Link to="/business" className="hover:text-accent transition-colors">
                  Для бизнеса
                </Link>
              </li>
              <li>
                <Link to="/workwb" className="hover:text-accent transition-colors">
                  Работа в WB
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Second Bar: Location and Language */}
        <div className="border-b border-white/20">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            {/* Location */}
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Tashkent</span>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <img src="https://flagcdn.com/w20/ru.png" alt="RU" className="w-5 h-3" />
              <span className="text-sm">RUB</span>
            </div>
          </div>
        </div>

        {/* Main Content: Logo, Search, Icons */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-6">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="text-4xl font-bold text-accent">
                WB
              </div>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Найти на Wildberries"
                  className="w-full px-4 py-3 pr-12 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Address */}
              <Link to="/address" className="flex flex-col items-center gap-1 hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs">Адреса</span>
              </Link>

              {/* Login */}
              <Link to="/login" className="flex flex-col items-center gap-1 hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs">Войти</span>
              </Link>

              {/* Cart */}
              <Link to="/cart" className="flex flex-col items-center gap-1 hover:text-accent transition-colors relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-xs">Корзина</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Home













// {/* <div className='swiper'>
//         {/* MRabdulaziz */}
//       </div>
//       <section>
//         {/* muhammadali */}
//       </section>
//       <footer>
//         {/* Saidolim */}
//       </footer> */}