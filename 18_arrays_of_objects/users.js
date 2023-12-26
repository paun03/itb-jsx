let blog1 = {
    tittle: "IF Statement",
    likes: 50,
    dislikes: 21
};

let blog2 = {
    tittle: "While Loop",
    likes: 25,
    dislikes: 36
};

let blog3 = {
    tittle: "For Loop",
    likes: 100,
    dislikes: 12
};

let user1 = {
    username: "JelenaMatejić",
    age: 29,
    blogs:[blog1, blog3],
    logBlogs: function() {
        console.log(this.blogs);
    }
};

let user2 = {
    username: "StefanStanimirović",
    age: 34,
    blogs: [blog2],
    logBlogs: function() {
        console.log(this.blogs);
    }
};

console.log(user1.blogs[0]);
console.log(user1.blogs[0].tittle);

user1.logBlogs();
user2.logBlogs();

console.log("START OF 1");

// 1

let users = [user1, user2];

// 1.1

users.forEach(u => {
    console.log(u.username);
});

// 1.2

users.forEach(u =>{
    u.logBlogs();
});

// 1.3

users.forEach(u => {
    let userBlogs = u.blogs;
    userBlogs.forEach(b => {
        console.log(b.tittle);
    });
});


// 2

console.log("START OF 2");

users.forEach(u => {
        if (u.age < 18) {
            console.log(u.username);
        }
    });

// 3

console.log("START OF 3");

users.forEach(u => {
    u.blogs.forEach(b => {
        if (b.likes > 50) {
            console.log(b.tittle);
        }
    });
});

// 4

console.log("START OF 4");

users.forEach(u => {
    if (u.username === "JohnDoe") {
        console.log(u.blogs);
    }
});

// 5

console.log("START OF 5");

users.forEach(u => {
    let sumOfLikes = 0;
    u.blogs.forEach(b => {
        sumOfLikes += b.likes;
    });
    if (sumOfLikes > 100) {
        console.log(u.username);
    }
});

// 6

console.log("START OF 6");

users.forEach(u => {
    let sumOfLikes = 0;
    let counter = 0;

    u.blogs.forEach(b => {
        sumOfLikes += b.likes;
        counter++;
    });

    let average = sumOfLikes / counter;

    u.blogs.forEach(b => {
        if (b.likes > average) {
            console.log(b.tittle); 
        }
    });
});

// 7

console.log("START OF 7");

users.forEach(u => {
    let sumOfLikes = 0;
    let sumOfDislikes = 0;
    let averageLikes = 0;
    let averageDislikes = 0;
    let counter = 0;

    u.blogs.forEach(b => {
        sumOfLikes += b.likes;
        sumOfDislikes += b.dislikes;
        counter++;
        console.log(sumOfLikes);
    });

    averageLikes = sumOfLikes / counter;
    averageDislikes = sumOfDislikes / counter;

    u.blogs.forEach(b => {
        if (b.likes > averageLikes && b.dislikes < averageDislikes) {
            console.log(b.tittle);
        }
    });
});

