import { useMemo, useState } from 'react';
import Container from '@/components/base/Container';
import Section from '@/components/base/Section';
import SectionHeading from '@/components/base/SectionHeading';
import PageIntro from '@/components/base/PageIntro';
import PropertyCard from '@/components/base/PropertyCard';
import ButtonLink from '@/components/base/ButtonLink';
import { properties } from '@/mocks/site';
import PropertyFilters, { applyFilters, emptyFilters, type Filters } from './components/PropertyFilters';

const types = Array.from(new Set(properties.map((p) => p.type)));
const neighborhoods = Array.from(new Set(properties.map((p) => p.neighborhood)));

export default function Imoveis() {
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const results = useMemo(() => applyFilters(properties, filters), [filters]);

  return (
    <>
      <PageIntro
        eyebrow="Imóveis"
        title="A seleção que eu defenderia numa mesa de jantar."
        lead="Seis imóveis visitados por mim, com preço, condomínio, IPTU e metragem abertos. Se nenhum fizer sentido, me diga o que falta — a lista muda toda semana."
        aside={<ButtonLink to="/contato">Pedir uma seleção personalizada</ButtonLink>}
      />

      <Section labelledBy="lista-heading" divider>
        <Container>
          <SectionHeading
            id="lista-heading"
            eyebrow="Disponíveis agora"
            title="Filtre pelo que importa para você."
            lead="Todos os valores de venda já incluem o condomínio mensal informado. Para aluguel, o valor é a mensalidade do contrato."
          />

          <PropertyFilters
            filters={filters}
            onChange={setFilters}
            onClear={() => setFilters(emptyFilters)}
            resultCount={results.length}
            total={properties.length}
            types={types}
            neighborhoods={neighborhoods}
          />

          {results.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {results.map((p) => (
                <PropertyCard key={p.slug} property={p} />
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-lg border border-dashed border-background-300 bg-background-50 px-6 py-14 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background-100 text-[22px] text-foreground-600">
                <i className="ri-search-line" aria-hidden="true"></i>
              </span>
              <h3 className="mt-5 font-heading text-[22px] font-semibold text-foreground-950">Nenhum imóvel com esses filtros.</h3>
              <p className="mx-auto mt-2 max-w-[420px] text-[15px] leading-[1.6] text-foreground-700">
                A lista é curta de propósito. Limpe os filtros ou me conte o que procura — inclusive imóveis que ainda não estão publicados.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setFilters(emptyFilters)}
                  className="inline-flex min-h-[48px] cursor-pointer items-center justify-center whitespace-nowrap rounded-md bg-primary-500 px-6 font-label text-[15px] font-semibold text-foreground-950 hover:bg-primary-400"
                >
                  Limpar filtros
                </button>
                <ButtonLink to="/contato" variant="outline">Falar com a corretora</ButtonLink>
              </div>
            </div>
          )}
        </Container>
      </Section>

      <Section labelledBy="nota-heading" className="bg-background-100">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-5">
              <p className="mb-3 font-label text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-600 md:text-[13px]">Antes de agendar</p>
              <h2 id="nota-heading" className="font-heading text-[28px] font-semibold leading-[1.12] text-foreground-950 md:text-[36px]">
                Uma visita rende mais quando você já sabe o que perguntar.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="border-t border-background-300">
                {[
                  'Pergunte o valor real de condomínio dos últimos 12 meses, não só o do anúncio.',
                  'Confira a posição solar: manhã ou tarde muda completamente o uso da sala.',
                  'Peça a ata da última assembleia para entender obras previstas e rateios.',
                  'Verifique o prazo de vaga e a documentação do imóvel antes de qualquer sinal.',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 border-b border-background-200 py-4 text-[16px] leading-[1.55] text-foreground-950">
                    <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center text-[16px] text-accent-600">
                      <i className="ri-check-line" aria-hidden="true"></i>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}