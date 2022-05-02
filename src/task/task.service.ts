import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task } from '../entity/task.entity';
import { CreateDto } from '../dto/dto';

@Injectable()
export class TaskService {
    constructor(@InjectRepository(Task) private readonly taskRepository: Repository<Task>) {}
    
    puclic async createOne(createTaskRequest: CreateDto)


}