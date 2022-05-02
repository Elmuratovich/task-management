import { Body, Controller, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { title } from "process";
import { TaskService } from './task.service';
import { CreateDto, UpdateDto } from '../dto/dto';
import { Task } from '../entity/task.entity';
import { TreeParent } from "typeorm";

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    
}