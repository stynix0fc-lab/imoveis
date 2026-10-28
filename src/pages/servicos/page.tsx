import Container from '@/components/base/Container';
import Section from '@/components/base/Section';
import SectionHeading from '@/components/base/SectionHeading';
import PageIntro from '@/components/base/PageIntro';
import ServiceCard from '@/components/base/ServiceCard';
import SplitSection from '@/components/base/SplitSection';
import NumberedSteps from '@/components/base/NumberedSteps';
import ButtonLink from '@/components/base/ButtonLink';
import CTASection from '@/components/feature/CTASection';
import { approachSteps, coreServices, splitImages } from '@/mocks/site';

const fees = [
  {
    icon: 'ri-user-follow-line',
    title: 'Para quem compra',
    text: 'Sem custo de honorários. A curadoria, as visitas acompanhadas e a análise de documentação estão incluídas no atendimento.',
  },
  {
    icon: 'ri-home-smile-line',
    title: 'Para quem vende',
    text: 'Comissão combinada por escrito antes da primeira visita, com percentual definido e sem exclusividade forçada.',
  },
  {
    icon: 'ri-key-line',
    title: 'Para locação',
    text: 'Taxa de intermediação no fechamento e administração mensal opcional, com percentual sobre o aluguel.',
  },
];

export default function Servicos() {
  return (
    <>
      <PageIntro
        eyebrow="Serviços"
        title="Do primeiro café até a assinatura da escritura."
        lead="Comprar ou vender um imóvel envolve banco, cartório, condomínio e prazos. Meu trabalho é organizar essa fila para você não descobrir um problema na véspera."
        aside={<ButtonLink to="/contato">Falar sobre meu imóvel</ButtonLink>}
      />

      <Section labelledBy="core-heading" divider>
        <Container>
          <SectionHeading
            id="core-heading"
            eyebrow="O que eu faço"
            title="Quatro serviços, um jeito só de trabalhar."
            lead="Você pode contratar apenas a avaliação ou o processo inteiro. O escopo fica claro antes de qualquer compromisso."
          />
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
            {coreServices.map((s, i) => (
              <ServiceCard key={s.id} index={i + 1} title={s.title} summary={s.summary} image={s.image} tasks={s.tasks} />
            ))}
          </div>
        </Container>
      </Section>

      <SplitSection
        id="avaliacao-heading"
        divider
        eyebrow="Avaliação honesta"
        title="Um preço que o mercado paga, não o preço que dá vontade de pedir."
        paragraphs={[
          'Antes de anunciar, cruzo imóveis semelhantes que realmente venderam no bairro nos últimos seis meses — metragem, andar, estado de conservação e tempo de mercado. O resultado é uma faixa de preço com prazo estimado de venda.',
          'Também aponto o que está travando a negociação: uma reforma de banheiro, a falta de vaga, uma pendência de condomínio. Em muitos casos, resolver um detalhe vale mais do que baixar o preço.',
        ]}
        points={['Relatório curto, direto e sem compromisso de venda', 'Comparativo com imóveis realmente vendidos', 'Recomendações de preparação que cabem no orçamento']}
        image={splitImages.valuation}
        imageAlt="Trena e prancheta com anotações técnicas em uma sala vazia e clara durante avaliação de imóvel"
        action={<ButtonLink to="/contato" variant="outline">Pedir uma avaliação</ButtonLink>}
      />

      <Section labelledBy="fees-heading" className="bg-background-100">
        <Container>
          <SectionHeading
            id="fees-heading"
            eyebrow="Remuneração"
            title="Como eu cobro, sem letra miúda."
            lead="Honorários são conversados no início, por escrito, antes de qualquer visita ou anúncio."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {fees.map((f) => (
              <article key={f.title} className="flex h-full flex-col rounded-lg border border-background-200 bg-background-50 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-[20px] text-accent-600">
                  <i className={f.icon} aria-hidden="true"></i>
                </span>
                <h3 className="mt-6 font-heading text-[20px] font-semibold text-foreground-950 md:text-[22px]">{f.title}</h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-foreground-700">{f.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section labelledBy="process-heading">
        <Container>
          <SectionHeading
            id="process-heading"
            eyebrow="Etapas"
            title="O caminho até as chaves."
            lead="Cada etapa tem entrega definida. Você sempre sabe em que ponto do processo está."
          />
          <NumberedSteps steps={approachSteps} />
        </Container>
      </Section>

      <CTASection
        title="Quer começar pela conversa, não pelo anúncio?"
        text="Me conte o que você procura ou o imóvel que pretende vender. Respondo em até dois dias úteis com os próximos passos possíveis."
      />
    </>
  );
}