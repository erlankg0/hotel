export type AgencyType = {
  readonly id: string;

  title: string;
  shortTitle?: string;

  operator: {
    readonly id: string;
    readonly title: string;
  };

  readonly createdAt: Date;
  readonly updatedAt: Date;
};