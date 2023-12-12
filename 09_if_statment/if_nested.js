// 12

let num1 = 12;
let num2 = 15;

if (num1 > num2) {
    console.log("Veći Broj Je: " + num1 + " A Manji Broj Je: " + num2);
    if(num1 % 2 == 0) {
        console.log("Veći Broj Je Paran");
    } else {
        console.log("Veći Broj Nije Paran");
    }

    if (num2 % 3 == 0) {
        console.log("Manji Broj Je Deljiv sa 3");
    } else { 
        console.log("Manji Broj Nije Deljiv sa 3");
    }
} else {
    if (num1 < num2) {
        console.log("Veći Broj Je: " + num2 + " A Manji Broj Je: " + num1);
        if(num2 % 2 == 0) {
            console.log("Veći Broj Je Paran");
        } else {
            console.log("Veći Broj Nije Paran");
        }
    
        if (num1 % 3 == 0) {
            console.log("Manji Broj Je Deljiv sa 3");
        } else { 
            console.log("Manji Broj Nije Deljiv sa 3");
        }
    }
} 


// 12.1

num1 = 15;
num2 = 19;

let bigger = num1;

if (num2 > bigger) {
    bigger = num1;
}

let smaller = num1 + num2 - bigger;

if (bigger % 2 == 0) {
    console.log("Veći Broj Je Paran");
} else {
    console.log("Veći Broj NIJE Deljiv Sa 2");
}

if (smaller % 3 == 0) {
    console.log("Manji Broj Je Deljiv sa 3");
} else {
    console.log("Manji Broj NIJE Deljiv sa 3");
}


// 13

let d1 = 1;
let m1 = 11;
let y1 = 2022;

let d2 = 1;
let m2 = 11;
let y2 = 2022;

if (y1 > y2) {

    console.log(d1, m1, y1);
}
    else if (m1 > m2) {

        console.log(d1, m1, y1);  
    }
    
    else if (d1 > d2) {

        console.log(d1, m1, y1);

    } else {

if (y1 < y2) {

    console.log(d2, m2, y2);
        }
        else if (m1 < m2) {

            console.log(d2, m2, y2);  
        }
        
        else if (d1 < d2) {

            console.log(d2, m2, y2); 

        } else {

            console.log("Datum Je Identičan");
    }
}



// 14

let g = "s";
let age = 17;

if (g == "m") 
{
    if (age >= 18) {
        console.log("Muško, Punoletan");
    }
    else {
        console.log("Muško, Maloletan");
    } 
}

else if (g == "ž") 
{
    if (age >= 18) {
        console.log("Žensko, Punoletna");
    }
    else {
        console.log("Žensko, Maloletna");
    }
}

else {
    console.log("Nevalidan Pol");
}