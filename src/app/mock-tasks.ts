import { Task } from './task';

export var TASKS: Task[] = [
    {
        status: 'active',
        title: 'example task 1',
        description: 'this is an example task',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
    }, {
        status: 'active',
        title: 'example subtask 1',
        description: 'the first subtask',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
    }, {
        status: 'active',
        title: 'example subtask 2',
        description: 'another subtask, dependent on subtask 1',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
    }, {
        status: 'active',
        title: 'exmple subtask 1,1',
        description: 'a tinier, simpler subtask, supporting subtask 1',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
    }, {
        status: 'active',
        title: 'example subtask 1,2',
        description: 'this is a suitable replacement for subtask 1,1',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
    }
]