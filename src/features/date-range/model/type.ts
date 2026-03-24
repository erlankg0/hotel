import type { ReactNode } from 'react';

export type DateRangeType = {
  start: Date | null;
  end: Date | null;
}

export type DateRangeTriggerProps = {
  displayDates: {
    start: Date;
    end: Date;
  };
  open: () => void;
};

export type Props = {
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
  setDateRange: (v: { start: Date | null; end: Date | null }) => void;
  trigger?: ReactNode;
  renderTrigger?: (props: DateRangeTriggerProps) => ReactNode;
};
