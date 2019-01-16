import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import * as vis from "vis";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks
      // create an array with edges
      var edges = new vis.DataSet([
        { from: 1, to: 3 },
        { from: 1, to: 2 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
      ]);

      var nodes = new vis.DataSet();
      for (var i = 0; i < this.tasks.length; i++) {
        nodes.add({ id: i, label: this.tasks[i].title });
      }

      // provide the data in the vis format
      var data = {
        nodes: nodes,
        edges: edges
      };

      // create a network
      var container = document.getElementById('mynetwork');
      var options = {};

      // initialize your network!
      var network = new vis.Network(container, data, options);

    }
    );
  }

}
