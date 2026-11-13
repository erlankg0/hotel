type RoomCategoryType = {
    readonly id: string;
    readonly title: string;
    readonly shortTitle: string;
};

type OccupancyRule = {
    readonly id: string;
    readonly multiplier: number;
    readonly occupancyId: string;
}

export type ContractRoomType = {
    readonly id: string;
    readonly isActive: boolean;
    readonly roomCategory: RoomCategoryType;
    readonly occupancyRules: OccupancyRule[];
}