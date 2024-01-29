console.log(db);

let users = db.collection("col");
console.log(users);

let d1 = users.doc("milanpaunovic");
console.log(d1);

let d2 = db.doc("users/milanpaunovic");
console.log(d2);

/* 
CRUD - Create, Read, Set, Delete

doc.set() => Create
doc.get() => Read
doc.update() => Update
doc.delete() => Delete

*/

// 1. Create (Set)
let cust1 = {
    name: "Mika",
    age: 38,
    addresses: ["Street 1", "Street 2"],
    salary: 400.60
};

db.collection("customers").doc("cust1")
.set(cust1)

