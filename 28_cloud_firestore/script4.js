// db.collection("customers")
// .orderBy("name", "desc")
// .orderBy("age", "asc")
// .limit(2)
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     })
// })
// .catch(e => {
//     console.log(e);
// })

// db.collection("customers")
// .where("salary", ">=", 100)
// .where("salary", "<=", 1000)
// .where("age", "==", 38)
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     })
// })
// .catch(e => {
//     console.log(e);
// })

// db.collection("customers")
// .where("age", "in", [25, 26, 38])
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     })
// })
// .catch(e => {
//     console.log(e);
// })

// let date = new Date();
// let year = date.getFullYear();

// let yearStart = new Date(year, 0, 1);
// let yearEnd = new Date(year + 1, 0, 1);

// let ts1 = firebase.firestore.Timestamp.fromDate(yearStart);
// let ts2 = firebase.firestore.Timestamp.fromDate(yearEnd);

// db.collection("tasks")
// // 1
// // .where("priority", "==", true)
// // 2
// .where("startDate", ">=", ts1)
// .where("dueDate", "<", ts2)
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     })
// })
// .catch(e => {
//     console.log(e);
// })

// 3

db.collection("movies")
// 1
// .where("director.name", "==", "Martin")
// .where("director.surname", "==", "Scorsese")
// 2
// .where("rating", "<", 10)
// .where("rating", ">", 5)
// 3
// .where("genres", "array-contains-any", ["Mystery".toLowerCase(), "Action".toLowerCase()])
// 4
// .where("release_year", ">", 2000)
// .where("release_year", "<=", 2100)
// 5
// .orderBy("rating", "desc")
// .limit(1)
// 6
.orderBy("rating", "asc")
.limit(1)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    })
})