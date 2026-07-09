import Link from 'next/link';
import { Zap, Twitter, Linkedin, Instagram } from 'lucide-react';
import { config } from '@/lib/config';

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features/' },
      { label: 'Industries', href: '/industries/' },
      { label: 'Mobile App', href: '/#download' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
      { label: 'Blog (coming soon)', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center (coming soon)', href: '#' },
      { label: 'Documentation (coming soon)', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy/' },
      { label: 'Terms of Service', href: '/terms-of-service/' },
      { label: 'Refund Policy', href: '/refund-policy/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="container-site grid gap-12 py-16 md:grid-cols-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient text-white">
              <Zap size={18} strokeWidth={2.5} />
            </span>
            <span className="text-xl font-extrabold text-white">QuiverDesk</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            One platform for every service business — appointments, staff, billing,
            customers and growth.
          </p>
          <div className="mt-5 flex gap-3">
            {[Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300 transition hover:bg-white/15 hover:text-white"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              {col.title}
            </h4>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-400 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-sm text-slate-500 sm:flex-row">
          <span>© 2026 QuiverDesk. All rights reserved.</span>
          <a href={config.appUrl} className="transition hover:text-white">
            Login to Dashboard →
          </a>
        </div>
      </div>
    </footer>
  );
}
