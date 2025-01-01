import { create } from 'zustand';

interface ColumnConfig {
  id: string;
  label: string;
  visible: boolean;
}

interface TableState {
  columnConfigs: ColumnConfig[];
  setColumnConfigs: (configs: ColumnConfig[]) => void;
  updateColumnVisibility: (id: string, visible: boolean) => void;
  reorderColumns: (oldIndex: number, newIndex: number) => void;
}

export const useTableStore = create<TableState>((set) => ({
  columnConfigs: [],
  
  setColumnConfigs: (configs) => set({ 
    columnConfigs: configs.map(config => ({
      ...config,
      visible: config.visible ?? true
    }))
  }),

  updateColumnVisibility: (id, visible) =>
    set((state) => {
      if (!visible && state.columnConfigs.filter(c => c.visible).length <= 1) {
        return state;
      }

      const newConfigs = state.columnConfigs.map(config => 
        config.id === id ? { ...config, visible } : config
      );

      return { columnConfigs: newConfigs };
    }),

  reorderColumns: (oldIndex, newIndex) =>
    set((state) => {
      const newConfigs = [...state.columnConfigs];
      const [removed] = newConfigs.splice(oldIndex, 1);
      newConfigs.splice(newIndex, 0, removed);
      return { columnConfigs: newConfigs };
    }),
})); 