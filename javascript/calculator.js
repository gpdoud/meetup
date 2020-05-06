
const calc = () => {
    let op1 = Number(getOpVal("op1"));
    let op2 = Number(getOpVal("op2"));
    let op = Number(getOp("op"));

    let ans = doOp(op1, op, op2);
    console.log(ans);
    setAns(ans);
}
const setAns = (ans) => {
    document.getElementById("ans").innerText = ans;
}
const getOpVal = (id) => {
    return document.getElementById(id).value;
}
const getOp = (sel) => {
    let select = document.getElementById(sel);
    return select.options[select.selectedIndex].value;
}
const doOp = (op1, op, op2) => {
    switch(op) {
        case 0: return op1 + op2;
        case 1: return op1 - op2;
        case 2: return op1 * op2;
        case 3: return op1 / op2;
    }
}