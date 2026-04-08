let N = parseInt(prompt("Enter N:"));
let s = parseInt(prompt("Enter seed:"));

let cur = N;

for (let i = 0; i < 3; i++) {
    if (cur % 2 === 0) {
        cur = Math.floor(cur / 2) + s;
    } else {
        cur = cur * 3 - s;
    }
}

let ans = "NO";

if (cur >= 100 && cur <= 999) {
    let md = Math.floor(cur / 10) % 10;
    if (md === s) {
        ans = "YES";
    }
}

alert(ans + ", " + cur);