import { Hero } from '@/widget/hero';

export default async function Page(){
  return (
    <section>
      <Hero
        preTitle={'Аквапарк'}
        subtitle={'Веселье и умиротворение вместе в сердце природы\n.'}
        title={['Горки', 'Рафтинг', 'Laguna Bar', 'Детский аквапарк', 'Бассейн с водопадом', 'Снэк Бар', 'Бассейн', 'Бар', 'Зоо парк']}
        video={'https://cdn.utopiahotels.com/assets/videos/covers/uw-aqua.mp4'}
        poster={'https://cdn.utopiahotels.com/assets/images/pages/001kaydirakmodal-lg.webp'}
      />
    </section>
  )
}