const get_all = async() => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    let data = await response.json();
    return data;
}
const get_all_By_userId = async(userId) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then((response) => response.json());
    return response;
}
async function get_by_id(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    let data = await response.json()
    return data;
}
async function add_new(todo) {
    console.log(todo)
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
        method: 'POST',
        body: JSON.stringify({
            title: todo.title,
            completed: todo.completed,
            userId: todo.userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    let data = await response.json()
    return data;
}
async function updating(todo) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: todo.title,
            body: todo.body,
            userId: todo.userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'PUT',
        body: JSON.stringify({
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
            userId: todo.userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await response.json()
    return data;
}
async function patching(todo) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: todo.title,
            body: todo.body,
            userId: todo.userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    let data = await response.json()
    return data;
}
async function delete_todo(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
    });
    let data = await response.json()
    return data;
}

export {
    get_all,
    get_all_By_userId,
    get_by_id,
    add_new,
    updating,
    delete_todo
}