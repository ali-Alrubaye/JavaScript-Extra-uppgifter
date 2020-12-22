class Person {
    // Static Properties
    static counter = 1;
    constructor(name, mail, age) {
        this.id = Person.counter++;
        this.name = name;
        this.mail = mail;
        this.age = age;
    }
}
class Address {
    constructor() {
        this.person = [];

    }
    add_person(name, mail, age) {
        let p = new Person(name, mail, age);
        this.person.push(p);
        this.set_layout();
    }
    update_person(id, name, mail, age) {
        this.person.forEach((p, index, array) => {
            if (p.id == id) {
                array[index].name = name;
                array[index].mail = mail;
                array[index].age = age;
            }
        })
        this.set_layout();
    }
    delete_person(id) {
        let index = this.person.map((item) => item.id).indexOf(id);
        if (index == -1) {
            this.person.splice(index, 1);
        }
        this.set_layout();
    }
    set_layout() {
        let table = document.querySelector('.table tbody');
        if (this.person.length > 0) {
            table.innerHTML = ''
            this.person.forEach(p => {
                let tr = document.createElement('tr');

                let td_num = document.createElement('td')
                td_num.innerHTML = p.id

                let td_name = document.createElement('td');
                let td_text_name = document.createTextNode(p.name);
                td_name.appendChild(td_text_name);

                let td_mail = document.createElement('td');
                let td_text_mail = document.createTextNode(p.mail);
                td_mail.appendChild(td_text_mail);

                let td_age = document.createElement('td');
                let td_text_age = document.createTextNode(p.age);
                td_age.appendChild(td_text_age);

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


                tr.appendChild(td_num);
                tr.appendChild(td_name);
                tr.appendChild(td_mail);
                tr.appendChild(td_age);
                tr.appendChild(td_actions);

                table.appendChild(tr);
            })
        } else {
            let tr = document.createElement('tr');
            let td = document.createElement('h1')
            td.innerHTML = 'Empty';
            tr.appendChild(td)
            table.innerHTML = ''
            table.appendChild(tr)
        }
    }
}

let newAddress = new Address();
newAddress.add_person('Kalle', 'kalle@k.se', 22);
newAddress.add_person('Ali', 'ali@ali.se', 42);
newAddress.add_person('Dj', 'li@ali.se', 2);
// console.log(newAddress.person[0])
document.addEventListener("DOMContentLoaded", function(e) {
    let add_new = document.querySelector('.add-new');
    let table = document.querySelector('.table tbody');

    add_new.addEventListener('click', (e) => {
        e.target.setAttribute('disabled', 'disabled');

        let tr = document.createElement('tr');
        tr.setAttribute('class', 'input_fields');

        let td_num = document.createElement('td')
        td_num.innerHTML = ''

        let td_name = document.createElement('td');
        let td_input_name = document.createElement('input');
        td_input_name.setAttribute('type', 'text');
        td_input_name.setAttribute('class', 'form-control');
        td_input_name.setAttribute('name', 'name');
        td_input_name.setAttribute('id', 'name');
        td_name.appendChild(td_input_name);

        let td_mail = document.createElement('td');
        let td_input_mail = document.createElement('input');
        td_input_mail.setAttribute('type', 'text');
        td_input_mail.setAttribute('class', 'form-control');
        td_input_mail.setAttribute('name', 'mail');
        td_input_mail.setAttribute('id', 'mail');
        td_mail.appendChild(td_input_mail);

        let td_age = document.createElement('td');
        let td_input_age = document.createElement('input');
        td_input_age.setAttribute('type', 'text');
        td_input_age.setAttribute('class', 'form-control');
        td_input_age.setAttribute('name', 'age');
        td_input_age.setAttribute('id', 'age');
        td_age.appendChild(td_input_age);

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
        tr.appendChild(td_name);
        tr.appendChild(td_mail);
        tr.appendChild(td_age);
        tr.appendChild(td_actions);

        table.appendChild(tr);
    })

    document.addEventListener('click', function(e) {
        // Add Action
        if (e.target.parentNode.classList == 'add') {
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
                console.log(input[0].value)
                newAddress.add_person(input[0].value, input[1].value, input[2].value);
                add_new.removeAttribute('disabled')
            }
        }
        // Edit Action
        if (e.target.parentNode.classList == 'edit') {
            let td_el = e.target.closest("tr").querySelectorAll('td:not(:first-child):not(:last-child)');
            for (const el of td_el) {
                let input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.setAttribute('class', 'form-control');
                input.setAttribute('value', el.innerHTML);
                el.innerHTML = ''
                el.appendChild(input);
            }
            let update = e.target.closest('td').querySelector('.update');
            update.style.display = update.style.display === 'inline-block' ? 'none' : 'inline-block';
            let edit = e.target.closest('td').querySelector('.edit');
            edit.style.display = edit.style.display === 'none' ? 'inline-block' : 'none';
        }

        // Update Action
        if (e.target.parentNode.classList == 'update') {
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
                newAddress.update_person(input_first[0].innerHTML, input[0].value, input[1].value, input[2].value);
                add_new.removeAttribute('disabled')
            }
        }

        // Delete Action
        if (e.target.parentNode.classList == 'delete') {
            let tr_el = e.target.closest("tr").querySelector('td:first-child').innerHTML;
            newAddress.delete_person(tr_el)
        }
    })
})