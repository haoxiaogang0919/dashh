import Tabs from '@/components/common/Tabs';
import SectionTitle from '@/components/common/SectionTitle';
import { projectsTabs } from '@/config/features/projects/config';
const ProjectsPage = () => {

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Projects"
        icon="LayoutGrid"
      />
      <Tabs tabs={projectsTabs} />
    </div>
  );
};

export default ProjectsPage;
