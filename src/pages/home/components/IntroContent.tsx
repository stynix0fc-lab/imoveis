import ButtonLink from '@/components/base/ButtonLink';

const pillars = [
  { icon: 'ri-search-eye-line', label: 'Curadoria real' },
  { icon: 'ri-walk-line', label: 'Visitas com contexto' },
  { icon: 'ri-file-chart-line', label: 'Números abertos' },
  { icon: 'ri-key-2-line', label: 'Até a entrega das chaves' },
];

export default function IntroContent() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-6">
          <p className="mb-3 font-label text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-500 md:text-[13px]">Como trabalhamos</p>
          <h2 id="intro-heading" className="font-heading text-[30px] font-semibold leading-[1.1] tracking-[-0.015em] text-foreground-950 md:text-[38px] lg:text-[48px]">
            Escolher um imóvel não deveria parecer um leilão.
          </h2>
        </div>
        <div className="space-y-4 lg:col-span-5 lg:col-start-8 lg:pt-9">
          <p className="text-[16px] leading-[1.62] text-foreground-700 md:text-[17px]">
            Trabalho com um número pequeno de imóveis por vez. Antes de marcar uma visita, entendo como você vive:
            horário de saída, se cozinha, se tem pet, quanto do mês cabe no condomínio.
          </p>
          <p className="text-[16px] leading-[1.62] text-foreground-700 md:text-[17px]">
            Você recebe um comparativo escrito com prós, contras e custo mensal real de cada opção. E ouve também
            o que eu não gostei — inclusive quando o imóvel é meu cliente.
          </p>
          <ButtonLink to="/imoveis" variant="text">Ver os imóveis disponíveis</ButtonLink>
        </div>
      </div>
      <ul className="mt-12 grid grid-cols-1 gap-y-0 border-t border-background-300 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {pillars.map((a) => (
          <li key={a.label} className="flex items-center gap-3 border-b border-background-200 py-5 pr-3 lg:border-b-0">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-[18px] text-accent-600">
              <i className={a.icon} aria-hidden="true"></i>
            </span>
            <span className="text-[15px] font-medium text-foreground-950 md:text-[16px]">{a.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}