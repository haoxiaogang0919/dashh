import {
  CirclePlayIcon,
  CirclePauseIcon,
  CircleCheckIcon,
  InboxIcon,
} from 'lucide-react';
import ProjectsGrid from '@/components/features/dashboard/projects/ProjectsGrid';

export const projectsTabs = [
  {
    label: 'Active',
    icon: <CirclePlayIcon width={16} height={16} />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectsGrid />
      </div>
    ),
  },
  {
    label: 'On Hold',
    icon: <CirclePauseIcon width={16} height={16} />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectsGrid />
      </div>
    ),
  },
  {
    label: 'Completed',
    icon: <CircleCheckIcon width={16} height={16} />,
    content: <div>12321</div>,
  },
  {
    label: 'All Projects',
    icon: <InboxIcon width={16} height={16} />,
    content: <div>12321</div>,
  },
];