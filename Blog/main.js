class Post {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.body = data.body;
        this.author_id = data.userId;
        this.author = this.get_user();
    }

}
async function get_posts(limit = 10) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${limit}`)
    let posts = await response.json();
    let tr = document.querySelector('tbody.main');
    for (const post of posts) {
        let td = `
    <tr>
    <td>${post.id}</td>
    <td>${post.title}</td>
    <td>${post.body}</td>
    <td>
        <button class="add" title="Add" data-toggle="tooltip">Add</i></button>
        <button class="edit" title="Edit" data-toggle="tooltip">Edit</button>
        <button class="delete" title="Delete" data-toggle="tooltip">Delete</button>
    </td>
</tr>`
        tr.innerHTML += td
    }

}
get_posts()
