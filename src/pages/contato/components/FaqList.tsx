import { useState } from 'react';

const faqs = [
  {
    q: 'Como você escolhe os imóveis que entram na lista?',
    a: 'Só publico o que já visitei. Em cada visita observo luz, ruído, estado de conservação e o que o anúncio não conta. Se o imóvel não passaria no meu próprio critério, ele não entra — mesmo que o proprietário insista.',
  },
  {
    q: 'Quem compra paga alguma coisa pelos seus serviços?',
    a: 'Não. Para quem compra, curadoria, visitas acompanhadas e análise de documentação estão incluídas. A remuneração vem do proprietário que contratou a venda, sempre combinada por escrito antes da divulgação.',
  },
  {
    q: 'Você ajuda com financiamento e documentação?',
    a: 'Sim. Faço a simulação inicial com dois ou três bancos, organizo a lista de documentos e acompanho o processo com o advogado parceiro até a assinatura da escritura. A aprovação final é sempre do banco.',
  },
  {
    q: 'Quanto tempo leva para vender um imóvel?',
    a: 'Depende de preço, estado de conservação e bairro. Imóveis bem posicionados na zona oeste têm vendido em média em 38 dias. Na avaliação eu informo uma faixa de prazo e explico o que pode encurtar ou alongar esse tempo.',
  },
  {
    q: 'Atende bairros fora da zona oeste?',
    a: 'Atendo principalmente Jardins, Pinheiros, Vila Madalena, Alto de Pinheiros e Moema, além de condomínios em Cotia e Granja Viana. Fora dessas regiões, posso indicar um colega de confiança em vez de aceitar algo que não conheço bem.',
  },
  {
    q: 'Como funciona a visita a um imóvel?',
    a: 'Você escolhe o imóvel na lista, envia o formulário ou chama no WhatsApp, e combinamos um horário — inclusive aos sábados. A visita dura cerca de 40 minutos e você pode levar quem vai decidir com você.',
  },
];

export default function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="border-t border-background-300">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q} className="border-b border-background-200">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-[64px] w-full cursor-pointer items-center justify-between gap-6 py-4 text-left font-heading text-[18px] font-semibold text-foreground-950 md:text-[20px]"
              >
                {f.q}
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center text-[20px] text-accent-600 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                  <i className="ri-add-line" aria-hidden="true"></i>
                </span>
              </button>
            </h3>
            <div
              id={`faq-${i}`}
              aria-hidden={!isOpen}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <div className={`max-w-[720px] pb-6 text-[16px] leading-[1.65] text-foreground-700 transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${isOpen ? 'translate-y-0' : '-translate-y-2'}`}>
                  {f.a}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}