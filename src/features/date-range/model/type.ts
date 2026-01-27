export type DateRangeType = {
  start: Date | null;
  end: Date | null;
}

export type Props = {
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
  setDateRange: (v: { start: Date | null; end: Date | null }) => void;
};
