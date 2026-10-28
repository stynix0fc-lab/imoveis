interface Step {
  title: string;
  text: string;
}

interface NumberedStepsProps {
  steps: Step[];
}

export default function NumberedSteps({ steps }: NumberedStepsProps) {
  return (
    <ol className={`grid grid-cols-1 gap-x-6 sm:grid-cols-2 ${steps.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
      {steps.map((s, i) => (
        <li key={s.title} className="border-t border-background-300 py-6 lg:pr-4">
          <div className="flex items-baseline gap-3">
            <span className="font-heading text-[15px] font-semibold text-accent-500">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="font-heading text-[20px] font-semibold text-foreground-950 md:text-[22px]">{s.title}</h3>
          </div>
          <p className="mt-3 text-[16px] leading-[1.6] text-foreground-700">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}