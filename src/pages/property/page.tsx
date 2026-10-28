import { Link, useParams } from 'react-router-dom';
import Container from '@/components/base/Container';
import Section from '@/components/base/Section';
import SectionHeading from '@/components/base/SectionHeading';
import PropertyCard from '@/components/base/PropertyCard';
import ButtonLink from '@/components/base/ButtonLink';
import { brand, broker, properties, splitImages } from '@/mocks/site';
import { formatBRL, formatBRLExact, priceLabel } from '@/utils/format';

const specs = [
  { key: 'area', icon: 'ri-ruler-2-line', label: 'Área útil' },
  { key: 'beds', icon: 'ri-hotel-bed-line', label: 'Dormitórios' },
  { key: 'suites', icon: 'ri-hotel-bed-fill', label: 'Suítes' },
  { key: 'baths', icon: 'ri-drop-line', label: 'Banheiros' },
  { key: 'parking', icon: 'ri-car-line', label: 'Vagas' },
  { key: 'year', icon: 'ri-calendar-line', label: 'Ano' },
];

export default function PropertyDetail() {
  const { slug } = useParams();
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    return (
      <section className="bg-background-50 pb-16 pt-[140px] md:pb-24 md:pt-[180px]">
        <Container>
          <p className="font-label text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-600">Imóvel não encontrado</p>
          <h1 className="mt-4 font-heading text-[34px] font-semibold leading-[1.1] text-foreground-950 md:text-[46px]">
            Esse imóvel saiu da seleção.
          </h1>
          <p className="mt-4 max-w-[520px] text-[17px] leading-[1.6] text-foreground-700">
            A lista muda com frequência — alguns imóveis saem em poucos dias. Veja o que está disponível agora
            ou me conte o que você procura.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/imoveis">Ver imóveis disponíveis</ButtonLink>
            <ButtonLink to="/contato" variant="outline">Falar com a corretora</ButtonLink>
          </div>
        </Container>
      </section>
    );
  }

  const others = properties.filter((p) => p.slug !== property.slug).slice(0, 3);
  const brokerAvatar = splitImages.about;
  const monthly = property.condoFee + Math.round(property.iptu / 12);
  const specValues: Record<string, string> = {
    area: `${property.area} m²`,
    beds: String(property.beds),
    suites: String(property.suites),
    baths: String(property.baths),
    parking: String(property.parking),
    year: String(property.year),
  };

  return (
    <>
      <article>
        <section className="bg-background-50 pb-10 pt-[104px] md:pb-12 md:pt-[136px]">
          <Container>
            <nav aria-label="Trilha de navegação" className="flex flex-wrap items-center gap-1.5 text-[13px] text-foreground-600">
              <Link to="/" className="cursor-pointer hover:text-foreground-950">Início</Link>
              <span aria-hidden="true">/</span>
              <Link to="/imoveis" className="cursor-pointer hover:text-foreground-950">Imóveis</Link>
              <span aria-hidden="true">/</span>
              <span className="text-foreground-950">{property.neighborhood}</span>
            </nav>

            <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[720px]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary-100 px-3 py-1 font-label text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-700">
                    {property.purpose}
                  </span>
                  <span className="rounded-full border border-background-300 px-3 py-1 font-label text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground-700">
                    {property.type}
                  </span>
                  {property.badge && (
                    <span className="rounded-full bg-secondary-100 px-3 py-1 font-label text-[11px] font-semibold uppercase tracking-[0.12em] text-secondary-900">
                      {property.badge}
                    </span>
                  )}
                </div>
                <h1 className="mt-4 font-heading text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground-950 md:text-[46px] lg:text-[54px]">
                  {property.title}
                </h1>
                <p className="mt-3 flex items-center gap-2 text-[15px] text-foreground-700">
                  <span className="flex h-4 w-4 items-center justify-center text-[16px] text-accent-600"><i className="ri-map-pin-line" aria-hidden="true"></i></span>
                  {property.address} · {property.city}
                </p>
              </div>
              <div className="shrink-0">
                <p className="font-heading text-[28px] font-semibold leading-none text-foreground-950 md:text-[34px]">
                  {priceLabel(property.price, property.purpose)}
                </p>
                <p className="mt-2 text-[14px] text-foreground-600">Condomínio {formatBRL(property.condoFee)} · IPTU {formatBRL(property.iptu)}/ano</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-8">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-background-100">
                  <img
                    src={property.image}
                    alt={`${property.title} — ${property.neighborhood}, ${property.city}`}
                    title={`${property.title} · ${property.area} m² em ${property.neighborhood}`}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <dl className="mt-6 grid grid-cols-2 gap-y-5 border-y border-background-200 py-6 sm:grid-cols-3 lg:grid-cols-6">
                  {specs.map((s) => (
                    <div key={s.key}>
                      <dt className="flex items-center gap-1.5 text-[12px] uppercase tracking-[0.1em] text-foreground-600">
                        <span className="flex h-4 w-4 items-center justify-center text-[15px] text-accent-600"><i className={s.icon} aria-hidden="true"></i></span>
                        {s.label}
                      </dt>
                      <dd className="mt-1.5 font-heading text-[19px] font-semibold text-foreground-950">{specValues[s.key]}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-10">
                  <h2 className="font-heading text-[24px] font-semibold leading-[1.2] text-foreground-950 md:text-[30px]">Sobre o imóvel</h2>
                  <p className="mt-4 text-[16px] leading-[1.7] text-foreground-700 md:text-[17px]">{property.description}</p>
                </div>

                <div className="mt-10 border-t border-background-200 pt-8">
                  <h2 className="font-heading text-[22px] font-semibold text-foreground-950 md:text-[26px]">O que este imóvel tem</h2>
                  <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2">
                    {property.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 border-b border-background-200 py-3 text-[15px] leading-[1.5] text-foreground-950">
                        <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center text-[15px] text-accent-600"><i className="ri-check-line" aria-hidden="true"></i></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 rounded-lg border border-background-200 bg-background-100 p-6">
                  <h2 className="font-heading text-[20px] font-semibold text-foreground-950">Custo mensal estimado</h2>
                  <dl className="mt-4 space-y-2.5 text-[15px] text-foreground-700">
                    <div className="flex items-center justify-between gap-4 border-b border-background-300 pb-2.5">
                      <dt>{property.purpose === 'Aluguel' ? 'Aluguel mensal' : 'Valor do imóvel'}</dt>
                      <dd className="font-semibold text-foreground-950">{formatBRLExact(property.price)}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4 border-b border-background-300 pb-2.5">
                      <dt>Condomínio</dt>
                      <dd className="font-semibold text-foreground-950">{formatBRL(property.condoFee)}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4 border-b border-background-300 pb-2.5">
                      <dt>IPTU (mensal)</dt>
                      <dd className="font-semibold text-foreground-950">{formatBRL(Math.round(property.iptu / 12))}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4 pt-1">
                      <dt className="font-semibold text-foreground-950">Total mensal de moradia</dt>
                      <dd className="font-heading text-[20px] font-semibold text-foreground-950">{formatBRL(monthly)}</dd>
                    </div>
                  </dl>
                  <p className="mt-3 text-[13px] leading-[1.5] text-foreground-600">
                    Condomínio e IPTU informados pelo proprietário. O total mensal considera apenas condomínio e IPTU; financiamento à parte, simulado com o banco.
                  </p>
                </div>
              </div>

              <aside className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <div className="rounded-lg border border-background-200 bg-background-50 p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-background-100">
                        <img src={brokerAvatar} alt={broker.name} className="h-full w-full object-cover object-top" />
                      </div>
                      <div>
                        <p className="font-heading text-[17px] font-semibold text-foreground-950">{broker.name}</p>
                        <p className="text-[13px] text-foreground-600">{broker.role} · {brand.creci}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-[15px] leading-[1.6] text-foreground-700">
                      "Eu visito cada imóvel da lista antes de publicar. Se quiser, mando também os pontos que não aparecem nas fotos."
                    </p>
                    <div className="mt-5 flex flex-col gap-2.5">
                      <Link
                        to={`/contato?imovel=${property.slug}`}
                        className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-5 font-label text-[15px] font-semibold text-foreground-950 transition-colors duration-200 hover:bg-primary-400"
                      >
                        Agendar uma visita
                        <span className="flex h-4 w-4 items-center justify-center"><i className="ri-calendar-check-line" aria-hidden="true"></i></span>
                      </Link>
                      <a
                        href="https://wa.me/5511988124477"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-background-300 px-5 font-label text-[15px] font-semibold text-foreground-950 transition-colors duration-200 hover:border-foreground-950"
                      >
                        <span className="flex h-4 w-4 items-center justify-center text-[16px]"><i className="ri-whatsapp-line" aria-hidden="true"></i></span>
                        Chamar no WhatsApp
                      </a>
                      <a
                        href="tel:+551140028922"
                        className="inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-label text-[14px] font-semibold text-foreground-700 hover:text-foreground-950"
                      >
                        <span className="flex h-4 w-4 items-center justify-center text-[15px]"><i className="ri-phone-line" aria-hidden="true"></i></span>
                        {brand.phone}
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg border border-background-200 bg-background-100 p-5">
                    <h2 className="font-label text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground-600">Documentação</h2>
                    <ul className="mt-3 space-y-2 text-[14px] leading-[1.5] text-foreground-950">
                      <li className="flex items-center gap-2"><span className="flex h-4 w-4 items-center justify-center text-[14px] text-accent-600"><i className="ri-check-line" aria-hidden="true"></i></span>Matrícula atualizada</li>
                      <li className="flex items-center gap-2"><span className="flex h-4 w-4 items-center justify-center text-[14px] text-accent-600"><i className="ri-check-line" aria-hidden="true"></i></span>Certidões negativas</li>
                      <li className="flex items-center gap-2"><span className="flex h-4 w-4 items-center justify-center text-[14px] text-accent-600"><i className="ri-check-line" aria-hidden="true"></i></span>Ata de assembleia recente</li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </section>
      </article>

      <Section labelledBy="outros-heading" className="bg-background-100" divider>
        <Container>
          <SectionHeading
            id="outros-heading"
            eyebrow="Continue olhando"
            title="Outros imóveis na seleção."
            aside={<ButtonLink to="/imoveis" variant="text">Ver todos</ButtonLink>}
          />
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <PropertyCard key={p.slug} property={p} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}