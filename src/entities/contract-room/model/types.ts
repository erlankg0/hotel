type RoomCategortType = {
    readonly id: string;
    readonly title: string;
    readonly shortTitle: string;
};

export type ContractRoomType = {
    readonly id: string;
    readonly isActive: boolean;
    readonly roomCategory: RoomCategortType;
}