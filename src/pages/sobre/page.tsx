import Container from '@/components/base/Container';
import Section from '@/components/base/Section';
import SectionHeading from '@/components/base/SectionHeading';
import PageIntro from '@/components/base/PageIntro';
import NumberedSteps from '@/components/base/NumberedSteps';
import ButtonLink from '@/components/base/ButtonLink';
import CTASection from '@/components/feature/CTASection';
import { brand, broker, splitImages, stats } from '@/mocks/site';

const values = [
  {
    icon: 'ri-eye-line',
    title: 'Transparência',
    text: 'Preço de anúncio, preço de fechamento e custos mensais aparecem no mesmo lugar. Se o imóvel tem um defeito, você ouve antes da visita.',
  },
  {
    icon: 'ri-filter-3-line',
    title: 'Curadoria',
    text: 'Trabalho com poucos imóveis por vez. É o único jeito de conhecer cada um de verdade e não empurrar opção só para fechar a semana.',
  },
  {
    icon: 'ri-lock-2-line',
    title: 'Discrição',
    text: 'Muitos negócios começam antes de virarem anúncio. Sua situação financeira e seus prazos ficam entre nós.',
  },
  {
    icon: 'ri-time-line',
    title: 'Disponibilidade',
    text: 'Quem responde é quem atende. Sem call center e sem repassar seu caso para três pessoas diferentes.',
  },
];

const workSteps = [
  { title: 'Conversa e diagnóstico', text: 'Entendo o momento: mudança de bairro, aumento de família, venda por herança, troca de investimento. Cada um pede um caminho diferente.' },
  { title: 'Pesquisa e comparativo', text: 'Monto a lista e o comparativo por escrito, com o custo mensal real e o que precisa ser conversado em cada imóvel.' },
  { title: 'Negociação acompanhada', text: 'Conduzo proposta e contraproposta e trago o advogado parceiro para revisar contrato e documentação.' },
];

export default function Sobre() {
  return (
    <>
      <PageIntro
        eyebrow="Sobre"
        title="Uma corretora, um bairro e uma lista curta."
        lead="Sou a Helena. Trabalho com imóveis residenciais na zona oeste de São Paulo desde 2013 e atendo pessoalmente cada cliente que chega aqui."
        aside={<ButtonLink to="/contato">Marcar uma conversa</ButtonLink>}
      />

      <Section labelledBy="quem-heading" divider>
        <Container>
          <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-background-100">
                <img
                  src={splitImages.about}
                  alt={`${broker.name}, corretora de imóveis responsável pelo Mirante Imóveis`}
                  title="Helena Vasconcelos — corretora de imóveis em São Paulo"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-background-200 pt-5">
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.1em] text-foreground-600">Registro</dt>
                  <dd className="mt-1 font-label text-[15px] font-semibold text-foreground-950">{brand.creci}</dd>
                </div>
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.1em] text-foreground-600">Desde</dt>
                  <dd className="mt-1 font-label text-[15px] font-semibold text-foreground-950">{broker.since}</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-7">
              <h2 id="quem-heading" className="font-heading text-[28px] font-semibold leading-[1.14] tracking-[-0.015em] text-foreground-950 md:text-[36px] lg:text-[42px]">
                Comecei vendendo apartamentos que eu mesma teria dificuldade em morar.
              </h2>
              <div className="mt-5 space-y-4 text-[16px] leading-[1.7] text-foreground-700 md:text-[17px]">
                <p>{broker.bio}</p>
                <p>
                  Em 2013, depois de dez anos trabalhando com incorporação, mudei para a ponta que fala com quem vai morar.
                  Aprendi que a maior parte das dúvidas não é sobre metragem — é sobre barulho de manhã, vizinhança,
                  contas do mês e a sensação de chegar em casa.
                </p>
                <p>
                  Hoje o Mirante é uma operação pequena de propósito. Eu visito os imóveis antes de publicar, escrevo os
                  comentários que aparecem nas fichas e acompanho cada negociação até a entrega das chaves. Quando não sei
                  algo — e às vezes não sei — digo que vou verificar e volto com a resposta.
                </p>
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-background-200 pt-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <p className="font-heading text-[26px] font-semibold leading-none text-foreground-950">
                        {s.value}
                        <span className="ml-1 font-label text-[12px] font-medium uppercase tracking-[0.08em] text-accent-600">{s.suffix}</span>
                      </p>
                      <p className="mt-1.5 text-[13px] leading-[1.4] text-foreground-600">{s.label}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      <Section labelledBy="values-heading" className="bg-background-100">
        <Container>
          <SectionHeading id="values-heading" eyebrow="Como eu trabalho" title="Quatro coisas que não negocio." />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <article key={v.title} className="flex h-full flex-col rounded-lg border border-background-200 bg-background-50 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-[20px] text-accent-600">
                  <i className={v.icon} aria-hidden="true"></i>
                </span>
                <h3 className="mt-6 font-heading text-[20px] font-semibold leading-[1.2] text-foreground-950">{v.title}</h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-foreground-700">{v.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section labelledBy="work-heading">
        <Container>
          <SectionHeading
            id="work-heading"
            eyebrow="Atendimento"
            title="O que acontece quando você me chama."
          />
          <NumberedSteps steps={workSteps} />
        </Container>
      </Section>

      <CTASection
        title="Conversar é mais rápido do que preencher formulário."
        text="Se preferir, ligue. Se preferir escrever, o formulário chega direto no meu e-mail e eu respondo pessoalmente."
        secondaryLabel="Ver imóveis primeiro"
      />
    </>
  );
}