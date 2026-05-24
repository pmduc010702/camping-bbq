import React, { useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, Copy, Phone } from 'lucide-react';
import { ZaloIcon, MessengerIcon } from '../icons';
import { HOTLINE, HOTLINE_DISPLAY } from '../data/settings';

export default function OrderSuccessModal({
  message,
  onClose,
  onZalo,
  onMessenger,
  onSMS,
  onCopy,
  copiedFor, // 'zalo' | 'messenger' | 'sms' | 'copy' | null
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-stone-950 border border-stone-800 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-800 hover:bg-stone-700 flex items-center justify-center z-10"
        >
          <X size={16} />
        </button>

        <div className="p-6 md:p-8">
          <div className="w-12 h-12 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-4">
            <CheckCircle2 size={26} className="text-green-400" strokeWidth={2} />
          </div>
          <h3 className="font-display font-black text-2xl md:text-3xl mb-2 leading-tight">
            Tin nhắn đã sẵn sàng!
          </h3>
          <p className="text-sm text-stone-400 mb-5">
            Chọn 1 cách bên dưới để gửi đơn cho tụi mình. Nội dung đã được format chỉn chu.
          </p>

          <div className="bg-black/40 border border-stone-800 rounded-lg p-4 mb-5 max-h-52 overflow-y-auto">
            <pre className="text-[11px] md:text-xs text-stone-300 whitespace-pre-wrap leading-relaxed" style={{ fontFamily: 'ui-monospace, monospace' }}>
              {message}
            </pre>
          </div>

          {/* Primary: 2 cột Zalo + Messenger */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
            <button
              onClick={onZalo}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-3.5 rounded-full font-bold text-sm transition"
            >
              <ZaloIcon size={16} />
              {copiedFor === 'zalo' ? '✓ Dán vào Zalo' : 'Mở Zalo'}
            </button>
            <button
              onClick={onMessenger}
              className="flex items-center justify-center gap-2 bg-gradient-to-br from-blue-500 to-purple-600 hover:opacity-90 px-4 py-3.5 rounded-full font-bold text-sm transition"
            >
              <MessengerIcon size={16} />
              {copiedFor === 'messenger' ? '✓ Dán vào Messenger' : 'Mở Messenger'}
            </button>
          </div>

          {/* Secondary: SMS + Copy */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            <button
              onClick={onSMS}
              className="flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 px-4 py-3 rounded-full font-bold text-sm transition"
            >
              <MessageSquare size={15} />
              SMS
            </button>
            <button
              onClick={onCopy}
              className="flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 px-4 py-3 rounded-full font-bold text-sm transition"
            >
              <Copy size={15} />
              {copiedFor === 'copy' ? 'Đã copy ✓' : 'Chỉ copy'}
            </button>
          </div>

          {/* Tertiary: Call */}
          <a
            href={`tel:${HOTLINE}`}
            className="w-full flex items-center justify-center gap-2 border border-stone-700 hover:border-stone-500 px-5 py-3 rounded-full font-bold text-sm transition"
          >
            <Phone size={15} />
            Hoặc gọi luôn {HOTLINE_DISPLAY}
          </a>

          {copiedFor && copiedFor !== 'copy' && (
            <p className="text-[11px] text-center text-green-400 mt-3">
              ✓ Nội dung đã copy. Mở khung chat và dán (paste) để gửi đơn.
            </p>
          )}

          <p className="text-[11px] text-center text-stone-500 mt-3">
            Tụi mình sẽ phản hồi xác nhận trong vòng 5 phút trong giờ hoạt động (9h–21h).
          </p>
        </div>
      </div>
    </div>
  );
}
