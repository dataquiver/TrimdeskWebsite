import type { Metadata } from 'next';
import { LegalShell, H2, P, UL } from '@/components/legal-page';

export const metadata: Metadata = { title: 'Refund Policy — QuiverDesk' };

export default function RefundPolicyPage() {
  return (
    <LegalShell title="Refund & Cancellation Policy" updated="July 2026">
      <P>
        We want every business to be confident choosing QuiverDesk. This policy explains how
        cancellations and refunds work for our subscription plans.
      </P>

      <H2>1. Free Trial</H2>
      <P>
        QuiverDesk is free to get started. The free trial requires no payment and no credit card,
        so no refund is applicable. You can stop using the Service at any time during the trial
        with no charges.
      </P>

      <H2>2. Paid Subscriptions</H2>
      <UL items={[
        'If you are not satisfied with a paid subscription, contact us within 7 days of payment for a full refund — no questions asked.',
        'Refund requests after 7 days are considered case by case, prorated for unused time, at our discretion.',
        'Approved refunds are processed to the original payment method within 5–7 working days through our payment partner Razorpay.',
      ]} />

      <H2>3. Cancelling Auto-Renewal</H2>
      <UL items={[
        'You can turn off auto-renewal anytime from the Subscription page in the app.',
        'After cancellation, your plan stays active until the end of the paid billing period — you lose nothing you paid for.',
        'No further charges are made after auto-renewal is disabled.',
      ]} />

      <H2>4. Duplicate or Failed Payments</H2>
      <P>
        If you are charged twice for the same subscription, or money is deducted but your plan is
        not activated, the amount is automatically reversed by the payment network — typically
        within 5–7 working days. If it is not, contact us and we will resolve it on priority.
      </P>

      <H2>5. How to Request a Refund</H2>
      <P>
        Email <b>billing@quiverdesk.com</b> from your registered email address with your business
        name and payment reference (invoice number or transaction ID). We respond to all refund
        requests within 2 working days.
      </P>
    </LegalShell>
  );
}
