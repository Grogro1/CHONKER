let input = "21668 Anna Tykoví 7.56";
let insert = "PD-ES";
let insert2 = "PD-SIT";

Array.prototype.insert = function(index, ...items) {
    this.splice(index, 0, ...items);
};
//XXX - PD - ES - XXX - XXX - XXX;

inputArr = input.split(" ");
inputArr2 = input.split(" ");
inputArr.insert(1, insert);
inputArr2.insert(1, insert2);
inputArr = inputArr.join("-");
inputArr2 = inputArr2.join("-");
console.log(inputArr);
console.log(inputArr2);