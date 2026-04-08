let N = parseInt(prompt("Enter N:"));
let s = parseInt(prompt("Enter seed:"));

let d = s + 2;
let sm = 0;
let m = 0;

while (sm < N) {
    m++;
    if (m % d !== 0) {
        sm += m;
    }
}

alert(m + " " + sm);