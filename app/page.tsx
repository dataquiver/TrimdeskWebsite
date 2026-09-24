import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, Check, Sparkles, Globe, Smartphone, Star,
  Building2, Settings, Rocket,
} from 'lucide-react';
import { config } from '@/lib/config';
import { features, industries, testimonials } from '@/lib/data';
import Reveal from '@/components/reveal';

const proofPills = ['🏥 Healthcare', '✂️ Salons', '🏋️ Fitness', '⚖️ Legal', '🎓 Education', '💆 Wellness'];

const steps = [
  {
    icon: Building2,
    title: 'Register Your Business',
    body: 'Create your QuiverDesk account, select your business type and enter basic details. Takes less than 2 minutes.',
  },
  {
    icon: Settings,
    title: 'Set Up Your Services & Team',
    body: 'Add your services, set prices and duration. Add your staff members and configure working hours.',
  },
  {
    icon: Rocket,
    title: 'Start Managing & Growing',
    body: 'Accept appointments, send invoices, track revenue and watch your business grow with powerful analytics.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand-gradient overflow-hidden">
        <div className="container-site grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
              <Sparkles size={14} /> Trusted by 500+ businesses across India
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-white md:text-[52px] md:leading-[1.1]">
              One Platform to Run Your Entire Business
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-blue-50/90">
              QuiverDesk helps clinics, salons, gyms, law firms and 60+ business types
              manage appointments, staff, billing and customers — all from one simple dashboard.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/register/" className="btn-white">
                Start Free Trial <ArrowRight size={17} />
              </Link>
              <a href="#features" className="btn-outline-white">
                See How It Works
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-50/90">
              {['Free to start', 'No credit card', 'Setup in minutes'].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Check size={15} className="text-green-300" /> {t}
                </span>
              ))}
            </div>
          </div>
          <Reveal delay={0.15} className="flex justify-center">
            <Image
              src="/images/hero-modules.webp"
              alt="QuiverDesk — All 8 modules in one platform"
              width={560}
              height={480}
              priority
              className="w-full max-w-[540px] drop-shadow-2xl"
            />
          </Reveal>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-b border-line bg-white py-10">
        <div className="container-site">
          <p className="mb-5 text-center text-sm font-semibold uppercase tracking-wider text-ink-light">
            Powering businesses across industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {proofPills.map((p) => (
              <span
                key={p}
                className="rounded-full border border-line bg-section px-5 py-2 text-sm font-medium text-ink-secondary"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES OVERVIEW */}
      <section id="features" className="section-pad bg-section">
        <div className="container-site">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="h2-section">Everything Your Business Needs</h2>
            <p className="mt-4 text-lg text-ink-secondary">
              Eight powerful modules. One simple platform.
            </p>
          </Reveal>

          {/* Feature banner image */}
          <Reveal className="mx-auto mt-10 max-w-4xl">
            <Image
              src="/images/features-hero.webp"
              alt="Powerful Features for Every Business Need"
              width={900}
              height={480}
              className="w-full rounded-card-lg shadow-card-hover"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.slug} delay={Math.min(i * 0.05, 0.3)}>
                <Link href={`/features/#${f.slug}`} className="card block h-full p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm border border-line/50">
                    <Image
                      src={f.iconImage}
                      alt={f.name}
                      width={40}
                      height={40}
                      className="h-9 w-9 object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{f.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{f.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE HIGHLIGHTS — alternating image + text */}
      <section className="section-pad bg-white">
        <div className="container-site space-y-24">
          {features.slice(0, 4).map((f, i) => (
            <Reveal key={f.slug} delay={0.1}>
              <div className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                <div>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-section border border-line">
                    <Image src={f.iconImage} alt={f.name} width={40} height={40} className="h-9 w-9 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold md:text-3xl">{f.name}</h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-ink-secondary">{f.long}</p>
                  <ul className="mt-5 space-y-2">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[15px] text-ink-secondary">
                        <Check size={17} className="mt-0.5 shrink-0 text-primary" /> {b}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/features/#${f.slug}`} className="btn-gradient mt-8">
                    Learn about {f.name} <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="flex justify-center">
                  <Image
                    src={f.featureImage}
                    alt={f.name}
                    width={480}
                    height={400}
                    className="w-full max-w-md drop-shadow-xl"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-pad bg-section">
        <div className="container-site">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="h2-section">Get Started in 3 Simple Steps</h2>
            <p className="mt-4 text-lg text-ink-secondary">
              From registration to running your business in under 10 minutes
            </p>
          </Reveal>
          <div className="relative mt-16 grid gap-10 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-8 hidden h-0.5 bg-gradient-to-r from-cyan-200 via-teal-300 to-cyan-200 md:block" aria-hidden />
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1} className="relative text-center">
                <span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg">
                  <s.icon size={26} />
                </span>
                <div className="mt-2 text-sm font-bold text-primary">Step {i + 1}</div>
                <h3 className="mt-1 text-xl font-bold">{s.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-[15px] leading-relaxed text-ink-secondary">{s.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link href="/register/" className="btn-gradient">
              Start your free trial <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section-pad bg-brand-gradient overflow-hidden">
        <div className="container-site">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <h2 className="h2-section text-white">Built for Every Service Business</h2>
              <p className="mt-4 text-lg text-blue-50/90">
                Whether you run a clinic, salon, gym or law firm — QuiverDesk works for your business type
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {industries.slice(0, 6).map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/#${ind.slug}`}
                    className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-white transition hover:bg-white/20"
                  >
                    <span className="text-2xl">{ind.emoji}</span>
                    <span className="font-semibold">{ind.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/industries/" className="btn-outline-white">
                  See all 60+ business types <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="flex justify-center">
              <Image
                src="/images/industries.webp"
                alt="QuiverDesk works for 60+ business types"
                width={480}
                height={420}
                className="w-full max-w-md drop-shadow-2xl"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="h2-section">Loved by Business Owners Across India</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="card h-full p-7">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-secondary">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5">
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-ink-light">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APP DOWNLOAD */}
      <section id="download" className="section-pad bg-footer">
        <div className="container-site">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="h2-section text-white">Manage Your Business Anywhere</h2>
            <p className="mt-4 text-lg text-slate-300">
              QuiverDesk is available on web and mobile. Stay on top of your business from anywhere.
            </p>
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-3xl gap-6 md:grid-cols-2">
            <Reveal className="rounded-card-lg border border-white/10 bg-white/5 p-8 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                <Globe size={26} />
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">Web Dashboard</h3>
              <p className="mt-2 text-sm text-slate-400">Access from any browser on any device</p>
              <a href={config.appUrl} className="btn-outline-white mt-6 !px-5 !py-2.5 text-sm">
                Login to Dashboard <ArrowRight size={15} />
              </a>
            </Reveal>
            <Reveal delay={0.08} className="rounded-card-lg border border-white/10 bg-white/5 p-8 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                <Smartphone size={26} />
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">Mobile App</h3>
              <p className="mt-2 text-sm text-slate-400">Native Android app for on-the-go management</p>
              <a href={config.apkUrl} className="btn-outline-white mt-6 !px-5 !py-2.5 text-sm">
                Download Android App <ArrowRight size={15} />
              </a>
              <p className="mt-3 text-xs text-slate-500">iOS App coming soon</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-pad bg-brand-gradient overflow-hidden">
        <div className="container-site">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <Reveal delay={0.1} className="flex justify-center md:order-2">
              <Image
                src="/images/cta-hero.webp"
                alt="Ready to transform your business with QuiverDesk"
                width={460}
                height={380}
                className="w-full max-w-sm drop-shadow-2xl"
              />
            </Reveal>
            <Reveal className="text-center md:text-left">
              <h2 className="h2-section text-white">Ready to Transform Your Business?</h2>
              <p className="mt-4 max-w-xl text-lg text-blue-50/90">
                Join hundreds of businesses already using QuiverDesk to save time, reduce no-shows and grow faster.
              </p>
              <Link href="/register/" className="btn-white mt-8">
                Start Your Free Trial <ArrowRight size={17} />
              </Link>
              <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-blue-50/90 md:justify-start">
                {['Free to start', 'No credit card required', 'Cancel anytime'].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <Check size={15} className="text-green-300" /> {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
