import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/sevices/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task){
    this.taskService
    .deleteTasks(task)
    .subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id))); //this is called after the task is deleted from the server to update the UI
  }

}
