import type { Metadata } from 'next';
import { LegalShell, H2, P, UL } from '@/components/legal-page';

export const metadata: Metadata = { title: 'Terms of Service — QuiverDesk' };

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="July 2026">
      <P>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the QuiverDesk
        platform — including the website, web application and mobile applications (together, the
        &ldquo;Service&rdquo;). By creating an account or using the Service you agree to these Terms.
      </P>

      <H2>1. The Service</H2>
      <P>
        QuiverDesk is a business management platform for service-based businesses. It provides
        appointment scheduling, staff management, billing and invoicing, customer management, CRM,
        analytics, feedback collection and automated customer notifications. Features may be added,
        modified or removed as the product evolves.
      </P>

      <H2>2. Accounts and Eligibility</H2>
      <UL items={[
        'You must be at least 18 years old and legally able to enter contracts to use the Service.',
        'You are responsible for the accuracy of the information you provide and for keeping your login credentials confidential.',
        'You are responsible for all activity that occurs under your account, including activity by staff members you add.',
      ]} />

      <H2>3. Your Data and Your Customers&rsquo; Data</H2>
      <UL items={[
        'You retain full ownership of the business and customer data you enter into QuiverDesk.',
        'You confirm you have the right to store your customers’ information and to send them service communications (confirmations, reminders, receipts) through the Service.',
        'You must comply with applicable law when messaging customers, including obtaining any required consent.',
      ]} />

      <H2>4. Acceptable Use</H2>
      <P>You agree not to:</P>
      <UL items={[
        'Use the Service for unlawful purposes or to send spam or unsolicited marketing.',
        'Attempt to gain unauthorised access to the Service, other accounts, or our infrastructure.',
        'Reverse engineer, resell or sublicense the Service without our written consent.',
        'Upload malicious code or content that infringes the rights of others.',
      ]} />

      <H2>5. Subscriptions and Payment</H2>
      <UL items={[
        'The Service offers a free tier and paid subscription plans. Pricing is communicated directly by our team.',
        'Paid subscriptions are billed in advance through our payment partner Razorpay.',
        'If a subscription expires or is cancelled, access to paid features may be restricted; your data remains available for export.',
        'Refunds are governed by our Refund Policy.',
      ]} />

      <H2>6. Availability and Support</H2>
      <P>
        We work hard to keep the Service available at all times but do not guarantee uninterrupted
        operation. Planned maintenance will be communicated where practical. Support is provided by
        email at hello@quiverdesk.com.
      </P>

      <H2>7. Termination</H2>
      <UL items={[
        'You may stop using the Service and request account deletion at any time.',
        'We may suspend or terminate accounts that violate these Terms, abuse the Service, or fail to pay subscription fees, after reasonable notice where appropriate.',
      ]} />

      <H2>8. Disclaimer and Limitation of Liability</H2>
      <P>
        The Service is provided &ldquo;as is&rdquo; without warranties of any kind, express or
        implied. To the maximum extent permitted by law, QuiverDesk shall not be liable for indirect,
        incidental, special or consequential damages, or for loss of profits, revenue or data. Our
        total liability for any claim is limited to the amount you paid us in the 3 months preceding
        the claim.
      </P>

      <H2>9. Governing Law</H2>
      <P>
        These Terms are governed by the laws of India. Any disputes shall be subject to the
        exclusive jurisdiction of the courts of Bangalore, Karnataka.
      </P>

      <H2>10. Contact</H2>
      <P>Questions about these Terms: <b>legal@quiverdesk.com</b></P>
    </LegalShell>
  );
}
