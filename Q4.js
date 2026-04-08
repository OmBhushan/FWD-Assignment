let b = parseInt(prompt("Enter base:"));
let d = parseInt(prompt("Enter distance:"));
let ml = parseInt(prompt("Enter minutesLate:"));
let s = parseInt(prompt("Enter seed:"));

let f = b + 7 * d;

if (ml > 15) {
    f += 20;
}

if (d > 10) {
    f += Math.floor(f * 0.10);
}

if (s % 2 === 1) {
    f -= s;
} else {
    f += s;
}

f = Math.ceil(f / 5) * 5;

alert(f);