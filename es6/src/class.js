class Task {
    constructor(title = Task.getDefaultTitle()){
        this.title = title;
        this._done = false;
        Task.count += 1;
        console.log('Run constructor');
        console.log(this.title);
    }
    get done(){
        return (this._done === true ? 'Done' : 'Not done');
    }
    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.log('Error. Set true or false');
        }
    }
    complite(){
        this.done = true;
        console.log(`Done ${this.title}`);
    }
    static getDefaultTitle() {
        return ('New task');
    }
}

// Static var
Task.count = 0;

let task = new Task();

console.log(task);

task.complite();
