import { create } from "zustand";
import { TaskStore } from "@/utils/types";

const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    
    addTask: (task) =>
        set((state) => ({
            tasks: [...state.tasks, task],
        })),
    
    toggleTaskStatus: (id) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, status: !task.status } : task
            ),
        })),
    
    removeTask: (id) =>
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
        })),
}));

export default useTaskStore;
