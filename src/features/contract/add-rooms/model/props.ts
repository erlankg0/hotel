export type RoomCategory = {
    readonly id: string;
    readonly title: string;
    readonly shortTitle: string;
};


export type SelectRoomProps = {
    roomCategory: RoomCategory;
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
};


export type Props = {
    search: string;
    setSearch: (value: string) => void;
    data: RoomCategory[]
}

