export interface Task {
    id: string;
    title: string;
    description: string;
    dateAdded: string;
    deadline: string;
    importance: string;
    status: string;
    closedAt: string;
    projectId: string;
}
export interface NewTask {
    title: string;
    description: string;
    dateAdded: string;
    deadline: string;
    importance: string;
    status: string;
    closedAt: string;
    projectId: string;
}