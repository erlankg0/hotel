import { cn } from '@/shared/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { Hero } from '@/widget/hero';

import { Title } from '../ui/title';

import styles from './page.module.scss';


const RESTAURANT = {
  subtitle: 'Итальянская кухня',
  video: 'https://cdn.utopiahotels.com/assets/videos/covers/uw-lamonte.mp4',
  poster: 'https://cdn.utopiahotels.com/assets/images/pages/lamontekapak0123-lg.jpg',
};

const Soup: { title: string; description: string }[] = [
  {
    title: 'Весенний суп',
    description: 'С ароматом мяты, обжаренной в сливочном масле',
  },
  {
    title: 'Чечевичный суп',
    description: 'Подаётся с гренками, обжаренными в масле',
  },
  {
    title: 'Суп из морепродуктов',
    description: 'С зеленью и лимоном',
  },
];

const Antipasti: { title: string; description: string }[] = [
  {
    title: 'Тортеллини',
    description: 'В сливочном соусе с грибами и креветками',
  },
  {
    title: 'Мясной блинчик по-охотничьи',
    description: 'Подаётся с соусом конкассе',
  },
  {
    title: 'Хрустящие жареные креветки',
    description: 'Со средиземноморской зеленью и соусом тартар',
  },
  {
    title: 'Жареные кальмары',
    description: 'С салатом айсберг и соусом тартар',
  },
  {
    title: 'Салат из рукколы',
    description: 'С бальзамическим соусом, вялеными томатами и пармезаном',
  },
  {
    title: 'Салат Gavurdağı',
    description: 'С оливками и грецкими орехами',
  },
  {
    title: 'Салат из средиземноморской зелени',
    description: 'Со средиземноморской заправкой',
  },
  {
    title: 'Салат Цезарь',
    description: 'С курицей-гриль, гренками и пармезаном',
  },
];

const Main: { title: string; description: string }[] = [
  {
    title: 'Говяжья вырезка',
    description: 'С корнеплодами, обжаренными в сливочном масле',
  },
  {
    title: 'Фрикадельки на гриле, фаршированные сыром',
    description: 'С молодым картофелем и обжаренными средиземноморскими овощами',
  },
  {
    title: 'Говядина Фахита',
    description: 'С тортильей и соусом из авокадо',
  },
  {
    title: 'Голень ягнёнка',
    description: 'С овощами в средиземноморском стиле и соусом демиглас',
  },
  {
    title: 'Морской лещ на гриле',
    description: 'С соте из овощей и свежими травами',
  },
  {
    title: 'Средиземноморский окунь на гриле',
    description: 'С тушёными сезонными овощами',
  },
  {
    title: 'Куриные ножки с средиземноморскими травами',
    description: 'Подаются со шпинатом, обжаренным в оливковом масле',
  },
  {
    title: 'Стейк из лосося на гриле',
    description: 'Со спаржей, вялеными томатами и соусом из каперсов и фенхеля',
  },
  {
    title: 'Пицца',
    description: 'Салями, грибы, кукуруза, перец капия, томаты, базилик и моцарелла',
  },
];

const Deserts: { title: string; description: string }[] = [
  {
    title: 'Тирамису',
    description: 'Савоярди, маскарпоне, эспрессо, амаретто, какао — по классическому рецепту Тревизо',
  },
  {
    title: 'Фруктовый пирог',
    description: 'С сезонными свежими фруктами',
  },
  {
    title: 'Катмер',
    description: 'С фисташками и мороженым',
  },
  {
    title: 'Жареное мороженое',
    description: 'С карамельным соусом',
  },
  {
    title: 'Средиземноморский фруктовый салат',
    description: 'С клубничным мороженым, коньяком и ликёрным соусом',
  },
];

const Kids: { title: string; description: string }[] = [
  {
    title: 'Котлеты на гриле',
    description: 'Подаются с кетчупом и майонезом',
  },
  {
    title: 'Сосиски',
    description: 'Жареные сливочные сосиски',
  },
  {
    title: 'Хрустящий цыплёнок',
    description: 'Жареный до золотистой корочки',
  },
  {
    title: 'Спагетти Болоньезе',
    description: 'С сыром чеддер',
  },
];

const MENU_SECTIONS = [
  { value: 'soup', label: 'Супы', items: Soup },
  { value: 'antipasti', label: 'Закуски', items: Antipasti },
  { value: 'main', label: 'Основные блюда', items: Main },
  { value: 'deserts', label: 'Десерты', items: Deserts },
  { value: 'kids', label: 'Детское меню', items: Kids },
] as const;


function Food({
                title,
                description,
              }: {
  title: string;
  description: string;
}) {
  return (
    <article className={styles.dish}>
      <div className={styles.dish__head}>
        <h4 className={styles.dish__title}>{title}</h4>
        <span className={styles.dish__rule} />
      </div>
      <p className={styles.dish__description}>{description}</p>
    </article>
  );
}

export default function Page() {
  return (
    <section className={cn('page', 'panel')}>
      <Hero
        {...RESTAURANT}
        slot={<Title title={'La Mounte'} />}
      />

      <div className={cn('info', styles.intro)}>
        <h2>Ла Монте, где итальянская кухня встречается со средиземноморским бризом, предлагает настоящий вкус.</h2>
      </div>

      <section className={'container'} aria-label={'Меню блюд'}>
        <div className={styles.header}>
          <p className={styles.header__text}>Коллекция блюд · à la carte</p>
          <h2 className={styles.header__title}>Ме<em>ню</em></h2>
        </div>

        <Tabs defaultValue="soup">
          <TabsList className={styles.tablist}>
            {MENU_SECTIONS.map((section) => (
              <TabsTrigger
                key={section.value}
                value={section.value}
                className={styles.tablist__item}
              >
                <span className={styles.dot} aria-hidden />
                <span>{section.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {MENU_SECTIONS.map((section) => {
            return (
              <TabsContent key={section.value} value={section.value}>
                <section className={styles.sub}>
                  <header className={styles.sub__header}>
                    <span className={styles.sub__label}>{section.label}</span>
                    <span className={styles.sub__rule} />
                  </header>

                  <ul className={styles.menu}>
                    {section.items.map((item) => (
                      <li key={item.title} className={styles.menu__item}>
                        <Food {...item} />
                      </li>
                    ))}
                  </ul>
                </section>
              </TabsContent>
            );
          })}
        </Tabs>
      </section>
    </section>
  );
}
