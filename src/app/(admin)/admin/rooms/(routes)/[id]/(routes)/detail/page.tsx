'use client';

import { useParams } from 'next/navigation';

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <section>1</section>
  );
}