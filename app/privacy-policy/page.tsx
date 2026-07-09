import type { Metadata } from 'next';
import { LegalShell, H2, P, UL } from '@/components/legal-page';

export const metadata: Metadata = { title: 'Privacy Policy — QuiverDesk' };

export default function PrivacyPolicyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="July 2026">
      <P>
        QuiverDesk (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the QuiverDesk
        business management platform, available as a web application, mobile application and this
        website. This Privacy Policy explains what information we collect, how we use it, and the
        choices you have. By using QuiverDesk you agree to the practices described here.
      </P>

      <H2>1. Information We Collect</H2>
      <P>When you register or use QuiverDesk, we collect:</P>
      <UL items={[
        'Account information: your name, email address, phone number and password (stored as a secure one-way hash — we never store plain-text passwords).',
        'Business information: business name, business type, address, city, GST number (if provided) and staff details you add.',
        'Customer records you create: names, contact details, appointment history, invoices and notes about your own customers. You are the owner of this data; we process it on your behalf.',
        'Usage information: appointments, invoices, payments recorded, and feature usage that helps us operate and improve the service.',
        'Payment information: when you pay for a subscription, the transaction is processed by our payment partner Razorpay. We store only transaction references and invoices — never your card number, CVV or UPI PIN.',
      ]} />

      <H2>2. How We Use Your Information</H2>
      <UL items={[
        'To provide, operate and maintain the QuiverDesk service.',
        'To send service notifications — appointment confirmations, reminders, invoices and account alerts — via WhatsApp, SMS, email and push notifications.',
        'To process subscription payments and issue invoices.',
        'To provide customer support and respond to your requests.',
        'To improve the product, diagnose problems and prevent fraud or abuse.',
      ]} />
      <P>We do not sell your personal data or your customers&rsquo; data to anyone.</P>

      <H2>3. Data Storage and Security</H2>
      <P>
        Your data is stored on secured servers with access restricted to authorised personnel.
        Passwords are hashed using industry-standard algorithms (bcrypt), traffic to our services is
        encrypted in transit, and payment credentials are handled exclusively by our PCI-DSS-compliant
        payment partner. Every notification we send is logged for auditability.
      </P>

      <H2>4. Third-Party Services</H2>
      <P>We rely on trusted third parties to deliver parts of the service:</P>
      <UL items={[
        'Razorpay — subscription payment processing.',
        'Meta (WhatsApp Business Platform) — WhatsApp notifications to you and your customers.',
        'SMS and email delivery providers — transactional messages such as reminders and receipts.',
        'Google Firebase — push notifications in the mobile app.',
      ]} />
      <P>
        Each partner receives only the minimum information required to perform its function (for
        example, a phone number and message content for a WhatsApp reminder).
      </P>

      <H2>5. Your Rights</H2>
      <UL items={[
        'Access and update: you can view and edit your account and business information at any time from the app.',
        'Export: you may request an export of your business data by contacting us.',
        'Deletion: you may request deletion of your account and associated data. We will delete or anonymise your data within 30 days, except records we are legally required to retain (such as tax invoices).',
        'Opt-out: businesses can configure or disable notification channels per event type inside the app.',
      ]} />

      <H2>6. Data Retention</H2>
      <P>
        We retain your data for as long as your account is active. After account deletion, backups
        are purged within 90 days. Financial records may be retained longer where required by
        Indian tax law.
      </P>

      <H2>7. Children&rsquo;s Privacy</H2>
      <P>
        QuiverDesk is a business tool intended for users aged 18 and above. We do not knowingly
        collect data from children.
      </P>

      <H2>8. Changes to This Policy</H2>
      <P>
        We may update this policy from time to time. Material changes will be announced in the app
        or by email. Continued use of the service after changes constitutes acceptance.
      </P>

      <H2>9. Contact Us</H2>
      <P>
        For privacy questions or requests, contact us at <b>privacy@quiverdesk.com</b>. We respond
        to privacy requests within 7 working days.
      </P>
    </LegalShell>
  );
}
