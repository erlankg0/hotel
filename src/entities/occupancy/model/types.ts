export type OccupancyType = {
  id: string;
  title: string;
  adults: number;
  children: number;
  babies: number;
  createdAt: Date;
  rule: OccupancyRuleType | null;
};

type OccupancyRuleType = {
  id: string;
  occupancyId: string;
  multiplier: number;
  createdAt: Date;
}