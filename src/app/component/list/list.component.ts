import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/test-data';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tasks: Task[] = TASKS;
  tasksFromApi: Task[];


  constructor(private service: TaskService) { }

  ngOnInit(): void {
    this.service.getTasks().subscribe((tasksFromApi) => this.tasksFromApi = tasksFromApi);
  }

}
