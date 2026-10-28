import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Container from '@/components/base/Container';
import Section from '@/components/base/Section';
import SectionHeading from '@/components/base/SectionHeading';
import PageIntro from '@/components/base/PageIntro';
import InquiryForm from './components/InquiryForm';
import FaqList from './components/FaqList';
import { brand, properties } from '@/mocks/site';

const channels = [
  { icon: 'ri-phone-line', label: 'Telefone', value: brand.phone, href: 'tel:+551140028922' },
  { icon: 'ri-whatsapp-line', label: 'WhatsApp', value: brand.whatsapp, href: 'https://wa.me/5511988124477' },
  { icon: 'ri-mail-line', label: 'E-mail', value: brand.email, href: 'mailto:oi@miranteimoveis.com.br' },
  { icon: 'ri-map-pin-line', label: 'Escritório', value: brand.address, href: '' },
];

export default function Contato() {
  const [params] = useSearchParams();
  const slug = params.get('imovel');
  const property = slug ? properties.find((p) => p.slug === slug) : undefined;

  const initialMessage = useMemo(() => (
    property ? `Tenho interesse no imóvel "${property.title}" (${property.neighborhood}). Gostaria de agendar uma visita.` : ''
  ), [property]);

  return (
    <>
      <PageIntro
        eyebrow="Contato"
        title="Me conte o que você procura."
        lead="Respondo pessoalmente em até dois dias úteis. Se a dúvida for rápida, o WhatsApp costuma ser mais ágil — e não existe robô do outro lado."
        aside={
          <a
            href="https://wa.me/5511988124477"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-6 font-label text-[15px] font-semibold text-foreground-950 transition-colors duration-200 hover:bg-primary-400"
          >
            <span className="flex h-4 w-4 items-center justify-center text-[16px]"><i className="ri-whatsapp-line" aria-hidden="true"></i></span>
            Chamar no WhatsApp
          </a>
        }
      />

      <Section labelledBy="form-heading" divider>
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="form-heading" className="font-heading text-[28px] font-semibold leading-[1.12] text-foreground-950 md:text-[34px]">
                Formulário
              </h2>
              <p className="mt-4 max-w-[360px] text-[16px] leading-[1.6] text-foreground-700">
                Quanto mais contexto você der, mais útil fica a primeira resposta. Todos os campos são obrigatórios, exceto os marcados.
              </p>

              <ul className="mt-8 border-t border-background-200">
                {channels.map((c) => (
                  <li key={c.label} className="border-b border-background-200 py-4">
                    <p className="flex items-center gap-2 font-label text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground-600">
                      <span className="flex h-4 w-4 items-center justify-center text-[15px] text-accent-600"><i className={c.icon} aria-hidden="true"></i></span>
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="mt-1.5 block cursor-pointer text-[16px] leading-[1.5] text-foreground-950 hover:text-accent-600"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1.5 text-[16px] leading-[1.5] text-foreground-950">{c.value}</p>
                    )}
                  </li>
                ))}
                <li className="py-4">
                  <p className="font-label text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground-600">Atendimento</p>
                  <p className="mt-1.5 text-[16px] leading-[1.5] text-foreground-950">{brand.hours}</p>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-8">
              {property && (
                <div className="mb-5 flex flex-col gap-3 rounded-md border border-primary-300 bg-primary-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[14px] leading-[1.5] text-foreground-950">
                    <span className="font-semibold">Você está falando sobre:</span> {property.title} — {property.neighborhood}
                  </p>
                  <Link to={`/imoveis/${property.slug}`} className="shrink-0 cursor-pointer whitespace-nowrap font-label text-[13px] font-semibold text-accent-700 hover:text-accent-900">
                    Ver o imóvel
                  </Link>
                </div>
              )}
              <InquiryForm key={property?.slug ?? 'geral'} initialMode="comprar" initialMessage={initialMessage} />
            </div>
          </div>
        </Container>
      </Section>

      <Section labelledBy="office-heading" className="bg-background-100">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <p className="mb-3 font-label text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-600 md:text-[13px]">Escritório</p>
              <h2 id="office-heading" className="font-heading text-[28px] font-semibold leading-[1.12] text-foreground-950 md:text-[36px]">
                Um café na Vila Madalena costuma resolver.
              </h2>
              <p className="mt-4 max-w-[420px] text-[16px] leading-[1.6] text-foreground-700">
                O atendimento é com hora marcada, para não ter espera. Se preferir, também vou até o seu imóvel
                para a avaliação inicial.
              </p>
              <dl className="mt-7 space-y-3 border-t border-background-300 pt-5 text-[15px]">
                <div>
                  <dt className="font-label text-[12px] uppercase tracking-[0.1em] text-foreground-600">Endereço</dt>
                  <dd className="mt-1 text-foreground-950">{brand.address}</dd>
                </div>
                <div>
                  <dt className="font-label text-[12px] uppercase tracking-[0.1em] text-foreground-600">Horário</dt>
                  <dd className="mt-1 text-foreground-950">{brand.hours}</dd>
                </div>
                <div>
                  <dt className="font-label text-[12px] uppercase tracking-[0.1em] text-foreground-600">Registro profissional</dt>
                  <dd className="mt-1 text-foreground-950">{brand.creci}</dd>
                </div>
              </dl>
            </div>
            <div className="lg:col-span-7">
              <div className="h-[320px] w-full overflow-hidden rounded-lg border border-background-200 bg-background-50 md:h-[400px]">
                <iframe
                  title="Mapa do escritório Mirante Imóveis na Vila Madalena"
                  src="https://www.google.com/maps?q=Rua+Harmonia+412,+Vila+Madalena,+S%C3%A3o+Paulo&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section labelledBy="faq-heading">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="mb-3 font-label text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-600 md:text-[13px]">Dúvidas</p>
              <h2 id="faq-heading" className="font-heading text-[28px] font-semibold leading-[1.12] text-foreground-950 md:text-[34px] lg:text-[42px]">
                Perguntas que aparecem sempre.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <FaqList />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}