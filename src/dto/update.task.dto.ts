import { TaskStatus } from 'src/entity/task.entity';
export class UpdateTaskDto {
    title?: string;
    description?: string;
    status?: TaskStatus;
}