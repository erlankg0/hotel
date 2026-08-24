export type CountryType = {
    readonly id: string;
    readonly title: string;
    readonly shortTitle: string;

    readonly market: {
        readonly id: string;
        readonly title: string
    }
};