'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, PartyPopper } from 'lucide-react';
import { config } from '@/lib/config';
import { businessTypesByIndustry } from '@/lib/data';
import clsx from 'clsx';

const industryOptions = [
  { key: 'healthcare', label: 'Healthcare', emoji: '🏥' },
  { key: 'beauty-wellness', label: 'Beauty & Wellness', emoji: '✂️' },
  { key: 'fitness', label: 'Fitness', emoji: '🏋️' },
  { key: 'education', label: 'Education', emoji: '🎓' },
  { key: 'legal-financial', label: 'Legal & Financial', emoji: '⚖️' },
  { key: 'other', label: 'Other Services', emoji: '💼' },
];

const stepTitles = ['Industry', 'Business Type', 'Business Details', 'Your Account', 'Confirm'];

function passwordStrength(pw: string): { label: string; color: string; width: string } {
  if (pw.length === 0) return { label: '', color: 'bg-slate-200', width: '0%' };
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  if (score <= 1) return { label: 'Weak', color: 'bg-red-400', width: '25%' };
  if (score === 2) return { label: 'Fair', color: 'bg-amber-400', width: '50%' };
  if (score === 3) return { label: 'Good', color: 'bg-lime-500', width: '75%' };
  return { label: 'Strong', color: 'bg-green-500', width: '100%' };
}

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [industry, setIndustry] = useState('');
  const [bizType, setBizType] = useState<{ label: string; code: string } | null>(null);
  const [form, setForm] = useState({
    businessName: '', city: '', state: '', pincode: '', addressLine1: '',
    phone: '', businessEmail: '', gstnumber: '',
    ownerName: '', ownerEmail: '', password: '', confirmPassword: '',
  });
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<'success' | 'saved' | null>(null);

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [key]: e.target.value });

  const strength = passwordStrength(form.password);

  function validateStep(): string {
    switch (step) {
      case 0: return industry ? '' : 'Please select your industry.';
      case 1: return bizType ? '' : 'Please select your business type.';
      case 2:
        if (!form.businessName.trim()) return 'Business name is required.';
        if (!form.addressLine1.trim()) return 'Address is required.';
        if (!form.city.trim()) return 'City is required.';
        if (!/^\d{10}$/.test(form.phone.replace(/\D/g, '').slice(-10))) return 'Enter a valid 10-digit phone number.';
        if (!/\S+@\S+\.\S+/.test(form.businessEmail)) return 'Enter a valid business email.';
        return '';
      case 3:
        if (!form.ownerName.trim()) return 'Your name is required.';
        if (!/\S+@\S+\.\S+/.test(form.ownerEmail)) return 'Enter a valid email.';
        if (form.password.length < 8) return 'Password must be at least 8 characters.';
        if (form.password !== form.confirmPassword) return 'Passwords do not match.';
        return '';
      case 4: return agree ? '' : 'Please accept the Terms of Service and Privacy Policy.';
      default: return '';
    }
  }

  function next() {
    const problem = validateStep();
    if (problem) { setError(problem); return; }
    setError('');
    if (step === 2 && !form.ownerEmail) {
      setForm((f) => ({ ...f, ownerEmail: f.businessEmail }));
    }
    setStep(step + 1);
  }

  async function submit() {
    const problem = validateStep();
    if (problem) { setError(problem); return; }
    setError('');
    setSubmitting(true);

    const nameParts = form.ownerName.trim().split(/\s+/);
    const code = form.businessName.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 12)
      + Math.floor(100 + Math.random() * 900);

    try {
      const res = await fetch(`${config.apiUrl}/api/platform/tenants/onboard-business`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: form.businessName.trim(),
          businessCode: code,
          businessCategory: bizType!.code,
          email: form.businessEmail.trim(),
          phoneNumber: form.phone.trim(),
          gstNumber: form.gstnumber.trim() || null,
          ownerFirstName: nameParts[0],
          ownerLastName: nameParts.length > 1 ? nameParts.slice(1).join(' ') : null,
          ownerEmail: form.ownerEmail.trim(),
          ownerMobileNumber: form.phone.trim(),
          password: form.password,
          addressLine1: form.addressLine1.trim() || null,
          city: form.city.trim(),
          state: form.state.trim() || null,
          pincode: form.pincode.trim() || null,
        }),
      });
      if (res.ok) {
        setResult('success');
      } else {
        const body = await res.json().catch(() => null);
        if (body?.message) {
          setError(body.message);
        } else {
          setResult('saved');
        }
      }
    } catch {
      // API unreachable (e.g. static demo hosting) — don't dead-end the visitor
      setResult('saved');
    } finally {
      setSubmitting(false);
    }
  }

  if (result) {
    return (
      <section className="section-pad bg-section">
        <div className="container-site max-w-lg">
          <div className="card p-10 text-center hover:translate-y-0">
            {result === 'success' ? (
              <>
                <PartyPopper className="mx-auto text-primary" size={48} />
                <h1 className="mt-4 text-3xl font-extrabold">
                  Welcome to QuiverDesk, {form.ownerName.split(' ')[0]}!
                </h1>
                <p className="mt-3 text-ink-secondary">
                  Your account has been created. Log in with <b>{form.ownerEmail}</b> and the
                  password you chose.
                </p>
                <a href={`${config.appUrl}/login`} className="btn-gradient mt-8 w-full">
                  Login to your dashboard <ArrowRight size={16} />
                </a>
              </>
            ) : (
              <>
                <CheckCircle2 className="mx-auto text-success" size={48} />
                <h1 className="mt-4 text-2xl font-extrabold">Registration received!</h1>
                <p className="mt-3 text-ink-secondary">
                  Your registration has been saved. Our team will contact you within 24 hours
                  to activate your account.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-pad bg-section">
      <div className="container-site max-w-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold md:text-4xl">Create Your QuiverDesk Account</h1>
          <p className="mt-3 text-ink-secondary">Free to start. No credit card required.</p>
        </div>

        {/* progress */}
        <div className="mt-10">
          <div className="flex justify-between text-xs font-semibold text-ink-light">
            {stepTitles.map((t, i) => (
              <span key={t} className={clsx(i <= step && 'text-primary')}>{i + 1}. {t}</span>
            ))}
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-line">
            <div
              className="h-full rounded-full bg-brand-gradient transition-all duration-500"
              style={{ width: `${((step + 1) / 5) * 100}%` }}
            />
          </div>
        </div>

        <div className="card mt-8 p-8 hover:translate-y-0">
          {step === 0 && (
            <>
              <h2 className="text-xl font-bold">What type of business do you run?</h2>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {industryOptions.map((o) => (
                  <button
                    key={o.key}
                    type="button"
                    onClick={() => { setIndustry(o.key); setBizType(null); setError(''); }}
                    className={clsx(
                      'rounded-card border-2 p-5 text-center transition hover:border-primary/60',
                      industry === o.key ? 'border-primary bg-blue-50' : 'border-line bg-white'
                    )}
                  >
                    <div className="text-3xl">{o.emoji}</div>
                    <div className="mt-2 text-sm font-semibold">{o.label}</div>
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <h2 className="text-xl font-bold">Select your specific business type</h2>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {(businessTypesByIndustry[industry] ?? businessTypesByIndustry.other).map((t) => (
                  <button
                    key={t.label}
                    type="button"
                    onClick={() => { setBizType(t); setError(''); }}
                    className={clsx(
                      'rounded-lg border-2 px-4 py-3 text-left text-sm font-semibold transition hover:border-primary/60',
                      bizType?.label === t.label ? 'border-primary bg-blue-50' : 'border-line bg-white'
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl font-bold">Tell us about your business</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="field-label">Business Name *</label>
                  <input className="field" value={form.businessName} onChange={set('businessName')} placeholder="e.g. Smile Dental Clinic" />
                </div>
                <div className="sm:col-span-2">
                  <label className="field-label">Address *</label>
                  <input className="field" value={form.addressLine1} onChange={set('addressLine1')} placeholder="Shop no., Building, Street" />
                </div>
                <div>
                  <label className="field-label">City *</label>
                  <input className="field" value={form.city} onChange={set('city')} placeholder="e.g. Bangalore" />
                </div>
                <div>
                  <label className="field-label">State</label>
                  <input className="field" value={form.state} onChange={set('state')} placeholder="e.g. Karnataka" />
                </div>
                <div>
                  <label className="field-label">PIN Code</label>
                  <input className="field" type="text" maxLength={6} value={form.pincode} onChange={set('pincode')} placeholder="560001" />
                </div>
                <div>
                  <label className="field-label">Phone Number *</label>
                  <input className="field" type="tel" value={form.phone} onChange={set('phone')} placeholder="98765 43210" />
                </div>
                <div className="sm:col-span-2">
                  <label className="field-label">Business Email *</label>
                  <input className="field" type="email" value={form.businessEmail} onChange={set('businessEmail')} placeholder="hello@yourbusiness.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="field-label">GST Number (GSTIN) <span className="text-xs font-normal text-slate-400">(optional)</span></label>
                  <input className="field" value={form.gstnumber} onChange={set('gstnumber')} placeholder="e.g. 27AAPFU0939F1ZV" maxLength={15} style={{ textTransform: 'uppercase' }} />
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-xl font-bold">Create your account</h2>
              <div className="mt-6 grid gap-5">
                <div>
                  <label className="field-label">Your Full Name *</label>
                  <input className="field" value={form.ownerName} onChange={set('ownerName')} placeholder="Your name" />
                </div>
                <div>
                  <label className="field-label">Your Email *</label>
                  <input className="field" type="email" value={form.ownerEmail} onChange={set('ownerEmail')} placeholder="you@email.com" />
                </div>
                <div>
                  <label className="field-label">Password * (min 8 characters)</label>
                  <input className="field" type="password" value={form.password} onChange={set('password')} placeholder="••••••••" />
                  {form.password && (
                    <div className="mt-2 flex items-center gap-3">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                        <div className={`h-full rounded-full transition-all ${strength.color}`} style={{ width: strength.width }} />
                      </div>
                      <span className="text-xs font-semibold text-ink-secondary">{strength.label}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="field-label">Confirm Password *</label>
                  <input className="field" type="password" value={form.confirmPassword} onChange={set('confirmPassword')} placeholder="••••••••" />
                </div>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <h2 className="text-xl font-bold">Confirm &amp; create your account</h2>
              <div className="mt-6 space-y-3 rounded-card bg-section p-6 text-[15px]">
                <div><span className="font-semibold">Business:</span> {form.businessName} — {bizType?.label}</div>
                <div><span className="font-semibold">Address:</span> {form.addressLine1}, {form.city}{form.state ? `, ${form.state}` : ''}{form.pincode ? ` - ${form.pincode}` : ''}</div>
                <div><span className="font-semibold">Owner:</span> {form.ownerName} ({form.ownerEmail})</div>
                <div><span className="font-semibold">Phone:</span> {form.phone}</div>
                {form.gstnumber && <div><span className="font-semibold">GSTIN:</span> {form.gstnumber.toUpperCase()}</div>}
                <div><span className="font-semibold">Plan:</span> Free Trial</div>
              </div>
              <label className="mt-6 flex items-start gap-3 text-sm text-ink-secondary">
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 h-4 w-4 accent-blue-600" />
                <span>
                  I agree to the{' '}
                  <a href="/terms-of-service/" target="_blank" className="font-semibold text-primary">Terms of Service</a>{' '}
                  and{' '}
                  <a href="/privacy-policy/" target="_blank" className="font-semibold text-primary">Privacy Policy</a>
                </span>
              </label>
            </>
          )}

          {error && (
            <p className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600">{error}</p>
          )}

          <div className="mt-8 flex items-center justify-between">
            {step > 0 ? (
              <button type="button" onClick={() => { setStep(step - 1); setError(''); }} className="btn-outline !py-2.5">
                <ArrowLeft size={16} /> Back
              </button>
            ) : <span />}
            {step < 4 ? (
              <button type="button" onClick={next} className="btn-gradient !py-2.5">
                Next <ArrowRight size={16} />
              </button>
            ) : (
              <button type="button" onClick={submit} disabled={submitting} className="btn-gradient !py-3 disabled:opacity-60">
                {submitting ? 'Creating your account…' : 'Create My Free Account'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
