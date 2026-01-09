import React from 'react'
import WK from '../assets/wk.png'
import OK from '../assets/ok.png'
import TG from '../assets/tg.png'
import QRCode from '../assets/qr-apps.svg'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-100 border-t font-medium border-gray-200">
      <div className="max-w-[85%] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-30 text-sm text-gray-700">

          <div>
            <h3 className="font-bold text-gray-900 mb-3">Покупателям</h3>
            <ul className="space-y-2">
              <li className="hover:text-purple-600 text-gray-500 cursor-pointer">Частые вопросы</li>
              <li className="hover:text-purple-600 text-gray-500 cursor-pointer">
                <div className="dropdown dropdown-bottom">
                  <div tabIndex={0} className="">Юридическая информация▼</div>
                  <ul tabIndex="-1" className="space-y-2 dropdown-content z-1 w-52">
                    <li className="mt-2 hover:text-purple-600 text-gray-500 cursor-pointer">Правила продажи</li>
                    <li className="hover:text-purple-600 text-gray-500 cursor-pointer">Правила пользования торговой площадкой</li>
                    <li className="hover:text-purple-600 text-gray-500 cursor-pointer">Политика конфиденциальности</li>
                    <li className="hover:text-purple-600 text-gray-500 cursor-pointer">Управление cookies</li>

                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-3">
              Продавцам и партнёрам
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-purple-600 text-gray-500 cursor-pointer">Продавать товары</li>
              <li className="hover:text-purple-600 text-gray-500 cursor-pointer">Открыть пункт выдачи</li>
              <li className="hover:text-purple-600 text-gray-500 cursor-pointer">Предложить помещение</li>
              <li className="hover:text-purple-600 text-gray-500 cursor-pointer">Развозить грузы</li>
              <li className="hover:text-purple-600 text-gray-500 cursor-pointer">Доставлять заказы</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-3">Наши проекты</h3>
            <ul className="space-y-2">
              <li className="hover:text-purple-600 text-gray-500 cursor-pointer">WB Guru</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-3">Компания</h3>
            <ul className="space-y-2">
              <li className="hover:text-purple-600 text-gray-500 cursor-pointer">О нас</li>
              <li className="hover:text-purple-600 text-gray-500 cursor-pointer">Пресс-служба</li>
              <li className="hover:text-purple-600 text-gray-500 cursor-pointer">Контакты</li>
              <li className="hover:text-purple-600 text-gray-500 cursor-pointer">Вакансии</li>
              <li className="hover:text-purple-600 text-gray-500 cursor-pointer">
                Сообщить о мошенничестве
              </li>
              <li className="hover:text-purple-600 text-gray-500 cursor-pointer">Социальные сети</li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4">
            <div className="w-35 h-35 bg-gray-100 flex items-center justify-center rounded-lg text-xs text-gray-500">
              <img src={QRCode} alt="QR code" />
            </div>

            <div className="flex gap-3 mt-15 pl-2">
              <button className="w-9 h-9 rounded-lg bg-white flex items-center justify-center hover:bg-purple-50">
                <a className='' href="https://vk.com/wildberries_shop">
                  <img src={WK} alt="WK" />
                </a>
              </button>
              <button className="w-9 h-9 rounded-lg bg-white flex items-center justify-center hover:bg-purple-50">
                <a className='' href="https://ok.ru/wildberries">
                  <img className='p-1.5' src={OK} alt="OK" />
                </a>
              </button>
              <button className="w-9 h-9 rounded-lg bg-white flex items-center justify-center hover:bg-purple-50">
                <a className='' href="https://www.wildberries.uz/services/sotsialnye-seti">
                  <img className='p-1' src={TG} alt="tg" />
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-gray-500">
          © Wildberries 2004–2025. Все права защищены.
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer