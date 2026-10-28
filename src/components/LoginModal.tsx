import React, { useState, useEffect } from 'react';
import { X, Lock, Eye, EyeOff, Shield, AlertCircle } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

// Credenciales de administrador (almacenadas de forma ofuscada)
const ADMIN_CREDENTIALS = {
  username: 'siscat_admin',
  // Password: Siscat2024* (encoded as base64)
  passwordHash: 'U2lzY2F0MjAyNCo=',
};

const verifyCredentials = (username: string, password: string): boolean => {
  const expectedPassword = atob(ADMIN_CREDENTIALS.passwordHash);
  return username === ADMIN_CREDENTIALS.username && password === expectedPassword;
};

// Session timeout in milliseconds (30 minutes)
const SESSION_TIMEOUT = 30 * 60 * 1000;

export const checkAdminSession = (): boolean => {
  try {
    const sessionData = sessionStorage.getItem('siscat_admin_session');
    if (!sessionData) return false;
    const { timestamp } = JSON.parse(sessionData);
    return Date.now() - timestamp < SESSION_TIMEOUT;
  } catch {
    return false;
  }
};

export const createAdminSession = () => {
  sessionStorage.setItem('siscat_admin_session', JSON.stringify({ timestamp: Date.now() }));
};

export const clearAdminSession = () => {
  sessionStorage.removeItem('siscat_admin_session');
};

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockTimer, setBlockTimer] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setUsername('');
      setPassword('');
      setError('');
      setShowPassword(false);
      setIsShaking(false);
    }
  }, [isOpen]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isBlocked && blockTimer > 0) {
      interval = setInterval(() => {
        setBlockTimer(prev => {
          if (prev <= 1) {
            setIsBlocked(false);
            setAttempts(0);
            setError('');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isBlocked, blockTimer]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isBlocked) return;

    setIsLoading(true);
    setError('');

    // Simulating async verification (slight delay for security feel)
    await new Promise(resolve => setTimeout(resolve, 800));

    const isValid = verifyCredentials(username.trim(), password);

    if (isValid) {
      createAdminSession();
      setIsLoading(false);
      onLoginSuccess();
      onClose();
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setIsLoading(false);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 600);

      if (newAttempts >= 3) {
        setIsBlocked(true);
        setBlockTimer(60);
        setError('Demasiados intentos fallidos. Por seguridad, debes esperar 60 segundos.');
      } else {
        setError(`Credenciales incorrectas. ${3 - newAttempts} intento(s) restante(s).`);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className={`relative bg-white rounded-3xl w-full max-w-md shadow-2xl border border-slate-100 overflow-hidden transition-all duration-300 ${isShaking ? 'animate-[shake_0.5s_ease-in-out]' : ''}`}
        style={isShaking ? { animation: 'shake 0.5s ease-in-out' } : {}}
      >
        {/* Decorative gradient top bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700" />

        {/* Header */}
        <div className="relative px-8 pt-8 pb-6 text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Shield icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg shadow-blue-500/30 mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-xl font-bold text-slate-900 mb-1">
            Acceso de Administrador
          </h2>
          <p className="text-sm text-slate-500">
            Ingresa tus credenciales para acceder a la configuración del sistema
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-4">

          {/* Error message */}
          {error && (
            <div className="flex items-start gap-2.5 p-3.5 bg-red-50 border border-red-200 rounded-2xl animate-in fade-in slide-in-from-top-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <p className="text-xs font-medium text-red-700">{error}</p>
              {isBlocked && blockTimer > 0 && (
                <span className="ml-auto text-xs font-bold text-red-600 tabular-nums shrink-0">
                  {blockTimer}s
                </span>
              )}
            </div>
          )}

          {/* Username field */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700">
              Usuario
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="admin-username"
                type="text"
                required
                autoComplete="username"
                autoFocus
                disabled={isBlocked || isLoading}
                value={username}
                onChange={e => { setUsername(e.target.value); setError(''); }}
                placeholder="Nombre de usuario"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Password field */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="admin-password"
                type={showPassword ? 'text' : 'password'}
                required
                autoComplete="current-password"
                disabled={isBlocked || isLoading}
                value={password}
                onChange={e => { setPassword(e.target.value); setError(''); }}
                placeholder="Contraseña de administrador"
                className="w-full pl-10 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="button"
                tabIndex={-1}
                onClick={() => setShowPassword(!showPassword)}
                disabled={isBlocked || isLoading}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 transition disabled:opacity-50"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            id="admin-login-btn"
            disabled={isBlocked || isLoading || !username || !password}
            className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-bold rounded-2xl shadow-md shadow-blue-500/25 transition active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span>Verificando...</span>
              </>
            ) : isBlocked ? (
              <span>Bloqueado por {blockTimer}s</span>
            ) : (
              <>
                <Shield className="w-4 h-4" />
                <span>Ingresar al Panel de Configuración</span>
              </>
            )}
          </button>

          {/* Security note */}
          <p className="text-center text-[11px] text-slate-400 pt-1">
            🔒 Acceso restringido · Solo personal autorizado de SISCAT
          </p>
        </form>
      </div>

      {/* Shake animation keyframes */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 50%, 90% { transform: translateX(-6px); }
          30%, 70% { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );
};