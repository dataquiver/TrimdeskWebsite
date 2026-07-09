'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { config } from '@/lib/config';
import clsx from 'clsx';

const links = [
  { href: '/features/', label: 'Features' },
  { href: '/industries/', label: 'Industries' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-md">
        <Zap size={18} strokeWidth={2.5} />
      </span>
      <span className="bg-brand-gradient bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
        QuiverDesk
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow',
        scrolled ? 'shadow-md' : 'shadow-none border-b border-line/60'
      )}
    >
      <div className="container-site flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-ink-secondary transition hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={config.appUrl} className="btn-outline !py-2 !px-4 text-sm">
            Login
          </a>
          <Link href="/register/" className="btn-gradient !py-2 !px-4 text-sm">
            Start Free Trial
          </Link>
        </div>

        <button
          className="rounded-lg p-2 text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-5 pb-6 pt-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[15px] font-medium text-ink-secondary"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-3">
            <a href={config.appUrl} className="btn-outline">Login</a>
            <Link href="/register/" onClick={() => setOpen(false)} className="btn-gradient">
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
