import Container from '@/components/base/Container';
import { stats } from '@/mocks/site';

export default function StatsBand() {
  return (
    <section aria-label="Números do Mirante Imóveis" className="border-y border-background-200 bg-background-100 py-12 md:py-16">
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l border-background-300 pl-4 md:pl-6">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <p className="flex items-baseline gap-1.5 font-heading text-[32px] font-semibold leading-none text-foreground-950 md:text-[42px]">
                  {s.value}
                  <span className="font-label text-[13px] font-medium uppercase tracking-[0.1em] text-accent-600 md:text-[14px]">{s.suffix}</span>
                </p>
                <p className="mt-2.5 max-w-[180px] text-[14px] leading-[1.45] text-foreground-700">{s.label}</p>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}