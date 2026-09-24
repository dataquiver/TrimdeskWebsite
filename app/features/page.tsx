import type { Metadata } from 'next';
import Image from 'next/image';
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
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-line shadow-sm">
                <Image src={f.iconImage} alt={f.name} width={40} height={40} className="h-9 w-9 object-contain" />
              </div>
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

            <Reveal delay={0.1} className={clsx('flex justify-center', i % 2 === 1 && 'md:order-1')}>
              <Image
                src={f.featureImage}
                alt={f.name}
                width={480}
                height={400}
                className="w-full max-w-md drop-shadow-xl"
              />
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section-pad bg-brand-gradient overflow-hidden">
        <div className="container-site grid items-center gap-10 md:grid-cols-2">
          <Reveal className="text-center md:text-left">
            <h2 className="h2-section text-white">All eight modules. One free trial.</h2>
            <p className="mt-4 text-lg text-blue-50/90">
              Start your 14-day free trial today — no credit card required.
            </p>
            <Link href="/register/" className="btn-white mt-8">
              Get Started Free <ArrowRight size={17} />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="flex justify-center">
            <Image
              src="/images/hero-modules.webp"
              alt="All QuiverDesk modules"
              width={460}
              height={380}
              className="w-full max-w-sm drop-shadow-2xl"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
