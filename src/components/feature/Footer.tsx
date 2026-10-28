import { Link } from 'react-router-dom';
import Container from '@/components/base/Container';
import { brand, navItems, properties } from '@/mocks/site';

export default function Footer() {
  const featured = properties.slice(0, 4);

  return (
    <footer className="bg-primary-950">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2 md:py-16 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <Link to="/" className="cursor-pointer font-heading text-[19px] font-bold tracking-[0.12em] text-background-50">
              {brand.name}
            </Link>
            <p className="mt-4 max-w-[320px] text-[15px] leading-[1.6] text-background-200/85">
              Imóveis residenciais em São Paulo, com curadoria de verdade e conversa franca sobre preço,
              condomínio e documentação.
            </p>
            <p className="mt-5 text-[13px] uppercase tracking-[0.14em] text-primary-300">{brand.descriptor}</p>
            <p className="mt-2 text-[14px] leading-[1.6] text-background-200/75">{brand.address}</p>
          </div>

          <nav aria-label="Rodapé" className="lg:col-span-2">
            <h4 className="font-label text-[13px] font-semibold uppercase tracking-[0.12em] text-primary-300">
              <Link to="/" className="cursor-pointer hover:text-background-50">Navegação</Link>
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="cursor-pointer text-[15px] text-background-100 hover:text-primary-300">{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h4 className="font-label text-[13px] font-semibold uppercase tracking-[0.12em] text-primary-300">
              <Link to="/imoveis" className="cursor-pointer hover:text-background-50">Imóveis em destaque</Link>
            </h4>
            <ul className="mt-4 space-y-2.5">
              {featured.map((p) => (
                <li key={p.slug}>
                  <Link to={`/imoveis/${p.slug}`} className="cursor-pointer text-[15px] leading-[1.45] text-background-100 hover:text-primary-300">
                    {p.title}
                    <span className="mt-0.5 block text-[13px] text-background-300/70">{p.neighborhood} · {p.area} m²</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-label text-[13px] font-semibold uppercase tracking-[0.12em] text-primary-300">Contato</h4>
            <ul className="mt-4 space-y-3 text-[15px] leading-[1.6] text-background-100">
              <li>
                <a href="tel:+551140028922" className="flex cursor-pointer items-center gap-2 hover:text-primary-300">
                  <span className="flex h-4 w-4 items-center justify-center text-[15px] text-primary-300"><i className="ri-phone-line" aria-hidden="true"></i></span>
                  {brand.phone}
                </a>
              </li>
              <li>
                <a href="mailto:oi@miranteimoveis.com.br" className="flex cursor-pointer items-center gap-2 hover:text-primary-300">
                  <span className="flex h-4 w-4 items-center justify-center text-[15px] text-primary-300"><i className="ri-mail-line" aria-hidden="true"></i></span>
                  {brand.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-[14px] leading-[1.6] text-background-200/75">{brand.hours}</p>
            <Link
              to="/contato"
              className="mt-5 inline-flex min-h-[44px] cursor-pointer items-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-5 font-label text-[14px] font-semibold text-foreground-950 transition-colors duration-200 hover:bg-primary-400"
            >
              Agendar uma conversa
              <span className="flex h-4 w-4 items-center justify-center"><i className="ri-arrow-right-line" aria-hidden="true"></i></span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-background-50/15 py-6 text-[13px] text-background-200/70 sm:flex-row sm:justify-between">
          <p>© 2026 {brand.full}. Todos os direitos reservados.</p>
          <p>{brand.creci} · Corretora responsável: Helena Vasconcelos</p>
        </div>
      </Container>
    </footer>
  );
}