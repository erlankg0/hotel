import type { DateType } from '@/shared/types/date';

type OccupancyType = {
    readonly id: string;
    readonly title: string;
    readonly adults: number;
    readonly children: number;
    readonly babies: number;
}


export type OccupancyRuleType = {
    readonly id: string;
    readonly multiplier: number;
    readonly occupancy: OccupancyType;
} & DateType;