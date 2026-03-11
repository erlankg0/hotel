import type { CardProps } from '../model/type';

export function Card({ title, info }: CardProps) {
  return (
    <article className="max-w-xl mx-auto">
      <h3 className="text-xl font-medium mb-4 uppercase tracking-wide">
        {title}
      </h3>

      <ul className="space-y-2 text-sm text-neutral-600">
        {info.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2">—</span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}