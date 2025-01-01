import { Search, Settings2, Upload, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GripVertical } from 'lucide-react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useTableStore } from '@/store/tableStore';
import { useState } from 'react';

interface TableToolbarProps {
  className?: string;
}



const DraggableList = () => {
  const { columnConfigs, updateColumnVisibility, reorderColumns } = useTableStore();
  const [isOpen, setIsOpen] = useState(false);


  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = columnConfigs.findIndex((item) => item.id === active.id);
    const newIndex = columnConfigs.findIndex((item) => item.id === over.id);
    reorderColumns(oldIndex, newIndex);
  };

  const handleVisibilityChange = (id: string, visible: boolean) => {
    updateColumnVisibility(id, visible);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'rounded-lg p-2 text-gray-500 transition-colors',
          'hover:bg-gray-100 hover:text-gray-700',
          'dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200'
        )}
      >
        <Settings2 className="h-5 w-5" />
      </button>
      {isOpen && (
        <div className="column-settings absolute right-0 z-50 mt-2 w-64 rounded-lg border bg-white p-4 shadow-lg">
          <p className="mb-2 text-sm font-medium">列可见性</p>
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={columnConfigs.map(col => col.id)} strategy={verticalListSortingStrategy}>
              <div className="space-y-2">
                {columnConfigs.map((column) => (
                  <DraggableItem 
                    key={column.id} 
                    id={column.id}
                    label={column.label}
                    visible={column.visible}
                    onVisibilityChange={(visible) => handleVisibilityChange(column.id, visible)}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>
      )}
    </div>
  );
};

interface DraggableItemProps {
  id: string;
  label: string;
  visible: boolean;
  onVisibilityChange: (visible: boolean) => void;
}
const stopBubble = (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();
};

const DraggableItem = ({ id, label, visible, onVisibilityChange }: DraggableItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ 
    id: id,
    data: { type: 'column' }
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div 
      ref={setNodeRef}
      style={style}
      className={cn(
        "flex items-center gap-2 rounded p-2",
        isDragging ? "opacity-50" : "",
        "hover:bg-gray-50"
      )}
    >
      <div 
        className="cursor-move p-1" 
        {...attributes} 
        {...listeners}
      >
        <GripVertical className="h-4 w-4 text-gray-400" />
      </div>

      <div className="flex flex-1 items-center gap-2" onClick={stopBubble}>
        <input
          type="checkbox"
          className="rounded border-gray-300"
          checked={visible}
          onChange={(e) => {
          
            onVisibilityChange(e.target.checked);
          }}
        />
        <span className="text-sm text-gray-700">{label}</span>
      </div>
    </div>
  );
};

const ButtonClass = cn(
  'flex items-center gap-2 px-3 py-2 text-sm font-medium',
  'text-gray-700 dark:text-gray-300',
  'hover:bg-gray-100 dark:hover:bg-gray-700',
  'rounded-lg transition-colors'
);

function TableToolbar({ className }: TableToolbarProps) {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <div className="relative flex items-center gap-4">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search timesheet..."
          className={cn(
            'rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4',
            'text-gray-900 dark:text-white',
            'dark:border-gray-600 dark:bg-gray-700'
          )}
        />
      </div>
      <div className="flex items-center gap-4">
        <button className={ButtonClass}>
          <Upload className="h-4 w-4" />
          <span>Import</span>
        </button>
        <button className={ButtonClass}>
          <Download className="h-4 w-4" />
          <span>Export</span>
        </button>
        <DraggableList />
      </div>
    </div>
  );
}

TableToolbar.displayName = 'TableToolbar';

export default TableToolbar;
