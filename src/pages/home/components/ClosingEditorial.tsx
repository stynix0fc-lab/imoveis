import { Link } from 'react-router-dom';
import Container from '@/components/base/Container';
import Reveal from '@/components/base/Reveal';
import { splitImages } from '@/mocks/site';

export default function ClosingEditorial() {
  return (
    <section aria-labelledby="closing-editorial" className="bg-background-50 pb-12 pt-16 md:pb-16 md:pt-20">
      <Container>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 border-t border-background-300 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-x-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-foreground-600">
                MIRANTE / PRÓXIMO ENDEREÇO
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2
                id="closing-editorial"
                className="mt-5 font-heading text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-foreground-950 lg:text-[42px]"
              >
                Qual endereço faz sentido para a sua próxima fase?
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 max-w-[420px] text-[16px] leading-[1.62] text-foreground-700">
                Conte o que você procura — ou o imóvel que quer vender. A primeira conversa é sem compromisso
                e normalmente resolve mais do que uma lista de anúncios.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Link
                  to="/contato"
                  className="group inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-6 font-label text-[15px] font-semibold text-foreground-950 transition-colors duration-200 hover:bg-primary-400"
                >
                  Agendar uma conversa
                  <span className="flex h-4 w-4 items-center justify-center transition-transform duration-200 group-hover:translate-x-1.5 motion-reduce:transform-none">
                    <i className="ri-arrow-right-line" aria-hidden="true"></i>
                  </span>
                </Link>
                <a
                  href="tel:+551140028922"
                  className="inline-flex min-h-[48px] cursor-pointer items-center gap-2 whitespace-nowrap font-label text-[15px] font-semibold text-foreground-950 hover:text-accent-600"
                >
                  <span className="flex h-4 w-4 items-center justify-center text-[15px] text-accent-600"><i className="ri-phone-line" aria-hidden="true"></i></span>
                  (11) 4002-8922
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal variant="wipe" delay={150}>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-background-100 lg:aspect-auto lg:h-[420px]">
                <img
                  src={splitImages.closing}
                  alt="Fachada de edifício residencial nos Jardins ao anoitecer, com luzes acesas nos apartamentos"
                  title="Imóveis residenciais em São Paulo — Mirante Imóveis"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}