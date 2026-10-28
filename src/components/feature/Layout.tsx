import { useEffect } from 'react';
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { properties } from '@/mocks/site';

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Mirante Imóveis | Corretor de Imóveis em São Paulo',
    description: 'Curadoria de imóveis residenciais na zona oeste de São Paulo. Apartamentos, casas e coberturas selecionados um a um por Helena Vasconcelos.',
  },
  '/imoveis': {
    title: 'Imóveis à venda e para alugar | Mirante Imóveis',
    description: 'Veja a seleção atual de apartamentos, casas, coberturas e studios à venda e para alugar em São Paulo, com preço, condomínio e metragem.',
  },
  '/servicos': {
    title: 'Serviços | Compra, venda e locação com corretor',
    description: 'Compra assistida, venda do seu imóvel, avaliação de mercado e administração de locação. Entenda como cada serviço funciona na prática.',
  },
  '/sobre': {
    title: 'Sobre Helena Vasconcelos | Mirante Imóveis',
    description: 'Corretora de imóveis desde 2013 na zona oeste de São Paulo. Conheça o jeito de trabalhar do Mirante: curadoria, transparência e acompanhamento.',
  },
  '/contato': {
    title: 'Contato | Mirante Imóveis em São Paulo',
    description: 'Fale com a corretora, agende uma visita ou peça uma avaliação do seu imóvel. Atendimento em São Paulo, de segunda a sexta, das 9h às 18h.',
  },
};

function metaFor(pathname: string) {
  if (pageMeta[pathname]) return pageMeta[pathname];
  if (pathname.startsWith('/imoveis/')) {
    const slug = pathname.replace('/imoveis/', '');
    const property = properties.find((p) => p.slug === slug);
    if (property) {
      return {
        title: `${property.title} — ${property.neighborhood} | Mirante Imóveis`,
        description: `${property.summary} ${property.area} m², ${property.beds} dormitórios e ${property.parking} vagas em ${property.neighborhood}, ${property.city}.`,
      };
    }
  }
  return pageMeta['/'];
}

export default function Layout() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    const meta = metaFor(pathname);
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description);
  }, [pathname]);

  useEffect(() => {
    // Back/forward: leave restoration to the browser.
    if (navType === 'POP') return undefined;
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const frame = requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ block: 'start' });
        else window.scrollTo(0, 0);
      });
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash, navType]);

  return (
    <div className="min-h-screen bg-background-50 font-body text-foreground-950">
      <Header />
      <main key={pathname} className="page-enter">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}