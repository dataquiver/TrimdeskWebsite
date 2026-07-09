'use client';

import { useState } from 'react';
import { Mail, Clock, IndianRupee, CheckCircle2 } from 'lucide-react';
import { config } from '@/lib/config';
import { industries } from '@/lib/data';

const staffOptions = ['1-5', '5-20', '20-50', '50+'];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-brand-gradient py-16 text-center md:py-20">
        <div className="container-site">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-50/90">
            Talk to our team about getting QuiverDesk working for your business
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site grid gap-14 md:grid-cols-5">
          {/* left: contact info */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold">Talk to our team</h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-primary">
                  <Mail size={19} />
                </span>
                <div>
                  <div className="font-semibold">Email us</div>
                  <a href={`mailto:${config.contactEmail}`} className="text-primary">{config.contactEmail}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-success">
                  <Clock size={19} />
                </span>
                <div>
                  <div className="font-semibold">Fast response</div>
                  <p className="text-ink-secondary">We typically respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-primary-purple">
                  <IndianRupee size={19} />
                </span>
                <div>
                  <div className="font-semibold">Pricing</div>
                  <p className="text-ink-secondary">
                    For pricing information, please fill the form — our team will suggest a plan
                    that fits your business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* right: form */}
          <div className="md:col-span-3">
            {sent ? (
              <div className="card p-10 text-center hover:translate-y-0">
                <CheckCircle2 className="mx-auto text-success" size={48} />
                <h3 className="mt-4 text-2xl font-bold">Thank you!</h3>
                <p className="mt-2 text-ink-secondary">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form
                className="card grid gap-5 p-8 hover:translate-y-0 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label className="field-label">Full Name *</label>
                  <input required className="field" placeholder="Your name" />
                </div>
                <div>
                  <label className="field-label">Business Name *</label>
                  <input required className="field" placeholder="Your business" />
                </div>
                <div>
                  <label className="field-label">Email *</label>
                  <input required type="email" className="field" placeholder="you@business.com" />
                </div>
                <div>
                  <label className="field-label">Phone Number *</label>
                  <input required type="tel" className="field" placeholder="98765 43210" />
                </div>
                <div>
                  <label className="field-label">Business Type</label>
                  <select className="field">
                    {industries.map((i) => (
                      <option key={i.slug}>{i.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="field-label">Number of Staff</label>
                  <select className="field">
                    {staffOptions.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="field-label">What are you looking for?</label>
                  <textarea rows={4} className="field" placeholder="Tell us about your business and what you need…" />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-gradient w-full">Send Message</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
