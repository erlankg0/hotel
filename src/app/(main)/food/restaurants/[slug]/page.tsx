import { cn } from '@/shared/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { Text } from '@/shared/ui/text';
import { Hero } from '@/widget/hero';

import { Title } from '../ui/title';


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

type Wine = {
  title: string,
  value: string,

}
type WinesType = {
  category: string;
  subcategories: {
    category: string;
    wines: Wine[];
  }[]
}

const wines: WinesType[] = [
  {
    category: 'Белые вина',
    subcategories: [{
      category: 'Сухие',
      wines: [
        { title: 'Trio / Chardonnay, Narince, Sultaniye', value: '75 cl' },
        { title: 'Trio / Chardonnay, Narince, Sultaniye', value: '37,5 cl' },
        { title: 'Anfora Chardonnay', value: '75 cl' },
        { title: ' Chardonnay Reserve', value: '75 cl' },
        { title: ' Çankaya', value: '75 cl' },
        { title: ' Dolunca Sarafın Chardonnay', value: '75 cl' },
        { title: ' Dolunca Sarafın Sauvignon Blanc', value: '75 cl' },
      ],
    },
      {
        category: 'Полусухие',
        wines: [
          { title: 'Senfoni', value: '75 cl' },
        ],
      },
      {
        category: 'Сладкие',
        wines: [
          { title: 'Senfoni', value: '75 cl' },
        ],
      },
      {
        category: 'Сладкие',
        wines: [
          { title: 'Senfoni', value: '75 cl' },
        ],
      },
    ],
  },
  {
    category: 'Розовые вина',
    subcategories: [{
      category: 'Сухие',
      wines: [
        { title: 'Trio / Shiraz, Karası, Cabernet Sauvignon', value: '75 cl' },
      ],
    },
    ],
  },
  {
    category: 'Красные вина',
    subcategories: [{
      category: 'Сухие',
      wines: [
        { title: 'Trio / Shiraz, Karası, Cabernet Sauvignon', value: '75 cl' },
        { title: 'Trio / Shiraz, Karası, Cabernet Sauvignon', value: '37,5 cl' },
        { title: 'Anfora Shiraz', value: '75 cl' },
        { title: 'Shiraz Rezerve', value: '75 cl' },
        { title: 'Anfora Kalecik karası', value: '75 cl' },
        { title: 'Anfora Mertol', value: '75 cl' },
        { title: 'Anfora Öközgüzü, Boğazkere', value: '75 cl' },
        { title: 'Anfora Cabarnet Sauvignon', value: '75 cl' },
        { title: 'Yakut', value: '75 cl' },
        { title: 'Doluca Sarafın Cabernen Sauvignon', value: '75 cl' },
        { title: 'Doluca Sarafın Mertol', value: '75 cl' },
      ],
    },
      {
        category: 'Сладкие',
        wines: [
          { title: 'Senfoni', value: '75 cl' },
        ],
      },
      {
        category: 'Игристые вина',
        wines: [
          { title: 'Anfore Gold', value: '75 cl' },
          { title: 'Henkell Trocken', value: '75 cl' },
        ],
      },
    ],
  },
];

function Food({
                title,
                description,
              }: {
  title: string;
  description: string;
}) {
  return (
    <article
      className="py-6 border-b border-gray-200 last:border-none text-center md:text-left transition hover:bg-gray-50 rounded-lg px-4">
      <h4 className="text-xl font-serif text-gray-900 mb-1 tracking-tight">
        {title}
      </h4>
      <p className="text-sm text-gray-600 italic leading-relaxed max-w-xl mx-auto md:mx-0">
        {description}
      </p>
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

      <div className={'info'}>
        <h2>Ла Монте, где итальянская кухня встречается с средиземноморскими бризами, предлагает настоящий вкус.</h2>
      </div>

      <section className={'container'} aria-label={'Меню блюд'}>
        <Text tag={'h3'} variant={'title'} className={'text-center'}> Меню</Text>
        <Tabs defaultValue="soup">
          <TabsList className="mx-auto flex flex-wrap gap-4 justify-center mb-8">
            <TabsTrigger value="soup" className="px-4 py-2 rounded-full transition hover:bg-gray-100">
              Супы
            </TabsTrigger>
            <TabsTrigger value="antipasti" className="px-4 py-2 rounded-full transition hover:bg-gray-100">
              Закуски
            </TabsTrigger>
            <TabsTrigger value="main" className="px-4 py-2 rounded-full transition hover:bg-gray-100">
              Основные блюда
            </TabsTrigger>
            <TabsTrigger value="deserts" className="px-4 py-2 rounded-full transition hover:bg-gray-100">
              Десерты
            </TabsTrigger>
            <TabsTrigger value="kids" className="px-4 py-2 rounded-full transition hover:bg-gray-100">
              Детское меню
            </TabsTrigger>
          </TabsList>

          {['soup', 'antipasti', 'main', 'deserts', 'kids'].map((tab) => {
            const data = { soup: Soup, antipasti: Antipasti, main: Main, deserts: Deserts, kids: Kids }[tab];
            return (
              <TabsContent key={tab} value={tab}>
                <ul className="space-y-4">
                  {data && data.map((item) => (
                    <li key={item.title}>
                      <Food {...item} />
                    </li>
                  ))}
                </ul>
              </TabsContent>
            );
          })}
        </Tabs>
      </section>
    </section>
  );
}