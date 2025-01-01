import React from 'react';
import CardHeader from '@/components/common/CardHeader';
import ContentSection from '@/components/common/ContentSection';
import ProgressHeatmap from '@/components/common/ProgressHeatmap';
import TaskProgress from '@/components/common/TaskProgress';

const TimeSection = () => {
  return (
    <div>
      <CardHeader
        title="Time Overview"
        href="/dashboard/time"
      />
      <div className="grid grid-cols-2 gap-6">
        <ContentSection title="Activity Contributions">
          <div className="w-full">
            <ProgressHeatmap data={[]} />
          </div>
        </ContentSection>
        <ContentSection title="Activity Stats">
          <div className="space-y-6">
            <TaskProgress value={100} />
            <TaskProgress value={100} />
            <TaskProgress value={100} />
          </div>
        </ContentSection>
        <ContentSection title="Project Summary">
          <div>
            <TaskProgress value={100} />
          </div>
        </ContentSection>
        <ContentSection title="Category Summary">
          <div>
            <TaskProgress value={100} />
          </div>
        </ContentSection>
      </div>
    </div>
  );
};

export default TimeSection;
