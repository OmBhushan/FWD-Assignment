let a = parseInt(prompt("Enter a:"));
let b = parseInt(prompt("Enter b:"));
let c = parseInt(prompt("Enter c:"));

let s = 3 * a + b - 2 * c;

if (s < 0) {
    s = 0;
}

if (a + b + c > 50) {
    s -= 10;
}

let st;
if (s >= 60) {
    st = "PASS";
} else {
    st = "FAIL";
}

alert(s + ", " + st);