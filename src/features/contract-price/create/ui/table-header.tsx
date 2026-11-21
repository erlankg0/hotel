import { CardHeader, CardTitle, CardDescription } from '@/shared/ui/card';

export function Header() {
    return (
        <CardHeader className="border-b bg-background">
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                    <CardTitle>Контрактные цены</CardTitle>
                    <CardDescription>
                        Вводится цена PP на период. Остальные размещения считаются по правилу.
                        Клик по ячейке — ручная цена.
                    </CardDescription>
                </div>
            </div>
        </CardHeader>
    )
}