import type {
    LucideIcon,
} from 'lucide-react';

type Option = {
    icon: LucideIcon,
    title: string,
    href: string
}

export type ContractTabsPros = {
    options: Option[];
}