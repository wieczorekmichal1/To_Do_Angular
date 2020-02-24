import { Injectable } from "@angular/core";
import { Task } from "src/interfaces/task";
import { TASKS } from "src/interfaces/mock-tasks";
import { MessageService } from "src/app/message.service";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor(private messageServ: MessageService) {}

  getTasks(): Observable<Task[]> {
    this.messageServ.add('TaskService: fetched Tasks')
    return of(TASKS);
  }
}
