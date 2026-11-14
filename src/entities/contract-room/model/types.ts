type RoomCategoryType = {
    readonly id: string;
    readonly title: string;
    readonly shortTitle: string;
};
type Occupancy = {
    readonly id: string;
    readonly title: string;
    readonly adults: number;
    readonly children: number;
    readonly babies: number;
}
type OccupancyRule = {
    readonly id: string;
    readonly multiplier: number;
    readonly occupancy: Occupancy;
}

export type ContractRoomType = {
    readonly id: string;
    readonly isActive: boolean;
    readonly roomCategory: RoomCategoryType;
    readonly occupancyRules: OccupancyRule[];
}