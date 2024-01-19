localStorage.setItem("ime", "Stefan");
localStorage.setItem("grad", "Niš");

localStorage.setItem("grad", "Leskovac");

let ime = localStorage.getItem("ime");
console.log(ime);
console.log(localStorage.getItem("grad"));

console.log(localStorage.getItem("godine"));
localStorage.removeItem("grad");