import Container from '@/components/base/Container';
import Section from '@/components/base/Section';
import SectionHeading from '@/components/base/SectionHeading';
import ButtonLink from '@/components/base/ButtonLink';
import ServiceCard from '@/components/base/ServiceCard';
import NumberedSteps from '@/components/base/NumberedSteps';
import { coreServices, approachSteps } from '@/mocks/site';
import HeroStage from './components/HeroStage';
import AccordionGallery from './components/AccordionGallery';
import FeaturedProperties from './components/FeaturedProperties';
import StatsBand from './components/StatsBand';
import Testimonials from './components/Testimonials';
import ClosingEditorial from './components/ClosingEditorial';

export default function Home() {
  return (
    <>
      <HeroStage />

      <FeaturedProperties />

      <AccordionGallery />

      <StatsBand />

      <Section labelledBy="services-heading">
        <Container>
          <SectionHeading
            id="services-heading"
            eyebrow="Serviços"
            title="O que eu faço além de abrir portas."
            lead="Comprar, vender ou alugar envolve documentação, banco, condomínio e prazos. Cada serviço abaixo existe para tirar uma dessas partes do seu colo."
            aside={<ButtonLink to="/servicos" variant="text">Detalhes dos serviços</ButtonLink>}
          />
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
            {coreServices.map((s, i) => (
              <ServiceCard key={s.id} index={i + 1} title={s.title} summary={s.summary} image={s.image} tasks={s.tasks} />
            ))}
          </div>
        </Container>
      </Section>

      <Section labelledBy="approach-heading" className="bg-background-100" divider>
        <Container>
          <SectionHeading
            id="approach-heading"
            eyebrow="Como funciona"
            title="Da primeira conversa à entrega das chaves."
            lead="Sem etapa surpresa e sem taxa escondida: cada fase tem um combinado claro e um responsável."
          />
          <NumberedSteps steps={approachSteps} />
        </Container>
      </Section>

      <Testimonials />

      <ClosingEditorial />
    </>
  );
}