//implicit type conversion
let result;

result = "3" + 2;
console.log(result," - ",typeof(result));

result = "3" + null;
console.log(result, " - ",typeof(result));


//explicit type conversion

let res;
let num = "5";
console.log(num," - ",typeof(num));
res = Number(num);
console.log(num," - ",typeof(res));

res = String(true);
console.log(res, " - ", typeof(res));

res = Boolean(0);
console.log(res," - ",typeof(res));