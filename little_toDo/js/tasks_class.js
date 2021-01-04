import {
    get_all,
    get_all_By_userId,
    get_by_id,
    add_new,
    updating,
    delete_todo
} from './api.js';


class Task {
    constructor(userId, id, title, completed) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}
export default class TaskGrid {
    constructor() {
        this.tasks = [];
        this.get_data();
    }
    add_task(userId, id, title, completed) {
        let p = new Task(userId, id, title, completed);
        this.tasks.push(p);
        this.set_layout();
    }
    get_data() {
        get_all_By_userId(1).then((repo) => {
            repo.forEach((d, i) => {
                this.tasks.push(new Task(d.userId, d.id, d.title, d.completed))
            })
            this.set_layout();
        })
    }
    update_task(userId, id, title, completed) {
        this.tasks.forEach((p, index, array) => {
            if (p.id == id) {
                array[index].title = title;
                array[index].completed = completed;
            }
        })
        this.set_layout();
    }
    delete_task(id) {
        // let filtered = this.tasks.filter(function(el) { return el.id == id; });
        let index = this.tasks.map((item) => { return item.id }).indexOf(Number(id));

        if (index - 1) {
            this.tasks.splice(index, 1);
        }
        // delete_todo(id).then(resp => console.log(resp))
        this.set_layout();
    }
    set_layout() {
        let table = document.querySelector('.table tbody');
        if (this.tasks.length > 0) {
            table.innerHTML = ''
            this.tasks.forEach(p => {
                let tr = document.createElement('tr');
                tr.setAttribute('class', 'task-box')

                let td_id = document.createElement('td')
                td_id.innerHTML = p.id

                let td_title = document.createElement('td');
                let td_text_task = document.createTextNode(p.title);
                td_title.appendChild(td_text_task);

                let td_completed = document.createElement('td');
                let td_text_deadline = document.createTextNode(p.completed);
                td_completed.appendChild(td_text_deadline);

                let td_actions = document.createElement('td');
                let a_add = document.createElement('a');
                a_add.setAttribute('class', 'add');
                a_add.setAttribute('type', 'button')
                a_add.setAttribute('title', 'Add');
                a_add.setAttribute('data-toggle', 'tooltip');
                a_add.innerHTML = '<i class ="material-icons"> &#xE03B;</i>';
                td_actions.appendChild(a_add);


                let a_update = document.createElement('a');
                a_update.setAttribute('class', 'update');
                a_update.setAttribute('type', 'button')
                a_update.setAttribute('title', 'Update');
                a_update.setAttribute('data-toggle', 'tooltip');
                a_update.innerHTML = '<i class ="material-icons"> &#xE03B;</i>';
                td_actions.appendChild(a_update);

                let a_edit = document.createElement('a');
                a_edit.setAttribute('class', 'edit');
                a_edit.setAttribute('title', 'Edit');
                a_edit.setAttribute('data-toggle', 'tooltip');
                a_edit.innerHTML = '<i class="material-icons">&#xE254;</i>'

                td_actions.appendChild(a_edit);

                let a_delete = document.createElement('a');
                a_delete.setAttribute('class', 'delete');
                a_delete.setAttribute('title', 'Delete');
                a_delete.setAttribute('data-toggle', 'tooltip');
                a_delete.innerHTML = '<i class="material-icons">&#xE872;</i>'
                td_actions.appendChild(a_delete);


                tr.appendChild(td_id);
                tr.appendChild(td_title);
                tr.appendChild(td_completed);
                tr.appendChild(td_actions);

                table.appendChild(tr);
            })
        } else {
            let tr = document.createElement('tr');
            let span = document.createElement('span')
            span.innerHTML = 'No Tasks To Show';
            tr.appendChild(span)
            table.innerHTML = ''
            table.appendChild(tr)
        }
        this.calculateTasks();
    }
    calculateTasks() {
        let tasksCount = document.querySelector(".tasks-count span");
        let tasksCompleted = document.querySelector(".tasks-completed span");
        // calculate All Tasks
        tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

        // Calculate Completed Tasks
        tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .task-box.finished').length;
    }
}
// let newTask = new TaskGrid();