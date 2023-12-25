let blog = {
    name: "Random",
    content: "Something",
    author: "Someone",
    likes: 24,
    comments: false
};

console.log(blog);
console.log(typeof blog);

console.log(blog.name);
console.log(blog["content"]);

blog.author = "Me";
blog.likes = 21;
blog.comments = false;

let user1 = {
    userName: "jelenamatejic",
    age: 29,
    blogs: ["Naredba Grananja", "Nizovi", "Objekti"],
    nextAge: this.age + 1,
    login: function() {
        console.log("Ulogovani Ste");
        console.log(this);
    },
    logout: function() {
        console.log("Izlogovani Ste");
    },
    logBlog: function() {
        this.blogs.forEach(element => {
            console.log(element);
        });
    },
    hello: function() {
        return `Hello ${this.userName}.`;
    }
};
user1.login();
user1.logout();
user1.logBlog();
console.log(user1.hello());

console.log(this);

user1.blogs.forEach(blog => {
    document.write(`<p>${blog}</p>`)
});