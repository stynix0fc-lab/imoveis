interface ServiceCardProps {
  index: number;
  title: string;
  summary: string;
  image: string;
  tasks?: string[];
}

export default function ServiceCard({ index, title, summary, image, tasks }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-[12px] bg-background-100">
        <img
          src={image}
          alt={`${title} for residential communities`}
          title={`${title} - community property management`}
          className="h-full w-full object-cover object-center transition-transform duration-[320ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035] motion-reduce:transform-none"
        />
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <p className="font-label text-[13px] font-semibold text-accent-500">{String(index).padStart(2, '0')}</p>
        <h3 className="mt-2 font-heading text-[20px] font-semibold leading-[1.2] text-foreground-950 md:text-[24px]">{title}</h3>
        <p className="mt-3 text-[16px] leading-[1.6] text-foreground-700">{summary}</p>
        {tasks && (
          <ul className="mt-4 space-y-1.5">
            {tasks.map((t) => (
              <li key={t} className="flex items-center gap-2 text-[15px] text-foreground-950">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" aria-hidden="true"></span>
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}