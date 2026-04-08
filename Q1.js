let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));

function isPr(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function hasZ(n) {
    while (n > 0) {
        if (n % 10 === 0) return true;
        n = Math.floor(n / 10);
    }
    return false;
}

function digSum(n) {
    let s = 0;
    while (n > 0) {
        s += n % 10;
        n = Math.floor(n / 10);
    }
    return s;
}

let cnt = 0;

for (let x = L; x <= R; x++) {
    if (x % K === 0 && !hasZ(x)) {
        let s = digSum(x);
        if (isPr(s)) {
            cnt++;
        }
    }
}

alert(cnt);