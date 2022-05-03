import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task, TaskStatus } from '../entity/task.entity';
import { CreateTaskDto } from '../dto/dto';
import { TaskDto } from '../dto/task.dto';
import { UpdateTaskDto } from '../dto/update.task.dto';

@Injectable()
export class TaskService {
    constructor(@InjectRepository(Task) private taskRepository: Repository<Task>) {}

    private entityToDTO(task: Task): TaskDto {
        const taskDto = new TaskDto();
        taskDto.id = task.id;
        taskDto.title = task.title;
        taskDto.description = task.description;
        taskDto.status = task.status;

        return taskDto;
    }

    public async getOne(taskId: number) {
        const task: Task = await this.taskRepository.findOne(taskId);

        if(!task) throw new NotFoundException(`Task with the id ${taskId} was not found`);

        const taskDto: TaskDto = this.entityToDTO(task);

        return taskDto;
    }

    public async getAll() {
        const tasks: Task[] = await this.taskRepository.find();
        const tasksDto: TaskDto[] = tasks.map(x => this.entityToDTO(x));

        return tasksDto;
    }

    public async createOne(createTaskRequest: CreateTaskDto) {
        const task: Task = new Task();
        task.title = createTaskRequest.title;
        task.description = createTaskRequest.description;
        task.status = TaskStatus.Created

        await this.taskRepository.save(task);

        const taskDto = this.entityToDTO(task)

        return taskDto;
    }

    public async updateOne(taskId: number, updateTaskRequest: UpdateTaskDto) {
        const task: Task = await this.getOne(taskId);

        task.title = updateTaskRequest.title || task.title;
        task.description = updateTaskRequest.description || task.description;
        task.status = updateTaskRequest.status || task.status;

        await this.taskRepository.save(task)

        const taskDto: TaskDto = this.entityToDTO(task)

        return taskDto;
    }

    public async deleteOne(taskId: number) {
        const task: Task = await this.getOne(taskId);

        await this.taskRepository.remove(task);
    }

    
}