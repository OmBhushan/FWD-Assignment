let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));

function isPal(n) {
    let s = String(n);
    let r = s.split("").reverse().join("");
    return s === r;
}

let res = -1;

for (let x = 0; x <= 100000; x++) {
    let v = N + x;
    if (isPal(v) && v % K === 0) {
        res = x;
        break;
    }
}

alert(res);