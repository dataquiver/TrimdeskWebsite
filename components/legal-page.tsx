export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="border-b border-line bg-section py-14 text-center">
        <div className="container-site">
          <h1 className="text-3xl font-extrabold md:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-ink-light">Last updated: {updated}</p>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-site prose-quiver max-w-3xl">{children}</div>
      </section>
    </>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-3 mt-10 text-xl font-bold text-ink first:mt-0">{children}</h2>;
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-[15px] leading-relaxed text-ink-secondary">{children}</p>;
}

export function UL({ items }: { items: string[] }) {
  return (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-[15px] leading-relaxed text-ink-secondary">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
