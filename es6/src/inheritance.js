class Task {
    constructor(title){
        this.title = title;
        this.done = false;
        console.log('Run Task');
    }
    complete() {
        this.done = true;
        console.log(`Task ${this.title} done`);
    }
}

class SubTask extends Task {
    constructor(title, parent) {
        super(title); // run parent constructor
        this.parent = parent;
        console.log('Run SubTask');
    }
    complete() {
        super.complete();
        console.log(`SubTask ${this.title} done`);
    }
}

let task = new Task('Learn JS');

let subtask = new SubTask('Learn ES6', task);

//
// console.log(task);
// console.log(subtask);

task.complete();
subtask.complete();
