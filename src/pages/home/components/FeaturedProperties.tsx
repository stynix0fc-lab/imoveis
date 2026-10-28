import Container from '@/components/base/Container';
import Section from '@/components/base/Section';
import SectionHeading from '@/components/base/SectionHeading';
import ButtonLink from '@/components/base/ButtonLink';
import PropertyCard from '@/components/base/PropertyCard';
import { properties } from '@/mocks/site';

export default function FeaturedProperties() {
  const featured = properties.slice(0, 3);

  return (
    <Section labelledBy="destaques-heading" divider>
      <Container>
        <SectionHeading
          id="destaques-heading"
          eyebrow="Seleção atual"
          title="Imóveis que eu mostraria para um amigo."
          lead="Poucos por vez, todos já visitados por mim. Os valores incluem condomínio e IPTU para você comparar sem surpresa."
          aside={<ButtonLink to="/imoveis" variant="text">Ver todos os imóveis</ButtonLink>}
        />
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}