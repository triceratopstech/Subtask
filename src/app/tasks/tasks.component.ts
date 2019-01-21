import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Task } from '../task';
import { TaskRelationship } from '../task-relationship';
import { TaskService } from '../task.service';
import { TaskRelationshipsService } from '../task-relationships.service';
import * as vis from "vis";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tasks: Task[];
  relationships: TaskRelationship[];

  constructor(private taskService: TaskService, private taskRelationshipService: TaskRelationshipsService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {

    //start both async calls
    var taskPromise = this.taskService.getTasks();
    var edgePromise = this.taskRelationshipService.getTaskRelationships();

    taskPromise.subscribe(tasks => {
      //we know tasks exist, so start with them
      this.tasks = tasks
      var nodes = new vis.DataSet();
      for (var i = 0; i < this.tasks.length; i++) {
        nodes.add({ id: this.tasks[i].id, label: this.tasks[i].title });
      }

      //then work on relationships
      edgePromise.subscribe(relationships => {
        this.relationships = relationships
        // create an array with edges
        var edges = new vis.DataSet();
        for (var i = 0; i < this.relationships.length; i++) {
          edges.add(this.handleEdgeLogic(this.relationships[i]));
        }

        // provide the data in the vis format
        var data = {
          nodes: nodes,
          edges: edges
        };

        console.log(nodes);
        console.log(edges);
        // create a network
        var container = document.getElementById('mynetwork');
        var options = {
          layout:
          {
            hierarchical:
            {
              direction: 'UD',
              sortMethod: 'directed'
            }
          }
        };

        // initialize your network!
        var network = new vis.Network(container, data, options);
      })



    }
    );
  }

  handleEdgeLogic(taskRel: TaskRelationship): any {
    switch (taskRel.relationshipType) {
      case 'owns':
        return {
          from: taskRel.subjectTask, to: taskRel.objectTask,
          arrows:
            { to: true },
          smooth: {enabled:true, type:'curvedCW', roundness:0.2}
        };
      case 'requires':
        return {
          from: taskRel.subjectTask, to: taskRel.objectTask,
          arrows:
            { to: true },
          color:
            { color: '#ff0000' },
            smooth: {enabled:true, type:'curvedCW', roundness:0.2}
          };
      case 'substitutes':
        return {
          from: taskRel.subjectTask, to: taskRel.objectTask,
          color:
            { color: 'black' },
          dashes: true,
          smooth: {enabled:true, type:'curvedCW', roundness:0.2}
        };
    }
  }
}
