import Auto from "./modules/auto.js";

let a1 = new Auto("Audi", "Bela", true);
console.log(a1);
a1.sviraj();

let a2 = new Auto("Peugeot", "Plava", false);
console.log(a2._marka);
console.log(a2._boja);
console.log(a2._imaKrov);
a2.sviraj();

a2.marka = "Citroen";
console.log(a2._marka);

a1.marka = "";
console.log(a1._marka);