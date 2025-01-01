export const TIME_RANGE_OPTIONS = [
  "Last 7 days",
  "Last 30 days",
  "Last 90 days",
  "Last 6 Months",
  "Last 12 Months",
  "Year to Date"
] as const;

export type TimeRangeOption = (typeof TIME_RANGE_OPTIONS)[number]; 