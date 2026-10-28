import { useState, type FormEvent, type ReactNode } from 'react';

type Mode = 'comprar' | 'vender';
type Status = 'idle' | 'submitting' | 'success' | 'error';

const FORM_URL = 'https://readdy.ai/api/form/dbclf3goojagos9kbmqg';
const MAX_MSG = 500;

const inputCls = 'mt-2 block w-full min-h-[48px] rounded-md border bg-background-50 px-4 text-[16px] text-foreground-950 placeholder:text-foreground-500 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-primary-200';

const priceRanges = [
  'Até R$ 800 mil',
  'R$ 800 mil a R$ 1,5 mi',
  'R$ 1,5 mi a R$ 3 mi',
  'Acima de R$ 3 mi',
  'Ainda não defini',
];

const propertyTypes = ['Apartamento', 'Casa', 'Cobertura', 'Studio', 'Investimento'];

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
  className?: string;
}

function Field({ id, label, error, optional, children, className = '' }: FieldProps) {
  return (
    <div className={`min-w-0 ${className}`}>
      <label htmlFor={id} className="font-label text-[15px] font-semibold text-foreground-950">
        {label}
        {optional && <span className="ml-1 font-normal text-foreground-600">(opcional)</span>}
      </label>
      {children}
      {error && <p id={`${id}-err`} className="mt-1.5 text-[14px] font-medium text-accent-700">{error}</p>}
    </div>
  );
}

function Select({ id, name, options, error, defaultValue = '' }: { id: string; name: string; options: string[]; error?: string; defaultValue?: string }) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        defaultValue={defaultValue}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`${inputCls} cursor-pointer appearance-none pr-10 ${error ? 'border-accent-500' : 'border-background-300'}`}
      >
        <option value="" disabled>Selecione</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 flex h-5 w-5 translate-y-[4px] items-center justify-center text-[18px] text-foreground-600">
        <i className="ri-arrow-down-s-line" aria-hidden="true"></i>
      </span>
    </div>
  );
}

interface InquiryFormProps {
  initialMode: Mode;
  initialMessage?: string;
}

export default function InquiryForm({ initialMode, initialMessage = '' }: InquiryFormProps) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [formError, setFormError] = useState('');
  const [msgLen, setMsgLen] = useState(initialMessage.length);

  const border = (k: string) => (errors[k] ? 'border-accent-500' : 'border-background-300');

  const validate = (data: FormData) => {
    const e: Record<string, string> = {};
    const get = (k: string) => String(data.get(k) || '').trim();
    if (!get('full_name') || get('full_name').length < 3) e.full_name = 'Informe seu nome completo.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get('email'))) e.email = 'Informe um e-mail válido.';
    if (get('phone').replace(/\D/g, '').length < 10) e.phone = 'Informe um telefone com DDD.';
    if (!get('property_type')) e.property_type = 'Escolha o tipo de imóvel.';
    if (mode === 'comprar') {
      if (!get('region')) e.region = 'Diga ao menos um bairro ou região de interesse.';
      if (!get('budget')) e.budget = 'Escolha uma faixa de investimento.';
    } else {
      if (!get('address')) e.address = 'Informe o endereço ou bairro do imóvel.';
      if (!get('timeline')) e.timeline = 'Escolha um prazo aproximado.';
    }
    const msg = get('message');
    if (!msg) e.message = 'Escreva uma mensagem curta.';
    else if (msg.length > MAX_MSG) e.message = `Mantenha a mensagem em até ${MAX_MSG} caracteres.`;
    return e;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setFormError('');

    const trap = String(data.get('website_alt') || '').trim();
    if (trap) { setStatus('success'); return; }
    data.delete('website_alt');

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus('idle');
      return;
    }

    data.set('inquiry_type', mode === 'comprar' ? 'Quero comprar' : 'Quero vender ou alugar');
    const body = new URLSearchParams();
    data.forEach((v, k) => { if (typeof v === 'string' && v.trim() !== '') body.append(k, v); });

    setStatus('submitting');
    try {
      const response = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      const responseText = await response.text();
      let parsed: { code?: string; message?: string; meta?: { message?: string; detail?: unknown } } | null = null;
      try { parsed = JSON.parse(responseText); } catch { parsed = null; }
      const detail = typeof parsed?.meta?.detail === 'string' ? parsed.meta.detail : '';
      const serverMsg = parsed?.meta?.message || parsed?.message || detail || responseText;
      const isSpam = /spam/i.test(serverMsg || '');

      if (response.ok && parsed?.code === 'OK' && !isSpam) {
        setStatus('success');
        form.reset();
        setMsgLen(0);
      } else {
        setStatus('error');
        setFormError(serverMsg || 'Não foi possível enviar. Tente novamente em instantes.');
      }
    } catch {
      setStatus('error');
      setFormError('Não conseguimos falar com o servidor. Verifique sua conexão e tente novamente.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-background-200 p-8 md:p-10" role="status">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-[24px] text-accent-600">
          <i className="ri-check-line" aria-hidden="true"></i>
        </span>
        <h3 className="mt-6 font-heading text-[24px] font-semibold text-foreground-950">Mensagem enviada.</h3>
        <p className="mt-3 max-w-[440px] text-[16px] leading-[1.6] text-foreground-700">
          Recebi seu contato e respondo pessoalmente em até dois dias úteis. Se for urgente, ligue para (11) 4002-8922.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 min-h-[48px] cursor-pointer whitespace-nowrap rounded-md border border-background-300 px-6 font-label text-[15px] font-semibold text-foreground-950 hover:border-foreground-950"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form id="contato-form" data-readdy-form onSubmit={onSubmit} noValidate className="relative box-border scroll-mt-28">
      <div className="relative inline-grid grid-cols-2 rounded-full border border-background-300 px-1 py-1" role="group" aria-label="Tipo de contato">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-1 left-1 top-1 w-[calc(50%-4px)] rounded-full bg-primary-500 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none"
          style={{ transform: mode === 'vender' ? 'translateX(100%)' : 'translateX(0)' }}
        />
        {([['comprar', 'Quero comprar'], ['vender', 'Quero vender']] as const).map(([key, label]) => (
          <button
            key={key}
            type="button"
            aria-pressed={mode === key}
            onClick={() => { setMode(key); setErrors({}); }}
            className={`relative z-10 min-h-[44px] cursor-pointer whitespace-nowrap rounded-full px-4 font-label text-[14px] font-semibold transition-colors duration-200 sm:px-6 sm:text-[15px] ${mode === key ? 'text-foreground-950' : 'text-foreground-700 hover:text-foreground-950'}`}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-[15px] leading-[1.6] text-foreground-700">
        {mode === 'comprar'
          ? 'Conte o que você procura. Se quiser, já indique um imóvel da lista pelo nome — eu retomo a partir dele.'
          : 'Conte sobre o imóvel que pretende vender ou alugar. A primeira avaliação é sem custo e sem compromisso.'}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id="full_name" label="Nome completo" error={errors.full_name}>
          <input id="full_name" name="full_name" type="text" autoComplete="name" className={`${inputCls} ${border('full_name')} box-border w-full`} aria-invalid={!!errors.full_name} aria-describedby={errors.full_name ? 'full_name-err' : undefined} />
        </Field>
        <Field id="email" label="E-mail" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" className={`${inputCls} ${border('email')} box-border w-full`} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined} />
        </Field>
        <Field id="phone" label="Telefone com DDD" error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(11) 90000-0000" className={`${inputCls} ${border('phone')} box-border w-full`} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-err' : undefined} />
        </Field>
        <Field id="property_type" label="Tipo de imóvel" error={errors.property_type}>
          <Select id="property_type" name="property_type" options={propertyTypes} error={errors.property_type} />
        </Field>

        {mode === 'comprar' ? (
          <>
            <Field id="region" label="Bairro ou região de interesse" error={errors.region}>
              <input id="region" name="region" type="text" placeholder="Ex.: Pinheiros, Vila Madalena" className={`${inputCls} ${border('region')} box-border w-full`} aria-invalid={!!errors.region} aria-describedby={errors.region ? 'region-err' : undefined} />
            </Field>
            <Field id="budget" label="Faixa de investimento" error={errors.budget}>
              <Select id="budget" name="budget" options={priceRanges} error={errors.budget} />
            </Field>
          </>
        ) : (
          <>
            <Field id="address" label="Endereço ou bairro do imóvel" error={errors.address}>
              <input id="address" name="address" type="text" placeholder="Ex.: Rua Fidalga, Vila Madalena" className={`${inputCls} ${border('address')} box-border w-full`} aria-invalid={!!errors.address} aria-describedby={errors.address ? 'address-err' : undefined} />
            </Field>
            <Field id="timeline" label="Prazo para negociar" error={errors.timeline}>
              <Select id="timeline" name="timeline" options={['O quanto antes', 'Em até 3 meses', 'Em até 6 meses', 'Sem pressa']} error={errors.timeline} />
            </Field>
          </>
        )}

        <div className="min-w-0 sm:col-span-2">
          <Field id="message" label="Mensagem" error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={MAX_MSG}
              defaultValue={initialMessage}
              onChange={(e) => setMsgLen(e.target.value.length)}
              placeholder={mode === 'comprar' ? 'Ex.: procuro 2 dormitórios perto do metrô, até R$ 1,2 mi, com vaga.' : 'Ex.: apartamento de 3 dormitórios em Moema, reformado em 2022.'}
              className={`${inputCls} ${border('message')} box-border w-full py-3`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-err' : undefined}
            />
          </Field>
          <p className="mt-1.5 text-right text-[13px] text-foreground-600">{msgLen}/{MAX_MSG}</p>
        </div>
      </div>

      <div className="fld-alt-wrap">
        <label htmlFor="website_alt">Website</label>
        <input id="website_alt" name="website_alt" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly onFocus={(e) => e.currentTarget.removeAttribute('readonly')} />
      </div>

      {status === 'error' && formError && (
        <p className="mt-4 rounded-md border border-accent-300 bg-accent-50 px-4 py-3 text-[15px] text-accent-900" role="alert">{formError}</p>
      )}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] leading-[1.5] text-foreground-600">
          Seus dados são usados apenas para responder a este contato.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="min-h-[48px] cursor-pointer whitespace-nowrap rounded-md bg-primary-500 px-7 font-label text-[15px] font-semibold text-foreground-950 transition-colors duration-200 hover:bg-primary-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Enviando...' : mode === 'comprar' ? 'Quero receber opções' : 'Pedir avaliação'}
        </button>
      </div>
    </form>
  );
}