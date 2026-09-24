import { CalendarCheck, IndianRupee, Users } from 'lucide-react';

/** Pure-CSS dashboard mockup used as the hero visual. */
export default function DashboardMockup() {
  const bars = [42, 65, 50, 80, 62, 92, 74];
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[32px] bg-white/10 blur-2xl" aria-hidden />
      <div className="relative rounded-card-lg border border-white/20 bg-white p-5 shadow-2xl">
        {/* window chrome */}
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-3 h-2 w-40 rounded bg-slate-100" />
        </div>

        {/* stat cards */}
        <div className="mb-4 grid grid-cols-3 gap-3">
          {[
            { icon: CalendarCheck, label: 'Appointments', value: '24', chip: 'bg-blue-50 text-blue-600' },
            { icon: IndianRupee, label: 'Revenue', value: '₹18,450', chip: 'bg-green-50 text-green-600' },
            { icon: Users, label: 'Customers', value: '312', chip: 'bg-purple-50 text-purple-600' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
              <span className={`mb-2 flex h-7 w-7 items-center justify-center rounded-lg ${s.chip}`}>
                <s.icon size={14} />
              </span>
              <div className="text-sm font-bold text-ink">{s.value}</div>
              <div className="text-[10px] text-ink-light">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
          {/* appointment list */}
          <div className="rounded-xl border border-slate-100 p-3 sm:col-span-3">
            <div className="mb-2 text-[11px] font-bold text-ink">Today&apos;s Appointments</div>
            {[
              { n: 'Rahul M.', s: 'Consultation', t: '10:00', c: 'bg-blue-500' },
              { n: 'Sneha K.', s: 'Teeth Cleaning', t: '11:30', c: 'bg-purple-500' },
              { n: 'Arjun P.', s: 'Follow-up', t: '2:00', c: 'bg-teal-500' },
            ].map((a) => (
              <div key={a.n} className="mb-2 flex items-center gap-2 rounded-lg bg-slate-50 px-2.5 py-2">
                <span className={`flex h-6 w-6 items-center justify-center rounded-full ${a.c} text-[9px] font-bold text-white`}>
                  {a.n[0]}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[10px] font-semibold text-ink">{a.n}</div>
                  <div className="truncate text-[9px] text-ink-light">{a.s}</div>
                </div>
                <span className="text-[9px] font-semibold text-ink-secondary">{a.t}</span>
              </div>
            ))}
          </div>

          {/* chart */}
          <div className="rounded-xl border border-slate-100 p-3 sm:col-span-2">
            <div className="mb-2 text-[11px] font-bold text-ink">Weekly Revenue</div>
            <div className="flex h-24 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 rounded-t bg-brand-gradient opacity-90"
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[8px] text-ink-light">
              <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
