import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Mail } from 'lucide-react';
import { config } from '@/lib/config';
import Reveal from '@/components/reveal';

export const metadata: Metadata = {
  title: 'About — QuiverDesk',
  description: 'Why we built QuiverDesk: enterprise-grade tools for every service business in India, at zero complexity.',
};

const differentiators = [
  'Works for any service business type — from dental clinics to dance studios',
  'Simple enough for non-tech users — if you can use WhatsApp, you can use QuiverDesk',
  'Mobile-first for business owners on the go',
  'Affordable for small businesses — free to get started',
  'Built for India — UPI payments, WhatsApp reminders and GST-ready billing',
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-gradient py-20 text-center md:py-24">
        <div className="container-site">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">About QuiverDesk</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-50/90">
            We built QuiverDesk because we saw small and medium businesses struggling with
            manual registers, missed appointments and lost revenue
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site max-w-3xl">
          <Reveal>
            <h2 className="h2-section">Our Story</h2>
            <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-ink-secondary">
              <p>
                Walk into most clinics, salons and coaching centers in India and you&apos;ll find the
                same thing: a thick appointment register, a drawer of paper bills, and a business
                owner trying to remember which customer was due back this week. These businesses
                deliver excellent service — but the tools running them haven&apos;t changed in decades.
              </p>
              <p>
                The result is real money lost every single day. Customers who don&apos;t show up because
                nobody reminded them. Invoices that never get followed up. Loyal customers who
                quietly drift away because no one noticed they&apos;d stopped coming. Enterprise software
                could solve all of this — but it was built for enterprises, priced for enterprises,
                and far too complicated for a busy owner standing at the front desk.
              </p>
              <p>
                QuiverDesk changes that. We took the tools that big chains use — appointment
                scheduling, staff management, billing, analytics, CRM and automated customer
                communication — and rebuilt them to be radically simple, mobile-first and genuinely
                affordable. Whether you run one clinic or a growing chain of salons, QuiverDesk
                gives you a complete command centre for your business in minutes, not months.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-16">
            <h2 className="h2-section">Our Mission</h2>
            <blockquote className="mt-6 rounded-card-lg bg-brand-gradient p-8 text-xl font-semibold leading-relaxed text-white md:text-2xl">
              &ldquo;Empower every service business in India with enterprise-grade tools at zero complexity.&rdquo;
            </blockquote>
          </Reveal>

          <Reveal className="mt-16">
            <h2 className="h2-section">What Makes Us Different</h2>
            <ul className="mt-6 space-y-4">
              {differentiators.map((d) => (
                <li key={d} className="flex items-start gap-3 text-[16px] text-ink-secondary">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-success">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-16 rounded-card border border-line bg-section p-8 text-center">
            <Mail className="mx-auto text-primary" size={28} />
            <h3 className="mt-3 text-xl font-bold">Get in touch</h3>
            <p className="mt-2 text-ink-secondary">
              Questions, feedback or partnership ideas? We&apos;d love to hear from you.
            </p>
            <p className="mt-3 font-semibold text-primary">{config.contactEmail}</p>
            <Link href="/contact/" className="btn-gradient mt-6">
              Contact Us <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
