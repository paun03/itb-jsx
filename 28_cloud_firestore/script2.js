class User {
    constructor(n, s, a) {
        this.name = n;
        this.surname= s;
        this.age= a;
    }
}

let branko = new User("Branko", "Milivojevic", 27);
branko.grad = "Paracin";

let ivan = new User("Ivan", "Stanimirovic", 37);
ivan.poreklo = "Leskovac";

db.collection("customers").doc("cust05")
.set(Object.assign({}, ivan))
.then(() => {
    console.log("Uspešno Dodat Korisink");
})
.catch(() => {
    console.log("Greška");  
})