import { Link } from 'react-router-dom';
import type { Property } from '@/mocks/site';
import { formatBRL, priceLabel } from '@/utils/format';

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
}

export default function PropertyCard({ property: p }: PropertyCardProps) {
  const href = `/imoveis/${p.slug}`;

  return (
    <article className="group flex h-full flex-col">
      <Link
        to={href}
        aria-label={`Ver ${p.title} em ${p.neighborhood}`}
        className="relative block aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-lg bg-background-100"
      >
        <img
          src={p.image}
          alt={`${p.title} — ${p.neighborhood}, ${p.city}`}
          title={`${p.title} · ${p.type} para ${p.purpose.toLowerCase()} em ${p.neighborhood}`}
          className="h-full w-full object-cover object-center transition-transform duration-[520ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transform-none"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-background-50 px-3 py-1 font-label text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground-950">
            {p.purpose}
          </span>
          {p.badge && (
            <span className="rounded-full bg-primary-500 px-3 py-1 font-label text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground-950">
              {p.badge}
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col pt-4">
        <p className="font-label text-[12px] font-semibold uppercase tracking-[0.12em] text-accent-600">
          {p.type} · {p.neighborhood}
        </p>
        <h3 className="mt-2 font-heading text-[19px] font-semibold leading-[1.25] text-foreground-950 md:text-[21px]">
          <Link to={href} className="cursor-pointer hover:text-accent-600">
            {p.title}
          </Link>
        </h3>

        <ul className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] text-foreground-700">
          <li className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="flex h-4 w-4 items-center justify-center text-[15px] text-foreground-600"><i className="ri-hotel-bed-line" aria-hidden="true"></i></span>
            {p.beds} dorm.
          </li>
          <li className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="flex h-4 w-4 items-center justify-center text-[15px] text-foreground-600"><i className="ri-drop-line" aria-hidden="true"></i></span>
            {p.baths} banh.
          </li>
          <li className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="flex h-4 w-4 items-center justify-center text-[15px] text-foreground-600"><i className="ri-ruler-2-line" aria-hidden="true"></i></span>
            {p.area} m²
          </li>
          <li className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="flex h-4 w-4 items-center justify-center text-[15px] text-foreground-600"><i className="ri-car-line" aria-hidden="true"></i></span>
            {p.parking} vaga{p.parking > 1 ? 's' : ''}
          </li>
        </ul>

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-background-200 pt-4">
          <div>
            <p className="font-heading text-[22px] font-semibold leading-none text-foreground-950">
              {priceLabel(p.price, p.purpose)}
            </p>
            <p className="mt-1.5 text-[13px] text-foreground-600">
              {p.condoFee > 0 ? `Condomínio ${formatBRL(p.condoFee)}` : 'Sem condomínio'}
            </p>
          </div>
          <Link
            to={href}
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-background-300 text-[18px] text-foreground-950 transition-colors duration-200 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50"
            aria-label={`Detalhes de ${p.title}`}
          >
            <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </article>
  );
}