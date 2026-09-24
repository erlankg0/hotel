import type { ContractStatus, Currency } from '@/shared/const/enums';


export type ContractHeaderType = {
    readonly id: string,
    readonly title: string;

    readonly operatorTitle: string;
    readonly hotelTitle: string;
    readonly season: string;
    
    readonly currency: Currency;
    readonly status: ContractStatus;
}