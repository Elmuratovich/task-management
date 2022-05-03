import { TaskStatus } from "src/entity/task.entity";

export class TaskDto {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}