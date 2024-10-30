export interface Task{
    id: string;
    title: string;
    description: string;
    status: boolean;
}


export interface TaskStore {
    tasks: Task[]; 
    addTask: (task: Task) => void; 
    toggleTaskStatus: (id: string) => void;
    removeTask: (id: string) => void; 
}