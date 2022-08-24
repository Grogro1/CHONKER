inputField = document.querySelector("#input");
PDESButton = document.querySelector("#pd-es");
PDSITButton = document.querySelector("#pd-sit");

let input = "21668 Anna Tykoví 7.56";
let insert = "PD-ES";
let insert2 = "PD-SIT";

Array.prototype.insert = function(index, ...items) {
    this.splice(index, 0, ...items);
};
//XXX - PD - ES - XXX - XXX - XXX;

const PDConvert = (str, insert) => {
    console.log(str + insert);
    let outputStrArr;
    outputStrArr = str.split(" ");
    outputStrArr.insert(1, insert);
    outputStrArr = outputStrArr.join("-");

    return outputStrArr;
};

PDESButton.addEventListener("click", () => {
    console.dir(inputField.value);
    navigator.clipboard.writeText(PDConvert(inputField.value, "PD-ES"));
});

PDSITButton.addEventListener("click", () => {
    console.dir(inputField.value);
    navigator.clipboard.writeText(PDConvert(inputField.value, "PD-SIT"));
});