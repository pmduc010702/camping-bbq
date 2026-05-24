// Toast notification system.
// Cách dùng: const { showToast } = useToast(); showToast('Đã lưu', 'success');
import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const ToastContext = createContext(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'success', duration = 2800) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
}

function ToastContainer({ toasts, onRemove }) {
  return (
    <div className="fixed top-4 left-4 right-4 md:top-6 md:right-6 md:left-auto z-[60] flex flex-col gap-2 pointer-events-none">
      {toasts.map((t) => (
        <Toast key={t.id} toast={t} onRemove={() => onRemove(t.id)} />
      ))}
    </div>
  );
}

function Toast({ toast, onRemove }) {
  const { message, type } = toast;
  const config = {
    success: { Icon: CheckCircle2, color: 'text-green-400', bg: 'bg-green-600/10 border-green-500/30' },
    error:   { Icon: AlertCircle,  color: 'text-red-400',   bg: 'bg-red-600/10 border-red-500/30' },
    info:    { Icon: Info,         color: 'text-blue-400',  bg: 'bg-blue-600/10 border-blue-500/30' },
  };
  const { Icon, color, bg } = config[type] || config.success;

  return (
    <div
      className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md bg-stone-950/95 shadow-2xl shadow-black/50 md:ml-auto md:max-w-sm slide-in-top ${bg}`}
    >
      <Icon size={18} className={`shrink-0 ${color}`} />
      <div className="flex-1 text-sm font-medium text-stone-100">{message}</div>
      <button
        onClick={onRemove}
        className="opacity-60 hover:opacity-100 transition shrink-0"
        aria-label="Đóng"
      >
        <X size={14} />
      </button>
    </div>
  );
}
