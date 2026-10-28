import type { Property } from '@/mocks/site';

export interface Filters {
  purpose: 'Todos' | 'Venda' | 'Aluguel';
  type: string;
  neighborhood: string;
  beds: number;
}

interface PropertyFiltersProps {
  filters: Filters;
  onChange: (next: Filters) => void;
  onClear: () => void;
  resultCount: number;
  total: number;
  types: string[];
  neighborhoods: string[];
}

const selectCls = 'h-12 w-full cursor-pointer appearance-none rounded-md border border-background-300 bg-background-50 pl-4 pr-10 text-[15px] text-foreground-950 transition-colors duration-200 hover:border-foreground-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-primary-200';

export default function PropertyFilters({
  filters, onChange, onClear, resultCount, total, types, neighborhoods,
}: PropertyFiltersProps) {
  const purposes: Filters['purpose'][] = ['Todos', 'Venda', 'Aluguel'];
  const bedOptions = [0, 1, 2, 3];
  const dirty = filters.purpose !== 'Todos' || filters.type !== 'Todos' || filters.neighborhood !== 'Todos' || filters.beds > 0;

  return (
    <div className="rounded-lg border border-background-200 bg-background-50 p-4 md:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="inline-flex w-full rounded-full border border-background-300 p-1 sm:w-auto" role="group" aria-label="Finalidade">
          {purposes.map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={filters.purpose === p}
              onClick={() => onChange({ ...filters, purpose: p })}
              className={`min-h-[40px] flex-1 cursor-pointer whitespace-nowrap rounded-full px-4 font-label text-[14px] font-semibold transition-colors duration-200 sm:flex-none ${
                filters.purpose === p ? 'bg-primary-500 text-foreground-950' : 'text-foreground-700 hover:text-foreground-950'
              }`}
            >
              {p === 'Todos' ? 'Todos os imóveis' : p}
            </button>
          ))}
        </div>

        <p className="text-[14px] text-foreground-700" aria-live="polite">
          <strong className="font-semibold text-foreground-950">{resultCount}</strong> de {total} imóveis
          {filters.neighborhood !== 'Todos' && ` em ${filters.neighborhood}`}
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 border-t border-background-200 pt-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="f-type" className="mb-1.5 block font-label text-[12px] font-semibold uppercase tracking-[0.1em] text-foreground-600">Tipo</label>
          <div className="relative">
            <select id="f-type" value={filters.type} onChange={(e) => onChange({ ...filters, type: e.target.value })} className={selectCls}>
              <option value="Todos">Todos os tipos</option>
              {types.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center text-[18px] text-foreground-600"><i className="ri-arrow-down-s-line" aria-hidden="true"></i></span>
          </div>
        </div>

        <div>
          <label htmlFor="f-hood" className="mb-1.5 block font-label text-[12px] font-semibold uppercase tracking-[0.1em] text-foreground-600">Bairro</label>
          <div className="relative">
            <select id="f-hood" value={filters.neighborhood} onChange={(e) => onChange({ ...filters, neighborhood: e.target.value })} className={selectCls}>
              <option value="Todos">Todos os bairros</option>
              {neighborhoods.map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center text-[18px] text-foreground-600"><i className="ri-arrow-down-s-line" aria-hidden="true"></i></span>
          </div>
        </div>

        <div>
          <label htmlFor="f-beds" className="mb-1.5 block font-label text-[12px] font-semibold uppercase tracking-[0.1em] text-foreground-600">Dormitórios</label>
          <div className="relative">
            <select id="f-beds" value={filters.beds} onChange={(e) => onChange({ ...filters, beds: Number(e.target.value) })} className={selectCls}>
              {bedOptions.map((b) => (
                <option key={b} value={b}>{b === 0 ? 'Qualquer' : `${b}+ dormitório${b > 1 ? 's' : ''}`}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center text-[18px] text-foreground-600"><i className="ri-arrow-down-s-line" aria-hidden="true"></i></span>
          </div>
        </div>

        <div className="flex items-end">
          <button
            type="button"
            onClick={onClear}
            disabled={!dirty}
            className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-background-300 font-label text-[14px] font-semibold text-foreground-950 transition-colors duration-200 hover:border-foreground-950 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span className="flex h-4 w-4 items-center justify-center text-[15px]"><i className="ri-refresh-line" aria-hidden="true"></i></span>
            Limpar filtros
          </button>
        </div>
      </div>
    </div>
  );
}

export const emptyFilters: Filters = { purpose: 'Todos', type: 'Todos', neighborhood: 'Todos', beds: 0 };

export function applyFilters(list: Property[], f: Filters): Property[] {
  return list.filter((p) => (
    (f.purpose === 'Todos' || p.purpose === f.purpose)
    && (f.type === 'Todos' || p.type === f.type)
    && (f.neighborhood === 'Todos' || p.neighborhood === f.neighborhood)
    && p.beds >= f.beds
  ));
}