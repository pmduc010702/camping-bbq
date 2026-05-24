import { Facebook, Instagram, Youtube } from 'lucide-react';
import { TikTokIcon } from '../icons';

// Liên kết MXH. Sẽ lấy URL từ site_settings sau (Supabase).
export const socials = [
  { name: 'Facebook',  handle: '/campingbbq',     url: '#', icon: Facebook,    color: '#1877f2', bg: 'from-blue-600/20 to-blue-900/10' },
  { name: 'TikTok',    handle: '@campingbbq',     url: '#', icon: TikTokIcon,  color: '#ff0050', bg: 'from-pink-600/20 to-zinc-900/10' },
  { name: 'Instagram', handle: '@campingbbq',     url: '#', icon: Instagram,   color: '#e1306c', bg: 'from-fuchsia-600/20 to-amber-600/10' },
  { name: 'YouTube',   handle: 'Camping BBQ',     url: '#', icon: Youtube,     color: '#ff0000', bg: 'from-red-600/20 to-zinc-900/10' },
];
