import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { industries } from '@/lib/data';
import Reveal from '@/components/reveal';

export const metadata: Metadata = {
  title: 'Industries — QuiverDesk',
  description: 'QuiverDesk works for 60+ business types across healthcare, beauty, fitness, education, legal and more.',
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-brand-gradient py-20 text-center md:py-24">
        <div className="container-site">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            QuiverDesk Works for 60+ Business Types
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-50/90">
            Built to adapt to the unique needs of every service-based business
          </p>
        </div>
      </section>

      <section className="section-pad bg-section">
        <div className="container-site grid gap-8 md:grid-cols-2">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={Math.min(i * 0.04, 0.2)}>
              <div id={ind.slug} className="card h-full scroll-mt-24 p-8 hover:translate-y-0">
                <div className="flex items-center gap-4">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${ind.color}`}>
                    {ind.emoji}
                  </span>
                  <h2 className="text-2xl font-bold">{ind.name}</h2>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {ind.types.map((t) => (
                    <span key={t} className="rounded-full border border-line bg-section px-3 py-1 text-sm text-ink-secondary">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-ink-light">
                  Key features for {ind.name.toLowerCase()}
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {ind.keyFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink-secondary">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-success">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/register/" className="btn-gradient mt-7 !py-2.5 text-sm">
                  Start free trial for {ind.name.toLowerCase()} <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white text-center">
        <div className="container-site">
          <h2 className="h2-section">Don&apos;t see your business type?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-secondary">
            QuiverDesk adapts to any appointment-based service business. Talk to us and we&apos;ll set you up.
          </p>
          <Link href="/contact/" className="btn-gradient mt-8">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
