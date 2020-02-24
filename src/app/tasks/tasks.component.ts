import { Component, OnInit } from "@angular/core";
import { Task } from "src/interfaces/task";
import { TaskService } from "src/app/task.service";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  selectedTask: Task;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  onSelect(task: Task) {
    this.selectedTask = task;
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }
}
