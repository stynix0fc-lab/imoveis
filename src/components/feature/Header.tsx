import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from '@/components/base/Container';
import ButtonLink from '@/components/base/ButtonLink';
import { brand, navItems } from '@/mocks/site';

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const solid = scrolled || open || pathname !== '/';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${solid ? 'border-b border-background-200 bg-background-50' : 'border-b border-transparent bg-transparent'}`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-[72px] lg:h-20">
          <Link to="/" className="cursor-pointer whitespace-nowrap font-heading text-[19px] font-bold tracking-[0.12em] text-foreground-950" aria-label={`${brand.full} — página inicial`}>
            {brand.name}
          </Link>
          <nav aria-label="Principal" className="flex items-center gap-2 sm:gap-5">
            <a
              href={`tel:+551140028922`}
              className="hidden cursor-pointer items-center gap-2 whitespace-nowrap py-2 font-label text-[13px] font-semibold text-foreground-700 transition-colors duration-200 hover:text-foreground-950 lg:flex"
            >
              <span className="flex h-4 w-4 items-center justify-center text-[15px]"><i className="ri-phone-line" aria-hidden="true"></i></span>
              {brand.phone}
            </a>
            <NavLink
              to="/contato"
              className={({ isActive }) => `cursor-pointer whitespace-nowrap py-2 font-label text-[13px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ${isActive ? 'text-foreground-950 underline decoration-primary-500 decoration-2 underline-offset-[6px]' : 'text-foreground-700 hover:text-foreground-950'}`}
            >
              Contato
            </NavLink>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              className="flex h-12 cursor-pointer items-center gap-2 whitespace-nowrap font-label text-[13px] font-semibold uppercase tracking-[0.16em] text-foreground-950"
            >
              <span className="hidden sm:inline">{open ? 'Fechar' : 'Menu'}</span>
              <span className="flex h-6 w-6 items-center justify-center text-[22px]"><i className={open ? 'ri-close-line' : 'ri-menu-line'} aria-hidden="true"></i></span>
            </button>
          </nav>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-16 bg-background-50 transition-opacity duration-[250ms] md:top-[72px] lg:top-20 ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <Container>
          <nav aria-label="Site" className="flex flex-col pt-4">
            {navItems.map((item, i) => (
              <NavLink
                key={item.to}
                ref={i === 0 ? firstLinkRef : undefined}
                to={item.to}
                end={item.to === '/'}
                tabIndex={open ? 0 : -1}
                className={({ isActive }) => `flex min-h-[56px] cursor-pointer items-center justify-between border-b border-background-200 font-heading text-[22px] font-semibold ${isActive ? 'text-accent-500' : 'text-foreground-950'}`}
              >
                {item.label}
                <span className="flex h-5 w-5 items-center justify-center text-[18px] text-foreground-600"><i className="ri-arrow-right-line" aria-hidden="true"></i></span>
              </NavLink>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <ButtonLink to="/contato" className="w-full">Falar com a corretora</ButtonLink>
              <ButtonLink to="/imoveis" variant="outline" className="w-full">Ver imóveis disponíveis</ButtonLink>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}