import NewTask from './tasks_class.js';
import {
    get_all,
    get_all_By_userId,
    get_by_id,
    add_new,
    updating,
    delete_todo
} from './api.js'


let newTask = new NewTask();
// console.log(newTask.Task[0])
// newTask.get_data()

document.addEventListener("DOMContentLoaded", function(e) {
    let add_new = document.querySelector('.add-new');
    let table = document.querySelector('.table tbody');

    let task_num = document.querySelector('.task_num');
    let tasksContainer = document.querySelector(".tasks-content"); //
    let tasksCount = document.querySelector(".tasks-count span");
    let tasksCompleted = document.querySelector(".tasks-completed span");
    let taskBox = document.querySelectorAll('.tasks-content .task-box');


    document.addEventListener('click', (e) => {

        // Add New Task
        if (e.target.classList.contains('add-new')) {
            e.target.setAttribute('disabled', 'disabled');

            let tr = document.createElement('tr');
            tr.setAttribute('class', 'input_fields');

            let td_num = document.createElement('td')
            td_num.innerHTML = ''

            let td_task = document.createElement('td');
            let td_input_task = document.createElement('input');
            td_input_task.setAttribute('type', 'text');
            td_input_task.setAttribute('class', 'form-control');
            td_input_task.setAttribute('name', 'task');
            td_input_task.setAttribute('id', 'task');
            td_task.appendChild(td_input_task);

            let td_deadline = document.createElement('td');
            let td_input_deadline = document.createElement('input');
            td_input_deadline.setAttribute('type', 'checkbox');
            td_input_deadline.setAttribute('class', 'form-control');
            td_input_deadline.setAttribute('name', 'completed');
            td_input_deadline.setAttribute('id', 'completed');
            td_deadline.appendChild(td_input_deadline);

            // Add Action Links
            let td_actions = document.createElement('td');
            let a_add = document.createElement('a');
            a_add.setAttribute('class', 'add');
            a_add.setAttribute('type', 'button')
            a_add.setAttribute('title', 'Add');
            a_add.setAttribute('data-toggle', 'tooltip');
            a_add.innerHTML = '<i class ="material-icons"> &#xE03B;</i>';
            a_add.style.display = 'inline-block';
            // a_add.onclick = add_text_fields;
            td_actions.appendChild(a_add);

            let a_edit = document.createElement('a');
            a_edit.setAttribute('class', 'edit');
            a_edit.setAttribute('title', 'Edit');
            a_edit.setAttribute('data-toggle', 'tooltip');
            a_edit.innerHTML = '<i class="material-icons">&#xE254;</i>'
            a_edit.style.display = 'none';
            td_actions.appendChild(a_edit);

            let a_delete = document.createElement('a');
            a_delete.setAttribute('class', 'delete');
            a_delete.setAttribute('title', 'Delete');
            a_delete.setAttribute('data-toggle', 'tooltip');
            a_delete.innerHTML = '<i class="material-icons">&#xE872;</i>'
            td_actions.appendChild(a_delete);


            tr.appendChild(td_num);
            tr.appendChild(td_task);
            tr.appendChild(td_deadline);
            tr.appendChild(td_actions);

            table.appendChild(tr);
        }
        // Add Action
        if (e.target.closest('.add')) {
            let empty = false;
            let input = document.querySelectorAll('.input_fields input');
            for (const val of input) {
                if (!val.value) {
                    val.classList.add('error');
                    empty = true;
                } else {
                    val.classList.remove('error');
                }
            }
            if (!empty) {
                let todo = { 'userId': 1, 'title': input[0].value, 'completed': input[1].checked }

                fetch(`https://jsonplaceholder.typicode.com/todos`, {
                        method: 'POST',
                        body: JSON.stringify({
                            title: todo.title,
                            completed: todo.completed,
                            userId: todo.userId,
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    }).then((response) => response.json())
                    .then((data) => {
                        newTask.add_task(data.userId, data.id, data.title, data.completed);
                    })


                // 
                add_new.removeAttribute('disabled')
            }
        }
        // Check Number Of Tasks inside the Container
        if (tasksContainer.childElementCount == 0) {
            createNoTasks();
        }
        // Edit Action
        if (e.target.closest('.edit')) {
            let td_el = e.target.closest("tr").querySelectorAll('td:not(:first-child):not(:last-child)');

            // el.contentEditable = "true"; to update text direct in TD

            let input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('class', 'form-control');
            input.setAttribute('value', td_el[0].innerHTML);
            td_el[0].innerHTML = ''
            td_el[0].appendChild(input);

            let input_checked = document.createElement('input');
            input_checked.setAttribute('type', 'checkbox');
            input_checked.setAttribute('class', 'form-control');
            input_checked.checked = td_el[1].innerText == 'true' ? true : '';
            td_el[1].innerHTML = ''
            td_el[1].appendChild(input_checked);

            let update = e.target.closest('td').querySelector('.update');
            update.style.display = update.style.display === 'inline-block' ? 'none' : 'inline-block';
            let edit = e.target.closest('td').querySelector('.edit');
            edit.style.display = edit.style.display === 'none' ? 'inline-block' : 'none';
        }

        // Update Action
        if (e.target.closest('.update')) {
            let empty = false;
            let input_first = e.target.closest("tr").querySelectorAll('td');
            let input = e.target.closest("tr").querySelectorAll('td input');
            for (const val of input) {
                if (!val.value) {
                    val.classList.add('error');
                    empty = true;
                } else {
                    val.classList.remove('error');
                }
            }
            if (!empty) {
                let todo = { 'userId': 1, 'id': input_first[0].innerHTML, 'title': input[0].value, 'completed': input[1].checked }

                fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
                        method: 'PUT',
                        body: JSON.stringify({
                            title: todo.title,
                            completed: todo.completed,
                            userId: todo.userId,
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    }).then((response) => response.json())
                    .then((data) => {
                        newTask.update_task(data.userId, data.id, data.title, data.completed);
                    }).catch(Error => console.log(Error))
                    // newTask.update_task(input_first[0].innerHTML, input[0].value, input[1].value);
                add_new.removeAttribute('disabled')
            }
        }

        // Delete Action
        if (e.target.closest('.delete')) {
            let tr_el = e.target.closest("tr").querySelector('td:first-child').innerHTML;
            if (!tr_el) {
                e.target.closest("tr").remove();
                add_new.removeAttribute('disabled', 'disabled');
            } else {
                newTask.delete_task(tr_el)
            }
        }
        // Delete All Tasks
        if (e.target.classList.contains('del-all')) {
            // Remove All Tasks
            document.querySelectorAll('.tasks-content .task-box').forEach(e =>
                newTask.delete_task(e.firstChild.innerText));
        }
        // Finish Task
        if (e.target.closest('.task-box')) {
            // Toggle Class 'finished'
            e.target.parentNode.classList.toggle("finished");
        }
        // Finish All Tasks
        if (e.target.classList.contains('fin-all')) {
            if (e.target.innerHTML === 'FinishAll') {
                document.querySelectorAll('.tasks-content .task-box').forEach((el, i) => {
                    el.classList.toggle('finished');
                });
                e.target.innerHTML = 'UnFinnishAll';
            } else {
                document.querySelectorAll('.tasks-content .task-box').forEach((el, i) => {
                    el.classList.toggle('finished');
                });
                e.target.innerHTML = 'FinishAll';
            }
        }
        // Calculate Tasks
        console.log(newTask.calculateTasks());
    })

    // Function To Create No Tasks Message
    function createNoTasks() {

        // Create Message Span Element
        let msgSpan = document.createElement("span");

        // Creat The Text Message
        let msgText = document.createTextNode("No Tasks To Show");

        // Add Text to Message Span Element
        msgSpan.appendChild(msgText);

        // Add Class to Span
        msgSpan.classList = 'no-tasks-message';

        // Append The Message Span Element to the Task Container
        tasksContainer.appendChild(msgSpan);

    }

    // Function To Calculate Tasks
    // function calculateTasks() {
    //     // calculate All Tasks
    //     tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    //     // Calculate Completed Tasks
    //     tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .task-box.finished').length;
    // }

})

get_data_groupBy_userId()

async function get_data_groupBy_userId() {
    let task_num = document.querySelector('.task_num');
    let task_total = document.querySelector('.task_total');
    var repos = await get_all()

    let result = repos.reduce((acc, obj) => {
        let key = obj.userId;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {})
    task_num.innerHTML = result[1].length;
    task_total.innerHTML = repos.length;
}

function get_data() {
    let task_num = document.querySelector('.task_num');
    get_all_By_userId(userId = 1).then((repo) => {
            repo.forEach((d, i) => {
                newTask.tasks.push(new Task(d.userId, d.id, d.title, d.completed))
            })
            newTask.set_layout();
            return repo;
        })
        // .then((repos) => {
        //     task_num.innerHTML = repos.length;
        // })
}