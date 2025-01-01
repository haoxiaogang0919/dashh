import CardHeader from "@/components/common/CardHeader";
import MetricsGrid from "./MetricsGrid";
import {metricsDataGroups} from '@/config/features/metrics/config'
const MetricsSection = () => {
  const data = metricsDataGroups.keyMetrics.metrics;

  return (
    <section className="space-y-6 ">
      <CardHeader
        title="Key Reports"
        href="/reports"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(data).map(([key, metric]) => (
          <MetricsGrid key={key} {...metric}  />
        ))}
      </div>
    </section>
  );
};

export default MetricsSection;
