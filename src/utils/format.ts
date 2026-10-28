const brl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
});

const brlExact = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatBRL(value: number): string {
  return brl.format(value);
}

export function formatBRLExact(value: number): string {
  return brlExact.format(value);
}

export function priceLabel(price: number, purpose: string): string {
  return purpose === 'Aluguel' ? `${formatBRL(price)}/mês` : formatBRL(price);
}