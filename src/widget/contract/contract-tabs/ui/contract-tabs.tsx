import { Card, CardContent } from '@/shared/ui/card';
import Link from 'next/link';

import type { ContractTabsPros } from '../model/types';

export function ContractTabs({ options }: ContractTabsPros) {
    return (
        <Card className="w-full shadow-sm">
            <CardContent className="p-0 divide-y divide-gray-100">
                {options.map((option) => {
                    const Icon = option.icon;
                    return (
                        <Link
                            key={option.title}
                            href={option.href}
                            className="flex items-center gap-3 px-6 py-4 font-semibold text-gray-900 transition-colors hover:bg-gray-50"
                        >
                            <Icon className="h-5 w-5 text-gray-700 shrink-0" />
                            <span>{option.title}</span>
                        </Link>
                    );
                })}
            </CardContent>
        </Card>
    );
}