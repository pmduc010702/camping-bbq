import React, { useState } from 'react';
import { Clock, ArrowRight, Send, CheckCircle2, Users } from 'lucide-react';
import { combos } from '../data/combos';
import { HOTLINE, ZALO_URL, MESSENGER_URL } from '../data/settings';
import OrderSuccessModal from './OrderSuccessModal';

export default function OrderForm() {
  const today = new Date().toISOString().split('T')[0];
  const [form, setForm] = useState({
    name: '',
    phone: '',
    combo: 'set-349',
    date: today,
    time: '18:00',
    address: '',
    note: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [copiedFor, setCopiedFor] = useState(null); // 'zalo' | 'messenger' | 'sms' | 'copy' | null

  const handleChange = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const buildMessage = () => {
    const c = combos.find((x) => x.id === form.combo);
    const dateFormatted = form.date
      ? new Date(form.date).toLocaleDateString('vi-VN', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' })
      : '';
    return `🔥 ĐƠN BBQ MỚI
━━━━━━━━━━━━━━
👤 ${form.name}
📞 ${form.phone}
🍖 ${c?.name} (${c?.totalWeight}) — ${c?.price}K
📅 ${dateFormatted}
⏰ ${form.time}
📍 ${form.address}${form.note ? '\n📝 Ghi chú: ' + form.note : ''}
━━━━━━━━━━━━━━
Camping BBQ ơi, xác nhận giúp mình nhé! 🙏`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(buildMessage());
      return true;
    } catch (err) {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = buildMessage();
      document.body.appendChild(ta);
      ta.select();
      let success = false;
      try {
        document.execCommand('copy');
        success = true;
      } catch {}
      document.body.removeChild(ta);
      return success;
    }
  };

  const flashCopiedFor = (key, openUrl) => {
    setCopiedFor(key);
    setTimeout(() => setCopiedFor(null), 2500);
    if (openUrl) {
      setTimeout(() => window.open(openUrl, '_blank'), 300);
    }
  };

  const copyAndOpenZalo = async () => {
    await copyToClipboard();
    flashCopiedFor('zalo', ZALO_URL);
  };

  const copyAndOpenMessenger = async () => {
    await copyToClipboard();
    flashCopiedFor('messenger', MESSENGER_URL);
  };

  const copyOnly = async () => {
    await copyToClipboard();
    flashCopiedFor('copy', null);
  };

  const sendSMS = () => {
    const text = encodeURIComponent(buildMessage());
    window.location.href = `sms:${HOTLINE}?body=${text}`;
  };

  const isValid =
    form.name.trim() && form.phone.trim() && form.date && form.time && form.address.trim();

  const inputCls =
    'w-full bg-stone-900 border border-stone-800 focus:border-red-500 outline-none rounded-lg px-4 py-3 text-sm text-stone-100 placeholder:text-stone-600 transition';
  const labelCls = 'block text-[11px] font-bold tracking-[0.15em] text-stone-400 mb-2';

  return (
    <section id="order" className="py-20 md:py-28 px-5 md:px-8 relative overflow-hidden">
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-red-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[0.3em] text-red-500 mb-3">— ĐẶT NHANH</div>
          <h2 className="font-display font-black text-4xl md:text-6xl leading-none mb-4">
            Điền form,<br />
            <span className="text-stone-500 italic font-light">gửi 1 chạm.</span>
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto text-sm md:text-base">
            Điền thông tin → tin nhắn tự được tạo → gửi qua <strong className="text-stone-200">Zalo / Messenger / SMS</strong> chỉ với 1 chạm. Tụi mình phản hồi xác nhận trong vài phút.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-stone-950/70 border border-stone-800 rounded-2xl p-5 md:p-8 backdrop-blur-sm"
        >
          {/* Name + Phone */}
          <div className="grid md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className={labelCls}>HỌ TÊN *</label>
              <input
                type="text"
                value={form.name}
                onChange={handleChange('name')}
                placeholder="Nguyễn Văn A"
                required
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>SỐ ĐIỆN THOẠI *</label>
              <input
                type="tel"
                value={form.phone}
                onChange={handleChange('phone')}
                placeholder="0912 345 678"
                required
                className={inputCls}
              />
            </div>
          </div>

          {/* Combo picker */}
          <div className="mb-5">
            <label className={labelCls}>CHỌN COMBO *</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {combos.map((c) => {
                const active = form.combo === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setForm({ ...form, combo: c.id })}
                    className={`relative text-left p-3 rounded-lg border transition ${
                      active
                        ? 'border-red-500 bg-red-600/15 shadow-lg shadow-red-900/20'
                        : 'border-stone-800 hover:border-stone-700 bg-stone-900/50'
                    }`}
                  >
                    {active && (
                      <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
                        <CheckCircle2 size={10} className="text-white" strokeWidth={3} />
                      </div>
                    )}
                    <div className="font-display font-black text-2xl leading-none">
                      {c.price}
                      <span className="text-sm ml-0.5">K</span>
                    </div>
                    <div className="text-[10px] text-stone-400 mt-1.5 flex items-center gap-1">
                      <Users size={9} /> {c.serving}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Date + Time */}
          <div className="grid md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className={labelCls}>NGÀY GIAO *</label>
              <input
                type="date"
                value={form.date}
                onChange={handleChange('date')}
                min={today}
                required
                style={{ colorScheme: 'dark' }}
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>GIỜ GIAO *</label>
              <input
                type="time"
                value={form.time}
                onChange={handleChange('time')}
                required
                style={{ colorScheme: 'dark' }}
                className={inputCls}
              />
            </div>
          </div>

          {/* Address */}
          <div className="mb-5">
            <label className={labelCls}>ĐỊA CHỈ GIAO *</label>
            <input
              type="text"
              value={form.address}
              onChange={handleChange('address')}
              placeholder="Số nhà, đường, phường/xã, quận/huyện"
              required
              className={inputCls}
            />
          </div>

          {/* Note */}
          <div className="mb-6">
            <label className={labelCls}>GHI CHÚ (TÙY CHỌN)</label>
            <textarea
              value={form.note}
              onChange={handleChange('note')}
              placeholder="Ví dụ: thuê thêm bếp than, đổi ba chỉ heo → bò Mỹ, không cay..."
              rows={3}
              className={`${inputCls} resize-none`}
            />
          </div>

          <div className="flex items-start gap-3 mb-6 p-3.5 bg-amber-950/30 border border-amber-900/30 rounded-lg text-xs text-amber-100/90">
            <Clock size={16} className="shrink-0 text-amber-400 mt-0.5" />
            <span>
              Vui lòng đặt trước <strong className="text-amber-300">3–4 tiếng</strong> để bếp có thời gian ướp thịt đúng vị nhất.
            </span>
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-base transition ${
              isValid
                ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/40 hover:shadow-red-900/60'
                : 'bg-stone-800 text-stone-500 cursor-not-allowed'
            }`}
          >
            <Send size={17} />
            Tạo tin nhắn gửi đơn
            <ArrowRight size={17} />
          </button>

          <p className="text-[11px] text-center text-stone-500 mt-4">
            Bằng việc gửi đơn, bạn đồng ý nhận liên hệ qua Zalo/SĐT đã cung cấp.
          </p>
        </form>
      </div>

      {showModal && (
        <OrderSuccessModal
          message={buildMessage()}
          onClose={() => setShowModal(false)}
          onZalo={copyAndOpenZalo}
          onMessenger={copyAndOpenMessenger}
          onSMS={sendSMS}
          onCopy={copyOnly}
          copiedFor={copiedFor}
        />
      )}
    </section>
  );
}
