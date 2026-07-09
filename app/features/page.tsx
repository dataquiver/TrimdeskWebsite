import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { features } from '@/lib/data';
import Reveal from '@/components/reveal';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Features — QuiverDesk',
  description: 'Eight powerful modules working together to help you manage, grow and delight your customers.',
};

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-brand-gradient py-20 text-center md:py-24">
        <div className="container-site">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Powerful Features for Every Business Need
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-50/90">
            Eight modules working together to help you manage, grow and delight your customers
          </p>
        </div>
      </section>

      {features.map((f, i) => (
        <section
          key={f.slug}
          id={f.slug}
          className={clsx('section-pad scroll-mt-16', i % 2 === 0 ? 'bg-white' : 'bg-section')}
        >
          <div className="container-site grid items-center gap-12 md:grid-cols-2">
            <Reveal className={clsx(i % 2 === 1 && 'md:order-2')}>
              <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${f.chip} ${f.chipText}`}>
                <f.icon size={26} />
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight">{f.name}</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-secondary">{f.long}</p>
              <ul className="mt-6 space-y-3">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px] text-ink-secondary">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-success">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link href="/register/" className="btn-gradient mt-8">
                Start using {f.name.toLowerCase()} for free <ArrowRight size={16} />
              </Link>
            </Reveal>

            {/* visual mockup placeholder */}
            <Reveal delay={0.1} className={clsx(i % 2 === 1 && 'md:order-1')}>
              <div className="relative rounded-card-lg bg-brand-gradient p-1 shadow-xl">
                <div className="rounded-[20px] bg-white p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${f.chip} ${f.chipText}`}>
                      <f.icon size={17} />
                    </span>
                    <span className="text-sm font-bold text-ink">{f.name}</span>
                  </div>
                  {[80, 62, 90, 55].map((w, r) => (
                    <div key={r} className="mb-3 flex items-center gap-3 rounded-lg bg-section p-3">
                      <span className={`h-8 w-8 rounded-lg ${f.chip}`} />
                      <div className="flex-1">
                        <div className="h-2.5 rounded bg-slate-200" style={{ width: `${w}%` }} />
                        <div className="mt-1.5 h-2 w-1/3 rounded bg-slate-100" />
                      </div>
                      <span className="h-5 w-12 rounded-full bg-slate-100" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section-pad bg-brand-gradient text-center">
        <div className="container-site">
          <h2 className="h2-section text-white">All eight modules. One free trial.</h2>
          <Link href="/register/" className="btn-white mt-8">
            Get Started Free <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
