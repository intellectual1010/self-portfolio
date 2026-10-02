
import {
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

const className = [
  "transition hover:text-blue-400",
  "flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-slate-300 transition hover:border-blue-500/50 hover:text-blue-400",
  "text-slate-400 transition hover:text-blue-400",
];

export default function MessagingLinks({type}: {type: number}) {
  
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://wa.me/+639701502287"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact me on WhatsApp"
        className={className[type]}
      >
        <FaWhatsapp size={24} />
      </a>

      <a
        href="https://t.me/boznhieo04"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact me on Telegram"
        className={className[type]}
      >
        <FaTelegram size={24} />
      </a>
    </div>
  );
}
