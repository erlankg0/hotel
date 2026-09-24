import Link from 'next/link';
import { Ellipsis } from 'lucide-react';

import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';
import { Text } from '@/shared/ui/text';
import { Card, CardContent } from '@/shared/ui/card';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';

import type { ContractHeaderType } from '../model/types';
import { contractStatusLabels } from '@/shared/const/enums';


interface ContractHeaderProps {
    contract: ContractHeaderType;
}

export function ContractHeader({
    contract,
}: ContractHeaderProps) {
    return (
        <Card className="flex flex-row items-start justify-between gap-6 px-6">
            <CardContent className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3">
                    <Text tag="h2" tone="default" className="text-2xl font-semibold tracking-tight">
                        {contract.title}
                    </Text>

                    <Badge variant="green" className="rounded-full px-2.5">
                        <span className="mr-1.5 size-1.5 rounded-full bg-current" />
                        {contractStatusLabels[contract.status]}
                    </Badge>
                </div>

                <Text tone="info">
                    Contract #{contract.title} · {contract.hotelTitle}
                </Text>

                <div className="flex items-center gap-2">
                    <Badge>
                        {contract.operatorTitle}
                    </Badge>

                    <Badge>
                        {contract.currency}
                    </Badge>

                    <Badge>
                        {contract.season}
                    </Badge>
                </div>
            </CardContent>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Contract actions"
                    >
                        <Ellipsis />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                        <Link href={`/admin/contracts/${contract.id}/edit`}>
                            Edit contract
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        Duplicate contract
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="text-destructive">
                        Delete contract
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </Card>
    );
}