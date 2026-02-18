export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = await params;
  return (
    <section>
      Room Detail {id.id}
    </section>
  );
}