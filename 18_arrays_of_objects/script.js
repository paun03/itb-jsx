let arrObjBlogs = [
    {tittle: "AAA", 
    likes: 30, 
    dislikes: 3},

    {tittle: "BB", 
    likes: 25, 
    dislikes: 26},
    
    {tittle: "AAA", 
    likes: 50, 
    dislikes: 2}
];

let blog1 = {
    tittle: "IF Statment!",
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

let arrBlogs = [blog1, blog2, blog3];
console.log(arrBlogs);

console.log(arrBlogs[1]);

console.log(arrBlogs[1].tittle);

arrBlogs[1].tittle = "While";

for(let i = 0; i < arrBlogs.length; i++) {
    console.log(arrBlogs[i].tittle);
}

arrBlogs.forEach (e =>{
    console.log(e.likes);
});

// 1

let sumOfLikes = (a) => {
    let sum = 0;
    a.forEach(e => {
        sum += e.likes;
    });
    return sum;
};

console.log("START OF 1");
console.log(sumOfLikes(arrBlogs));

// 2

let avgLikes = (arr) => {
    let sum = sumOfLikes(arr);
    return sum / arr.length;
}

console.log("START OF 2");
console.log(avgLikes(arrBlogs));

// 3

let moreLikesThanDislikes = (arr) => {
    arr.forEach(o => {
        if (o.likes > o.dislikes) {
            console.log(o.tittle);
        }
    });
};

console.log("START OF 3");
moreLikesThanDislikes(arrBlogs);

// 4

let doubleMoreLikesThanDislikes = (arr) => {
    arr.forEach(o => {
        if (o.likes >= o.dislikes * 2) {
            console.log(o.tittle);
        }
    });
};

console.log("START OF 4");
doubleMoreLikesThanDislikes(arrBlogs);

// 5

let finishesWithExclamationMark = (arr) => {
    arr.forEach(o => {
            if (o.tittle[o.tittle.length - 1] === "!") {
                console.log(o.tittle);
            }
    });
};

console.log("START OF 5");
finishesWithExclamationMark(arrBlogs);