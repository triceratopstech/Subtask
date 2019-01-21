# Subtask
Task management for any size project with an emphasis on breaking complex work into simple atomic tasks.
In early development.  This project is being used to train web development skills.  Feedback is welcome!

## Design philosophy

The Subtask design is based on the fact that every big, complicated job being made of a bunch of tiny, simple tasks.  When we plan out a big task, we usually want to split it into more manageable pieces.  But what happens when some of those pieces turn out to be way more complicated than we originally thought?

In most tools, this means simply adding more time to the estimate for the task, adding notes, maybe building some more task items and linking them all together somehow.  You can usually hack together some process to keep track of how this one task has turned into several, but in Subtask, that behavior is at the core of the design.  When a task reveals some hidden complexity, you split it into pieces.  It's easy to keep tasks to a manageable size, and a visual network of your tasks makes it easy to see their relationships with each other look back at sources of unexpected complexity at a glance.

## Relationships
More relationships may be added later or in branches.  The data model allows for easily adding relationship types.  These are the relationships currently represented in the model.

- **Subtask of:**    The core of the tool.  If A is a subtask of B, then completing task A is a neccessary part of completing task B.  Best practice is to divide a task wholly into subtasks so that completing all subtasks also completes the task, but this is not enforced by the system.

- **Prerequisite of:**  If A is a prerequisite of B, then B cannot progress until A is completed.  This is not enforced by the software (you can mark B complete even is A is not done) but is a visual quality of life tool to help find a quick answer when trying to figure out "What should I be working on right now?"

- **Substitute for:** If A is a substitue for B, completing task A makes task B unneccessary.  This is purposely not reflexive.


# auto-generated angular documentation:
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).