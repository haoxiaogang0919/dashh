import Notification from "@/components/features/dashboard/trend/KpiToggle";
import DashboardChart from "@/components/features/dashboard/trend/Chart";
import MetricsSection from "@/components/features/dashboard/metrics/MetricsSection";
import FinancialSection from '@/components/features/dashboard/financial/index'
import TimeSection from '@/components/features/dashboard/time/index'
export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <Notification />
      <DashboardChart />
      <MetricsSection />
      <FinancialSection/>
      <TimeSection/>
    </div>
  );
}
