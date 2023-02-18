let a = [1,1,2,2];
let b = [1,3];

function arrayDiff(a, b) {
    b.forEach( (itemB) => {
    while (a.includes(itemB))
        a.splice(a.indexOf(itemB), 1);
    })
    return a;
}

console.log(arrayDiff(a, b));
console.log(false === false)